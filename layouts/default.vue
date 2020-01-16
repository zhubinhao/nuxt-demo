<template>
  <div class="app">
    <Bar />
    <div class="nuxt">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '~/layouts/footer'
import Bar from '~/layouts/bar'

export default {
  components: {
    Footer,
    Bar
  }
}
</script>
<style>

.app{
  background-color: #F0F0F0;
}
* {
 font-family: "思源黑体", "microsoft yahei", "微软雅黑";
 margin: 0;
 padding: 0;
}
.nuxt{
  margin-top: 80px;
}

</style>
