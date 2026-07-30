# Computer Quiz — Part 2 (PWA)

Part 2 of the Computer Quiz PWA, built with **HTML5, CSS3 and vanilla JavaScript** only (no frameworks, no build step, no external runtime dependencies). It contains the full **Fill in the Blanks** and **Abbreviation** sections from the same official PDF question bank used in Part 1: **360 questions** (110 fill-in-the-blank + 250 abbreviations), scored against the official answer key.

The visual design, color system, typography, spacing, and screen flow are aligned with Part 1 so both parts feel like a single product.

## Features

- **360 questions** — exact text and answers transcribed from the source PDF
- **Home screen** with quiz stats, **Continue Quiz**, and an **Install App** button
- **Type-to-answer** input for both Fill in the Blank and Abbreviation questions
- **Question palette** — jump to any question directly; color-coded gray (not visited) / green (answered) / blue (current)
- **Progress bar** and live `Question X / 360` counter
- **Auto-save** to `localStorage` after every keystroke and navigation — refreshing the page resumes exactly where you left off
- **Result screen** — total, correct, wrong, skipped, percentage and final score
- **Review mode** — every question with your answer vs. the correct answer, filterable by Correct / Wrong / Skipped
- **Installable PWA** with a custom `beforeinstallprompt`-driven Install button that hides itself once installed
- **Offline support** — a service worker caches the app shell (HTML, CSS, JS, manifest, icons, and all 360 questions) so the quiz works with no network connection after the first load

## Files

| File | Purpose |
|---|---|
| `index.html` | App shell — markup for Home, Quiz, Result and Review screens |
| `style.css` | Design system and styling (bright, minimalist, mobile-first, subtle glass effect) |
| `app.js` | Application logic — state, navigation, rendering, scoring, persistence, install prompt |
| `quiz.js` | Question bank data (`QUIZ_QUESTIONS`) sourced from the official PDF + answer key |
| `manifest.json` | PWA manifest (name, PNG icons, theme, display mode) |
| `sw.js` | Service worker — offline caching of the app shell |
| `README.md` | This file |
| `icon-192.png` / `icon-512.png` | App icons referenced by the manifest |

## Answer checking

Fill in the Blank and Abbreviation questions are free-text. Your typed answer is compared to the official answer **case-insensitively, with leading/trailing whitespace trimmed and repeated spaces collapsed** — so `"ram"`, `"RAM"`, and `"  RAM "` are all treated the same. It is otherwise an exact match against the official answer key, since these questions (unlike MCQs) don't have alternative-phrasing detection.

## Running locally

Because the app registers a service worker and listens for `beforeinstallprompt`, it must be served over `http://` or `https://` (not opened directly as a `file://` URL — most browsers block service workers and the install prompt on `file://`).

Any static file server works, for example:

```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .
```

Then open `http://localhost:8080` in your browser.

## Installing as an app

1. Open the app in Chrome, Edge, or another Chromium-based browser (desktop or Android). The **Install App** button on the Home screen appears automatically once the browser fires `beforeinstallprompt`.
2. Tap **Install App** and confirm. On iOS Safari, use **Share → Add to Home Screen** instead, since Safari doesn't support `beforeinstallprompt`.
3. The quiz launches full-screen like a native app and continues to work offline.

## Data source and accuracy

All 360 questions were transcribed directly from the uploaded PDF question bank, with no rewriting, correction, or invention of content. Each question object in `quiz.js` records:

- `id` — the official question number (501–860)
- `type` — `"fill"` (Q501–Q610) or `"abbreviation"` (Q611–Q860)
- `question` — for `fill`, the exact sentence with the blank preserved as printed; for `abbreviation`, phrased as `"What is the full form of <ABBR>?"` using the exact abbreviation from the PDF
- `answer` — for `fill`, the exact answer from the official answer key (PDF page 69); for `abbreviation`, the exact full form given directly in the PDF alongside the abbreviation

## Browser support

Built with standard, widely-supported Web APIs (`localStorage`, Service Worker, `beforeinstallprompt`, CSS Grid/Flexbox, ES5-compatible JavaScript). Works in all current versions of Chrome, Edge, Firefox and Safari, including their mobile counterparts. The Install App button is Chromium-specific by nature of the `beforeinstallprompt` event; the app remains fully installable on iOS/Safari via the native Share menu.
