<template>
  <div class="error">
    <img src="~/static/404.png">
    <span>出错啦！</span>
    <p class="msg">
      亲，你访问的页面地址有误或该页面不存在
    </p>
    <nuxt-link class="toIndex" to="/">返回首页</nuxt-link>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>
<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 220px 0;
  background: white;
  img {
    width: 302px;
    height: 250px;
  }
  .msg {
    font-size: 18px;
    color: #333333;
    letter-spacing: 0.75px;
    padding: 0;
    margin: 0;
  }
  .toIndex {
    background: #ffb02a;
    border-radius: 6px;
    width: 260px;
    height: 46px;
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    line-height: 46px;
    border: none;
    margin-top: 20px;
    cursor: pointer;
    text-decoration: none;
  }
  span {
    font-size: 24px;
    color: #333333;
    letter-spacing: 1px;
    position: absolute;
    top: 423px;
    font-weight: 700;
  }
}
</style>
