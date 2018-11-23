<template>
  <div>
    <p class="card-text">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyCardText',
  props: ['description']
}
</script>

<style scoped>

  .card-text {
    text-align: left;
    color: #777;
    font-size: 14px;
    line-height: 1.5;
  }

</style>
