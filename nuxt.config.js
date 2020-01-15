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
      { hid: 'description', name: 'description', content: '深蓝保专注于保险领域，测评过上千款保险产品，帮你避开保险里的坑，明明白白买保险。帮助上万个家庭配置合适的保险方案，包括重疾险、定期寿险、医疗险、意外险。' },
      { hid: 'keywords', name: 'keywords', content: '深蓝保,专业保险测评,重疾险,医疗险,儿童保险,意外险' }
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
    'element-ui/lib/theme-chalk/index.css',
    '@assets/css/iconfont.css',
    '@assets/css/style.scss'
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
