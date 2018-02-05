<template>
  <div>
    <!-- 轮播图 -->
   <swiper :url="'/api/getlunbo'" :imagename="'img'"  :isfull="true"></swiper>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <router-link to="/home/newslist">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻咨询</div>
          </a>
        </li>
      </router-link>
      <router-link to="/home/photolist">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div>
          </a>
        </li>
      </router-link>
      <router-link to="/home/goodslist">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div>
          </a>
        </li>
      </router-link>
      <router-link to="">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
      </router-link>
      <router-link to="">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div>
          </a>
        </li>      
      </router-link>
      <router-link to="">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </router-link>

    </ul>

  </div>
</template>

<script>
import swiper from '../subcomponents/Swiper.vue'
export default {
  components:{
    swiper
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  img {
    width: 60px;
    height: 60px;
  }
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 13px;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>