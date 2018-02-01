<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in lunboList" :key="item.img">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
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
      <router-link to="/home/phptolist">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div>
          </a>
        </li>
      </router-link>
      <router-link to="">
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
export default {
  data() {
    return {
      lunboList: []
    };
  },
  created() {
    this.getLunbo();
  },
  methods: {
    async getLunbo() {
      const { data } = await this.$http.get("/api/getlunbo");
      if (data.status === 0) {
        this.lunboList = data.message;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 180px;
}
.mint-swipe-item {
  img {
    width: 100%;
    height: 100%;
  }
}
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