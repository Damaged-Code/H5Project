<template>
  <div>
    It is HomeView
    <router-link to="/;sokc=sada/TitleContent">TitleContent</router-link>
    <img :src="imgSrc" alt="" >
    <img src="../../assets/logo.png" alt="">
    <span v-show='show'>{{show?'123':'sadas'}}</span>
    <button @click='show = !show'>click</button>
    <button @click="myWatch">watch</button>
    <input :type="show ?'password':'text'" placeholder="xxxxx">
    <main id='main' style="width: 600px;height:400px;">
    </main>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  data() {
    return {
      imgSrc: require('../../assets/logo.png'),
      show: false,
      toWatch: '1',
    };
  },
  watch: {
    toWatch() {
      console.log('watch mymethods');
    },
  },
  mounted() {
    let myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    let option = {
      backgroundColor: '#2c343c',
      visualMap: {
        // 不显示 visualMap 组件，只用于明暗度的映射
        show: false,
        // 映射的最小值为 80
        min: 80,
        // 映射的最大值为 600
        max: 600,
        inRange: {
          // 明暗度的范围是 0 到 1
          colorLightness: [0, 1],
        },
      },

      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          roseType: 'angle',
          data: [
            { value: 235, name: '视频广告' },
            { value: 274, name: '联盟广告' },
            { value: 310, name: '邮件营销' },
            { value: 335, name: '直接访问' },
            { value: 400, name: '搜索引擎' },
          ],
          itemStyle: {
            // 设置扇形的颜色
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
          label: {
            textStyle: {
              color: 'rgba(255, 255, 255, 0.3)',
            },
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)',
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  },
  methods: {
    myWatch() {
      this.toWatch = 2;
      console.log('mywatch');
    },
  },
};
</script>

<style scoped>

</style>
