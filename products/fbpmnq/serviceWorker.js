const staticAssets = [
    '/',
    '/index.html',
    '/manifest.json'
];

const STATIC_CACHE_NAME = 'static-data';
const DYNAMIC_CACHE_NAME = 'dynamic-data';

self.addEventListener('install', async event => {
    self.skipWaiting();
    const cache = await caches.open(STATIC_CACHE_NAME);
    cache.addAll(staticAssets);
});

self.addEventListener('activate', event => {
    return self.clients.claim();
});

self.addEventListener('fetch', event => {
    const { request } = event;
    event.respondWith(cacheData(request));
});

async function cacheData(request) {
    const cashedRequest = await caches.match(request);

    if (staticAssets.some(sa => request.url.indexOf(sa) >= 0) || request.headers.get('accept').includes('text/html')) {
        return cashedRequest || await caches.match('/offline.html') || networkFirst(request);
    }

    return cashedRequest || networkFirst(request);
}

async function networkFirst(request) {
    const cache = await caches.open(DYNAMIC_CACHE_NAME);

    try {
        const response = await fetch(request);

        if (request.method !== 'POST') {
            cache.put(request, response.clone());
        }

        return response;
    } catch (error) {
        return await cache.match(request);
    }
}