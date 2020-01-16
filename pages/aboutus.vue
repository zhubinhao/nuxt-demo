<template>
  <div class="aboutus">
    <nav>
      <NuxtLink :class="{active:path==='/aboutus'}" to="/aboutus" class="tab1">关于我们</NuxtLink>
      <div>
        <a @click="change('one')" class="tab2">团队理念</a>
        <a @click="change('two')" class="tab2">产品&服务</a>
        <a @click="change('three')" class="tab2">发展历程</a>
        <a @click="change('four')" class="tab2">品牌数据</a>
      </div>
      <NuxtLink :class="{active:path==='/aboutus/contact'}" to="/aboutus/contact" class="tab1 border">联系我们</NuxtLink>
      <NuxtLink :class="{active:path==='/aboutus/join'}" to="/aboutus/join" class="tab1">加入我们</NuxtLink>
    </nav>
    <div class="content">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
  },
  data () {
    return {
      barType: [],
      tetx: 'wodehi',
      msg: ''
    }
  },
  computed: {
    ...mapState(['path'])
  },
  head () {
    return {
      title: '深蓝保官网',
      meta: [
        { hid: 'description', name: 'description', content: '深蓝保光网首页' }
      ]
    }
  },
  created () {
  },
  methods: {
    change (e) {
      this.$router.push('/aboutus')
    }
  }
}
</script>

<style lang="scss" scoped>
.aboutus{
  width: 1200px;
  margin: 0 auto ;
  padding-top: 20px;
  nav{
    position: fixed;
    width: 280px;
    background-color: #ffffff;
    top: 100px;
    height: 399px;
    box-sizing: border-box;
    .tab1{
      display: block;
      height: 57px;
      line-height: 57px;
      font-size: 16px;
      color: #8E8E8E;
      cursor: pointer;
      padding-left: 20px;
      box-sizing: border-box;
      text-decoration: none;
      position: relative;
    }
    .border::after{
      content: "";
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 0px;
      height: 1px;
      background: #EDEDED;
      z-index: 2;
    }
    .tab2{
      display: block;
      height: 57px;
      line-height: 57px;
      font-size: 16px;
      color: #333333;
      cursor: pointer;
      padding-left: 40px;
      box-sizing: border-box;
    }
    .active{
      background: #4379FE;
      color: #FFFFFF !important;
      border-color: #4379FE;
      &::after{
        background: #4379FE;
      }
    }
  }
  .content{
    width: 900px;
    background-color: #ffffff;
    margin-left: 300px;
    min-height: 606px;
  }
}
</style>
