<template>
  <section>
    <header is="headerContent"></header>
    <main>
      <section is="bannerContent"></section>
      <section is="girlsMainContent"></section>
    </main>
    <footer is="footerContent">
    </footer>
  </section>
</template>

<script>
  import bannerContent from '../comonts/banner/bannerContent'
  import headerContent from '../comonts/header/headerContent'
  import footerContent from '../comonts/footer/footerContent'
  import _$            from 'jquery'
  import girlsMainContent from '../comonts/main/girlsMainContent'
  export default {
    created:function () {
      this.$router.push({
        query:{
          t: +new Date()
        }
      })
      this.$store.dispatch('setTab','girls')
    },
    mounted:function () {
        let boys = _$('.boys'),
            girls = _$('.girls'),
            kids = _$('.kids'),
            cure = 0,
            life_sty = _$('.lief-sty'),
            tab_swi = [boys,girls,kids,life_sty],
            head_nav_link_main = _$('.head-nav-link-main'),
            head_nav_link = _$('.head-nav-link'),
            search_btn = _$('.search-btn'),
            search_form = _$('.search-form'),
            go_cart = _$('.go-cart .iconfont'),
            styarr = [],
            girlsC = '#ff88ae'

        removeAllClN(tab_swi,'cure')
        girls.addClass('cure')
        cure = _$('.cure')
        styarr = [cure,head_nav_link_main,head_nav_link,search_btn]
        setCss(styarr,'background-color',`${girlsC}`)
        go_cart.css('color',`${girlsC}`)
        search_form.css('border-color',`${girlsC}`)
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
      girlsMainContent,
      footerContent,
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
