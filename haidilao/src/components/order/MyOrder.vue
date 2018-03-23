<template>
  <section>
    <div id="head">
      <router-link to="/">
        <i class="iconfont">&#xe64e;</i>
      </router-link>

      <div id="order">
        <span>我的订单</span>
      </div>
    </div>
    <header>

      <ul>
        <li><a href="#" class="active">订单</a></li>
        <li><a href="#">排号</a></li>
      </ul>
    </header>
    <section class="menu" v-show="show">
      <ul v-for="item in product" :key="item.id">
        <li>
          <span>菜&nbsp;名:</span><i class="f-thide">{{item.name}}</i>
        </li>
        <li>
          <span>数&nbsp;量:</span><i>{{item.num}}</i>

        </li>
        <li><span>价&nbsp;格:¥</span><i>{{item.price}}.00</i></li>
      </ul>
    </section>
    <footer>
      <div class="cart">
        <span class="icon-shopcar">需支付¥<strong class="allMoney">0</strong></span>
      </div>
      <button class="footer_next" data-code="10086" @click="SubmitOrders" description="提交外卖自取订单" value="下一步">提交订单
      </button>
    </footer>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        product: [],
        show: false
      }
    },
    mounted() {
      let
        shopCart = [],
        allMoney = jq('.allMoney'),
        data = [],
        order = [],
        datas = [],
        money = 0
      if (this.$session.get('shopCart')) {
        shopCart = this.$session.get('shopCart')
        for (let item of shopCart) {
          this.$http({
            method: 'post',
            baseURL: 'http://10.36.139.179:3007',
            url: `/product`,
            withCredentials: true,
            params: {id: item.id}
          })
            .then(async (res) => {
              data.push(await res.data.result[0])
              if (data.length === shopCart.length) {
                for (let tag of shopCart) {
                  for (let [index, key] of data.entries()) {
                    if (key._id === tag.id) {
                      data[index].num = tag.num
                    }
                  }
                }
              }
              this.product = data
              this.show = true
            })
            .catch((err) => {
              console.log(err);
            })
        }
        allMoney.text(this.$session.get('money'))
      }
      else {
        this.show = false
      }
      /*else {
        this.$http({
          method: 'get',
          baseURL: 'http://10.36.139.179:3007',
          url: `/order`,
          withCredentials: true,
        })
          .then((res) => {
            order = res.data.result
            for (let item of order) {
              money += item.money
              for (let tag of item.products) {
                this.$http({
                  method: 'post',
                  baseURL: 'http://10.36.139.179:3007',
                  url: `/product`,
                  withCredentials: true,
                  params: {id: tag.id}
                })
                  .then((res) => {
                    datas = res.data.result
                    datas[0].num = tag.num
                    this.product.push(datas[0])
                    if (this.product.length == item.products.length) {
                      this.show = true
                    }

                  })
                  .catch((err) => {
                    console.log(err);
                  })
              }
            }
            allMoney.text(money)
          })
          .catch((err) => {
            console.log(err);
          })
      }*/
    },
    methods: {
      SubmitOrders() {
        if (this.$session.get('shopCart') && this.$session.get('username')) {
          let
            address, desc, money, peopleNum, sex, shopCart, shop_id, tel, username,
            time = new Date().toLocaleDateString(), info
          address = this.$session.get('address')
          desc = this.$session.get('desc')
          money = this.$session.get('money')
          peopleNum = this.$session.get('peopleNum')
          sex = this.$session.get('sex')
          shopCart = this.$session.get('shopCart')
          shop_id = this.$session.get('shop_id')
          tel = this.$session.get('tel')
          username = this.$session.get('username')
          info = {
            shop_id: shop_id,
            name: username,
            tel: tel,
            address: address,
            products: shopCart,
            desciption: desc,
            add_time: time,
            peopleNum: peopleNum,
            money: money,
            sex: sex
          }
          this.$http({
            method: 'post',
            baseURL: 'http://10.36.139.179:3007/order',
            params: {info: info},
            withCredentials: true
          })
            .then((res) => {
              if (res.data.result) {
                this.$session.clear()
                this.router.push('/')
              }
            })
            .catch((err) => {
              console.log(err);
            })
        }
      }
    }
  }
</script>

<style scoped>

  #head {
    height: 0.44rem;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
  }

  #head i {
    margin-left: 0.1rem;
    font-size: 0.2rem;
    color: red;
    width: 0.2rem;
  }

  #head div {
    width: 100%;
    /*background: green;*/
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
  }

  header {
    height: 0.44rem;
    width: 100%;
    /*background: burlywood;*/
    margin-top: 0.1rem;

  }

  header ul {
    height: 0.44rem;
    width: 98%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*background: royalblue;*/

  }

  header ul li {
    height: 0.44rem;
    width: 50%;
    border-radius: 0.05rem;
    /*border: 1px solid #ccc;*/

  }

  header ul li:nth-child(1) a {
    color: #000000;
    text-align: center;
    height: 100%;
    width: 100%;
    line-height: 0.44rem;
    display: block;
    border-radius: 0.05rem 0 0 0.05rem;
  }

  header ul li:nth-child(2) a {
    color: #000000;
    text-align: center;
    height: 100%;
    width: 100%;
    line-height: 0.44rem;
    display: block;
    border-radius: 0 0.05rem 0.05rem 0;
  }

  header ul li a:hover {
    background: #d63c3e;
    color: white;

  }

  header ul li a.active {
    background: #d63c3e;
    color: white;
  }

  section {
    width: 100%;

  }

  .menu ul {
    width: 90%;
    margin: 0 auto;
    margin-top: 0.1rem;
    display: flex;

  }

  .menu ul li {
    height: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    color: #333333;
    text-align: left;
  }

  .menu ul li span {
    font-size: .14rem;
    color: #000000;
  }

  .menu ul li i {
    font-size: .14rem;
    max-width: 50%;
    color: #d63c3e;
  }

  footer {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    z-index: 33;
  }

  footer .cart {
    width: 70%;
    height: 55px;
    line-height: 50px;
    background: #272727;
    float: left;
    font-size: .14rem;
    color: #fff;
  }

  footer .cart span {
    padding-left: 15px;
  }

  footer .cart span strong {
    margin-left: 5px;
    font-size: .18rem;
  }

  footer .footer_next {
    width: 30%;
    height: 55px;
    border: none;
    float: right;
    border-radius: 0;
    color: #fff;
    background: #d43d3d;
    margin: 0;
    padding: 0;
    font-size: .18rem;
  }
</style>
