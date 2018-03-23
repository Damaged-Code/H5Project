<template>
  <section>
    <div class="floor-header clearfix" floorid="">
      <h2 class="floor-title">美妆 BEAUTY</h2>
      <ul class="header-navs">
        <li data-classify="">
          <a target="_blank" href="https://list.yohobuy.com/?category_id=161">彩妆</a>
        </li>
        <li data-classify="">
          <a target="_blank" href="https://list.yohobuy.com/?msort=1180&amp;misort=1536,1562,1598&amp;title=个人护理">个人护理</a>
        </li>
        <li data-classify="">
          <a target="_blank" href="https://list.yohobuy.com/?msort=1180&amp;misort=1658&amp;title=面部护肤">面部护肤</a>
        </li>
        <li data-classify="">
          <a target="_blank" href="https://list.yohobuy.com/?msort=1180&amp;misort=1474&amp;sort=1482&amp;title=香水">香水</a>
        </li>
        <li data-classify="">
          <a target="_blank" href="https://list.yohobuy.com/?category_id=23">MORE</a>
        </li>
      </ul>
    </div>
    <section class="categorys-list imgopacity">
      <ul class="clearfix">
        <li>
          <a href="">
            <img src="" alt="">
          </a>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
  .header-navs {
    li{
      float: left;
      padding: 1px 15px;
      border-left: 1px solid #ccc;
      font-size: 14px;
    }
    li:first-child {
      border-left: none;
    }

  }
  .categorys-list ul {
    width: 1158px;
    li{
        float: left;
        margin: 0 8px 8px 0;
        width: 185px;
        height: 248px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    li.cate-item0 {
      width: 185px;
      height: 504px;
    }
    li.cate-item1 {
      width: 377px;
      height: 504px;
    }
  }
</style>
