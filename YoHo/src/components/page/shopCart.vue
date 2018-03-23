<template>
  <section id="shopCart">
    <section is="loginHeader"></section>
    <section is="shopCartContent"></section>
    <section is="footerContent"></section>
  </section>
</template>

<script>
  import loginHeader from '../comonts/header/loginHeader'
  import footerContent from '../comonts/footer/footerContent'
  import shopCartContent from '../comonts/main/shopCartContent'
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
      shopCartContent,
    }
  }
</script>

<style scoped>

</style>
