<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodsList" :key="item.id">
      <router-link :to="'/home/goodsinfo/'+item.id">
        <img :src="item.img_url" alt="">
        <h1 class="title">{{item.title}}</h1>
      </router-link>
      <div class="goods-bottom">
        <p class="price"><span  class="new-price">￥{{item.sell_price}}</span> <span class="old-price">￥{{item.market_price}}</span></p>
        <p class="status"><span>热卖中</span> <span>剩{{item.stock_quantity}}件</span></p>
      </div>
    </div>       
  </div>
</template>
<script>
  export default {
    data(){
      return {
        pageindex:1,
        goodsList:[]
      }
    },
    created(){
      this.getGoodsList()
    },
    methods:{
      async getGoodsList (){
        const {data} = await this.$http.get('/api/getgoods?pageindex')
        if(data.status === 0){
          this.goodsList = data.message
          console.log(this.goodsList)
        }

      }
    }

  }
</script>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  padding: 10px;
  padding-top: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  .goods-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 49%;
    margin-top: 10px;
    background-color: #fff;
    box-shadow: 0 0 7px #ccc;
    padding: 2px;

    img {
      width: 100%;
      vertical-align: middle;
    }
    .title {
      font-size: 14px;
      color: #000;
      font-weight: 700;
    }
    .goods-bottom {
      background-color: #eee;
      padding: 5px 0;
      .price {
        margin: 0;
        padding: 5px 0;
        .new-price {
          font-size: 16px;
          font-weight: 700;
          color: red;
          margin-right: 15px;
        }
        .old-price {
          font-size: 12px;
          text-decoration: line-through;
        }
      }
      .status {
        display: flex;
        padding: 0 3px;
          margin: 0;
        justify-content: space-between;
      }
    }
  }
}
</style>


