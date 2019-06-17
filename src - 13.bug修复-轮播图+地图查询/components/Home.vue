<template>
    <div class="container">
      <!-- swiper的骨架结构 -->
    <!-- 主要分三层 -->
    <!-- 1.最外层container包裹层 -->
    <div class="swiper-container swiper1">
       <!-- 2.中二层 wrapper层  -->
       <div class="swiper-wrapper">
           <!--3.最内层 slide层  -->
           <div class="swiper-slide">
               <img src="../assets/imgs1/1.png" alt="">
              
           </div>
           <div class="swiper-slide">
               <img src="../assets/imgs1/2.png" alt="">
              
           </div>
           <div class="swiper-slide">
               <img src="../assets/imgs1/3.png" alt="">
             
           </div>
           <div class="swiper-slide">
                <img src="../assets/imgs1/4.png" alt="">
               
            </div>
            <div class="swiper-slide">
                <img src="../assets/imgs1/5.png" alt="">
                 
            </div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>
         
       </div>

       <!-- 第二个轮播图 -->
        <div class="swiper-container swiper2">
       <!-- 2.中二层 wrapper层  -->
       <div class="swiper-wrapper">
           <!--3.最内层 slide层  -->
           <div class="swiper-slide">
               <img src="../assets/imgs1/1.png" alt="">
               
           </div>
           <div class="swiper-slide">
               <img src="../assets/imgs1/2.png" alt="">
              
           </div>
           <div class="swiper-slide">
               <img src="../assets/imgs1/3.png" alt="">
               
           </div>
           <div class="swiper-slide">
                <img src="../assets/imgs1/4.png" alt="">
                
            </div>
            <div class="swiper-slide">
                <img src="../assets/imgs1/5.png" alt="">
            </div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>
       <div class="span">0{{id}}</div>  
       </div>
       
       <div class="underbg bg-warning"></div> 

    </div>
</template>

<script>
import Swiper from 'swiper'
import "../assets/css/swiper.min.css"
    export default {
      name:'Home',
      data(){
       return{
         id:1
       } 
      },
      mounted() {
       var swiper1 = new Swiper('.swiper1',{
        loop : true,
        // autoplay:true,
        effect : 'fade',
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        }
      })
      var that=this
      var swiper2 = new Swiper('.swiper2',{
        loop : true,
        direction: 'vertical',
        // autoplay:true,
        effect : 'fade',

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
        on: {
          slideChange: function () {
            // console.log(this.activeIndex);
            that.id =this.activeIndex
            console.log(that.id)
          },
        },
      })  
      }  
    }
</script>

<style scoped>
  .swiper-container{
        width: 100%;
        height: 500px;
      }
  img{width: 100%;height: 100%;}
  .swiper2{width: 300px;height: 500px;position: relative;left: -200px;top:0;border-radius: 10px;}
  .swiper2 img{width: 90%;position:relative;}
  .underbg{background:orange;width: 300px;height: 500px;position: absolute;left: 25%;
    top: 90%;border-radius: 10px;}
  .span{position: absolute;top: 334px;right: 5px;}    
</style>