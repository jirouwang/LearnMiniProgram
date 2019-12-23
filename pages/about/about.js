// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '12',
    imgSrc: ''
  },
  chooseImg() {
    // console.log('this')
    wx.chooseImage({
      success: (res) => {
        this.setData({
          imgSrc: res.tempFilePaths[0]
        })
      },
    })
  },
  imgLoadedEvent() {
    // console.log(123)
  }
})