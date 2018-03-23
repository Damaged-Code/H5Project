<template>
  <div class="center-content">
    <div class="main clearfix" v-for="data in shopInfo" :key="data.ID">
      <div class="pull-left imgs clearfix">
        <div class="pull-left img">
          <div class="tags clearfix">
          </div>
          <div id="min-img" ref="minbox">
            <img id="img-show" v-lazy="data.bigPic[0]" @mouseenter.self="fdjPro" alt="" ref="imgShow">
            <div class="magnifier move-object hide"></div>
            <div class="magnifier move-over hide"></div>
            <div id="max" class="magnifier max hide" ref="maxbox">
              <img id="big" :src="data.fdjPoc[0]" alt="" ref="maxImg">
            </div>
          </div>
        </div>
        <div id="thumbs" class="pull-right thumbs">
          <div class="thumb-wrap" v-for="(item,index) in data.smallPic" :key="index" ref="thumb">
            <img class="thumb" v-lazy="item" alt="" @mouseenter.self="isHover" >
            <span v-for="(item,index) in data.bigPic" :key="index" ref="bigimg" style="opacity: 0;position: absolute">
              {{item}}
            </span>
          </div>
        </div>
      </div>
      <div class="pull-right infos">
        <h1 class="name">{{data.name}}</h1>
        <div class="line"></div>
        <p class="market-price">
          <span class="price-row">
            <span class="title">吊牌价：</span>
            <span class="price has-other-price">¥{{data.price}}</span>
          </span>
        </p>
        <span id="add-to-cart" class="buy-btn item-buy add-to-cart" @click="addCart" ref="addToCart"> <i class="iconfont">
          </i> 加入购物车 </span>
      </div>
      <div class="alertBox" ref="alertBox">
        <h3>加入购物车成功</h3>
        <button class="confrim" ref="confirmBox" @click="Confirm">确定</button>
      </div>
      <div class="shopCart" id="shopCart"></div>
    </div>
  </div>
</template>

<script>
  import PicZoom from 'vue-piczoom'
  import Cookie from 'js-cookie'
  var isUpdata = 'not',
       num = 0
	export default {
    created(){
        isUpdata = 'not',
        num = 0
    },
	  data(){
	    return{
        shopInfo: 0,
      }
    },
	  mounted(){
	    let shopID = this.$store.getters.shopID.shop_ID,
          shopCartID  = this.$store.getters.shopCartID.shopCart_ID,
          Data = 0,
          _this = this,
          info = 0,
          shopCartIDJson = {},
          DataArr = [],
          DataArr1 = [];
      shopCartID = [...new Set(shopCartID)]
      shopCartIDJson.shopCartID = shopCartID
      Cookie.set('shopCartID',shopCartIDJson)
	    _$(function () {
        _$.ajax({type: "POST",
          url: "http://localhost/yohoAPI/goodsInfo.php",
          success: function(msg){
            Data =JSON.parse(msg)
            for(let data of Data){
              DataArr.push(JSON.parse(JSON.parse(data['shopInfo'])))
            }
            info = DataArr
            for(let datas of info){
              if(shopID == datas.ID){
                DataArr1.push(datas)
              }
            }
            _this.shopInfo = DataArr1
          }},'json')
      })

    },
    methods:{
	    isHover(){
	      let tag = this.$refs,
            bigimg = _$(tag.bigimg),
            imgShow = _$(tag.imgShow),
            shopCart= _$('#shopCart'),
            imgUrl = 0,
            fjdimf = this.shopInfo[0]['fdjPoc'],
            thumb = _$(tag.thumb)
	      thumb.hover(function () {
          _$(this).addClass('active')
          imgShow.attr('src',bigimg.eq(_$(this).index()).text())
          imgShow.attr('url',fjdimf[_$(this).index()])
          imgUrl  = bigimg.eq(_$(this).index()).text().trim()
          shopCart.css('background-image',`url("${imgUrl}")`)
        },function () {
          _$(this).removeClass('active')
        })
      },
      fdjPro(){
        let tag = this.$refs,
            maxImg = _$(tag.maxImg),
            imgShow = _$(tag.imgShow),
            maxbox = _$(tag.maxbox),
            minbox = _$(tag.minbox),
            move_object = _$('.move-object')
        imgShow.hover(function () {
          maxImg.attr('src',_$(this).attr('url'))
          Fdj(minbox,maxbox,move_object,maxImg)
        },function () {
        })
      },
      addCart(){
        let tag = this.$refs,
            _this = this,
            user = this.$store.getters.userInfo.user_Info,
            shopID = this.$store.getters.shopID.shop_ID,
            alertBox = _$(tag.alertBox),
            shopCart= _$('#shopCart'),
            add_to_cart = _$(tag.addToCart)
            if(user){
                  num++
                  alertBox.animate({
                    opacity:1,
                    top: '40%',
                  },500)
                  _this.$store.dispatch('setShopCart',shopID)
                  if(num > 1){
                     isUpdata = 'yes'
                  }
                  _$.ajax({
                    type:'post',
                    url:'http://localhost/yohoAPI/shopCart',
                    data:`username=${user.split('&')[0]}&shopID=${shopID}&shopNum=${num}&isUpdata=${isUpdata}`,
                    success: function(msg){
                      console.log(msg)
                    }
                  })
              shopCart.addClass('shopCartScale')
              shopCart.animate({
                                 top:-150,
                                 left:1000,
                                 opacity:1
                               },1000,function () {
                shopCart.removeClass('shopCartScale')
                shopCart.css({top:100,
                               left:120,
                               opacity:0})
              })
            }
            else {
                  alert('用户尚未登录，请先登录')
            }

      },
      Confirm(){
	      let tag = this.$refs,
            alertBox = _$(tag.alertBox)
          alertBox.animate({
            opacity:0,
            top: '50%',
          },500)
      },
    },
    components:{
      PicZoom
    }
	}
	function Fdj(minbox,maxbox,move_object,maxImg) {
    minbox.mousemove(function (e) {
      maxbox.removeClass('hide')
      move_object.removeClass('hide')
      let event = e || window.event;  //兼容多个浏览器的event参数模式
      let left = event.clientX - minbox.offset().left  - move_object.width() / 2;
      let top = event.clientY - minbox.offset().top  - move_object.width() / 2;
      if (left < 0) {
        left = 0;
      } else if (left > (minbox.width() - move_object.width())) {
        left = minbox.width() - move_object.width();
      }
      if (top < 0) {
        top = 0;
      } else if (top > (minbox.height() - move_object.height())) {
        top = minbox.height() - move_object.height();

      }
      move_object.css('left',`${left}px`);   //oSmall.offsetLeft的值是相对什么而言
      move_object.css('top',`${top}px`);
      var percentX = left / (minbox.width() - move_object.width());
      var percentY = top / (minbox.height() - move_object.height());
      maxImg.css({left: -percentX * (maxImg.width() - maxbox.width()),
        top: -percentY * (maxImg.height() - maxbox.height())})
    })
    minbox.mouseout(function () {
      maxbox.addClass('hide')
      move_object.addClass('hide')
    })
  }
