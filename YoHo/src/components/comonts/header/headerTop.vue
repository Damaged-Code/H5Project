<template>
  <section class="head-top-main">
    <section class="head-top clearfix">
      <section class="left-menu">
        <i class="fa fa-navicon"></i>
        <router-link to="/" class="left-menu-text">YOHO!BUY 有货</router-link>
        <section class="left-menu-content">
          <ul class="yoho-group-list">
            <li>
              <router-link to="/" class="yoho-group" data-en='YOHO!' data-cn="集团官网">
                YOHO!</router-link>
            </li>
            <li>
              <router-link to="" class="yoho-group" data-en='YOHO!BOYS' data-cn="潮流男生">
                YOHO!BOYS</router-link>
            </li>
            <li>
              <router-link to="" class="yoho-group" data-en='YOHO!GIRLS' data-cn="潮流女生">
                YOHO!GIRLS</router-link>
            </li>
            <li>
              <router-link to="" class="yoho-group" data-en='MARS' data-cn="新鲜好去处">
                MARS</router-link>
            </li>
            <li>
              <router-link to="" class="yoho-group" data-en='YO`HOOD' data-cn="潮流嘉年华">
                YO'HOOD</router-link>
            </li>
          </ul>
        </section>
      </section>
      <section class="warning-mess">
        <i class="fa fa-exclamation-circle"></i>
        <a class="warning-mess-info" href="">关于防诈骗的重要提醒</a>
      </section>
      <section class="right-nav">
        <ul class="clearfix">
          <li class="sign-in-up yoho-nav">
            <span>Hi~[
              <router-link to="/page/login">请登录</router-link> ][
              <router-link class="login-out" :to="indexUrl">免费注册</router-link> ]
            </span>
          </li>
          <li class="my-yoho yoho-nav" id="myYohoBox">
            <a href="">MY有货</a>
            <i class="fa fa-angle-down"></i>
            <div class="simple-user-center">
              <div class="account-info-header">
                <div class="user-img">
                </div>
                <div class="user-name">
                  <a href="//www.yohobuy.com/home?t="></a>
                </div>
                <h4 class="user-level">
                  VIP: <span>普通会员</span>
                </h4>
                <div class="level-detail">
                  <div class="level-view-bar">
                    <div class="text-span">
                      0/800
                    </div>
                    <p class="" style="width: 0%;"></p>
                  </div>
                  <span>银卡会员</span>
                </div>
              </div>
              <ul class="account-info-content">
                <li>
                  <a href="//www.yohobuy.com/home/orders?t=">待处理的订单</a>
                  <span class="right">0</span>
                </li>
                <li>
                  <a href="//www.yohobuy.com/home/favorite?t=">我的收藏</a>
                  <span class="right"></span>
                </li>
                <li>
                  <a href="//www.yohobuy.com/home/coupons?t=">我的优惠券</a>
                  <span class="right">0</span>
                </li>
                <li>
                  <a href="//www.yohobuy.com/home/currency?t=">我的有货币</a>
                  <span class="right">0</span>
                </li>
                <li>
                  <a href="//www.yohobuy.com/home/returns?t=">我的退货换货</a>
                  <span class="right">0</span>
                </li>
              </ul>

              <div class="account-info-footer">
                <a href="//www.yohobuy.com/home/user?t=">完善资料
                  <span>(学生认证)</span>
                </a>
              </div>
            </div>
          </li>
          <li class="my-order yoho-nav">
            <i class="iconfont">&#xe695;</i>
            <a href="">我的订单</a>
          </li>
          <li class="my-collect yoho-nav">
            <i class="iconfont">&#xe63b;</i>
            <a href="">我的收藏</a>
          </li>
          <li class="yoho-message yoho-nav">
            <i class="iconfont">&#xe772;</i>
            <a href="">消息</a>
          </li>
          <li class="help yoho-nav">
            <i class="iconfont">&#xe668;</i>
            <a href="">客服服务</a>
            <ul class="help-list-down">
              <li><a href="">在线客服</a></li>
              <li><a href="">帮助中心</a></li>
            </ul>
          </li>
          <li class="wechat yoho-nav">
            <i class="iconfont">&#xe62f;</i>
            <a href="">关注有货</a>
            <section class="yoho-code-box">
              <div class="yoho-code"></div>
              <h5 class="qr-words">
                微信扫一扫
              </h5>
              <h5 class="qr-words">
                关注公众号，赢免单
              </h5>
            </section>
          </li>
          <li class="phone-app yoho-nav">
            <i class="iconfont">&#xe61a;</i>
            <a href="">手机版</a>
            <section class="yoho-code-box">
              <div class="yoho-code"></div>
              <h5 class="qr-words">
                下载手机客户端
              </h5>
              <h5 class="qr-words">
                <a href="">更多客户端</a>
              </h5>
            </section>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
	export default {
	  data(){
	    return{
	      indexUrl:'',
        registerUrl:''
      }
    },
    mounted:function () {
	    let _this = this;
      _$(function () {    //导航语言切换
        let yoho_group = _$('.yoho-group'),
            en_data = 0,  //英文
            cn_data = 0;  //中文
        yoho_group.hover(function () {
          cn_data = _$(this).attr('data-cn');
          _$(this).text(cn_data);
        },function () {
          en_data = _$(this).attr('data-en');
          _$(this).text(en_data);
        })
      });
      let userInfo = this.$store.getters.userInfo.user_Info,
          my_yoho = _$('.my-yoho'),
          user_name = _$('.user-name'),
          login_out = _$('.login-out'),
          simple_user_center = _$('.simple-user-center'),
          sign_in_up = _$('.sign-in-up a');
      if(userInfo){
        hasUser(sign_in_up,userInfo,user_name)
        my_yoho.hover(function () {
          simple_user_center.css('display','block')
        },function () {
          simple_user_center.css('display','none')
        })
      }
      if(login_out.text() == '退出'){
        _this.indexUrl = '/'
        login_out.click(function () {
          location.reload();
        })
      }
      else {
        _this.indexUrl = '/page/registered'
      }
    }
	}
  function hasUser(el,info,user_name) {
    info = info.split('&')
    el.eq(0).text(info[0])
    el.eq(1).text('退出')
    user_name.text(info[0])
  }
