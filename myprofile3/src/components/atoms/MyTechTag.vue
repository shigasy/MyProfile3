<template>
  <div class="tag">
    {{tag}}
  </div>
</template>

<script>
  export default {
    name: "MyTechTag",
    props: ['tag']
  }
</script>

<style scoped>
  .tag {
    /*font-family: Helvetica, Arial, sans-serif;*/
    background: #588fe5;
    display: inline-block;
    color: #fff;
    padding: 5px;
    border-radius: 4px;
    margin: 0 10px 5px;
  }

</style>
