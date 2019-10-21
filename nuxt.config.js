export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: 'assets/css/index.css' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    // TODO: do not extract CSS yet. it creates unnecessary page reflow. Need to investigate. Need create Critical css or other approach
    // https://github.com/nuxt/nuxt.js/issues/3091  It seems to me nuxt does not add preload to component CSS when extractCSS == true
    // extractCSS: () => process.env.NODE_ENV !== 'local',

    postcss: {
      plugins: {
        cssnano: {},
        'postcss-import': {},
      },
      preset: {
        stage: 2,
        importFrom: ['assets/css/theme.css', 'assets/css/theme-map.css'],
        features: {
          'nesting-rules': true,
          'custom-media-queries': true,
          'color-mod-function': true,
        },
      },
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
