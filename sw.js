const C='jarvis-v1',A=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./fonts/Inter-Light.woff2','./fonts/Inter-Regular.woff2','./fonts/Inter-Medium.woff2','./fonts/Inter-SemiBold.woff2'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request)))});
