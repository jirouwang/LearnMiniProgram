// components/my-multslot/my-multslot.js
Component({
  
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 监听组件所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('页面显示时触发')
    },
    hide() {
      console.log('页面隐藏时触发')
    },
    resize() {
      console.log('页面大小改变时')
    }
  },
  // 监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log('组件被创建')
    },
    attached() {
      console.log('组件被添加到页面')
    },
    ready() {
      console.log('组件被渲染出来')
    },
    moved() {
      console.log('组件被移动（节点移动）')
    },
    detached() {
      console.log('组件被移除')
    }
  }
})
