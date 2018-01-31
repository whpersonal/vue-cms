import Vue from 'vue'


// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 导入anxios
import axios from 'axios'
// 定义公共的ajax请求根路径
axios.defaults.baseURL = 'http://39.106.32.91:3000'
Vue.prototype.$http = axios




// 引入Mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


// 引入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'



// 导入根组件
import App from './components/App.vue'

// 导入自己封装的 路由模块
import router from './router.js'


const vm = new Vue({
    el: '#app',
    render: c => c(App),
    router // 将路由挂载到 VM 实例上
  })