<template>
  <div class="nav-title">
    <router-link to="/">
      <my-button navTitle="Home" class="link"></my-button>
    </router-link>
    <router-link to="/about">
      <my-button navTitle="About" class="link"></my-button>
    </router-link>
    <router-link to="/work">
      <my-button navTitle="Work" class="link"></my-button>
    </router-link>
    <router-link to="/contact">
      <my-button navTitle="Contact" class="link"></my-button>
    </router-link>
  </div>
</template>

<script>
  import MyButton from '@/components/atoms/MyButton'

  export default {
    name: "MyNavButton",
    components: {
      MyButton
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #949da1;
  }

  .link {
    margin: 50px 0;
    overflow: hidden;
    position: relative;
    font-weight: bold;
    padding: 0.25em 0;
    text-decoration: none;
    color: #949da1;
  }
  .link:before{
    position: absolute;
    content: '';
    width: 100%;
    height: 4px;
    top:100%;
    left: 0;
    border-radius: 3px;
    background:#4db6ac;
    transition: .2s;
  }

  .link:hover:before {
    top: -webkit-calc(100% - 3px);
    top: calc(100% - 3px);
  }


</style>
