<template>
  <div>
    <Carousel :list="carouselArr" />
    <main class="main">
      <div class="left">
        <div class="bar">
          <NuxtLink :class="{active:''===barIndex}" to="/insurance">全部</NuxtLink>
          <template v-for="(value, key) in barData">
            <NuxtLink :key="key" :class="{active:key===barIndex}" :to="'/insurance/'+key">{{ value }}</NuxtLink>
          </template>
        </div>
        <div class="content">
          <nuxt-child />
        </div>
      </div>
      <div>
        <Right />
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Carousel from '~/components/Carousel'
import Right from '~/components/Right'

export default {
  components: {
    Carousel,
    Right
  },
  data () {
    return {
      carouselArr: [],
      barData: {
        disease: '重疾险',
        medical: '医疗险',
        life: '寿险',
        accident: '意外险'
      }
    }
  },
  computed: {
    ...mapState(['audio', 'path']),
    ...mapGetters(['getParams']),
    title () {
      const name = this.barData[this.getParams.id]
      return `精选产品-${name ? name + '-' : ''}深蓝保`
    },
    barIndex () {
      return this.getParams.id || ''
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
      title: this.title
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
