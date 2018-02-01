<template>
    <div class="photoinfo-container">
      <h3 class="title">{{ photoinfo.title }}</h3>
    <p class="info">
      <span>发表时间：{{ photoinfo.add_time | dataFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>
    <hr>
    <!-- 缩略图 -->
   <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in thumbImgList" :src="item.src" height="100" @click="$preview.open(index, thumbImgList)" :key="item.src">
    </div>
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 评论组件区域 -->
    <comment :id="id"></comment>

    </div>
  
</template>
<script>
    import comment from "../subcomponents/Comment.vue";
export default {
  data() {
    return {
      photoinfo: [],
      thumbImgList: [] 
    }
  },
  created() {
    this.getPhotoInfo();
    this.getThumbImages();
  },
  methods: {
     async getPhotoInfo() {
      const { data } = await this.$http.get("/api/getimageInfo/" + this.id);
      if (data.status === 0) {
        this.photoinfo = data.message[0];
      }
    },
     async getThumbImages() {
      // 获取缩略图的方法
      const { data } = await this.$http.get("/api/getthumimages/" + this.id);
      if (data.status === 0) {
        data.message.forEach(item => {
          item.w = 600;
          item.h = 600;
        });
        this.thumbImgList = data.message;
      }
    }
  },
  props: ["id"],
  components: {
    comment
  }
};
</script>
<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;

  .title {
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
    color: #26a2ff;
  }
  .info {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
  }
  .content {
    line-height: 30px;
    font-size: 13px;
  }

  .thumbs {
    img {
      margin: 10px;
      box-shadow: 0 0 7px #666;
    }
  }
}
</style>

