<template>
    <div class="container">
       About页面
       <!-- 路由导航区 -->
       <nav>
         <router-link to="/activity">热门活动</router-link>
         <router-link to="/contact">联系我们</router-link>     
         <router-link to="/history">历史订单</router-link>  
         <router-link to="/delivery">快递信息</router-link>  
       </nav>
       <!-- 路由展示区 -->
       <router-view></router-view>
    </div>
</template>

<script>
    export default {
      name:'About'  
    }
</script>

<style scoped>

</style>