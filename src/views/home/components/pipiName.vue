<!-- home -->
<template>
  <div>
    <van-notice-bar
    color="#5677fc"
    background="#ecf9ff"
    mode="closeable"
    text="根据三才五格，从诗经、楚辞、论语、周易、唐诗、宋词给宝宝取名。"
    wrapable
    :scrollable="false">
    </van-notice-bar>
    <div class="wrapper">
      <van-field
        v-model="lastName"
        required
        label="姓氏"
        maxlength="1"
        placeholder="姓，仅支持单姓"
      />
      <!-- <van-field
        v-model="minStrokeCount"
        label="最小笔画数"
        type="number"
        placeholder="最小笔画数4"
      />
      <van-field
        v-model="maxStrokeCount"
        label="最大笔画数"
        type="number"
        placeholder="最大笔画数30"
      /> -->
      <van-field
        readonly
        clickable
        label="性别"
        :value="gender"
        placeholder="是否筛选性别"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
      <p style="color: #999;padding-left: 15px;">默认参数：最小笔画数3，最大笔画数：30</p>
      <!-- <van-cell center title="是否允许使用中吉">
        <template>
          <van-switch v-model="allowGeneral" active-color="#5677fc" size="20" inactive-color="#dcdee0" />
        </template>
      </van-cell> -->
      <!-- <van-cell center title="是否显示名字来源">
        <template>
          <van-switch v-model="checkNameResource" active-color="#5677fc" size="20" inactive-color="#dcdee0" />
        </template>
      </van-cell> -->
      <p>古诗词</p>
      <van-radio-group v-model="nameSource">
        <van-grid :gutter="10" :column-num="3">
          <van-grid-item
            v-for="(item, index) in list"
            :key="index">
            <van-radio :name="item.name">
              <template #icon="props">
                <div class="item" :class="props.checked ? 'active' : 'inactive'">
                  {{ item.title }}
                </div>
              </template>
            </van-radio>
          </van-grid-item>
        </van-grid>
      </van-radio-group>
      <van-button @click="submit" class="btn" block color="#5677fc" :loading="btnLoading" loading-text="加载中...">
        起名
      </van-button>
      <van-grid :gutter="10" :column-num="2">
        <van-grid-item
          v-for="(item, index) in result"
          :key="index"
          @click="showDetail(item.namer)">
          <p class="name">{{item.namer}}{{gender ? `-${gender}` : `-${item.gender}`}}</p>
          <p class="title">笔画数：{{item.stroke_number1}}-{{item.stroke_number2}}</p>
          <p>{{item.source}}</p>
          <van-button color="#5677fc" plain size="mini">查看详情</van-button>
        </van-grid-item>
      </van-grid>
      <detail-dialog ref="detailDialog" :nowName="nowName" :wugeData="wugeData" />
    </div>
  </div>
</template>

<script>
import { getNameList, getNameDetail } from '@/api/home'
import detailDialog from '@/components/detailDialog'
import { Toast } from 'vant'
export default {
  components: {
    detailDialog
  },
  data() {
    return {
      lastName: '吴',
      nameSource: 1,
      result: [],
      minStrokeCount: '',
      maxStrokeCount: '',
      allowGeneral: false,
      checkNameResource: false,
      gender: '',
      showPicker: false,
      btnLoading: false,
      nameDetailShow: false,
      wugeData: {},
      nowName: '',
      columns: ['未知', '男', '女'],
      list: [
        {
          title: '默认',
          name: 0
        }, {
          title: '诗经',
          name: 1
        }, {
          title: '楚辞',
          name: 2
        }, {
          title: '论语',
          name: 3
        }, {
          title: '周易',
          name: 4
        }, {
          title: '唐诗',
          name: 5
        }, {
          title: '宋诗',
          name: 6
        }, {
          title: '宋词',
          name: 7
        }
      ]
    }
  },
  methods: {
    onConfirm(value) {
      this.gender = value
      this.showPicker = false
    },
    async submit() {
      if (!this.lastName) {
        Toast({
          message: '请输入姓氏',
          position: 'top'
        })
        return
      }
      let backGender = ''
      if (this.gender === '未知') {
        backGender = ''
      } else {
        backGender = this.gender
      }
      this.btnLoading = true
      Toast({
        message: '诗词数量多，请耐心等待',
        position: 'top'
      })
      const { data, code } = await getNameList(this.lastName, backGender, this.nameSource)
      if (code === 200) {
        this.result = data
        this.btnLoading = false
      } else {
        this.btnLoading = false
        Toast({
          message: '查询失败，请重试',
          position: 'top'
        })
      }
    },
    async showDetail(namer) {
      this.nowName = namer
      const { data } = await getNameDetail(namer)
      if (data.wuge) {
        this.wugeData = data.wuge
      }
      this.$refs.detailDialog.nameDetailShow = true
    }
  }
}
</script>
