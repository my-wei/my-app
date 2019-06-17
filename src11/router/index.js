import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 1.引入路由组件
// 二级路由
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Admin from '../components/Admin.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

// 2.配置路由
// 3.回到页面配置路由导航层+路由展示层
export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home 
    },
    {
      path:'/menu',
      name:'Menu',
      component:Menu 
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin 
    },
    {
      path:'/about',
      name:'About',
      component:About 
    },
    {
      path:'/login',
      name:'Login',
      component:Login 
    },
    {
      path:'/register',
      name:'Register',
      component:Register 
    },
  ],
  mode:'history'//取消锚点链接
})
