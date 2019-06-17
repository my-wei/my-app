<template>
    <div class="container">
      <!-- swiper的骨架结构 -->
    <!-- 主要分三层 -->
    <!-- 1.最外层container包裹层 -->
    <div class="swiper-container">
       <!-- 2.中二层 wrapper层  -->
       <div class="swiper-wrapper">
           <!--3.最内层 slide层  -->
           <div class="swiper-slide">
               <img src="../assets/imgs1/01.jpg" alt="">
           </div>
           <div class="swiper-slide">
               <img src="../assets/imgs1/02.jpg" alt="">
           </div>
           <div class="swiper-slide">
               <img src="../assets/imgs1/03.jpg" alt="">
           </div>
           <div class="swiper-slide">
                <img src="../assets/imgs1/04.jpg" alt="">
            </div>
            <div class="swiper-slide">
                    <img src="../assets/imgs1/05.jpg" alt="">
                </div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>
       <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
       </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import "../assets/css/swiper.min.css"
    export default {
      name:'Home',
      mounted() {
       var swiper = new Swiper('.swiper-container',{
        loop : true,
        effect : 'fade',
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },
         // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
      }) 
      }  
    }
</script>

<style scoped>
  .swiper-container{
        width: 100%;
        height: 500px;
        /* background: red;   */
      }
  img{width: 100%;height: 100%;}
</style>