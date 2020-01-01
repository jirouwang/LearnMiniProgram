// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '12',
    imgSrc: '',
    item: 456789,
    array: [1,2,3,4,56],
    price: 25.66666
    
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
  imgLoadedEvent(e) {
    console.log(e)
  },
  handleTouchStart(event) {
    console.log(event)
  },
  handleTouchEnd(event) {
    console.log(event)
  },
  clickOuter(event) {
    console.log(event)
  },
  clickInner(event) {
    console.log(event)
  }
})