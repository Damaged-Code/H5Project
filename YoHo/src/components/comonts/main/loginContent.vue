<template>
  <form method="post" onsubmit="return false;">
    <div class="content">
      <ul class="login-ul">
        <div class="switch-login-type" data-type="MobileLogin">
          <div id="device-bg" class="type-desktop-bg">
            <i class="iconfont qr-code-login hide">&#xe63c;</i>
            <i class="iconfont pass-login ">&#xe61f;</i>
          </div>
          <div class="type-tip tip-title">
            <div id="device-tip" style="margin-left: 15px;margin-top: 8px">密码登录在这里</div>
          </div>
        </div>
        <div class="desktop-login hide">
          <li class="relative clearfix">
            <h2 class="title">会员登录</h2>
            <span id="country-code" class="country-code right">
                                <em>中国 +86</em>
                                <i class="iconfont"></i>
                                <ul id="country-list" class="country-list">
                                        <li data-cc="+61">澳大利亚 +61</li>
                                        <li data-cc="+82">韩国 +82</li>
                                        <li data-cc="+1">加拿大 +1</li>
                                        <li data-cc="+60">马来西亚 +60</li>
                                        <li data-cc="+1">美国 +1</li>
                                        <li data-cc="+81">日本 +81</li>
                                        <li data-cc="+65">新加坡 +65</li>
                                        <li data-cc="+44">英国 +44</li>
                                        <li data-cc="+86" selected="">中国 +86</li>
                                        <li data-cc="+853">中国澳门 +853</li>
                                        <li data-cc="+886">中国台湾 +886</li>
                                        <li data-cc="+852">中国香港 +852</li>
                                </ul>
                            </span>
          </li>
          <li class="relative">
            <div class="switch ">
              <div class="left selected" data-type="PasswordLogin">普通登录</div>
              <div class="right " data-type="SMSLogin">手机验证码登录
              </div>
            </div>
          </li>

          <li class="relative password-login ">
            <input id="account1" class="account input va" name="account" value="" type="text" placeholder="邮箱/手机号码" autocomplete="off">
            <span class="err-tip hide">
                                <i></i>
                                <em></em>
                            </span>
            <ul id="email-autocomplete" class="email-autocomplete hide"></ul></li>

          <li class="relative password-login ">
            <input id="password" class="password input va" name="password" type="password" placeholder="密码" autocomplete="off" maxlength="20">
            <span id="caps-lock" class="caps-lock hide">大写状态开启</span>
            <span class="err-tip hide">
                                <i></i>
                                <em>请输入密码</em>
                            </span>
          </li>

          <li class="clearfix password-login captcha-wrap ">
            <div class="img-check">
              <div class="img-check-header">
                <span>请将下列图片点击翻转至正确方向</span>
                <a class="img-check-refresh">换一批</a>
              </div>
              <div class="img-check-main">
                <ul class="img-check-pics">
                  <li class="img-check-pic" data-val="0">
                    <img src="//www.yohobuy.com/passport/images.png?t=1517970520188" alt="" style="margin-left: 0px; margin-top: 0px;">
                  </li>
                  <li class="img-check-pic" data-val="0">
                    <img src="//www.yohobuy.com/passport/images.png?t=1517970520188" alt="" style="margin-left: -60px; margin-top: 0px;">
                  </li>
                  <li class="img-check-pic" data-val="0">
                    <img src="//www.yohobuy.com/passport/images.png?t=1517970520188" alt="" style="margin-left: -120px; margin-top: 0px;">
                  </li>
                  <li class="img-check-pic last-child" data-val="0">
                    <img src="//www.yohobuy.com/passport/images.png?t=1517970520188" alt="" style="margin-left: -180px; margin-top: 0px;">
                  </li>
                </ul>

                <span class="img-check-tip hide">
             <i class="iconfont"></i>
             <em>请将图形验证码翻转至正确方向</em>
        </span>
              </div>

            </div>
          </li>

          <li class="relative clearfix sms-login hide">
            <input id="account2" class="account input va" name="account2" value="" type="text" placeholder="手机号码" autocomplete="off">
            <span class="err-tip hide">
                            <i></i>
                            <em></em>
                        </span>
          </li>

          <li class="clearfix sms-captcha-img-wrap sms-login  hide ">
            <div class="img-check">
              <div class="img-check-header">
                <span>请将下列图片点击翻转至正确方向</span>
                <a class="img-check-refresh">换一批</a>
              </div>
              <div class="img-check-main">
                <ul class="img-check-pics">
                  <li class="img-check-pic" data-val="0">
                    <img src="//www.yohobuy.com/passport/images.png?t=1517970520188" alt="" style="margin-left: 0px; margin-top: 0px;">
                  </li>
                  <li class="img-check-pic" data-val="0">
                    <img src="//www.yohobuy.com/passport/images.png?t=1517970520188" alt="" style="margin-left: -60px; margin-top: 0px;">
                  </li>
                  <li class="img-check-pic" data-val="0">
                    <img src="//www.yohobuy.com/passport/images.png?t=1517970520188" alt="" style="margin-left: -120px; margin-top: 0px;">
                  </li>
                  <li class="img-check-pic last-child" data-val="0">
                    <img src="//www.yohobuy.com/passport/images.png?t=1517970520188" alt="" style="margin-left: -180px; margin-top: 0px;">
                  </li>
                </ul>

                <span class="img-check-tip hide">
             <i class="iconfont"></i>
             <em>请将图形验证码翻转至正确方向</em>
        </span>
              </div>

            </div>
          </li>

          <li class="relative clearfix sms-login hide">
            <input id="captcha-sms" class="input va captcha-sms-input" type="text" name="captcha" placeholder="短信验证码" autocomplete="off" maxlength="4">
            <div class="change-captcha-sms btn">获取短信验证码</div>
            <span class="err-tip hide">
                                    <i></i>
                                    <em></em>
                                </span>
          </li>

          <li id="login-in" class="desktop-login hide">
            <span id="login-btn" class="login-btn btn">登录</span>
          </li>

          <li class="other-opts">
                            <span class="remember-me checked">
                                <i class="iconfont"></i>
                                记住登录状态
                            </span>
            <span class="right">
                                <a class="forget-password" href="//www.yohobuy.com/passport/back/index">忘记密码?</a>
                                |
                                <a class="fast-reg" href="/reg.html">快速注册</a>
                            </span>
          </li>

          <li class="third-party-login">
            <a href="//www.yohobuy.com/passport/autosign/wechat" data-type="4">
              <span class="icon weixin"></span>
            </a>
            <a href="//www.yohobuy.com/passport/autosign/qq" data-type="1">
              <span class="icon qq"></span>
            </a>
            <a href="//www.yohobuy.com/passport/autosign/sina" data-type="2">
              <span class="icon weibo"></span>
            </a>
            <a href="//www.yohobuy.com/passport/autosign/alipay" data-type="3">
              <span class="icon alipay"></span>
            </a>
          </li>

        </div>
        <div class="mobile-login">
          <li class="relative clearfix center qrcode-login-title">
            <div>
              手机扫码，安全登录
            </div>
          </li>
          <li class="relative clearfix center">
            <div id="qrcode-placeholder" style="width: 270px;height: 140px;"></div>
            <div id="qrcode-container" style="left:130px" class="qrcode" title="http://m.yohobuy.com/signin.html?qr=pgFY6Va81L01%2B2eG6DS4I%2BrzftJOUtbz%2BGJCed4yAKtkNy%2FHFiEScrJ1z1hzvTlDikXg4S3coc8vJcpgiX04gPiYkLm5nwCm4H15WjEBrVw%3D"><canvas width="140" height="140" style="display: none;"></canvas><img alt="Scan me!" src="data:image/png;base64,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" style="display: block;"></div>
            <div id="qrcode-helper" class="qrcode-helper hide"></div>
            <div id="qrcode-hover" class="qrcode-hover"></div>
            <div id="qrcode-overlay" class="qrcode-overlay-fail hide">
              <div class="qrcode-err-tip">二维码已失效</div>
              <a id="qrcode-refresh-btn" class="qrcode-refresh-btn">请点击刷新</a></div>
          </li>
          <li class="relative clearfix">
            <div>
              <i class="iconfont scan">&#xe6a5;</i>
              <p class="scan-font">打开手机Yoho!Buy有货</p>
              <p class="scan-font">扫一扫登录</p>
            </div>
          </li>
          <li class="relative clearfix center">
            <div>
              <a class="download-link" href="//www.yohobuy.com/download/app">下载Yoho!Buy有货手机APP</a>
            </div>
          </li>
        </div>
      </ul>
      <input id="country-code-hide" name="countryCode" type="hidden" value="+86">
      <input id="captcha-sms-token-hide" name="token" type="hidden" value="">
      <input id="qrcode" name="qrcode" type="hidden" value="http://m.yohobuy.com/signin.html?qr=pgFY6Va81L01%2B2eG6DS4I%2BrzftJOUtbz%2BGJCed4yAKtkNy%2FHFiEScrJ1z1hzvTlDikXg4S3coc8vJcpgiX04gPiYkLm5nwCm4H15WjEBrVw%3D">
      <input id="uid" type="hidden">
    </div>
  </form>
