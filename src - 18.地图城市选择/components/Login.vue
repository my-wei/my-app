<template>
    <div class="container text-center mt-5">
       <img width="100" src="../assets/logo.png" alt="">
       <h3 class="text-primary">登录</h3>
       <form>
       <div class="form-group">
           <!-- <label for="input1">账号</label> -->
           <input type="username" class="form-control" id="input1" v-model="username" placeholder="请输入您的账号或邮箱">
        </div>
        <div class="form-group">
           <!-- <label for="input2">密码</label> -->
           <input type="password" class="form-control" id="input2" v-model="password" placeholder="请输入您的密码">
        </div>
        <button type="submit" class="btn btn-primary btn-block" @click.prevent="onSubmit">立即登录</button>
        </form>
    </div>
</template>

<script>
// 引入axios 
import axios from 'axios'
    export default {
      name:'Login',
      data(){
        return{
           username:'',
           password:''
        } 
      },
      methods:{
         onSubmit(){
           if(this.username==''){
             alert('当前用户名不能为空')
           }else if(this.password==''){
             alert('当前的密码也不能为空')
           }else{
             axios.get('./jsx-user.json')
               .then(res=>{
                  const result = []
                  for(let key in res.data){
                    result.push(res.data[key]) 
                  }
                  console.log(result)
                  const User = result.filter((item)=>{
                    return item.username===this.username && this.password===item.password 
                  })
                  if(User.length>0){
                    alert('登录成功')
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

<style scoped>
  .form-control{width:50%;display: inline;}
  .btn-block{width: 50%;display:inline-block;}
</style>