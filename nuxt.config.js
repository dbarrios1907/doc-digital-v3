export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'doc-digital-v3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'bootstrap-vue/nuxt',
    'nuxt-purgecss',
  ],

  purgeCSS: {
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'plugins/**/*.ts',
    ],
    styleExtensions: ['.css', '.scss'],
  },

  bootstrapVue: {
    usePretranspiled: true,
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    directivePlugins: ['VBScrollspyPlugin'],
    componentPlugins: [
      'LinkPlugin',
      // 'LayoutPlugin',
      // 'JumbotronPlugin',
      // 'ImagePlugin',
      // 'NavbarPlugin',
    ],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        // 'postcss-nested': {},
        // 'postcss-responsive-type': {},
        // 'postcss-hexrgba': {},
        // 'postcss-import': {},
        // 'postcss-preset-env': this.preset,
        // '@fullhuman/postcss-purgecss': {
        //   content: [
        //     './pages/**/*.vue',
        //     './layouts/**/*.vue',
        //     './components/**/*.vue',
        //   ],
        //   safelist: ['html', 'body'],
        // extractors: [
        //   {
        //     extractor: (content) =>
        //       content
        //         .replace(/<style[\s\S]*>[\s\S]*<\/style>/gi, '')
        //         .match(/[\w-/:]+/g) || [],
        //
        //     extensions: ['vue', 'js', 'ts'],
        //   },
        // ],
        // },
        // cssnano: { preset: 'default' }, // disabled in dev mode
      },
      // order: 'presetEnvAndCssnanoLast',
      preset: {
        // Change the postcss-preset-env settings
        // stage: 2,
        autoprefixer: {
          flexbox: true,
          grid: true,
          overrideBrowserslist: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
        },
      },
    },
  },

  storybook: {
    // Options
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0',
  },
}
