<template>
  <div class="tmpContainer">
    <div class="avatar_date">
      <img src="/static/images/user.png" alt="">
      <span>2018</span>
    </div>
    <p class="company">尚硅谷</p>
    <img class="detail_img" src="/static/images/user.png" alt="">
    <p class="content">很多的文字</p>
    <div class="view_star_container">
      <img src="/static/images/user.png" alt="">
      <span>66</span>
      <img src="/static/images/user.png" alt="">
      <span>88</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .tmpContainer {
    display:flex;
    flex-direction: column;
  }

  .avatar_date img {
    width: 60rpx;
    height: 60rpx;
    vertical-align: middle;
  }
</style>
