<template>
<div style="position:relative">
  <img src="../../static/imgs/timg.jpg" alt="">
  <div class="body">
     <h2>登陆账号</h2>
     <input type="text" placeholder="请输入邮箱账号" class="inp" v-model="username">
     <input type="password" placeholder="请输入密码" v-model="password">
     <!-- <input type="password" placeholder="请确认密码" v-model="repassword"> -->
     <button @click="onsubmit">登陆</button>
  </div>
 
 
</div>
</template>

<script>
import axios from'axios'
  export default {
    data(){
      return{
        username:'',
        password:'',
      }
    },
    methods:{
      onsubmit(){
        var js=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
        var jj=/^[a-z0-9]+$/i
        if(!js.test(this.username)){
          alert('账号输入有误请重新输入')
        }else if(!jj.test(this.password)){
          alert('密码输入有误请重新输入')
        }else{
          axios.get('./wgq.json')
          .then(res=>{
            const result=[]
            for(let key in res.data){
              result.push(res.data[key])
            }
          const User=result.filter((item)=>{
            return item.username===this.username&&this.password===item.password
          })
          if(User.length>0){
            alert('登陆成功')
            this.$store.dispatch('setUser',User[0].username)
            this.$router.push('/')
          }else{
            alert('账号或密码错误')
            this.username=''
            this.password=''
          }
          })

          }
        }
      }
    }
  
</script>

<style  scoped>
.body{
  position: absolute;
  top: 201px;
  left:697px;
  width: 490px;
  height: 437px;
  border: 1px solid #cccccc;
  background: white;
}
h2{
  margin-top:   40px;
  line-height: 0;
}
input{
  width: 400px;
  height: 50px;
  display: block;
  margin: 20px 20px 20px 45px ;
}
.inp{
  margin-top: 60px;
}
button{
  width: 400px;
  height: 40px;
  margin-left: 45px;
}
</style>
