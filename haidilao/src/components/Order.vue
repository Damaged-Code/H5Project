<template>
  <section>
    <div class="header">
      <router-link to="/">
        <div class="header-left">
          <i class="iconfont">&#xe64e;</i>
          <i class="iconfont">&#xe619;</i>
          <span>深圳市</span>
          <i class="iconfont">&#xe822;</i>
        </div>
      </router-link>

      <div class="header-right">
        <input type="text" placeholder="请输入门店名称">
        <i class="iconfont">&#xe617;</i>
      </div>
    </div>
    <div class="shop-list">
      <ul>
        <li v-for="item in shop" :key="item.id">
          <router-link :to="{name:'shopdetail',params:{id:item._id}}">
            <div class="shop-left">
              <img :src="item.picUrl" alt="">
            </div>
            <div class="shop-right">
              <div class="shop-right-top">
                <h5>{{item.name}}</h5>
                <span>早晨9:00-次日凌晨7:00</span>
              </div>
              <div class="shop-right-bottom">
                <p>{{item.address}}</p>
                <div class="shop-list-order">
                  <em>4.10km</em>
                  <span>订餐</span>
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <footer is="footerNav"></footer>
  </section>

</template>

<script>
  import footerNav from './Footer'

  export default {
    data() {
      return {
        shop: [],
      }
    },
    created() {

    },
    mounted() {

      this.$http({
        method: 'get',
        baseURL: 'http://localhost:3007',
        timeout: 3000,
        url: `/shop`,
        withCredentials: true
      })
        .then(async (res) => {
          this.shop = await res.data.result
        })
        .catch((err) => {
        })

    },
    components: {
      footerNav,

    }
  }
</script>

<style scoped>
  body {
    font-size: 0.16rem;
    font-family: "苹方", "思源黑体", "黑体", "微软雅黑";
    background: #f9f9f9;
    color: #333333;
    overflow-x: hidden;
  }

  .header {
    width: 100%;
    height: 0.44rem;
    background: #f9f9f9;
    border-bottom: 0.01rem solid #ECECEC;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header i {
    display: inline-block;
  }

  .header .header-left {
    margin-left: 0.1rem;
  }

  .header .header-right {
    margin-right: 0.1rem;
    position: relative;
  }

  .header .header-right input {
    border: 0;
    outline: none;
    background: #f2f2f2;
    border-radius: 0.04rem;
    line-height: 0.28rem;
    padding-left: 0.3rem;
    box-sizing: border-box;
    font-size: 0.14rem;
    background: #f2f2f2;
  }

  .header .header-right i {
    position: absolute;
    top: 0.04rem;
    left: 0.04rem;
    font-size: 0.18rem;
  }

  /*列表*/
  .shop-list {
    width: 100%;
    margin-top: 0.54rem;
    margin-bottom: 0.5rem;
  }

  .shop-list ul {
    width: 100%;
    background: #f9f9f9;
  }

  .shop-list ul li {
    margin: 0.2rem 0;
    width: 100%;
    height: 1.1rem;
    display: flex;
    background: #fff;
  }

  .shop-list ul li a {
    display: flex;
  }

  .shop-list ul li .shop-left {
    width: 30%;
    height: 0.9rem;
    padding: 0.05rem;
  }

  .shop-list ul li .shop-left img {
    border-radius: 0.05rem;
    width: 100%;
    height: 100%;
  }

  .shop-list ul li .shop-right {
    width: 65%;
    padding: 0.05rem;
  }

  .shop-list .shop-right-top {
    display: flex;
    margin-right: 0.15rem;
    justify-content: space-between;
  }

  .shop-list .shop-right-top h5 {
    font-weight: 500;
    font-size: 0.16rem;
  }

  .shop-list .shop-right-top span {
    font-weight: 500;
    font-size: 0.12rem;
  }

  .shop-list .shop-right-bottom {
    display: flex;
    justify-content: space-around;
  }

  .shop-list .shop-right-bottom p {
    width: 1.32rem;
    padding-top: 0.06rem;
    font-size: 0.13rem;
    clear: both;
    line-height: 0.16rem;
    color: #999999;
  }

  .shop-list .shop-right-bottom .shop-list-order {
    display: flex;
    flex-direction: column;
  }

  .shop-list .shop-list-order em {
    font-style: normal;
    font-size: 0.13rem;
    color: #999;
    position: relative;
    left: 0;
    margin: 0.1rem 0;
  }

  .shop-list .shop-list-order span {
    display: block;
    width: 0.7rem;
    height: 0.25rem;
    background: #df4242;
    margin-top: 0.05rem;
    text-align: center;
    line-height: 0.25rem;
    color: #fff;
    border-radius: 0.04rem;
  }

  /*nav*/
  .nav {
    width: 100%;
    height: 0.49rem;
    border-top: 0.01rem solid #d9d9d9;
    position: fixed;
    background: #fff;
    bottom: 0;
  }

  .nav ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav ul li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333333
  }

  .nav ul li a i {
    font-size: 0.2rem;
  }
</style>
