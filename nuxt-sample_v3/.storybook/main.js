const path = require('path');
const {
  mergeConfig
} = require('vite');
module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y", {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  }, "@storybook/addon-mdx-gfm"],
  "framework": {
    name: "@storybook/vue3-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  "staticDirs": [
    { from: "../src/assets", to: "assets"},
    { from: "../public", to: "./"},
  ],
  viteFinal: async config => {
    config.resolve.alias['@'] = path.resolve(__dirname, "../src");
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `
            @use "../src/assets/styles/global/_index.scss" as *;
              `
          }
        }
      }
    });
  },
  docs: {
    autodocs: true
  }
};