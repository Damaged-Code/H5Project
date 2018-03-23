<template>
  <section>
    <header class="mui-bar mui-bar-nav bar-nav-header header-hidden" style="display: block;">
      <router-link to="/menu" class="iconfont header_ico">&#xe64e;</router-link>
      <h1 class="header_title">外送自取</h1>
      <a class="outside-send">外送须知</a>
    </header>
    <!--自取内容-->
    <section id="banWeChat">
      <div class="segmented_Control">
        <router-link to="/delivery" class="segmented_left ">外送</router-link>
        <router-link to="/acquire" class="segmented_right active">自取</router-link>
      </div>
      <div class="item_message1 item_message11">
        <ul>
          <li @click="chooseShop">
            <span>门店选择</span><i class="iconfont">&#xe735;</i><a>{{cityname}}</a>
            <div class="chosse-shop" v-show="show">
              <el-select class="select" v-model="value" @change="cityName" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-button class="btn" @click="cancle" type="success">确认</el-button>
              <el-button class="btn" @click="cancle" type="danger">取消</el-button>
            </div>
          </li>
          <li class="acquire_name">
            <span>姓&nbsp;名<span class="message_span">*</span></span>
            <input type="text" name="" value="" placeholder="请输入您的姓名"/>
          </li>
          <li class="acquire_phone">
            <span>手机号<span class="message_span">*</span></span>
            <input type="text" name="" value="" placeholder="请输入您的电话号码"/>
          </li>
          <li class="acquire_verification">
            <span>验证码<span class="message_span">*</span></span>
            <input type="text" name="" value=""/>
            <button>获取验证码</button>
          </li>
          <!-- <ol class="dishes_variety_list">
			 <li><p>锅底</p>
			   <p>1整份</p>
			   <p>¥<i>69.00</i></p></li>
		   </ol>-->
          <li class="dishes_variety"><span>菜品</span></li>
          <ol class="dishes_variety_list">
            <li v-for="item in product" :key="item.id"><p>{{item.name}}</p>
              <p>{{item.num}}整份</p>
              <p>¥<i>{{item.price}}.00</i></p></li>
          </ol>
          <li class="cate_invoice" style="margin-top: 5px;"><span>发票信息</span><a></a><i class="iconfont">&#xe735;</i>
          </li>

        </ul>

        <p><span>自取不提供炉具，如果需要炉具需付500押金；自取的炉具，需要您亲自送回，如需海底捞上门取回，需要收取标准的外送费</span></p>
      </div>
      <section class="mark" v-show="show"></section>
    </section>
    <footer>
      <div class="cart">
        <span class="icon-shopcar">需支付¥<strong class="allMoney">0</strong></span>
      </div>
      <button class="footer_next" data-code="10086" description="提交外卖自取订单" value="下一步">提交订单</button>
    </footer>

  </section>
</template>

<script>
  export default {
    data() {
      return {
        product: [],
        options: [],
        value: '',
        show: false,
        cityname: '请选择店门'
      }
    },
    mounted() {
      let
        shopCart = [],
        allMoney = jq('.allMoney'),
        data = [],
        city = []
      if (this.$session.get('shopCart')) {
        shopCart = this.$session.get('shopCart')
        for (let item of shopCart) {
          this.$http({
            method: 'post',
            baseURL: 'http://10.36.139.179:3007',
            url: `/product`,
            withCredentials: true,
            params: {id: item.id}
          })
            .then(async (res) => {
              data.push(await res.data.result[0])
              if (data.length === shopCart.length) {
                for (let tag of shopCart) {
                  for (let [index, key] of data.entries()) {
                    if (key._id === tag.id) {
                      data[index].num = tag.num
                    }
                  }
                }
              }
              this.product = data
            })
            .catch((err) => {
              console.log(err);
            })
        }
        allMoney.text(this.$session.get('money'))
      }
      this.$http({
        method: 'get',
        baseURL: 'http://10.36.139.179:3007',
        url: `/shop`,
        withCredentials: true,
      })
        .then((res) => {
          city = res.data.result
          for (let item of city) {
            this.options.push({
              value: item._id,
              label: item.name
            })
          }
        })
        .catch((err) => {
          console.log(err);
        })
    },
    methods: {
      chooseShop(e) {
        this.show = true
        e.stopPropagation()
      },
      cancle(e) {
        this.show = false
        e.stopPropagation()
      },
      cityName() {
        this.$http({
          method: 'post',
          baseURL: 'http://10.36.139.179:3007',
          url: `/shop`,
          params: {id: this.value},
          withCredentials: true,
        })
          .then((res) => {
            this.cityname = res.data.result[0].name
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  }
</script>

<style scoped>
  /*头部*/
  @import "../../public/css/distribution.css";

  .chosse-shop {
    position: absolute;
    top: .3rem;
    left: .4rem;
    width: 80%;
    background-color: white;
    z-index: 99;
    border-radius: .03rem;
    padding: .1rem 0;
  }

  .mark {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
  }

  .btn {
    margin-top: .3rem;
  }

  .select {
    width: 80%;
  }
</style>
