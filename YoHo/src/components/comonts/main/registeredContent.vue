<template>
  <div class="content">
    <div class="register-page">
      <ul>
        <li class="clearfix">
          <select id="region" class="region" name="region">
            <option value="+61">澳大利亚</option>
            <option value="+82">韩国</option>
            <option value="+1">加拿大</option>
            <option value="+60">马来西亚</option>
            <option value="+1">美国</option>
            <option value="+81">日本</option>
            <option value="+65">新加坡</option>
            <option value="+44">英国</option>
            <option selected="selected" value="+86">中国</option>
            <option value="+853">中国澳门</option>
            <option value="+886">中国台湾</option>
            <option value="+852">中国香港</option>
          </select>
        </li>
        <li class="clearfix" data-index="0">
          <span id="country-code" class="country-code">+86</span>
          <input value="" id="phone-num" class="input va phone-num" type="text" name="phoneNum" placeholder="请输入手机号码" autocomplete="off">
          <p class="error-info hide">test</p>
        </li>
        <li id="captcha-img" class="w330 clearfix " data-index="1">
          <div class="img-check">
            <div class="img-check-header">
              <span>请将下列图片点击翻转至正确方向</span>
              <a class="img-check-refresh">换一批</a>
            </div>
            <div class="img-check-main">
              <ul class="img-check-pics">
                <li class="img-check-pic" data-val="0">
                  <img src="//www.yohobuy.com/passport/images.png?t=1518041369837" alt="" style="margin-left: 0px; margin-top: 0px;">
                </li>
                <li class="img-check-pic" data-val="0">
                  <img src="//www.yohobuy.com/passport/images.png?t=1518041369837" alt="" style="margin-left: -60px; margin-top: 0px;">
                </li>
                <li class="img-check-pic" data-val="0">
                  <img src="//www.yohobuy.com/passport/images.png?t=1518041369837" alt="" style="margin-left: -120px; margin-top: 0px;">
                </li>
                <li class="img-check-pic last-child" data-val="0">
                  <img src="//www.yohobuy.com/passport/images.png?t=1518041369837" alt="" style="margin-left: -180px; margin-top: 0px;">
                </li>
              </ul>

              <span class="img-check-tip hide">
             <i class="iconfont"></i>
             <em>请将图形验证码翻转至正确方向</em>
        </span>
            </div>

          </div>
        </li>
        <li class="clearfix" data-index="2">
          <input id="msg-captcha" class="input va msg-captcha" type="text" name="msgCaptcha" placeholder="短信验证码" autocomplete="off" maxlength="4">
          <input id="send-captcha" class="btn send-captcha" type="button" value="获取短信验证码">
          <span id="msg-tip" class="hide msg-tip">短信验证码已发送至您的手机，请查收</span>
        </li>
        <input type="text" name="name" style="position: fixed;visibility:hidden;">

        <li class="clearfix" data-index="3">
          <input id="pwd" class="input va pwd" name="pwd" placeholder="设置密码" autocomplete="off" maxlength="20" type="password">
          <div class="pwd-intensity-container">
            <span class="pwd-intensity low">低</span>
            <span class="pwd-intensity mid">中</span>
            <span class="pwd-intensity high">高</span>
          </div>
          <div id="pwd-tips" class="hide pwd-tips">
            <div class="default" id="pwd-tip1"><i></i>密码只支持6-20位字符</div>
            <div class="default" id="pwd-tip2"><i></i>由字母、 数字组合，不能包含特殊符号</div>
          </div>
        </li>

        <li class="clearfix" data-index="3">
          <input id="invite-code" class="input invite-code" name="inviteCode" placeholder="潮流口令(非必填)" autocomplete="off" maxlength="20" type="text">
        </li>

        <li class="items-container clearfix">
          <input id="agree-terms" class="agree-terms" type="checkbox" checked="">
          <span>
                我已阅读并同意遵守
                <a class="link go-yoho-items" href="//www.yohobuy.com/help/detail?id=103&amp;contId=197" target="_blank">YOHO!BUY 有货服务条款</a>
            </span>
        </li>
        <li class="clearfix reg-btn-area">
          <input name="refer" id="refer" type="hidden" value="">
          <input id="register-btn" class="btn register-btn disable" type="button" value="立即注册" disabled="">
          <div class="qrcode-hover-reg">
            <a class="qrcode-reg" href="//www.yohobuy.com/download/app" target="_blank">
              <i class="qrcode-icon"></i>
            </a>
            <div class="download-app-box">
              <div class="qr-img"></div>
              <h3 class="qr-words">扫描二维码</h3>
              <h3 class="qr-words">下载YohoBuy手机端</h3>
              <h3 class="qr-more">
                <a href="javascript:void(0);" target="_blank">更多客户端下载</a>
              </h3>
            </div>
          </div>
        </li>
        <li class="quick-login-container">
          我已注册YOHO!BUY 有货账号
          <a class="link go-login" href="//www.yohobuy.com/signin.html?refer=">快速登录</a>
        </li>


      </ul>
      <div id="err-tip" class="err-tip hide">
        <span></span>
        <b></b>
      </div>
      <input name="" type="hidden" id="open-id" value="">
      <input name="" type="hidden" id="source-type" value="">
    </div>

  </div>
