<template>
  <div id='mian'>
    <div id='graph'></div>
    <button class='screen' @click='fullScreen'>全屏</button>
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
        backgroundColor: '#1a4377',
        title: {
          text: 'Graph 简单示例',
        },
        color: ['#83e0ff', '#45f5ce', '#b158ff'],
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
      },
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
        this.myEcharts.setOption(this.option)
      },
      null,
    )
    this.myEcharts.showLoading()
    axios.get('http://rap2api.taobao.org/app/mock/data/73076').then(res => {
      this.myEcharts.hideLoading()
      var categories = []
      for (var i = 0; i < 8; i++) {
        categories[i] = {
          name: '类目' + i,
        }
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
      })

      this.option.legend = [
        {
          // selectedMode: 'single',

          data: categories.map(a => {
            return a.name
          }),
          textStyle: {
            color: '#fff',
          },
          orient: 'vertical',
          top: 100,
          left: 30,
          itemGap: 40,
          itemWidth: 15,
          itemHeight: 5,
          selectedMode: 'multiple',
          padding: 10,

          textStyle: {
            padding: [0, 0, 0, 50],
            color: '#fff',
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
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.3)',
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
    })
  },
  methods: {
    fullScreen() {
      let element = document.getElementById('mian')
      fullScreen.fullScreen(element)
    },
  },
}
</script>

<style scoped lang='less'>
#mian {
  width: 100%;
  min-height: 100%;
  #graph {
    width: 100%;
    height: 900px;
  }
  .screen {
    position: absolute;
    top: 50px;
    left: 50px;
  }
}
</style>
