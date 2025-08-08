import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
css: {
    devSourcemap: true // 💡 개발 환경에서 CSS 소스맵 활성화
  }

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
