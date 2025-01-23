import { VitePWAOptions } from "vite-plugin-pwa";

export default {
  registerType: 'autoUpdate',
  devOptions: {
    enabled: true,
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,gif,svg,ico,json,webp}'],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/chinese-fonts-cdn\.deno\.dev\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'chinese-fonts-cdn',
          expiration: { 
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/ik\.imagekit\.io\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'imagekit',
          expiration: { 
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  includeAssets: ['apple-touch-icon-180x180.png'],
  manifest: {
    name: 'Beyond the Apex cn',
    short_name: 'Beyond the Apex cn',
    description: 'Beyond the Apex chinese version, translated and created by ai, instructions by raidennnnnn',
    theme_color: '#000000',
    icons: [
      {
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
    display_override: ['fullscreen', 'standalone', 'window-controls-overlay'],
    screenshots: [
      {
        src: 'desktop.webp',
        sizes: '1788x1004',
        type: 'image/webp',
        form_factor: 'wide',
        label: 'Desktop HomeScreen',
      },
      {
        src: 'mobile.webp',
        sizes: '390x844',
        type: 'image/webp',
        form_factor: 'narrow',
        platform: 'ios',
        label: 'Mobile HomeScreen',
      },
    ],
  }
} as VitePWAOptions;
  