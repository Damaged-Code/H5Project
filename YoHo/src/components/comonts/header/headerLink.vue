<template>
  <section class="head-nav-link-main">
    <section class="head-nav-link clearfix">
      <ul is="headerLinkBoys"></ul>
      <ul is="headerLinkGirls"></ul>
      <ul is="headerLinkKids"></ul>
      <ul is="headerLinkLifeSty"></ul>
    </section>
  </section>
</template>

<script>
  import headerLinkBoys    from './headerLinkBoys'
  import headerLinkGirls   from './headerLinkGirls'
  import headerLinkKids    from './headerLinkKids'
  import headerLinkLifeSty from './headerLinkLifeSty'
	export default {
    components:{
      headerLinkBoys,
      headerLinkGirls,
      headerLinkKids,
      headerLinkLifeSty,
    }
	}
</script>

<style lang="scss" scoped>
  .head-nav-link-main{
    width: 100%;
    height: 40px;
    position: relative;
    background-color: #3a3a3a;
    .head-nav-link{
      margin: 0 auto;
      width: 1150px;
      height: 100%;
      background-color: #3a3a3a;
    }
  }
</style>
