<template>
  <section>
    <header class="mui-bar mui-bar-nav bar-nav-header header-hidden" style="display: block;">
      <router-link to="/order" class="iconfont header_ico">&#xe64e;</router-link>
      <a class="header_title"><i class="iconfont">&#xe619;</i>
        <p>深圳市</p><i class="iconfont">&#xe822;</i></a>
      <a class="outside-send">外送须知</a>
    </header>
    <!--外卖菜品内容-->
    <section id="banWeChat">
      <div class="cate_Classification">
        <ul>
          <li v-for="(item,index) in classiflylist" @click="jump" :data-index='index' :class="[index==0 ? 'active':'']">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="cate_listmenu">
        <!--锅底-->
        <ul>
          <li v-for="item in base" :key="item.id">
            <div class="cate_listmenu_left">
              <img :src="item.picUrl"/>
            </div>
            <div class="cate_listmenu_right">
              <div class="promo_title">
                <p>{{item.name}}</p>
                <a>¥{{item.price}}.0一锅</a>
                <i class="iconfont" @click="shopCart" @click.prevent="ballAnimatie" :data-id="item._id">+</i>
                <i class="num" :data-id="item._id">{{item.num ? item.num : '0'}}</i>
                <i :class="[item.num ? 'iconfont del-show': 'iconfont del']" @click="delShop" :data-id="item._id">-</i>
              </div>
            </div>
            <div class="ball">
              <div class="ball-inner"></div>
            </div>
          </li>
        </ul>
        <!--特色菜-->
        <ul>
          <li v-for="item in features" :key="item.id">
            <div class="cate_listmenu_left">
              <img :src="item.picUrl"/>
            </div>
            <div class="cate_listmenu_right">
              <div class="promo_title">
                <p>{{item.name}}</p>
                <a>¥{{item.price}}.0一锅</a>
                <i class="iconfont" @click="shopCart" :data-id="item._id">+</i>
                <i class="num" :data-id="item._id">{{item.num ? item.num : '0'}}</i>
                <i :class="[item.num ? 'iconfont del-show': 'iconfont del']" @click="delShop" :data-id="item._id">-</i>
              </div>
            </div>
          </li>
        </ul>
        <!--荤菜-->
        <ul>
          <li v-for="item in meat" :key="item.id">
            <div class="cate_listmenu_left">
              <img :src="item.picUrl"/>
            </div>
            <div class="cate_listmenu_right">
              <div class="promo_title">
                <p>{{item.name}}</p>
                <a>¥{{item.price}}.0一锅</a>
                <i class="iconfont" @click="shopCart" :data-id="item._id">+</i>
                <i class="num" :data-id="item._id">{{item.num ? item.num : '0'}}</i>
                <i :class="[item.num ? 'iconfont del-show': 'iconfont del']" @click="delShop" :data-id="item._id">-</i>
              </div>
            </div>
          </li>
        </ul>
        <!--素菜-->
        <ul>
          <li v-for="item in vegetables" :key="item.id">
            <div class="cate_listmenu_left">
              <img :src="item.picUrl"/>
            </div>
            <div class="cate_listmenu_right">
              <div class="promo_title">
                <p>{{item.name}}</p>
                <a>¥{{item.price}}.0一锅</a>
                <i class="iconfont" @click="shopCart" :data-id="item._id">+</i>
                <i class="num" :data-id="item._id">{{item.num ? item.num : '0'}}</i>
                <i :class="[item.num ? 'iconfont del-show': 'iconfont del']" @click="delShop" :data-id="item._id">-</i>
              </div>
            </div>
          </li>
        </ul>
        <!--小吃-->
        <ul>
          <li v-for="item in snacks" :key="item.id">
            <div class="cate_listmenu_left">
              <img :src="item.picUrl"/>
            </div>
            <div class="cate_listmenu_right">
              <div class="promo_title">
                <p>{{item.name}}</p>
                <a>¥{{item.price}}.0一锅</a>
                <i class="iconfont" @click="shopCart" :data-id="item._id">+</i>
                <i class="num" :data-id="item._id">{{item.num ? item.num : '0'}}</i>
                <i :class="[item.num ? 'iconfont del-show': 'iconfont del']" @click="delShop" :data-id="item._id">-</i>
              </div>
            </div>
          </li>
        </ul>
        <!--小料-->
        <ul>
          <li v-for="item in drinks" :key="item.id">
            <div class="cate_listmenu_left">
              <img :src="item.picUrl"/>
            </div>
            <div class="cate_listmenu_right">
              <div class="promo_title">
                <p>{{item.name}}</p>
                <a>¥{{item.price}}.0一锅</a>
                <i class="iconfont" @click="shopCart" :data-id="item._id">+</i>
                <i class="num" :data-id="item._id">{{item.num ? item.num : '0'}}</i>
                <i :class="[item.num ? 'iconfont del-show': 'iconfont del']" @click="delShop" :data-id="item._id">-</i>
              </div>
            </div>
          </li>
        </ul>
        <!--超值套餐-->
        <ul>
          <li v-for="item in season" :key="item.id">
            <div class="cate_listmenu_left">
              <img :src="item.picUrl"/>
            </div>
            <div class="cate_listmenu_right">
              <div class="promo_title">
                <p>{{item.name}}</p>
                <a>¥{{item.price}}.0一锅</a>
                <i class="iconfont" @click="shopCart" :data-id="item._id">+</i>
                <i class="num" :data-id="item._id">{{item.num ? item.num : '0'}}</i>
                <i :class="[item.num ? 'iconfont del-show': 'iconfont del']" @click="delShop" :data-id="item._id">-</i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <footer>
      <div class="cart">
        <span class="icon-shopcar"><i class="footer_cart_ico iconfont">&#xe6b8;<p>0</p></i>¥<strong
          class="allMoney">0</strong></span>
      </div>
      <router-link class="footer_next" data-code="10086" description="提交外卖自取订单" :to="{name:'delivery'}">去结算
      </router-link>
    </footer>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        classifly: [],
        classiflylist: [],
        base: [],
        features: [],
        meat: [],
        vegetables: [],
        snacks: [],
        drinks: [],
        season: [],
        all: [],
        ballShow: false,
        count:0
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, true);
      let
        data, cate,
        shopCart = [],
        shopNum = jq('.footer_cart_ico p'),
        shopnum = 0,
        money = 0,
        allMoney = jq('.allMoney')

      this.$http({
        method: 'get',
        baseURL: 'http://10.36.139.179:3007',
        url: `/productcate`,
        withCredentials: true
      })
        .then(async (res) => {
          cate = await res.data.result
          this.classiflylist = cate
          for (let item of cate) {
            this.classifly.push(item._id)
          }
          this.$http({
            method: 'get',
            baseURL: 'http://10.36.139.179:3007',
            url: `/product`,
            withCredentials: true
          })
            .then(async (res) => {
              data = await res.data.result
              this.all = data
              if (this.$session.get('shopCart')) {
                shopCart = this.$session.get('shopCart')
                for (let item of shopCart) {
                  shopnum += item.num
                }
                shopNum.text(shopnum)
                for (let [index, item] of data.entries()) {
                  for (let tag of shopCart) {
                    if (item._id === tag.id) {
                      money += tag.num * item.price
                      data[index].num = tag.num
                    }
                  }
                }
                allMoney.text(money)
                this.$session.set('money', money)
              }
              for (let item of data) {
                if (item.cate_id === this.classifly[0]) {
                  this.base.push(item)
                }
              }
              for (let item of data) {
                if (item.cate_id === this.classifly[1]) {
                  this.features.push(item)
                }
              }
              for (let item of data) {
                if (item.cate_id === this.classifly[2]) {
                  this.meat.push(item)
                }
              }
              for (let item of data) {
                if (item.cate_id === this.classifly[3]) {
                  this.vegetables.push(item)
                }
              }
              for (let item of data) {
                if (item.cate_id === this.classifly[4]) {
                  this.snacks.push(item)
                }
              }
              for (let item of data) {
                if (item.cate_id === this.classifly[5]) {
                  this.drinks.push(item)
                }
              }
              for (let item of data) {
                if (item.cate_id === this.classifly[6]) {
                  this.season.push(item)
                }
              }

            })
            .catch((err) => {
              console.log(err);
            })
        })
        .catch((err) => {
          console.log(err);
        })

    },
    methods: {
      handleScroll() {
        let
          tag = jq('.cate_listmenu ul'),
          list = jq('.cate_Classification li'),
          scrollTop = jq('.cate_listmenu').scrollTop()

        if (scrollTop >= tag.eq(0).innerHeight()) {
          list.removeClass('active')
          list.eq(1).addClass('active')
        }
        else if (scrollTop < tag.eq(0).innerHeight()) {
          list.removeClass('active')
          list.eq(0).addClass('active')
        }

        if (scrollTop >= tag.eq(1).innerHeight() + tag.eq(0).innerHeight()) {
          list.removeClass('active')
          list.eq(2).addClass('active')
        }
        else if (scrollTop > tag.eq(0).innerHeight() && scrollTop < tag.eq(1).innerHeight() + tag.eq(0).innerHeight()) {
          list.removeClass('active')
          list.eq(1).addClass('active')
        }

        if (scrollTop >= tag.eq(2).innerHeight() + tag.eq(1).innerHeight() + tag.eq(0).innerHeight()) {
          list.removeClass('active')
          list.eq(3).addClass('active')
        }
        else if (scrollTop > tag.eq(1).innerHeight() + tag.eq(0).innerHeight() && scrollTop < tag.eq(2).innerHeight() + tag.eq(1).innerHeight() + tag.eq(0).innerHeight()) {
          list.removeClass('active')
          list.eq(2).addClass('active')
        }

        if (scrollTop >= tag.eq(3).innerHeight() + tag.eq(2).innerHeight() + tag.eq(1).innerHeight()
          + tag.eq(0).innerHeight()) {
          list.removeClass('active')
          list.eq(4).addClass('active')
        }
        else if (scrollTop > tag.eq(2).innerHeight() + tag.eq(1).innerHeight() + tag.eq(0).innerHeight() && scrollTop < tag.eq(3).innerHeight() + tag.eq(2).innerHeight() + tag.eq(1).innerHeight() + tag.eq(0).innerHeight()) {
          list.removeClass('active')
          list.eq(3).addClass('active')
        }

        if (scrollTop >= tag.eq(4).innerHeight() + tag.eq(3).innerHeight() + tag.eq(2).innerHeight() + tag.eq(1).innerHeight() + tag.eq(0).innerHeight()) {
          list.removeClass('active')
          list.eq(5).addClass('active')
        }
        else if (scrollTop > tag.eq(3).innerHeight() + tag.eq(2).innerHeight() + tag.eq(1).innerHeight() + tag.eq(0).innerHeight() && scrollTop < tag.eq(4).innerHeight() + tag.eq(3).innerHeight() + tag.eq(2).innerHeight() + tag.eq(1).innerHeight() + tag.eq(0).innerHeight()) {
          list.removeClass('active')
          list.eq(4).addClass('active')
        }

        if (scrollTop >= tag.eq(5).innerHeight() + tag.eq(4).innerHeight() + tag.eq(3).innerHeight() + tag.eq(2).innerHeight() + tag.eq(0).innerHeight() + tag.eq(1).innerHeight()) {
          list.removeClass('active')
          list.eq(6).addClass('active')
        }
        else if (scrollTop > tag.eq(4).innerHeight() + tag.eq(3).innerHeight() + tag.eq(2).innerHeight() + tag.eq(1).innerHeight() + tag.eq(0).innerHeight() && scrollTop < tag.eq(5).innerHeight() + tag.eq(4).innerHeight() + tag.eq(3).innerHeight() + tag.eq(2).innerHeight() + tag.eq(0).innerHeight()
        ) {
          list.removeClass('active')
          list.eq(5).addClass('active')
        }
      },
      shopCart(e) {
        let
          shopCart = [],
          tag = jq(e.target),
          father = tag.parent(),
          num = 0,
          shopNum = jq('.footer_cart_ico p'),
          shopnum = 0,
          money = 0,
          Index = 0,
          flag = false,
          allMoney = jq('.allMoney'),
          shopCount = father.children('.num'),
          delbtn = father.children('.del')
        delbtn.css('opacity', '1')
        if (this.$session.get('shopCart')) {
          shopCart = this.$session.get('shopCart')
          for (let [index, item] of shopCart.entries()) {
            if (item.id === tag.attr('data-id')) {
              Index = index
              /*shopCart[index].num++
              this.$session.set('shopCart', shopCart)*/
              flag = true
              break
            }
            /*else {
              num++
              shopCart.push({id: tag.attr('data-id'), num: num})
              this.$session.set('shopCart', shopCart)
              break
            }*/
          }
          if (flag) {
            shopCart[Index].num++
            this.$session.set('shopCart', shopCart)
          }
          else {
            num++
            shopCart.push({id: tag.attr('data-id'), num: num})
            this.$session.set('shopCart', shopCart)
          }
          for (let item of shopCart) {
            shopnum += item.num
            if (item.id === shopCount.attr('data-id')) {
              shopCount.text(item.num)
            }
          }
          shopNum.text(shopnum)
          for (let item of this.all) {
            for (let tag of shopCart) {
              if (item._id === tag.id) {
                money += tag.num * item.price
              }
            }
          }
          allMoney.text(money)
          this.$session.set('money', money)
        }
        else {
          num++
          shopCart.push({id: tag.attr('data-id'), num: num})
          shopNum.text(num)
          shopCount.text(num)
          for (let item of this.all) {
            if (item._id === tag.attr('data-id')) {
              money += num * item.price
              break
            }
          }
          allMoney.text(money)
          this.$session.set('shopCart', shopCart)
          this.$session.set('money', money)
        }

      },
      jump(e) {
        let
          ullist = jq('.cate_listmenu ul'),
          list = jq('.cate_Classification li'),
          tag = jq(e.target),
          listmenu = jq('.cate_listmenu'),
          index = (tag.attr('data-index'))

        index = parseInt(index)
        list.removeClass('active')
        list.eq(index).addClass('active')
        if (index > 0) {
          listmenu.scrollTop(getHei(ullist, index) + 200)
        }
        else {
          listmenu.scrollTop(0)
        }
      },
      ballAnimatie(e) {
        let
          tag = jq(e.target).parent().parent().parent(),
          ball = tag.children('.ball'),
          ballInner = ball.children('.ball-inner')
        ball.css('opacity', '1')
        // ball.css('display', 'block')
        ball.addClass('ballmove')
        ballInner.addClass('ball-innermove')
        setTimeout(() => {
          ball.css('opacity', '0')
          //ball.css('display', 'none')
          ball.removeClass('ballmove')
          ballInner.removeClass('ball-innermove')
        }, 500)

      },
      delShop(e) {
        let
          tag = jq(e.target),
          father = tag.parent(),
          shopCount = father.children('.num'),
          shopNum = jq('.footer_cart_ico p'),
          shop = [],
          num = 0,
          money = 0,
          allMoney = jq('.allMoney')
        if (this.$session.get('shopCart')) {
          shop = this.$session.get('shopCart')
          for (let [index, item] of shop.entries()) {
            if (item.id === tag.attr('data-id')) {
              if (item.num) {
                shop[index].num = item.num - 1
                shopCount.text(shop[index].num)
                this.$session.set('shopCart', shop)
              }
              else {
                tag.css('opacity', '0')
              }
            }
          }
          for (let item of shop) {
            num += item.num
          }
          for (let item of this.all) {
            for (let tag of shop) {
              if (item._id === tag.id) {
                money += tag.num * item.price
              }
            }
          }
          allMoney.text(money)
          this.$session.set('money', money)
          shopNum.text(num)
        }
        else if (shopCount.text() === '0') {
          tag.css('opacity', '0')
        }
      }
    }
  }

  function getHei(tag, index) {
    if (index == 1) {
      return tag.eq(index).innerHeight()
    }
    else {
      return tag.eq(index).innerHeight() + getHei(tag, index - 1)
    }
  }
