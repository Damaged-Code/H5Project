<template>
	<section>
    <section class="m-song_newcomm" v-if="show">
      <section class="m-talk m-talk-imm">
        <section class="m-comments m-comments-black">
          <h4 class="cmt_title">精彩评论</h4>
          <div class="cmt_list">
            <div class="cmt_item" v-for="item in userInfo" :key="item.id">
              <div class="cmt_head">
                <router-link class="userphoto" :to="{name:''}">
                  <img :src="item.avatarUrl" alt="">
                </router-link>
              </div>
              <div class="cmt_wrap f-bd f-bd-btm">
                <div class="cmt_header">
                  <div class="cmt_meta">
                    <span class="cmt_user">
                      <router-link class="nickname" :to="{name:''}">
                        {{item.name}}
                      </router-link>
                    </span>
                    <div class="cmt_time">
                      <span>{{item.time}}</span>
                    </div>
                  </div>
                  <div class="cmt_like">
                    <span class="cmt_likearea">
                     {{item.likedCount}}
                      <i class="cmt_likeicn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path fill="#999" d="m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836"></path></svg></i>
                    </span>
                  </div>
                </div>
                <div class="cmt_content">
                  {{item.content}}
                </div>
              </div>
            </div>
          </div>
          <div class="cmt_more f-bd f-bd-top">
            <span class="box">查看全部{{allDis}}条评论<i></i></span>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
	export default {
  data(){
    return{
      userInfo:[],
      show:false,
      allDis:0
    }
  },
    mounted(){
      let
        id = this.$route.params.songId,
        data = 0,
        _this = this
      this.$http({
                   method:'get',
                   baseURI:'http://localhost:3005',
                   withCredentials: true,
                   url:'/comment/music?limit=5',
                   params:{id:id}
                 })
        .then(async function (res) {
          data =await res.data.hotComments
          for(let tag of data){
            _this.userInfo.push({
              uId:tag.user.userId,
              avatarUrl:tag.user.avatarUrl,
              nickname:tag.user.nickname,
             likedCount:tag.likedCount,
              content:tag.content,
              time:timestampToTime(tag.time),
             })
          }
          _this.userInfo.length = 6
          _this.show = true
        })
        .catch(function (err) {

        })
      this.$http({
                   method:'get',
                   baseURI:'http://localhost:3005',
                   withCredentials: true,
                   url:'/comment/music',
                   params:{id:id}
                 })
          .then(async function (res) {
            data =await res.data
            _this.allDis = data.total
          })
          .catch(function (err) {

          })
    },
	}
  function timestampToTime(timestamp) {
	  if(timestamp.toString().length<=10){
      var date = new Date(timestamp*1000)
    }
    else {
      var date = new Date(timestamp)
    }
    var //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      Y = date.getFullYear() + '-',
      M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
      D = date.getDate() + ' ',
      h = date.getHours() + ':',
      m = date.getMinutes() + ':',
      s = date.getSeconds();
      return Y+M+D;
  }
</script>

<style scoped lang="scss">
  .wrapper{
    position: relative;
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
  .m-song_newcomm {
    text-align: left;
    position: relative;
    padding-top: 2rem;
    min-height: 14.5rem;
    .m-comments-black {
      padding-top: 1rem;
      word-wrap: break-word;
        .cmt_item{
          padding-top: 1rem;
          width: 100%;
          display: flex;
          flex-direction: row;
          .cmt_head {
            height: 3.5rem;
            margin: 0 1rem;
            flex: none;
            a{
              position: relative;
              display: block;
              color: #fff;
              text-decoration: none;
            }
            img {
              display: block;
              border-radius: 50%;
              width: 3rem;
              height: 3rem;
            }
          }
          .cmt_wrap {
            padding-right: 1rem;
            padding-bottom: 1.1rem;
            padding-left: 1rem;
            flex: auto;
            width: 0;
            .cmt_header {
              display: flex;
              flex-direction: row;
              .cmt_meta {
                flex: auto;
                width: 0;
                font-size: 0;
              }
              .cmt_like {
                width: 6.5rem;
                height: 2.2rem;
                line-height: 2.2rem;
                font-size: 1.1rem;
                color: #999;
                flex: none;
                text-align: right;
                vertical-align: baseline;
              }
              .cmt_user {
                max-width: 100%;
                display: inline-flex;
                a {
                  font-size: 1.4rem;
                  color: #666;
                  line-height: 2rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  flex: auto;
                }
                a {
                  color: hsla(0,0%,100%,.7);
                }
              }
              .cmt_time {
                font-size: .9rem;
                color: #999;
              }
              .cmt_time {
                color: hsla(0,0%,100%,.3);
              }
              .cmt_like {
                width: 6.5rem;
                height: 2.2rem;
                line-height: 2.2rem;
                font-size: 1.1rem;
                color: #999;
                -webkit-flex: none;
                -webkit-box-flex: 0;
                flex: none;
                text-align: right;
                vertical-align: baseline;
                .cmt_likearea {
                  padding-left: .5rem;
                  .cmt_likeicn {
                    width: 1.4rem;
                    height: 1.4rem;
                    margin-left: .6rem;
                    display: inline-block;
                    cursor: pointer;
                  }
                }
              }
            }
            .cmt_content {
              color: #333;
              font-size: 1.5rem;
              line-height: 2.2rem;
              margin-top: .5rem;
            }
            .cmt_content {
              color: #fff;
            }
          }
          .cmt_head+.cmt_wrap {
            padding-left: 0;
          }
          .f-bd-btm:after {
            border-bottom-width: 1px;
            border-color: hsla(0,0%,100%,.1);
          }
        }
        .cmt_title {
          position: relative;
          padding: 0 0 0 1rem;
          line-height: 2.5rem;
          color: #fff;
          font-size: 1.6rem;
          background-color: transparent;
          margin: 0;
          font-weight: 400;
        }
      .cmt_more {
        margin-left: 5rem;
        .box {
          display: block;
          margin-right: 5rem;
          padding: 1.8rem 0;
          font-size: 1.4rem;
          color: #999;
          text-align: center;
          line-height: 1;
        }
      }
    }
  }
</style>
