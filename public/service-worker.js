/* eslint-disable no-restricted-globals */
// Cleanup service worker to remove stale caches from previous local runs.
self.addEventListener("install", () => {
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      await self.registration.unregister()
      const cacheKeys = await caches.keys()
      await Promise.all(cacheKeys.map((key) => caches.delete(key)))
      const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true })
      for (const client of clients) {
        client.navigate(client.url)
      }
    })(),
  )
})
