<template>
  <footer class="footer">
    <p v-if="$store.state.path === '/'">
      我是首页
    </p>
    <p>我是不是首页</p>
  </footer>
</template>
<script>
</script>
<style>
  .footer{
    margin-top: 20px;
    height: 240px;
    background-color: white;
    border-top: 1px solid #E2E2E2;
    box-sizing: border-box;
  }
</style>
