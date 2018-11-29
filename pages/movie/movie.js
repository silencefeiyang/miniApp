// 通过 getApp() 全局函数来获取应用实例
const App = getApp()

Page({
    pageData:{     // 在这个页面内都可以通过this.pageData去访问这个页面实例
        b:2
    },
  settingCache(){
    wx.setStorage({
      key: 'name',
      data: 'matte'
    })
  }

})