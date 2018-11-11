<template>
  <div class="nav-title">
    <router-link to="/"><my-button navTitle="Home" class="link"></my-button></router-link>
    <router-link to="/about"><my-button navTitle="About" class="link"></my-button></router-link>
    <router-link to="/work"><my-button navTitle="Work" class="link"></my-button></router-link>
    <router-link to="/contact"><my-button navTitle="Contact" class="link"></my-button></router-link>
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
  }

</style>
