const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    config.resolve.alias = {
      '@cs': path.join(process.cwd(), 'components'),
      '@sb': path.join(process.cwd(), 'stories'),
    };
    return config;
  },
}