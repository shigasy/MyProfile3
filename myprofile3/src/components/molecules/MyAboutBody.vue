<template>
  <div class="body">
    <my-image></my-image>
    <table class="test">
      <tr>
        <th>Name</th><td>MyPoZi</td>
      </tr>
      <tr>
        <th>Age</th><td>20</td>
      </tr>
      <tr>
        <th>Location</th><td>Ishikawa Japan</td>
      </tr>
      <tr>
        <th>Job</th><td>大学2年生</td>
      </tr>
      <tr>
        <th>Love</th><td>プログラミング 自己分析</td>
      </tr>
      <tr>
        <th>Twitter</th><td><a href="https://twitter.com/MyPoZi555">@mypozi555</a></td>
      </tr>
      <tr>
        <th>Github</th><td><a href="https://github.com/MyPoZi">MyPoZI</a></td>
      </tr>
    </table>
    <br>
    <h3>大学卒業後は、東京でWeb系の仕事に就きたいです!!</h3>

  </div>
</template>

<script>
  import MyImage from "@/components/atoms/MyImage"

  export default {
    name: "MyAboutBody",
    components: {
      MyImage
    }

  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .body {
    width: 70%;
    margin: 30px auto;
    background: #4db6ac;
    /*box-shadow: 15px 15px 10px 15px rgba(0, 0, 0, 0.25);*/
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.6));
  }
  .test {
    /*text-align: center;*/
    margin: 0 auto;
  }


</style>
