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
  <tbody>
    <tr v-for="(item,index) in newOrder" :key="index">
      <th scope="row">1</th>
      <td>{{item.name}}-{{item.size}}</td>
      <td>{{item.price}}</td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>

  export default {
      name:'Shopping',
      props:['newOrder']  
  }
</script>

<style  scoped>
  th,td{text-align: center;}
</style>