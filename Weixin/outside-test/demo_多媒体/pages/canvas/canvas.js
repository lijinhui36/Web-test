// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   x:100,
   y:100
  },
   
  myDraw:function(){
    this.data.x=this.data.x+1
    this.context.setStrokeStyle("#ff0000")
    this.context.setLineWidth(2)
    this.context.arc(this.data.x, 100, 60, 0, 2 * Math.PI, true)
    this.context.stroke()
    this.context.draw()

  },



   v1Click:function(){
     setInterval(this.myDraw,50)
      
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
    this. context = wx.createCanvasContext('firstCanvas')
    this.context.setStrokeStyle("#ff0000")
    this.context.setLineWidth(2)
    this.context.moveTo(160, 100)
    this.context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    this.context.stroke()
    this.context.draw()

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