import webpack from "webpack";

export default {
  srcDir: "src/",
  
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-sample',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/_html5reset.scss",
    "~/assets/scss/_base.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/localStorage",
    // "~/plugins/vueScrollto"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/moment",
    "@nuxtjs/style-resources",
    "nuxt-webfontloader"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: "lodash",
      })
    ]
  },

  generate: {
    fallback: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  moment: {
    timezone: true,
    defaultTimezone: "Japan/Tokyo",
    defaultLocale: "ja",
    locales: ["ja"]
  },

  storybook: {
    stories: [
      "~/../storybook/**/*.stories.mdx",
      "~/../storybook/**/*.stories.@(js|jsx|ts|tsx)"
    ]
  },

  styleResources: {
    scss: [
      "~/assets/scss/_variables.scss",
    ]
  },

  webfontloader: {
    google: {
      families: ["Noto+Sans+JP:400,500,700"]
    }
  },

  watchers: {
    webpack: {
      poll: true
    }
  }

}
