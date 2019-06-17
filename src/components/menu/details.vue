<template>
<div class="body">
    <h1>{{product.text}}</h1>
 <img :src="product.src" alt="">
 <h3>购买数量：{{product.num}}</h3>
 <button @click="goBack">goBack</button>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            product:{}
        }
    },
    mounted(){
        
        this.product=this.$route.params
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .body{
        width: 900px;
        height: 800px;
        margin: 0 auto;
        text-align: center;
        border: 1px solid #cccccc
    }
    h1{
        margin-top: 40px;
    }
    button{
        width: 100px;
        height: 40px;
        margin-top: 40px;
        
    }
</style>