</template>

<script>
 var timer = 0;
	export default {
    mounted(){
      let _this = this
      _$(function () {
        let qr_hov = _$('.qrcode-hover'),
            qr_con = _$('#qrcode-container'),
            qr_helper = _$('#qrcode-helper'),
            qr_overlay = _$('#qrcode-overlay'),
            pass_login = _$('.pass-login'),
            mobile_login = _$('.mobile-login'),
            qr_code_login = _$('.qr-code-login'),
            device_tip = _$('#device-tip'),
            desktop_login = _$('.desktop-login')
        qr_hov.hover(function () {
          qr_con.animate({
            left:65
          },500,function () {
            qr_helper.removeClass('hide')
          })
        },function () {
          qr_helper.addClass('hide')
          qr_con.animate({
            left:130
          },500)
        })
        qr_overlay.click(function () {
          qr_con.css('left','130px')
          qr_overlay.addClass('hide')

        })
        pass_login.click(function () {
          Timer('clear')
          mobile_login.addClass('hide')
          pass_login.addClass('hide')
          qr_code_login.removeClass('hide')
          desktop_login.removeClass('hide')
          device_tip.text('二维码登录在这里')

        })
        qr_code_login.click(function () {
          Timer()
          mobile_login.removeClass('hide')
          pass_login.removeClass('hide')
          qr_code_login.addClass('hide')
          desktop_login.addClass('hide')
          device_tip.text('密码登录在这里')
          console.log(3)
        })
        Timer('clear')
        Timer()
	})
      _$(function () {
        let account1 = _$('#account1'),
            err_tip = _$('.err-tip'),
            registered = false,
            registered1 = false,
            login_in = _$('#login-in'),
            password = _$('#password');
        account1.on({
          blur(){
            isEmpty(account1,err_tip.eq(0),'X请输入账户')
          },
          change(){
            registered = testRex(account1,err_tip.eq(0),'user')
          },

        })
        password.on({
          blur(){isEmpty(password,err_tip.eq(1),'X请输入密码')},
          change(){
            registered1 = testRex(password,err_tip.eq(1),'pass')
            if(registered && registered1){
             if(Check(account1.val(),password.val()).responseText == 'true'){
               login_in.click(function () {
                 _this.$router.push({name: 'index'});
                 _this.$store.dispatch('setUserInfo',`${account1.val()}&${password.val()}`)
               })
             }
             else {
               isEmpty(password,err_tip.eq(1),'用户名或密码错误')
             }
            }
          },
        })

      })
    }
	}
	function Timer(clear) {
    let qr_con = _$('#qrcode-container'),
        qr_overlay = _$('#qrcode-overlay')
    timer = setInterval(function () {
      qr_con.css('left','65px')
      qr_overlay.removeClass('hide')
    },1000*60*4)
    if(clear){
      clearInterval(timer)
    }
  }
  function isEmpty(tag,tag1,txt) {
    if(!tag.val()){
      tag.removeClass('success')
      tag.addClass('error')
      tag1.removeClass('hide')
      tag1.text(txt)
    }
    else {
      /*tag.removeClass('error')
      tag1.addClass('hide')
      tag1.text('')*/
    }
  }
  function testRex(tag,tag1,type) {
    var passRex = false,
        userRex = false;
    if(type === 'pass'){
      passRex = passRextest(tag)
      if(passRex){
        tag.removeClass('error')
        tag.addClass('success')
        tag1.addClass('hide')
        return true;
      }
      else {
        tag.removeClass('success')
        tag.addClass('error')
        tag1.removeClass('hide')
        tag1.text('密码格式错误,请重新输入')
        return false;
      }
    }
    else {
      userRex = userRextest(tag)
      if(userRex){
        tag.removeClass('error')
        tag.addClass('success')
        tag1.addClass('hide')
        return true;
      }
      else {
        tag.removeClass('success')
        tag.addClass('error')
        tag1.removeClass('hide')
        tag1.text('用户名格式错误，请重新输入')
        return false;
      }
    }
  }
  function passRextest(tag) {
    let pPattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    if(pPattern.test(tag.val())){
      return true
    }
    else {
      return false
    }
  }
  function userRextest(tag) {
    let mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/,
        ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(mPattern.test(tag.val()) || ePattern.test(tag.val())){
      return true;
    }
    else {
      return false;
    }
  }
  function Check(val,val1) {
    return _$.ajax({
      type: "POST",
      url: "http://localhost/yohoAPI/login.php",
      data: `username=${val}&password=${val1}`,
      async: false,
      success: function(msg){
      }
    });
  }
