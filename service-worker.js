// Lege service worker — versie 1
self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", () => {
    // Geen caching, geen intercept — volledig veilig
});
