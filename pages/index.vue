<template>
  <div class="container">
    <div @click="nactveTo">
      <About :arr="barType" />
    </div>
  </div>
</template>

<script>
import About from '~/components/About'

export default {
  components: {
    About
  },
  head: {
    title: '深蓝保官网',
    meta: [
      { hid: 'description', name: 'description', content: '深蓝保光网首页' }
    ]
  },
  data () {
    return {
      barType: [],
      tetx: 'wodehi',
      msg: ''
    }
  },
  async asyncData ({ app }) {
    const type = await app.$axios.get('banners?type=1')
    return {
      barType: type.data.detail
    }
  },
  async fetch ({ app, store }) {
    // const { data } = await app.$axios.get('banners?type=1')
    // store.commit('setData', data)
    await store.dispatch('GET_STARS')
  },
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
.container {
  padding: 10px;
}

</style>
