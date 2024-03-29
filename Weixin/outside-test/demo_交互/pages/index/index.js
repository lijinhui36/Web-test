Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
   
   toastClick:function(){
     wx.showToast({
       title: '正在加载,请稍后',
       icon:"loading",
       duration:3000,
       mask:true,
     })
   },
  

  loadingClick:function(){
    wx.showLoading({
      title: '正在加载，请稍后',
      mask:true,
      success(){
        
      }
    })
    //wx.hideLoading()
  },



  modalClick:function(){
    wx.showModal({
      title: '退出程序',
      content: '确认要残忍离开吗？',
      cancelColor:"#fbc",
      cancelText:"再想想",
      success(){
        console.log("点击了确定")
      },
      fail(){
        console.log('点击了取消')
      }
    })
  },



  actionClick:function(){
    wx.showActionSheet({
      itemList: ["拍照","我的相册"],
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