</template>

<script>
	export default {
    mounted(){
      let phone_num = _$('#phone-num'),
          pwd = _$('#pwd'),
          error_info = _$('.error-info'),
          pwd_tips = _$('#pwd-tips'),
          register_btn = _$('#register-btn'),
          flag = false,
          flag1 = false,
          _this = this,
          pPattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      phone_num.on({
          change(){
            if((ajax(phone_num.val()).responseText) == 'false'){
              error_info.removeClass('hide')
              error_info.text('用户已存在')
            }
            else {
              flag = true;
              error_info.addClass('hide')
              error_info.text('test')
            }
          }
      })
      pwd.on({
        focus(){
          pwd_tips.removeClass('hide')
        },
        blur(){
          pwd_tips.addClass('hide')
        },
        change(){
          if(pPattern.test(pwd.val())){
            flag1 = true
          }
          if(flag&&flag1){
            register_btn.removeAttr('disabled')
            register_btn.css('background-color','red')
            register_btn.click(function () {
              _this.$store.dispatch('setUserInfo',`${phone_num.val()}&${pwd.val()}`)
              post(phone_num.val(),pwd.val())
              _this.$router.push({name: 'index'});
            })
            //
          }
        }
      })
    }
	}
	function ajax(val) {
    return _$.ajax({
      type: "POST",
      url: "http://localhost/yohoAPI/registered.php",
      data: `username=${val}`,
      async: false,
      success: function(msg){
      }
    })
  }
  function pwdStrgeth(val) {
    val = val.split('')
    for(let i = 'a';i < 'z' ;i++){
      if(val.includes(i)){}
    }
  }
  function post(val,val1) {
    _$.ajax({
      type: "POST",
      url: "http://localhost/yohoAPI/registered.php",
      data: `username=${val}&password=${val1}`,
      success: function(msg){
      }
    })
  }
</script>

