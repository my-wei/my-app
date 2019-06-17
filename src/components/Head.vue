<template>
  <nav class="site-header sticky-top py-1">
    <div class="container d-flex flex-column flex-md-row justify-content-between">
      <router-link class="py-2" to="#">
        <span>披萨点餐系统</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="d-block mx-auto"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
          <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
          <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
          <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
          <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
          <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
        </svg>
      </router-link>
      <router-link class="py-2 d-none d-md-inline-block" to="/">主页</router-link>
      <router-link class="py-2 d-none d-md-inline-block" to="/Menu">菜单</router-link>
      <router-link class="py-2 d-none d-md-inline-block" to="/Rest">地图</router-link>
      <router-link class="py-2 d-none d-md-inline-block" to="/Admin">管理</router-link>
      <router-link class="py-2 d-none d-md-inline-block" to="/activity">关于我们</router-link>

      <template v-if="!isLogin">
        <router-link class="py-2 d-none d-md-inline-block" to="/Register">登录</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/Login">注册</router-link>
      </template>
       <template v-else>
           <p class="currentUser text-success">{{currentUser}}&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary" @click="clearLogin">[退出]</span></p>
        </template>
    </div>
  </nav>
</template>
<script>
// import Swiper from 'swiper'
// import "../assets/css/swiper.min.css"
export default {
  name: "Home",
  computed: {
    isLogin() {
      return this.$store.getters.getIsLogin;
    },
    currentUser() {
      return this.$store.getters.getCurrentUser;
    }
  },

  mounted() {
    console.log(this.$store.getters.getIsLogin)
    //  var swiper = new Swiper('.swiper-container',{
    //   loop : true,
    //   effect : 'fade',
    //   // 如果需要分页器
    //   pagination: {
    //   el: '.swiper-pagination',
    //   },
    //    // 如果需要前进后退按钮
    //   navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    //   }
    // })
  },
  methods: {
    clearLogin() {
      if (confirm("您确定要退出么？")) {
        this.$store.dispatch("setUser", null);
        this.$router.push("login");
      } else {
        return false;
      }
    }
  }
};
</script>
<style scoped>
span {
  float: right;
}

</style>
