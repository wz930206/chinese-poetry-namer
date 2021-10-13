<template>
  <van-overlay :show="nameDetailShow" @click="nameDetailShow = false" :lock-scroll="false">
    <div class="overlay-wrapper namer-detail" @click.stop>
      <img src="../assets/detail_back.jpg" />
      <div class="padding-10">
        <p class="main pb-5">{{nowName}}，笔画数：{{ wugeData.complex_name }}</p>
        <div class="pb-5">
          <p class="main">天格: {{ wugeData.天格 }}</p>
          <p class="desc">天格为根 - 天格乃祖先留下来的，其数理对个人影响不大</p>
        </div>
        <div class="pb-5">
          <p class="main">人格: {{ wugeData.人格 }}</p>
          <p class="desc">人格为苗 - 又称「主运」，是整个姓名的中心点</p>
        </div>
        <div class="pb-5">
          <p class="main">地格: {{ wugeData.地格 }}</p>
          <p class="desc">地格为花 - 又称为「前运」，主38岁以前</p>
        </div>
        <div class="pb-5">
          <p class="main">外格: {{ wugeData.外格 }}</p>
          <p class="desc">外格为叶 - 主管命运之灵力</p>
        </div>
        <div class="pb-5">
          <p class="main">总格: {{ wugeData.总格 }}</p>
          <p class="desc">总格为果 - 又称后运，主38岁以后</p>
        </div>
        <p class="main pb-5">三才: {{ wugeData.三才 }}</p>
        <p class="desc">三才五格只是参考，热爱生活，好运加倍</p>
      </div>
    </div>
  </van-overlay>
</template>

<script>
export default {
  props: {
    nowName: String,
    wugeData: Object
  },
  data() {
    return {
      nameDetailShow: false
    }
  }
}
</script>
