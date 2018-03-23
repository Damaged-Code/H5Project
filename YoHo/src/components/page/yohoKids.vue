<template>
  <section>
    <header is="headerContent"></header>
    <main>
      <section is="bannerContent"></section>
      <section is="kidsMainContent"></section>
    </main>
    <footer is="footerContent">
    </footer>
  </section>
</template>

<script>
  import bannerContent from '../comonts/banner/bannerContent'
  import headerContent from '../comonts/header/headerContent'
  import footerContent from '../comonts/footer/footerContent'
  import kidsMainContent from '../comonts/main/kidsMainContent'
  import _$            from 'jquery'
  export default {
    created:function () {
      this.$router.push({
        query:{
          t: +new Date()
        }
      })
      this.$store.dispatch('setTab','kids')
    },
    mounted:function () {
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
          kidsC = '#7bd3f9'
      removeAllClN(tab_swi,'cure')
      singlehot.css('display','none')
      floor_ad.css('display','none')
      kids.addClass('cure')
      cure = _$('.cure')
      styarr = [cure,head_nav_link_main,head_nav_link,search_btn]
      setCss(styarr,'background-color',`${kidsC}`)
      go_cart.css('color',`${kidsC}`)
      search_form.css('border-color',`${kidsC}`)
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
      headerContent,
      footerContent,
      kidsMainContent,
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
