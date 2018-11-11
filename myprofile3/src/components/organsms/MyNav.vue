<template>
  <div>
    <my-nav-avatar class="avatar"></my-nav-avatar>
    <div>
      <my-nav-button navTitle="Home" class="nav-button"></my-nav-button>
    </div>
  </div>
</template>

<script>
  import MyNavButton from '@/components/molecules/MyNavButton'
  import MyNavAvatar from '@/components/molecules/MyNavAvatar'

  export default {
    name: "MyNav",
    components: {
      MyNavButton,
      MyNavAvatar
    },
  }
</script>

<style scoped>
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-button {
    height: 3em;
    margin: 10px;
    text-align: center;

  }

</style>
