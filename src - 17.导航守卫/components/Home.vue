<template>
    <div class="container">
      <button @click="setMenu">Let's Order</button>
      <!-- swiper的骨架结构 -->
    <!-- 主要分三层 -->
    <!-- 1.最外层container包裹层 -->
    <div class="swiper-container swiper1">
       <!-- 2.中二层 wrapper层  -->
       <div class="swiper-wrapper">
           <!--3.最内层 slide层  -->
           <div class="swiper-slide">
               <img src="../assets/imgs1/p1.jpg" alt="">
              
           </div>
           <div class="swiper-slide">
               <img src="../assets/imgs1/p2.jpg" alt="">
              
           </div>
           <div class="swiper-slide">
               <img src="../assets/imgs1/p3.jpg" alt="">
             
           </div>
           <div class="swiper-slide">
                <img src="../assets/imgs1/p4.jpg" alt="">
               
            </div>
            <div class="swiper-slide">
                <img src="../assets/imgs1/p5.jpg" alt="">
                 
            </div>
            <div class="swiper-slide">
                <img src="../assets/imgs1/p6.jpg" alt="">
                 
            </div>
            <div class="swiper-slide">
                <img src="../assets/imgs1/p7.jpg" alt="">
                 
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
               <img src="../assets/imgs1/p1.jpg" alt="">
               
           </div>
           <div class="swiper-slide">
               <img src="../assets/imgs1/p2.jpg" alt="">
              
           </div>
           <div class="swiper-slide">
               <img src="../assets/imgs1/p3.jpg" alt="">
               
           </div>
           <div class="swiper-slide">
                <img src="../assets/imgs1/p4.jpg" alt="">
                
            </div>
            <div class="swiper-slide">
                <img src="../assets/imgs1/p5.jpg" alt="">
            </div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>
       <div class="span">0{{id}}</div>  
       </div>
       
       <div class="underbg bg-warning"></div> 
       <div class="right"> 12345678</div>
       <div style="clear:both;"></div>
       <!-- 组件嵌套 -->
       <div class="history mt-3" >
         <h3 class="text-center">历史订单</h3>
         <History class="flex"></History>
       </div>
       <!-- 路由嵌套 -->

    </div>
</template>

<script>
import Swiper from 'swiper'
import "../assets/css/swiper.min.css"
import History from './about/History'
    export default {
      name:'Home',
      data(){
       return{
         id:1
       } 
      },
      components:{
        History
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
            console.log(this.activeIndex);
            var ind = this.activeIndex
            if(ind>5){
              ind=1
            }
            if(ind<1){
              ind=5
            }
            that.id =ind
          },
        },
      })  
      },
      methods:{
       setMenu(){
        // 跳转到某一个路由页面
        // 字符串跳转
        this.$router.push('/menu')
        // 对象跳转
        // this.$router.push({ path: 'menu' })
        // params携带的参数
        // this.$router.push({ name: 'Menu', params: { userId: '123' }})

        // 方法2：
        // this.$router.replace('/menu') 
       } 
      }  
    }
</script>

<style scoped>
  .swiper-container{
        width: 100%;
        height: 500px;
      }
  img{width: 100%;height: 100%;}
  .swiper2{width: 300px;height: 500px;float:left;position: relative;left: 0;top:0;border-radius: 10px;}
  .swiper2 img{width: 90%;position:relative;}
  .underbg{background:orange;width: 300px;height: 500px;position: absolute;left: 10%;
    top: 90%;border-radius: 10px;}
  .span{position: absolute;top: 334px;right: 5px;}
  .right{width: 500px;height: 500px;background: orange;float: left;margin-left:200px;}
  .flex{padding: 20px;}    
</style>