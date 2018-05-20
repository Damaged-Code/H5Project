const CACHE_NAME = 'lzwme_cache_v1.0.0'; // 用于标注创建的缓存，也可以根据它来建立版本规范
// 列举要默认缓存的静态资源，一般用于离线使用
const urlsToCache = ['./ServiceWorker.html', './logo.png', './jquery.js'];

// self 为当前 scope 内的上下文
self.addEventListener('install', event => {
    // event.waitUtil 用于在安装成功之前执行一些预装逻辑
    // 但是建议只做一些轻量级和非常重要资源的缓存，减少安装失败的概率
    // 安装成功后 ServiceWorker 状态会从 installing 变为 installed
    event.waitUntil(
        // 使用 cache API 打开指定的 cache 文件
        caches.open(CACHE_NAME).then(cache => {
            console.log(cache);
            // 添加要缓存的资源列表
            return cache.addAll(urlsToCache);
        }),
    );
});
// 安装阶段跳过等待，直接进入 active
self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event =>
    event.waitUntil(
        Promise.all([
            // 更新客户端
            clients.claim(),
            // 清理旧版本
            caches.keys().then(cacheList =>
                Promise.all(
                    cacheList.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            caches.delete(cacheName);
                        }
                    }),
                ),
            ),
        ]),
    ),
);
