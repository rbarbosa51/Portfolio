const cacheversion = "RbarPortv1";
const filesToCache = [
  "favicon.ico",
  "models/room.glb",
  "models/roomtexture.png",
  "models/arcade.glb",
  "models/cell.glb",
  "models/computer1.glb",
  "models/computer2.glb",
  "models/computer3.glb",
  "models/picture1.glb",
  "models/picture2.glb",
  "models/resume.glb",
  "models/books.glb",
  "models/tv.glb",
  "models/cards.glb",
  "cards/Courage.png",
  "cards/Devotion.png",
  "cards/Excellence.png",
  "cards/ForwardThinking.png",
  "cards/HardWork.png",
  "cards/Leadership.png",
  "cards/Loyalty.png",
  "cards/Minority.png",
  "cards/PuertoRican",
  "cards/SalsaDancing.png",
  "cards/Veteran.png",
  "cards/TeamBuilder.png",
  "cards/WebProgrammer.png",
  "projects/girlboss.png",
  "projects/mlfinger.png",
  "projects/particles.png",
  "projects/toxicity.png",
  "projects/weather.png",
  "projects/westeros.png",
  "projects/whatacrypto.png",
  "https://m.media-amazon.com/images/I/811kEWBkJAL._SY385_.jpg",
  "https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Foriginal%2F2X%2F2%2F24b00b14f118580763440ecaddcc948f8cb94f14.jsdos&anonymous=1",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheversion).then((cache) => {
      return cache.addAll(filesToCache);
    }),
  );
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});
self.addEventListener("active", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheversion) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});
