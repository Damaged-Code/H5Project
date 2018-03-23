<template>
  <section class="head-body-main">
    <section class="head-body clearfix">
      <section class="head-nav-switch">
        <ul class="nav-swi-list clearfix">
          <li class="boys cure">
            <h5><router-link to="/">男生</router-link></h5>
            <h5><router-link to="/">BOYS</router-link></h5>
          </li>
          <li class="girls">
            <h5><router-link to="/page/yohoGirls">女生</router-link></h5>
            <h5><router-link to="/page/yohoGirls">GIRLS</router-link></h5>
          </li>
          <li class="kids">
            <h5><router-link to="/page/yohoKids">潮童</router-link></h5>
            <h5><router-link to="/page/yohoKids">KIDS</router-link></h5>
          </li>
          <li class="lief-sty">
            <h5><router-link to="/page/yohoLifeSty">创意生活</router-link></h5>
            <h5><router-link to="/page/yohoLifeSty">LIFE STYLE</router-link></h5>
          </li>
        </ul>
      </section>
      <section class="head-logo">
      </section>
      <section class="head-search">
        <section class="search-input">
          <form class="search-form" action="">
            <input type="text" placeholder="i.t限时三折起">
            <a class="search-btn" href="javascript:void(0)"></a>
          </form>
          <section class="hot-words">
            <ul>
              <li><a href="">袜子男</a></li>
              <li><a href="">手机壳</a></li>
              <li><a href="">任天堂</a></li>
              <li><a href="">塞尔达</a></li>
              <li><a href="">GTA5</a></li>
            </ul>
          </section>
        </section>
        <section class="go-cart">
          <router-link to="/page/shopCart">
            <i class="iconfont">&#xe650;</i>
          </router-link>
          <div class="mini-cart-wrapper"><div class="empty-cart"><h3>您的购物车暂无商品</h3></div></div>
        </section>
      </section>
    </section>
    <section is="headerLink"></section>
  </section>
</template>

<script>
  import _$         from 'jquery'
  import headerLink from './headerLink'
	export default {

    mounted:function () {
      let _this = this
      _$(function () {
        let logoUrl = _$('.head-logo');
        (function am(){
          logoUrl.css({
            opacity: 1,
            'background-image': 'url("//s1.ax2x.com/2018/02/01/hB69O.png")',
          })
          logoUrl.animate({
            opacity: 1,
          },1000*20,function () {logoUrl.css({
            'background-image': 'url("//s1.ax2x.com/2018/02/01/hB69O.png")',
          })
          }).animate({
            opacity: 0,
          },1000*2,function () {
            logoUrl.css({
              opacity: 1,
              'background-image': 'url("//s1.ax2x.com/2018/02/03/huY4A.png")',
            })
          }).animate({
            opacity: 1,
          },1000*10).animate({opacity:0,},1000*2,am)
        }())
      });
      _$(function () {
        let go_cart = _$('.go-cart'),
            mini_cart_wrapper = _$('.mini-cart-wrapper'),
            user = _this.$store.getters.userInfo.user_Info
        go_cart.hover(function () {
          if(user){
            mini_cart_wrapper.css('display','block')
          }
        },function () {
          mini_cart_wrapper.css('display','none')
        })
      })
    },
    components:{
      headerLink
    },
    methods:{
    }
	}
</script>

<style lang="scss" scoped>
  $default_color: #000;
  $test_color: #8e8e8e;
  $wechat_color: #86bf4a;
  $warning_color: #d71d32;
  $code_bg: #f4f4f4;
  .head-body-main{
    width: 100%;
    height: 130.5px;
  }
  .head-body{
    position: relative;
    height: 90px;
    .head-logo{
      position: absolute;
      left: 42%;
      width: 182px;
      height: 53px;
      margin-top: 22px;
      perspective: 1200px;
      background-image: url("https://s1.ax2x.com/2018/02/01/hB69O.png");
      background-repeat: no-repeat;
      background-position: center;
    }
    .head-nav-switch{
      display: inline-block;
      vertical-align: top;
      padding-top: 45px;
      float: left;
      li{
        float: left;
        padding: 8px 22px 5px;
        text-align: center;
      }
      .cure{
        a{
          color: #fff;
          font-size: 16px;
          line-height: 14px;
        }
        background-color: #3a3a3a;
      }
    }
    .head-search{
      float: right;
      width: 378px;
      padding-right: 18px;
      margin-top: 40px;
      .search-input{
        form {
          width: 320px;
          height: 28px;
          box-sizing: border-box;
          display: inline-block;
          background-color: #3a3a3a;
          border: 1px solid #3a3a3a;
          overflow: hidden;
          input {
            width: 240px;
            height: 100%;
            border: none;
            background: #fff;
            box-sizing: border-box;
            padding-left: 10px;
            outline: none;
            font-size: 12px;
          }
          .search-btn {
            background: url("https://s1.ax2x.com/2018/02/01/hBxXi.png") no-repeat 50%;
            width: 78px;
            height: 28px;
            float: right;
            border: none;
            cursor: pointer;
          }
        }
        .hot-words{
          ul{
            width: 320px;
            height: 16px;
            box-sizing: border-box;
            overflow: hidden;
            display: inline-block;
            font-size: 12px;
            li{
              float: left;
              a{
                display: inline-block;
                font-size: 12px;
                color: #b0b0b0;
                margin-right: 18px;
                line-height: 16px;
              }
            }
          }

        }
      }
      .go-cart{
        width: 30px;
        height: 30px;
        cursor: pointer;
        position: absolute;
        right: 0;
        bottom: 17px;
        a{
          i{
            font-size: 26px;
            color: #3a3a3a;
          }
        }
        .mini-cart-wrapper {
          position: absolute;
          top: 30px;
          right: -14px;
          width: 378px;
          height: 496px;
          z-index: 1000;
          background: #f8f8f8;
          display: none;
          .empty-cart {
            padding: 280px 0 200px;
            text-align: center;
            background: url(../../../assets/logo.png) no-repeat 106px 132px;
          }
        }
      }
    }
  }
  .hide{
    display: none;
  }
</style>
