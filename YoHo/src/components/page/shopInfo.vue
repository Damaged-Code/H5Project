<template>
  <section>
    <header is="headerContent"></header>
    <main is="shopInfoContent">

    </main>
    <footer is="footerContent">
    </footer>
  </section>
</template>

<script>
  import headerContent from '../comonts/header/headerContent'
  import footerContent from '../comonts/footer/footerContent'
  import shopInfoContent from '../comonts/main/shopInfoContent'
	export default {
		created(){
      this.$router.push({
        query:{
          t: +new Date()
        }
      })
    },
    components: {
      headerContent,
      footerContent,
      shopInfoContent,
    },
	}
</script>

<style scoped>

</style>
