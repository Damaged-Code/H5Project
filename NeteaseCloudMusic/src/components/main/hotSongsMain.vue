<template>
  <section class="tabctitem">
    <section class="m-hmhot">
      <section class="hotop clearfix">
        <section class="hotopct">
          <div class="u-hmsprt hoticon"></div>
          <div class="hottime">
            更新日期: 03月08日
          </div>
        </section>
      </section>
      <section class="hotcont">
          <div class="wrapper" v-if="!show">
            <div class="rubik-loader"></div>
          </div>
          <div class="m-sglst" v-if="show">
            <router-link class="m-sgitem clearfix"  v-for="item in data" :key="item.id" :to="{name:'musicPlay',params:{songId:item.id}}">
              <section class="sgfl sgfl-cred">{{item.rank}}</section>
              <section class="sgfr f-bd f-bd-btm">
                <section class="sgchfl">
                  <section class="f-thide sgtl">{{item.name}}</section>
                  <section class="f-thide sginfo">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-hot"></use>
                    </svg>
                    {{item.author}}-{{item.name}}
                  </section>
                </section>
                <section class="sgchfl">
                  <svg class="icon u-hmsprt sgchply" aria-hidden="true">
                    <use xlink:href="#icon-play"></use>
                  </svg>
                </section>
              </section>
            </router-link>
          </div>
      </section>
      <section class="hotdn">
        <span class="hotview">查看完整榜单</span>
      </section>
    </section>
  </section>
</template>

<script>
	export default {
	  data(){
	    return{
	      data:[],
        temp:[],
        limit:0,
        show:false
      }
    },
	  mounted(){
	    let
        url = 'http://localhost:3005/top/list',
        _this = this
      this.$http({
                   method:'get',
                   baseURI:'http://localhost:3005',
                   withCredentials: true,
                   url:url,
                   params:{idx:'1'}
                 })
        .then(async function (res) {
          _this.temp = await res.data.playlist.tracks
          for(let tag in _this.temp){
            _this.data.push({
              name:_this.temp[tag].name,
              id:_this.temp[tag].id,
              author:_this.temp[tag].ar[0].name,
              rank:(tag%10)
                      })
            _this.show = true
          }
          _this.data.length = 20
          for(let tag in _this.data){
            if(tag < 9){
              _this.data[tag].rank = '0'+(parseInt(tag)+1)
            }
            else {
              _this.data[tag].rank = parseInt(tag)+1
            }
          }

        })
        .catch(function (err) {
          console.log(err)
        })
    },
    methods:{
    }
	}
</script>

<style scoped lang="scss">
  .tabctitem {
    width: 100%;
    height: 100%;
    margin-top: 8rem;
    .wrapper{
      position: absolute;
      top: 5rem;
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
    .m-hmhot{
      .hotop {
        position: relative;
        padding-top: 38.6%;
        overflow: hidden;
        background: url(http://s3.music.126.net/m/s/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee) no-repeat;
        background-size: cover;
      }
      .hotopct {
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 2;
        padding-left: 2rem;
        box-sizing: border-box;
        .u-hmsprt {
          background: url(http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880) no-repeat;
          background-size: 16.6rem 9.7rem;
        }
        .hoticon {
          width: 14.2rem;
          height: 6.7rem;
          background-position: -2.4rem -3rem;
        }
      }
      .hotopct{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
      }
      .hottime {
        margin-top: 1rem;
        color: hsla(0,0%,100%,.8);
        font-size: 1.2rem;
        transform: scale(.91);
        transform-origin: left top;
        text-align: left;
      }
      .hotcont{
        position: relative;
        margin-top: 1rem;

        .m-sglst{
          .m-sgitem{
            display: flex;
            padding-left: 1rem;
          }
          .m-sgitem:nth-of-type(-n+3){
            .sgfl-cred,.icon{
              color: #d43c33;
            }
          }
          .sgfl {
            display: flex;
            align-items: center;
            width: 2.4rem;
            font-size: 1.7rem;
            color: #999;
          }
          .sgfr {
            display: flex;
            position: relative;
            flex: 1 1 auto;
          }
          .sgchfl{
            flex: 1 1 auto;
            text-align: left;
          }
          .sgchfl:nth-of-type(2){
            display: flex;
            align-items: center;
            justify-content: flex-end;
            text-align: right;
            padding: 0 1rem;
            .sgchply {
              display: inline-block;
              width: 2.2rem;
              height: 2.2rem;
              text-align: right;
            }
          }
          .sgtl {
            font-size: 1.7rem;
          }
          .f-thide.sgtl{
            line-height: 2.5rem;
          }
          .sginfo {
            font-size: 1.2rem;
            line-height: 2rem;
            color: #888;
          }
          .f-thide {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: normal;
          }
        }
      }


    }
    .f-bd:after {
      position: absolute;
      z-index: 2;
      content: "";
      top: 0;
      left: 0;
      pointer-events: none;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      transform-origin: top left;
      border: 0 solid rgba(0,0,0,.1);
      border-bottom-width: 1px;
    }
    @media screen and (-webkit-min-device-pixel-ratio: 2){
      .f-bd:after {
        width: 200%;
        height: 200%;
        transform: scale(.5);
      }
    }
    .hotdn {
      height: 5.5rem;
      line-height: 5.5rem;
      text-align: center;
    }
    .hotview {
      display: inline-block;
      color: #999;
      padding-right: 1.4rem;
      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNCAyMiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJtMSAxbDEwIDEwLTEwIDEwIi8+PC9zdmc+) 100% no-repeat;
      background-size: .7rem 1.2rem;
    }
  }
</style>
