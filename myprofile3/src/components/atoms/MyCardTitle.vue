<template>
  <div>
    <h2 class="card-title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'MyCardTitle',
  props: ['title']

}
</script>

<style scoped>
  .card-title {
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
    color: #333;
  }
</style>
