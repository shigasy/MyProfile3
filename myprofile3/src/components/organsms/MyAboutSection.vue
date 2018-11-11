<template>
  <div>
    <my-page-title title="About"></my-page-title>
    <my-about-body></my-about-body>
  </div>
</template>

<script>
  import MyPageTitle from '@/components/atoms/MyPageTitle'
  import MyAboutBody from '@/components/molecules/MyAboutBody'


  export default {
    name: "MyAbout",
    components: {
      MyPageTitle,
      MyAboutBody
    },
  }
</script>

<style scoped>

</style>
