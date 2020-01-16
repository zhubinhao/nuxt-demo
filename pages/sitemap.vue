<template>
  <div>
    <site name="网站地图" />
    <div class="sitemap">
      <div>
        <h3>保险投保指南</h3>
        <div>
          <NuxtLink to="article/0/list">最新文章</NuxtLink>
          <NuxtLink to="article/1/list">儿童保险</NuxtLink>
          <NuxtLink to="article/3/list">成人保险</NuxtLink>
          <NuxtLink to="article/2/list">老人保险</NuxtLink>
          <NuxtLink to="article/4/list">方案设计</NuxtLink>
          <NuxtLink to="article/5/list">理财保险</NuxtLink>
          <NuxtLink to="article/6/list">保险干货</NuxtLink>
          <NuxtLink to="/news">产品资讯</NuxtLink>
        </div>
      </div>
      <div>
        <h3>产品测评</h3>
        <div>
          <NuxtLink to="/evaluation">热门产品测评</NuxtLink>
          <NuxtLink to="/evaluation">产品测评</NuxtLink>
        </div>
      </div>
      <div>
        <h3>精选产品</h3>
        <div>
          <NuxtLink to="/insurance/disease">重疾险</NuxtLink>
          <NuxtLink to="/insurance/life">寿险</NuxtLink>
          <NuxtLink to="/insurance/medical">医疗险</NuxtLink>
          <NuxtLink to="/insurance/accident">意外险</NuxtLink>
        </div>
      </div>
      <div>
        <h3>小深保管家</h3>
        <div>
          <a href="https://xiaoshen365.com/" target="_blank">小深保管家</a>
        </div>
      </div>
      <div>
        <h3>关于我们</h3>
        <div>
          <NuxtLink to="/aboutus">关于我们</NuxtLink>
          <NuxtLink to="/aboutus/contact">联系我们</NuxtLink>
          <NuxtLink to="/aboutus/join">加入我们</NuxtLink>
        </div>
      </div>
      <div>
        <h3>保险百科</h3>
        <div>
          <NuxtLink to="/encyclopedia">保险百科</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Site from '~/components/Site'

export default {
  components: {
    'site': Site
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.sitemap{
  margin: 0 auto;
  position: relative;
  width: 1200px;
  background: #ffffff;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  h3 {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.67px;
  }
  a {
    height: 30px;
    line-height: 30px;
    background: #FFFFFF;
    border: 1px solid #E3E3E7;
    border-radius: 4px;
    padding: 0 10px;
    display: inline-block;
    font-size: 14px;
    color: #333333;
    margin: 15px 20px 20px 0;
    &:hover{
      color: white;
      background: #4379FE;
      border-color: #4379FE;
    }
  }
}
</style>
