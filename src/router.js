// 创建路由规则
import VueRouter from 'vue-router'


// 导入路由相关的组件
import HomeContainer from './components/tabbars/HomeContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import CartContainer from './components/tabbars/CartContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photo/PhotoList.vue'
import PhotoInfo from './components/photo/PhotoInfo.vue'


const router = new VueRouter({
    routes: [ // 路由规则
      { path: '/', redirect: '/home' },
      { path: '/home', component: HomeContainer },
      { path: '/member', component: MemberContainer },
      { path: '/cart', component: CartContainer },
      { path: '/search', component: SearchContainer },
      { path: '/home/newslist', component: NewsList },
      { path: '/home/newsinfo/:id', component: NewsInfo,props:true},
      { path: '/home/phptolist', component: PhotoList },
      { path: '/home/photoinfo/:id', component: PhotoInfo,props:true}
    ],
    linkActiveClass: 'mui-active' // 设置路由高亮的类名
  })
  
  export default router