<template>
  <div class='main'>
    <div is='Graph'></div>
  </div>
</template>

<script>
import Graph from './Echarts/Graph-01/main.vue'
export default {
  data() {
    return {
      data: [],
    }
  },
  created() {},
  methods: {},
  components: {
    Graph,
  },
}
</script>

<style scoped>
.main{
  width: 100%;
  height: 100%;
}
</style>
