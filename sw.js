const STATTIC_CACHE = "static";

const APP_SHELL = [
    "/",
    "index.html",
    "index.css",
    "script.js",
    "main.js",
    "sw.js",
    "21.jpg",
];

self.addEventListener("install", (e) =>{
    const cacheStatic = caches
        .open(STATTIC_CACHE)
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
