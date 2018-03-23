<template>
	<section class="preference">
    <section class="floor-header clearfix">
      <h2 class="floor-title">优选品牌</h2>
    </section>
    <section class="preference-brand">
      <section is="imgBrand"></section>
      <section is="logoBrand"></section>
    </section>
  </section>
</template>

<script>
  import imgBrand from './imgBrand'
  import logoBrand from './logoBrand'
	export default {
    data(){
      return{
      }
    },

    components:{
      imgBrand,
      logoBrand
    }
  }

</script>

<style lang="scss" scoped>
  .preference-brand {
    overflow: hidden;
    a{
      display: block;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }


  }
</style>
