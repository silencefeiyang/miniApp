// pages/index/index.js

let arr = ['1','2','3']
let arr2 = [
  {id:1,name:'xiaohua'},
  {id:2,name:'xiaocui'},
  {id:3,name: 'xiaolan'}
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '',
    wxsStr:'Matt,Moli,Cheery',
    score: 100
  },
  getInputValue(ev){
    console.log(ev.detail.value)
  },
  recevieNum(ev){
    this.setData({
      num:ev.detail
    })
  }
})