<style lang="scss" scoped>
  .content {
    float: left;
    margin-top: 107px;
    padding-left: 85px;
    .register-page {
      color: #b9b9b9;
      font-size: 14px;
      .btn.disable {
        background-color: #555;
        cursor: default;
      }
      li {
        position: relative;
        margin-bottom: 25px;
        width: 270px;
        .input {
          padding: 0;
          width: 268px;
          height: 43px;
          border: 1px solid #dbdbdb;
          color: #9a9a9a;
          text-indent: 10px;
          font-size: 16px;
          line-height: 43px;
        }
        .region {
          padding: 4px 0;
          width: 132px;
          height: 30px;
          border-color: #c1c1c1;
          color: #9a9a9a;
          font-size: 16px;
          font-family: sans-serif;
          float: left;
          option {
            font-weight: normal;
            display: block;
            white-space: pre;
            min-height: 1.2em;
            padding: 0px 2px 1px;
          }
        }
        .country-code {
          display: block;
          float: left;
          width: 58px;
          height: 43px;
          border: 1px solid #dbdbdb;
          border-right: 0;
          text-align: center;
          white-space: nowrap;
          font-size: 16px;
          line-height: 43px;
        }
        .input.phone-num {
          position: absolute;
          top: 0;
          right: 0;
          display: block;
          width: 209px;
        }
        .btn {
          padding: 0;
          height: 45px;
          border: none;
          color: #fff;
          text-align: center;
          font-family: é»‘ä½“,sans-serif;
          line-height: 45px;
        }
        .send-captcha {
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          background: #ff1901;
          text-indent: 0;
          letter-spacing: 0;
          font-size: 12px;
        }
        .msg-tip {
          position: absolute;
          top: 17px;
          left: 285px;
          white-space: nowrap;
        }
        .pwd-intensity-container {
          overflow: hidden;
          margin-top: 5px;
          width: 270px;
          height: auto;
          text-align: right;
          .pwd-intensity {
            padding: 1px 10px;
            height: 15px;
            background-color: #e8e8e8;
            text-align: center;
            font-size: 12px;
          }
        }
        .register-btn {
          width: 270px;
          background: #ff1901;
          font-weight: 700;
          font-size: 20px;
          float: left;
          &:hover{
            cursor: pointer;
          }
        }
        .register-btn.disable {
          background: #555;
        }
        .pwd-tips {
          text-align: center;
            position: absolute;
            top: -10px;
            left: 285px;
            padding-top: 7px;
            width: 160px!important;
            height: 72px;
            border : 1px solid #d6dfec;
            font-size: 12px;
          div{
            position: relative;
            height: 22px;
            color: #b9b9b9;
            font-size: 12px;
            line-height: 22px;
          }

        }
      }
      #captcha-img{
        margin-bottom: 0;
      }
      li.w330 {
        width: 330px;
      }
      .img-check {
        margin-top: 25px;
        margin-bottom: 25px;
        width: 270px;
      }
      .img-check-header {
        font-size: 13px;
        line-height: 13px;
        text-align: left;
        margin-bottom: 10px;
        color: #b0b0b0;
      }
      .img-check-refresh {
        float: right;
        font-size: 13px;
        color: #ff1901;
        cursor: pointer;
      }
      .img-check-pics {
        display: inline-block;
        width: 270px;
        height: 62px;
        padding: 0;
        position: relative;
        li {
          float: left;
          background: hsla(0,0%,100%,0) no-repeat;
          width: 60px!important;
          height: 60px!important;
          margin-bottom: 0;
          border: 1px solid #e0e0e0;
          margin-right: 4px;
          cursor: pointer;
          overflow: hidden;
        }
      }
      .img-check-main .img-check-tip {
        display: inline-block;
        position: absolute;
        left: 0;
        top: 90px;
        font-size: 13px;
        line-height: 19px;
        height: 19px;
        color: red;
      }
      .hide {
        display: none!important;
      }
      .err-tip {
        position: absolute;
        z-index: 1000;
        padding: 0 10px;
        height: 30px;
        border: 1px solid #ffbdbe;
        background-color: #ffebeb;
        color: red;
        line-height: 30px;
      }
      .input.msg-captcha {
        float: left;
        width: 160px;
      }
      li.items-container{
        text-align: right;
        white-space: nowrap;
        font-size: 13px;
      }
      .link {
        color: #ff1901;
        text-decoration: underline;
      }
      .reg-btn-area {
        width: 340px;
      }
      .qrcode-hover-reg {
        float: left;
        margin-left: 10px;
        position: relative;
        width: 55px;
        .qrcode-reg {
          width: 45px;
          height: 45px;
          border: 1px solid #b0b0b0;
          box-sizing: border-box;
          text-align: center;
          display: inline-block;
          .qrcode-icon {
            width: 28px;
            height: 28px;
            display: inline-block;
            margin-top: 7px;
          }
        }
        .download-app-box {
          position: absolute;
          bottom: 0;
          left: 55px;
          width: 231px;
          height: 290px;
          background-color: #f8f8f8;
          z-index: 1000;
          display: none;
          border: 1px solid #b0b0b0;
          .qr-img {
            position: relative;
            margin: 32px auto 15px;
            width: 143px;
            height: 147px;
          }
          .qr-words {
            height: 25px;
            line-height: 25px;
            font-size: 16px;
            text-align: center;
            color: #000;
          }
          .qr-more {
            margin-top: 6px;
            line-height: 25px;
            font-size: 14px;
            text-align: center;
          }
        }
      }
      .err{
        border-color : red;
      }
      .error-info{
        position: absolute;
        right: -120px;
        width: fit-content;
        height: 45px;
        line-height: 45px;
        color: red;
      }
    }
  }
  input[type="hidden"], input[type="image"], input[type="file"] {
    -webkit-appearance: initial;
    background-color: initial;
    cursor: default;
    padding: initial;
    border: initial;
  }
  input[type="hidden"] {
    display: none;
  }
  input[type="checkbox"] {
    margin: 3px 3px 3px 4px;
  }
  input[type="checkbox"] {
    -webkit-appearance: checkbox;
    box-sizing: border-box;
  }
  input[type="radio"], input[type="checkbox"] {
    background-color: initial;
    cursor: default;
    margin: 3px 0.5ex;
    padding: initial;
    border: initial;
  }
  .pwd-intensity-container {
    padding-top: 5px;
    width: 270px;
    text-align: right;
    .pwd-intensity {
      padding: 0 10px;
      height: 15px;
      background-color: #e8e8e8;
      color: #b9b9b9;
      text-align: center;
      font-size: 12px;
    }
  }
</style>
