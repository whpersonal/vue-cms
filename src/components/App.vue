<template>
    <div class="app-container">
        <!-- 头部 -->
        <mt-header fixed title="黑马程序员-vue项目">
            <span  slot="left" @click="goBack" v-if="flag">
            <mt-button icon="back">返回</mt-button>
        </span>
        </mt-header>

        <!-- 中间内容 -->
        <transition>
          <router-view></router-view>
        </transition>
       

        <!-- 底部 -->
         <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-my" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-my" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-my" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart" id="badge"><span class="mui-badge">{{totalCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-my" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div> 
</template>

<script>
    import { Indicator } from "mint-ui"
    // vuex
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return {
                flag : false
            }
        },
        created() {
            this.initInterceptors();
        },
        methods:{
            initInterceptors() {
                this.$http.interceptors.request.use(config => {
                    // Do something before request is sent
                    Indicator.open({
                    text: "加载中...",
                    spinnerType: "fading-circle"
                    });
                    return config;
                });

                // 数据拿到之后，请求成功之后的拦截器
                this.$http.interceptors.response.use(response => {
                    // Do something with response data
                    Indicator.close();
                    return response;
                })
            },
            goBack(){
                this.$router.go(-1)
            }
       },
       watch :{
        //    "$route.path":function(newVal){   
            // console.log(newVal)
                // if(newVal === '/home'){
                //     this.flag =false
                // }else{
                //     this.flag = true
                // }
                // }
                // this.flag = !(newVal === '/home')
                "$route.path":{
                    handler:function(newVal){
                        this.flag = !(newVal === '/home')
                    },
                    // 页面刷新的时候，强制执行watc
                    immediate : true
                }

           
       },
       computed:{
           ...mapGetters(["totalCount"])
       }
    }
</script>
<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow: hidden;
  .mint-header {
    z-index: 99;
  }
}

// 控制 组件切换动画效果的类
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  // 让即将离开的组件脱标，这样就能放置闪动的问题
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}

// 自定义 mui-tab-item-my 类名，解决 tabbar 和 mui.js 之间冲突的问题
.mui-bar-tab .mui-tab-item-my.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item-my {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-my .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-my .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
