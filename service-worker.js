/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ec7629afda4e2c4ae65c9b8268792264"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.5eb19e6b.js",
    "revision": "c97db8b729a57ceda1292ce1d4bed2ea"
  },
  {
    "url": "assets/js/10.799cec6d.js",
    "revision": "9f8b7d30436f91d34c39fa16e027baee"
  },
  {
    "url": "assets/js/11.b1817412.js",
    "revision": "93730616db1512282d7c9b58418f6111"
  },
  {
    "url": "assets/js/12.909d4461.js",
    "revision": "24b5b1b6a07677da91c993d3716c761f"
  },
  {
    "url": "assets/js/13.5cae6f0b.js",
    "revision": "47736b934d20384e12afb3bfd7f6a16a"
  },
  {
    "url": "assets/js/14.b368a615.js",
    "revision": "f285b7ad3ea733eacdac0dcf0e9040fd"
  },
  {
    "url": "assets/js/15.e8dc1306.js",
    "revision": "b3ade06a53feaf365ef8700667ff0092"
  },
  {
    "url": "assets/js/16.f2577233.js",
    "revision": "b3aca453b4be97ec1841233827f9fd36"
  },
  {
    "url": "assets/js/17.722757c5.js",
    "revision": "63bd6699e55b60af72442513650fc456"
  },
  {
    "url": "assets/js/18.9d24afc2.js",
    "revision": "658cff603a6e10f3daa2953f1c9a2042"
  },
  {
    "url": "assets/js/19.809f80b8.js",
    "revision": "7f4df577cde03cc1ec492316c0a43a3f"
  },
  {
    "url": "assets/js/20.bdfe719f.js",
    "revision": "5995320cf230d5ffa344150bff35b5ed"
  },
  {
    "url": "assets/js/21.cf6788a1.js",
    "revision": "07fb82f8afba538ea577f875fdd0b255"
  },
  {
    "url": "assets/js/4.b1beb5c4.js",
    "revision": "4e255ba5624ba933983a075e547257dc"
  },
  {
    "url": "assets/js/5.c64ab402.js",
    "revision": "9c90414393d5bf1e3918702d35ce98e3"
  },
  {
    "url": "assets/js/6.8f01e1d2.js",
    "revision": "5301753461eb54e484043e1f9d63d36c"
  },
  {
    "url": "assets/js/7.e4f3e7f1.js",
    "revision": "98365fc39eed250c6759efbbb91d68b6"
  },
  {
    "url": "assets/js/8.e75659de.js",
    "revision": "7748a834c15feb56b5e21acf8da296c3"
  },
  {
    "url": "assets/js/9.c0286fc6.js",
    "revision": "31ff4bba0453b209e2c0fa31304bcbdc"
  },
  {
    "url": "assets/js/app.7499c118.js",
    "revision": "5c9f126da5a0a6c2a1b9ea559f6f169b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.4a6dfef9.js",
    "revision": "4640ea848675059086c925219abfe683"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/css/index.html",
    "revision": "533479ec1fb5b1553f3950f80e53b63a"
  },
  {
    "url": "categories/html/index.html",
    "revision": "b01dded56a0f74fc3644be0f3342b443"
  },
  {
    "url": "categories/index.html",
    "revision": "027e86a632882f5ab96625b09541942e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8836e59617d0054ec87e9673c10b4881"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "a404e19fcccde46c78fea107a0b308de"
  },
  {
    "url": "categories/js/index.html",
    "revision": "eecc641a7330bca4843a43ea24d3e392"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e2cd55f8888e55aa086b08c84f849fb7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0b1ffe82e43c18cb4e5a17388f33f21a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ca9a4a8974043c7684f61d11c42eae19"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "4ef3cfc8d0c28419411764cc161bce34"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "6ec9d3f271f46c9af3f6160e884c8320"
  },
  {
    "url": "tags/css/index.html",
    "revision": "e63bce31c9f0ffd33bcef5dc7ca74915"
  },
  {
    "url": "tags/html/index.html",
    "revision": "62dbb59146181a2fcd24fcf093227a34"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "434c5a1ac5ce8b1b447987690ab24429"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "31008f906b63773d4854f7e99259342a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2b2f70b0184080e2a1ff30eccee4a3c2"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "99d1651554aaa8afc9fcd704efe2d472"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "5e185140fd96768e2a2f156e22425144"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bc9eb4817c567d5a34d6017cc1dd73a9"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f931fbfbddc93f195c143b351892ca0d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "dea3f65ac05a446d13b024cecac2d24b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "cbc4bc4262e859c29b122176265ba503"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d921be425a8e9009db6e06ef8ab5f6ac"
  },
  {
    "url": "timeline/index.html",
    "revision": "d1cca524554879e39caa9574bc99ceca"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/css/css01.html",
    "revision": "38ce165a4fc8c0f76cf368232d3bd556"
  },
  {
    "url": "技术文章/html/html01.html",
    "revision": "ba24d863f480a88a10b16d0658b0e07c"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7df63cf74bbcbff8620d48cb92fb305a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "5b245e1dfa53bb3623a4d69eaf2126ec"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "55957f3467b6dd6eab3201c026194477"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "51e087ac6eb2ea4605dfa7458afe6020"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "7eec6ed9ca7d9ff81c9640f52826102d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "60061e513d3af21c8b219f8b951ed770"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
