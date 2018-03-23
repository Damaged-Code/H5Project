<template>
  <section>
    <header is="headerContent"></header>
    <main is="productContent">

    </main>
    <footer is="footerContent">
    </footer>
  </section>
</template>

<script>
  import headerContent from '../comonts/header/headerContent'
  import footerContent from '../comonts/footer/footerContent'
  import productContent from '../comonts/main/productContent'
	export default {
    created () {
      this.$router.push({
        query:{
          t: +new Date()
        }
      })
    },
    components: {
      headerContent,
      footerContent,
      productContent,
    },
	}
</script>

<style scoped>

</style>
