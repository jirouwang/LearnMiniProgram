// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服','鞋子','裤子']
  },
  handleClickEvent(event) {
    const dataset = event.target.dataset
    console.log(dataset.index,dataset.item)
  }
})