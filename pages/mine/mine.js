// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   *跳转到我得俱乐部
   */
  club(){
    wx.navigateTo({
      url: '/pages/my_club/my_club',
    })
  },

  /**
   * 拨打电话
   */
  kefu(){
    wx.makePhoneCall({
      phoneNumber: '13375410240',
    })
  },

  /**
   * 跳转到我得战绩
   */
  zhangji(){
    wx.navigateTo({
      url: '/pages/my_ military/my_ military',
    })
  },

  /**
   * 跳转到点卷页面
   */
  dianjuan(){
    wx.navigateTo({
      url: '/pages/buy_ card/buy_ card',
    })
  },

  /**
   * 跳转我的粉丝页面
   */
  fans() {
    wx.navigateTo({
      url: '/pages/my_ fans/my_ fans',
    })
  },

  /**
   * 跳转到我的关注
   */
  attention() {
    wx.navigateTo({
      url: '/pages/my_attention/my_attention',
    })
  },

  /**
   * 跳转到我的好友
   */
  friend() {
    wx.navigateTo({
      url: '/pages/my_ friend/my_ friend',
    })
  },

  /**
   * 跳转到设置页面
   */
  setting(){
    wx.navigateTo({
      url: '/pages/setting/setting',
    })
  },

  /**
  * 跳转到我的约局
  */
  About(){
    wx.navigateTo({
      url: '/pages/my_ About/my_ About',
    })
  }, 

  /**
   * 点击编辑资料
   */
  compile() {
    wx.navigateTo({
      url: '/pages/compile/compile',
    })
  },

  /**
   * 点击查看积分
   */
  integral() {
    wx.navigateTo({
      url: '/pages/integral/integral',
    })
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