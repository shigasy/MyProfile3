<template>
  <div>
    <my-page-title title="Works"></my-page-title>
    <my-works-section></my-works-section>
  </div>
</template>

<script>
import MyWorksSection from '@/components/organsms/MyWorksSection'
import MyPageTitle from '@/components/atoms/MyPageTitle'

export default {
  name: 'MyWork',
  components: {
    MyWorksSection,
    MyPageTitle
  }
}
</script>

<style scoped>

</style>
