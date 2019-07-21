<template>
  <div class="indexContainer">
    <img class="index_img" src="/static/images/user.png" alt="">
    <p class="userName">hello mpvue</p>
    <div>
      <p>开启小程序之旅</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .indexContainer {
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .index_img {
    width:200rpx;
    height:200rpx;
    border-radius:100rpx;
  }
</style>
