<template>
<div style="position:relative">
  <img src="../../static/imgs/timg.jpg" alt="">
  <div class="body">
     <h2>注册账号</h2>
     <input type="text" placeholder="请输入邮箱账号" class="inp" v-model="username">
     <input type="password" placeholder="请输入密码" v-model="password">
     <input type="password" placeholder="请确认密码" v-model="repassword">
     <button @click="onsubmit">注册</button>
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
        repassword:''
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
        }else if(this.password==!this.repassword){
          alert('两次输入密码不一致，请重新输入')
        }else{
          const formData={
            username:this.username,
            password:this.password
          }
          axios.post('./wgq.json',formData)
          .then(res=>{
            alert('当前注册成功')
            this.$router.push('./login')
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
