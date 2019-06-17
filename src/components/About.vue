
<template>
<div class="container">
  <!-- 路由导航 -->
  <div class="container">
      <div class="row">
      <div class="col-4">
  <nav>
    <router-link class="list-group-item list-group-item-success mt-3 text-center"  to="/activity">热门活动</router-link>
    <router-link class="list-group-item list-group-item-danger mt-3 text-center"  to="/address">联系我们</router-link>     
    <router-link class="list-group-item list-group-item-warning mt-3 text-center"  to="/history">历史订单</router-link>  
    <router-link class="list-group-item list-group-item-info mt-3 text-center"  to="/delivery">快递信息</router-link>  
  </nav>
  </div>
  <div class="col-8">
  <router-view></router-view>
 </div>
      </div>
      </div> 
    </div>
</template>

<script>
  export default {

  }
</script>

<style  scoped>

</style>
