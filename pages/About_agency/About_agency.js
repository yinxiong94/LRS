// pages/About_agency/About_agency.js
var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color:"rgba(225, 147, 46, 1)",
    autoplay: true,
    interval: 2000,
    dots:true,
    indicator:"RGBA(255, 255, 255, 1)",
    curr:0,
    RgbColor:""
  },

  /**
   * 生命周期函数--监听页面加载
   */

  handoujump(e){
    that = this
    that.setData({
      curr: e.currentTarget.dataset.curr
    })
  },

   randomRgbColor() { //随机生成RGB颜色
    var r = Math.floor(Math.random() * 256); //随机生成256以内r值
    var g = Math.floor(Math.random() * 256); //随机生成256以内g值
    var b = Math.floor(Math.random() * 256); //随机生成256以内b值
    return `rgb(${r},${g},${b})`; //返回rgb(r,g,b)格式颜色
  },
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    that = this
    that.setData({
      RgbColor: this.randomRgbColor()
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})