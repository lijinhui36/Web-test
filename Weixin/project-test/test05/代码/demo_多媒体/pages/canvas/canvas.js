// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x:0,
    y:0
  },

  myDraw:function(){
  this.data.x=this.data.x+1;
  this.data.y=this.data.y+1;
    var ti=this.data.x
    var kilo=20*Math.asin(0.1*ti)
    this.context.arc(30, 40, 20, 0, 2 * Math.PI, true)
    this.context.rect(10, 60, 40, 80)

    this.context.moveTo(30, 70)
    this.context.lineTo(0, 130)

    this.context.moveTo(30, 70)
    this.context.lineTo(60, 130)

    this.context.moveTo(30, 140)
    this.context.lineTo(30+kilo, 250)
    
    this.context.moveTo(30, 140)
    this.context.lineTo(30-kilo, 250)

    this.context.setStrokeStyle("#abc")
    this.context.setLineWidth(5)
    this.context.stroke()
    this.context.draw()
  
  },
  vClick:function(){
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
    // 使用 wx.createContext 获取绘图上下文 context
    this.context = wx.createCanvasContext('firstCanvas',this)
    this.context.arc(30, 40, 20, 0, 2 * Math.PI, true)
    this.context.rect(10, 60, 40, 80)
    this.context.moveTo(30, 70)
    this.context.lineTo(0, 130)
    this.context.moveTo(30, 70)
    this.context.lineTo(60, 130)

    this.context.moveTo(30,140)
    this.context.lineTo(25,250)

    this.context.moveTo(30,140)
    this.context.lineTo(35,250)
    this.context.setStrokeStyle("#abc")
    this.context.setLineWidth(5)
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