<!-- home -->
<template>
  <div class="user">
    <div class="user-header">
      <p>我的</p>
      <div></div>
    </div>
    <van-cell-group class="user_links">
      <van-cell is-link url='https://mp.weixin.qq.com/s/CW1ZGIOrEbbf6BqDJ7-UCg'>
        <template #title>
          <img src="https://all.img.s105.cn/kfupload/up/202012/24143615_6687.png" alt="">
          <span class="custom-title">三才五格</span>
        </template>
      </van-cell>
      <van-cell is-link to='/about'>
        <template #title>
            <img src="https://all.img.s105.cn/kfupload/up/202012/24144201_2449.png" alt="">
          <span class="custom-title">关于我们</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.user {
    position: relative;
    height: 100%;
    .user-header{
        background: url("../../assets/personal_back.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
        p{
            height: 46px;
            line-height: 46px;
            font-size: 16px;
            color:#fff;
            font-weight: 500;
            text-align: center;
            color: #fff;
        }
        div{
            padding-left: 100px;
            padding-top: 20px;
            position: relative;
            line-height: 50px;
            padding-bottom: 20px;
              img{
                width:50px;
                height: 50px;
                position: absolute;
                left: 30px;
                top: 20px;
            }
            span{
                font-size: 20px;
                font-weight: bold;
                color:#fff;
            }
        }

    }

    .user_links{
        width: 92%;
        margin: 0 auto;
        margin-top: 20px;
        background: none;
        color: #363636;
        font-size: 15px;
        .van-cell{
            padding: 13px 16px;
        }
        // .van-cell:first-child{
        //     border-radius: 8px 8px 0 0 ;
        // }
        // .van-cell:last-child{
        //     border-radius: 0 0 8px 8px ;
        // }
        .van-cell::after{
            left: 0;
            right: 0;
        }
        .van-cell__title{
            img{
                width:22px;
                position: relative;
                top: 5px;
                margin-right: 10px;
            }
        }

    }
    .user_links::after{
        content: none;
    }
    .br{
        margin-bottom: 15px;
    }

  }

</style>
