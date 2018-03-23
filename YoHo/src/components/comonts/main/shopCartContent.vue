<template>
  <div class="shop-cart yoho-page clearfix">
    <div class="order-edit order-cart" id="cart-page">
      <div class="order-title cart-page-title order-ensure-title">
        <ul class="shopping-step">
          <li class="step first focus">查看购物车</li>
          <li class="step">填写订单</li>
          <li class="step last">付款，完成购买</li>
        </ul>
      </div>
      <div class="cartnew-tips">
        <div class="tipsbox" id="tipsbox">
          <a href="javascript:void(0);" class="btn-close" title="关闭"></a>
          <strong>温馨提示：</strong>亲爱的顾客，您还没有
          <a href="//www.yohobuy.com/signin.html?refer=%2F%2Fwww.yohobuy.com%2Fcart%2Fcart"
             class="a_eu"
          >登录</a>
                                哦，所有商品价格、活动信息以登录后显示为准.
        </div>
      </div>
      <div class="order-pay" id="Y_CartListWrap">
        <div class="pay-wapper">
          <div class="shop-cart-empty">
            <i class="iconfont">&#xe61e;</i>
            <p>购物车空空的哦，去看看心仪的商品吧~</p>
            <router-link to="/page/yohoProduct">去购物</router-link>
          </div>
          <div class="pay-wapper hide" data-role="order-cart" ref="payWapper" >
            <div class="cart-title">
              <p class="left" style="width:6%;">
                <i class="cart-item-check-title cart-item-check iconfont">&#xe633;</i>&nbsp;&nbsp;全选
              </p>
              <p style="width:35%">商品信息</p>
              <p style="width:14%">单价</p>
              <p style="width:15%;">数量</p>
              <p style="width:16%;">小计</p>
              <p class="right" style="width:11.8%;">操作</p>
            </div>
            <div class="promotion-pool clearfix" id="promotion-pool" v-if="show">
              <ul class="table table-gropu clearfix"  v-for="data in goods_info" :key="data.ID">
                <li class="pre-sell-box tr">
                  <div class="pay-pro td " style="width: 368px;">
                    <i class="cart-item-check iconfont "
                       data-role="cart-item-check"
                       data-goodstype="ordinary"
                    ></i>
                    <a class="pay-pro-icon"
                       data-role="item-img"
                       href="//www.yohobuy.com/product/51652340.html"
                       target="_blank"
                    >
                      <img v-lazy="data.bigPic[0]">
                    </a>
                    <p class="pay-pro-info">
                      <a href="" target="_blank" data-role="item-title">
                          {{data.name}}
                      </a>
                      <em class="pay-pro-detail">
                                                        <span>
                                                            <b title="迷彩绿">颜色：迷彩绿</b>
                                                            尺码：S<i class="iconfont"></i>
                                                        </span>
                      </em>
                    </p>
                  </div>
                  <div class="product-price td " style="width:148px;">
                    <p class="p-product-price">¥{{data.price}}</p>
                  </div>
                  <div style="width:128px;" class="adjust-cart-num td">
                    <div class="cart-num-cont">
                                                        <span class="minus cart-num-btn
                                                                    disabled"
                                                        >
                                                          <i class="iconfont icon-minus">&#xe6bc;</i>
                                                        </span>
                      <input type="text" :value="data.num" readonly="readonly">
                      <span class="plus cart-num-btn ">
                        <i class="iconfont icon-plus">&#xe635;</i>
                      </span>
                    </div>

                    <p class="tip-message "></p>
                  </div>
                  <div style="width:160px;" class="sub-total red td">
                    ¥{{data.price}}
                  </div>
                  <div style="width:100px;" class="cart-operation td">
                    <span class="cart-del-btn" data-role="cart-del-btn" @click="delData($event)" :data-id="data.ID"  ref="cartDelBtn">删除</span>
                    <span class="cart-col-btn" data-role="cart-mov2fav-btn">移入收藏</span>
                  </div>
                </li>
              </ul>
            </div>
            <!-- 总价计算 -->
            <div class="cart-fixed-submit">
              <div class="cart-fixed-wrap">
                <div class="center-content clearfix">
                  <div class="fixed-option">
                    <i class="cart-item-check iconfont" id="cbSelAllGoods"></i>
                    <span class="check-all-sum">全选</span>
                    <a class="delAll delete-all-sel" href="javascript:void(0);">删除选中商品</a>
                    <a class="removeAll remove-all-2fav" href="javascript:void(0);">移入收藏夹</a>
                    <a class="emptyDisabled clean-all-disable" href="javascript:void(0);">清空失效商品</a>
                  </div>
                  <p class="select-num">已选商品<strong class="ins">0</strong>件</p>
                  <div class="price-sum">
                    <p class="sum">应付金额（不含邮费）：<strong><kbd>¥</kbd> {{price}}</strong></p>
                    <p class="offer">活动优惠：¥ 0.00</p>
                  </div>
                  <a href="javascript:void(0);"
                     id="Y_SubmitBtn"
                     class="btn-account right btn-account-disable"
                  >去结算</a>
                </div>
              </div>
            </div>

            <div class="modal-overflow"
                 style="display: none;"
                 data-role="mdialog"
                 id="Y_CartSelectDialog"
            >
              <div class="body-modal-black"></div>
              <div class="mmodal-dialog cart-presell-dialog" style="top:50px;margin-left: -267px;">
                <div class="close" data-role="mdialog-close">
                  <i class="iconfont"></i>
                </div>
                <div class="content">
                  <div class="detail-body">
                    <div class="slide-img">
                      <p class="sell-class-title">
                        普通商品<strong>0</strong>样&nbsp;&nbsp;&nbsp;总金额<strong>¥&nbsp;0.00</strong></p>
                      <div class="side-img-dd">
                        <div class="side-img-container">
                          <ul class="img-list">
                          </ul>
                        </div>
                        <div class="img-brand-switch" style="display: none;">
                          <a class="prev iconfont" href="javascript:;"></a>
                          <a class="next iconfont" href="javascript:;"></a>
                        </div>
                      </div>
                    </div>
                    <a class="btn-account" data-url="//www.yohobuy.com/cart/ensure" data-type="O">去结算</a>
                    <p class="pre-sell-tip">温馨提示：您需要分开结算【预售商品】和【普通商品】</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="">
    </div>

    <div class="bottom-tab bottom-tab-slide">
      <span class="bottom-title cur" data-type="fine" data-role="fine-tab">为您优选</span>
      <span class="bottom-title" data-role="latestWalk-tab" style="display: none">最近浏览</span>
      <span class="change">换一批
        <span class="iconfont change-icon">&#xe60e;</span>
            </span>
    </div>

    <div class="individual-slide bottom-slide-content">
      <!--<div data-role="together-slide" class="slide-panel"></div>-->
      <div data-role="fine-slide" class="slide-panel">
        <div class="individual-item individual-item-togetherGoods">
          <ul class="goods clearfix img-list">
            <li class="good img-item" data-id="531376" data-skn="51333314" data-index="0">
              <a href="//www.yohobuy.com/product/51333314.html" target="_blank">
                <img class="lazy"
                     data-original="//img11.static.yhbimg.com/goodsimg/2017/07/30/11/01322f8dfbc73e411f521bba90dc0e396f.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     src="//img11.static.yhbimg.com/goodsimg/2017/07/30/11/01322f8dfbc73e411f521bba90dc0e396f.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51333314.html" target="_blank">BLACKJACK
                                                                                             漫威经典印花燕尾大衣【两色可选】</a>
              <p class="price">
                <span class="sale-price sale-price-new">¥899.00</span>
                <span class="market-price">¥1499.00</span>
              </p>
              <a class="btn-add-cart" data-id="531376" data-skn="51333314" data-role="add2cart">加入购物车</a>
            </li>
            <li class="good img-item" data-id="545784" data-skn="51347942" data-index="1">
              <a href="//www.yohobuy.com/product/51347942.html" target="_blank">
                <img class="lazy"
                     data-original="//img12.static.yhbimg.com/goodsimg/2016/10/13/11/02f23181aacd094e84bd770cf32ed36402.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     src="//img12.static.yhbimg.com/goodsimg/2016/10/13/11/02f23181aacd094e84bd770cf32ed36402.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51347942.html" target="_blank">RIGEL
                                                                                             DAVIS
                                                                                             撕裂绑带长袖T恤</a>
              <p class="price">
                <span class="sale-price sale-price-new">¥297.00</span>
                <span class="market-price">¥499.00</span>
              </p>
              <a class="btn-add-cart" data-id="545784" data-skn="51347942" data-role="add2cart">加入购物车</a>
            </li>
            <li class="good img-item" data-id="923140" data-skn="51774868" data-index="2">
              <a href="//www.yohobuy.com/product/51774868.html" target="_blank">
                <img class="lazy"
                     data-original="//img11.static.yhbimg.com/goodsimg/2018/01/17/15/01fe50646523c52bd75b100581d9923a93.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     src="//img11.static.yhbimg.com/goodsimg/2018/01/17/15/01fe50646523c52bd75b100581d9923a93.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51774868.html" target="_blank">GCDS
                                                                                             Hello
                                                                                             Kitty图案连帽卫衣</a>
              <p class="price">
                <span class="sale-price ">¥1789.00</span>

              </p>
              <a class="btn-add-cart" data-id="923140" data-skn="51774868" data-role="add2cart">加入购物车</a>
            </li>
            <li class="good img-item" data-id="942294" data-skn="51798942" data-index="3">
              <a href="//www.yohobuy.com/product/51798942.html" target="_blank">
                <img class="lazy"
                     data-original="//img13.static.yhbimg.com/goodsimg/2018/01/28/17/0297efa248430237d54dd4ba7a4f870b37.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     src="//img13.static.yhbimg.com/goodsimg/2018/01/28/17/0297efa248430237d54dd4ba7a4f870b37.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51798942.html" target="_blank">converse
                                                                                             Born X
                                                                                             Raised
                                                                                             x
                                                                                             Converse
                                                                                             Jack
                                                                                             Purcell
                                                                                             (棕色)“开口笑”
                                                                                             休闲鞋</a>
              <p class="price">
                <span class="sale-price ">¥939.00</span>

              </p>
              <a class="btn-add-cart" data-id="942294" data-skn="51798942" data-role="add2cart">加入购物车</a>
            </li>
            <li class="good img-item"
                data-id="916710"
                data-skn="51767056"
                data-index="4"
                style="margin-right: 0px;"
            >
              <a href="//www.yohobuy.com/product/51767056.html" target="_blank">
                <img class="lazy"
                     data-original="//img11.static.yhbimg.com/goodsimg/2017/12/26/15/01c623c069bb3b2ffefc1a9baf6bd56f17.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     src="//img11.static.yhbimg.com/goodsimg/2017/12/26/15/01c623c069bb3b2ffefc1a9baf6bd56f17.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51767056.html" target="_blank">Ron
                                                                                             English
                                                                                             x
                                                                                             APPortfolio
                                                                                             x Made
                                                                                             by
                                                                                             Monsters「玫瑰金Police
                                                                                             Grin」黄色</a>
              <p class="price">
                <span class="sale-price ">¥3298.00</span>

              </p>
              <a class="btn-add-cart" data-id="916710" data-skn="51767056" data-role="add2cart">加入购物车</a>
            </li>
            <li class="good img-item" data-id="736710" data-skn="51550720" data-index="5">
              <a href="//www.yohobuy.com/product/51550720.html" target="_blank">
                <img class="lazy"
                     data-original="//img13.static.yhbimg.com/goodsimg/2017/11/13/15/0204c2939d896de6332950d350155dd188.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     src="//img13.static.yhbimg.com/goodsimg/2017/11/13/15/0204c2939d896de6332950d350155dd188.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51550720.html" target="_blank">Rick
                                                                                             Owens
                                                                                             拼接休闲夹克</a>
              <p class="price">
                <span class="sale-price sale-price-new">¥10449.00</span>
                <span class="market-price">¥20899.00</span>
              </p>
              <a class="btn-add-cart" data-id="736710" data-skn="51550720" data-role="add2cart">加入购物车</a>
            </li>
            <li class="good img-item" data-id="928182" data-skn="51781098" data-index="6">
              <a href="//www.yohobuy.com/product/51781098.html" target="_blank">
                <img class="lazy"
                     data-original="//img13.static.yhbimg.com/goodsimg/2017/12/29/15/025044056ae104a7f4ca067e53c8fb8d96.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     src="//img13.static.yhbimg.com/goodsimg/2017/12/29/15/025044056ae104a7f4ca067e53c8fb8d96.jpg?imageMogr2/thumbnail/190x250/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51781098.html" target="_blank">CHUMS
                                                                                             80's
                                                                                             blouson
                                                                                             男款复古运动夹克</a>
              <p class="price">
                <span class="sale-price ">¥698.00</span>

              </p>
              <a class="btn-add-cart" data-id="928182" data-skn="51781098" data-role="add2cart">加入购物车</a>
            </li>
          </ul>
          <div class="img-brand-switch">
          </div>
        </div>
      </div>
      <div data-role="latestWalk-slide" class="slide-panel" style="display:none;">
        <div class="individual-item individual-item-togetherGoods">
          <ul class="goods clearfix img-list" style="width: 2200px;">
            <li class="good img-item" data-id="" data-skn="" data-index="0">
              <a href="//www.yohobuy.com/product/51778882.html" target="_blank">
                <img class="lazy"
                     data-original="//img10.static.yhbimg.com/goodsimg/2018/01/12/16/01d29d9168bb61f8982ebd39944d0cee5d.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     src="//img10.static.yhbimg.com/goodsimg/2018/01/12/16/01d29d9168bb61f8982ebd39944d0cee5d.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51778882.html" target="_blank">izzue
                                                                                             大口袋连帽棉衣</a>
              <p class="price">
                <span class="sale-price sale-price-new">¥1299.00</span>
                <span class="market-price">¥2599.00</span>
              </p>
            </li>
            <li class="good img-item" data-id="" data-skn="" data-index="1">
              <a href="//www.yohobuy.com/product/51803620.html" target="_blank">
                <img class="lazy"
                     data-original="//img13.static.yhbimg.com/goodsimg/2018/02/04/16/0233ab704fb2b3c7414e81563d48356635.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     src="//img13.static.yhbimg.com/goodsimg/2018/02/04/16/0233ab704fb2b3c7414e81563d48356635.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51803620.html" target="_blank">BURANDO
                                                                                             ENO
                                                                                             印花双面穿男式羽绒服</a>
              <p class="price">
                <span class="sale-price ">¥1990.00</span>

              </p>
            </li>
            <li class="good img-item" data-id="" data-skn="" data-index="2">
              <a href="//www.yohobuy.com/product/51804698.html" target="_blank">
                <img class="lazy"
                     data-original="//img10.static.yhbimg.com/goodsimg/2018/02/08/16/0192cf041d7061f8caecf13daf71fa9bd3.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     src="//img10.static.yhbimg.com/goodsimg/2018/02/08/16/0192cf041d7061f8caecf13daf71fa9bd3.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51804698.html" target="_blank">EDWIN
                                                                                             涌动系列
                                                                                             白盘棕色皮带日历男表</a>
              <p class="price">
                <span class="sale-price sale-price-new">¥255.00</span>
                <span class="market-price">¥850.00</span>
              </p>
            </li>
            <li class="good img-item" data-id="" data-skn="" data-index="3">
              <a href="//www.yohobuy.com/product/51786552.html" target="_blank">
                <img class="lazy"
                     data-original="//img13.static.yhbimg.com/goodsimg/2018/02/06/10/0262f5842a259dba0aad87b63d1daf4770.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     src="//img13.static.yhbimg.com/goodsimg/2018/02/06/10/0262f5842a259dba0aad87b63d1daf4770.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51786552.html" target="_blank">CHUMS
                                                                                             拉链腰包</a>
              <p class="price">
                <span class="sale-price ">¥368.00</span>

              </p>
            </li>
            <li class="good img-item" data-id="" data-skn="" data-index="4">
              <a href="//www.yohobuy.com/product/51786560.html" target="_blank">
                <img class="lazy"
                     data-original="//img11.static.yhbimg.com/goodsimg/2018/02/05/17/01c0ae5b6ac61eb0e4236b162b86d6e8d7.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     src="//img11.static.yhbimg.com/goodsimg/2018/02/05/17/01c0ae5b6ac61eb0e4236b162b86d6e8d7.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51786560.html" target="_blank">CHUMS
                                                                                             LOGO印花长袖T恤</a>
              <p class="price">
                <span class="sale-price ">¥298.00</span>

              </p>
            </li>
            <li class="good img-item" data-id="" data-skn="" data-index="5">
              <a href="//www.yohobuy.com/product/51794566.html" target="_blank">
                <img class="lazy"
                     data-original="//img13.static.yhbimg.com/goodsimg/2018/01/23/15/021d753fc7c12996c094867cd521b3dfc1.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     src="//img13.static.yhbimg.com/goodsimg/2018/01/23/15/021d753fc7c12996c094867cd521b3dfc1.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51794566.html" target="_blank">TRENDIANO
                                                                                             字母印花套头卫衣</a>
              <p class="price">
                <span class="sale-price ">¥699.00</span>

              </p>
            </li>
            <li class="good img-item" data-id="" data-skn="" data-index="6">
              <a href="//www.yohobuy.com/product/51731510.html" target="_blank">
                <img class="lazy"
                     data-original="//img11.static.yhbimg.com/goodsimg/2017/11/27/15/01b20a1185a0439468e9dae05e27485d38.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     src="//img11.static.yhbimg.com/goodsimg/2017/11/27/15/01b20a1185a0439468e9dae05e27485d38.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51731510.html" target="_blank">BLACKJACK
                                                                                             标语印花多口袋卫衣</a>
              <p class="price">
                <span class="sale-price sale-price-new">¥309.00</span>
                <span class="market-price">¥379.00</span>
              </p>
            </li>
            <li class="good img-item" data-id="" data-skn="" data-index="7">
              <a href="//www.yohobuy.com/product/51794536.html" target="_blank">
                <img class="lazy"
                     data-original="//img13.static.yhbimg.com/goodsimg/2018/01/23/14/02c4e3d2eef5d801b682b9b1d6cc8477ff.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     src="//img13.static.yhbimg.com/goodsimg/2018/01/23/14/02c4e3d2eef5d801b682b9b1d6cc8477ff.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51794536.html" target="_blank">TRENDIANO
                                                                                             纯色双排扣长款大衣</a>
              <p class="price">
                <span class="sale-price ">¥2390.00</span>

              </p>
            </li>
            <li class="good img-item" data-id="" data-skn="" data-index="8">
              <a href="//www.yohobuy.com/product/51787044.html" target="_blank">
                <img class="lazy"
                     data-original="//img10.static.yhbimg.com/goodsimg/2018/01/11/14/0133806d07a4c9a17235f8e61fd4d5f115.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     src="//img10.static.yhbimg.com/goodsimg/2018/01/11/14/0133806d07a4c9a17235f8e61fd4d5f115.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51787044.html" target="_blank">TRENDIANO
                                                                                             字母印花圆领套头卫衣</a>
              <p class="price">
                <span class="sale-price ">¥799.00</span>

              </p>
            </li>
            <li class="good img-item" data-id="" data-skn="" data-index="9">
              <a href="//www.yohobuy.com/product/51804846.html" target="_blank">
                <img class="lazy"
                     data-original="//img10.static.yhbimg.com/goodsimg/2018/02/06/09/012ed3e1c3385c0063e4a92a79ca35875b.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     src="//img10.static.yhbimg.com/goodsimg/2018/02/06/09/012ed3e1c3385c0063e4a92a79ca35875b.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51804846.html" target="_blank">古由卡/Guuka
                                                                                             潮牌
                                                                                             日系街头灰色披风卫衣嘻哈开衫卫衣</a>
              <p class="price">
                <span class="sale-price sale-price-new">¥268.00</span>
                <span class="market-price">¥378.00</span>
              </p>
            </li>
            <li class="good img-item" data-id="" data-skn="" data-index="10">
              <a href="//www.yohobuy.com/product/51778828.html" target="_blank">
                <img class="lazy"
                     data-original="//img13.static.yhbimg.com/goodsimg/2018/01/12/18/024bb814e94dfcad8f804cf7489d9acca7.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     src="//img13.static.yhbimg.com/goodsimg/2018/01/12/18/024bb814e94dfcad8f804cf7489d9acca7.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/90"
                     style="display: block;"
                >
              </a>
              <a class="name" href="//www.yohobuy.com/product/51778828.html" target="_blank">izzue
                                                                                             ARMY
                                                                                             多口袋连帽羽绒服</a>
              <p class="price">
                <span class="sale-price ">¥2999.00</span>

              </p>
            </li>
          </ul>
          <div class="img-brand-switch">
            <a class="prev iconfont" href="javascript:;"></a>
            <a class="next iconfont" href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="loading loading-single" style="display: none"><span></span>请稍后...</div>
    <div class="modal-overflow"
         style="display: none;"
         data-role="mdialog"
         id="Y_goodsSelectWinDialog"
    >
      <div class="body-modal-black"></div>
      <div id="Y_goodsSelectWin"
           class="goods-select-win mmodal-dialog cart-together-goods"
           style="top:50px;"
      >
        <div class="close" data-role="mdialog-close">
          <i class="iconfont"></i>
        </div>
        <div class="content goods-select-content">
          <div class="detail-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookie from 'js-cookie'
  export default {
    data(){
      return{
        goods_info: [],
        price:0,
        num:0,
        show:false
      }
    },
    mounted() {
      //1. 选购单中的商品不保留库存，请及时结算。 2. 商品的价格、相关活动信息及库存以订单提交时为准。
      let _this = this;

      _$(function () {
        let user            = _this.$store.getters.userInfo.user_Info,
            tipsbox         = _$('.tipsbox'),
            a_eu            = _$('.a_eu'),
            shopID = Cookie.get('shopCartID'),
            Data = 0,
            decode_Data = 0,
            sum = 0,
            allPrice = 0,
            shop_cart_empty = _$('.shop-cart-empty'),
            pay_wapper      = _$(_this.$refs.payWapper)
        if(user){
          tipsbox.text('1. 选购单中的商品不保留库存，请及时结算。 2. 商品的价格、相关活动信息及库存以订单提交时为准。')
        }
        if (user && (!_$.isEmptyObject(shopID))) {
          shopID = JSON.parse(shopID)
          _this.show = true
          a_eu.css('display', 'none')
          shop_cart_empty.addClass('hide')
          pay_wapper.removeClass('hide')
          for(let id of shopID['shopCartID']){
            _$.ajax({
             type: "POST",
             url: "http://localhost/yohoAPI/getGoodsInfo",
             data: `shopID=${id}`,
             success: function(msg){
             Data = msg.split('&')
             decode_Data = JSON.parse(JSON.parse(JSON.parse(Data[0])[0]['shopInfo']))
             decode_Data.num =  Data[1]
               _this.price += ~~(Data[1]) * (~~(decode_Data['price']))
               _this.goods_info.push(decode_Data)
             }
             })
          }
        }
      })
    },
    methods:{
      delData(event){
        let tag = _$(event.target),
            id = tag.attr('data-id'),
            _this = this,
            shopID = (JSON.parse(Cookie.get('shopCartID')))['shopCartID']
        for(let [index,item] of this.goods_info.entries()){
          if(id == item.ID){
            this.goods_info.splice(index,1)
            shopID.splice(index,1)
          }
        }
          Cookie.set('shopCartID',{shopCartID:shopID})
        _this.price = 0
        for(let shop of this.goods_info){
          _this.price += (~~(shop.num)*(~~(shop.price)))
        }
        if(shopID.length === 0){
          Cookie.remove('shopCartID')
        }
         _$.ajax({
         type: "POST",
         url: "http://localhost/yohoAPI/deleteShop",
         data: `shopID=${id}`,
         success: function(msg){
           _this.$router.push('/page/shopCart');
         }
         })
      }
    }
  }

