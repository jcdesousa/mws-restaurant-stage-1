/* eslint-disable no-restricted-globals, no-undef */
const CACHE_NAME = 'restaurant-cache-v1';
const urlsToCache = [
  '/',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(caches.open(CACHE_NAME)
    .then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    }));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request, { ignoreSearch: true })
    .then(response => response || fetch(event.request)));
});
