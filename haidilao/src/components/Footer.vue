<template>
  <footer class="home-footer">
    <ul>
      <li>
        <router-link to="/">
          <i class="iconfont"> &#xe601;</i>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/order">
          <i class="iconfont"> &#xe609;</i>
          <span>订餐</span>
        </router-link>
      </li>
      <li>
        <router-link to="/orderinfo">
          <i class="iconfont"> &#xe61a;</i>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .home-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: .49rem;
    background-color: #ffffff;
    opacity: 0.95;
    z-index: 999;
    zoom: 1;
    border-top: 1px solid #d9d9d9;
    ul {
      display: flex;
      justify-content: space-between;
      height: 100%;
      li {
        width: 33.3%;
        a {
          display: flex;
          height: 100%;
          flex-direction: column;
          justify-content: space-around;
        }
      }

    }
  }
</style>
