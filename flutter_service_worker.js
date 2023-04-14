'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "83d97543cb6c0c9e7d18168ebf163378",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/assets/dalis_bilgisari01.jpg": "b09b004a20adbd74cee2bfcf134a3db3",
"assets/lib/assets/dalis_bilgisari02.jpg": "de9d061105f072866a6d4c8534e6df3f",
"assets/lib/assets/dalis_bilgisari03.jpg": "dffeece704ea36c0981c566abdf2a997",
"assets/lib/assets/dalis_elbise01.jpg": "1948f1833b151d7c11cbed0cd929ae79",
"assets/lib/assets/dalis_elbise02.jpg": "6895a43318b05a41d67fe737bee63c60",
"assets/lib/assets/dalis_elbise03.jpg": "a179b068ba668454fe8e5a5ac141de6d",
"assets/lib/assets/dalis_elbise04.jpg": "8df5cf3c5616bbef6e5d3655d8739f1b",
"assets/lib/assets/dalis_elbise05.jpg": "c2b5bb4b2667cee2d72d155c748604f4",
"assets/lib/assets/dalis_elbise06.jpg": "df31961da5d5431974882c9174491cc2",
"assets/lib/assets/denge_yelegi01.jpg": "7313731be4022857b4a2b8ff7f4fff07",
"assets/lib/assets/denge_yelegi02.jpg": "0de7538168644147a909b47a7e27a6b2",
"assets/lib/assets/denge_yelegi03.jpg": "32801bb287d76c2f7e5803559c37ce42",
"assets/lib/assets/denge_yelegi04.jpg": "c484893faae55da08f2b20fbf55be0ec",
"assets/lib/assets/Maske01.jpg": "01b0e73b9390f5bce799313ebfdfdbac",
"assets/lib/assets/Maske02.jpg": "eef97cc1e157943ae46266298650e0d5",
"assets/lib/assets/maske03.jpg": "e21ecd0b92d02c9414f81451facebb17",
"assets/lib/assets/Maske04.jpg": "01a29caf0a4c194b399971b49cef391f",
"assets/lib/assets/Maske05.jpg": "6bc8ee14ae33c413fcb0dd00513318ce",
"assets/lib/assets/Maske06.jpg": "9f9e559b05692b500846e609a42e7d52",
"assets/lib/assets/palet01.jpg": "91a4cc4f55297e7f0b0200cfc0f0ca14",
"assets/lib/assets/palet02.jpg": "26b59646b9418286f2aa103a24fd8beb",
"assets/lib/assets/palet03.jpg": "a883c9c1911f8fc7edd276a12b5fdb95",
"assets/lib/assets/regulator01.jpg": "debdcdab2e9746dc2979fdbcc92ec98b",
"assets/lib/assets/regulator02.jpg": "fc73f1155dcc322e76850587392153ab",
"assets/lib/assets/regulator03.jpg": "4b6173b963d90a924115e9482ef1699f",
"assets/lib/assets/regulator04.jpg": "83b0e09d434ea83ac43d13700c326232",
"assets/lib/assets/regulator05.jpg": "1bd20795810c68aff0907d7c52944e5a",
"assets/lib/assets/scuba.jpg": "232ceb61d3528e63e9d4ff49d34a9549",
"assets/lib/assets/set01.jpg": "9346a6b10aaad2be409734e4b7b02a0e",
"assets/lib/assets/set02.jpg": "517257f75cad33eb6253efca6b0f6cf8",
"assets/lib/assets/set03.jpg": "8e2310894309697c5963aeb9c69e5330",
"assets/NOTICES": "93de6be57f373c337d20b0c6b79049d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0dfadcbd71c0d55bd5a23735cb74ab26",
"/": "0dfadcbd71c0d55bd5a23735cb74ab26",
"main.dart.js": "85b7734e346a73942a54c263da0504b9",
"manifest.json": "b3bda7306f4a50380931b273df0ce43c",
"version.json": "80de51dab3ac04010cfce682a3ce42a2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
