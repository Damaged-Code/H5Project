<template>
  <main>
    <header>
      <router-link to="/">
        <i class="iconfont"> &#xe64e;</i>
      </router-link>

      <h2>订单详情</h2>
    </header>
    <section class="content">
      <ul>
        <li v-for="item in orderlist" :key="item.id">

          <img :src="item.picUrl" alt="">
          <section>
            <p class="name">店名：</p>
            <p class="num">{{item.shopName}}</p>
          </section>
          <section>
            <p class="price">总价：￥{{item.money}}.00</p>
          </section>
        </li>
      </ul>

    </section>
    <footer is='footerNav'></footer>
  </main>
</template>

<script>
import footerNav from '../Footer'
export default {
    data() {
        return {
            orderlist: [],
            money: 0
        }
    },
    mounted() {
        let order = 0,
            datas = 0
        this.$http({
            method: 'get',
            baseURL: 'http://localhost:3007',
            url: `/order`,
            withCredentials: true
        })
            .then(res => {
                order = res.data.result
                for (let [index, item] of order.entries()) {
                    this.money += item.money

                    this.$http({
                        method: 'post',
                        baseURL: 'http://localhost:3007',
                        url: `/shop`,
                        withCredentials: true,
                        params: { id: item.shop_id }
                    })
                        .then(res => {
                            datas = res.data.result[0]
                            order[index].picUrl = datas.picUrl
                            order[index].shopName = datas.name
                            this.orderlist.push(order[index])
                            console.log(this.orderlist)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            })
            .catch(err => {
                console.log(err)
            })
    },
    components: {
        footerNav
    }
}
</script>

<style scoped lang='scss'>
main {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
}
header {
    position: relative;
    height: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-bottom: 1px solid rgb(241, 239, 239);
    a {
        position: absolute;
        left: 0.2rem;
    }
    .iconfont {
        line-height: 0.5rem;
        color: #d43d3d;
    }
    h2 {
        line-height: 0.5rem;
        font-size: 0.2rem;
        font-style: inherit;
        font-weight: 500;
    }
}
.content {
    width: 100%;
    ul {
        width: 100%;
        li {
            width: 100%;
            height: 1rem;
            margin-bottom: 0.05rem;
            background-color: white;
            display: flex;
            justify-content: space-between;
            img {
                width: 33%;
                height: 100%;
            }
            section {
                display: flex;
                align-items: center;
            }
        }
    }
}
</style>
