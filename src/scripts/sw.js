import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

precacheAndRoute(self.__WB_MANIFEST);

const listApiFetch = [
  {
    link: 'https://restaurant-api.dicoding.dev',
    cacheName: 'api-dicoding-cache',
  },
  {
    link: 'https://fonts.googleapis.com',
    cacheName: 'css-cache',
  },
  {
    link: 'https://fonts.gstatic.com',
    cacheName: 'font-cache',
  },
];

listApiFetch.forEach((api) => {
  registerRoute(
    ({ url }) => url.origin === api.link,
    new StaleWhileRevalidate({
      cacheName: api.cacheName,
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );
});
