<template>
  <section>
    <header is="headerContent"></header>
    <main>
      <section is="bannerContent"></section>
      <section is="lifeStyMainContent"></section>
    </main>
    <footer is="footerContent">
    </footer>
  </section>
</template>

<script>
  import bannerContent from '../comonts/banner/bannerContent'
  import mainContent   from '../comonts/main/mainContent'
  import headerContent from '../comonts/header/headerContent'
  import footerContent from '../comonts/footer/footerContent'
  import lifeStyMainContent from '../comonts/main/lifeStyMainContent'
  import _$            from 'jquery'
  export default {
    created:function () {
      this.$router.push({
        query:{
          t: +new Date()
        }
      })
      this.$store.dispatch('setTab','lifeSty')
    },
    mounted () {

      let boys = _$('.boys'),
          girls = _$('.girls'),
          kids = _$('.kids'),
          life_sty = _$('.lief-sty'),
          singlehot = _$('.singlehot'),
          floor_ad = _$('.floor-ad'),
          cure = 0,
          head_nav_link_main = _$('.head-nav-link-main'),
          head_nav_link = _$('.head-nav-link'),
          search_btn = _$('.search-btn'),
          search_form = _$('.search-form'),
          go_cart = _$('.go-cart .iconfont'),
          styarr = [],
          tab_swi = [boys,girls,kids,life_sty],
          life_styC = '#5e4b3c'
      removeAllClN(tab_swi,'cure')
      life_sty.addClass('cure')
      singlehot.css('display','none')
      floor_ad.css('display','none')
      cure = _$('.cure')
      styarr = [cure,head_nav_link_main,head_nav_link,search_btn]
      setCss(styarr,'background-color',`${life_styC}`)
      go_cart.css('color',`${life_styC}`)
      search_form.css('border-color',`${life_styC}`)
      function removeAllClN(tag,cln) {
        for(let el of tag){
          el.removeClass(cln)
        }
      }
      function setCss(tag,attr,sty) {
        for(let el of tag){
          el.css(attr,sty)
        }
      }
    },
    components: {
      bannerContent,
      mainContent,
      headerContent,
      footerContent,
      lifeStyMainContent,
    }
  }
</script>

<style lang="scss" scoped>
  #main{
    .singlehot{
      display: none!important;
    }
  }
</style>
