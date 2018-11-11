<template>
  <div>
    <my-page-title title="Contact"></my-page-title>
    <div class="contact">
    <a href="https://twitter.com/MyPoZi555"><my-twitter-icon class="animated bounce icon"></my-twitter-icon></a>
    <a href="https://github.com/MyPoZi"><my-github-icon class="animated bounce icon"></my-github-icon></a>
    </div>
  </div>

</template>

<script>
  import MyPageTitle from '@/components/atoms/MyPageTitle'
  import MyTwitterIcon from '@/components/atoms/MyTwitterIcon'
  import MyGithubIcon from '@/components/atoms/MyGithubIcon'

  export default {
    name: "MyContactSection",
    components: {
      MyPageTitle,
      MyTwitterIcon,
      MyGithubIcon
    }
  }
</script>

<style scoped>

  .contact {
    display: inline-block;
  }

  .icon {
    margin: 30px 0;
  }

  .icon:hover{
    -webkit-animation-duration: 1s;
    animation-iteration-count: infinite;
  }

</style>
