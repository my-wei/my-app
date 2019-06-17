<template>
    <div>
       商品详情页
       <div>
         <h1>{{product.text}}</h1>
         <img :src="product.src" alt="">
         <h3>购买数量：{{product.num}}</h3>
         <button @click="goBack">goBack</button>
       </div>
    </div>
</template>

<script>
    export default {
      name:'Details',
      data(){
        return{
          product:{} 
        }
      },
      mounted() {
        console.log(this.$route.params)
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

</style>