</script>

<style scoped>
  /*头部*/

  header {

    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    top: 0;
    height: 44px;
    padding-right: 10px;
    padding-left: 10px;
    border-bottom: 1px solid #ECECEC;
    background: #fff;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 100;
  }

  header .header_ico {
    color: #d43d3d;
    font-size: 18px;
    position: absolute;
    top: 0;
    left: .5rem;
    z-index: 20;
    padding-top: 13px;
    padding-bottom: 13px;

  }

  header .header_title {
    font-size: .18rem;
    color: #666666;
    font-weight: 500;
    line-height: 44px;
    position: absolute;
    right: 40px;
    left: 40px;
    display: inline-block;
    overflow: hidden;
    width: auto;
    margin: 0;
    text-overflow: ellipsis;
  }

  header .header_title p {
    display: inline-block;
    margin: 0 3px;
  }

  header .outside-send {
    float: right;
    line-height: 44px;
    font-size: .18rem;
    color: #d43d3d;
  }

  /*内容*/
  #banWeChat {
    position: absolute;
    z-index: 1;
    top: 0px;
    bottom: 0px;
    width: 100%;
    margin-top: 45px;
    overflow-y: hidden;
    display: flex;
  }

  .cate_Classification {
    float: left;
    width: 20%;
    height: 100%;
    background: #555555;
    font-size: .16rem;
    overflow-y: auto;
  }

  .cate_Classification ul {
    overflow-y: auto;
  }

  .cate_Classification ul li {
    width: 100%;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    color: white;
  }

  .cate_Classification ul li.active {
    background: rgb(211, 77, 77);
  }

  .cate_Classification ul li a {
    color: white;
  }

  .cate_listmenu {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    padding-bottom: .5rem;
  }

  .cate_listmenu ul {
  }

  .cate_listmenu ul li {
    height: 1.4rem;
    display: flex;
    position: relative;
  }

  .cate_listmenu_left {
    flex: 6;
    height: 1.4rem;
  }

  .cate_listmenu_left img {
    width: 100%;
    height: 100%;
  }

  .cate_listmenu_right {
    flex: 5;
  }

  .cate_listmenu_right .promo_title {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .promo_title p {
    font-size: .2rem;
    font-weight: bold;
    color: #333;
    margin: 10%;
    margin-bottom: 5px;
  }

  .promo_title a {
    font-size: .16rem;
    color: #666;
    margin-left: 10%;
  }

  .promo_title i {
    position: absolute;
    width: .2rem;
    height: .2rem;
    text-align: center;
    font: .2rem/.18rem "微软雅黑";
    text-align: center;
    color: white;
    background: rgb(211, 77, 77);
    border-radius: 50%;
    bottom: .2rem;
    right: .2rem;
    z-index: 101;
  }

  /*页脚*/
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

  .footer_cart_ico {
    position: relative;
    font-size: .2rem;
    margin-right: 10px;
  }

  .footer_cart_ico p {
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 17px;
    border-radius: 50%;
    color: #fff;
    background-color: #dd524d;
    left: 12px;
    top: -10px;
    text-align: center;

  }

  /*.cate_listmenu ul li:hover .ball {

  }

  .cate_listmenu ul li:hover .ball-inner {
    transform: translateX(-2.5rem);
  }*/
  .ballmove {
    transform: translateY(5rem);
  }

  .ball-innermove {
    transform: translateX(-2.5rem);
  }

  .ball {
    position: absolute;
    bottom: .06rem;
    right: .2rem;
    z-index: 99;
    transition: transform .5s cubic-bezier(.44, -0.81, .83, .67);
    opacity: 0;
    /*display: none;*/
  }

  .ball-inner {
    width: .2rem;
    height: .2rem;
    background-color: #dd524d;
    border-radius: 100%;
    transition: transform .5s linear;
  }

  footer .cart span {
    padding-left: 15px;
  }

  footer .footer_next {
    width: 30%;
    height: 55px;
    line-height: 55px;
    border: none;
    float: right;
    border-radius: 0;
    color: #fff;
    background: #d43d3d;
    margin: 0;
    padding: 0;
    font-size: .18rem;
  }

  .promo_title .del {
    position: absolute;
    right: 1rem;
    opacity: 0;
  }

  .promo_title .num {
    right: .6rem;
    background-color: white;
    color: #3a3a3a;
  }

  .promo_title .del-show {
    position: absolute;
    right: 1rem;
    opacity: 1;
  }
</style>
