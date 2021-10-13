<template>
  <div class="wrapper">
    <van-field
      v-model="surname"
      required
      label="姓氏"
      placeholder="请输入姓氏"
    />
    <p>古诗词</p>
    <van-radio-group v-model="radio" @change="radioChange">
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
    <div class="pt15">
      <span>展示数量(最少展示4个，最多展示20个)</span>
      <van-stepper class="pt15" v-model="nameAmount" min="4" max="20" :integer="true" />
    </div>
    <van-button @click="submit" class="btn" block color="#5677fc">
      起名
    </van-button>
    <van-grid :gutter="10" :column-num="2">
      <van-grid-item
        @click="showDetail(surname+item.name)"
        v-for="(item, index) in result"
        :key="index">
        <p class="name">{{surname}}{{item.name}}</p>
        <p class="title">《{{item.title}}》</p>
        <p v-html="`「${item.sentenceHtml}」`"></p>
        <div class='flex'>
          <div v-show="item.dynasty">{{ item.dynasty }}</div>
          <!-- <div v-show="!item.dynasty" class='book'>{{item.chapter}}•{{item.section}}</div> -->
          <div class='author'>[{{ item.author ? item.author : '佚名'}}]</div>
        </div>
        <van-button class="mt-12" color="#5677fc" plain size="mini">查看详情</van-button>
      </van-grid-item>
    </van-grid>
    <detail-dialog ref="detailDialog" :nowName="nowName" :wugeData="wugeData" />
  </div>
</template>

<script>
import { Toast } from 'vant'
import { getNameDetail } from '@/api/home'
import { namer } from '@/mixins/namer'
import detailDialog from '@/components/detailDialog'
export default {
  mixins: [namer],
  components: {
    detailDialog
  },
  data() {
    return {
      surname: '吴',
      radio: 'name_shijing',
      result: [],
      nowName: '',
      wugeData: {},
      list: [
        {
          title: '诗经',
          name: 'name_shijing'
        }, {
          title: '楚辞',
          name: 'name_chuci'
        }, {
          title: '唐诗',
          name: 'name_tangshi'
        }, {
          title: '宋词',
          name: 'name_songci'
        }, {
          title: '乐府诗集',
          name: 'name_yuefu'
        }, {
          title: '古诗',
          name: 'name_gushi'
        }, {
          title: '辞赋',
          name: 'name_cifu'
        }
      ],
      nameAmount: 4
    }
  },
  mounted() {
    this.loadBook(this.radio)
  },

  methods: {
    submit() {
      this.result = []
      if (!this.surname) {
        Toast({
          message: '请输入姓氏',
          position: 'top'
        })
        return
      }
      for (let i = 0; i < this.nameAmount; i++) {
        const nameObj = this.genName()
        this.result.push(this.genNameHtml(nameObj))
      }
    },
    genNameHtml(obj) {
      if (!obj) {
        return null
      }
      const {
        name,
        sentence,
        title,
        book,
        author,
        dynasty } = obj

      // const familyName = this.surname
      const sentenceHtml = sentence.replace(new RegExp(`[${name}]`, 'ig'), char => `<i>${char}</i>`)
      return {
        name, title, author, dynasty, book, sentenceHtml
      }
    },
    radioChange(item) {
      this.loadBook(item)
    },
    async showDetail(name) {
      this.nowName = name
      const { data } = await getNameDetail(name)
      if (data.wuge) {
        this.wugeData = data.wuge
      }
      this.$refs.detailDialog.nameDetailShow = true
    }
  }
}
</script>
