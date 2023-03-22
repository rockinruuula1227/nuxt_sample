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
          additionalData: `
          @use "@/assets/styles/global/_index.scss" as *;
        `
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
