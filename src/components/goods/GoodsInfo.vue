<template>
<div class="goods_info">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div class="ball" v-show="flag" ref="ball"></div>
          <!-- ref用来获取页面上的元素 -->
    </transition>



    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                 <swiper :url="'/api/getthumimages/'+id" :imagename="'src'" ></swiper>
             </div>
         </div>          
    </div>
   <div class="mui-card">
		<div class="mui-card-header">{{ goodsinfo.title }}</div>
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				<p class="price">
                    <span class="old">市场价：<del>￥{{ goodsinfo.market_price }}</del></span>
                    <span>销售价：<span class="new">￥{{ goodsinfo.sell_price }}</span></span>
                 </p>
            <p>
              <span>购买数量：</span>
              <numbox :max="goodsinfo.stock_quantity" @func="getCount"></numbox>
            </p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
			</div>
		</div> 
    </div>
     <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ goodsinfo.goods_no }}</p>
                    <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
                    <p>上架时间：{{ goodsinfo.add_time | dataFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer btn-bottoms">
                <mt-button type="primary" size="large" plain @click="goDesc">图文介绍</mt-button>
                <mt-button type="danger"  size="large" plain style="margin-top: 10px;" @click="goCmt">商品评论</mt-button>
            </div>
	</div>


</div>




</template>
<script>
    // 轮播图
    import swiper from '../subcomponents/Swiper.vue'
    // 数字按钮
    import numbox from '../subcomponents/numbox-goodsinfo.vue'
    // vuex
    import { mapMutations } from "vuex";
    export default {
        data(){
            return{
                goodsinfo:{},
                flag: false, // 默认隐藏小球
                count:1
            }
        },
        created(){
            this.getGoodsInfo()
        },
        methods:{
            ...mapMutations(["addToshopCart"]),
            async getGoodsInfo(){
                const {data} = await this.$http.get("/api/goods/getinfo/" + this.id)
                this.goodsinfo = data.message[0]
            },
            goCmt() {
                 this.$router.push("/home/goodscmt/" + this.id);
            },
            goDesc() {
                 this.$router.push("/home/goodsdesc/" + this.id);
            },
            // 小球半场动画
            addToCart(){
                this.flag = !this.flag;
                // console.log(this.count)
               this.addToshopCart({
                    id:this.id,
                    count:this.count,
                    status:true,
                    price: this.goodsinfo.sell_price
                })
                // console.log(this.addToshopCart)

       
            },
            beforeEnter(el){
                 el.style.transform = "translate(0, 0)";
            },
            enter(el,done){
               el.offsetWidth;
                //   获取小球dom的位置，并调用getBoundingClientRect()获取位置对象
                const ballPosition = this.$refs.ball.getBoundingClientRect()
                //   获取购物车所在的位置
                const badgePosition = document.getElementById("badge").getBoundingClientRect()
                //   小球位移距离
                const y = badgePosition.top-ballPosition.top
                const x = badgePosition.left-ballPosition.left
                // console.log(x,y)
                el.style.transform = "translate(" + x + "px, " + y + "px)";
                el.style.transition = "all 0.4s cubic-bezier(.1,-0.46,1,.3)";
                done();
            },
            afterEnter(){
                 this.flag = !this.flag;
            },
            getCount(inpVal){
                // console.log(inpVal)
                this.count=inpVal
            }
          
        },
        props:["id"],
        components:{
            swiper,
            numbox

        }
    
    }
</script>
<style lang="scss" scoped>
.goods_info{
     background-color: #eee;
    overflow: hidden;
  .btn-bottoms {
    display: block;
  }

  .price {
    .old {
      margin-right: 10px;
    }
    .new {
      color: red;
      font-size: 16px;
      font-weight: bold;
    }
  }

  .ball {
    width: 15px;
    height: 15px;
    background-color: red;
    position: absolute;
    border-radius: 50%;
    z-index: 11;
    top: 388px;
    left: 150px;

  }
}

</style>
