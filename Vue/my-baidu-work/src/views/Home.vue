<template>
  <div>
    Home
    <div is='HelloWorld' :data='data'></div>
  </div>
</template>

<script>
import { usualReq } from '@/api/usualRequest'
import HelloWorld from '@/components/HelloWorld'
export default {
  data() {
    return {
      data: [],
      
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      let result = await usualReq()
      this.data = result.data
    },
  },
  components: {
    HelloWorld,
  },
}
</script>

<style scoped>

</style>
