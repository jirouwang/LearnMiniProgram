// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  data: {
    counter: 0
  },
  properties: {
    // title: String
    title: {
      type: String,
      value: "默认值",
      observer: function(newVal, oldVal) {
        // console.log(newVal, oldVal)
        // 传来的值props的先后值
      }
    }
  },
  externalClasses: ["titleclass"],
  methods: {
    handleIncrement() {
      // console.log('-----------')
      this.triggerEvent("increment");
    },
    incrementCounter(num) {
      this.setData({
        counter: this.data.counter+num
      })
    }
  }
})
