<template>
  <div id='main'>
    <div id='graph'></div>
    <button class='screen' @click='fullScreen'>全屏</button>
    <div class='checkbox-group' @click.once='cancelSelect' v-if='selectedArr.length'>
      <input type="checkbox" >
      <span v-for='item in selectedArr' :key='item'>{{item}}</span>
      <span v-for='(item,index) in selectedArr' :key='index'>{{item}}</span>
    </div>

  </div>

</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
import fullScreen from '@/utils/fullScreen.js'
export default {
  data() {
    return {
      screen: false,
      option: {
        myEcharts: null,
        backgroundColor: '#fff',
        title: {
          text: 'Graph 简单示例',
        },
        color: ['#83e0ff', '#45f5ce', '#b158ff'],
        tooltip: {},
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
      },
      selected: {},
      selectedArr: [],
      selectedArrs: [],
      tagIndex: 0,
      flag: false,
      beforeSelect: [],
    }
  },

  created() {},
  async mounted() {
    let self = this

    this.myEcharts = echarts.init(document.getElementById('graph'))
    window.addEventListener(
      'resize',
      () => {
        this.myEcharts.resize()
      },
      null,
    )
    this.refresh()
    this.myEcharts.showLoading()
    axios.get('http://rap2api.taobao.org/app/mock/data/73076').then(res => {
      this.myEcharts.hideLoading()
      var categories = []
      for (var i = 0; i < 8; i++) {
        categories[i] = {
          name: '类目' + i,
        }
      }
      this.selected = {}
      for (let item of categories) {
        this.selected[item.name] = true
      }
      for (let key of Object.keys(this.selected)) {
        this.selectedArr.push(key)
        this.selectedArrs.push(key)
      }
      let nodes = res.data.data.nodes,
        links = res.data.data.links

      nodes.map((node, index) => {
        node.itemStyle = null
        node.value = node.symbolSize
        node.symbolSize /= 1
        node.category = node.category ? node.category : index
        node.name = node.label
        node.draggable = true
        //node.fixed = true
        if (node.x && node.y) {
          node.fixed = true
        }
      })
      links.map((link, index) => {
        link.label = {
          show: true,
          position: 'middle',
          backgroundColor: '#fff',
          verticalAlign: 'middle',
          padding: [5, 5, -5, 5],
          height: 20,
          lineheight: 20,
          rich: {},
        }
      })
      this.option.legend = [
        {
          // selectedMode: 'single',

          data: categories.map(a => {
            return a.name
          }),

          orient: 'vertical',
          top: 100,
          left: 30,
          itemGap: 40,
          itemWidth: 15,
          itemHeight: 5,
          selectedMode: false,
          padding: 10,
          selected: this.selected,
          textStyle: {
            padding: [0, 0, 0, 15],
            color: '#666',
          },
        },
      ]
      this.option.series = [
        {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 1000,
            gravity: 0,
            edgeLength: 200,
          },
          roam: true,
          label: {
            normal: {
              show: true,
            },
          },
          edgeSymbolSize: [4, 10],
          edgeSymbol: ['circle', 'arrow'],
          edgeLabel: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 16,
              },
              formatter: '{c}',
            },
          },
          data: nodes,
          links: links,
          categories: categories,
          focusNodeAdjacency: false,
          hoverAnimation: true,
          legendHoverLink: true,
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(111, 111, 111, 0.3)',
            },
          },
          lineStyle: {
            color: 'source',
            curveness: 0,
          },
          emphasis: {
            lineStyle: {
              width: 2,
            },
          },
        },
      ]
      this.myEcharts.setOption(this.option)
      this.myEcharts.on('click', function(params) {
        //console.log(params)
        //self.option.series[0].focusNodeAdjacency = true
        // self.refresh()

        self.myEcharts.dispatchAction({
          type: 'focusNodeAdjacency',
          dataIndex: params.dataIndex,
        })
      })
      /*  let label = document.getElementsByClassName('el-checkbox')
      console.log(label) */
    })
  },
  methods: {
    fullScreen() {
      let element = document.getElementById('main')
      fullScreen.fullScreen(element)
    },
    refresh() {
      this.myEcharts.setOption(this.option)
    },
    cancelSelect(e) {
      let tag = e.target.childNodes

      /*   let tag = e.target.parentNode
      let tagIndex = 0

      if (tag.nodeName === 'LABEL') {
        tagIndex = tag.getAttribute('data-index')
      }
      for (let [index, item] of Object.entries(this.selected)) {
        if (tagIndex === index) {
          this.selected[index] = !this.selected[index]
          this.refresh()
          console.log(this.selected)
        }
      } */
    },
  },
}
</script>

<style scoped lang='less'>
#main {
  position: relative;
  width: 100%;
  height: 100%;
  #graph {
    width: 100%;
    min-height: 100%;
  }
  .screen {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  .checkbox-group {
    position: absolute;
    top: 50px;
    left: 250px;
    display: flex;
    flex-wrap: wrap;
    width: 24px;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: transparent !important;
    font-size: 0 !important;
  }

  .el-checkbox + .el-checkbox {
    margin-left: 0;
  }
  .el-checkbox.is-checked {
    position: relative;
  }
}
</style>
