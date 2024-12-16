'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c6129417b7216289c586185a4e6c64a0",
"version.json": "fc0f61c29c3c0966042360fa02f04d79",
"index.html": "4cd9a15ab5e963c7a79c72ab04dd94ad",
"/": "4cd9a15ab5e963c7a79c72ab04dd94ad",
"main.dart.js": "006af2b489f4ac8de80bd877cde5aa9b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/Icon-maskable-192%20copy.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/icon-192.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/Icon-maskable-512.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/icon-512.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"manifest.json": "34d7fd14baecc6ae0102cd66b72802c7",
"assets/AssetManifest.json": "cd4513780299c02f4d8f05a43c12a4ad",
"assets/NOTICES": "50731c82e3dcc8171df71084920b9746",
"assets/FontManifest.json": "26d0093cbf8aaa89eef4740f464063ef",
"assets/AssetManifest.bin.json": "c924de8c3e78e0fa69a1e44e6882ea50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ff547dfc0bf7fe163c52d71e40853a07",
"assets/fonts/MaterialIcons-Regular.otf": "7bb13c6ce35e4a430a185f8788896d08",
"assets/assets/aboutus/aboutus03.png": "9195cf1b0cb47b0960bdfda4195abc02",
"assets/assets/aboutus/aboutus2.png": "62b5d309e127dac9744aade87067d715",
"assets/assets/aboutus/aboutus0.png": "ae5638c2f78d41a17b26457da778cf89",
"assets/assets/aboutus/aboutus1.png": "8ddea41b8d61309f0c312d1c08c3e3b8",
"assets/assets/achivements_Participation_photos/img09.jpg": "8fe8920fa6f8e8de3cd5a9856ad00316",
"assets/assets/achivements_Participation_photos/img08.jpg": "90afa54316f9f4c7fcec1ee301ddac0c",
"assets/assets/achivements_Participation_photos/img03.png": "8538dea1c975b6f65b49fb98baacbd0a",
"assets/assets/achivements_Participation_photos/img02.png": "237c9beca4a162f3b9153f100d36ab16",
"assets/assets/achivements_Participation_photos/img01.jpg": "2ae548bda8ae415a63b80bbba77c530b",
"assets/assets/achivements_Participation_photos/img05.jpg": "243ac55ccbe5d6c76cfebba3ac83f8fe",
"assets/assets/achivements_Participation_photos/img04.png": "7796693cecf7f481eacb2c53acd66a04",
"assets/assets/achivements_Participation_photos/img06.jpg": "d67dbdd4f1267a182d61168fde7678d2",
"assets/assets/achivements_Participation_photos/img07.jpg": "e3c95d7bac2dad92097ec751434512bd",
"assets/assets/youtube/pic04.webp": "53ab9f2fc1eec81824fc70b7547f774f",
"assets/assets/youtube/pic03.webp": "0e7d09f24ca8f656b884b04b0e6ac8b6",
"assets/assets/youtube/pic02.webp": "1215da4cea8ae98e6c5530c82efd4de7",
"assets/assets/youtube/pic01.webp": "84cb02cf3435190be91761376c09ce1e",
"assets/assets/custom_project/custom%2520battery.png": "e721ce3365357a39bc494bc98b59e816",
"assets/assets/custom_project/custom_project_school.png": "f5473fdf91611f242ba094b984f77412",
"assets/assets/custom_project/custom%2520batterys.png": "218f13f3924d1cb420031d629dce8fa2",
"assets/assets/logo.png": "53d747599736adb8bb493748471be9ad",
"assets/assets/splash_screen.png": "53d747599736adb8bb493748471be9ad",
"assets/assets/parts/IOT%2520and%2520Wireless.png": "f2bf6314d830aa31cb4a5b36d3053988",
"assets/assets/parts/electronics%2520components.png": "5a025ef9ea56fbfabfbd8446e22932a5",
"assets/assets/parts/wires%2520and%2520cables.png": "0cbcde195da4b33e8aebbe64f388f223",
"assets/assets/parts/electronic%2520modules%2520and%2520displays.png": "253f716e12a53212977f58685cc198b9",
"assets/assets/parts/motors%2520and%2520drivers.png": "e11c5ce8f2a0071f948bae9151aa3151",
"assets/assets/parts/Sensors%25202.png": "822d4b1f93ffca4787158b57e8df9f58",
"assets/assets/parts/Arduino%2520Boards.png": "c99152970d667cc081c704037ad91c85",
"assets/assets/parts/batterys.png": "db97cbdaec92409e1cfe2c5956f031d7",
"assets/assets/splash_screen_icon.svg": "d2f765f8dc7c8883645dfefa41f823fe",
"assets/assets/splash_screen_icon.jpeg": "82dbbdee7e260b01f021d7bd004f6413",
"assets/assets/members/aman.jpeg": "2836db6e96a430caad22bb30fccdc50b",
"assets/assets/members/riddhi.jpeg": "ab3e324c8985ae348c1cf8d03900d69d",
"assets/assets/members/piyush.jpeg": "06cb19fc12d17d27ae07105b90a2c3c4",
"assets/assets/members/ombarik.jpeg": "e7a7ef00c47b18c91017ec3b7b85ae56",
"assets/assets/members/som.jpeg": "1ab7fe9a5580a367237ef34705f58c99",
"assets/assets/members/lagan.jpeg": "08046b0a8240be7073aa5ac9cbbc624e",
"assets/assets/members/rehyan.jpeg": "13924c533b320156119ecbf45444397d",
"assets/assets/members/amrutansh.jpeg": "3f708d5473c27b52cc4321d598846287",
"assets/assets/members/tushar.jpeg": "7bc3ecb85844ca90a1fb2e6049769e1e",
"assets/assets/members/sujal.jpeg": "83cb986edee0904501609be961747580",
"assets/assets/members/shantanu.jpeg": "fa0b3e1b38e622b223ea2ee694cf240d",
"assets/assets/members/tanmoy.jpeg": "28bbe0ec0d15c1f54143514ca498234d",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
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
