import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
// import Head from '../components/Head'
import About from '../components/About'
import Admin from '../components/Admin'
import Home from '../components/Home'
import Login from '../components/Login'
import Menu from '../components/Menu'
import Register from '../components/Register'
import Rest from '../components/Rest'
// 二级路由
import Activity from '../components/two/Activity'
import Contact from '../components/two/Contact'
import Delivery from '../components/two/Delivery'
import History from '../components/two/History'
import details from '../components/menu/details'
import Address from '../components/two/three/Address.vue'
import Person from '../components/two/three/Person.vue'
import Tel from '../components/two/three/Tel.vue'
export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      components:{
        default:Home,
        'history':History,
      }
    
    },
    {
      path:'/rest',
      name:'Rest',
      component:Rest
    },
    {
      path:'/about',
      name:'About',
      component:About,
      children:[{
        path:'/activity',
        name:'Activity',
        component:Activity
      },
      {
        path:'/contact',
        name:'Contact',
        component:Contact,
        children:[
          {
            path:'/address',
            name:'Address',
            component:Address
          },
          {
            path:'/person',
            name:'Person',
            component:Person
          },
          {
            path:'/tel',
            name:'Tel',
            component:Tel
          }
        ]
        
      },{
        path:'/delivery',
        name:'Delivery',
        component:Delivery
      },{
        path:'/history',
        name:'History',
        component:History
      }
    ]
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin,
      // 局部导航
      beforeEnter:(to,from,next)=>{
        if(localStorage.getItem('currentUser')=='123@qq.com'){
          next()
        }else{
          alert('没权限')
        }
      }
    },
    {
      path:'home',
      name:'Home',
      component:Home
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/menu',
      name:'Menu',
      component:Menu
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/details',
      name:'details',
      component:details
    }
  ]
})
