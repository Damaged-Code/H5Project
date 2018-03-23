<template>
  <section class="promise">
    <div class="center-content clearfix">
      <div class="left">
        <i class="iconfont rgbf">&#xe62e;</i>
        <span class="red">100%</span>
        <span class="rgbf">品牌正品</span>
      </div>
      <div class="left">
        <i class="iconfont rgbf">&#xe65b;</i>
        <span class="red">7天</span>
        <span class="rgbf">无理由退换货</span>
      </div>
      <div class="left">
        <i class="iconfont rgbf">&#xe6ca;</i>
        <a href="//www.yohobuy.com/service/client" target="_blank" rel="nofollow">
          <span class="red">便捷</span>
          <span class="rgbf">在线客服</span>
        </a>
      </div>
      <div class="right subscribe footer-right">
        <input id="subscriber-box" class="rgb6 top" name="subscriberBox" value="订阅我们的邮件">
        <a id="subscriber-btn" href="javascript:void(0);" class="iconfont rgbf"></a>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
	}
</script>

<style lang="scss" scoped>
  .promise {
    padding: 20px 0 10px;
    background: #000;
    .red {
      color: #e01;
    }
    .rgbf {
      color: #fff;
    }
    .rgb6 {
      color: #666;
    }
    .center-content {
      width: 1150px;
      margin-left: auto;
      margin-right: auto;
      .left:first-child .iconfont {
        font-size: 27px;
      }
      .left {
        margin-right: 60px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 700;
        .iconfont {
          display: inline-block;
          font-weight: 400;
          font-size: 22px;
          vertical-align: top;
          margin-right: 5px;
          line-height: 0;
        }
      }
      .subscribe {
        border: 1px solid #262626;
        width: 240px;
        input {
          width: 180px;
          height: 32px;
          padding: 0 10px;
          line-height: 32px;
          border: none;
          margin: 0;
          background: #000;
        }
        a {
          display: block;
          float: right;
          margin-right: 20px;
          font-size: 20px;
          line-height: 28px;
          opacity: .5;
        }
      }
      .right{
        float: right;
      }
    }
  }
</style>
