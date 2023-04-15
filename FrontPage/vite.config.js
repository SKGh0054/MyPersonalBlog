import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// ant-design-vue vite配置按需引入
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';


// 原配置
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     Components({
//       resolvers: [AntDesignVueResolver()],
//     }),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })



// 通用配置方法
export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
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


