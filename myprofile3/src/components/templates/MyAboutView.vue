<template>
  <div>
    <my-page-title title="About"></my-page-title>
    <my-about-section></my-about-section>
  </div>
</template>

<script>
  import MyPageTitle from '@/components/atoms/MyPageTitle'
  import MyAboutSection from '@/components/organsms/MyAboutSection'



  export default {
    name: "MyAbout",
    components: {
      MyAboutSection,
      MyPageTitle
    },
  }
</script>

<style scoped>

</style>
