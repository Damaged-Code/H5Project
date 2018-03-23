<template>
  <section class="main home-page" id="main">
    <section class="singlehot clearfix">
      <section class="floor-header clearfix">
        <h2 class="floor-title">人气单品</h2>
      </section>
        <ul class="g-list imgopacity">
            <li v-for="(item,index) in singlehotImgUrl" :key="index">
                <a class="impo0" href="">
                    <img class="lazy" v-lazy="item" alt="">
                </a>
            </li>
        </ul>
    </section>
    <section class="floor-ad">
      <a href="">
            <img class="lazy" v-lazy="floor_adImgUrl" alt="">
        </a>
    </section>
    <section is="preferenceBrand"></section>
    <section is="tplRecommend"></section>
    <section is="tplRecommend"></section>
    <section is="tplRecommend"></section>
    <section is="commodity"></section>
  </section>
</template>

<script>
  import commodity       from './commodity'
  import tplRecommend    from './tplRecommend'
  import preferenceBrand from './preferenceBrand'
  import axios from 'axios'

  export default {
    data(){
      return{
        singlehotImgUrl: 0,
        floor_adImgUrl: 0,
      }
    },
    components: {
      commodity,
      tplRecommend,
      preferenceBrand,
    },
    mounted() {
      let Who = this.$store.getters.tabChoose.tab,
          _this     = this,
          ImgUrlData    = 0,
          temp = 0,
          errorData = 0,
          userInfo = this.$store.getters.userInfo.user_Info,
          params    = new URLSearchParams();
      params.append('Who', Who);
      axios.post("http://localhost/yohoAPI/indexImgUrl",params).then(function (response) {
        //console.log(response.data)
        ImgUrlData = response.data
        _this.singlehotImgUrl = singlehot(ImgUrlData[0])
        temp = JSON.parse(ImgUrlData[1]['popularBrand'])
        temp = JSON.parse(temp)
        _this.floor_adImgUrl = _this.singlehotImgUrl.pop()
      }).catch(function (error) {
        errorData = error
        console.log(error)
      })
    },
  }
  function singlehot(Data) {
    let data = JSON.parse(Data['popularItem'])
      data = JSON.parse(data)['boys_imgUrl']
    return data
  }
</script>

<style lang="scss" scoped>
  .main {
    .singlehot {
      overflow    : hidden;
      margin-left : -8px;
      li {
        margin-left   : 8px;
        margin-bottom : 8px;
        a {
          &:hover{
            opacity: .8;
          }
        }
      }
      li:nth-of-type(2), li:nth-of-type(10){
        a{
          width : 378px;
        }

      }
      .g-list li {
        float : left;
        a {
          overflow : hidden;
          img, .g-mask {
            width  : 100%;
            height : 100%;
            border: 0;
          }
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .floor-ad{
    img {
      width: 100%;
      height: 100%;
    }
  }
  a {
    position : relative;
    display: block;
    min-width: 185px;
    height: 248px;
    background-color : #e2e2e2;
  }
</style>
