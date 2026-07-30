/**
 * app.js — Computer Quiz Part 2
 * ---------------------------------------------------------------------
 * Application logic for Part 2 of the Computer Quiz PWA (Fill in the
 * Blanks + Abbreviations). Handles: screen navigation, quiz state,
 * localStorage persistence, rendering, scoring, review mode, and the
 * PWA install prompt.
 *
 * Depends on `QUIZ_QUESTIONS` / `QUIZ_META`, defined in quiz.js (loaded
 * before this file in index.html).
 * ---------------------------------------------------------------------
 */

(function () {
  'use strict';

  /* ============================ Constants ============================ */

  var STORAGE_KEY = 'computerQuizPart2.progress.v1';
  var TOTAL = QUIZ_QUESTIONS.length;

  /* ============================ App state ============================= */

  var state = {
    currentIndex: 0,                       // 0-based index into QUIZ_QUESTIONS
    answers: new Array(TOTAL).fill(''),    // '' = unattempted, else typed text
    submitted: false,
    startedAt: null,
    submittedAt: null
  };

  var reviewFilter = 'all';
  var deferredInstallPrompt = null;

  /* ============================ DOM refs =============================== */

  var dom = {
    // screens
    screenHome: document.getElementById('screen-home'),
    screenQuiz: document.getElementById('screen-quiz'),
    screenResult: document.getElementById('screen-result'),
    screenReview: document.getElementById('screen-review'),

    // home
    statTotal: document.getElementById('stat-total'),
    statFill: document.getElementById('stat-fill'),
    statAbbr: document.getElementById('stat-abbr'),
    btnStart: document.getElementById('btn-start'),
    btnContinue: document.getElementById('btn-continue'),
    continueMeta: document.getElementById('continue-meta'),
    btnInstall: document.getElementById('btn-install'),

    // quiz
    btnQuit: document.getElementById('btn-quit'),
    qCurrent: document.getElementById('q-current'),
    qTotal: document.getElementById('q-total'),
    qTypeBadge: document.getElementById('q-type-badge'),
    progressFill: document.getElementById('progress-fill'),
    progressTrack: document.getElementById('progress-track'),
    questionText: document.getElementById('question-text'),
    answerInput: document.getElementById('answer-input'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    btnSubmit: document.getElementById('btn-submit'),

    // palette
    btnPaletteToggle: document.getElementById('btn-palette-toggle'),
    btnPaletteClose: document.getElementById('btn-palette-close'),
    paletteOverlay: document.getElementById('palette-overlay'),
    paletteDrawer: document.getElementById('palette-drawer'),
    paletteGrid: document.getElementById('palette-grid'),
    btnSubmitPalette: document.getElementById('btn-submit-palette'),

    // result
    resultRingFill: document.getElementById('result-ring-fill'),
    resultPercentage: document.getElementById('result-percentage'),
    resultScore: document.getElementById('result-score'),
    resultTotal: document.getElementById('result-total'),
    resultCorrect: document.getElementById('result-correct'),
    resultWrong: document.getElementById('result-wrong'),
    resultSkipped: document.getElementById('result-skipped'),
    btnReview: document.getElementById('btn-review'),
    btnRestart: document.getElementById('btn-restart'),

    // review
    btnReviewBack: document.getElementById('btn-review-back'),
    reviewFilters: document.getElementById('review-filters'),
    reviewList: document.getElementById('review-list')
  };

  /* ============================ Answer normalization ==================== */

  // Case-insensitive, whitespace-trimmed/collapsed comparison so that
  // typed answers aren't penalized for capitalization or stray spaces.
  function normalize(str) {
    return String(str || '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');
  }

  function isAnswered(index) {
    return normalize(state.answers[index]).length > 0;
  }

  function isCorrect(index) {
    return normalize(state.answers[index]) === normalize(QUIZ_QUESTIONS[index].answer);
  }

  /* ============================ Persistence ============================ */

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // Storage may be unavailable (private mode / quota) — fail silently.
    }
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.answers) || parsed.answers.length !== TOTAL) {
        return null;
      }
      return parsed;
    } catch (e) {
      return null;
    }
  }

  function clearState() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) { /* ignore */ }
  }

  /* ============================ Screen switching ======================= */

  function showScreen(name) {
    [dom.screenHome, dom.screenQuiz, dom.screenResult, dom.screenReview].forEach(function (el) {
      el.classList.remove('is-active');
    });
    var map = {
      home: dom.screenHome,
      quiz: dom.screenQuiz,
      result: dom.screenResult,
      review: dom.screenReview
    };
    map[name].classList.add('is-active');
    window.scrollTo(0, 0);
  }

  /* ============================ Home screen ============================ */

  function renderHome() {
    dom.statTotal.textContent = QUIZ_META.total;
    dom.statFill.textContent = QUIZ_META.fillCount;
    dom.statAbbr.textContent = QUIZ_META.abbrCount;

    var saved = loadState();
    if (saved) {
      var answeredCount = saved.answers.filter(function (a) { return normalize(a).length > 0; }).length;
      dom.btnContinue.classList.remove('is-hidden');
      dom.continueMeta.textContent = saved.submitted
        ? '(view result)'
        : '(' + answeredCount + '/' + TOTAL + ' answered)';
    } else {
      dom.btnContinue.classList.add('is-hidden');
    }
  }

  function startFreshQuiz() {
    state = {
      currentIndex: 0,
      answers: new Array(TOTAL).fill(''),
      submitted: false,
      startedAt: Date.now(),
      submittedAt: null
    };
    saveState();
    showScreen('quiz');
    renderQuestion();
    renderPalette();
  }

  function continueQuiz() {
    var saved = loadState();
    if (!saved) {
      startFreshQuiz();
      return;
    }
    state = saved;
    if (state.submitted) {
      var results = computeResults();
      renderResult(results);
      showScreen('result');
    } else {
      showScreen('quiz');
      renderQuestion();
      renderPalette();
    }
  }

  /* ============================ Quiz rendering ========================== */

  function currentQuestion() {
    return QUIZ_QUESTIONS[state.currentIndex];
  }

  function renderQuestion() {
    var q = currentQuestion();

    dom.qCurrent.textContent = state.currentIndex + 1;
    dom.qTotal.textContent = TOTAL;
    dom.qTypeBadge.textContent = q.type === 'fill' ? 'Fill in the Blank' : 'Abbreviation';
    dom.questionText.textContent = q.question;

    dom.answerInput.value = state.answers[state.currentIndex] || '';
    dom.answerInput.classList.toggle('has-value', isAnswered(state.currentIndex));

    // Footer buttons
    dom.btnPrev.disabled = state.currentIndex === 0;
    var isLast = state.currentIndex === TOTAL - 1;
    dom.btnNext.classList.toggle('is-hidden', isLast);
    dom.btnSubmit.classList.toggle('is-hidden', !isLast);

    updateProgressBar();
    dom.answerInput.focus({ preventScroll: true });
  }

  function handleAnswerInput() {
    state.answers[state.currentIndex] = dom.answerInput.value;
    dom.answerInput.classList.toggle('has-value', isAnswered(state.currentIndex));
    saveState();
    updateProgressBar();
    updatePaletteCell(state.currentIndex);
  }

  function updateProgressBar() {
    var answeredCount = state.answers.filter(function (a) { return normalize(a).length > 0; }).length;
    var pct = Math.round((answeredCount / TOTAL) * 100);
    dom.progressFill.style.width = pct + '%';
    dom.progressTrack.setAttribute('aria-valuenow', answeredCount);
  }

  function goPrev() {
    if (state.currentIndex === 0) return;
    state.currentIndex -= 1;
    saveState();
    renderQuestion();
    highlightCurrentPaletteCell();
  }

  function goNext() {
    if (state.currentIndex === TOTAL - 1) return;
    state.currentIndex += 1;
    saveState();
    renderQuestion();
    highlightCurrentPaletteCell();
  }

  function jumpTo(index) {
    if (index < 0 || index >= TOTAL) return;
    state.currentIndex = index;
    saveState();
    renderQuestion();
    highlightCurrentPaletteCell();
    closePalette();
  }

  /* ============================ Palette ================================= */

  function renderPalette() {
    dom.paletteGrid.innerHTML = '';
    var frag = document.createDocumentFragment();

    for (var i = 0; i < TOTAL; i++) {
      var cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'palette-cell';
      cell.textContent = i + 1;
      cell.dataset.index = i;
      cell.addEventListener('click', (function (idx) {
        return function () { jumpTo(idx); };
      })(i));
      frag.appendChild(cell);
    }
    dom.paletteGrid.appendChild(frag);
    refreshAllPaletteCells();
  }

  function refreshAllPaletteCells() {
    var cells = dom.paletteGrid.children;
    for (var i = 0; i < cells.length; i++) {
      applyPaletteCellState(cells[i], i);
    }
  }

  function applyPaletteCellState(cell, index) {
    cell.classList.remove('is-answered', 'is-current');
    if (index === state.currentIndex) {
      cell.classList.add('is-current');
    } else if (isAnswered(index)) {
      cell.classList.add('is-answered');
    }
  }

  function updatePaletteCell(index) {
    var cell = dom.paletteGrid.children[index];
    if (cell) applyPaletteCellState(cell, index);
  }

  function highlightCurrentPaletteCell() {
    refreshAllPaletteCells();
    var cell = dom.paletteGrid.children[state.currentIndex];
    if (cell && dom.paletteDrawer.classList.contains('is-active')) {
      cell.scrollIntoView({ block: 'nearest' });
    }
  }

  function openPalette() {
    dom.paletteOverlay.classList.add('is-active');
    dom.paletteDrawer.classList.add('is-active');
    dom.btnPaletteToggle.setAttribute('aria-expanded', 'true');
    var cell = dom.paletteGrid.children[state.currentIndex];
    if (cell) cell.scrollIntoView({ block: 'center' });
  }

  function closePalette() {
    dom.paletteOverlay.classList.remove('is-active');
    dom.paletteDrawer.classList.remove('is-active');
    dom.btnPaletteToggle.setAttribute('aria-expanded', 'false');
  }

  /* ============================ Submit / scoring ======================== */

  function countSkipped() {
    return state.answers.filter(function (a) { return normalize(a).length === 0; }).length;
  }

  function trySubmit() {
    var skipped = countSkipped();
    var msg = skipped > 0
      ? 'You have ' + skipped + ' skipped question(s). Submit the quiz anyway?'
      : 'Submit the quiz now?';
    if (window.confirm(msg)) {
      submitQuiz();
    }
  }

  function submitQuiz() {
    state.submitted = true;
    state.submittedAt = Date.now();
    saveState();
    closePalette();
    var results = computeResults();
    renderResult(results);
    showScreen('result');
  }

  function computeResults() {
    var correct = 0, wrong = 0, skipped = 0;
    for (var i = 0; i < TOTAL; i++) {
      if (!isAnswered(i)) {
        skipped++;
      } else if (isCorrect(i)) {
        correct++;
      } else {
        wrong++;
      }
    }
    var percentage = Math.round((correct / TOTAL) * 100);
    return { total: TOTAL, correct: correct, wrong: wrong, skipped: skipped, percentage: percentage };
  }

  /* ============================ Result screen ============================ */

  var RING_CIRCUMFERENCE = 2 * Math.PI * 60; // r=60, matches SVG in index.html

  function renderResult(results) {
    dom.resultTotal.textContent = results.total;
    dom.resultCorrect.textContent = results.correct;
    dom.resultWrong.textContent = results.wrong;
    dom.resultSkipped.textContent = results.skipped;
    dom.resultScore.textContent = results.correct + ' / ' + results.total;
    dom.resultPercentage.textContent = results.percentage + '%';

    var title = results.percentage >= 80 ? 'Excellent Work!'
      : results.percentage >= 50 ? 'Good Effort!'
      : 'Keep Practicing!';
    document.getElementById('result-title').textContent = title;

    dom.resultRingFill.style.strokeDasharray = String(RING_CIRCUMFERENCE);
    dom.resultRingFill.style.strokeDashoffset = String(RING_CIRCUMFERENCE);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var offset = RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * results.percentage / 100);
        dom.resultRingFill.style.strokeDashoffset = String(offset);
      });
    });
  }

  function restartQuiz() {
    if (!window.confirm('Restart the quiz? Your current progress and answers will be cleared.')) {
      return;
    }
    clearState();
    renderHome();
    showScreen('home');
  }

  /* ============================ Review screen ============================ */

  function statusOf(index) {
    if (!isAnswered(index)) return 'unattempted';
    return isCorrect(index) ? 'correct' : 'wrong';
  }

  // Result screen calls this "skipped"; review filters use "skipped" too.
  function filterKeyFor(status) {
    return status === 'unattempted' ? 'skipped' : status;
  }

  function renderReviewList(filter) {
    reviewFilter = filter;
    var htmlParts = [];

    for (var i = 0; i < TOTAL; i++) {
      var status = statusOf(i);
      var key = filterKeyFor(status);
      if (filter !== 'all' && filter !== key) continue;

      var q = QUIZ_QUESTIONS[i];
      var userAnswerText = isAnswered(i) ? state.answers[i] : 'Not attempted';
      var correctAnswerText = q.answer;
      var userAnswerClass = status === 'correct' ? 'correct' : (status === 'wrong' ? 'wrong' : 'empty');

      htmlParts.push(
        '<div class="review-item is-' + status + '">' +
          '<div class="review-item__head">' +
            '<span class="review-item__number">Question ' + q.id + '</span>' +
            '<span class="review-item__status">' + key + '</span>' +
          '</div>' +
          '<p class="review-item__text">' + escapeHtml(q.question) + '</p>' +
          '<div class="review-item__answer review-item__answer--user ' + userAnswerClass + '">' +
            '<strong>Your answer:</strong> ' + escapeHtml(userAnswerText) +
          '</div>' +
          '<div class="review-item__answer review-item__answer--correct">' +
            '<strong>Correct answer:</strong> ' + escapeHtml(correctAnswerText) +
          '</div>' +
        '</div>'
      );
    }

    dom.reviewList.innerHTML = htmlParts.length
      ? htmlParts.join('')
      : '<p style="text-align:center; color:var(--color-text-muted); padding:32px 0;">No questions match this filter.</p>';
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function openReview() {
    var chips = dom.reviewFilters.querySelectorAll('.filter-chip');
    chips.forEach(function (chip) { chip.classList.toggle('is-active', chip.dataset.filter === 'all'); });
    renderReviewList('all');
    showScreen('review');
  }

  /* ============================ Install prompt =========================== */

  function initInstallPrompt() {
    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      deferredInstallPrompt = e;
      dom.btnInstall.classList.remove('is-hidden');
    });

    dom.btnInstall.addEventListener('click', function () {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      deferredInstallPrompt.userChoice.finally(function () {
        deferredInstallPrompt = null;
        dom.btnInstall.classList.add('is-hidden');
      });
    });

    window.addEventListener('appinstalled', function () {
      deferredInstallPrompt = null;
      dom.btnInstall.classList.add('is-hidden');
    });
  }

  /* ============================ Event wiring ============================= */

  function bindEvents() {
    dom.btnStart.addEventListener('click', function () {
      if (loadState() && !window.confirm('Starting a new quiz will clear your previous progress. Continue?')) {
        return;
      }
      startFreshQuiz();
    });

    dom.btnContinue.addEventListener('click', continueQuiz);

    dom.btnQuit.addEventListener('click', function () {
      renderHome();
      showScreen('home');
    });

    dom.answerInput.addEventListener('input', handleAnswerInput);
    dom.answerInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (state.currentIndex === TOTAL - 1) {
          trySubmit();
        } else {
          goNext();
        }
      }
    });

    dom.btnPrev.addEventListener('click', goPrev);
    dom.btnNext.addEventListener('click', goNext);
    dom.btnSubmit.addEventListener('click', trySubmit);
    dom.btnSubmitPalette.addEventListener('click', trySubmit);

    dom.btnPaletteToggle.addEventListener('click', openPalette);
    dom.btnPaletteClose.addEventListener('click', closePalette);
    dom.paletteOverlay.addEventListener('click', closePalette);

    dom.btnReview.addEventListener('click', openReview);
    dom.btnRestart.addEventListener('click', restartQuiz);

    dom.btnReviewBack.addEventListener('click', function () {
      showScreen('result');
    });

    dom.reviewFilters.addEventListener('click', function (e) {
      var chip = e.target.closest('.filter-chip');
      if (!chip) return;
      dom.reviewFilters.querySelectorAll('.filter-chip').forEach(function (c) {
        c.classList.remove('is-active');
      });
      chip.classList.add('is-active');
      renderReviewList(chip.dataset.filter);
    });
  }

  /* ============================ Init ===================================== */

  function init() {
    bindEvents();
    initInstallPrompt();
    renderHome();
    showScreen('home');

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function () {
          // Offline support simply won't be available; the app still works online.
        });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
