<template>
  <div @click="click" class="article">
    <div class="left">
      <h1>{{ detail.articleDetail.title }}</h1>
      <div v-html="detail.articleDetail.content" v-if="detail" />
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  validate ({ params }) { // 验证id
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      detail: {},
      tetx: 'wodehi',
      msg: '',
      id: ''
    }
  },
  async asyncData ({ app, params }) {
    const { data } = await app.$axios.get(`/api/article?id=${params.id}`)
    return {
      detail: data.detail
    }
  },
  head () {
    return {
      title: this.detail && this.detail.articleDetail.title,
      meta: [
        { hid: 'description', name: 'description', content: this.detail && this.detail.articleDetail.intro },
        { hid: 'keywords', name: 'keywords', content: this.detail && this.detail.articleDetail.intro }
      ]
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  methods: {
    click () {
      // 打开新页面
      // const routeData = this.$router.resolve('/article/119031311185893401')
      // window.open(routeData.href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  width: 1200px;
  margin: 0 auto;
  .left{
    font-size: 15px;
    text-align: left;
    line-height: 1.8;
    color: #333;
    width: 900px;
    box-sizing: border-box;
    background-color: white;
    padding: 0 30px 20px 30px;
    /deep/ img {
      max-width: 100%;
      height: auto;
      margin: 10px 0;
    }
    /deep/ blockquote {
      color: #666;
      background: #f6f9fd;
      padding: 10px 20px;
      margin: 10px 0 10px 0;
      border-left: 5px solid #add4f5;
    }
    /deep/  a {
      color: #1F63F9;
      text-decoration: none
    }
    /deep/ ul{
      padding: 10px 0 10px 0px;
      margin-left: 20px;
    }
  }
}
</style>
