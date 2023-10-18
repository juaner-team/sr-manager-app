import { defineConfig } from 'vite'
import path from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: [
        'vue',
        'uni-app',
        'pinia',
        {
          from: 'uni-mini-router',
          imports: ['createRouter', 'useRouter', 'useRoute']
        }
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/store'],
      eslintrc: {
        enabled: true,
        globalsPropValue: true
      }
    })
  ],
  server: {
    // port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api/': {
        target:
          'https://service-rbji0bev-1256505457.cd.apigw.tencentcs.com/release',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      },
      '/api-prod/': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api-prod/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components')
    }
  }
})
