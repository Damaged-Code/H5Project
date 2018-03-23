<template>
  <div class="simple-header">
    <div class="header-inner clearfix">
      <h2 class="logo">
        <router-link to="/">
          <img src="//static.yohobuy.com/newheader/img/logo_e.png?imageView2/2/interlace/1/q/75" alt="">
        </router-link>
      </h2>
      <ul class="header-tool clearfix">
        <li><span>Hi~</span>&nbsp;
          <router-link class="login-in" to="/page/login">[请登录]</router-link>&nbsp;
          <router-link class="login-out" to="/page/registered">[免费注册]</router-link></li>
        <li class="tool-options">
          <span><a href="//www.yohobuy.com/home?t=1518000289219">MY有货</a></span>
          <i class="options-icon down iconfont">&#xe6ab;</i>
          <i class="options-icon up iconfont"></i>
          <div class="tool-select">
            <a href="//www.yohobuy.com/home/favorite?t=1518000289219">我的收藏</a>
            <a href="//www.yohobuy.com/home/coupons?t=1518000289219">优惠券</a>
          </div>
        </li>
        <li>
          <a href="//www.yohobuy.com/home/orders?t=1518000289219">订单中心</a>
        </li>
        <li class="tool-options tool-options-large">
          <span><a href="//www.yohobuy.com/home?t=1518000289219">客户服务</a></span>
          <i class="options-icon down iconfont">&#xe6ab;</i>
          <i class="options-icon up iconfont"></i>
          <div class="tool-select">
            <a href="//www.yohobuy.com/service/client">在线客服</a>
            <a href="//www.yohobuy.com/help">帮助中心</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Cookie from 'js-cookie'
	export default {
    mounted(){
      let code_down_box = _$('.code-down-box'),
          user = this.$store.getters.userInfo.user_Info,
          login_in = _$('.login-in'),
          login_out = _$('.login-out')
      code_down_box.css('display','none')
      if(user){
        login_in.text(user.split('&')[0])
        login_out.text(' [退出]')
        login_out.click(function () {
          Cookie.remove('shopID')
          location.reload();
        })
      }
    }
	}
</script>

<style lang="scss" scoped>
  .simple-header {
    height: 66px;
    margin: 0 0 20px;
    border-bottom: 2px solid #222;
    .header-inner {
      width: 990px;
      height: 100%;
      margin: 0 auto;
      .logo {
        float: left;
        line-height: 66px;
        font-size: 0;
        img {
          vertical-align: middle;
          background-color: transparent;
        }
      }
    }
    .header-tool {
      float: right;
      line-height: 66px;
      font-size: 0;
      li {
        span ,a{
          font-size: 12px;
          vertical-align: middle;
        }
        display: inline-block;
        padding: 0 10px;
        line-height: 28px;
      }
      .tool-options {
        position: relative;
        font-size: 0;
        cursor: pointer;
        .iconfont{
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          height: 28px;
          line-height: 20px;
          vertical-align: top;
        }
        .tool-select {
          position: absolute;
          width: 74px;
          left: 0;
          background: #eaeceb;
          opacity: 0;
          z-index: 9;
          transition: opacity .5s;
          a {
            display: block;
            border-top: 1px solid #ddd;
          }
        }
        &:hover{
          background: #eaeceb;
          .tool-select{
            opacity: 1;
          }
        }
      }
      .tool-options-large{
        width: 80px;
        box-sizing: border-box;
        .tool-select {
          a {
            width: 80px;
            background: #eaeceb;
          }
        }
      }
    }
  }
</style>
