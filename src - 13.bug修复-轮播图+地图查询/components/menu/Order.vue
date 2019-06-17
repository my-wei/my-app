<template>
    <div>
       <!-- Order页面 -->
   <h3 class="text-center mt-5">点餐系统</h3>
<table class="table">
  <thead class="bg-dark text-white">
    <tr>
      <th scope="col">尺寸</th>
      <th scope="col">价格</th>
      <th scope="col">操作</th>
    </tr>
  </thead>
  <template v-if="newMenu.length>0">
  <tbody v-for="(item,index) in newMenu" :key="index">
       <tr>
         <td colspan="3">{{item.name}}</td>
       </tr> 
       <tr>
         <td colspan="3">{{item.description}}</td>
       </tr>
       <tr v-for="(item1,index1) in item.options" :key="index1">
         <td>{{item1.size}}</td>
         <td>{{item1.price}}</td>
         <td><button class="btn btn-success" @click="addBasket(item,item1)">+</button></td>
       </tr> 
  </tbody>
  </template>
  <template v-else>
    <tbody>
       <tr>
           <td class="text-warning" colspan="3"><h3>赶快去添加您的菜单吧~</h3></td>
       </tr> 
    </tbody>
</template>
</table>
    </div>
</template>

<script>
    export default {
      name:'Order',
      props:['newMenu'],
      methods:{
        addBasket(item,item1){
          this.$emit('order1',{item:item,item1:item1})  
        }  
      }  
    }
</script>

<style scoped>
  th,td{text-align:center;}
</style>