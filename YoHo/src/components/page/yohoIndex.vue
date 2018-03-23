<template>
    <section>
      <header is="headerContent"></header>
      <main>
        <section is="bannerContent"></section>
        <section is="mainContent"></section>
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
	export default {
    created () {
      this.$router.push({
        query:{
          t: +new Date()
        }
      })
      this.$store.dispatch('setTab', 'boys')
    },
    mounted () {
        let boys = _$('.boys'),
            girls = _$('.girls'),
            kids = _$('.kids'),
            life_sty = _$('.lief-sty'),
            cure = 0,
            head_nav_link_main = _$('.head-nav-link-main'),
            head_nav_link = _$('.head-nav-link'),
            search_btn = _$('.search-btn'),
            search_form = _$('.search-form'),
            go_cart = _$('.go-cart .iconfont'),
            styarr = [],
            tab_swi = [boys,girls,kids,life_sty],
            boysC = '#3a3a3a'
          removeAllClN(tab_swi,'cure')
          boys.addClass('cure')
          cure = _$('.cure')
        cure = _$('.cure')
        styarr = [cure,head_nav_link_main,head_nav_link,search_btn]
        setCss(styarr,'background-color',`${boysC}`)
        go_cart.css('color',`${boysC}`)
        search_form.css('border-color',`${boysC}`)
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
    },
	}
</script>

<style lang="scss" scoped>
</style>
