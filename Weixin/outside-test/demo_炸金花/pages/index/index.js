Page({
  　　data: {
    　　num1: 1,
    　　num2: 2,
    　　num3: 3,
    　　imgNum1: 1,
    　　imgNum2: 2,
    　　imgNum3: 3,
    　　b1: "white",
    　　b2: "white",
    　　b3: "white",
    　　flag: true,
    　　butype: "primary",
    　　butext: "开始",
    　　hidden: true,
    　　score: 0
  　　},
  　　start: function () {
    　　var that = this;
    　　that.setData({
      　　butype: "default",
      　　butext: "停止"
    　　})
    　　if (this.data.flag) {
      　　this.go = setInterval(function () {
        　　that.setData({
          　　num1: Math.ceil(Math.random() * 10),
          　　num2: Math.ceil(Math.random() * 10),
          　　num3: Math.ceil(Math.random() * 10),
          　　imgNum1: Math.ceil(Math.random() * 4),
          　　imgNum2: Math.ceil(Math.random() * 4),
          　　imgNum3: Math.ceil(Math.random() * 4),
          　　b1: "#" + Math.floor(Math.random() * 1000000), b2: "#" + Math.floor(Math.random() * 1000000), b3: "#" + Math.floor(Math.random() * 1000000)
        　　})
      　　}, 100)
      　　this.setData({
        　　flag: false,
        　　hidden: true,
        　　score: 0
      　　})
    　　} else {
      　　clearInterval(this.go)
      　　this.setData({
        　　flag: true,
        　　butype: "primary",
        　　butext: "开始",
        　　b1: "white",
        　　b2: "white",
        　　b3: "white"
      　　})
      　　var n1 = this.data.num1;
      　　var n2 = this.data.num2;
      　　var n3 = this.data.num3;
      　　var img1 = this.data.imgNum1;
      　　var img2 = this.data.imgNum2;
      　　var img3 = this.data.imgNum3;
      　　var result = n1 + n2 + n3;
      　　if (img1 == img2 && img2 == img3) {
        　　result += 20;
      　　} else if (img1 == img2 || img2 == img3 || img1 == img3) {
        result += 10;
      　　}
      　　var newarr = new Array();
      　　newarr.push(n1)
      　　newarr.push(n2)
      　　newarr.push(n3)
      　　for (var i = 0; i < newarr.length; i++) {
        　　for (var j = i + 1; j < newarr.length; j++) {
          　　if (newarr[i] > newarr[j]) {
            　　var tmp = newarr[i];
            　　newarr[i] = newarr[j];
            　　newarr[j] = tmp;
          　　}
        　　}
      　　}
      　　if (((newarr[2] - newarr[1]) == 1) && ((newarr[1] - newarr[0]) == 1)) {
        result += 30;
      　　} else if (newarr[2] == newarr[1] || newarr[2] == newarr[0] || newarr[0] == newarr[1]) {
        result += 10;
      　　} else if (newarr[2] == newarr[1] && newarr[2] == newarr[0]) {
        result += 40;
      　　}
      　　this.setData({
        　　hidden: false,
        　　score: result
      　　})
    　　}
  　　},
  　　onShareAppMessage: function () {
    　　return {
      　　title: "大小之争",
      　　desc: '激烈的竞技游戏',
      　　path: '/pages/index/index'
    　　}
  　　}
　　})