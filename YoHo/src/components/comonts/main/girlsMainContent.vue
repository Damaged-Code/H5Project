<template>
  <section class="main home-page" id="main">
    <section is="preferenceBrand"></section>
    <section is="tplRecommend"></section>
    <section is="tplRecommend"></section>
    <section is="tplRecommend"></section>
    <section is="tplRecommend"></section>
    <section is="commodity"></section>
    <section is="commodity"></section>
  </section>
</template>

<script>
  import commodity from './commodity'
  import tplRecommend from './tplRecommend'
  import preferenceBrand from './preferenceBrand'

  export default {
    components:{
      commodity,
      tplRecommend,
      preferenceBrand,
    },
    mounted(){
      let loading_btn = _$('.loading'),
          tpl_keywords = _$('.tpl-keywords'),
          tpl_products = _$('.tpl-products')
      setCss(loading_btn.eq(0),'display','none')
      setCss(tpl_products,'display','none')
      addChild(tpl_keywords,`<a class="keywords2" href="">
            <img class="lazy" lazy="" src="" alt="">
          </a>`)
    }
  }
  function setCss(tag,attr,value) {
    tag.css(attr,value)
  }
  function addChild(tag,child) {
    tag.append(child)
  }
</script>

<style lang="scss" scoped>
</style>
