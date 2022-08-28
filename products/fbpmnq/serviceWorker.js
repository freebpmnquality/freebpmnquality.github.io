const assets = [
    '/',
    '/index.html',
    '/manifest.json'
];

const STATIC_CACHE_NAME = 'static-data';

self.addEventListener('install', installEvent => {
    installEvent.waitUntil(caches.open(STATIC_CACHE_NAME).then(cache => {
        cache.addAll(assets);
    }));
});

self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request);
    }));
});