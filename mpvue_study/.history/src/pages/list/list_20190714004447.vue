<template>
  <div class="listContainer">
    <swiper indicator-dots indicator-color="pink" indicator-active-color="green">
      <swiper-item>
        <img src="/static/images/user.png" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/user.png" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/user.png" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/user.png" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .listContainer swiper {
    width: 100%;
    height: 400rpx;
  }

  .listContainer swiper img {
    width: 100%;
    height: 100%;
  }
</style>
