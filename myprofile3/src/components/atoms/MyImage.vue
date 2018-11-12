<template>
  <div>
    <img src="../../assets/image.jpg">
  </div>
</template>

<script>
    export default {
        name: "MyImage"
    }
</script>

<style scoped>
  img {
    margin: 20px 0;
    width: 192px;
    height: 192px;
    border-radius: 96px;
  }
  @media (max-width: 1024px) {
    img {
      width: 35%;
      height: 35%;
      border-radius: 150px;
    }
  }
  @media (max-width: 670px) {
    img {
      width: 80%;
      height: 80%;
      border-radius: 150px;
    }
  }

</style>
