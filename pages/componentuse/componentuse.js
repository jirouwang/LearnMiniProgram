// pages/componentuse/componentuse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },
  handleIncrement() {
    // console.log('----------------')
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabInfo(event) {
    console.log(event.detail)
  },
  handleChCpnCounter () {
    // this.selectComponent获取组件对象
    const cpn = this.selectComponent(".tab-counter");
    // cpn.setData({
    //   counter: cpn.data.counter+20
    // })
    cpn.incrementCounter(20);
  }
})