<template>
  <div>
    <div class="card-section">
      <div class="card">
        <a class="card-link" href="https://michiakr.com/">
          <img src="../../assets/michiakr.png"/>
          <my-card title="ミチアカリ"
                   description='書籍の学習ロードマップ共有サイトです。技術書を選ぶ時にどれを選べばよいかわからないなどの問題を解決するために作りました。デザインはフラットデザインを意識してシンプルで見やすいデザインに仕上げました。またSSRを使い、レスポンスを早くするなど工夫しました。'
                   useTech1="Laravel"
                   useTech2="Nuxt.js"
                   date="2019/4/12"
                   class="card-content">
          </my-card>
        </a>
      </div>
      <div class="card">
        <a class="card-link" href="https://comment-maker.site/">
          <img src="../../assets/comment-maker.png"/>
          <my-card title="単行本のコメントメーカー"
                   description='LaravelとVue.jsを用いたSPAです。ユーザーが選んだ画像とコメントで漫画の単行本によくある作者コメントのようなものを作成できます。 多くの人が面白そうと使ってくれましたが、価値のあるコンテンツを生むことができず、その後継続して使ってくれる人はいない経験ができました。'
                   useTech1="Laravel"
                   useTech2="Vue.js"
                   date="2019/3/28"
                   class="card-content">
          </my-card>
        </a>
      </div>
      <div class="card">
        <a class="card-link" href="https://letter-memory.site/">
          <img src="../../assets/letter-memory.png"/>
          <my-card title="LetterMemory"
                   description='サービスコンセプトは"日頃のメッセージをWebサイトに込めて"です。普段とは違ったメッセージを贈れるサービスが欲しいと思い、制作しました。実際にサービスとして提供するということができ、学ぶことが非常に多い経験でした。'
                   useTech1="Laravel"
                   useTech2="Heroku"
                   date="2018/12/17"
                   class="card-content">
          </my-card>
        </a>
      </div>
      <div class="card">
        <a class="card-link" href="https://github.com/MyPoZi/Nya-nAPI">
          <img src="../../assets/nya-napi.jpg"/>
          <my-card title="Nya-nAPI"
                   description="Go言語で何か制作してみたいと思い、URLのパラメータによって返すJSONを変化させるAPIを作りました。URLパラメータのvalueを100にすると【にゃーん】という文字列を100個生成します。"
                   useTech1="Golang"
                   useTech2="Json"
                   date="2018/11/23"
                   class="card-content">
          </my-card>
        </a>
      </div>
      <div class="card">
        <a class="card-link" href="">
          <img src="../../assets/myprofile3.jpg"/>
          <my-card title="MyProfile3"
                   description="ホームページ3作品目です。Vue.jsを用いてSPAを書きました。AtomicDesignを用いて、コンポーネント同士が疎結合になるように心掛けました。またアニメーションも少しつけ、出来る限り飽きない仕様にしました。"
                   useTech1="Vue.js"
                   useTech2="CSS"
                   date="2018/11/11"
                   class="card-content">
          </my-card>
        </a>
      </div>
      <div class="card">
        <a class="card-link" href="https://github.com/MyPoZi/git-push-hackathon">
          <img src="../../assets/gistsapp.jpg"/>
          <my-card title="Gistsアプリ"
                   description="git-push-hackathonで制作したWEBアプリです。GithubのOAuth認証、GistsAPIを用いてGistsの一覧の表示、Gists投稿などができます。ハッカソンは参加者方のレベルの高さに驚かされました。"
                   useTech1="Laravel"
                   useTech2="Scss"
                   date="2018/10/23"
                   class="card-content">
          </my-card>
        </a>
      </div>
      <div class="card">
        <a class="card-link" href="https://github.com/MyPoZi/brickset_app">
          <img src="../../assets/bricksetapp.jpg"/>
          <my-card title="BrickSetアプリ"
                   description="本を見ながら、フレームワークを初めて使って作ったWebアプリです。本に載っている機能だけでなく、ページング機能、アカウント登録機能、ログイン、ログアウト機能、一般ユーザーの場合、編集や削除を行わせないための処理などを追加しました。"
                   useTech1="Django"
                   useTech2="Python"
                   date="2018/10/1" class="card-content">

          </my-card>
        </a>
      </div>
      <div class="card">
        <a class="card-link" href="https://github.com/MyPoZi/ProgramLanguageGraph">
          <img src="../../assets/programlanguagegraph.jpg"/>
          <my-card title="ProgramLanguageGraph"
                   description="Githubのリポジトリ数を毎日取得し、データベースに格納し、グラフを使って視覚化します。Dockerを使っているので、低リソースですべて同じ環境を提供することが出来ます。"
                   useTech1="Python"
                   useTech2="Docker"
                   date="2018/9/19(作成途中)"
                   class="card-content">
          </my-card>
        </a>
      </div>
      <div class="card">
        <a class="card-link" href="http://mypozi.com/website2/index.html">
          <img src="../../assets/myprofile2.jpg"/>
          <my-card title="MyProfile2"
                   description="ホームページ2作品目です。シングルページレイアウトのホームページが作りたいと思い作っていましたが、途中で動きをつけたいという考えになり、スクロールホームページを作りました。"
                   useTech1="HTML"
                   useTech2="JavaScript"
                   date="2018/9/11"
                   class="card-content">
          </my-card>
        </a>
      </div>
      <div class="card">
        <a class="card-link" href="https://github.com/MyPoZi/Temperature">
          <img src="../../assets/gettemperature.jpg"/>
          <my-card title="GetTemperature"
                   description="インターンシップでIOTについて学びました。初めてRubyとIoTを触り、非常に楽しかった思い出です。ソースの公開については許可を頂いています。"
                   useTech1="Ruby"
                   useTech2="IoT"
                   date="2018/9/5"
                   class="card-content">
          </my-card>
        </a>
      </div>
      <div class="card">
        <a class="card-link" href="https://mypozi555.firebaseapp.com/">
          <img src="../../assets/myprofile1.jpg"/>
          <my-card title="MyProfile1"
                   description="ホームページ1作品目です。HTMLとCSSは知っていたのですが、書ける自信がなくて、書いてみた作品です。イキりまくってるホームページです・・・。"
                   useTech1="HTML"
                   useTech2="CSS"
                   date="2018/8/4"
                   class="card-content">
          </my-card>
        </a>
      </div>
      <div class="card">
        <a class="card-link" href="https://github.com/MyPoZi/omikuji-app">
          <img src="../../assets/omikuji.jpg"/>
          <my-card title="おみくじアプリ"
                   description="初めてKotlinを触り、初めてスマートフォンアプリを制作しました。インターネット上におみくじアプリはサンプルとして沢山ありますが、見ずに制作することができました。"
                   useTech1="Kotlin"
                   useTech2="Android"
                   date="2018/6/1"
                   class="card-content">
          </my-card>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import MyCard from '@/components/molecules/MyCard'

export default {
  name: 'MyWorksSection',
  components: {
    MyCard
  }
}
</script>

<style scoped>
  * {
    transition: all 0.40s ease 0s;
    -webkit-overflow-scrolling: touch;
  }

  img {
    width: 280px;
    height: 168px;
  }

  .card-section {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    width: 280px;
    min-height: 380px;
    margin: 20px auto;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px #ccc;
  }

  .card:hover {
    opacity: 0.6;
    transform: scale(1.03, 1.03);
  }

  .card-content {
    padding: 20px;
  }

  .card-link {
    text-decoration: none;
    color: black;
  }

  .card-link a:hover {
    color: #0090aa;
  }

</style>
