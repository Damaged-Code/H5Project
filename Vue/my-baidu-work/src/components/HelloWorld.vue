<template>
  <div class="hello" v-bind='$attrs'>
    <h1>{{ msg }}</h1>
    <h2>{{data}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    data:{

    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
