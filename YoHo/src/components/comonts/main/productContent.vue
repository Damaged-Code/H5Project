<template>
  <div class="center-content clearfix">
    <div class="goods-container clearfix">
      <div class="good-info" v-for="datas in goods" :key="datas.ID" @click="getID(datas.ID)">
        <div class="tag-container clearfix"></div>
        <div class="good-detail-img">
          <router-link class="good-thumb" to="/page/shopInfo" >
            <img class="lazy" v-lazy="datas.bigPic[0]" alt="">
          </router-link>
        </div>
        <div class="good-detail-text ">
          <router-link to="/page/shopInfo">{{datas.name}}</router-link>
          <p class="brand">
            <router-link to="/page/shopInfo">{{datas.brand}}</router-link>
          </p>
          <p class="price ">
            <span class="sale-price prime-cost">￥{{datas.price}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
	  data(){
	   return{
	     goods: 0
     }
    },
    mounted(){
	    let _this = this,
          DataArr = [],
          Data = 0;
      _$(function () {
        _$.ajax({type: "POST",
          url: "http://localhost/yohoAPI/goodsInfo.php",
          success: function(msg){
            Data =JSON.parse(msg)
            for(let data of Data){
              DataArr.push(JSON.parse(JSON.parse(data['shopInfo'])))
            }
            _this.goods = DataArr
          }},'json')
      })
    },
    methods:{
      getID(ID){
        this.$store.dispatch('setShopID',ID)
        this.$store.dispatch('setShopCartID',ID)
      }
    }
	}
</script>

<style lang="scss" scoped>
.center-content {
  width: 1150px;
  margin-left: auto;
  margin-right: auto;
  .goods-container {
    height: auto;
    padding-top: 25px;
    position: relative;
    width: 980px;
    margin: auto;
    .good-info {
      width: 235px;
      margin-bottom: 30px;
      float: left;
      margin-right: 10px;
      .tag-container {
        font-size: 12px;
        height: 22px;
        line-height: 22px;
      }
      .good-detail-img {
        width: 100%;
        height: 315px;
        position: relative;
      }
      .good-detail-img {
        height: 315px;
        img.lazy {
          display: block;
          overflow: hidden;
          width: 100%;
          height: 100%;
          color: #fff;
        }
        background-color: #f9f6e3;
      }
      .good-thumb{
        display: block;
        overflow: hidden;
        width: 100%;
        height: 100%;
        color: #fff;
      }
      .good-detail-text {
        text-align: left;
        a{
          margin-top: 16px;
          line-height: 1.5;
          display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .brand a {
          color: #666;
          line-height: 1.5;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
        }
        .price {
          margin-top: 5px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
