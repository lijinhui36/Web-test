// pages/firstPages/firstPages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg:"测试文本一！！！",
      btn1msg:"按钮一",
      flag:true,
    news: ['aaa', 'bbb', 'ccc','ddd']
  },

  //自定义事件
  btn2:function(){
    var news2 = this.data.news;
    news2.shift();

  console.log(news2)
   this.setData({
     msg:"测试文本二二二！！！",
     btn1msg:"一",
     flag: !this.data.flag,
     news: news2
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