// pages/kuaidi/kuaidi.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 快递单号
    kuaidiNum : null,
    // 快递详细信息
    kuaidiList: null
  },

  // 自定义事件
  inputClick: function(event){
    //console.log(event.detail.value)
    this.setData({ kuaidiNum: event.detail.value})
  },

  btnClick: function(){
    var that = this;
    app.getKuaidiMsg(this.data.kuaidiNum,
      function (res) {
        // console.log("-----------")
        //  console.log(res.data.result.list)
        that.setData({ kuaidiList: res.data.result.list})

      }
    )

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