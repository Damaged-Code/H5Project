<template>
  <section>
    <header class="clearfix">
      <section is="headerTop"></section>
    </header>
    <main class="clearfix">
      <section is="headerNav"></section>
      <section is="indexMain"></section>
    </main>
  </section>
</template>

<script>
  import headerTop from './header/headerTop'
  import headerNav from './header/headerNav'
  import indexMain from './main/indexMain'
	export default {
    name:'Hello',
    components:{
      headerTop,
      headerNav,
      indexMain,
    }
	}
</script>

<style scoped lang="scss">
header{
  height: 5.3rem;
}
</style>
