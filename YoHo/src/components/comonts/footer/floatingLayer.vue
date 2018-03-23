<template>
  <section>
    <div class="right-floating-layer min">
      <div class="qrcode-hover-box">
        <a class="layer-box qrcode-download-right" href="javascript:void(0);" target="_blank">
          <span class="qrcode-img">&nbsp;</span>
        </a>
        <div class="download-app-box">
          <div class="download-app-left">
            <div class="qr-code-img we-chat-code">
              <img src="//img12.static.yhbimg.com/evidenceImages/2017/11/14/10/02c21ad1b55c13f8bcd9ae5b643c3c2374.png">
            </div>
            <h5 class="qr-words">微信扫一扫</h5>
            <h5 class="qr-words">关注公众号，赢免单</h5>
          </div>
          <div class="download-app-right">
            <div class="qr-code-img mobile-code">
              <img src="//img11.static.yhbimg.com/evidenceImages/2017/11/14/10/01dce3f4c011e664dcfed9cd836377aeb7.png">
            </div>
            <h5 class="qr-words">下载手机客户端</h5>
            <h5 class="qr-words qr-more">
              <a href="javascript:void(0);" target="_blank">更多客户端下载</a>
            </h5>
          </div>
        </div>
      </div>
      <div class="layer-box return-top">
        <i class="iconfont">&#xe62c;</i>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
	  mounted(){
	    let doc = _$('body'),
          right_floating_layer = _$('.right-floating-layer'),
          layer_box = _$('.layer-box')
      doc.scroll(function () {
        if(doc.scrollTop() > 100){
          right_floating_layer.css('opacity',1)
        }else {
          right_floating_layer.css('opacity',0)
        }
      })
      layer_box.click(function () {
        _$('body,html').animate({"scrollTop":0})
      })
    }
	}
</script>

<style lang="scss" scoped>
  .right-floating-layer.min {
    left: 100%;
    right: 20px;
    margin-left: auto;
  }
  .right-floating-layer {
    position: fixed;
    left: 50%;
    bottom: 20px;
    margin-left: 595px;
    z-index: 4;
    width: 60px;
    opacity: 0;
    transition: opacity .5s;
    .layer-box {
      position: relative;
      left: -11px;
      height: 60px;
      text-align: center;
      line-height: 50px;
      color: #fff;
      background: #000;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
      opacity: .5;
      cursor: pointer;
      margin-top: 20px;
      &:hover{
        opacity : 1;

      }
      .iconfont{
        font-size: 32px;
        line-height: 32px;
      }
    }

    .qrcode-hover-box {
      width: 71px;
      position: relative;
      left: -11px;
      text-align: right;
      &:hover{
        .download-app-box{
          display: block;
        }
      }
      .layer-box:first-child {
        margin-top: 0;
        display: block;
        width: 60px;
        left: 0;
      }
      .qrcode-img {
        display: inline-block;
      }
      .qrcode-download-right{
        .qrcode-img {
          width: 28px;
          height: 28px;
          background-image: url("https://");
          background-position: -71px 0;
          background-size: 123px 122px;
          margin-top: 16px;

        }
      }
      .download-app-box {
        position: absolute;
        bottom: -80px;
        left: -286px;
        width: 296px;
        height: 180px;
        padding-left: 6px;
        padding-right: 6px;
        background-color: transparent;
        z-index: 1000;
        display: none;
        border: none;
        zoom: 1;
        .qr-code-img {
          margin: 10px auto;
          width: 96px;
          height: 96px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .qr-words {
          height: 18px;
          line-height: 18px;
          font-size: 12px;
          text-align: center;
          color: #000;
        }
        .download-app-left,.download-app-right{
          position: relative;
          float: left;
          width: 130px;
          height: 180px;
          padding-top: 10px;
          text-align: center;
          background-color: #f4f4f4;
        }
      }
    }
  }
</style>
