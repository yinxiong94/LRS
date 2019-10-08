var that;
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:0,
    tab1:0,
    isvip:1
  },
  // 切换tab栏
  tab:function(e){
    that.setData({ tab: e.currentTarget.dataset.tab})
  },
  // 对局导航栏切换
  tab1:function(e){
    that.setData({ tab1: e.currentTarget.dataset.tab1 })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this;
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