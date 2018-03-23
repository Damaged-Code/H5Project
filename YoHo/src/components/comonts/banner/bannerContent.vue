<template>
  <section class="banner swiper swiper-thumb-container" id="banner">
    <div class="swiper-container" is="swiper" :options="swiperOption" ref="mySwiper" v-if="isStar">
      <div class="swiper-slide" v-for="(item,index) in bigImgUrl" :key="index" is="swiperSlide">
            <a href="javascript:void(0)">
              <img :src="item" alt="">
            </a>
      </div>
      </div>
      <div class="swiper-pagination" >
      </div>
      <div class="swiper-button-prev swiper-btn">
        <i class="iconfont">&#xe67c;</i>
      </div>
      <div class="swiper-button-next swiper-btn">
        <i class="iconfont">&#xe641;</i>
      </div>

  </section>
</template>

<script>
  import axios from 'axios'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
    data(){
      return{
        bannerImgUrl : 0,
        bigImgUrl: 0,
        smallImgUrl: 0,
        isStar: false,
        isHasSmall: false,
        swiperOption: {
          notNextTick: true,
          slidesPerGroup : 1,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          loop : true,
          grabCursor : true,
          setWrapperSize :true,
          width: 1150,
          allowTouchMove: false,
          effect : 'fade',
          fadeEffect: {
            crossFade: true,
          },
          watchOverflow: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable :true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          updateOnImagesReady : true,
          observeParents:true,
          watchSlidesVisibility : true,
        }
      }
    },
    computed  : {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      let bannerWho    = this.$store.getters.tabChoose.tab,
          _this        = this,
          bannerImgUrl = 0,
          errorData    = 0,
          params       = new URLSearchParams();
      params.append('bannerWho', bannerWho);
      setTimeout(()=>{
        for (let i = 0; i < _this.swiper.pagination.bullets.length; i++) {
          _this.swiper.pagination.bullets[i].index = i+1
          _this.swiper.pagination.bullets[i].onmouseover = function () {
            _this.swiper.slideTo(this.index);
          };
        }
      },100)
      axios.post('http://localhost/yohoAPI/bannerImgUrl.php', params).then(function (response) {
        bannerImgUrl = response.data
        if (bannerWho === 'boys') {
          bannerImgUrl = splitImgUrl(bannerImgUrl)
          _this.bigImgUrl = bannerImgUrl[0]
          _this.smallImgUrl = bannerImgUrl[1]
          _this.isHasSmall = true
          _this.isStar = true
        }
        else {
          _this.bigImgUrl = bannerImgUrl
          _this.isStar = true
          _this.isHasSmall = false
        }
      }).catch(function (error) {
        errorData = error
      });
    },
    components: {
      swiper,
      swiperSlide,
    }
	}
	function splitImgUrl(bannerImgUrl) {
    let samll = [],
        big = []
    for(let url in bannerImgUrl){
      if(url.substr(0,url.length-1) === 'bigImgUrl'){
        big.push(bannerImgUrl[url])
      }
      else {
        samll.push(bannerImgUrl[url])
      }
    }
    return [big,samll]
  }
</script>

<style lang="scss" scoped>
  #banner{
    position: relative;
    margin-top: 10px;
    height: 450px;
    .swiper-container {
      position: absolute;
      left: 0;
      right: 0;
      height: 450px;
      overflow: hidden;
      .swiper-wrapper {
        position: relative;
        width: 1150px;
        height: 450px;
        overflow: hidden;
        .swiper-slide{
          float: left;
        }
        a{
          display: block;
          width: fit-content;
          margin: 0 auto;
        }

      }
    }
    .swiper-pagination{
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 20px;
      width: fit-content;
      height: fit-content;
      background: #000;
      opacity: .3;
      border-radius: 13px;
      z-index: 66;
      &:hover{
        cursor: default;
        opacity: .7;
      }
    }
    .swiper-btn{
      position: absolute;
      top: 50%;
      margin: -30px 0 0;
      width: 60px;
      height: 60px;
      line-height: 56px;
      text-align: center;
      z-index: 2;
      background: #fff;
      opacity: .55;
      .iconfont{
        font-size: 32px;
        color: #59585a;
        line-height: 32px;
      }
      &:hover{
        cursor: pointer;
        opacity: .9;
      }
    }
    .swiper-button-next{
      right: 0;
    }
  }

</style>
