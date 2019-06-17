// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import axios from 'axios'
axios.defaults.baseURL="https://wd3209803564olcrcp.wilddogio.com/"
/* eslint-disable no-new */
// 全局挂载citySelector
import citySelector from 'vue2-city-selector'
Vue.use(citySelector)


import store from './store' 
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
    if(to.path=='/Login' || to.path=='/Register' || to.path=="/"){
      next()
    }else{
      if(confirm('不登陆不给看，都是秘密')){
        next('/Register') 
      }else{
        next(false)
      }
    }
  }
})




new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
