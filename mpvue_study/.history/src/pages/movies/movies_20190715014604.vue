<template>
  <div>
    <div class="moviesContainer">
      <img class="movies_img" src="/static/images/index/cart.jpg" alt="">
      <div class="movies_info">
        <p class="movies_name">霸王别姬</p>
        <p class="movies_year">年份：1994</p>
        <p class="movies_dir">导演:陈凯歌</p>
      </div>
      <p class="movies_rating">9.6</p>
    </div>
  </div>
</template>

<script>
const MOVIE_URL = 'http://t.yushu.im/v2/movie/top250'
export default {
  data() {
    return {
      moviesArr: []
    }
  },
  beforeMount() {
    this.$fly.get(MOVIE_URL)
      .then(function (response) {
        console.log(response)
        let movieArr = response.data.subjects
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style>
  .moviesContainer {
    display: flex;
    padding:10rpx;
    border-bottom:1rpx solid #eee;
  }

  .movies_img {
    width: 128rpx;
    height: 128rpx;
    margin-right: 20rpx;
  }

  .movies_info {
    width:70%;
  }

  .movies_name {
    font-size: 32rpx;
    color:#333;
  }
  .movies_year {
    font-size: 28rpx;
    color:#999;
    margin: 5rpx 0;
  }
  .movies_dir {
    font-size: 30rpx;
    color:#666;
  }

  .movies_rating {
    font-size: 36rpx;
    font-weight: bold;
    color:red;
  }
</style>
