import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const page = (file) => fileURLToPath(new URL(file, import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/week12-react/',
  build: {
    rollupOptions: {
      // One HTML file per page, so every task is its own web page.
      input: {
        main: page('./index.html'),
        task1: page('./task1.html'),
        task2: page('./task2.html'),
        task3: page('./task3.html'),
        task4: page('./task4.html'),
        task5: page('./task5.html'),
      },
    },
  },
})
