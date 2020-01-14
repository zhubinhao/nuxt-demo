<template>
  <div class="carousel">
    <el-carousel :interval="5000" trigger="click" height="360px">
      <el-carousel-item v-for="(item,index) in list" :key="index" :style="{background:item.color_value}">
        <a
          :href="item.target_url"
          :style="{backgroundImage: 'url(' + item.cover_url + ')'}"
          :alt="item.title"
          target="_blank"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['list'],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  min-width: 1200px;
  a{
    height: 360px;
    width: 100%;
    display: block;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center
  }
}
</style>
