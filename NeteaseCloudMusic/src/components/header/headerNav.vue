<template>
  <el-row class="m-tabarea m-tabarea-index clearfix">
    <nav class="u-tab f-bd f-bd-btm">
      <el-col :span="8"  v-for="item in data" :key="item.id" >
        <li class="grid-content tabtitle" ref="tabTitle" @click="tabChoose">
          <router-link class="tabtxt " :to="{name:item.to}" >{{item.tag}}
          </router-link>
        </li>
      </el-col>
    </nav>
  </el-row>
</template>

<script>
	export default {
    data(){
      return{
        data:[{
          tag:'推荐音乐',
          to:'index',
        },{
          tag:'热歌榜',
          to:'hotSongs',
        },{
          tag:'搜索',
          to:'search',
        }],
        navInfo:['推荐音乐','热歌榜','搜索']
      }
    },
    mounted(){
      let
        tag = jq(this.$refs.tabTitle),
        tab = this.$store.getters.navTab.nav_tab,
        navInfo = this.navInfo
      console.log(tab)
      function tabSelectInit() {
        for(let index in navInfo){
          if(tab == navInfo[index]){
            tag.eq(index).addClass('z-selected')
          }
        }
      }
      tabSelectInit()
    },
    methods:{
      tabChoose(event){
        let
          target = jq(event.target),
          parent = target.parent().parent().parent(),
          targets = parent.children().children(),
          tab = (target.text()).trim()
        targets.removeClass('z-selected')
        target.parent().addClass('z-selected')
        this.$store.dispatch('setNavTab',tab)
      }
    }
	}
</script>

<style scoped lang="scss">
  .m-tabarea-index  {
    .u-tab{
      position: fixed;
      top: 5.3rem;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 3.3rem;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .tabtxt {
        position: relative;
        display: inline-block;
        height: 100%;
        padding: 0 0.4rem;
        box-sizing: border-box;
        color: #333;
        font-size: 1.5rem;
        line-height: 3.3rem;
      }
      .z-selected .tabtxt{
        color: #d43c33;
      }
      .z-selected .tabtxt:after{
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        z-index: 3;
        width: 100%;
        height: 4px;
        transform: scaleY(.5);
        background: #d33a31;
        transition: all .5s;
      }
    }
    .f-bd-btm:after {
      border-bottom-width: 1px;
      border-color: #ccc;
      z-index: 0;
    }
    @media screen and (-webkit-min-device-pixel-ratio: 2)
    {
      .f-bd:after {
        width: 200%;
        height: 200%;
        transform: scale(.5);
      }
    }
  }
</style>
