<template>
	<section class="code-down-box">
    <section class="code-img"></section>
    <h5 class="code-title">下载手机客户端</h5>
    <i class="iconfont icon-del">&#xe685;</i>
  </section>
</template>

<script>
  import _$ from 'jquery'
	export default {
	  mounted(){
      _$(function () {
        let icon_del = _$('.icon-del'),
            code_down_box = _$('.code-down-box')
        icon_del.click(function () {
          code_down_box.hide()
        })
      })
    }
	}
</script>

<style lang="scss" scoped>
  .code-down-box {
    position: fixed;
    top: 260px;
    right: 20px;
    width: 117px;
    height: 216px;
    border: none;
    background-color: transparent;
    z-index: 990;
    display: block;
    .code-img {
      width: 117px;
      height: 192px;
      background-image: url("//s1.ax2x.com/2018/02/01/hBfiY.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .code-title {
      color: #000;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
    .icon-del {
      position: absolute;
      top: -13px;
      right: -10px;
      display: inline-block;
      font-size: 30px;
      cursor: pointer;
    }
  }
</style>
