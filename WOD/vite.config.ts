import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
      coverage: {
        provider: 'istanbul', // or 'v8'
        reporter: ['lcov', 'text', 'json', 'html']
      }
  }
})
