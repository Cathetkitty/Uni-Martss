
/* ==========================================
   UNIMART SERVICE WORKER
   Offline support and image caching
========================================== */

const CACHE_NAME = "unimart-cache-v5";

const APP_FILES = [
    "./",
    "./index.html",
    "./login.html",
    "./dashboard.html",

    // Product images
    "./image/Argentina Corned Beef.jpg",
    "./image/Ariel.JPG",
    "./image/Axion Dishwashing.jpg",
    "./image/BoyBawang.jpg",
    "./image/Chippy BBQ.jpg",
    "./image/Curls.png",
    "./image/Downy.jpg",
    "./image/FITA.png",
    "./image/HANSEL.png",
    "./image/Joy.jpg",
    "./image/Kopiko.jpg",
    "./image/Milo.jpg",
    "./image/Modess.jpg",
    "./image/Mountain Dew.jpg",
    "./image/Mr Muscle.jpg",
    "./image/Nestea.jpg",
    "./image/Nova.jpg",
    "./image/Palmolive.jpg",
    "./image/Pepsi.jpg",
    "./image/Sprite.jpg",
    "./image/Tide.jpg",
    "./image/brown.png",
    "./image/choco.png",
    "./image/closeup.png",
    "./image/colgate.jpg",
    "./image/cream.png",
    "./image/delmonte.png",
    "./image/denorado.png",
    "./image/ganador.png",
    "./image/headshoulders.jpg",
    "./image/hgardenia.png",
    "./image/hunts.jpg",
    "./image/jasmin.png",
    "./image/ligo.png",
    "./image/magic.png",
    "./image/mega-sardines.png",
    "./image/nivea.png",
    "./image/pantene.jpg",
    "./image/pepsodent.jpg",
    "./image/petroleum.jpg",
    "./image/piatos.png",
    "./image/pinoy.png",
    "./image/rexona.jpg",
    "./image/surf.png",
    "./image/toast.png"
];

/* ==========================================
   INSTALL
========================================== */

self.addEventListener("install", event => {

    event.waitUntil(
        (async () => {

            const cache = await caches.open(CACHE_NAME);

            await Promise.all(
                APP_FILES.map(async file => {

                    try {

                        const response = await fetch(file, {
                            cache: "reload"
                        });

                        if (response.ok) {

                            await cache.put(file, response);

                            console.log("Cached:", file);

                        } else {

                            console.warn(
                                "Not cached:",
                                file,
                                response.status
                            );

                        }

                    } catch (error) {

                        console.warn(
                            "Could not cache:",
                            file,
                            error
                        );

                    }

                })
            );

            await self.skipWaiting();

        })()
    );

});

/* ==========================================
   ACTIVATE
========================================== */

self.addEventListener("activate", event => {

    event.waitUntil(
        (async () => {

            const keys = await caches.keys();

            await Promise.all(
                keys
                    .filter(key =>
                        key.startsWith("unimart-") &&
                        key !== CACHE_NAME
                    )
                    .map(key => caches.delete(key))
            );

            await self.clients.claim();

            console.log(
                "UniMart Service Worker activated!"
            );

        })()
    );

});

/* ==========================================
   FETCH
========================================== */

self.addEventListener("fetch", event => {

    const request = event.request;

    if (request.method !== "GET") return;

    const url = new URL(request.url);

    // Ignore external requests
    if (url.origin !== self.location.origin) return;

    // Navigation requests
    if (request.mode === "navigate") {

        event.respondWith(
            (async () => {

                try {

                    const response = await fetch(request);

                    if (response.ok) {

                        const cache = await caches.open(CACHE_NAME);

                        await cache.put(
                            request,
                            response.clone()
                        );

                    }

                    return response;

                } catch (error) {

                    return (
                        await caches.match(request) ||
                        await caches.match("./index.html") ||
                        Response.error()
                    );

                }

            })()
        );

        return;

    }

    // Static files and images only
    const isStatic =
        /\.(html|css|js|png|jpe?g|webp|gif|svg|ico|woff2?)$/i
        .test(url.pathname);

    // Let PHP, API and other requests use the network normally
    if (!isStatic) return;

    event.respondWith(
        (async () => {

            const cache = await caches.open(CACHE_NAME);

            const cached = await cache.match(request);

            if (cached) {

                // Update cached file in the background
                event.waitUntil(
                    fetch(request)
                        .then(response => {

                            if (response.ok) {

                                return cache.put(
                                    request,
                                    response.clone()
                                );

                            }

                        })
                        .catch(() => {
                            console.log(
                                "Offline: using cached file"
                            );
                        })
                );

                return cached;

            }

            try {

                const response = await fetch(request);

                if (response.ok) {

                    await cache.put(
                        request,
                        response.clone()
                    );

                }

                return response;

            } catch (error) {

                console.error(
                    "File unavailable:",
                    request.url
                );

                return Response.error();

            }

        })()
    );

});

console.log("UniMart Service Worker loaded!");


