import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
//以下为官网按需导入方法
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const path = require('path');

export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // 将所有包含短横线的标签作为自定义元素处理
            isCustomElement: tag => tag === 'iconpark-icon'
          }
        }
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'assets': path.resolve(__dirname, './src/assets'),
        'views': path.resolve(__dirname, './src/views'),
        // 这里不能@,还是要写src
        'components': path.resolve(__dirname, './src/components')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {

          additionalData: `
      @use "assets/css/variable.scss" as *;
      @use "assets/css/mixin.scss" as *;
      @use "assets/css/theme.scss" as *;
      `
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: env.VITE_APP_PORT,
      proxy: {
        "api": {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    }
  }
})