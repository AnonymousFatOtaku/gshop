<template>
  <div id="app">
    <!-- 两层结构，上面路由下面导航 -->
    <router-view/>
    <!-- $route代表当前路由 -->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from "./components/FooterGuide/FooterGuide";

  export default {
    mounted() {
      // this.$store.dispatch('getAddress')
      this.getAddress()
      this.getUserInfo()
    },
    methods: {
      ...mapActions(['getAddress', 'getUserInfo'])
    },
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
