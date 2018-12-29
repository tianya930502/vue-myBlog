const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // {
    //   src: '*.scss',
    //   lang: 'scss'
    // }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // "transform-vue-jsx",
    // "transform-runtime",
    // ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }]
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // 请求代理配置，解决跨域
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  // 代理服务器
  proxy: [
    [
      '/api',
      {
        target: 'http://localhost:3000', // api主机
        pathRewrite: { '^/api' : '/' }
      }
    ]
  ],
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
