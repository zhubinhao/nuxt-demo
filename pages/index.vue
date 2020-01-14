<template>
  <div>
    <Carousel :list="carouselArr" />
    <main @click="nactveTo" class="main">
      1211
    </main>
  </div>
</template>

<script>
import Carousel from '~/components/Carousel'

export default {
  components: {
    Carousel
  },
  head: {
    title: '深蓝保官网',
    meta: [
      { hid: 'description', name: 'description', content: '深蓝保光网首页' }
    ]
  },
  data () {
    return {
      carouselArr: [],
      list: [],
      tetx: 'wodehi',
      msg: ''
    }
  },
  async asyncData ({ app }) {
    const banners = await app.$axios.get('banners?type=1')
    const list = await app.$axios.post('api/articleList', {
      pageNo: 1,
      pageSize: 10
    })
    return {
      carouselArr: banners.data.detail,
      list: list.data.list
    }
  },
  // async fetch ({ app, store }) {
  //   await store.dispatch('GET_STARS')
  // },
  created () {
  },
  methods: {
    nactveTo () {
      this.$router.push('/article/119032011175919601')
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
