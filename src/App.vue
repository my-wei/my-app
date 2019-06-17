<template>
  <div id="app">
    <Head></Head>
    <router-view></router-view>
    <router-view name="history" class="container  boxone"></router-view>
  </div>
</template>

<script>
  import Head from './components/Head'
export default {
  name: 'App',
  data(){
      return{

      }
  },
  components:{
    Head
  }
}
</script>
<style>
.boxone{
  margin-left: 400px;
  margin-top: 20px;
}
</style>

