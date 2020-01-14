<template>
  <ul class="ins_listur">
    <li v-for="(item,index) in list" :key="index">
      <el-image
        :src="item.image_url"
        @click="er(item.buy_url)"
        :alt="item.name"
        class="ins_listurDiv"
        fit="cover"
      />
      <div class="ins_content1">
        <h1>
          <a @click="er(item.buy_url)">{{ item.name }}</a>
          | {{ item.company_name }}
        </h1>
        <p class="tags">
          <span>保障期限：{{ item.protect_period }}</span>
          <span>承保年龄：{{ item.insure_age }}</span>
        </p>
        <template v-for="(i,key) in 4">
          <div :key="key" v-if="item['key'+i]!=''" class="label">
            <!-- <img class="dui" src="/web/img/dui.svg" alt> -->
            {{ item['key'+i] }}
          </div>
        </template>
        <div class="info">
          <div>
            <template v-for="(v,key) in item.protected_item">
              <p :key="key" v-if="key%2==0">
                {{ v }}
              </p>
            </template>
          </div>
          <div>
            <template v-for="(v,key) in item.protected_item">
              <p :key="key" v-if="key%2==1">
                {{ v }}
              </p>
            </template>
          </div>
        </div>
      </div>
      <div class="ins_right">
        <span class="price">
          <span style="font-size: 18px;font-family: '黑体'">¥</span>
          {{ item.price }}
        </span>
        <div>
          <!-- <a @click="consulting(item)" v-if="show" class="cp">预约咨询</a> -->
          <a
            @click="open(item.related_product_id)"
            v-if="item.related_product_id"
            class="cp"
          >产品测评</a>
          <button @click="open(item.buy_url)">
            <a rel="nofollow">立即购买</a>
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['list'],
  data () {
    return {}
  },
  methods: {
    open (url) {
      url.includes('http') && window.open(url)
    }
  }
}
</script>
<style lang="scss" scoped>
.ins_listur {
  li {
    min-height: 179px;
    position: relative;
    background: #fff;
    overflow: hidden;
    border-bottom: 1px solid #ededed;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    padding: 20px 0;
  }
  .ins_listurDiv {
    width: 140px;
    height: 130px;
    background-color: grey;
    margin-right: 20px;
    cursor: pointer;
  }
  .ins_content1 {
    flex: 1;
    position: relative;
    box-sizing: border-box;
    a {
      cursor: pointer;
    }
    a:hover {
      text-decoration: none;
      color: #4379fe;
    }
  }
  .tags {
    margin: 6px 0;
    font-size: 12px;
    color: #8e8e8e;
    span {
      margin-right: 27px;
    }
  }
  img {
    width: 140px;
    transition: all 0.6s;
  }
  h1 {
    font-size: 18px;
    color: #333333;
    letter-spacing: 0.92px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info {
    font-size: 12px;
    color: #333333;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 15px;
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
      margin-bottom: 2px;
      color: #333333;
      min-width: 150px;
      margin-right: 20px;
    }
  }
  .label {
    display: inline-block;
    margin-right: 30px;
    font-size: 12px;
    color: #333333;
    height: 20px;
    .dui {
      width: 16px;
      height: 16px;
      margin-right: 10px;
      margin-top: 10px;
      vertical-align: bottom;
    }
  }
  .ins_right {
    max-width: 290px;
    min-width: 220px;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    box-sizing: border-box;
    .insurs {
      display: inline-block;
      background: #f9fbff;
      border: 1px solid #e3ebff;
      padding: 10px 13px;
      font-size: 16px;
      color: #497eff;
      letter-spacing: 1px;
      margin: 16px 20px 0 0;
    }
    .price {
      display: block;
      font-size: 36px;
      color: #f5a825;
      margin-bottom: 28px;
    }
    p {
      background-color: white;
      color: #f5a825;
      margin-right: 4px;
      width: 90px;
      height: 34px;
      font-size: 16px;
      box-sizing: border-box;
      border-radius: 2px;
      text-align: center;
      line-height: 32px;
      display: inline-block;
      border: 1px solid #f5a825;
      &:hover {
        background: #f5a825;
        color: white;
      }
    }
    button {
      width: 90px;
      height: 34px;
      font-size: 16px;
      color: white;
      margin: 0;
      box-sizing: border-box;
      border-radius: 2px;
      text-align: center;
      line-height: 32px;
      background: #f5a825;
      outline: none;
      cursor: pointer;
      border: 1px solid #f5a825;
      &:hover {
        background: rgb(255, 197, 85);
        color: white;
        border: 1px solid rgb(255, 197, 85);
      }
    }
    .cp{
      background-color: white;
      color:#F5A825 ;
      margin-right: 4px;
      width: 90px;
      height: 34px;
      font-size: 16px;
      box-sizing: border-box;
      border-radius: 2px;
      text-align: center;
      line-height: 32px;
      display: inline-block;
      border: 1px solid #F5A825;
      cursor: pointer;
      &:hover{
        background: #F5A825;
        color: white;
      }
    }
  }
}
</style>
