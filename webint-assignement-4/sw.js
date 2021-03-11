var CACHE_NAME = 'plantify-v1';
var urlsToCache= [
    './',
    './index.html',
    './style.css',
    './script.js',
    './images/camera.png',
    './images/icon-192x192.png',
    './images/icon-512x512.png',
    './images/image.png',
    './images/left_arrow.png',
    './images/plant.png',
    './images/return.png',
    './images/take_picture.png',
    './plants.json'
];

self.addEventListener('install', 
function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Openedcache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', 
function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit -return response
                if(response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});