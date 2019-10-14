// pages/my_ military/my_ military.js
import * as echarts from '../../ec-canvas/echarts';
var that
var value = [];
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    // backgroundColor: "#ffffff",
    color: ["#FFA50E"],
    tooltip: {},
    xAxis: {
      show: false
    },
    // yAxis: {
    //   show: false
    // },
    radar: [
      {
        indicator: [{
            text: '狼人',
            max: 100
          },
          {
            text: '生存',
            max: 100
          },
          {
            text: '抿身份',
            max: 100
          },
          {
            text: '村民',
            max: 100
          },
          {
            text: '神职',
            max: 100
          }
        ],
        radius: 70,
        // center: ['35%', '55%'],
        name: {
          // formatter: '【{value}】',
          // lineHeight:"5",
          fontSize: '13',
          textStyle: {
            color: '#8A4100',
           
          }

        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 1)'
          },

           splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 1)'
            }
          }
        },
      },
    ],
    series: [{
      // name: '预算 vs 开销',
      type: 'radar',
      data: [
        {
          value:value,
          // name: '预算'
          symbolSize: 6,
          areaStyle: {
            normal: {
              opacity: 0.4,
              color: "#FED517",
            }
          }
        },
  
      ]
      
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function(res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function() {},
      fail: function() {}
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    cruu: 0,
    leida: [80, 100, 65, 55, 40, 70],
    ec: {
      onInit: initChart
    }
  },

  /**
   * 点击切换卡
   */
  jumpclick(e) {
    that = this
    that.setData({
      cruu: e.currentTarget.dataset.cruu
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
    value = that.data.leida
    // that.init_bar()
  },




  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})