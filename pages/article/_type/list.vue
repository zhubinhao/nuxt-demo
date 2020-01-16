<template>
  <div class="article">
    qwq
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.type
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
