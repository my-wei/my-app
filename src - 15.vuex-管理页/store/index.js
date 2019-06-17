import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{//vuex的状态源/数据源,在组件中一般不直接引用state的状态源
    menuItems:[]  
  },
  getters:{//派生状态的数据源，供组件使用
    getMenuItems:state=>state.menuItems 
    // 完整写法：
    // getMenuItems(state){
    //    return state.menuItems
    // }
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
    }
  },
  actions:{}    
})