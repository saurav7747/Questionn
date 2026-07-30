/**
 * sw.js — Computer Quiz Part 2
 * ---------------------------------------------------------------------
 * Service worker for Part 2 of the Computer Quiz PWA.
 * Precaches the app shell (including all 360 questions and the app
 * icons) so the quiz works fully offline after the first visit, and
 * serves cached assets with a cache-first strategy, falling back to
 * the network for anything else.
 * ---------------------------------------------------------------------
 */

'use strict';

var CACHE_VERSION = 'computer-quiz-p2-v1';

// Paths are relative so the app can be hosted from any sub-directory.
var APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './quiz.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

/* ---------------------------- Install ---------------------------- */

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      return cache.addAll(APP_SHELL);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

/* ---------------------------- Activate ----------------------------
 * Remove any caches from older versions of the service worker.
 */

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) { return key !== CACHE_VERSION; })
          .map(function (key) { return caches.delete(key); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* ---------------------------- Fetch --------------------------------
 * Cache-first for same-origin app-shell assets, with a network
 * fallback (and cache top-up) for anything not yet cached. Navigation
 * requests fall back to the cached index.html when offline, so deep
 * links still open the app shell.
 */

self.addEventListener('fetch', function (event) {
  var request = event.request;

  if (request.method !== 'GET') return;

  // Only handle same-origin requests; let cross-origin (e.g. fonts) go
  // straight to the network so the app keeps working without them.
  var url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(function () {
        return caches.match('./index.html');
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(function (cached) {
      if (cached) return cached;

      return fetch(request).then(function (response) {
        if (response && response.status === 200) {
          var responseClone = response.clone();
          caches.open(CACHE_VERSION).then(function (cache) {
            cache.put(request, responseClone);
          });
        }
        return response;
      }).catch(function () {
        // Nothing cached and network unavailable — let the request fail
        // naturally for non-critical assets.
      });
    })
  );
});
