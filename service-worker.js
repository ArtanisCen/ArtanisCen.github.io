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
    "revision": "f11aa4db8c5937d4e640ba5972fd5c22"
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
    "url": "assets/js/12.5908f90c.js",
    "revision": "681bf6602448b58a6d90d05a8033fd84"
  },
  {
    "url": "assets/js/13.e7e0117d.js",
    "revision": "38815ed252bd16ff9b3de88eccaafc9c"
  },
  {
    "url": "assets/js/14.d88653bc.js",
    "revision": "39027bd5de80c8774978f36453a145ed"
  },
  {
    "url": "assets/js/15.6388d71b.js",
    "revision": "4fa1c2f5675f4c728d602d51182e133e"
  },
  {
    "url": "assets/js/16.5142bd30.js",
    "revision": "da2f76d12431d9748958d848474bcbb2"
  },
  {
    "url": "assets/js/17.6f68a7fb.js",
    "revision": "f1f01e6fc0360a09d418a9f89f101a53"
  },
  {
    "url": "assets/js/18.e74dd62e.js",
    "revision": "6441087df79f1522875b81527c5c72f8"
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
    "url": "assets/js/app.45b5b641.js",
    "revision": "7ecdc51436b48fc62b32ab28e2347fe3"
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
    "revision": "6333a04b5786eaafbe9957233bb1a27d"
  },
  {
    "url": "categories/html/index.html",
    "revision": "0f016ad909e67fc35e1b1812fd843ba4"
  },
  {
    "url": "categories/index.html",
    "revision": "e77eb92b65cf395ecbf9f958650279dc"
  },
  {
    "url": "categories/java/index.html",
    "revision": "680306a8430b02d732c190ef679cd46a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7ae26bfabb6b7e5c879b6f4cec4a6272"
  },
  {
    "url": "categories/js/index.html",
    "revision": "6b94d108d38640d9e1ba14fe420cc9a9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d979b8949acdf452f35f6355068457b4"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "cdf47999b2cebc6542cbe48b4c63ae4e"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "3c5e6d4dc5873627eca69ab5d0df8709"
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
    "revision": "da454e7a7ab54bb095fd86c34983b115"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "cce356da3f98868032f479d1b36af648"
  },
  {
    "url": "tags/css/index.html",
    "revision": "4216924639f57cb93037a246bf42d902"
  },
  {
    "url": "tags/html/index.html",
    "revision": "11cc9b3a0adc88bb74f0a7e57cf0a8bb"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f663fa408550a97e2b40092a01ee6681"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "55ed5788f067dc8d70c6ebceb344d322"
  },
  {
    "url": "tags/js/index.html",
    "revision": "9505e9475d62a5cb4e2a5524fff616a5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "e6876f8e445dcd37e802cf30d0c59ae7"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9bcbffdb264ce700467d1994ed4b615d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "617d099b7c5b1c1cb7ab672316b72b82"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "ad9082f40996959711bb135e6c7a5870"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e0be1d41340c1ce30792388c2b349420"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "63ff6b71caf995ea1a89550967d554a3"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "7696ae84c2940b92ecc8abd62fd034b1"
  },
  {
    "url": "timeline/index.html",
    "revision": "1d8be11be8ed1b1b3ae9a927f4601b9b"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/css/css01.html",
    "revision": "47ebbe077aaed82c584ee14b9dff61aa"
  },
  {
    "url": "技术文章/html/html01.html",
    "revision": "291d87364f3ff5f9e15284ed6c7813fc"
  },
  {
    "url": "技术文章/index.html",
    "revision": "cc8ee7956a81080f829dec2e48b4bdaa"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "77bfa037ef1e14757a3e8a3078d65d1f"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "e5ca6f29ca40b064a47cef675806d1da"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "06957b17cfe5caff03484bae541e4a67"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "94d2fdea5d0f522a9bf12464aaa242a4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "06f99529e3f24bc39c7d775df5f5b17f"
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
