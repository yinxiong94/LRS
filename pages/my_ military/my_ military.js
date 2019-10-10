// pages/my_ military/my_ military.js
import * as echarts from '../../ec-canvas/echarts';

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    // backgroundColor: "#ffffff",
    // color: ["#37A2DA", "#FF9F7F"],
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
            text: '外观',
            max: 100
          },
          {
            text: '拍照',
            max: 100
          },
          {
            text: '系统',
            max: 100
          },
          {
            text: '性能',
            max: 100
          },
          {
            text: '屏幕',
            max: 100
          }
        ],
        // radius: 40,
        center: ['35%', '55%'],
        name: {
          // formatter: '【{value}】',
          // lineHeight:"5",
          fontSize: '15',
          textStyle: {
            color: '#72ACD1',
           
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
      data: [{
          value: [50, 20, 10, 40, 40, 40],
          // name: '预算'
        },

      ]
    }]
  };

  chart.setOption(option);
  return chart;
}
var that
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
    leida: [100, 100, 100, 100, 100, 100],
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