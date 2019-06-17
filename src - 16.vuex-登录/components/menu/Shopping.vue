<template>
<div>
<h3 class="text-center mt-5">购物车</h3>   
<table class="table">
  <thead class="bg-dark text-white">
    <tr>
      <th scope="col">数量</th>
      <th scope="col">种类</th>
      <th scope="col">价格</th>
    </tr>
  </thead>
  <template v-if="newOrder.length>0">
  <tbody>
    <tr v-for="(item,index) in newOrder" :key="index">
      <th scope="row">
         <button class="btn btn-primary btn1" @click="reduce(item,index)">-</button>
         <input type="number" min="0" max="10" class="inpt1" v-model.number="item.quantity">
         <button class="btn btn-primary btn1" @click="item.quantity>=10?10:item.quantity++">+</button> 
      </th>
      <td>{{item.name}}-{{item.size}}</td>
      <td>{{item.price}}</td>
    </tr>
    <tr>
        <td colspan="3" class="text-right">商品总件数：<strong class="text-primary">{{TotalNum}}</strong> </td>
    </tr>
    <tr>
        <td colspan="3" class="text-right">商品总价：<strong class="text-primary">{{TotalPrice}}</strong></td>
    </tr>
  </tbody>
</template>
<template v-else>
    <tbody>
       <tr>
           <td class="text-warning " colspan="3"><h3>购物车空空如也~</h3></td>
       </tr> 
    </tbody>
</template>
</table>
    </div>
</template>

<script>

  export default {
      name:'Shopping',
      props:['newOrder'],
      methods:{
        reduce(item,index){
          if(item.quantity>1){
            item.quantity--  
          }else{
            this.newOrder.splice(index,1)  
          }  
        }  
      },
      computed:{
        TotalNum(){
          return this.newOrder.reduce((prev,next)=>{
            return prev+next.quantity
          },0)      
        },
        TotalPrice(){
          return this.newOrder.reduce((prev,next)=>{
            return prev+Number(next.quantity*next.price) 
          },0)  
        }  
      }  
  }
</script>

<style  scoped>
  th,td{text-align: center;}
  .inpt1{width:50px;}
  .btn1{padding: 1px 6px;margin-top: -2px;}
</style>