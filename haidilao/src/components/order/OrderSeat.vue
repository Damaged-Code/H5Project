<template>
  <section>
    <header>

      <div id="header01">
        <router-link :to="{name:'shopdetail',params:{id:shopId}}">
          <i class="iconfont">&#xe64e;</i>
        </router-link>
        <span id="seat">订座</span>
        <img :src="shop.picUrl" alt="">
      </div>
    </header>
    <section>
      <ul>
        <li class="list">
          <div>
            <i class="iconfont">&#xe627;</i>
            <span>用餐时间<i>*</i>
						</span>
            <el-time-select
              v-model="time"
              arrow-control
              clearable
              :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30'
                }"
              placeholder="选择时间">
            </el-time-select>
          </div>
        </li>
        <li class="list">
          <div>
            <i class="iconfont">&#xe746;</i>
            <span>用餐人数<i>*</i><span>1</span>
						</span>
            <div class="choose">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </li>
        <li class="list">
          <div>
            <i class="iconfont">&#xe61a;</i>
            <span>姓&nbsp;&nbsp;&nbsp;&nbsp;名<i>*</i>
							<input type="text" value="" class="importname" placeholder="请输入姓名"/>
							<input type="radio" name="radio"/>先生
							<input type="radio" name="radio"/>女士
						</span>
          </div>
        </li>
        <li class="list">
          <div>
            <i class="iconfont">&#xe768;</i>
            <span>手&nbsp;机&nbsp;号<i>*</i>
							<input type="text" value="" class="importname" placeholder="请输入手机号"/>
						</span>
          </div>
        </li>
        <li class="list">
          <div>
            <span>验&nbsp;证&nbsp;码<i>*</i>
							<input type="text" value="" class="importname" placeholder="请输入验证码"/>
						</span>
          </div>
          <button>获取验证码</button>
        </li>
        <li class="list">
          <div>
						<span>特殊需求
						<input type="text" class="importname"/>
						</span>
          </div>
          <i class="iconfont">&#xe735;</i>
        </li>
      </ul>
    </section>
    <footer>
      <a href="#">确定</a>
    </footer>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        shopId: 0,
        shop: [],
        options: [{
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }, {
          value: '5',
          label: '5'
        }, {
          value: '6',
          label: '6'
        }, {
          value: '7',
          label: '7'
        }, {
          value: '8',
          label: '8'
        }, {
          value: '9',
          label: '9'
        }, {
          value: '10',
          label: '10'
        }],
        value: '1',
        time: '',
        username: '',
        sex: '',
        tel: '',
        desc: ''
      }
    },
    mounted() {
      this.shopId = this.$route.params.id
      this.$http({
        method: 'post',
        baseURL: 'http://10.36.139.179:3007',
        timeout: 3000,
        url: `/shop`,
        params: {id: this.shopId},
        withCredentials: true
      })
        .then((res) => {
          this.shop = res.data.result[0]

        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
</script>

<style scoped>
  header {
    height: 1.44rem;
    width: 100%;
  }

  #header01 {
    height: 0.44rem;
    width: 100%;
    background: #ffffff;
  }

  header a {
    color: red;
    display: block;
    float: left;
    margin-left: 0.1rem;
    line-height: 0.44rem;
    font-size: 0.16rem;
    font-weight: 600;
  }

  header img {
    height: 1rem;
    width: 100%;

  }

  #seat {
    display: block;
    height: 0.44rem;
    width: 0.5rem;
    line-height: 0.44rem;
    text-align: center;
    margin: 0 auto;
    font-size: 0.16rem;
  }

  section {
    width: 100%;
    height: auto;
  }

  section ul {
    height: auto;
    width: 100%;
  }

  ul .list {
    height: 0.6rem;
    width: 100%;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul li div {
    width: 95%;
    display: flex;
    align-items: center;
  }

  ul li div img {
    margin-right: 0.1rem;
    margin-left: 0.1rem;
    /*margin-top: 0.1rem;*/
  }

  ul li div span {
    margin-left: 0.1rem;
  }

  ul li div span i {
    color: red;
    margin-left: 0.01rem;
  }

  ul li > i {
    width: 5%;
    margin-right: 0.1rem;
  }

  ul li:nth-child(3) div {
    width: 100%;
  }

  ul li:nth-child(5) div {
    width: 70%;
  }

  ul li > button {
    margin-right: 0.1rem;
    background: #f5f5f5;
    color: #c3adc3;
    outline: none;
    border: none;
    width: 30%;
  }

  ul li div span input.importname {
    height: 0.2rem;
    width: 0.8rem;
    outline: none;
    border: none;
    color: #ccc;
  }

  ul li input:nth-child(2) {
    width: 0.01rem;
  }

  footer {
    position: absolute;
    bottom: 0;
    height: 0.48rem;
    width: 100%;
    background: #d43d3d;
  }

  footer a {

    height: 100%;
    width: 100%;
    display: block;
    color: white;
    font-size: 0.16rem;
    line-height: 0.48rem;
    margin: 0 auto;
  }

  .el-scrollbar__view el-select-dropdown__list li {
    height: auto !important;
    border-bottom: 0 !important;
  }
</style>
