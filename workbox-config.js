module.exports = {
  cacheId: "qt-web",
  globDirectory: "out",
  globPatterns: ["**/*.html", "_next/**/*.{js,html,css}"],
  swDest: "out/service-worker.js",
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    // index
    {
      urlPattern: "*",
      handler: "cacheFirst",
      options: {
        cacheName: "trend",
        expiration: {
          maxAgeSeconds: 60 * 60 * 24
        }
      }
    }
  ]
};
