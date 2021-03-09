const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request;

    //Solo para get
    if (request.method !== "GET") {
        return;
    }

    //buscar en cache
    event.respondWith(cachedResponse(request));

    //actualizar el cache

    event.waitUntil(updateCache(request));
})

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        //'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    // Cache.put when status code is 200 
    // Otherwise return a simple promise 
    return response.status === 200 ?
        cache.put(request, response) :
        new Promise((resolve, reject) => resolve(':D'));
}