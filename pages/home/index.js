// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    current: 'home',
    motto: 'Hello World',
    userInfo: {},
  },
  onShow() {
    console.log('on show')
    this.getTabBar().setData({
      current: 'home'
    })
  }
})
