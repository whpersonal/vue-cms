import Vue from 'vue'


// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 导入anxios
import axios from 'axios'
// 定义公共的ajax请求根路径
axios.defaults.baseURL = 'http://39.106.32.91:3000'
Vue.prototype.$http = axios

// 缩略图
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)


// 时间过滤器
import moment, { locale } from 'moment'
Vue.filter('dataFormat',function(val){
  return moment(val).format('YYYY-MM-DD HH:mm:ss')
})




// 引入Mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


// 引入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 导入并安装vuex
import Vuex from 'vuex'
Vue.use(Vuex)


// const store =  new Vuex.Store({
//   state:{//存储全局共享数据，在computed中调用
//   },
//   mutations:{//处理数据的函数，在methods中调用  (this.$store.commit(increment,step))
//     increment(state,step){//increment第一个参数已经被规定死，永远为state，即全局共享数据
//                       //只能有两个参数，穿多个的话要定义为对象
//     }
//   },
//   getters:{//处理全局数据，相当于过滤器，在computed中调用，实时改变值

//   },
//   actions:{//异步调用mutations中的方法（context.commit('方法名')），从而修改数据,在methods中调用
    
//   }

// })
const cart = JSON.parse(localStorage.getItem('cart')||'[]')
const store = new Vuex.Store({
  state:{
    // cart:[]
    cart
  },
  mutations:{
    addToshopCart(state,info){
      let flag = false  //假设不存在商品
      state.cart.some(ele => {
        if(ele.id == info.id){ //存在该商品
          ele.count += info.count
          flag = true 
          return  true        
        }       
      })
      if (!flag){
        state.cart.push(info)
      }
      // 持久化存储到localStorage中
      localStorage.setItem('cart',window.JSON.stringify(state.cart))

    },
    updateCount(state,info){//传递id和数量
      state.cart.some(ele => {
        if(ele.id == info.id){
          ele.count = info.count
        }
      // 持久化存储到localStorage中
      localStorage.setItem('cart',window.JSON.stringify(state.cart))
        
      })

    },
    delData(state,id){
      state.cart.some((ele, i) => {
        if (ele.id == id) {
          state.cart.splice(i, 1)
          return true
        }
      })
      // 持久化存储到localStorage中
      localStorage.setItem('cart',window.JSON.stringify(state.cart))
    },
    updateStatus(state,info){
      state.cart.some(ele => {
        if (ele.id == info.id) {
          ele.status = info.status
          return true
        }
      })
      // 持久化存储到localStorage中
      localStorage.setItem('cart',window.JSON.stringify(state.cart))
    }
  },
  getters:{
    // 获取购物车总商品数量
    totalCount(state){
      let sum = 0
      state.cart.some(ele => { 
        sum += ele.count
        
      })
      return sum

    },
    // 获取购物车商品id
    getIds(state){
      let arr = []
      state.cart.forEach(ele => {
          arr.push(ele.id)
      })
      return arr.join(',')

    },
    // 购物车商品数量与id对应关系
    getCount(state){
      const o ={}
      state.cart.forEach(ele => {
        o[ele.id]  = ele.count
      })
      return o
    },
    //购物车数量状态与id关系
    getStatus(state){
      const o ={}
      state.cart.forEach(ele => {
        o[ele.id]  = ele.status
      })
      return o
    },
    // 获取总件数和总价
    settlementInfo(state){
      let info = { c: 0, amount: 0 }
      state.cart.forEach(ele => {
       if(ele.status==true){
        info.c += ele.count // 加入勾选数量
        info.amount += ele.count * ele.price // 加入勾选总价 
        // console.log( ele)
       }
      })
      return info
    }

  }
})








// 导入根组件
import App from './components/App.vue'

// 导入自己封装的 路由模块
import router from './router.js'


const vm = new Vue({
    el: '#app',
    render: c => c(App),
    router, // 将路由挂载到 VM 实例上
    store //加载vuex上的数据，成为共享数据
  })