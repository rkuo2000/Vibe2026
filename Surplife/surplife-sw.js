'use strict';

// Bump the version when releasing changes to any cached asset.
const CACHE_PREFIX = 'surplife-shell-';
const CACHE_NAME = CACHE_PREFIX + 'v41';
const base = new URL('./', self.location.href);
const appURL = new URL('Surplife.html', base).href;
const assets = [
  'Surplife.html',
  'surplife.webmanifest',
  'icons/surplife-180.png',
  'icons/surplife-192.png',
  'icons/surplife-512.png',
  'icons/surplife-maskable-512.png',
  'controllights.md'
].map(path => new URL(path, base).href);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
  // Updates wait for existing tabs to close, preserving active BLE sessions.
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  url.search = '';
  url.hash = '';
  // Only intercept this app's assets, even when hosted beside other pages.
  if (!assets.includes(url.href)) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (url.href === appURL) {
      // Fetch the latest controller online; fall back to the app shell offline.
      try {
        const response = await fetch(event.request);
        if (response.ok) {
          await cache.put(appURL, response.clone());
          return response;
        }
        return (await cache.match(appURL)) || response;
      } catch (error) {
        const cached = await cache.match(appURL);
        if (cached) return cached;
        throw error;
      }
    }
    const cached = await cache.match(url.href);
    if (cached) return cached;
    const response = await fetch(event.request);
    if (response.ok) await cache.put(url.href, response.clone());
    return response;
  })());
});
