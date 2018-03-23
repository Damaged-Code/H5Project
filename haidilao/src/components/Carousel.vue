<template>
  <header class="" @click="test">
    <div class="header-action">
      <section class="qr-code">
        <i class="iconfont"> &#xe677;</i>
      </section>
      <section class="kf">
        <i class="iconfont"> &#xe61f;</i>
      </section>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in carousel" :key="item.id">
          <img :src="item.picUrl" :alt="item.name">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        carousel: []
      }
    },
    mounted() {
      this.$http({
        method: 'get',
        baseURL: 'http://10.36.139.179:3007',
        url: '/focus',
        withCredentials: true
      })
        .then(async (res) => {
          this.carousel = await res.data.result
        })
        .catch((err) => {
          console.log(err);
        })
    },
    methods: {
      test() {
        console.log(2)
      }
    }
  }
  window.onload = function () {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }
</script>

<style scoped lang="scss">
  header {
    position: relative;
    .swiper-container {
      width: 100%;
      height: 2.88rem;
      img {
        width: 100%;
      }

    }
    .header-action {
      position: absolute;
      top: .1rem;
      right: .1rem;
      display: flex;
      z-index: 3;
      section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: .5rem;
        height: .5rem;
        border-radius: 100%;
        background-color: rgba(0, 0, 0, .5);
        color: white;
        .iconfont {
          font-size: .3rem;
        }
      }
      .qr-code {
        margin-right: .1rem;
      }
      .kf {
        background-color: rgba(212, 62, 61, .8);
      }
    }
  }

</style>