</script>

<style lang="scss" scoped>
  .content {
    float: left;
    margin-top: 107px;
    padding-left: 85px;
    .login-ul{
      div{
        li{
            margin-bottom: 25px;
        }
      }
    }
    .switch-login-type {
      width: 270px;
      height: 46px;
      margin-bottom: 25px;
      background-color: #fff;
      .type-tip {
        width: 120px;
        height: 30px;
        background-image: url("https://");
        background-position: -323px -70px;
        background-size: 595px 298px;
        float: right;
        border : 1px solid #e4e4e4;
      }
      .type-desktop-bg{
        width: 40px;
        height: 40px;
        background-image: url("https://");
        background-size: 595px 298px;
        float: right;
        cursor: pointer;
        .iconfont{
          line-height: 0;
          font-size: 40px;
        }
      }
    }
    .tip-title {
      color: #9b9b9b;
      font-size: 13px;
    }
    .hide {
      display: none!important;
    }
    .qrcode-login-title {
      margin-bottom: 40px!important;
      font-weight: 700;
    }
    .relative {
      position: relative;
    }
    .center {
      text-align: center;
    }
    .qrcode {
      position: absolute;
      height: 140px;
      width: 140px;
      left: 65px;
      top: 0;
    }
    .qrcode-overlay-fail {
      position: absolute;
      background-color: rgba(255,255,255,.8);
      background-position: -175px 0!important;
      background-size: 595px 298px!important;
      top: 0;
      left: -100px;
      width: 470px;
      height: 140px;
      z-index: 99;
      .qrcode-err-tip {
        margin-top: 40px;
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 13px;
      }
      .qrcode-refresh-btn {
        color: #fff;
        display: block;
        width: 85px;
        height: 30px;
        background-color: red;
        margin: 0 auto;
        font-size: 13px;
        line-height: 30px;
        cursor: pointer;
        border-radius: 5px;
      }
    }
    .scan {
      display: block;
      width: 30px;
      height: 29px;
      float: left;
      margin-right: 15px;
      margin-left: 40px;
    }
    .iconfont.scan{
      line-height: 0;
      font-size: 30px;
    }
    .scan-font {
      text-align: left;
      color: #9b9b9b;
      font-size: 14px;
      line-height: 15px;
    }
    .download-link {
      color: red;
      font-size: 13px;
    }
    .qrcode-hover {
      position: absolute;
      top: 0;
      left: 0;
      width: 270px;
      height: 140px;
    }
    .qrcode-helper{
      position: absolute;
      background-color: rgba(0,0,0,.5);
      top: -7px;
      right: -100px;
      width: 167px;
      height: 150px;
    }
    .title {
      float: left;
      font-size: 20px;
    }
    .country-code {
      color: #b9b9b9;
      cursor: pointer;
    }
    .country-list {
      position: absolute;
      top: 20px;
      right: 0;
      z-index: 1;
      display: none;
      padding: 0 10px;
      border: 1px solid #000;
      border-radius: 5px;
      background: #fff;
      li {
        height: 20px;
        color: #000;
        line-height: 20px;
      }
    }
    .switch {
      width: 100%;
      height: 27px;

      border-radius: 13px;
      font-size: 14px;
      .left.selected {
        background-color: #0a0a0a;
        border-radius: 5%;
        color: #fff;
      }
      .right.selected {
        background-color: #0a0a0a;
        border-radius: 5%;
        color: #fff;
      }
      .left {
        width: 146px;
        height: 27px;
        text-align: center;
        line-height: 27px;
        border-radius: 13px;
        position: absolute;
        left: 0;
        cursor: pointer;
        transition: background-color .5s;
      }
      .right {
        width: 146px;
        height: 27px;
        text-align: center;
        line-height: 27px;
        border-radius: 13px;
        position: absolute;
        right: 0;
        cursor: pointer;
        transition: background-color .5s;
      }
    }
    .relative {
      position: relative;
    }
    .input {
      width: 268px;
      height: 43px;
      border: 1px solid #dbdbdb;
      color: #9a9a9a;
      color: rgba(0,0,0,.5);
      text-indent: 10px;
      font-size: 16px;
      line-height: 1.2;
      line-height: 43px\9;
      outline: 0;
    }
    .err-tip {
      position: absolute;
      top: 8px;
      left: 285px;
      padding: 6px 0;
      color: red;
      white-space: nowrap;
      font-size: 14px;
    }
    .email-autocomplete {
      position: absolute;
      z-index: 1;
      margin-top: 5px;
      padding: 0 10px;
      width: 248px;
      border: 1px solid #fefefe;
      border-radius: 5px;
      background-color: #161616;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
    .error {
      border-color: red!important;
    }
    .success {
      border-color: #71e071 !important;
    }
    .password-login.captcha-wrap{
      margin-bottom: 0!important;
    }
    .captcha-wrap {
      position: relative;
      .img-check {
        margin-top: 25px;
        margin-bottom: 25px;
        width: 270px;
        .img-check-header {
          font-size: 13px;
          line-height: 13px;
          text-align: left;
          margin-bottom: 10px;
          color: #b0b0b0;
          .img-check-refresh {
            float: right;
            font-size: 13px;
            color: #ff1901;
            cursor: pointer;
          }
        }
        .img-check-pics {
          display: inline-block;
          width: 270px;
          height: 62px;
          padding: 0;
          position: relative;
          overflow: hidden;
          img {
            width: 240px;
            height: 240px;
          }
          li {
            float: left;
            background: hsla(0,0%,100%,0) no-repeat;
            width: 60px!important;
            height: 60px!important;
            border: 1px solid #e0e0e0;
            margin-right: 4px;
            cursor: pointer;
            overflow: hidden;
          }
        }
        .img-check-tip {
          display: inline-block;
          position: absolute;
          left: 0;
          top: 90px;
          font-size: 13px;
          line-height: 19px;
          height: 19px;
          color: red;
          i {
            font-size: 13px!important;
          }
        }
      }
    }
    .other-opts {
      color: #b9b9b9;
      font-size: 14px;
      .remember-me {
        float: left;
        cursor: pointer;
      }
      .forget-password {
        color: #b9b9b9;
      }
      .fast-reg {
        color: #ff1901;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 46px;
      background-color: #ff1901;
      color: #fff;
      text-align: center;
      letter-spacing: 10px;
      font-size: 20px;
      line-height: 46px;
      cursor: pointer;
    }
    #login-in{
      position: relative;
    }
  }
</style>
