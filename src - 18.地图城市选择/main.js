// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store' 

Vue.config.productionTip = false
// 引入axios
import axios from 'axios'
// 配置axios
axios.defaults.baseURL="https://wd8948079301rvxlgb.wilddogio.com/"

// 全局挂载citySelector
import citySelector from 'vue2-city-selector'
Vue.use(citySelector)

// 路由导航守卫
// 全局守卫
router.beforeEach((to,from,next)=>{
  console.log(localStorage.getItem('isLogin'))
  // 1.直接进入下个路由
  // next()
  // 2.终止当前路由跳转
  // next(false)
  // 3.判断路由跳转方向后重定向
  // if(to.path=="/admin"){
  //   next('/login') 
  // }
  // 4.next(error)

  if(localStorage.getItem('isLogin')){//登录状态
    next()//直接进入当前路由操作页面
  }else{//未登录状态
    if(to.path=='/login' || to.path=='/register' || to.path=="/"){
      next()
    }else{
      if(confirm('您登陆了么？请先登录')){
        next('/login') 
      }else{
        next(false)
      }
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
