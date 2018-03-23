<template>
  <main class="home-list-view">
    <div>
      <section class="loading">
      </section>
      <section class="home-list" v-for="item in homeList" :key="item.id">
        <section class="home-list-l">
          <h5 class="food-detail">{{item.content}}</h5>
          <p>{{item.type}}</p>
          <p class="home-list-icon">
          <span class="home-list-icon-r">
            <i class="iconfont"> &#xe743; </i>
            15
          </span>
            <span class="home-list-icon-r">
            <i class="iconfont">&#xe668;</i>
            30
          </span>
            <span>{{item.add_time}}</span>
          </p>
        </section>
        <section class="home-list-r">
          <img :src="item.picUrl" alt="">
        </section>
      </section>
      <section class="bottom-line" v-show="show">
        我也是有底线哒ヽ(￣▽￣)و
      </section>
    </div>
  </main>
</template>

<script>

  export default {
    data() {
      return {
        homeList: [],
        offset: 0,
        show: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, false);
      this.getData()
    },
    methods: {
      handleScroll() {
        let
          tag = jq('.home-list-view').height(),
          bodyHei = jq('body').height(),
          scrollTop = jq('html').scrollTop()
        if (tag) {
          if ((tag + scrollTop) > (bodyHei + ~~(tag / 2.15))) {
            this.offset++
            this.getData()
            console.log(this.offset)
            return false
          }
          else {
            return false
          }
        }
      },
      getData() {
        let
          data = []
        this.$http({
          method: 'get',
          baseURL: 'http://10.36.139.179:3007',
          timeout: 5000,
          url: `/news?limit=9&offset=${this.offset}`,
          withCredentials: true
        })
          .then(async (res) => {
            data = await res.data.result
            if (JSON.stringify(data) != '[]') {
              for (let item of data) {
                this.homeList.push(item)
              }
            }
            else {
              window.removeEventListener('scroll', this.handleScroll);
              this.show = true
            }
          })
          .catch((err) => {
            console.log(err);
          })
      },
    },
  }
</script>

<style scoped lang="scss">
  .home-list-view {
    position: relative;
    width: 100%;
    background: #f9f9f9;
    .home-list {
      display: flex;
      background: white;
      text-align: left;
      margin-top: .05rem;
      .home-list-l {
        position: relative;
        width: 50%;
        padding: .1rem .2rem 0 .1rem;
        h5 {
          color: #444444;
          line-height: .2rem;
          max-height: .5rem;
          overflow: hidden;
          width: 100%;
          font-weight: 500;
          margin-bottom: .04rem;
          font-size: .16rem;
        }
        p {
          font-size: .1rem;
          color: #858585;
          max-height: .45rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          width: 94%;
          line-height: 1.3;
        }
        .home-list-icon {
          position: absolute;
          left: .1rem;
          top: 1.1rem;
          color: #afafaf;
          font-family: "微软雅黑";
          .home-list-icon-r {
            margin-right: .1rem;
          }
        }
      }
      .home-list-r {
        width: 50%;
        height: 1.35rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .bottom-line {
      width: 100%;
      height: .8rem;
      line-height: .8rem;
      color: #f3887d;
    }

  }
</style>
