<template>
  <div class="pagination">
    <span @click="change(1)">首页</span>
    <el-pagination
      :total="total"
      :page-size="pageSize||10"
      :current-page="pageNo"
      @current-change="change"
      layout="prev, pager, next"
    />
    <span @click="change(pageTotal)">尾页</span>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['total', 'pageNo', 'pageSize', 'pageTotal'],
  data () {
    return {
    }
  },
  methods: {
    change (e) {
      this.$emit('next', e)
    }
  }
}
</script>
<style lang="scss" scoped>
 .pagination{
    margin: 0 auto;
    padding: 30px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 14px;
      color: #333333;
      cursor: pointer;
      position: relative;
      top: -2px;
      &:hover{
        color: #409EFF
      }
    }
 }
</style>
