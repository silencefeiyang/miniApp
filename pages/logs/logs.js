// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:''
  },
  toIndex(){
    wx.switchTab({
      url:"/pages/index/index"
    })
  },
  getStorage(){
    wx.getStorage({
      key: 'name',
      success: res=>{
        this.setData({
          name:res.data
        })
      },
    })
  },
  ontest(){
    wx.showModal({
      title: '成功成功',
      content: '',
    })
  }
})