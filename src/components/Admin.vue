<template>
 <div class="container">
       <!-- Admin页面 -->
       <div class="row">
       <div class="col-7">
         <Newpizza></Newpizza> 
       </div>
       <div class="col-5">
         <Newmenu></Newmenu>   
         </div>      
       </div>   
    </div>
</template>

<script>
import Newpizza from './admin/Newpizza'
import Newmenu from './admin/Newmenu'
  export default {
    components:{
      Newpizza,
      Newmenu
    }
  }
</script>

<style  scoped>

</style>
