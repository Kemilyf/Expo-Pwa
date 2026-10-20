module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{html,js,css,json,svg,png,ico,woff2}"],
  swDest: "dist/sw.js",
  clientsClaim: true,
  skipWaiting: true,
  cleanupOutdatedCaches: true,
  navigateFallback: "/index.html",
  navigateFallbackDenylist: [/^\/api\//],
  runtimeCaching: [
    {
      urlPattern: ({ request }) => request.destination === "image",
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "images",
        expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 }
      }
    }
  ]
};
