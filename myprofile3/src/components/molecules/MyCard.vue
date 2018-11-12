<template>
  <div>
    <div>
      <h2 class="card-title">{{ title }}</h2>
      <my-tech-tag class="tech-tag" v-if="useTech1" :tag=useTech1></my-tech-tag>
      <my-tech-tag class="tech-tag" v-if="useTech2" :tag=useTech2></my-tech-tag>
      <p class="card-text">{{ description }}</p>
      <small class="date">{{ date }}</small>
    </div>
  </div>
</template>

<script>
  import MyTechTag from '@/components/atoms/MyTechTag'

  export default {
    name: 'MyCard',
    components: {
      MyTechTag
    },
    props: ['title', 'description', 'useTech1', 'useTech2', 'date'],
  }
</script>

<style scoped>
  .card-title {
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
    color: #333;
  }

  .card-text {
    text-align: left;
    color: #777;
    font-size: 14px;
    line-height: 1.5;
  }


</style>
