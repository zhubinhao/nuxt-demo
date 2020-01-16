<template>
  <footer class="footer">
    <div class="layout-footerc1">
      <div v-if="$store.state.path === '/'" style="margin-right: 80px">
        <h2 class="layout-footer_title">
          友情链接
        </h2>
        <div class="yqlj1">
          <a target="_blank" href="http://www.cbirc.gov.cn/" rel="nofollow">银保监</a>
          <a target="_blank" href="http://www.iachina.cn/" rel="nofollow">中保协</a>
          <a target="_blank" href="http://www.dajiabao.com/" rel="nofollow">大家保</a>
        </div>
      </div>
      <div style="margin-right: 110px">
        <h3 class="layout-footer_title">
          企业荣誉
        </h3>
        <div class="yqlj">
          <p>InsurStarㆍ最具创新力企业奖</p>
          <p>中国保险行业协会审核备案企业</p>
          <p>中国保险科技50强ㆍ保险科技引领者</p>
          <p>亚洲健康保险ㆍ优秀健康险平台</p>
        </div>
      </div>
      <div style="margin-right: 106px">
        <h3 class="layout-footer_title">
          关注我们
        </h3>
        <div class="layout-footer_icon_box">
          <el-popover
            placement="top"
            width="150"
            trigger="hover"
          >
            <div class="wxewm">
              <img src="~/static/wxewm.jpg">
              扫二维码关注我们
            </div>
            <i slot="reference" class="iconfont icon-wechat mr30" />
          </el-popover>
          <a class="weib mr30" href="https://weibo.com/p/1006066283856714" target="_blank" rel="nofollow">
            <i class="iconfont icon-weibo" />
          </a>
          <a href="https://www.zhihu.com/org/shen-lan-bao/" target="_blank" rel="nofollow">
            <img class="zhihu" src="~/static/svg/icon_zhihu.svg">
          </a>
        </div>
      </div>
      <div>
        <h3 class="layout-footer_title">
          联系我们
        </h3>
        <div class="layout-footer_er">
          <div style="height: 66px">
            <div class="icon_tel">
              <img src="~/static/svg/icon_tel.svg" class="img">
              <span>400-081-0388</span>
            </div>
            <p>工作日 09:30~12:00 14:00~18:00</p>
          </div>
          <div>
            <img src="~/static/2011.png">
            <span style="position: relative;left: 2px">
              微信客服
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="layout-footerc2">
      <div class="layout-footerc2_div">
        Copyright © 1998-2018 shenlanbao All Rights Reserved
      </div>
      <div class="layout-footerc2_div">
        深圳深蓝保信息技术有限公司
      </div>
      <a href="http://www.beian.miit.gov.cn/" target="_blank">粤ICP备15117049号</a>
      <a href="/sitemap" class="ditu dituAfter">
        <img src="~/static/svg/ditu.svg">
        网站地图
      </a>
      <a href="/p/encyclopedia" target="_blank" class="ditu">保险百科</a>
    </div>
  </footer>
</template>
<script>
</script>
<style lang="scss" scoped>
.footer {
  margin-top: 20px;
  min-height: 240px;
  background-color: white;
  border-top: 1px solid #e2e2e2;
  box-sizing: border-box;
  .layout-footerc1{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid #F0F0F0;
    padding-bottom: 10px;
    .layout-footer_title {
      font-size: 16px;
      color: #333333;
      padding: 26px 0;
      font-weight: 700;
      margin: 0;
    }
    .yqlj1 {
      a{
        color: #8E8E8E;
        margin-right: 30px;
        &:hover{
          color: #2D7BFF;
        }
      }
    }
    .yqlj {
      font-size: 14px;
      p{
        color: #8E8E8E;
        margin-bottom: 5px;
        margin-top: 0;
      }
    }
    .layout-footer_er {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      font-size: 14px;
      color: #ABABAB;
      &> div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      img {
        width: 62px;
        height: 62px;
        margin-bottom: 2px;
      }
      .icon_tel{
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        span{
          position: relative;
          top: -1px;
          font-size: 20px;
          color: #333333;
        }
      }
      p{
        font-size: 12px;
        color: #8E8E8E;
        margin-right: 30px;
      }
      .img{
        width: 24px;
        height: 24px;
        margin-right: 20px;
      }
    }
    .layout-footer_icon_box{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .zhihu{
        position: relative;
        top: 2px
      }
    }
    .icon-wechat{
      cursor: pointer;
      font-size: 32px;
      color: #5AC443;
    }
    .icon-weibo{
      font-size: 32px;
      color: #FF5348;
    }
    .icon-zhihu{
      font-size: 32px;
      color: #2D7BFF;
    }
  }
  .layout-footerc2 {
    display: flex;
    width: 1200px;
    justify-content: center;
    align-items: center;
    height: 56px;
    font-size: 14px;
    color: #8E8E8E;
    margin: 0 auto;
    .layout-footerc2_div {
      margin-right: 12px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 1px;
        height: 14px;
        background: #8E8E8E;
        right: -6px;
        top: 3px;
        z-index: 2;
      }
    }
    a{
      color: #8E8E8E;
      &:hover{
        color: #2D7BFF;
      }
    }
    .ditu{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      padding-right: 15px;
      margin-right: 15px;
      img {
        width: 22px;
        height: 22px;
        margin: 0 10px 0 20px;
      }
    }
    .dituAfter{
      position: relative;
      &::after{
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        height: 14px;
        width: 1px;
        background: #8E8E8E;
        z-index: 8;
        top: 5px;
      }
    }
  }
}
.wxewm{
  text-align: center;
  color: #2D7BFF;
  img {
    width: 150px;
    height: 150px;
    display: block
  }
}
</style>
