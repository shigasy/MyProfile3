<template>
  <div class="body">
    <my-image></my-image>
    <table class="table">
      <tr>
        <th><span class="maker">Name</span></th>
        <td>MyPoZi</td>
      </tr>
      <tr>
        <th><span class="maker">Age</span></th>
        <td>20</td>
      </tr>
      <tr>
        <th><span class="maker">Location</span></th>
        <td>Ishikawa Japan</td>
      </tr>
      <tr>
        <th><span class="maker">Job</span></th>
        <td>大学3年生</td>
      </tr>
      <tr>
        <th><span class="maker">Love</span></th>
        <td>プログラミング 自己分析</td>
      </tr>
      <tr>
        <th><span class="maker">Twitter</span></th>
        <td><a href="https://twitter.com/MyPoZi555">@mypozi555</a></td>
      </tr>
      <tr>
        <th><span class="maker">Github</span></th>
        <td><a href="https://github.com/MyPoZi">MyPoZi</a></td>
      </tr>
    </table>
    <br>
    <h3 style="color: snow">大学卒業後は、東京でWeb系の仕事に就きたいです!!</h3>
    <br>

  </div>
</template>

<script>
import MyImage from '@/components/atoms/MyImage'

export default {
  name: 'MyAboutBody',
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
    max-width: 750px;
    margin: 30px auto;
    background: #4db6ac;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.6));
  }

  .table {
    margin: 0 auto;
  }

  .maker {
    background: linear-gradient(transparent 75%, #ff9393 75%);

  }
</style>
