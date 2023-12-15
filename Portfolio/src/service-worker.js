// src/service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('your-portfolio-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        // Add other static assets like CSS, JS, images, etc.
      ]);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

// src/index.js or src/App.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}
