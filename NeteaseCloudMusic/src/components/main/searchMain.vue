<template>
  <section class="m-tabct">
    <section class="tabctitem">
      <section class="m-hmsrch">
        <form class="m-input f-bd f-bd-btm" action = "#" method="get">
          <section class="inputcover">
            <i class="u-svg u-svg-srch"></i>
            <input type = "search" class="input" name="search" id="searchInfo" placeholder="" value="" autocomplete="off" @change="searchSong" @blur="lose" @input="isInput">
            <label class="holder" v-if="holder">搜索歌曲、歌手、专辑</label>
            <figure class="close">
              <i class="u-svg u-svg-empty"></i>
            </figure>
          </section>
        </form>
        <section class="m-default" v-if="!searchToSong">
          <section class="m-hotlist" v-if="!songListOnliy">
            <h3 class="title">{{searchData}}</h3>
            <ul class="list" v-if="show">
              <li class="item f-bd f-bd-full" v-for="item in sings" :key="item.id"  @click="searchSing">
                <a class="link" href = "javascript:void(0)" :data-id="item.id">{{item.name}}</a>
              </li>
            </ul>
            <div class="wrapper" v-if="!searchConfirm && !show">
              <div class="rubik-loader"></div>
            </div>
          </section>
          <section class="m-recom">
            <ul v-if="searchConfirm">
              <li class="recomitem"  v-for="item in info" :key="item.key" @click="getSong" :data-id="item.id">
                <i class="u-svg u-svg-search"></i>
                <span class="f-bd f-bd-btm f-thide">{{item.songName}}-{{item.author}}</span>
              </li>
            </ul>
          </section>
          <section class="m-history" v-if="hasHis">
            <ul class="list">
              <li class="item" v-for="item in searchHis" :key="item.id">
                <i class="u-svg u-svg-histy"></i>
                <div class="histyr f-bd f-bd-btm">
                  <span class="link f-thide" @click="searchSing">{{item}}</span>
                  <figure class="close" >
                    <i class="u-svg u-svg-close" @click="delHis" :data-his="item"></i>
                  </figure>
                </div>
              </li>
            </ul>
          </section>
        </section>
        <div class="m-searchresult" v-if="searchToSong">
          <section class="m-matchlist">
            <h3 class="title">最佳匹配</h3>
            <ul>
              <li class="matchitem album">
                <a href = "" v-for="item in album" :key="item.id">
                  <div class="linkcover f-bd f-bd-btm">
                    <figure class="piccover">
                      <img class="pic" :src = "item.img1v1Url" alt = "">
                    </figure>
                    <article class="describe" >
                      <h4 class="maindes f-thide">
                        专辑：
                        <p class="hcover">
                          <span class="highlight">{{item.name}}</span>
                          <span class="normal">{{item.author}}</span>
                        </p>
                      </h4>
                    </article>
                    <i class="u-svg u-svg-arr"></i>
                  </div>
                </a>
              </li>
              <li class="matchitem artist">
                <a href = "" v-for="item in artists" :key="item.id">
                  <div class="linkcover f-bd f-bd-btm">
                    <figure class="piccover">
                      <img class="pic" :src="item.img1v1Url">
                    </figure>
                    <article class="describe">
                      <h4 class="maindes f-thide">
                        歌手:
                        <p class="hcover">
                          <span class="highlight">{{item.author}}</span>
                        </p>
                      </h4>
                    </article>
                    <i class="u-svg u-svg-arr"></i>
                  </div>
                </a>
              </li>
            </ul>
          </section>
          <section class="m-songlist">
            <div class="m-sglst">
              <router-link class="m-sgitem"  v-for="item in songOnliy" :key="item.id" :to="{name:'index',params:{id:item.id}}">
                <div class="sgfr f-bd f-bd-btm">
                  <div class="sgchfl">
                    <div class="f-thide sgtl f-hide">
                        {{item.songName}}
                     </div>
                    <div class="f-thide sginfo">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-hot"></use>
                      </svg>
                      <p class="hcover f-thide">
                        <span class="highlight">{{item.author}}</span>
                        <span class="normal">{{item.songName}} </span>
                      </p>
                    </div>
                  </div>
                  <div class="sgchfr">
                    <svg class="icon u-hmsprt sgchply" aria-hidden="true">
                      <use xlink:href="#icon-play"></use>
                    </svg>
                  </div>
                </div>
              </router-link>
            </div>
            <p class="u-scroll"></p>
          </section>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
	export default {
	  data(){
	    return{
        show:true,
        sings:[],
        holder:true,
        searchConfirm:false,
        info:[],
        hasHis:false,
        searchHis:0,
        searchToSong:false,
        artists:[],
        album:[],
        songListOnliy:false,
        searchData:'热门搜索',
        offset:0,
        songOnliy:[]
      }
    },
    created(){
	    let
        His = this.$store.getters.search.search_his
      if(His.length){
        this.hasHis = true
        this.searchHis = His
      }
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll,true);
	    let
        url = 'http://localhost:3005/top/artists?offset=0&limit=10',
        data = 0,
         His = this.$store.getters.search.search_his,
        _this = this
      if(His.length){
	      this.hasHis = true
        this.searchHis = His
      }
      this.$http({
        method:'get',
        withCredentials: true,
        url:url
                 })
        .then(function (res) {
          data = res.data.artists
          for(let tag of data){
            _this.sings.push({
              name:tag.name,
              id:tag.id
              })
          }
        })
        .catch(function (err) {
          console.log(err)
        })

    },
    methods:{
      searchSong(event){
        let
          target = jq(event.target),
          url = 'http://localhost:3005/search?offset=0&limit=10',
          _this = this,
          data = 0
        this.info = []
          this.$http({
            method:'get',
           withCredentials: true,
           url:url,
            params:{keywords:target.val()}
                     })
            .then(async function (res) {
               data =await res.data.result.songs
              for(let tag of data){
                 _this.info.push({
                   id:tag.id,
                   songName:tag.name,
                   author:tag.artists[0].name
                                 })
              }
              _this.searchConfirm = true
              _this.searchData ='搜索' + target.val()
            })
            .catch(function (err) {
             // console.log(err)
            })
      },
      lose(event){
        let
          target = jq(event.target)
        if(target.val() === ''){
          this.holder = true
          this.show = true
          this.searchConfirm = false
        }
      },
      isInput(event){
        let
          target = jq(event.target),
          parent = target.parent(),
          child = parent.children().eq(3).children()
        child.css('display','inline-block')
         if(target.val() === ''){
           this.searchToSong = false
           this.holder = true
           this.show = true
           this.searchConfirm = false
         }
         else {
           this.holder = false
           this.show = false
            if(this.info.length){
              this.searchConfirm = true
            }
         }
      },
      searchSing(event){
        let
          target = jq(event.target),
          searchInfo = jq('#searchInfo'),
          holder = jq('.holder'),
          keywords = target.text().trim(),
          url = 'http://localhost:3005/search?offset=0&limit=10',
          _this = this,
          His = this.$store.getters.search.search_his,
          isRepeat = true,
          data = 0
        _this.songOnliy = []
        _this.artists = []
        _this.album = []
        if(His.length === 0){
          this.$store.dispatch('setHis',target.text().trim())
        }
        else if(His.length){
          for(let tag of His){
            if(tag == (target.text().trim())){
              isRepeat = false
            }
          }
        }
        if(isRepeat){
          this.$store.dispatch('setHis',target.text().trim())
        }
        searchInfo.val(target.text().trim())
        holder.css('display','none')
        this.$http({
                     method:'get',
                     withCredentials: true,
                     url:url,
                     params:{keywords:keywords}
                   })
          .then(async function (res) {
            data = await res.data.result.songs
            //console.log(data)
            for(let tag of data){
              _this.songOnliy.push({
                                id:tag.id,
                                songName:tag.name,
                                author:tag.artists[0].name
                              })
            }
            _this.artists.push({
                                 id:data[0].artists[0].id,
                                 author:data[0].artists[0].name,
                                 img1v1Url:data[0].artists[0].img1v1Url,
                               })
            _this.album.push({
                               id:data[0].album.id,
                               author:data[0].artists[0].name,
                               name:data[0].album.name,
                               img1v1Url:data[0].album.artist.img1v1Url,
                             })

            _this.searchToSong = true
          })
          .catch(function (err) {
            //console.log(err)
          })
      },
      getSong(event){
        let
          target = jq(event.target),
          keywords = (target.text().trim()).split('-')[1],
          offset = this.offset,
          url = `http://localhost:3005/search?offset=${this.offset}&limit=10`,
          _this = this,
          data = 0
        this.songOnliy = []
        this.artists = []
        this.album = []
        this.songListOnliy = true
        this.$http({
                     method:'get',
                     withCredentials: true,
                     url:url,
                     params:{keywords:keywords}
                   })
            .then(async function (res) {
              data =await res.data.result
              data = data.songs
              _this.artists.push({
                                      id:data[0].artists[0].id,
                                      author:data[0].artists[0].name,
                                      img1v1Url:data[0].artists[0].img1v1Url,
                                    })
              _this.album.push({
                                    id:data[0].album.id,
                                    author:data[0].artists[0].name,
                                    name:data[0].album.name,
                                    img1v1Url:data[0].album.artist.img1v1Url,
                                  })
              for(let tag of data){
                _this.songOnliy.push({
                                  id:tag.id,
                                  songName:tag.name,
                                  author:tag.artists[0].name
                                })
              }
              _this.searchToSong = true
              _this.searchConfirm = false
            })
            .catch(function (err) {
              console.log(err)
            })
      },
      songPage(){
        let
          searchInfo = jq('#searchInfo'),
          url = `http://localhost:3005/search?offset=${this.offset}&limit=10`,
          keywords = searchInfo.val()
        this.$http({
                     method:'get',
                     withCredentials: true,
                     url:url,
                     params:{keywords:keywords}
                   })
          .then(async function (res) {
            data =await res.data.result
            data = data.songs
            for(let tag of data){
              _this.songOnliy.push({
                                     id:tag.id,
                                     songName:tag.name,
                                     author:tag.artists[0].name
                                   })
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      handleScroll () {
        let
          tagHei = jq('.m-songlist').height(),
          bodyHei = jq('body').height(),
          scrollTop = jq('html').scrollTop()
        if(tagHei){
          if((tagHei + scrollTop) > (bodyHei-127)){
            this.offset += 1
            console.log(this.offset)
            return false;
          }
          else {
            return false;
          }
        }
    },
      delHis(event){
        let
          target = jq(event.target),
          his = target.attr('data-his'),
          His = this.$store.getters.search.search_his
        for(let tag in His){
          if(His[tag] == his){
            His.splice(tag,1)
            break
          }
        }
      }
    }
	}
</script>

<style scoped lang="scss">
  .m-tabct{
    margin-top: 8.5rem;
    width: 100%;
    height: 100%;
    .tabctitem {
      width: 100%;
      height: 100%;
      .m-hmsrch {
        text-align: left;
        background: #fbfcfd;
        .m-input {
          padding: 1.5rem 1rem;
          .inputcover {
            position: relative;
            width: 100%;
            height: 3rem;
            padding: 0 3rem;
            box-sizing: border-box;
            background: #ebecec;
            border-radius: 3rem;
          }
          .u-svg-srch {
            position: absolute;
            left: 0;
            top: .9rem;
            margin: 0 .8rem;
            vertical-align: middle;
          }
          .u-svg {
            display: inline-block;
            background-position: 0 0;
            background-size: contain;
            background-repeat: no-repeat;
          }
          .u-svg-srch {
            width: 1.3rem;
            height: 1.3rem;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxLDIzLjUzNWwtMS40MTQsMS40MTRsLTcuMzE1LTcuMzE0CgkJQzE0LjcwOSwxOS4xMDcsMTIuNDYsMjAsMTAsMjBDNC40NzcsMjAsMCwxNS41MjMsMCwxMEMwLDQuNDc3LDQuNDc3LDAsMTAsMGM1LjUyMywwLDEwLDQuNDc3LDEwLDEwYzAsMi4zNDItMC44MTEsNC40OS0yLjE2LDYuMTk1CgkJTDI1LjE4MSwyMy41MzV6IE0xMCwyYy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4YzQuNDE4LDAsOC0zLjU4Miw4LThTMTQuNDE4LDIsMTAsMnoiLz48L3N2Zz4=);
          }
          .input {
            width: 100%;
            height: 3rem;
            line-height: 1.8rem;
            background: transparent;
            font-size: 1.4rem;
            color: #333;
          -webkit-appearance:none;
          }
          .holder {
            position: absolute;
            left: 3rem;
            top: .5rem;
            font-size: 1.4rem;
            color: #c9c9c9;
            background: transparent;
            pointer-events: none;
            line-height: 2rem;
          }
          .close {
            position: absolute;
            right: 0;
            top: 0;
            width: 3rem;
            height: 3rem;
            line-height: 2.8rem;
            text-align: center;
          }
          .u-svg-empty {
            display: none;
            vertical-align: middle;
          }
          .u-svg-empty {
            width: 1.4rem;
            height: 1.4rem;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQsMGM3LjczMiwwLDE0LDYuMjY4LDE0LDE0YzAsNy43MzItNi4yNjgsMTQtMTQsMTQKCVMwLDIxLjczMiwwLDE0QzAsNi4yNjgsNi4yNjgsMCwxNCwweiIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ViZWNlYiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0ibTE5IDlsLTEwIDEwIi8+PHBhdGggZD0ibTkgOWwxMCAxMCIvPjwvZz48L2c+PC9zdmc+);
          }
          &:after{
              border-color: rgba(0,0,0,.2);
          }
        }
        .m-default{
          position: relative;
        }
        .m-hotlist {
          .wrapper{
            position: absolute;
            top: 10rem;
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
          position: relative;
          padding: 1.5rem 1rem 0;
          text-align: left;
          .title {
            font-size: 1.2rem;
            line-height: 1.2rem;
            color: #666;
          }
          .list {
            margin: 1rem 0 .7rem;
            .item {
              display: inline-block;
              height: 3.2rem;
              margin-right: .8rem;
              margin-bottom: .8rem;
              padding: 0 1.4rem;
              font-size: 1.4rem;
              line-height: 3.2rem;
              color: #333;
            }
            .f-bd-full:after {
              border-width: 1px;
            }
            .item:after {
              border-color: #d3d4da;
              border-radius: 3.2rem;
            }
          }

        }
        .m-recom{
          .recomitem {
            display: flex;
            align-items: center;
            height: 4.5rem;
            padding-left: 1rem;
            span{
              display: inline-block;
              flex: 1;
              width: 1%;
              padding-right: 1rem;
              font-size: 1.5rem;
              line-height: 4.5rem;
              color: #333;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              &:after{
                border-color: rgba(0,0,0,.1);
              }
            }
            .f-bd-btm:after {
              border-bottom-width: 1px;
            }
            .u-svg {
              display: inline-block;
              vertical-align: middle;
              background-position: 0 0;
              background-size: contain;
              background-repeat: no-repeat;
            }
            i {
              -webkit-box-flex: 0;
              -webkit-flex: 0 0 auto;
              flex: 0 0 auto;
              margin-right: .7rem;
            }
            .u-svg-search {
              width: 1.5rem;
              height: 1.5rem;
              background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PGcgb3BhY2l0eT0iLjMiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzA0MDAwMCIgZD0iTTI4LjE4MSwyNy41MzVsLTEuNDE0LDEuNDE0bC03Ljc1NS03Ljc1NAoJCUMxNi45OTYsMjIuOTM4LDE0LjM3NSwyNCwxMS41LDI0QzUuMTQ5LDI0LDAsMTguODUyLDAsMTIuNUMwLDYuMTQ5LDUuMTQ5LDEsMTEuNSwxQzE3Ljg1MiwxLDIzLDYuMTQ5LDIzLDEyLjUKCQljMCwyLjc1Ni0wLjk3Myw1LjI4NS0yLjU4OSw3LjI2NkwyOC4xODEsMjcuNTM1eiBNMTEuNSwzQzYuMjUzLDMsMiw3LjI1MywyLDEyLjVjMCw1LjI0Niw0LjI1Myw5LjUsOS41LDkuNQoJCWM1LjI0NiwwLDkuNS00LjI1NCw5LjUtOS41QzIxLDcuMjUzLDE2Ljc0NiwzLDExLjUsM3oiLz48L2c+PC9zdmc+);
            }
          }

        }
        .m-history {
          .item{
            display: flex;
            align-items: center;
            height: 4.5rem;
            .histyr {
              position: relative;
              display: flex;
              flex: 1;
              width: 1%;
              align-items: center;
              height: 4.5rem;
            }
            .link {

              flex: 1;
              width: 1%;
              margin-right: 1rem;
              text-align: left;
            }
            .f-thide {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: normal;

            }
            .close {
              flex: 0 0 auto;
              width: 3.2rem;
              height: 3.2rem;
              line-height: 3.2rem;
            }
            .u-svg-close {
              margin-left: .2rem;
            }
            .u-svg-close {
              width: 1.2rem;
              height: 1.2rem;
              background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJtMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdjLjM4MS4zODEuMzgxLjk5OCAwIDEuMzc5cy0uOTk4LjM4MS0xLjM3OCAwbC0xMC4zMzgtMTAuMzM4LTEwLjMzOCAxMC4zMzhjLS4zOC4zODEtLjk5Ny4zODEtMS4zNzggMHMtLjM4MS0uOTk4IDAtMS4zNzlsMTAuMzM4LTEwLjMzNy0xMC4zMzgtMTAuMzM4Yy0uMzgxLS4zOC0uMzgxLS45OTcgMC0xLjM3OHMuOTk4LS4zODEgMS4zNzggMGwxMC4zMzggMTAuMzM4IDEwLjMzOC0xMC4zMzhjLjM4LS4zODEuOTk3LS4zODEgMS4zNzggMHMuMzgxLjk5OCAwIDEuMzc4bC0xMC4zMzggMTAuMzM4Ii8+PC9zdmc+);
            }
            .f-bd-btm:after {
              border-bottom-width: 1px;
            }
            .histyr:after {
              border-color: rgba(0,0,0,.1);
            }
          }
          .u-svg-histy {
            margin: 0 1rem;
          }
          .u-svg {
            display: inline-block;
            vertical-align: middle;
            background-position: 0 0;
            background-size: contain;
            background-repeat: no-repeat;
          }
          .u-svg-histy {
            width: 1.5rem;
            height: 1.5rem;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljYWNhIiBkPSJtMTUgMzBjLTguMjg0IDAtMTUtNi43MTYtMTUtMTVzNi43MTYtMTUgMTUtMTUgMTUgNi43MTYgMTUgMTUtNi43MTYgMTUtMTUgMTVtMC0yOGMtNy4xOCAwLTEzIDUuODItMTMgMTNzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzLTUuODItMTMtMTMtMTNtNyAxNmgtOGMtLjU1MiAwLTEtLjQ0Ny0xLTF2LTEwYzAtLjU1My40NDgtMSAxLTFzMSAuNDQ3IDEgMXY5aDdjLjU1MyAwIDEgLjQ0NyAxIDFzLS40NDcgMS0xIDEiLz48L3N2Zz4=);
          }

        }
        .m-searchresult {
          background: #fcfcfd;
          .m-matchlist {
            padding: .8rem 0 .4rem;
            text-align: left;
            .title {
              margin-left: 1rem;
              font-size: 1.2rem;
              line-height: 1.6rem;
              color: #666;
            }
            .matchitem {
              position: relative;
              height: 6.6rem;
            }
            .linkcover {
              display: flex;
              align-items: center;
              height: 6.6rem;
              margin-left: 1rem;
              padding: .8rem 1rem .8rem 0;
              box-sizing: border-box;
            }
            .piccover {
              position: relative;
              flex: 0 0 auto;
              display: inline-block;
              width: 5rem;
              height: 5rem;
              margin-right: 1.5rem;
              line-height: 0;
            }
            .pic {
              display: block;
              width: 100%;
            }
            .describe {
              flex: 1;
              display: inline-block;
              width: 1%;
            }
            .describe {
              .maindes{
                font-size: 1.7rem;
                line-height: 3rem;
                color: #333;
              }
              .addtional {
                font-size: 1.2rem;
                line-height: 1.5rem;
                color: #999;
              }

            }
            .u-svg-arr {
              margin-right: .8rem;
              margin-left: 1rem;
            }
            .u-svg-arr {
              flex: 0 0 auto;
              display: inline-block;
            }
            .u-svg-arr {
              width: .8rem;
              height: 1.3rem;
              background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIiBzdHJva2U9IiM5YjliOWIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMi45MzkgMjMuOTM5IDEzLjg3OSAxMyAyLjkzOSAyLjA2MSIvPjwvc3ZnPg==);
            }
          }
          .m-sgitem{
            display: flex;
            padding-left: 1rem;
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
            max-width: 20.5rem;
          }
          .f-thide {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: normal;
            max-width: 25rem;
          }
          .icon{
            color: #d43c33;
          }
          .sgchfr {

            display: flex;

            align-items: center;
            padding: 0 1rem;
          }
          .sgchply {
            display: inline-block;
            width: 2.2rem;
            height: 2.2rem;
          }
        }
      }
    }
    .f-bd {
      position: relative;
    }
    .f-bd-btm:after {
      border-bottom-width: 1px;
    }
  }
</style>
