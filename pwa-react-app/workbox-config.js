module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{html,json,css,js,png}"],
  swDest: "build/service-worker.js",
  runtimeCaching: [
    {
      urlPattern: new RegExp("https://jsonplaceholder.typicode.com/"),
      handler: "NetworkFirst",
      options: {
        cacheName: "api-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "image-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        },
      },
    },
  ],
};
