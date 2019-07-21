<template>
  <div class="indexContainer">
    <img class="index_img" src="/static/images/user.png" alt="">
    <Button open-type="getUserInfo" @getuserinfo="getUserInfo">点击获取用户信息</Button>
    <p class="userName">hello mpvue</p>
    <div class="goStudy">
      <p>开启小程序之旅</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  beforeMount() {
    // 获取用户登录信息

  },
  methods: {
    // 获取用户登录信息
    handleGetUserInfo() {
      wx.getUserInfo({
        success:(data) => {
          console.log(data);
        },
        fail:() => {
          console.log('获取失败');
        }
      })
    },
    getUserInfo(data) {
      // 判断用户是否授权
      if(data.map.detail.rawData) {
        // 用户授权

      }
    }
  }
}
</script>

<style>
  page {
    background: #8ed145;
  }

  .indexContainer {
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .index_img {
    width:200rpx;
    height:200rpx;
    border-radius:100rpx;
    margin:100rpx 0;
  }

  .userName {
    font-size:40rpx;
    font-weight:bold;
    margin:100rpx 0;
  }

  .goStudy {
    width:220rpx;
    height: 80rpx;
    border:1rpx solid #eee;
    font-size:24rpx;
    line-height:80rpx;
    text-align:center;
    border-radius:10rpx;
  }
</style>
