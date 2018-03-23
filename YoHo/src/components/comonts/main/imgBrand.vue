<template>
	<section class="img-brand" >
      <div class="img-list swiper-container imgopacity clearfix " is="swiper" ref="brandSwiper" :options="swiperOption1" v-if="isStar">
        <div class="swiper-slide" v-for="(item,index) in ImgUrl" :key="index" is="swiperSlide">
          <a href="">
            <img class="swiper-lazy" :data-src="item" alt="">
          </a>
        </div>
      </div>
      <div class="swiper-button-prev1 swiper-btn">
        <i class="iconfont">&#xe67c;</i>
      </div>
      <div class="swiper-button-next1 swiper-btn">
        <i class="iconfont">&#xe641;</i>
      </div>
    </section>
</template>

<script>
  import axios from 'axios'
  import { swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    data(){
      return{
        UrlData:0,
        ImgUrl: 0,
        ImgUrl1: 0,
        ImgUrl2: 0,
        isStar: false,
        swiperOption1: {
          notNextTick: true,
          slidesPerView : 3,
          slidesPerGroup : 3,
          spaceBetween : 8,
          centeredSlides : false,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          loop : true,
          setWrapperSize :true,
          allowTouchMove: false,
          watchOverflow: true,
          navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
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
        return this.$refs.brandSwiper.swiper
      }
    },
    mounted(){
      let Who = this.$store.getters.tabChoose.tab,
          _this     = this,
          ImgUrlData    = 0,
          img_brand = _$('.img-brand'),
          errorData = 0,
          params    = new URLSearchParams();
      params.append('Who', Who);
      if(Who !== 'boys'){
        img_brand.removeClass('girls-brand kids-brand lifeSty-brand')
        img_brand.addClass(`${Who}-brand`)
      }
      else {
        img_brand.removeClass('girls-brand kids-brand lifeSty-brand')
      }
      axios.post("http://localhost/yohoAPI/indexImgUrl",params).then(function (response) {
        ImgUrlData = response.data
        _this.UrlData = JSON.parse(JSON.parse(ImgUrlData[1]['popularBrand']))
        _this.ImgUrl = _this.UrlData[`${Who}_imgUrl`]
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
  .swiper-btn{
    position: absolute;
    top: 50%;
    margin: -20px 0 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    z-index: 2;
    background: #fff;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=55)";
    opacity: .55;
    display: none;
    &:hover{
      cursor: pointer;
      opacity: .9;
    }
  }
  .swiper-button-next1{
    right: 0;
  }
  .swiper-container {
    position: relative;
    .swiper-wrapper {
      position: relative;
    }
  }
  .img-brand {
    position: relative;
    height: 175px;
    overflow: hidden;
    &:hover{
      .swiper-btn{
        display: block;
      }
    }
    .swiper-slide{
      float: left;
      width: 378px!important;
      height: 175px;
      line-height: 175px;
      overflow: hidden;
      font-size: 0;
      text-align: center;
      a{
        &:hover{
          opacity: .7;
        }
      }
    }
  }
  .img-brand.girls-brand,.img-brand.kids-brand,.img-brand.lifeSty-brand{
    position: relative;
    width: 100%;
    height: 558px;
    background-color: #8ae6e0;
    overflow: hidden;
    .swiper-container{
      box-sizing: border-box;
      margin: 86px auto 0;
      width: 980px;
      height: 433px;
      overflow: hidden;
    }
    /**/
    .swiper-slide{
      width: 320px!important;
      height: 100%;
      margin-right: 9px!important;
    }
    .swiper-btn{
      left: 30px;
      background-color: transparent;
      color: white;
      opacity: 1;
      .iconfont{
        font-size: 32px;
      }
    }
    .swiper-button-next1{
      left: unset;
      right: 30px;
    }
  }
</style>
