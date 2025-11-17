import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),viteReact(), vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
