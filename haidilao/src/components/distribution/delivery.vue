<template>
  <section id="app">

    <header class="mui-bar mui-bar-nav bar-nav-header header-hidden" style="display: block;">
      <router-link to="/menu" class="iconfont header_ico a-link">&#xe64e;</router-link>
      <h1 class="header_title">外送自取</h1>
      <span class="outside-send">外送须知</span>
    </header>
    <!--外送内容-->
    <section id="banWeChat">

      <div class="segmented_Control">
        <router-link to="/delivery" class="segmented_left active">外送</router-link>
        <router-link to="/acquire" class="segmented_right">自取</router-link>
      </div>
      <div class="item_message1">
        <ul>
          <li @click="choosePeople">
            <span>用餐人数</span><i class="iconfont">&#xe735;</i><a>{{value}}</a>
            <div class="chosse-people" v-show="show">
              <el-select v-model="value" placeholder="请选择" @change="setPeopleNum">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-button class="btn" @click="notarize" type="success">确认</el-button>
              <el-button class="btn" @click="cancle" type="danger">取消</el-button>
            </div>

          </li>
          <li class="shipping_address">
            <router-link class="a-link" to="/distribution_info">
            <span><span class="iconfont"
                        style="color: #d43d3d;">&#xe619;
          </span>请填写收货地址</span>
              <i
                class="iconfont">&#xe735;</i>
            </router-link>
          </li>
          <li class="dishes_variety">
            <span>菜品</span>
          </li>
          <ol class="dishes_variety_list">
            <li v-for="item in product" :key="item.id"><p>{{item.name}}</p>
              <p>{{item.num}}整份</p>
              <p>¥<i>{{item.price}}.00</i></p></li>
          </ol>
          <li class="message1_cost"><span>外送费用</span><a>0</a><i>￥</i></li>
          <li class="message1_serve_cost"><span>专人服务费</span><a></a><i>￥</i></li>
          <li class="special_requirements" @click="inputdes">
            <span>特殊要求</span><a></a><i class="iconfont">&#xe735;</i>
            <div class="custrom-des" v-show="showdes">
              <el-input type="textarea" v-model="desc" @change="setDes"></el-input>
              <el-button class="btn" @click="notarize" type="success">确认</el-button>
              <el-button class="btn" @click="cancledes" type="danger">取消</el-button>
            </div>
          </li>
          <li class="cate_invoice"><span>发票信息</span><a></a><i class="iconfont">&#xe735;</i></li>

        </ul>

        <p><span>如需自主野炊，豪华野炊，请拨打</span><span style="color: #007aff">4008 107 107</span></p>
      </div>
      <section class="mark" v-show="mark"></section>
    </section>
    <footer>
      <div class="cart">
        <span class="icon-shopcar">需支付¥<strong class="allMoney">0</strong></span>
      </div>
      <router-link to="/myorderseat" class="footer_next" data-code="10086" description="提交外卖自取订单">提交订单</router-link>
    </footer>

  </section>

</template>

<script>
  export default {
    data() {
      return {
        product: [],
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
        show: false,
        desc: '',
        showdes: false,
        mark: false,
        allMoney: 0
      }
    },
    mounted() {
      let
        shopCart = [],
        allMoney = jq('.allMoney'),
        data = []

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
        this.value = this.$session.get('peopleNum')
        this.desc = this.$session.get('desc')
      }

    },
    computed: {},
    methods: {
      choosePeople(e) {
        this.show = true
        this.mark = true
        e.stopPropagation()
      },
      inputdes(e) {
        this.showdes = true
        this.mark = true
        e.stopPropagation()
      },
      notarize(e) {
        this.show = false
        this.showdes = false
        this.mark = false
        e.stopPropagation()
      },
      cancle(e) {
        this.value = '1'
        this.show = false
        this.mark = false
        e.stopPropagation()
      },
      cancledes(e) {
        this.des = ''
        this.show = false
        this.showdes = false
        this.mark = false
        e.stopPropagation()
      },
      setPeopleNum() {
        this.$session.set('peopleNum', this.value)
      },
      setDes(e) {
        this.$session.set('desc', e)
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "../../public/css/distribution.css";

  .mark {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
  }

  .chosse-people {
    padding: .3rem 0;
    background-color: whitesmoke;
    border-radius: .1rem;
  }

  .btn {
    margin-top: .3rem;
  }

  .custrom-des {
    position: absolute;
    top: -1rem;
    left: .4rem;
    width: 80%;
    background-color: white;
    border-radius: .1rem;
    z-index: 99;
    padding: .3rem 0;
  }

  .a-link {
    display: block;
    width: 100%;
  }

  header .header_ico {
    position: absolute;
    left: .1rem;
    width: .5rem;
  }
</style>
