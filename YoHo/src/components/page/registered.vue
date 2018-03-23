<template>
  <section class="Login">
    <section is="loginHeader"></section>
    <section is="registeredMainContent"></section>
    <footer is="footerContent"></footer>
  </section>
</template>

<script>
  import loginHeader from '../comonts/header/loginHeader'
  import footerContent from '../comonts/footer/footerContent'
  import registeredMainContent from '../comonts/main/registeredMainContent'
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
      registeredMainContent,
    }
	}
</script>

<style scoped>

</style>
