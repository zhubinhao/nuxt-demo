<template>
  <div class="site">
    <i class="iconfont icon-weizhi" />
    <nuxt-link to="/">首页</nuxt-link>
    <i class="iconfont icon-more" />
    <span>{{ name }}</span>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['name'],
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.site{
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #9A9A9A;
    a{
      color: #9A9A9A;
      &:hover{
        color: #2D7BFF;
      }
    }
    .icon-more{
      font-size: 12px;
      font-weight: 100;
    }
}
</style>
