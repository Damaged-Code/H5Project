<template>
  <section class="m-tabct">
    <section class="tabctitem">
      <section class="m-homeremd"  >
        <h2 class="remd_tl">推荐歌单</h2>
        <section class="remd_songs clearfix">
          <div class="wrapper" v-if="!show">
            <div class="rubik-loader"></div>
          </div>
          <section class="remd_ul clearfix" v-if="show">
            <router-link class="remd_li clearfix" v-for="item in songInfo" :key="item.id" :to="{ name: '', params: { imgId: item.id }}" >
              <div class="remd_img clearfix">
                <img class="u-img" :src = "item.picUrl" alt = "">
                <p class="u-earp remd_lnum">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-music1"></use>
                  </svg>
                  {{item.playCount}}C
                </p>
              </div>
              <p class="remd_text">{{item.name}}</p>
            </router-link>
          </section>
        </section>
        <h2 class="remd_tl">最新音乐</h2>
        <section class="remd_newsg">
          <div class="wrapper" v-if="!newShow && !confirm">
            <div class="rubik-loader"></div>
          </div>
          <section class="m-sglst" v-if="newShow && confirm">
            <router-link class="m-sgitem" v-for="item in newSong" :key="item.id" :to="{name:'',params:{songId:item.id}}">
              <section class="sgfr f-bd f-bd-btm">
                <section class="sgchfl">
                  <section class="f-thide sgtl">{{item.name}}</section>
                  <section class="f-thide sginfo">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-hot"></use>
                    </svg>
                    {{item.author}}-
                    {{item.des}}
                  </section>
                </section>
                <section class="sgchfr">
                  <svg class="icon sgchply" aria-hidden="true">
                    <use xlink:href="#icon-play"></use>
                  </svg>
                </section>
              </section>
            </router-link>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
	export default {
    data(){
      return{
          songInfo:0,
          show:false,
          newSong:[],
          newShow:false,
          confirm:false
      }
    },
    mounted(){
      let
        url = 'http://localhost:3005/personalized',
        songUrl = 'http://localhost:3005/personalized/newsong',
        _this = this,
        temp = 0

      this.$http({
        method:'get',
        baseURI:'http://localhost:3005',
        withCredentials: true,
        url:url
                 })
        .then(async function (res) {
          _this.songInfo = await res.data.result
          _this.songInfo.length = 6
          _this.show = true
          _this.confirm = true
          //console.log( _this.songInfo)
        }).catch(function (err) {
          console.log(err)
      })
      this.$http({
        method:'get',
        baseURI:'http://localhost:3005',
        withCredentials: true,
        url:songUrl
                })
        .then(function (res) {
          temp = res.data.result
          for(let tag in temp){
            _this.newSong.push({name:temp[tag].name,
                                 id:temp[tag].id,
                                 author:temp[tag].song.artists[0].name,
                                 des:temp[tag].song.album.name})
          }
          _this.newShow = true
           /*
          }*/
          console.log(temp)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    methods:{}
	}
</script>

<style scoped lang="scss">
  .m-tabct{
    margin-top: 3.3rem;
    padding-top:1.5rem ;
    .wrapper{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      margin: auto;
      .rubik-loader{
        width: 100%;
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
    .m-homeremd  {
      .remd_tl {
        position: relative;
        padding-left: 0.75rem;
        margin-bottom: 1.16rem;
        font-size: 1.7rem;
        height: 1.6rem;
        line-height: 1.6rem;
        text-align: left;
        text-indent: 0.5rem;
      }
      .remd_tl:after {
        content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -0.75rem;
        width: 0.16rem;
        height: 1.3rem;
        background-color: #d33a31;
      }
      .remd_songs{
        position: relative;
        height: auto;
      }
      .remd_ul {
        padding-bottom: 1.6rem;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .remd_li{
        display: block;
        width: 33.3%;
        height: auto;
        padding-left: 1px;
        padding-right: 1px;
        box-sizing: border-box;
        padding-bottom: 1rem;
        .remd_img {
          position: relative;
          .u-img {
            position: relative;
            width: 100%;
            height: auto;
            left: 0;
            top: 0;
            z-index: 1;
            vertical-align: middle;
          }
          .remd_lnum {
            position: absolute;
            right: 0.3rem;
            top: 0.1rem;
            z-index: 3;
            padding-left: 1rem;
            color: #fff;
            font-size: 1rem;
            background-position: 0;
            background-repeat: no-repeat;
            background-size: 1rem 0.9rem;
            text-shadow: 1px 0 0 rgba(0,0,0,.15);
          }
        }
        .remd_text {
          display: -webkit-box;
          overflow: hidden;
          padding: 0.5rem 0.1rem 0 0.5rem;
          line-height: 1.2;
          font-size: 1.2rem;
          text-align: left;
        }
      }
      @media screen and (min-width: 768px){
        .remd_li{
          width: 22.2%;
          margin: 0 8.7rem;
        }
      }
      .remd_newsg {
        position: relative;
        min-height: 2rem;
        .m-sgitem {
          display: flex;
          padding-left: 1rem;
          .sgfr{
            display: flex;
            position: relative;
            flex: 1 1 auto;
          }
          .sgchfl {
            text-align: left;
            padding: .6rem 0;
            width: 0;
            flex: 1 1 auto;
            .sgtl {
              font-size: 1.7rem;
            }
            .f-thide {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: normal;
            }
            .sginfo {
              font-size: 1.2rem;
              color: #888;
              .icon{
                color: #d43c33;
              }
            }
          }
          .sgchfr {
            display: flex;
            align-items: center;
            padding: 0 1rem;
            .sgchply {
              display: inline-block;
              width: 2.2rem;
              height: 2.2rem;
            }
          }
        }
      }
    }
  }
</style>
