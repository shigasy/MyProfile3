<template>
  <div>
    <div>
      <my-card-title :title=title></my-card-title>
      <my-tech-tag v-if="useTech1" :tag=useTech1></my-tech-tag>
      <my-tech-tag v-if="useTech2" :tag=useTech2></my-tech-tag>
      <my-card-text :description=description></my-card-text>
      <my-card-date :date=date></my-card-date>
    </div>
  </div>
</template>

<script>
import MyTechTag from '@/components/atoms/MyTechTag'
import MyCardTitle from '@/components/atoms/MyCardTitle'
import MyCardText from '@/components/atoms/MyCardText'
import MyCardDate from '@/components/atoms/MyCardDate'

export default {
  name: 'MyCard',
  components: {
    MyTechTag,
    MyCardTitle,
    MyCardText,
    MyCardDate
  },
  props: ['title', 'description', 'useTech1', 'useTech2', 'date']
}
</script>

<style scoped>

</style>
