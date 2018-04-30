<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/routerone">aaaaaa</router-link>
    <div is='SwiperPlay' :config='config' :tags='tags'></div>
  </div>
</template>

<script>
import SwiperPlay from './SwiperPlay';
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      config: {},
      tags: [1, 2, 3, 4],
    };
  },
  mounted() {
    this.config.width = 100;
  },

  components: {
    SwiperPlay,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
