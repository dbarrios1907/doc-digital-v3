const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')
const path = require('path');

module.exports = nuxifyStorybook({
  webpackFinal (config, options) {

    // // extend config here
    // console.log(config.module.rules.filter(v => v.test.toString().indexOf('scss$') > 0)[0].oneOf[0].use[2]);
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   include: path.resolve(__dirname, './'),
    //   use: [{
    //     loader: 'style-resources-loader',
    //     options: {
    //       // includePaths: [path.resolve(__dirname, 'node_modules')],
    //       patterns: '../assets/styles/main.scss'
    //     }
    //   }]
    // });

    return config
  },
  stories: [
    // Add your stories here
    '../components/**/*.stories.@(js|mdx)'
  ],
  addons: [
    // Add your addons here
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.js?$/], // This is default
          include: [path.resolve(__dirname, './components')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    }

  ]
})
