// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:''
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log("news onLoad ###")
    //console.log(e)
    // this.setData({msg:e.msg})  第一个跳转
    this.setData({ msg: e.name, num: e.id })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("news onReady ###")
    console.log(this.data.num)
    if(this.data.num != ''){
        console.log("+++++++++++++++")
    }else{
      console.log("--------------")
    }
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("news onShow ###")
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("news onHide ###")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("news onUnload ###")
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