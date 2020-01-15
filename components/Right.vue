<template>
  <div class="right">
    <!-- 关注微信公众号 -->
    <div class="right_box pd20 mb20">
      <div class="title">
        <img src="~/static/svg/icon_gzwm.svg">
        <div class="ev_Title">
          <h3>关注微信公众号</h3>
          <p>{{ num }}万用户信赖，专注保险测评</p>
        </div>
      </div>
      <img src="~/static/code_gzwm.png" class="ev_er" alt="深蓝保官网">
      <p>
        公众号回复：
        <span class="blue">方案</span>
      </p>
      <p>免费获取家庭投保方案</p>
    </div>
    <!-- 品牌数据 -->
    <div class="right_box pd20 mb20">
      <div class="title">
        <img src="~/static/svg/icon_ppsj.svg">
        <h3>品牌数据</h3>
      </div>
      <div class="right_box_ju">
        <div v-for="(item,index) in brand" :key="index" :style="{width: item.width}">
          <span>{{ item.num }}</span>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <!-- 企业荣誉 -->
    <div class="right_box mb20 pd15">
      <div class="title">
        <img src="~/static/svg/icon_qyry.svg">
        <h3>企业荣誉</h3>
      </div>
      <p v-for="(item,index) in honor" :key="index" class="right_box_p">
        {{ item }}
      </p>
    </div>
    <!-- 广告 -->
    <div class="right_box2 mb20">
      <img src="~/static/banner_mflq.png" alt="深蓝保官网">
    </div>
    <!-- 深蓝保音频 -->
    <div class="right_box mb20" style="padding-bottom:0">
      <div @click="open('https://www.ximalaya.com/shangye/16863642/')" class="title pointer">
        <img src="~/static/svg/icon_slbyp.svg">
        <h3> 深蓝保音频</h3>
        <i class="iconfont icon-more" />
      </div>
      <div v-for="(item,index) in audio" :key="index" class="right_box_audio">
        <img :src="item.cover_url" :alt="item.title">
        <div>
          <a :href="item.target_url" rel="nofollow" target="_blank">{{ item.title }}</a>
          <span>{{ item.create_time }}</span>
        </div>
      </div>
    </div>
    <!-- 产品资讯 -->
    <div class="right_box" style="padding-bottom: 20px;">
      <div @click="open('/news')" class="title pointer">
        <img src="~/static/svg/icon_cpzx.svg"><h3> 产品资讯 </h3>
        <i class="iconfont icon-more" />
      </div>
      <p class="right_box_p">
        深蓝保为您提供最新产品条款、产品计划书、案例分析解读...
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      num: 170,
      brand: [{
        num: '1,736,857',
        name: '用户',
        width: '30%'
      },
      {
        num: '808,450,000+',
        name: '传播影响力'
      },
      {
        num: '51,278',
        name: '保障方案',
        width: '30%'
      },
      {
        num: '368,210,000+',
        name: '累计节省保费'
      }],
      honor: [
        'InsurStarㆍ最具创新力企业奖',
        '中国保险行业协会审核备案企业',
        '2019年度ㆍ最受微保用户欢迎大咖奖',
        '中国保险科技50强ㆍ保险科技引领者',
        '亚洲健康保险ㆍ优秀健康险平台'
      ]
    }
  },
  computed: {
    ...mapState(['audio'])
  },
  methods: {
    open (url) {
      url.includes('http') ? window.open(url) : this.$router.push(url)
    }
  }
}
</script>
<style lang="scss" scoped>
.right {
  width: 280px;
  .icon-more{
    color: #CCCCCC;
    font-size: 12px;
    position: absolute;
    right: 0px;
    top: 22px;
  }
  .right_box {
    width: 280px;
    box-sizing: border-box;
    background-color: white;
    padding: 0 20px;
    .ev_er {
      width: 146px;
      height: 146px;
      display: block;
      margin: 20px auto 10px auto;
    }
    p {
      text-align: center;
      font-size: 14px;
      color: #8e8e8e;
      margin: 6px 0 0 0;
    }
    .right_box_p{
      color: #333333;
      text-align: left;
      line-height: 22px;
      margin: 10px 0 0;
    }
  }
  .title {
    height: 57px;
    border-bottom: 1px solid #ededed;
    font-size: 14px;
    color: #333333;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    font-weight: 500;
    h3 {
      height: 20px;
      font-size: 14px;
      font-weight: 500;
    }
    p {
      font-size: 12px;
      color: #8e8e8e;
      margin: 0;
    }
    img{
      margin-right: 10px;
      width: 19px;
    }
  }
  .right_box_ju {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    &>div {
      width: 45%;
      height: 42px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #8E8E8E;
      padding: 20px 0 0 0;
      & span:first-child{
        font-size: 16px;
        color: #333333;
        margin-bottom: 5px;
        font-weight: bold;
      }
   }
  }
  .pointer{
    cursor: pointer;
  }
  .right_box_audio {
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
    div{
      height: 60px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      font-size: 14px;
      color: #333333;
      a{
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
          color: #2D7BFF;
        }
      }
      span {
        font-size: 12px;
        color: #8E8E8E;
      }
    }
  }
}
</style>
