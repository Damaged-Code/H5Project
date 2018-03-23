<template>
  <div id="app">
    <section is="qrCode"></section>
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
  import qrCode from './components/comonts/smallPro/index'
  export default {
    data () {
      return {
        isRouterAlive: true
      }
    },
    components: {
      qrCode,
    },
    methods: {
      reload () {
        this.isRouterAlive = false
        this.$nextTick(() => (this.isRouterAlive = true))
      }
    },

  }
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
