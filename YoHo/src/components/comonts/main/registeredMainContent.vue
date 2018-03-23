<template>
  <div class="login-page passport-page yoho-page clearfix">
    <div style="font-size: 12px;text-align: center">
      <div style="display: inline-block;width: 990px; height: 25px; background-color: #f5f5f5; line-height: 25px; overflow: hidden; margin-top: 10px;">
        <i class="iconfont">&#xe958;</i>&nbsp;&nbsp;为保障账户安全与正常使用，依《网络安全法》相关要求，会员账号需绑定手机号。<span style="color: red;">如您尚未绑定手机号，请尽快完成，</span>感谢您对Yoho!Buy有货的理解与支持！
      </div>
    </div>
    <div is="passportCover"></div>
    <form is="registeredContent"></form>
  </div>
</template>

<script>
  import passportCover from './passportCover'
  import registeredContent from './registeredContent'
  export default {
    components:{
      passportCover,
      registeredContent,
    }
  }
</script>

<style lang="scss" scoped>
  .passport-page {
    margin-right: auto;
    margin-left: auto;
    width: 1150px;
  }
</style>
