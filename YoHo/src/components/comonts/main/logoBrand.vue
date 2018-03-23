<template>
  <section class="logo-brand imgopacity logos-16" v-if="isStar">
    <ul class="swiper-container clearfix" is="swiper" :options="swiperOption2" ref="logoBrandSwiper">
      <li class="swiper-slide" v-for="(item,index) in ImgUrl1" is="swiperSlide" :key="index">
        <a href="">
          <img class="swiper-lazy" :data-src="item" alt="">
          <div class="swiper-lazy-preloader"></div>
        </a>
      </li>
    </ul>
    <section class="logo-brand-switch">
      <div class="swiper-button-prev2 swiper-btn">
        <i class="iconfont">&#xe67c;</i>
      </div>
      <div class="swiper-button-next2 swiper-btn">
        <i class="iconfont">&#xe641;</i>
      </div>
    </section>
    <div class="logo-brand-more"><a href="javascript:;">MORE ></a></div>
  </section>
</template>

<script>
  import axios from 'axios'
  import { swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    data(){
      return{
        ImgUrl: 0,
        ImgUrl1: 0,
        ImgUrl2: 0,
        isStar: false,
        swiperOption2: {
          notNextTick: true,
          slidesPerView: 6,//一行显示两个
          slidesPerColumn: 3,//显示两行
          slidesPerGroup : 6,
          slidesPerColumnFill : 'row',
          centeredSlides : false,
          loop:true,
          setWrapperSize :true,
          allowTouchMove: false,
          watchOverflow: true,
          navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
          },
          observeParents:true,
          updateOnImagesReady : true,
          lazy: {
            loadPrevNext: true,
          },
          watchSlidesVisibility : true,
        }
      }
    },
    computed  : {
      swiper() {
        return this.$refs.logoBrandSwiper.swiper
      }
    },
    mounted(){
      let Who = this.$store.getters.tabChoose.tab,
          _this     = this,
          ImgUrlData    = 0,
          logo_brand = _$('.logo-brand'),
          errorData = 0,
          UrlData = 0,
          params    = new URLSearchParams();
      params.append('Who', Who);
     /* if(Who !== 'boys'){
        logo_brand.removeClass('girls-brand kids-brand lifeSty-brand')
        logo_brand.addClass(`${Who}-brand`)
      }
      else {
        logo_brand.removeClass('girls-brand kids-brand lifeSty-brand')
      }*/
      axios.post("http://localhost/yohoAPI/indexImgUrl",params).then(function (response) {
        ImgUrlData = response.data
        UrlData = JSON.parse(JSON.parse(ImgUrlData[1]['popularBrand']))
        _this.ImgUrl = UrlData[`${Who}_imgUrl`]
        _this.ImgUrl1 = [...UrlData[`${Who}_imgUrl1`],...UrlData[`${Who}_imgUrl2`]]
        _this.isStar = true
      }).catch(function (error) {
        errorData = error
        console.log(error)
        _this.isStar = false
      })
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="scss" scoped>
  .logo-brand {
    width: 100%;
    height: 282px;
    overflow: hidden;
    position: relative;
    .swiper-container {
      width: 1158px;
      .swiper-slide {
        float: left;
        width: 185px;
        height: 86px;
        line-height: 86px;
        font-size: 0;
        text-align: center;
        margin: 8px 0;
        a{
          &:hover{
            opacity: .7;
          }
        }
        img {
          max-width: 100%;
          max-height: 100%;
          vertical-align: middle;
        }
      }
    }
    .swiper-lazy-preloader{
      width: 185px;
      height: 86px;
      background-color: #e3e3e3;
      margin: 8px 4px;
    }
    .logo-brand-switch{
      position: absolute;
      top : 8px;
      right: 0;
      width: 185px;
      height: 86px;
      background: url("https://s1.ax2x.com/2018/02/01/hBNUe.png") no-repeat 50%;
      background-color: white;
      line-height: normal;
      .iconfont{
        font-size: 32px;
      }
      .swiper-btn{
        position: absolute;
        top : 20px;
        left: 36px;
        z-index: 5;
        &:hover{
          cursor: pointer;
        }
      }
      .swiper-button-next2{
        left: unset;
        top : 46px;
        right: 36px;
      }
    }
    .logo-brand-more{
      position: absolute;
      top : 196px;
      right: 0;
      width: 185px;
      height: 86px;
      font-size: 16px;
      background-color: white;
      line-height: 86px;
      a{
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
</style>
