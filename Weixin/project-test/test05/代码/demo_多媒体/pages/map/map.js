// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "/images/avatar.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
 
    latitude:0,

    longitude:0
  },

  openBtn(){
    wx.openLocation({
      latitude:this.data.latitude,
      longitude:this.data.longitude,
      scale: 18
    })
  },

  getBtn(){
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })
        
        const speed = res.speed
        const accuracy = res.accuracy
      }
    })
  },

  chooseBtn(){
    var that = this
    wx.chooseLocation({
      success: function(res) {
        //console.log(res)
        that.setData({ latitude: res.latitude,longitude:res.longitude,address:res.address,name:res.name})
      },
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
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