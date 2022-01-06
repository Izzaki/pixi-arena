let counter = 0;

setInterval(() => counter++, 1000);

self.addEventListener('fetch', (event) => {
    // We only want to call event.respondWith() if this is a navigation request
    // for an HTML page.

    if (event.request.url.match(/sw-getinfo/)) {
        console.log("%c @ SW: event.request.mode: ", "color: white; background: green", event.request.mode, event, counter);

        event.respondWith(new Response('counter: ' + counter));
        //     event.respondWith((async () => {
        //         try {
        //             // First, try to use the navigation preload response if it's supported.
        //             const preloadResponse = await event.preloadResponse;
        //             if (preloadResponse) {
        //                 return preloadResponse;
        //             }
        //
        //             const networkResponse = await fetch(event.request);
        //             return networkResponse;
        //         } catch (error) {
        //             // catch is only triggered if an exception is thrown, which is likely
        //             // due to a network error.
        //             // If fetch() returns a valid HTTP response with a response code in
        //             // the 4xx or 5xx range, the catch() will NOT be called.
        //             console.log('Fetch failed; returning offline page instead.', error);
        //
        //             const cache = await caches.open(CACHE_NAME);
        //             const cachedResponse = await cache.match(OFFLINE_URL);
        //             return cachedResponse;
        //         }
        //     })());
    } else {
        console.log("%c @ SW unhanled url: ", "color: white; background: orange", event.request.mode, event.request.url);
    }
});
