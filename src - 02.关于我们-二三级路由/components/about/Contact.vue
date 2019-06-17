<template>
    <div>
       Contact页面
       <!-- 路由导航区 -->
       <nav>
         <router-link to="/ads">地址信息</router-link> 
         <router-link to="/pes">法人代表</router-link>   
         <router-link to="/tel">电话联系</router-link>  
       </nav>
       <!-- 路由展示区 -->
       <router-view></router-view>
    </div>
</template>

<script>
    export default {
       name:'Contact' 
    }
</script>

<style  scoped>

</style>