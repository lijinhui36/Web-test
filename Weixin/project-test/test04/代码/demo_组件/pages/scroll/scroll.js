var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 200
  },

  upper: function (e) {
    console.log("滚动到顶部了！！！！！！！！！！")
  },

  lower: function (e) {
    console.log("滚动到底部了！！！！！！！！！！")
  },

  scroll: function (e) {
    //console.log(e)
  },

  tap: function (e) {
    
    for (var i = 0; i < order.length; ++i) {

      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },

  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 50
    })
  }
})