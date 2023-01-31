const STATTIC_CACHE = "static";

const APP_SHELL = [
    "/",
    "/audio/21 Savage - a lot ft. J. Cole.mp3",
    "/img/21.jpg",
    "/img/heroes.jfif",
    "/video/21video.mp4",
    "index.css",
    "index.html",
    "main.js",
    "script.js",
    "sw.js"
    
];

self.addEventListener("install", (e) =>{
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAll(APP_SHELL));
    
    e.waitUntill(cacheStatic);
});

self.addEventListener("fetch", (e) =>{
    console.log("fetch! ", e.request);
    
    e.respondWith(
        caches
        .match(e.request)
        .then(res => res || fetch(e.request))
        .catch(console.log)
    )
});
