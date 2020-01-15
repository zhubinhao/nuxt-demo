<template>
  <div class="art_list">
    <el-image :src="item.cover" @click="to(item.id)" :alt="item.title" fit="cover" class="img" />
    <div class="div">
      <h2 @click="to(item.id)">
        <a v-html="item.title" />
      </h2>
      <p v-html="item.intro" />
      <div class="art_footer">
        <span>
          <i class="iconfont icon-time" />
          {{ item.create_time||item.updateTime }}
        </span>
        <span>
          <i class="iconfont icon-read" />
          {{ item.view }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['item'],
  data () {
    return {}
  },
  methods: {
    to (id) {
      const router = this.$router.resolve({
        path: `/article/${id}`
      })
      window.open(router.href, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
.art_list {
  min-height: 134px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px 0;
  .div{
    flex: 1;
    display: inline-block;
    min-height: 104px;
    padding-bottom: 20px;
    vertical-align: top;
    position: relative;
    box-sizing: border-box;
    a{
      &:hover{
        color: #2D7BFF
      }
    }
  }
  .img {
    width: 160px;
    height: 104px;
    background: #e5e5e5;
    margin-right: 26px;
    border: none;
    cursor: pointer;
  }
  h2{
    font-size: 18px;
    color: #333333;
    letter-spacing: 1.5px;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    margin: 0;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    color: #8E8E8E;
    letter-spacing: 0;
    line-height: 16px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .art_footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    font-size: 12px;
    color: #9A9A9A;
    span {
      display: inline-block;
      margin-right: 30px;
    }
    .iconfont {
      font-size: 14px;
      margin-right: 10px;
    }
  }
}
</style>
