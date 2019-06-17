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
       <div class="box">
         <h3>欢迎来到我的美食点餐系统 <br>这里有各种各样的美食等你</h3>
        <a href="/Menu#/Menu"><button>Let's Order</button></a>
        </div>
        <div class="liner"></div>
        <div class="Advertisement">
          <!-- 轮播图 -->
          <!-- <div class=".swiper1-container">
            
          </div> -->
        </div>
      <!-- 第二轮播图 -->
      <!-- <div class="swiper1-container">
    <div class="swiper1-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>
    Add Pagination
    <div class="swiper-pagination"></div>
  </div> -->

    <div>
        <!-- 第二个轮播图 -->
        <div class="swiper-container swiper2">
       <!-- 2.中二层 wrapper层  -->
       <div class="swiper-wrapper">
           <!--3.最内层 slide层  -->
           <div class="swiper-slide">
               <img src="../../static/imgs/a1.png" alt="">
               
           </div>
           <div class="swiper-slide">
               <img src="../../static/imgs/a2.png" alt="">
               
           </div>
           <div class="swiper-slide">
               <img src="../../static/imgs/a3.png" alt="">
               
           </div>
           <div class="swiper-slide">
                <img src="../../static/imgs/a4.png" alt="">
               
            </div>
            <div class="swiper-slide">
                <img src="../../static/imgs/a5.png" alt="">
                
            </div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination  xuan"></div>
        
       </div>
       <div style="position: absolute;left:772px">{{id}}</div>
       <div class="num" style="color:transparent">{{id}}</div>
       <div class="underbg bg-warning"></div> 
       <div class="babox"></div>
       <div class="rightbox"></div>
      </div>
      <div class="history mt-3 ">
        <h3 class="text-center">历史订单</h3>
        <History class="flex"></History>
         <History class="flex"></History>
      </div>

    </div>
</template>

<script>
import Swiper from 'swiper'
import "../assets/css/swiper.min.css"
import History from './two/History'
    export default {
      name:'Home',
      data(){
        return {
           id:1
        }
      },
      components:{
       
        History
      },
      mounted() {
       var swiper = new Swiper('.swiper1',{
        autoplay:{
           disableOnInteraction: false
        },
        loop : true,
        disableOnInteraction: true,
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
        var that=this
         var swiper2 = new Swiper('.swiper2',{
        loop : true,
        direction: 'vertical',
        autoplay:{
           disableOnInteraction: false
        },
        effect : 'fade',
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
        on: {
          slideChange: function () {
            // console.log(this.activeIndex);
            var ind = this.activeIndex
            if(ind>5){
              ind=1
            }
            if(ind<1){
              ind=5
            }
            that.id =ind
          }
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
  .box{
    width: 900px;
    height: 140px;
    background:rgba(0, 0, 0, 0.6);
    color:seagreen;
    position: relative;
    top: -300px;
    left: 100px;
    z-index: 100;
    text-align: center;
    
  }
  button{
    margin: 0 auto;
    display: block;
    width: 100px;
    height: 40px;
    background: rgb(0, 123, 255);
    border: 0;
    color:white
  }
  .swiper2 img{
    width: 370px;
    height: 500px;
  }
  .xuan{
    position: absolute;
    top: 430px;
    left: 375px;
  }
.babox{
  width: 400px;
  height: 500px;
  background: rgb(255, 203, 78);
  float: left; 
  margin-top: -475px;
}
.rightbox{
  width: 680px;
  height: 520px;
  background: red;
  float: right;
  margin-top: -495px;
  margin-bottom: 20px;
}
.text-center{
  margin-top: 50px
}
.flex{
  padding-top:20px;
  margin-left: 20px
}

</style>