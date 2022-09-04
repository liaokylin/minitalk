// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    current: 'me',
  },
  onShow() {
    this.getTabBar().setData({
      current: 'me'
    })
  }
})
