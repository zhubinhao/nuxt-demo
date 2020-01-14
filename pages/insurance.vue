<template>
  <div>
    <Carousel :list="carouselArr" />
    <main class="main">
      <div class="left">
        <div class="bar">
          <template v-for="(value, key) in barData">
            <NuxtLink
              :key="key"
              :class="{active:key===barIndex}"
              :to="'/insurance/'+key"
            >
              {{ value }}
            </NuxtLink>
          </template>
        </div>
        <div class="content">
          <nuxt-child />
        </div>
      </div>
      <div>1</div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Carousel from '~/components/Carousel'

export default {
  components: {
    Carousel
  },
  data () {
    return {
      title: '精选产品-深蓝保',
      carouselArr: [],
      barData: {
        all: '全部',
        disease: '重疾险',
        medical: '医疗险',
        life: '寿险',
        accident: '意外险'
      },
      barIndex: 'all'
    }
  },
  computed: {
    ...mapState(['audio'])

  },
  watch: {
    $route (to, from) {
      this.barIndex = to.params.id
      const name = this.barData[to.params.id]
      this.title = `精选产品-${name === '全部' ? '' : name + '-'}深蓝保`
    }
  },
  async asyncData ({ app, params }) {
    const banners = await app.$axios.get('banners?type=4')
    return {
      carouselArr: banners.data.detail
    }
  },
  async fetch ({ store }) {
    await store.dispatch('GET_AUDIO')
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: '深蓝保专注于保险领域，测评过上千款保险产品，帮你避开保险里的坑，明明白白买保险。帮助上万个家庭配置合适的保险方案，包括重疾险、定期寿险、医疗险、意外险。' },
        { hid: 'keywords', name: 'keywords', content: '深蓝保,专业保险测评,重疾险,医疗险,儿童保险,意外险' }
      ]
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.main{
  width: 1200px;
  margin: 0 auto;
  padding-top:20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .left{
    width: 900px;
    .bar{
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      height: 60px;
      line-height: 60px;
      background: #F9F9F9;
      a{
        flex: 1;
        text-align: center;
        position: relative;
        cursor: pointer;
        text-decoration: none;
        color: #333333;
      }
      & a::after {
        content: "";
        width: 1px;
        height: 30px;
        background: #DCDCDC;
        position: absolute;
        top: 15px;
        right: 0;
        z-index: 9;
      }
      & a:last-child::after {
          background: #F9F9F9;
      }
      .active{
        color: #2D7BFF;
        background: white;
        position: relative;
      }
      .active::before {
        content: "";
        width: 1px;
        height: 30px;
        background: #F9F9F9;
        position: absolute;
        top: 15px;
        left: -1px;
        z-index: 99;
      }
      .active::after {
        content: "";
        width: 1px;
        height: 30px;
        background: #F9F9F9;
        position: absolute;
        top: 15px;
        right: -1px;
        z-index: 99;
      }
    }
    .content{
      width: 900px;
      box-sizing: border-box;
      padding: 0 20px;
      background: #ffffff;
    }
  }
}
</style>
