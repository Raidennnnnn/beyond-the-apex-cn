if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/beyond-the-apex-cn/sw.js', { scope: '/beyond-the-apex-cn/' })})}