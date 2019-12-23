// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBtnLoading: false
  },
  chBtnState() {
    this.setData({
      isBtnLoading: true
    })
  }
})