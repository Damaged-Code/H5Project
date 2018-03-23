<template>
  <header id="header">
    <section is="headerTop"></section>
    <section is="headerBody"></section>
  </header>
</template>

<script>
  import headerTop  from './headerTop'
  import headerBody from './headerBody'
	export default {
    data(){
		  return{
      }
    },
    components:{
      headerTop,
      headerBody
    }
	}
</script>

<style lang="scss" scoped>

</style>
