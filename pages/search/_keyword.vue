<template>
  <div>
    12
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      detail: {}
    }
  },
  async asyncData ({ app, params }) {
    const { data } = await app.$axios.get(`/api/article?id=${params.keyword}`)
    return {
      detail: data.detail
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
