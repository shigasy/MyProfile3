<template>
  <div id="app">
    <my-nav :class="isNav"></my-nav>
    <a @click="toggle"><my-hamburger class="hamburger"></my-hamburger></a>
    <div :class="main">
      <transition name="router-transition" enter-active-class="animate-fixed animated fadeInDown"
                  leave-active-class="animate-fixed animated fadeOutDown">
        <router-view class="router-margin"/>
      </transition>
    </div>
  </div>
</template>

<script>
  import MyNav from "@/components/organsms/MyNav"
  import MyHamburger from "@/components/atoms/MyHumburger"

  export default {
    components: {
      MyNav,
      MyHamburger
    },
    data() {
      return {
        isActive: true,
      }
    },
    computed: {
      isNav () {
        return this.isActive ? this.nav.nav2 : this.nav.nav1
      },
      main () {
        return this.isActive ? this.nav.main2 : this.nav.main1
      }
    },
    name: 'App',
    methods: {
      toggle: function () {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css";

  * {
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

  }

  #app {
    width: 100vm;
    height: 100vh;
    text-align: left;
    margin: 0 auto;
  }
  .hamburger {
    position: absolute;
    margin: 10px;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6));
  }

  .hamburger:hover {
    transition: all 0.40s ease 0s;
    transform: scale(1.1, 1.1);
  }

  .router-margin {
    margin: 40px 0;
  }

  .animate-fixed {
    position: fixed;
    width: inherit;
  }
</style>

<style module="nav">
  .nav1 {
    overflow: auto;
    width: 15%;
    float: left;
    background: #37474f;
    height: 100vh;
    color: #949da1;
    transition: all 0.4s ease 0s;
  }
  .nav2 {
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0s;
  }

  .main1 {
    overflow:auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    width: 85%;
    float: right;
    text-align: center;
    color: black;
    background: #fcfcf3;
    box-shadow: 5px 0 20px rgba(0, 0, 0, 0.25);
    transition: all 0.4s ease 0s;

  }
  .main2 {
    overflow:auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    width: 100%;
    float: right;
    text-align: center;
    color: black;
    background: #fcfcf3;
    box-shadow: 5px 0 20px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease 0s;
  }
  /* タブレット */
  @media (max-width: 1000px) {
    .nav1 {
      overflow: auto;
      width: 15%;
      float: left;
      background: #37474f;
      height: 100vh;
      color: #949da1;
      transition: all 0.4s ease 0s;
    }

    .nav2 {
      width: 0;
      height: 0;
      opacity: 0;
      visibility: hidden;
      transition: all 0s;
    }

    .main1 {
      overflow: auto;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100vh;
      width: 85%;
      float: right;
      text-align: center;
      color: black;
      background: #fcfcf3;
      box-shadow: 5px 0 20px rgba(0, 0, 0, 0.25);
      transition: all 0.4s ease 0s;

    }

    .main2 {
      overflow: auto;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100vh;
      width: 100%;
      float: right;
      text-align: center;
      color: black;
      background: #fcfcf3;
      box-shadow: 5px 0 20px rgba(0, 0, 0, 0.25);
      transition: all 0.3s ease 0s;
    }
  }
  /* スマートフォン */
  @media (max-width: 670px) {
    .nav1 {
      overflow: auto;
      width: 30%;
      float: top;
      background: #37474f;
      height: 100vh;
      color: #949da1;
      transition: all 0.4s ease 0s;
      font-size: 70%;
    }
    .nav2 {
      width: 0;
      height: 0;
      opacity: 0;
      visibility: hidden;
      transition: all 0s;
    }

    .main1 {
      overflow:auto;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100vh;
      width: 70%;
      float: right;
      text-align: center;
      color: black;
      background: #fcfcf3;
      box-shadow: 5px 0 20px rgba(0, 0, 0, 0.25);
      transition: all 0.4s ease 0s;
      font-size: 90%;

    }
    .main2 {
      overflow:auto;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100vh;
      width: 100%;
      float: right;
      text-align: center;
      color: black;
      background: #fcfcf3;
      box-shadow: 5px 0 20px rgba(0, 0, 0, 0.25);
      transition: all 0.3s ease 0s;
    }
  }
</style>
