App({
  // 生命周期函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("小程序初始化完成")
    // 1.获取用户信息 2.发送网络请求(但是一般都是在具体的页面去请求数据)
    wx.getUserInfo({
      success: function(res) {
        // console.log(res)
      }
    })
    wx.request({
      url: '',
    })
    setTimeout(()=>{
      const err = new Error()
      throw err
    },3000)
  },

  /**界面显示出来之后会执行
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("onshow")
  },

  /**界面被隐藏时执行
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序发生错误")
  }
})
