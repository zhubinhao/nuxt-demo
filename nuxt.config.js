module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '深蓝保',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  ** '@/components/loading.vue'
  */
  loading: {
    color: 'black',
    height: '1px'
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true, // 表示开启代理
    // baseURL:
    // process.env.__ENV === 'production'
    //   ? 'http://192.168.0.233:8084/'
    //   : 'http://192.168.0.233:8083/',
    withCredentials: true // 表示跨域请求时是否需要使用凭证
  },
  env: {
    __ENV: process.env.__ENV
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    vendor: ['element-ui', 'axios'],
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}
