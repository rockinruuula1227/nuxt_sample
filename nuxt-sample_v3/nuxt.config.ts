// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: [
    '@/assets/styles/foundation/_index.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/global/_index.scss";'
        }
      }
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  }
})
