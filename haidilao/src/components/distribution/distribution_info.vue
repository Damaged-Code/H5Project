<template>
  <section>
    <div id="head">
      <router-link to="/delivery">
        <i class="iconfont">&#xe64e;</i>
      </router-link>
      <div id="order">
        <span>详细信息</span>
      </div>

    </div>
    <section>
      <ul>
        <li>
          <span>姓名：</span>
          <input type="text" v-model="username" @change="setUsername" placeholder="请输入姓名"/>
          <div id="choose">
            <input type="radio" @change="setSex" checked name="sex"/><span>先生</span>
            <input type="radio" @change="setSex1" name="sex"/><span>女士</span>
          </div>
        </li>
        <li>
          <span>手机号：</span>
          <input type="text" v-model="tel" @change="setTel" placeholder="请输入手机号码"/>
        </li>
        <li>
          <span>验证码：</span>
          <input type="text"/>
          <div>
            <button>获取验证码</button>
          </div>
        </li>
        <li>
          <span>外送地址：</span>
          <input type="text" value="" placeholder="选择配送地址"/>
          <i class="iconfont">&#xe735; </i>

        </li>
        <li>
          <span>详细地址：</span>
          <input type="text" v-model="address" @change="setAddress" placeholder="例：16号楼4栋301"/>
        </li>
      </ul>
    </section>
    <footer>
      <router-link to="/delivery" class="sure-btn"> 确定</router-link>
    </footer>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        tel: '',
        address: '',
        sex: '0',
        sex1: '1'
      }
    },
    mounted() {
      if (this.$session.get('shopCart')) {
        this.username = this.$session.get('username')
        this.tel = this.$session.get('tel')
        this.address = this.$session.get('address')
      }
    },
    methods: {
      setUsername() {
        this.$session.set('username', this.username)
      },
      setSex() {
        this.$session.set('sex', this.sex)
      },
      setSex1() {
        this.$session.set('sex', this.sex1)
      },
      setTel() {
        this.$session.set('tel', this.tel)
      },
      setAddress() {
        this.$session.set('address', this.address)
      },
    }
  }
</script>

<style scoped>
  body {
    background: #f9f9f9;
  }

  footer {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    z-index: 33;
    left: 0;
  }

  footer .sure-btn {
    display: block;
    width: 100%;
    background: #d43d3d;
    height: .5rem;
    line-height: .5rem;
    font-size: 1.6em;
    color: #fff;
    padding: 0;
    border-radius: 0;
    border: 0;
  }

  #head {
    height: 0.44rem;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
  }

  #head i {
    margin-left: 0.1rem;
    font-size: 0.2rem;
    color: red;
  }

  #head div {
    width: 100%;
    /*background: green;*/
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.12rem;
  }

  section {
    min-height: 1.5rem;
    width: 95%;
    margin: 0 auto;
  }

  section ul {
    min-height: 1.5rem;
    width: 100%;

  }

  section ul li {
    height: 0.4rem;
    width: 100%;
    margin-bottom: 0.1rem;
    background: white;
    display: flex;
    /*justify-content: center;*/
    align-items: center;
    font-size: 0.14rem;
  }

  section ul li span {
    display: flex;

  }

  section ul li > input {
    flex: 1;
    border: none;
    outline: none;
  }

  section ul li div {
    margin-left: 0.1rem;
    width: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section ul li div button {
    background: #d43d3d;
    color: white;
    outline: none;
    border: none;
  }

  section ul li i {
    margin: 0 0.02rem;
  }

  section ul li input {
    color: #37434e;
    border-bottom: 1px solid #ccc;
  }
</style>
