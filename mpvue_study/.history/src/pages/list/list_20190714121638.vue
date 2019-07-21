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
    <div>
      <ListTmp></ListTmp>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ListTmp from '../list_template/list_template'
export default {
  components: {
    ListTmp
  },
  beforeMount() {
    this.$store.dispatch('getList')
  }
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
