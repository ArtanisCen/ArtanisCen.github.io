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
    "revision": "cee48a6c4a4c8b75f4d20ff0178ae30b"
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
    "url": "assets/js/16.cb432af5.js",
    "revision": "0fd64f7684010473efd683d5aa352f77"
  },
  {
    "url": "assets/js/17.5dc5fc69.js",
    "revision": "9c560421d6075a85dca95812e5c48021"
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
    "url": "assets/js/app.7b14aa7b.js",
    "revision": "ffda3904aaa65b73baba8b1a33c6f377"
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
    "revision": "b9eb67ca71826ec24112060ec06d6dd2"
  },
  {
    "url": "categories/html/index.html",
    "revision": "46220d60732e984cb6e091c7c5e1bdb9"
  },
  {
    "url": "categories/index.html",
    "revision": "bd7097c87c831c23dd162cbf85f6a82b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "bb8f3d5112f8b6d315c426e972805e2a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4294d508ce8344efc1bc768dd6c81cb3"
  },
  {
    "url": "categories/js/index.html",
    "revision": "7caca1303b583778c2d2a26b5d72d094"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0ec603dd0a74a9280f1bb4f353eb6705"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "dfc28eff943fd45b00680594049d811f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "306fc19cbb89725637d6bf7247db2cab"
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
    "revision": "5524caa63ecffa1d99c8f1077b7ce86d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "b81dea19df8ae5b1654b47d6d6af304a"
  },
  {
    "url": "tags/css/index.html",
    "revision": "8ab5189cb15f8292a2e7b364e867216e"
  },
  {
    "url": "tags/html/index.html",
    "revision": "648dc3b9bc5d4eda5cd47a76219a4796"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4be2a4c755b83418f3597b64dde8aa8c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a9f22e41bf21d560af6e65717d65e408"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a0907bbd7862db5d032f4432a7eb6ce9"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "4ad0d16b1ede2e46831ffd581f78dd14"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "47299c4b10d056db74c9784bd25cc320"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "77c697333601e70f76389bb377307f3e"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "0e030d5a81e35b468d7ab6927873cee5"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8e2e5591351ece05c5f4f68d1a40fb39"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "118f52f425a6061db6ff6bef0ae9dc70"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1e4b1f5bad71bc3d286a74eb7095488e"
  },
  {
    "url": "timeline/index.html",
    "revision": "583ae3f4c6da7493b79bf07751556116"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/css/css01.html",
    "revision": "b789af9935b655b3ecea82229a61b29e"
  },
  {
    "url": "技术文章/html/html01.html",
    "revision": "6cb40e3649a835cfee3590dfb2af4fb0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e159cd726091572f856bd3a3f26ba372"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "680d9cdba945aac9b2dde8fc3bb306c1"
  },
  {
    "url": "技术文章/javascript/js01.html",
    "revision": "3c0bbde06ae622cc8fafbe2422d6940f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "13054996262580cd2eb079b17f3386b6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "c0e72b6f91607488160c68fda5b29b3b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e26dea3997c373e9728d83fa3a60e26f"
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
