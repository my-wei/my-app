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
          this.newOrder.push(
            {
              name:value.item.name,
              size:value.item1.size,
              price:value.item1.price
            }   
          )
          // console.log(this.newOrder) 
        }
      }  
    }
</script>

<style scoped>

</style>