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
    display: flex;
    flex-direction: column;
  }

  .avatar_date {
    padding: 10rpx;
  }

  .avatar_date img {
    width: 60rpx;
    height: 60rpx;
    vertical-align: middle;
    margin-right: 10rpx;
  }

  .avatar_date span {
    font-size: 28rpx;
    color: #333;
  }

  .company {
    font-size: 40rpx;
    font-weight: bold;
    padding: 10rpx;
  }

  .detail_img {
    width: 100%;
    height: 460rpx;
  }

  .content {
    font-size: 32rpx;
    text-indent: 32rpx;
    line-height: 50rpx;
    letter-spacing: 3rpx;
  }

  .view_star_container img {
    width: 32rpx;
    height: 32rpx;
    vertical-align: middle;
  }

  .view_star_container span {
    font-size: 28rpx;
    color: #333;
  }
</style>
