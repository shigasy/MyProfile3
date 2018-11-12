<template>
  <div>
    <my-page-title title="Contact"></my-page-title>
    <my-contact-section></my-contact-section>
  </div>
</template>

<script>
  import MyPageTitle from '@/components/atoms/MyPageTitle'
  import MyContactSection from '@/components/organsms/MyContactSection'


  export default {
    name: "MyContact",
    components: {
      MyContactSection,
      MyPageTitle
    },
  }
</script>

<style scoped>

</style>
