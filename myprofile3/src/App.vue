<template>
  <div id="app">
    <my-nav class="nav"></my-nav>
    <div class="main">
      <transition name="router-transition" enter-active-class="animate-fixed animated fadeInDown"
                  leave-active-class="animate-fixed animated fadeOutDown">
        <router-view class="router-margin"/>
      </transition>
    </div>
  </div>
</template>

<script>
  import MyNav from "@/components/organsms/MyNav"

  export default {
    components: {
      MyNav,
    },
    name: 'App'
  }
</script>

<style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css";

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100vm;
    height: 100vh;
    text-align: left;
    margin: 0 auto;
  }

  .main {
    overflow:auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    width: 85%;
    float: right;
    text-align: center;
    color: black;
    /*background: #4db6ac;*/
    /*background: #F4F5F7;*/
    background: #fcfcf3;
    box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.25);
  }

  .router-margin {
    margin: 40px 0;
  }

  .nav {
    overflow:auto;
    width: 15%;
    float: left;
    background: #37474f;
    height: 100vh;
    color: #949da1;
  }

  .animate-fixed {
    position: fixed;
    width: inherit;
  }
</style>
