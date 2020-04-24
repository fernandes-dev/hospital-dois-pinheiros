// self.addEventListener('fetch', e => {
//   e.respondWith(
//     caches.open('cache')
//     .then(cache => cache.match(e.request)
//       .then(response => response || fetch(e.request)
//         .then(response => {          
//           let dir = new URL(e.request.url).pathname.match(/\/upload\//)
//           if(response.ok && e.request.method !== 'POST' && !dir) cache.add(e.request)
          
//           return response;
//         })
//       )
//     )
//   );
// });