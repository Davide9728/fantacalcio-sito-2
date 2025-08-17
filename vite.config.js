import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fantacalcio-sito/',         // <-- es. '/fantacalcio-sito/'
  build: { outDir: 'docs' }    // builda nella cartella 'docs'
})
