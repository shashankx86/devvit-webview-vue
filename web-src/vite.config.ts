import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 5024,
      deleteOriginFile: true, 
      verbose: true,
      compressionOptions: {
        level: 9 
      }
    })
  ],
  root: './web-src',
  build: {
    outDir: resolve(__dirname, '../webroot'),
    emptyOutDir: true
  }
})