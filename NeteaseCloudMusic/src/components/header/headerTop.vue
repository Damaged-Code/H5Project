<template>
  <el-row class="m-home">
    <el-col :span="24" class="m-hometop">
      <div class="grid-content bg-purple-red ">
        <h1 class="topfl">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-music1"></use>
          </svg>
          <span class="toplh">网易云音乐</span>
        </h1>
        <section class="topfr">
          <span class="f-bd f-bd-full topbton">下载APP</span>
        </section>
      </div>
    </el-col>
  </el-row>
</template>

<script>
	export default {
	}
</script>

<style scoped lang="scss">
  .m-home {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 1rem;
    box-sizing: border-box;
    background: #d43c33;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .m-hometop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 5.3rem;
      color: white;
      font-weight: 500;
      font-family: '微软雅黑';
      .topfl{
        position: relative;
        width: fit-content;
        height: 2.08rem;
      }
      .topfr{
        .topbton {
          position: relative;
          display: inline-block;
          height: 2.5rem;
          line-height: 2.5rem;
          padding: 0 1.2rem;
          color: #fff;
          font-size: 1.5rem;
        }
        .topbton:after {
          border-color: #fff;
          border-radius: 37.5%/100%;
        }
        .f-bd-full:after {
          border-width: 1px;
        }
        @media screen and (-webkit-min-device-pixel-ratio: 2){
          .f-bd:after {
            width: 200%;
            height: 200%;
            transform: scale(.5);
          }
        }
      }
    }

  }
  .bg-purple-red {
    background: #d43c33;
  }
</style>
