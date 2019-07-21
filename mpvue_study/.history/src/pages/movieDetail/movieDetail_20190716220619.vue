<template>
  <div class="movieDetailContainer">
    <img src="/static/images/index/cart.jpg" alt="">
    <p class="movie_name">霸王别姬</p>
    <div class="detail_content">
      <span>评分：</span>
      <span>导演：</span>
      <span>主演：</span>
    </div>
    <button>我要观影</button>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['moviesArr'])
  }
}
</script>

<style>
.movieDetailContainer {
  display: flex;
  flex-direction: column;
}

.movieDetailContainer image {
  width:70%;
  height:700rpx;
  margin:50rpx auto;
}

.movie_name {
  font-size: 40rpx;
  text-align: center;
  font-weight: bold;
}

.detail_content {
  display: flex;
  flex-direction: column;
  margin-left:20%;
  margin-top: 30rpx;
  line-height: 50rpx;
  font-size: 26rpx;
}

button{
  width:70%;
  height:80rpx;
  background: green;
  line-height: 80rpx;
  color: #fff;
  font-size: 28rpx;
  margin-top: 20rpx;
}
</style>
