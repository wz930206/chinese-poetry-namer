<!--
 * @Author: your name
 * @Date: 2021-09-28 16:40:38
 * @LastEditTime: 2021-10-13 16:48:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chinese-poetry-namer\src\views\home\index.vue
-->
<!-- home -->
<template>
  <div class="index-container">
    <van-tabs v-model="tabActive" color="#5677fc">
      <van-tab title="随机取名">
        <gushi-namer />
      </van-tab>
      <van-tab title="参数取名">
        <pipi-namer />
      </van-tab>
      <van-tab title="三才五格">
        <namer-detail />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import gushiNamer from './components/gushiNamer.vue'
import pipiNamer from './components/pipiName.vue'
import namerDetail from './components/namerDetail.vue'
export default {
  components: {
    gushiNamer,
    pipiNamer,
    namerDetail
  },
  data() {
    return {
      tabActive: 0
    }
  }
}
</script>
<style lang="scss">
.index-container {
  p {
    margin: 0;
    padding: 12px 0;
  }
  .wrapper {
    margin-top: 15px;;
    padding: 12px;
    background: #fff;
  }
  .item {
    font-size: 14px;
  }
  .active {
    color: #5677fc;
    font-weight: bold;
  }
  .inactive {
  }
  .btn {
    margin: 20px 0;
  }
  .title {
    font-size: 14px;
    text-align: center;
  }
  .name {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  i {
    // color: #000;
    font-style: normal; // text-decoration: underline;
    padding: 0 2px;
    font-size: 20px;
    font-weight: bold;
  }
  .pt15 {
    padding-top: 15px;;
  }
  .tips {
    color: #5677fc;
  }
  .overlay-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    margin-top: -250px;
    background-color: #fff;
    border-radius: 5px;
  }
  .namer-detail {
    img {
      width: 100%;
    }
    p {
      padding: 0;
      margin: 0;
    }
    .padding-10 {
      padding: 10px;
    }
    .pb-5 {
      padding-bottom: 5px;
    }
    .main {
      font-size: 14px;
    }
    .desc {
      font-size: 12px;
      color: #999;
    }
  }
  .mt-12 {
    margin-top: 12px;
  }
}
</style>