</script>
<style lang="scss" scoped>
  .shop-cart {
    width  : 990px;
    margin : 40px auto;
    .order-ensure-title {
      position : relative;
      margin   : 40px auto 50px;
    }
    .order-ensure-title::before {
      display : block;
    }
    .order-ensure-title::before {
      content             : "";
      background-image    : url(../../../assets/sprite.cart.png);
      background-position : -234px -38px;
      background-size     : 460px 217px;
      width               : 150px;
      height              : 42px;
    }
    .shopping-step {
      width       : 440px;
      font-size   : 15px;
      font-weight : 300;
      border-top  : 2px solid #b0b0b0;
      position    : absolute;
      right       : 2px;
      top         : 0;
      li.first {
        text-align : left;
        left       : -2px;
      }
      focus {
        color : #444;
      }
      li, li::after {
        display : block;
      }
      li::after {
        content             : "";
        position            : absolute;
        background-image    : url(../../../assets/sprite.cart.png);
        background-position : -204px -180px;
        background-size     : 460px 217px;
        width               : 12px;
        height              : 12px;
        left                : 50%;
        margin-left         : -6px;
        top                 : -7px;
      }
      li {
        float       : left;
        position    : relative;
        width       : 33.33%;
        color       : #999;
        line-height : 40px;
        text-align  : center;
      }
      li.first::after {
        left        : 0;
        margin-left : 0;
      }
      .focus::after {
        background-image    : url(../../../assets/sprite.cart.png);
        background-position : 0 -205px;
        background-size     : 460px 217px;
      }
      li.last {
        text-align : right;
        right      : -2px;
      }
      li.last::after {
        left        : auto;
        right       : 0;
        margin-left : 0;
      }
    }
    .shopping-step {
      display : block;
    }
    .cartnew-tips, .shop-cart .cartnew-tips .tipsbox {
      font-weight : 300;
    }
    .cartnew-tips {
      height        : auto;
      overflow      : hidden;
      font-size     : 12px;
      margin-bottom : 10px;
      .tipsbox {
        position         : relative;
        float            : left;
        width            : 100%;
        height           : 24px;
        line-height      : 24px;
        padding          : 4px 0;
        color            : #818181;
        font-size        : 14px;
        background-color : #f0f0f0;
        a {
          color : #0883de;
        }
        .btn-close {
          width               : 13px;
          height              : 13px;
          padding             : 0;
          margin-right        : 30px;
          margin-top          : 5px;
          background-image    : url(../../../assets/sprite.cart.png);
          background-position : -204px -159px;
          background-size     : 460px 217px;
          float               : right;
          cursor              : pointer;
        }
        strong {
          font-weight  : 400;
          padding-left : 30px;
        }
      }
    }
    .order-pay {
      width       : 100%;
      line-height : 150%;
      .shop-cart-empty {
        padding-top    : 110px;
        padding-bottom : 30px;
        text-align     : center;
        i {
          display   : inline-block;
          font-size : 140px;
          width     : 140px;
          height    : 70px;
          color     : #4d4d4d;
        }
        p {
          margin-top : 40px;
          font-size  : 18px;
          color      : #4d4d4d;
          text-align : center;
        }
        a {
          margin-top  : 18px;
          display     : inline-block;
          width       : 130px;
          height      : 34px;
          line-height : 34px;
          font-size   : 15px;
          color       : #000;
          border      : 1px solid #000;
          box-sizing  : border-box;
          cursor      : pointer;
        }
      }
      .promotion-pool {
        width  : 988px;
        height : fit-content;
        .table {
          .tr .td {
            float       : left;
            padding     : 30px 0;
            font-size   : 15px;
            font-weight : 300;
            text-align  : center;
          }
        }
        .pay-pro-icon {
          float      : left;
          width      : 66px;
          height     : 90px;
          border     : 1px solid #e9e9e9;
          box-sizing : border-box;
          display    : block;
          position   : relative;
          img {
            max-width : 64px;
            width     : 100%;
          }
        }
        .pay-pro-info {
          float        : left;
          text-align   : left;
          padding-left : 15px;
          padding-top  : 0;
          margin-left  : 0;
          width        : 280px;
          a {
            display         : block;
            width           : 280px;
            min-height      : 44px;
            padding-left    : 3px;
            color           : #444;
            font-size       : 15px;
            font-weight     : 300;
            line-height     : 1.5;
            text-decoration : none;
            text-align      : left;
            overflow        : hidden;
            text-overflow   : ellipsis;
            word-break      : break-all;
          }
          .pay-pro-detail {
            margin-top  : 0;
            display     : inline-block;
            border      : 1px dashed transparent;
            box-sizing  : border-box;
            height      : 26px;
            line-height : 26px;
            cursor      : pointer;
            span {
              display      : block;
              padding-left : 3px;
              font-size    : 13px;
              font-weight  : 300;
              color        : #9a9a9a;
              text-align   : left;
            }
          }
        }
        .table li {
          position : relative;
          padding  : 0 30px 0 54px;
        }
        .table:last-child li.tr:last-child {
          border-bottom : none;
        }
        .product-price {
          margin-top : 33px;
          position   : relative;
        }
        .adjust-cart-num {
          margin-top : 30px;
          .cart-num-btn {
            box-sizing : border-box;
            height     : 30px;
            border     : 1px solid #e0e0e0;
          }
          input {
            box-sizing : border-box;
            height     : 30px;
            border     : 1px solid #e0e0e0;
          }
          input {
            width      : 38px;
            text-align : center;
            color      : #444;
            font-size  : 15px;
          }
          .cart-num-cont {
            position    : relative;
            width       : 98px;
            height      : 30px;
            margin-left : 15px;
          }
          .cart-num-btn {
            display          : inline-block;
            width            : 30px;
            background-color : #fff;
            cursor           : pointer;
            font-size        : 14px;
            text-align       : center;
          }
          .cart-num-cont .minus {
            position : absolute;
            top      : 0;
            left     : 1px;
          }
          .tip-message {
            background  : transparent;
            font-size   : 14px;
            font-weight : 300;
            margin-top  : 3px;
            color       : #ff575c;
          }
          .icon-minus {
            font-size      : 18px;
            display        : inline-block;
            margin-top     : 1px;
            vertical-align : top;
            color          : #b0b0b0;
            line-height    : 9px;
          }
          .disabled i {
            color  : #f0f0f0;
            cursor : not-allowed;
          }
          .cart-num-cont .plus {
            position : absolute;
            top      : 0;
            left     : 67px;
          }
          .icon-plus {
            display        : inline-block;
            vertical-align : top;
            font-size      : 17px;
            color          : #b0b0b0;
            line-height    : 12px;
          }
        }
        .sub-total {
          margin-top : 30px;
        }
        .cart-operation {
          margin-top : 21px;
          .cart-del-btn {
            display     : block;
            font-size   : 12px;
            font-weight : 300;
            color       : #000;
            text-align  : right;
            cursor      : pointer;
          }
          .cart-col-btn {
            display     : block;
            font-size   : 12px;
            font-weight : 300;
            color       : #000;
            text-align  : right;
            cursor      : pointer;
          }
        }
      }
    }
    .red {
      color : #d0021b;
    }
    .bottom-tab-slide.bottom-tab {
      height        : 40px;
      line-height   : 39px;
      border-bottom : 1px solid #dcdcdc;
      .bottom-title, .bottom-tab-slide.bottom-tab .change {
        font-weight : 300;
        color       : #444;
        display     : inline-block;
        cursor      : pointer;
      }
      .change {
        font-weight : 300;
        color       : #444;
        display     : inline-block;
        cursor      : pointer;
      }
      .cur {
        border-bottom : 3px solid #3a3a3a;
        float         : left;
      }
      .change {
        float        : right;
        font-size    : 16px;
        margin-right : 0;
        .change-icon {
          font-size                 : 24px;
          -webkit-text-stroke-width : .5px;
        }
      }
    }
    .individual-slide {
      width    : 990px;
      height   : 368px;
      overflow : hidden;
      .individual-item {
        position    : relative;
        width       : 100%;
        overflow    : hidden;
        font-size   : 12px;
        font-weight : 300;
        .goods {
          width    : 990px;
          height   : 338px;
          margin   : 20px 0 10px;
          overflow : hidden;
          .good {
            float        : left;
            margin-right : 10px;
            width        : 190px;
            height       : 338px;
          }
        }
        .name {
          display       : block;
          font-size     : 12px;
          font-weight   : 300;
          color         : #222;
          text-align    : center;
          height        : 12px;
          line-height   : 12px;
          margin        : 15px 0 10px;
          padding-left  : 2px;
          padding-right : 2px;
          overflow      : hidden;
          text-overflow : ellipsis;
          white-space   : nowrap;
        }
        .btn-add-cart {
          display          : block;
          margin           : 0 auto;
          color            : #3a3a3a;
          font-size        : 14px;
          font-weight      : 300;
          width            : 110px;
          height           : 28px;
          line-height      : 28px;
          text-align       : center;
          border           : 1px solid #b0b0b0;
          border-radius    : 0;
          background-color : #fff;
          padding          : 0;
          cursor           : pointer;
          outline          : none;
        }
        .price {
          text-align    : center;
          margin-bottom : 8px;
        }
        .sale-price-new {
          color        : #d0021b;
          margin-right : 15px;
        }
      }
    }
    .cart-title {
      position : relative;
    }
    .cart-title {
      padding    : 0 30px;
      background : #444;
      height     : 50px;
      overflow   : hidden;
      zoom       : 1;
      p {
        float          : left;
        display        : inline-block;
        height         : 50px;
        line-height    : 50px;
        font-size      : 16px;
        font-weight    : 300;
        color          : #fff;
        vertical-align : middle;
        text-align     : center;
      }
      p.left {
        text-align : left;
      }
      p:first-child {
        padding-left : 20px;
      }
      .cart-item-check {
        margin-top : 0;
      }
    }
    .cart-item-check, .shop-cart .yoho-coin {
      display : inline-block;
    }

    .cart-item-check {
      position    : absolute;
      left        : 15px;
      width       : 15px;
      height      : 15px;
      color       : #d9d9d9;
      float       : left;
      margin-top  : 0;
      margin-left : 15px;
      cursor      : pointer;
    }
    .cart-item-check-title {
      position    : absolute;
      left        : 15px;
      width       : 15px;
      height      : 15px;
      color       : #fff;
      float       : left;
      margin-top  : 0;
      margin-left : 15px;
      display     : inline-block;
      cursor      : pointer;
    }
    .cart-item-check-title.iconfont {
      line-height : 35px;
      font-size   : 16px;
    }
    .cart-fixed-submit {
      height      : 50px;
      font-weight : 300;
      font-size   : 14px;
      margin-top  : 20px;
      .fixed-option {
        float        : left;
        margin-right : 60px;
      }
      .center-content > * {
        display : inline-block;
        float   : left;
      }
      .fixed-option > a {
        color       : #017cf8;
        margin-left : 20px;
      }
      .center-content {
        width        : 990px;
        position     : relative;
        padding-left : 50px;
        box-sizing   : border-box;
      }
      .cart-fixed-wrap {
        width            : 100%;
        height           : 50px;
        line-height      : 50px;
        background-color : #e0e0e0;
      }
      .select-num {
        margin-right : 26px;
      }
      strong {
        color : #d0021b;
      }
      .price-sum {
        width          : 264px;
        line-height    : 20px;
        vertical-align : middle;
        .sum {
          position   : relative;
          text-align : left;
        }
        .sum > strong {
          line-height : 1;
          font-size   : 20px;
          font-weight : 700;
          position    : absolute;
          right       : 0;
        }
        kbd {
          text-align  : right;
          font-weight : 400;
        }
        .offer {
          color      : #afafaf;
          text-align : left;
        }
      }
      .btn-account {
        width            : 150px;
        height           : 50px;
        padding          : 0;
        text-align       : center;
        border           : 0;
        line-height      : 50px;
        font-size        : 20px;
        color            : #fff;
        font-weight      : 700;
        display          : inline-block;
        background-color : #d0021b;
        cursor           : pointer;
        float            : right;
      }
      .btn-account.btn-account-disable {
        background-color : #b0b0b0;
        cursor           : not-allowed;
      }

    }

  }

  .left, .pull-left {
    float : left;
  }

  .hide {
    display : none;
  }
</style>
