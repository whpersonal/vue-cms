# Vue 项目

## 憋说话，用心感受每一行代码中的诗情雅意

## 搭建项目的结构
1. 安装vue并渲染App.vue根组件
2. 在 App.vue 根组件中，使用 MintUI 提供的 Header 组件 和  MUI 提供的 tabbar.html，实现头部和尾部
3. 美化 tabbar 的样式和字体图标

## 通过 vue-router 实现 tabbar 组件的切换
1. 安装并配置 vue-router     `Vue.use(VueRouter)`
2. 把 tabbar 上的四个按钮，改造成`router-link`
3. 在 `components` 文件夹下，创建一个`tabbars`文件夹，专门存放 tabbar 相关的4个组件
4. 创建一个单独的`router.js`路由文件模块，并配置路由的对应关系，最后，在 `router.js` 中使用 `export default router` 把路由对象暴露出去；
5. 在 `main.js` 导入 `router.js`  并挂载到VM上
6. 在 `App.vue` 中间区域，添加`router-view`容器；

## 实现tabbar路由的高亮
1. 在 创建路由对象的时候，添加`linkActiveClass`指向`mui-active`

## 实现路由切换的动画
1. 把 `App.vue` 中的 `<router-view></router-view>` 用 `<transition></transition>` 包裹起来
2. 创建类样式，并实现左侧消失，右侧进入；
3. 要解决的问题：
 + 如何实现左侧离开，右侧进入
 + 如何隐藏多余的横向滚动条
 + 如何左侧离开的组件不占标准流

## 实现了 Home 组件中的轮播图效果
1. 使用 Mint-UI中的 Swipe 组件实现轮播图布局
2. 为 Swipe 组件 添加高度 180px；
3. 在项目中安装 axios , 并挂载到 `Vue.prototype.$http` 上
4. 在 HomeContainer 中，封装一个获取轮播图的方法，并在 created 中调用；把获取的数据挂载到 data 上
5. 使用 `v-for` 渲染轮播图数据，要提供 `:key` 属性

## 配置Axios
1. 配置全局请求Ajax时候的`baseURL`
2. 配置拦截器
 + 在 `App.vue` 中配置拦截器的函数`initInterceptors`，并在 `created`中调用
 + 使用MintUI提供的 `Indicator` 组件展示loading效果

## 实现六宫格布局
1. 基于 MUI 提供的 `grid-default.html` 来改造成六宫格
2. 背景色要改成白色；去掉每个图片外部的 灰色边框；
3. 图片的大小和文字的大小也需要调整；
4. 在调整样式的时候，要本着：能复制粘贴现有类名的，绝不手写；

## 返回按钮的实现
1. 使用v-if结合flag控制返回按钮的显示和隐藏
2. 使用watch监视`this.$route.path`来监视路由地址的变化，并根据最新的地址，和`/home`进行判断，从而决定`flag`的值为false还是true;
3. 使用`this.$router.go(-1)`实现后退功能；
4. 使用 `watch` 的 `immediate: true` 实现页面刚进入的时候，强制调用一下`watch`；
```
watch: {
  '$route.path': {
    handler: 处理函数,
    immediate: true // 页面刚进入，就强制监视一下数据的变化
  }
}
```

## 把项目用git上传到码云或者github的仓储中
