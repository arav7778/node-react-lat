var cacheName='product-hunt';

self.addEventListener('install', event=> {
	console.log('Inside Install event');
	event.waitUntil(
           caches.open(cacheName).then(cache=>cache.addAll(['/material.min.css','/material.min.js','/static/js/bundle.js','/index.html','/'
           	]))
		);
	  


});

self.addEventListener('fetch', function(event) {
  // console.log(event);
   event.respondWith(
   	 caches.match(event.request).then(function(response) {
   	 	if(response)
   	 		return response;
   	 })
   )
})