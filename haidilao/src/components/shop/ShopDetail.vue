<template>
  <section>
    <header>
      <router-link class="back" to="/order">
        <i class="iconfont"> &#xe64e;</i>
      </router-link>

      <ul>
        <li>
          <img :src="shopDeli.picUrl" alt="">
        </li>
      </ul>
    </header>
    <section>
      <div id="IntroduceFont">
        <p>{{shopDeli.name}}</p>
        <div id="IntroduceStar">

          <span>
						<el-rate
              v-model="value5"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
					</span>
        </div>
        <div id="address">
          <span> {{shopDeli.address}}</span>
        </div>
      </div>
    </section>
    <footer>
      <div id="footer1">
        <ul>
          <li>
            <router-link :to="{name:'orderseat',params:{id:shopId}}">
              <i class="iconfont">&#xe746;</i>
              <p>排号</p>
            </router-link>

          </li>
          <li>
            <router-link to="/menu">
              <i class="iconfont">&#xe618;</i>
              <p>外卖</p>
            </router-link>
          </li>
          <li>
            <router-link to="/menu">
              <i class="iconfont">&#xe609;</i>
              <p>订餐</p>
            </router-link>
          </li>
          <li>
            <router-link to="/menu">
              <i class="iconfont">&#xe626;</i>
              <p>菜品</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div id="textFont">
        <p class="f-thide shop-des">
          {{shopDeli.description}}
        </p>

      </div>
      <div id="detail">
        <p>点击展开</p>
      </div>
      <div id="roadWay">
			    	<span>
			    		<i class="iconfont">&#xe61a;</i>
			    		tel:<a v-for="item in shopDeli.tel">{{item}}&nbsp&nbsp&nbsp</a>

			    	</span>
        <span>
			    		<i class="iconfont">&#xe618;</i>
			    		<em>{{shopDeli.path}}</em>
			    	</span>
      </div>

      <div id="footer2">
        <i class="iconfont"> &#xe626;</i>
        <span>写评论</span>
      </div>
    </footer>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        shopDeli: [],
        shopId: 0,
        value5: 3.7
      }
    },
    mounted() {
      let
        id = 0
      id = this.$route.params.id
      this.$session.set('shop_id', id)
      this.shopId = this.$route.params.id
      this.$http({
        method: 'post',
        baseURL: 'http://10.36.139.179:3007',
        timeout: 3000,
        url: `/shop`,
        params: {id: id},
        withCredentials: true
      })
        .then((res) => {
          // console.log(res);
          this.shopDeli = res.data.result[0]
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
</script>

<style scoped>
  body {
    background: #f9f9f9;
  }

  header {
    position: relative;
    height: 2rem;
    width: 100%;

  }

  header ul {
    height: 100%;
  }

  header ul li {
    height: 100%;
  }

  header img {
    width: 100%;
    height: 100%;
  }

  .back {
    position: absolute;
    left: .1rem;
    top: .1rem;
    color: whitesmoke;

  }

  .iconfont {
    font-size: .3rem;

  }

  section {
    height: 1.32rem;
    border-bottom: 1px solid #ccc;
    width: 100%;
    margin-bottom: 0.12rem;

  }

  section #IntroduceFont {
    height: 100%;
    width: 100%;

  }

  #IntroduceFont p {
    margin-top: 0.16rem;
    width: 100%;
    text-align: center;
    font-size: 0.16rem;
    /*justify-content: center;*/
    /*letter-spacing: 0.01rem;*/
  }

  /*section img{
			margin-top: 0.18rem;
			justify-content: center;
		}*/
  #IntroduceStar {
    height: 0.2rem;
    width: 100%;
    /*background: #AFEEEE;*/
    margin: 0 auto;

  }

  #IntroduceStar {
    margin: 0.12rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #IntroduceStar span {
    font-size: 0.12rem;
    color: #ffce50;
    line-height: 0.2rem;
    padding-left: 0.02rem;

  }

  #address {
    height: 0.4rem;
    width: 3.0rem;
    margin: 0.01rem;
    margin: 0 auto;
  }

  #address img {
    margin-left: 0.1rem;
    display: block;
    height: 0.3rem;
    margin-top: 0;
    float: left;
    margin: 0 auto;
    margin-right: 0.1rem;

  }

  #address span {
    /*display: block;*/
    height: 0.3rem;
    width: 3rem;
    line-height: 0.3rem;
    font-weight: 600;
    text-align: center;
    margin: 0 auto;
    font-size: 0.12rem;
  }

  footer {
    /*margin-top: 0.1rem;*/
    /*height: 1.8rem;*/
    width: 100%;
    height: auto;
  }

  #footer1 {
    width: 90%;
    margin: 0 auto;
    height: 0.8rem;
    /*background: #CCCCCC;*/
  }

  #footer1 ul {
    height: 0.7rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;

  }

  #footer1 ul li {
    margin-top: 0.1rem;
    flex: 1;
    height: 0.6rem;
    width: 25%;
    font-size: .12rem;

  }

  #footer1 ul li a {
    /*margin-top: 0.1rem;*/
    color: #ccc;
    /*height: 0.6rem;*/
  }

  #footer1 ul li a i {
    font-size: 0.2rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    color: red;
    padding: 0.1rem;
  }

  #footer1 ul li a p {
    margin-top: 0.2rem;
  }

  #textFont {
    height: 0.5rem;
    margin-top: 0.1rem;
    width: 100%;
    /*background: #ccc;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #textFont p {
    /*height: 0.8rem;*/
    width: 80%;
    height: 0.6rem;
    /*background: red;*/
    /*padding-left: 0.5rem;
			padding-right: 0.5rem;*/
    margin: 0 auto;
    overflow: hidden;
    line-height: 0.2rem;
    display: block;
    font-size: 0.1rem;

  }

  #footer2 {
    height: 0.44rem;
    width: 100%;
    background: #D43D3D;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #detail {
    height: 0.5rem;
    width: 100%;
    /*background: orangered;*/
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    overflow: hidden;

  }

  #footer2 i {
    font-size: 0.2rem;
    color: white;

  }

  #footer2 span {
    color: #FFFFFF;
  }

  #roadWay {
    color: white;
    height: 0.88rem;
    width: 100%;
    margin-top: 0.1rem;
    /*background: aquamarine;*/
    font-size: 0.12rem;
    text-align: left;
  }

  #roadWay span {
    padding-top: 0.1rem;
    margin-left: 0.2rem;
    display: block;
    color: red;
    justify-content: center;
    align-items: center;
    line-height: 0.12rem;
  }

  #roadWay span i {
    font-size: 0.2rem;
    color: #CCCCCC;
  }

  #roadWay span a {
    color: red;
  }

  #roadWay span em {
    font-style: normal;
    color: #000000;
  }

  .shop-des {
    max-width: 80%;
  }
</style>
