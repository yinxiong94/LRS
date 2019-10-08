// pages/homePage/homePage.js
var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页轮播图片
    bannerPicArray:
    [
        { imgUrl: "http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175040_1780.jpg"},
        { imgUrl: "http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175111_9509.jpg"},
        { imgUrl: "http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175142_6947.jpg"}
    ],
    autoplay:true,
    interval:2000,
    scrollX:true,
    cuur:0,
    isshow:false
  },



  locationdj(e){  
    that.setData({
      cuur: e.currentTarget.dataset.cuur
    })
  },
  isshow:function(){
    if(that.data.isshow==false){
      that.setData({ isshow:true})
    } else {
      that.setData({ isshow:false})
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
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