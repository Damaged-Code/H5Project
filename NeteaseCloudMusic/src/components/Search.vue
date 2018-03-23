<template>
  <section>
    <header class="clearfix">
      <section is="headerTop"></section>
    </header>
    <main class="clearfix">
      <section is="headerNav"></section>
      <section is="searchMain"></section>
    </main>
  </section>
</template>

<script>
  import headerTop from './header/headerTop'
  import headerNav from './header/headerNav'
  import searchMain from './main/searchMain'
	export default {
    components:{
      headerTop,
      headerNav,
      searchMain
    }
	}
</script>

<style scoped>

</style>
