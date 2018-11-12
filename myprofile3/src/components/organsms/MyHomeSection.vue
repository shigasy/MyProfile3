<template>
  <div>
    <h1>
      <vue-typer text="Hello World. Welcome to MyPoZi's website." :pre-erase-delay=5000
                 caret-animation="smooth"></vue-typer>
    </h1>
  </div>

</template>

<script>
  export default {
    name: "MyHomeSection",
  }
</script>

<style scoped>
  h1 {
    margin: 50vh 0 0;
  }
</style>
