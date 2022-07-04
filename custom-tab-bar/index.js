Page({
  handleChange({detail}) {
    wx.switchTab({
      url: '/pages/'+ detail.key + "/index"
    })
  },
});
