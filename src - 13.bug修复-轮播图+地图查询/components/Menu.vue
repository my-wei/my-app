<template>
    <div class="container">
       <!-- Menu页面 -->
       <div class="row">
         <div class="col-7"><Order :newMenu="newMenu" @order1="getOrder"></Order></div>
         <div class="col-5"><Shopping :newOrder="newOrder"></Shopping></div>
       </div>
    </div>
</template>

<script>
import Order from './menu/Order'
import Shopping from './menu/Shopping'
import axios from 'axios'
    export default {
      name:'Menu',
      components:{
         Order,
         Shopping 
      },
      data(){
        return {
          newMenu:[],
          newOrder:[] 
        }
      },
      mounted(){
        axios.get('./jsx-menu.json')
        .then(res=>{
           for(let key in res.data){
             this.newMenu.push(res.data[key])
           }
           console.log(this.newMenu)
        }) 
      },
      methods:{
        getOrder(value){
          // console.log(value)
          // console.log(value.item1.size)
          const product={
                name:value.item.name,
                size:value.item1.size,
                price:value.item1.price,
                quantity:1
          }  
          const trueOrder = this.newOrder.filter((item)=>{
            return item.name===value.item.name&&item.size===value.item1.size   
          })
          if(trueOrder.length>0){
            console.log('当前购物信息已存在')
            if(trueOrder[0].quantity>=10){
              alert('当前商品每人只能选购10件')
            }else{
              trueOrder[0].quantity++
            }
          }else{
            this.newOrder.push(product)
          } 
          // console.log(this.newOrder) 
        }
      }  
    }
</script>

<style scoped>

</style>