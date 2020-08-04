var CACHE_NAME = 'quiz-sample-caches';
var urlsToCache = [
  '/haishi-at-mediowl.github.io/',
];

self.addEventListener('install', function(event) {
  console.log('installed.');
  event.waitUntil(
    caches
    .open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('fetched.');
  event.respondWith(
    caches
    .match(event.request)
    .then(function(response) {
      return response ? response : fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('activated');
});

