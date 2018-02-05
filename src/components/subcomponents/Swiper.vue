<template>
      <!-- 轮播图 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in lunboList" :key="item.img">
        <img :src="item[imagename]" :class="[isfull ? 'full' : '']">
      </mt-swipe-item>
    </mt-swipe>
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
      const { data } = await this.$http.get(this.url);
      if (data.status === 0) {
        this.lunboList = data.message;

      }
    }
  },
  props:["url","imagename","isfull"]
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 180px;
  .mint-swipe-item {
      text-align: center;
    img {
    //   width: 100%;
      height: 100%;
    }
  }
}
.full{
    width: 100%;
}
</style>

