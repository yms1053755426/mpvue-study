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
      <ListTmp v-for="(item, index) in listTmp"></ListTmp>
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
    // 分发action修改状态
    this.$store.dispatch('getList')
  },
  computed: {
    // 映射状态到组件
    ...mapState(['listTmp'])
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
