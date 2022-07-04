// index.js
// 获取应用实例
const app = getApp()

Page({
  onShow() {
    console.log('on show')
    this.getTabBar().setData({
      current: 'notice'
    })
  }
})
