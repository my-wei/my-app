<template>
    <div class="mt-5">
      <h3 class="text-center">菜单管理</h3>
<table class="table">
  <thead>
    <tr>
      <th scope="col">序号</th>
      <th scope="col">品种</th>
      <th scope="col">操作</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in newmenu" :key="index">
      <td scope="row">{{index+1}}</td>
      <td>{{item.name}}</td>
      <td><button class="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
       name:'Newmenu',
       data(){
         return{
           newmenu:[]  
         }  
       },
       mounted(){
         axios.get('./jsx-menu.json')
         .then(res=>{
            for(let key in res.data){
                this.newmenu.push(res.data[key])
            }
            console.log(this.newmenu)
         })  
       } 
    }
</script>

<style  scoped>
  td,th{text-align: center;}
</style>