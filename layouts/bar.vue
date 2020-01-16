<template>
  <header class="bar">
    <div class="content">
      <div class="imgBox">
        <img src="~/static/logo_pc_1.svg" alt="深蓝保官网" class="logo1">
        <img src="~/static/logo_pc_2.svg" alt="深蓝保官网" class="logo2">
      </div>
      <nav class="link">
        <nuxt-link :class="{active:paths==='/'}" to="/" class="bar_a">首页</nuxt-link>
        <nuxt-link :class="{active:paths.includes('/evaluation')}" to="/evaluation" class="bar_a">产品评测</nuxt-link>
        <nuxt-link :class="{active:paths.includes('/insurance')}" to="/insurance/all" class="bar_a">精选产品</nuxt-link>
        <a href="https://xiaoshen365.com/login" target="_blank" class="bar_a">小深保管家</a>
        <nuxt-link :class="{active:paths.includes('/aboutus')}" to="/aboutus" class="bar_a">关于我们</nuxt-link>
      </nav>
      <div class="seach">
        <div>
          <i class="iconfont icon-search" />
        </div>
        <input v-model="keyworld" @keyup.enter="search" type="text" placeholder="输入搜索关键词">
        <a @click="search">搜索</a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      paths: '/',
      keyworld: ''
    }
  },
  watch: {
    $route (to, from) {
      this.paths = to.path
      this.setPath()
    }
  },
  created () {
    this.paths = this.$route.path
    this.setPath()
  },
  methods: {
    setPath () {
      this.$store.commit('changePath', this.paths)
    },
    search () {
      this.keyworld && this.$router.push(`/search/${this.keyworld}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: white;
  z-index: 88888;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  .content {
    width: 1200px;
    margin: 0 auto;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .imgBox {
      position: relative;
      top: 3px;
      margin-right: 100px;
      .logo1 {
        width: 50px;
      }
      .logo2 {
        position: relative;
        top: -8px;
        left: 10px;
      }
    }
  }
  .link {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .bar_a {
      margin: 0 15px;
      color: #000;
      font-size: 18px;
      height: 76px;
      line-height: 80px;
      text-decoration: none;
    }
    .active {
      color: #4379FE !important;
    }
  }
  .seach{
    width: 250px;
    box-sizing: border-box;
    height: 32px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    input{
      flex: 1;
      height: 32px;
      box-sizing: border-box;
      background: #F7F7F7;
      border: none;
      border-radius: 4px 0 0 4px;
      padding-left: 45px;
      outline: none;
      text-indent: 10px;
    }
    a{
      width: 50px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      background: #2D7BFF;
      border-radius: 0 4px 4px 0;
      color: white;
      font-size: 14px;
    }
    div{
      position: absolute;
      left: 0;
      top: 0;
      width: 45px;
      z-index: 2;
      line-height: 32px;
      height: 32px;
      text-align: center;
      &::after{
        content: "";
        position: absolute;
        width: 1px;
        height: 18px;
        background: #DBDBDB;
        position: absolute;
        top: 8px;
        left: 40px;
        z-index: 2;
      }
      .icon-search{
        font-size: 15px;
        color: #9A9A9A;
      }
    }
  }
}
</style>
