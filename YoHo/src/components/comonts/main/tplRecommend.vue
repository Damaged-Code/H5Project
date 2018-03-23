<template>
  <section class="tpl-recommend clearfix">
    <section class="floor-header clearfix" floorid="">
      <h2 class="floor-title">潮流上装</h2>
      <ul class="header-navs">
        <li data-classify="">
          <a href="javascript:;">MORE</a>
        </li>
      </ul>
    </section>
    <section class="tpl-body clearfix">
      <section class="tpl-nav">
        <section class="tpl-keywords">
          <a class="keywords0" href="">
            <img class="lazy" lazy="" src="" alt="">
          </a>
          <a class="keywords1" href="">
            <img class="lazy" lazy="" src="" alt="">
          </a>
        </section>
        <section class="tpl-category clearfix"></section>
      </section>
      <section class="tpl-brands imgopacity clearfix">
        <ul>
          <li>
            <a href="">
              <img class="lazy" lazy="" src="" alt="">
            </a>
          </li>
        </ul>
      </section>
      <section class="tpl-types imgopacity clearfix">
        <ul>
          <li>
            <a href="">
              <img class="lazy" lazy="" src="" alt="">
            </a>
          </li>
        </ul>
      </section>
      <section class="tpl-products imgopacity clearfix">
        <ul class="clearfix">
          <li>
            <a href="">
              <img class="lazy" src="" lazy="" alt="">
            </a>
          </li>
        </ul>
      </section>
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
  .floor-ad a {
    display: block;
    height: 129px;
  }
  .tpl-recommend {
    a {
      display: block;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .tpl-nav {
      width: 185px;
      float: left;
      overflow: hidden;
      .tpl-keywords {
        margin-bottom: 8px;
        a{
          margin-bottom: 10px;
          min-height: 76px;
        }
      }

      .tpl-category {
        height: 228px;
        padding: 10px 0;
        background-color: #f8f8f8;
        overflow: hidden;
        a {
          float: left;
          width: 50%;
          height: 38px;
          line-height: 38px;
          font-size: 14px;
          text-align: center;
          color: #000;
          overflow: hidden;
        }
      }
    }
    .tpl-brands {
      float: left;
      width: 378px;
      height: 512px;
      overflow: hidden;
      margin-left: 8px;
      li {
        a {
          height : 248px;
          img {
            display : block;
            width   : 100%;
            height  : 100%;
          }
        }
      }
    }
    .tpl-types {
      float: left;
      overflow: hidden;
      margin-top: -8px;
      width: 579px;
      li{
        float: left;
        margin-left: 8px;
        margin-top: 8px;
        a{
          width: 185px;
          height: 248px;
        }
      }
    }
    .tpl-products{
      width: 1160px;
      overflow: hidden;
      margin-left: -10px;
      li {
        float: left;
        margin-left: 10px;
        a {
          width: 222px;
          height: 298px;
        }
      }
    }
  }
</style>
