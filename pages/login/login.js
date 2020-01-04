// pages/login/login.js
import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 微信小程序原生网络请求
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: '王国成',
    //     age: 22,
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // Promise封装的网络请求
    request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: '王国成',
        age: 22
      }
    }).then((res) => {
      console.log(res)
    })
  },
  handleToast() {
    wx.showToast({
      title: '吆西',
      duration: 3000,
      icon: 'loading',
      // image: '/assets/img/loading.png'
      success: function () {
        console.log('123456')
      }
    })
  },
  handleModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈',
      success: function(res) {
        console.log(res)
        if(res.cancel) {
          console.log('用户点击了取消按钮')
        }
        if(res.confirm) {
          console.log('用户点击了确定按钮')
        }
      }
    })
  }
})