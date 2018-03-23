<template>
  <section class="Login">
    <section is="loginHeader"></section>
    <section is="loginMainContent"></section>
    <footer is="footerContent"></footer>
  </section>
</template>

<script>
  import loginHeader from '../comonts/header/loginHeader'
  import loginMainContent from '../comonts/main/loginMainContent'
  import footerContent from '../comonts/footer/footerContent'
	export default {
    created(){
      this.$router.push({
        query:{
          t: +new Date()
        }
      })
    },
		components:{
      loginHeader,
      footerContent,
      loginMainContent,
    }
	}
</script>

<style lang="scss" scoped>

</style>
