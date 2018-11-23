<template>
  <div class="pageTitle">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MyPageTitle',
  props: ['title']
}
</script>

<style scoped>
  h1{
    position: relative;
    display: inline-block;
    margin-bottom: 1em;
  }
  h1:before {
    content: '';
    position: absolute;
    bottom: -15px;
    display: inline-block;
    width: 60px;
    height: 5px;
    left: 50%;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: black;
    border-radius: 2px;
  }

</style>
