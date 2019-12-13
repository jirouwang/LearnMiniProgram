// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'coderwhy',
    age: 18,
    counter: 0,
    students: [{
      id: 1,
      name: '与余灿',
      age: 58
    }, {
      id: 2,
      name: '战三',
      age: 12
    }, {
      id: 3,
      name: '李四',
      age: 24
    }, {
      id: 4,
      name: '王五',
      age: 19
    }]
  },
  handleButtonClick() {
    // console.log(123)
    // this.data.counter++
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})