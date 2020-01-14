<template>
  <div>
    <Product :list="list" />
  </div>
</template>

<script>
import Product from '~/components/Product'

export default {
  components: {
    Product
  },
  validate ({ params }) {
    const str = 'alldisease,medical,life,accident'
    return str.includes(params.id)
  },
  data () {
    return {
      list: []
    }
  },
  async asyncData ({ app, params }) {
    const type = params.id === 'all' ? '' : params.id.toUpperCase()
    const list = await app.$axios.get(`/store/products?type=${type}&page_size=100`)
    return {
      list: list.data.list
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
