// pages/life/life.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //自定义事件
  v1Click: function(){
    // console.log("1111")

    wx.navigateTo({
      url: '../logs/logs',
      success(){
        console.log("跳转成功")
      },
      fail(){

      }
    })

  },

  v2Click(){
    //console.log("2222")

    wx.navigateTo({
      url: '../news/news?id=2&name=第二个页面',
    })

  },

  v3Click() {
    //console.log("3333")
  //专门针对 跳转tabBar上配置的页面
  //不支持传值
    wx.switchTab({
      url: '../logs/logs',
    })


  },

  v4Click() {
    //console.log("4444")
    //可以跳转到指定路径，但是关闭其余所有页面
    wx.reLaunch({
      url: '../news/news',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("life onLoad---")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("life onReady---")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("life onShow---")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("life onHide---")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("life onUnload---")
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