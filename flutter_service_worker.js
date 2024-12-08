'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "26f499d5f09f938f1684b3666f4b3f90",
"version.json": "fc0f61c29c3c0966042360fa02f04d79",
"index.html": "14d54854a41ad06bedb6216447290815",
"/": "14d54854a41ad06bedb6216447290815",
"main.dart.js": "58e476c3791ceb12af54e820a1c0ee21",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/Icon-maskable-192%20copy.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/icon-192.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/Icon-maskable-512.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/icon-512.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"manifest.json": "34d7fd14baecc6ae0102cd66b72802c7",
"assets/AssetManifest.json": "b39adcfc9d5be8249bd936dda824954a",
"assets/NOTICES": "d04ae24e69373565af091ef54e5d8a05",
"assets/FontManifest.json": "26d0093cbf8aaa89eef4740f464063ef",
"assets/AssetManifest.bin.json": "fc5647ac9040f2b406eb0b2873e965d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2b3d6d40aa5825a203d376d6f67cbc2f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "dc9912225418b2677dabe07862172c33",
"assets/fonts/MaterialIcons-Regular.otf": "b613a35d09472fdda5842c3f4863bdc0",
"assets/assets/aboutus/aboutus03.png": "9195cf1b0cb47b0960bdfda4195abc02",
"assets/assets/aboutus/aboutus2.png": "62b5d309e127dac9744aade87067d715",
"assets/assets/aboutus/aboutus0.png": "ae5638c2f78d41a17b26457da778cf89",
"assets/assets/aboutus/aboutus1.png": "8ddea41b8d61309f0c312d1c08c3e3b8",
"assets/assets/achivements_Participation_photos/image01.jpg": "d67dbdd4f1267a182d61168fde7678d2",
"assets/assets/achivements_Participation_photos/image03.jpg": "b14b7ac0d9f20879cf199997e5e90a08",
"assets/assets/achivements_Participation_photos/image02.jpg": "9cf681680cba2591509be86e237bbf09",
"assets/assets/achivements_Participation_photos/image06.jpg": "6208280c53f6d827d95ab00c5bb18f60",
"assets/assets/achivements_Participation_photos/image07.jpg": "8fe8920fa6f8e8de3cd5a9856ad00316",
"assets/assets/achivements_Participation_photos/image05.jpg": "25c54ab127769d5109a960b4d16326ce",
"assets/assets/achivements_Participation_photos/image04.jpg": "130cb7c8d4acfc5ea6bfee7af2efa296",
"assets/assets/youtube/pic04.webp": "53ab9f2fc1eec81824fc70b7547f774f",
"assets/assets/youtube/pic03.webp": "0e7d09f24ca8f656b884b04b0e6ac8b6",
"assets/assets/youtube/pic02.webp": "1215da4cea8ae98e6c5530c82efd4de7",
"assets/assets/youtube/pic01.webp": "84cb02cf3435190be91761376c09ce1e",
"assets/assets/custom_project/custom_lith_battery.png": "5d8e7731c43d03b59745391bf4afc27c",
"assets/assets/custom_project/custom_project_school.png": "f5473fdf91611f242ba094b984f77412",
"assets/assets/logo.png": "53d747599736adb8bb493748471be9ad",
"assets/assets/splash_screen.png": "53d747599736adb8bb493748471be9ad",
"assets/assets/parts/sensors.png": "a0ea65a20b746f65293b0216d8a49a98",
"assets/assets/parts/Arduino%2520Boards.png": "c99152970d667cc081c704037ad91c85",
"assets/assets/splash_screen_icon.svg": "d2f765f8dc7c8883645dfefa41f823fe",
"assets/assets/splash_screen_icon.jpeg": "82dbbdee7e260b01f021d7bd004f6413",
"assets/assets/members/ridhhi.jpeg": "7fc8c6c25902ff3834504bb6144714d5",
"assets/assets/members/aman.jpg": "1941b7fa786d7255e123e41e25d62c0e",
"assets/assets/members/tanmoy.jpg": "14ff6b19ae1f1677b8b51812dfa6e3ee",
"assets/assets/members/lagan.jpeg": "5a63acbfd789cbb2c9033fffdded940f",
"assets/assets/members/tshar_ojha.jpg": "fd681a44131d8f8f4ff649858ec7b662",
"assets/assets/members/amrutansh.jpeg": "267fa5afc6a10d81099449fe07367b7f",
"assets/assets/members/Som%2520Raj.jpg": "0d9da0dd2d200a861a80dae27d3e9e3f",
"assets/assets/members/piyush_raj.jpg": "7301641195a3dc2ff99dbd06e67ea75f",
"assets/assets/members/rehyan_yadav.JPG": "883d42a8f43003532a572188f7708f39",
"assets/assets/members/%2520Omm%2520Sanjog.jpg": "46dfec70c40ff8c07da274d1ef540c9f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
