import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{//vuex的状态源/数据源,在组件中一般不直接引用state的状态源
    menuItems:[],//菜单数组
    currentUser:localStorage.getItem('currentUser'),//当前用户名，默认为空
    isLogin:localStorage.getItem('isLogin')//当前的登录状态，默认为false  
  },
  getters:{//派生状态的数据源，供组件使用
    getMenuItems:state=>state.menuItems,// 完整写法：getMenuItems(state){ returnstate.menuItems } 
    getCurrentUser:state=>state.currentUser,
    getIsLogin:state=>state.isLogin
  },
  mutations:{//更改state状态源的事件回调函数
    // 1.增加一条数据
    pushMenuItems(state,data){
       state.menuItems.push(data)  
    },
    // 2.获取所有数据
    setMenuItems(state,data){
       state.menuItems=data 
    },
    // 3.删除一条数据 
    deleteMenuItems(state,data){
       state.menuItems.splice(data,1) 
    },
    UserStatus(state,data){
      if(data){//如果登录成功，传入data数据-用户名
        console.log(data)
        state.isLogin=true
        state.currentUser=data
        // 使用离线存储
        localStorage.setItem('isLogin',true)
        localStorage.setItem('currentUser',data)
      }else{
        state.isLogin=false
        state.currentUser=null
        localStorage.clear()
      }
    }
  },
  actions:{//Action 提交的是 mutation,更便于我们管理维护
    setUser({commit},user){
      commit('UserStatus',user)
    } 
  }    
})