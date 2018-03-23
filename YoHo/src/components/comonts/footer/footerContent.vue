<template>
  <footer class="yoho-footer" id="footer">
    <section class="footerbottom">
      <section is="footerPromise"></section>
      <section is="footerHelp"></section>
      <section is="footerLink"></section>
    </section>
    <section is="floatingLayer"></section>
  </footer>
</template>

<script>
  import footerHelp from './footerHelp'
  import footerLink from './footerLink'
  import footerPromise from './footerPromise'
  import floatingLayer from './floatingLayer'

	export default {
    components:{
      footerPromise,
      footerHelp,
      footerLink,
      floatingLayer,
    }
	}
</script>

<style lang="scss" scoped>
  .yoho-footer {
    * {
      box-sizing: border-box;
    }
    .left{
      float: left;
    }
    .right{
      float: right;
    }
    font-size: 12px;
    .footerbottom {
      width: 100%;
    }
  }
</style>
