<template>
  <div class="cart-container">
    
    <!-- 购物车商品列表 -->
    <div class="goods-list">

      <!-- 每个商品项 -->
      <div class="mui-card goods-item" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!-- 开关 -->
            <mt-switch v-model="getStatus[item.id]" @change="statusChanged(item.id,getStatus[item.id])"></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h1 class="title">{{ item.title }}</h1>
              <div class="buy">
                <span class="price">￥{{ item.sell_price }}</span>
                <!-- 数字选择框 -->
                <nobox :initCount="getCount[item.id]" :id="item.id"></nobox>
                <a href="javascript:void(0)" class="del" @click="del(item.id,i)">删除</a>
              </div>
            </div>
					</div>
				</div>
			</div>
    </div>
     <!-- 结算区域i -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner settlement">
						<div>
              <p>总计（不含运费）</p>
              <p>已勾选商品<span class="red">{{ settlementInfo.c }}</span>件，总价<span class="red">￥{{ settlementInfo.amount }}</span></p>
            </div>
            <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>

    <hr>
    <!-- {{ getCount }} -->
    <!-- {{ getStatus }} -->

  </div>
</template>

<script>
import { mapGetters ,mapMutations } from "vuex";
import nobox  from '../../components/subcomponents/numbox-cart.vue'
export default {
  data() {
    return {
      goodslist: []
    }
  },
  computed: {
    ...mapGetters(["getIds","getCount","getStatus","settlementInfo"])
  },
  created() {
    this.getCartGoods();
  },
  methods: {
    ...mapMutations(["delData","updateStatus"]),
    async getCartGoods() {
      // 根据 购物车中商品Id，获取到 所有商品的信息
      const { data } = await this.$http.get(
        "/api/goods/getshopcarlist/" + this.getIds
      );
      if (data.status === 0) {
        this.goodslist = data.message;
        // console.log(this.goodslist)
      }
    },
    del(id,i){
      this.goodslist.splice(i,1)
      this.delData(id);
    },
    // 开关状态
    statusChanged(id,status){
      // console.log(id,status)
      this.updateStatus({id,status})
    }
  },
     components:{
      nobox
    }
};
</script>

<style lang="scss" scoped>
.cart-container {
  background-color: #eee;
  overflow: hidden;
}
.goods-list {
  .goods-item {
    .mui-card-content-inner {
      display: flex;
      img {
        width: 60px;
        height: 60px;
      }
      .info {
        display: flex;
        // 占满剩余宽度
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-size: 13px;
        }
        .buy {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .price {
            color: red;
            font-weight: bold;
            font-size: 16px;
          }
        }
      }
    }
  }
}

.settlement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .red {
    color: red;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>