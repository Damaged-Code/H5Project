<template>
  <section>
    <header class="clearfix">
      <section is="headerTop"></section>
    </header>
    <main class="clearfix">
      <section is="headerNav"></section>
      <section is="hotSongsMain"></section>
    </main>
  </section>
</template>

<script>
  import headerTop from './header/headerTop'
  import headerNav from './header/headerNav'
  import hotSongsMain from './main/hotSongsMain'
	export default {
    components:{
      headerTop,
      headerNav,
      hotSongsMain
    }
	}
</script>

<style scoped>

</style>
