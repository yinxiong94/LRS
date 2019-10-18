// pages/room/room.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cruu: 0,
    select: 0,
    isShow:false
  },
  locationdj(e) {
    that = this
    that.setData({
      cruu: e.currentTarget.dataset.cruu
    })
  },

  select(e) {
    that = this
    that.setData({
      select: e.currentTarget.dataset.select
    })
  },

  /**
   * 创建房间
   */
  establish() {
      that = this
      that.setData({
        isShow:true
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
      that=this;
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

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