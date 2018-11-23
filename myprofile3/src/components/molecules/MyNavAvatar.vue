<template>
  <div class="nav-avatar">
    <my-avatar></my-avatar>
  </div>
</template>

<script>
import MyAvatar from '@/components/atoms/MyAvatar'

export default {
  name: 'MyNavAvatar',
  components: {
    MyAvatar
  }
}
</script>

<style scoped>
  .nav-avatar {
    height: 25%;
    background: #263238;
  }

</style>
