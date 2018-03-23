<template>
  <section id="j-app" class="u-height">
    <section class="m-newsong" id="j-songwrap">
      <div class="wrapper" v-if="!show">
        <div class="rubik-loader"></div>
      </div>
      <section class="m-song-bg" v-if="show">
        <section class="mark"></section>
        <img :src = "bg_img" alt = "">
      </section>
      <section class="m-scroll_wrapper m-song_nor j-songsrl">
        <section class="m-scroll_scroller m-scroll_scroller_vertical">
          <section class="m-song_newfst">
            <span class="m-logo"></span>
            <div class="m-song-wrap">
              <div class="m-song-disc">
                <div class="m-song-turn ">
                  <div class="m-song-rollwrap">
                    <div class="m-song-img a-circling">
                      <img class="u-img" :src = "bg_img" alt = "">
                    </div>
                  </div>
                </div>
              </div>
              <div class="m-song-clickarea"></div>
            </div>
            <div class="m-song-info">
              <h2 class="m-song-h2">
                <span class="m-song-sname">{{name}}</span>
                <span class="m-song-gap">-</span>
                <span class="m-song-autr f-hide" v-for="item in author" :key="item.id">
                  <span>{{item.name}}/</span>
                </span>
              </h2>
              <div class="m-song-lrc f-pr">
                <div class="m-song-scroll" style="height: 88px">
                  <div class="m-song-iner" v-for="item in gc" :key="item.id">
                    <p class="m-song-lritem j-lritem f-hide">{{item}}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section is="discussMain"></section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
 import discussMain from '../other/discussMain'
	export default {
    data(){
      return{
        bg_img:'http://s3.music.126.net/m/s/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862',
        show:false,
        lyric:[],
        author:[],
        gc:[],
        name:0,
        musicUrl:''
      }
    },
    mounted(){
      let
        id = this.$route.params.songId,
        url = 'http://localhost:3005/song/detail',
        data = 0,
        _this = this,
        lrc = 0,
        reg = /\[\d{2}:\d{2}\.\d{2}\]/g,
        regGc = /[a-zA-Z|\u4e00-\u9fa5]+\s?\:?[a-zA-Z|\u4e00-\u9fa5]*[a-zA-Z|\u4e00-\u9fa5]*~?\s*[a-zA-Z|\u4e00-\u9fa5]*/g,
        gc = [],
        author = 0,
        time= 0
      _this.musicUrl = `http://music.163.com/song/media/outer/url?id=${id}.mp3`
      this.$http({
        method:'get',
        withCredentials: true,
        url:url,
        params:{ids:id}
                 })
          .then(async function (res) {
            data = await res.data.songs[0]
            _this.bg_img = data.al.picUrl
            _this.show = true
            _this.author = data.ar
            _this.name = data.name
            //console.log(data)
          })
          .catch(function (err) {
            console.log(err)
          })
      this.$http({method:'get',
                   withCredentials: true,
                   url:`http://localhost:3005/lyric`,
                   params:{id:id}})
        .then(function (res) {
          lrc = res.data.lrc.lyric
          time = lrc.match(reg)
          _this.gc = lrc.match(regGc)
        })
        .catch(function (err) {
          console.log(err)
        })
      this.$http({
                   method:'get',
                   withCredentials: true,
                   url:'http://localhost:3005/music/url',
                   params:{id:id}
                 })
        .then(function (res) {
          //_this.musicUrl = res.data.data[0].url
         // console.log(musicUrl)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    components:{
      discussMain
    }
	}
</script>

<style scoped lang='scss'>
  body,html{
    overflow-y: scroll;
  }
  #j-songwrap{
    width: 100%;
    min-height: 100%;
    overflow-x:hidden ;
    overflow-y: scroll;
    position: relative;
  }
  .u-height {
    width: 100%;
    min-height: 100%;
    overflow-x:hidden ;
    overflow-y: scroll;
    position: relative;
    .wrapper{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      margin: auto;
      .rubik-loader{
        width: 6.4rem;
        height: 6.4rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-image: url(http://i.giphy.com/3og0ISeflb7vrNzy2A.gif);
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .m-newsong {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      min-width: 30rem;
      overflow: hidden;
    }
    .m-song-bg {
      transform: scale(1.5);
      transform-origin: center top;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: 100%;
      min-width: 30rem;
      overflow: hidden;
      z-index: -1;
      transition: opacity .3s linear;
      .mark{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.6);
        z-index: 1;
      }
      img{
        filter: blur(10px);
        width: 100%;
      }
    }
    .m-song_nor {
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      bottom: 6rem;
      //min-height: 100%;
      z-index: 21;
    }
    .m-scroll_scroller_vertical {
      position: relative;
      left: 0;
      top: 0;
      min-height: 100%;
      width: 100%;
    }
    .m-song_newfst {
      position: relative;
      padding-bottom: 1.2rem;
      box-sizing: border-box;
    }
    .m-logo {
      position: absolute;
      top: 1.2rem;
      left: 1rem;
      display: block;
      width: 10rem;
      height: 1.7rem;
      background: url(http://s3.music.126.net/m/s/img/logo.png?0c21b75d22d52b65dc8083343d161fe4) no-repeat;
      background-size: 10rem auto;
    }
    .m-song-wrap {
      padding-top: 6.3rem;
    }
    @media screen and (min-width: 360px){
      .m-song-wrap {
        padding-top: 7rem;
      }
    }
    .m-song-clickarea {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      bottom: 1.2rem;
      z-index: 10;
    }
    .m-song-disc {
      position: relative;
      width: 24.8rem;
      height: 24.8rem;
      margin: 0 auto;
    }
    .m-song-turn {
      width: 100%;
      height: 100%;
    }
    .m-song-turn:before {
      content: " ";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
      background: url(http://s3.music.126.net/m/s/img/disc.png?d3bdd1080a72129346aa0b4b4964b75f) no-repeat;
      background-size: contain;
    }
    @media screen and (min-width: 360px){
      .m-song-turn:before {
        background-image: url(http://s3.music.126.net/m/s/img/disc-ip6.png?69796123ad7cfe95781ea38aac8f2d48);
      }
    }
    .m-song-rollwrap {
      position: absolute;
      width: 15rem;
      height: 15rem;
      left: 50%;
      top: 50%;
      z-index: 1;
      margin: -7.5rem 0 0 -7.5rem;
    }
    @media screen and (min-width: 360px){
      .m-song-rollwrap {
        width: 18.4rem;
        height: 18.4rem;
        margin: -9.2rem 0 0 -9.2rem;
      }
    }
    .m-song-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      background: url(http://s3.music.126.net/m/s/img/disc_default.png?7c9b3adc16f5485c2bfbe8a540534188) no-repeat;
      background-size: contain;
    }
    .a-circling {
      animation: circling 20s infinite linear;
    }
    .u-img {
      width: 95%;
      vertical-align: middle;
    }
    @keyframes circling {
      form{transform: rotate(0deg)}
      to{transform: rotate(360deg)}
    }
    .m-song-disc:after {
      content: " ";
      position: absolute;
      top: -6.3rem;
      left: 10.7rem;
      z-index: 5;
      width: 8.4rem;
      height: 12.2rem;
      background: url(http://s3.music.126.net/m/s/img/needle.png?702cf6d95f29e2e594f53a3caab50e12) no-repeat;
      background-size: contain;
    }
    @media screen and (min-width: 360px){
      .m-song-disc:after {
        width: 9.6rem;
        height: 13.7rem;
        top: -7rem;
        left: 13.3rem;
        background-image: url(http://s3.music.126.net/m/s/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862);
      }
    }
    .m-song-clickarea {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      bottom: 1.2rem;
      z-index: 10;
    }
    .m-song-info {
      padding: 0 3.5rem;
      margin-top: 2.5rem;
    }
    .m-song-h2 {
      text-align: center;
      font-size: 1.5rem;
      line-height: 1.1;
      color: #fefefe;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    @media screen and (min-width: 375px){
      .m-song-h2 {
        font-size: 1.8rem;
      }
      .m-song-autr {
        font-size: 1.6rem;
      }
      .m-song-scroll {
        font-size: 1.6rem;
      }
      .m-song-lritem {
        padding-bottom: .8rem;
      }
    }
    .m-song-gap {
      margin: 0 .4rem;
    }
    .m-song-autr {
      font-size: 1.3rem;
      color: hsla(0,0%,100%,.6);
    }
    .m-song-scroll {
      text-align: center;
      color: hsla(0,0%,100%,.6);
    }
    .m-song-lrc {
      position: relative;
      margin-top: 1.4rem;
    }
    .m-song-scroll {
      line-height: 1.5;
      font-size: 1.3rem;
      height: 7.2rem;
      overflow: hidden;
    }
    .m-song-iner {
      transition: transform .3s ease-out;
    }
    .m-song-lritem {
      padding-bottom: .5rem;
    }
  }
</style>
