<template>
    <div class="container">
       <!-- Admin页面 -->
       <div class="row">
       <div class="col-7">
         <Newpizza></Newpizza> 
       </div>
       <div class="col-5">
         <NewMenu></NewMenu>   
         </div>      
       </div>   
    </div>
</template>

<script>
import Newpizza from './admin/Newpizza'
import NewMenu from './admin/Newmenu'
    export default {
      name:'Admin',
      components:{
        Newpizza,
        NewMenu
      }  
    }
</script>

<style scoped>

</style>