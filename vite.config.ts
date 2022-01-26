/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { fileURLToPath } from "url"
import vue from '@vitejs/plugin-vue'
import Icons from "unplugin-icons/vite"
import Components from "unplugin-vue-components/vite"

export default defineConfig({
  plugins: [
    vue(),
    Icons({ compiler: "vue3" }),
    Components({ dts: true }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  test: {
    environment: 'jsdom',
    coverage: {
      enabled: true,
      include: ['src/**/*.{js,ts,vue}']
    }
  }
})
