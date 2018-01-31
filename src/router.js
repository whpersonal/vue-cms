// 创建路由规则
import VueRouter from 'vue-router'


// 导入路由相关的组件
import HomeContainer from './components/tabbars/HomeContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import CartContainer from './components/tabbars/CartContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'


const router = new VueRouter({
    routes: [ // 路由规则
      { path: '/', redirect: '/home' },
      { path: '/home', component: HomeContainer },
      { path: '/member', component: MemberContainer },
      { path: '/cart', component: CartContainer },
      { path: '/search', component: SearchContainer }
    ],
    linkActiveClass: 'mui-active' // 设置路由高亮的类名
  })
  
  export default router