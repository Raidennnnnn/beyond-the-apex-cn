import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { VitePWA } from 'vite-plugin-pwa'
import pwaConfig from './pwa-config'

export default defineConfig({
  base: "/beyond-the-apex-cn/",
  plugins: [
    react(), 
    VitePWA(pwaConfig)
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
