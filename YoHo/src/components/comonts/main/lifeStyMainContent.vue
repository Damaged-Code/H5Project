<template>
<section class="main home-page" id="main">
  <section is="preferenceBrand"></section>
  <section is="categorysList"></section>
  <section is="categorysList"></section>
  <section is="categorysList"></section>
  <section is="categorysList"></section>
  <section is="commodity"></section>
  <section is="commodity"></section>
</section>
</template>

<script>
  import commodity from './commodity'
  import tplRecommend from './tplRecommend'
  import preferenceBrand from './preferenceBrand'
  import categorysList from './categorysList'
  export default {
    components:{
      commodity,
      tplRecommend,
      preferenceBrand,
      categorysList,
    },
    mounted(){
      let loading_btn = _$('.loading')
      setCss(loading_btn.eq(0),'display','none')
    }
  }
  function setCss(tag,attr,value) {
    tag.css(attr,value)
  }
</script>

<style scoped>

</style>
