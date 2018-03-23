<template>
  <section class="commodity clearfix">
    <section class="floor-header clearfix" floorid="5708">
      <h2 class="floor-title">新品上架</h2>
      <ul class="header-navs">
        <li data-classify="">
          <a target="_blank" href="http://list.yohobuy.com/new?gender=1,3&amp;order=s_t_desc">MORE</a>
        </li>
      </ul>
    </section>
    <section class="goods-container clearfix">
      <div class="good-info imgopacity">
        <div class="tag-container clearfix"></div>
        <div class="good-detail-img">
          <a class="good-thumb" href="javascript:;">
            <img class="lazy" lazy="" src="" alt="">
          </a>
        </div>
        <div class="good-detail-text">
          <a href="javascript:;"></a>
          <p class="price">
            <span class="sale-priceprime-cost"></span>
          </p>
        </div>
      </div>
    </section>
    <section class="loading">
      <a href="">查看更多</a>
    </section>
  </section>
</template>

<script>
	export default {
	}
</script>

<style lang="scss" scoped>
  .floor-header {
    position: relative;
    margin: 80px 0 40px;
    .floor-title {
      margin: 0 auto;
      width: 298px;
      height: 31px;
      line-height: 31px;
      border: 1px solid #000;
      font-size: 16px;
      text-align: center;
    }
    .header-navs {
      position: absolute;
      padding: 10px 0;
      top: 0;
      right: 0;
      font-size: 14px;
      li:first-child {
        border-left: none;
        a {
          color: #333;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }
  .commodity{
  .goods-container {
    margin-right: -10px;
    width: inherit;
    padding-top: 0;
  .good-info{
    width: 222px!important;
    height: 408px!important;
  .tag-container {
    font-size: 12px;
    height: 22px;
    line-height: 22px;
  }
  .good-detail-img{
    height: 298px!important;
  .good-thumb{
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    color: #fff;
  img.lazy {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    color: #fff;
  }
  }
  }
  .good-detail-text {
    text-align: center;
  a {
    margin-top: 16px;
    line-height: 1.5;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price {
    margin-top: 5px;
    line-height: 22px;
  }
  }
  }
  }
  .loading {
    position: relative;
    width: 100%;
    text-align: center;
    padding-top: 40px;
  a {
    display: block;
    height: 35px;
    width: 120px;
    margin: 0 auto 40px;
    background-color: #000;
    color: #fff;
    font-size: 14px;
    line-height: 35px;
    text-align: center;
  }
  }
  }
</style>
