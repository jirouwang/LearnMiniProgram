// pages/home/home.js
const app = getApp()
let name = app.globalData.name
let age = app.globalData.age
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
  handleGetUserInfo(event) {
    console.log(event)
    // console.log(app.globalData)
  },

  // 页面的生命周期函数
  onLoad(options) {
    let Timestamp = Math.round(new Date() / 1000)
    let Nonce = Math.floor((Math.random() * 10) + 1) * Timestamp
    let Signature = ''
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
        Signature = res.signature
      }
    })
    wx.request({
      url: `https://iai.tencentcloudapi.com/?Action=CreateGroup&GroupName=计算机11602&FaceModelVersion=3.0&GroupId=jisuanji11602&Version=2018-03-01&Timestamp=${Timestamp}&Nonce=${Nonce}&SecretId=AKIDD1auyzXUu47wVpdqVv52lFVZS6UiFX4K&Signature=${Signature}`,
      success(res) {
        console.log(res)
      }
    })
  },
  onReady() {

  },
  onShow() {

  },
  onHide() {

  },
  onUnload() {

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