import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  server: {
    port: 5175,        // 원하는 포트 번호
    host: '0.0.0.0',   // 컨테이너 안에서 외부 접근 가능하게(npm run dev 사용)
  },
  // 👇 여기에 빌드 옵션을 새로 추가했습니다!
  build: {
    rollupOptions: {
      external: [], // 빌드 시 에러를 유발하는 external 모듈 체크를 무시하도록 비워둠
    }
  }
})