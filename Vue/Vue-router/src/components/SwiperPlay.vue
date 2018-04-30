<template>
  <div class='swiper-container'>
    <div class="swiper-wrapper" ref="wrapper" v-if='tags'>
       <div class='swiper-slider' v-for="item in tags" :key="item">
         {{item}}
       </div>
    </div>
    <div class='swiper-button-prev'>
    </div>
    <div class='swiper-button-next'></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defualt_config: {
        el: '.swiper-container',
      },
    };
  },
  props: ['config', 'tags'],
  mounted() {
    let wrapper = this.$refs.wrapper,
      tags = this.tags,
      length = tags.length;
  },
};
</script>

<style scoped>
.swiper-container {
  width: 800px;
  height: 300px;
}
.swiper-wrapper {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: all;
}
.swiper-slider {
  width: 100%;
  height: 100%;
  background-color: cadetblue;
  flex-shrink: 0;
  flex-grow: 0;
}
</style>
