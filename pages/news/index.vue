<template>
  <div>
    <site name="产品资讯" />
    <main class="main">
      <div class="left">
        <div class="title">
          产品资讯
        </div>
        <div v-for="(item,index) in newsDetail.list" :key="index">
          <article-list :item="item" />
        </div>
        <pagination
          :total="newsDetail.total"
          :pageSize="pageSize"
          :pageNo="pageNo"
          :pageTotal="newsDetail.pageTotal"
          @next="next"
        />
      </div>
      <div class="right">
        <h3 class="title">
          热门产品资讯
        </h3>
        <div v-for="(item,index) in hotList" :key="index" class="right_box_audio">
          <img :src="item.cover" @click="toArticle(item.id)" :alt="item.title">
          <div>
            <a @click="toArticle(item.id)" target="_blank">{{ item.title }}</a>
            <span>{{ item.create_time.split(" ")[0] }}</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleList from '~/components/ArticleList'
import Pagination from '~/components/Pagination'
import Site from '~/components/Site'

export default {
  components: {
    'article-list': ArticleList,
    'pagination': Pagination,
    'site': Site
  },
  data () {
    return {
      newsDetail: [],
      hotList: [],
      pageNo: 1,
      pageSize: 10
    }
  },
  computed: {
    ...mapState(['audio'])
  },
  async asyncData ({ app, params }) {
    const hot = await app.$axios.post('/api/hotOtherNewsList', {})
    const other = await app.$axios.post('/api/otherNewsList', {
      pageNo: 1,
      pageSize: 10
    })
    return {
      hotList: hot.data.detail,
      newsDetail: other.data.detail
    }
  },
  head () {
    return {
      title: '热门资讯-深蓝保'
    }
  },
  created () {
  },
  methods: {
    next (e) {
      this.pageNo = e
      this.getData()
    },
    getData () {
      this.$axios.post('/api/otherNewsList', {
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }).then((res) => {
        this.newsDetail = res.data.detail
      })
    },
    toArticle (id) {
      const router = this.$router.resolve({
        path: `/article/${id}`
      })
      window.open(router.href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  &>div{
    box-sizing: border-box;
    padding: 0 20px;
    background: #ffffff;
  }
  .left{
    width: 900px;
    .title{
      font-size: 18px;
      color: #333;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #eaeaeb;
    }
  }
  .right{
    width: 280px;
    .title{
      font-size: 18px;
      color: #333;
      border-bottom: 1px solid #eaeaeb;
      height: 60px;
      line-height: 60px;
      font-weight: 500;
    }
    .right_box_audio{
      height: 95px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid #EDEDED;
      img {
        width: 81px;
        height: 60px;
        margin-right: 10px;
        cursor: pointer;
      }
      div {
        height: 60px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 14px;
        color: #333333;
        a {
          color: #333333;
          line-height: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-align: left;
          white-space: pre-wrap;
          width: 150px;
          &:hover{
            color: #2D7BFF
          }
        }
        span{
          font-size: 12px;
          color: #8E8E8E;
        }
      }
    }
  }
}
</style>
