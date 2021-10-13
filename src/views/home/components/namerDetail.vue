<template>
  <div class="wrapper">
    <p class="title">根据姓名，查看三才五格配置，仅支持单姓复名</p>
    <p class="title">温馨提示：三才五格只是参考，热爱生活，好运加倍。</p>
    <van-field
      v-model="checkName"
      required
      label="姓名"
      placeholder="姓名"
      maxlength="3"
      @input="input"
    />
    <van-button @click="submit" class="btn" block color="#5677fc" :loading="btnLoading" loading-text="加载中...">
      提交
    </van-button>
    <van-grid :gutter="10" :column-num="1" v-show="wugeData && checkName" :center="false">
      <van-grid-item class="namer-detail">
        <p class="main pb-5">{{checkName}}，笔画数：{{ wugeData.complex_name }}</p>
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
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getNameDetail } from '@/api/home'
import { Toast } from 'vant'
export default {
  data() {
    return {
      checkName: '吴三桂',
      btnLoading: false,
      wugeData: ''
    }
  },
  methods: {
    input() {
      this.wugeData = ''
    },
    async submit() {
      const chineseReg = /^[\u4e00-\u9fa5]{0,}$/
      if (!this.checkName) {
        Toast({
          message: '请输入姓名',
          position: 'top'
        })
        return
      }
      if (this.checkName.length < 3) {
        Toast({
          message: '目前不支持两位',
          position: 'top'
        })
        return
      }
      if (!chineseReg.test(this.checkName)) {
        Toast({
          message: '姓名只能是中文',
          position: 'top'
        })
        return
      }
      const { data } = await getNameDetail(this.checkName)
      this.wugeData = data.wuge
    }
  }
}
</script>