</script>

<style lang="scss" scoped>
  .center-content {
    width: 1150px;
    margin-left: auto;
    margin-right: auto;
    .main {
      width: 1150px;
      min-height: 560px;
      position: relative;
      .img {
        position: relative;
        width: 420px;
        height: 600px;
        background-color: #fef8e8;
      }
      .img-show {
        display: block;
        width: 420px;
        height: 560px;
      }
      .magnifier.move-object {
        height: 314px;
        width: 314px;
        background-color: rgba(0,0,0,.5);
        top: 0;
        right: 0;
        position: absolute;
        z-index: 5;
      }
      .magnifier.move-over {
        position: absolute;
        width: 420px;
        height: 560px;
        z-index: 2;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.5);
      }
      .thumb {
        display: block;
        width: 71px;
        height: 96px;
        cursor: pointer;
        margin-bottom: 15px;
        border: 2px solid #fff;
      }
      .thumbs {
        width: 75px;
        height: 560px;
        margin-left: 10px;
        margin-right: 60px;
        overflow: hidden;
      }
      .thumb-wrap.active {
        background-color: rgba(0,0,0,.5);
      }
      .magnifier.max{
        width: 558px;
        height: 558px;
        border: 2px solid #b0b0b0;
        background: #fff;
        display: block;
        position: absolute;
        overflow: hidden;
        left: 515px;
        top: 0;
        z-index: 100;
        img{
          position: absolute;
        }
      }
      .infos {
        width: 585px;
        text-align: left;
      }
      .name {
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
      }
      .line {
        width: 100%;
        height: 2px;
        border-bottom: 1px solid #eaeceb;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .price-row {
        display: inline-block;
        height: 20px;
        margin-bottom: 10px;
      }
      .title {
        color: #000;
        font-size: 13px;
        letter-spacing: 5px;
        line-height: 20px;
      }
      .price {
        color: #000;
        font-size: 22px;
        line-height: 24px;
        font-weight: 700;
        display: inline-block;
        vertical-align: middle;
      }
      .shopCart{
        position: relative;
        top: 100px;
        left: 120px;
        width: 200px;
        height: 200px;
        border-radius: 100%;
        background-color: rgb(245,247,246);
        background-position: center;
        background-size: 100px 200px;
        background-repeat: no-repeat;
      }
    }
    .buy-btn {
      position: absolute;
      z-index: 9;
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 15px;
      height: 46px;
      line-height: 46px;
      width: 180px;
      text-align: center;
      color: #fff;
      background: #d0021b;
      font-size: 16px;
      box-sizing: border-box;
      cursor: pointer;
      .iconfont{
        cursor: pointer;
      }
    }
    .alertBox{
      position: absolute;
      top : 50%;
      opacity: 0;
      left: 0;
      right: 0;
      margin:0 auto;
      width: 200px;
      height: 100px;
      background-color: white;
      border : 1px solid #e4e4e4;
      z-index: 99;
      border-radius : 3px;
      h3{
        line-height: 100px;
      }
      .confrim{
        width: 60px;
        height: 20px;
        position: absolute;
        bottom: 10px;
        right: 0;
        left: 0;
        margin: 0 auto;
        background-color: #a5e2ff;
        border : 0;
        color: white;
        border-radius : 3px;
        &:hover{
          cursor: pointer;
          background-color: #9dd0ff;
        }
      }
    }
  }
  .shopCart{
    position: relative;
    top:100px;
    left: 120px;
    opacity: 0;
    background-color: rgb(245,246,247);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100px 200px;
  }
  .shopCartScale{
    transform: scale(0.5);
  }
  .pull-left {
    float: left;
  }
  .pull-right{
    float: right;
  }
  .hide {
    display: none!important;
  }
</style>
