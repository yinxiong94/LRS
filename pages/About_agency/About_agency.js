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
    curr:0
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