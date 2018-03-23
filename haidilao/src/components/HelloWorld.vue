<template>
  <section>
    <header is="carousel"></header>
    <main is="homeListView"></main>
    <footer is="footerNav"></footer>
  </section>
</template>

<script>
  import footerNav from './Footer'
  import carousel from './Carousel'
  import homeListView from './HomeListView'

  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',

      }
    },
    methods: {},
    components: {
      footerNav,
      carousel,
      homeListView
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