</script>

<style lang="scss" scoped>
  $default_color: #000;
  $test_color: #8e8e8e;
  $wechat_color: #86bf4a;
  $warning_color: #d71d32;
  $code_bg: #f4f4f4;
  .head-top-main{
    width: 100%;
    background-color: $code_bg;
  }
  .head-top{
    height: 32px;
    font-size: 12px;
    line-height: 32px;
    .left-menu, .warning-mess, .right-nav{
      display: inline-block;
      height: 100%;
    }
    .left-menu, .warning-mess{
      float: left;
    }
    .right-nav{
      float: right;
    }
  }
  .left-menu{
    position: relative;
    width: 128px;
    .left-menu-text{
      display: inline-block;
      color : $default_color;
    }
    &:hover{
      cursor: pointer;
      background-color: #dcdcdc;
      .left-menu-content{
        display: block;
      }
    }
    .left-menu-content{
      position: absolute;
      top : 32px;
      left: 0;
      z-index: 9;
      display: none;
      width: 190px;
      height: 205px;
      background-color: #f4f4f4;
      .yoho-group-list{
        text-align: left;
        font-size: 14px;
        padding: 20px 0 20px 20px;
        margin-left: 5px;
        li:hover{
          .yoho-group{
            color: $default_color;
          }
        }
        .yoho-group{
          display: inline-block;
          width: 88px;
          color: $test_color;
        }
      }
    }
  }
  .warning-mess{
    width: 170px;
    color: $warning_color;
    a{
      color: $warning_color;
    }
  }
  .my-yoho{
    position: relative;
  }
  .right-nav{
    li{
      position: relative;
      float: left;
      padding-right: 10px;
      text-align: center;
      a{
        color: $test_color;
      }
      i{
        color: $test_color;
      }
    }
    .yoho-nav:nth-of-type(2):hover,.yoho-nav:nth-last-child(-n+3):hover{
      background-color: #eaeceb;
    }
    .yoho-nav:nth-of-type(n+2){
      padding-left: 10px;
    }
    .yoho-nav:before{
      content: '|';
      position: absolute;
      top : 0;
      bottom: 0;
      left: 0;
      margin: auto 0;
      color: #dcdcdc;
    }
    .yoho-nav:first-child:before{
      content: none;
    }
    .wechat {
      i, a {
        color : #86bf4a;
      }
      &:hover .yoho-code-box {
        display : block;
      }
    }
    .yoho-code-box{
      position: absolute;
      top : 32px;
      z-index: 5;
      margin-left: -40px;
      display: none;
      width: 146px;
      height: 216px;
      background-color: $code_bg;
      .qr-words{
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        text-align: center;
      }
      h5:nth-of-type(2){
        color: #d71d32;
      }
      .yoho-code{
        height: 168px;
        background-image: url("//s1.ax2x.com/2018/02/01/hBknd.png");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .phone-app{
      position: relative;
      i,a{
        color: #d71d32;
      }
      &:hover .yoho-code-box{
        display: block;
      }
      .yoho-code-box{
        margin-left: -45px;
      }
    }
    .help{
      &:hover .help-list-down{
        opacity: 1;
      }
      position: relative;
      .help-list-down{
        position: absolute;
        top : 32px;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: #eaeceb;
        opacity: 0;
        transition: opacity 1s;
        z-index: 5;
        li {
          width: 100%;
          padding: 0;
          border-top : 1px solid #c9c9c9;
          float: none;
          a{
            color: $test_color;
          }
        }
      }
    }
  }
  .simple-user-center {
    top: 32px;
    margin-left: -110px;
    width: 300px;
    position: absolute;
    background-color: #f8f8f8;
    z-index: 100;
    display: none;
    .account-info-header {
      margin: 17px auto 0;
      width: 257px;
      border-bottom: 1px solid #dcdcdc;
      text-align: center;
      padding-bottom: 15px;
      .user-img {
        width: 63px;
        height: 63px;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
        background: url(../../../assets/error.png) 50%;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
      }
      .user-name {
        margin-top: 14px;
        line-height: 25px;
      }
      .user-level {
        color: #000;
        height: 20px;
        line-height: 20px;
        font-size: 18px;
        span {
          color: #8cc4f9;
        }
      }
      .level-detail {
        font-size: 14px;
        line-height: 14px;
        padding-top: 10px;
        padding-left: 20px;
        .level-view-bar {
          width: 150px;
          height: 14px;
          margin-right: 5px;
          text-align: left;
          background-color: #eaeceb;
          display: inline-block;
          vertical-align: middle;
          overflow: hidden;
          .text-span {
            font-size: 16px;
            line-height: 16px;
            padding-left: 3px;
            position: absolute;
          }
        }
      }
    }
    .account-info-content {
      padding: 20px 30px 0;
      border-bottom: 1px solid #dcdcdc;
      li {
        float: none;
        font-size: 16px;
        a {
          font-size: 14px;
          color: #000;
        }
        span {
          display: inline-block;
          vertical-align: middle;
          line-height: 30px;
        }
      }
    }
    .account-info-footer {
      height: 51px;
      line-height: 51px;
      text-align: center;
      a {
        font-size: 14px;
        color: #000;
        span {
          color: #d0021b;
        }
      }
    }
  }
  .right {
    float: right;
  }
</style>
