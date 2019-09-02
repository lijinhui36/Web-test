var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.myLogin.userInfo)
    if (app.myLogin.userInfo == null){
        //没有登录过，跳转到登录页面
      wx.redirectTo({
        url: '../login/login',
      })

    }else{
       //登录过，将登录的用户名显示到页面上
      this.setData({ username: app.myLogin.userInfo.name}) 
    }

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