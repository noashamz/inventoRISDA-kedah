const cacheName = 'inventorisda-v3.12';
const staticAssets = [
  './',
  './index.html',
  './manifest.json',
  './logo-risda.png'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
