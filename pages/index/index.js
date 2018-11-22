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
    names : arr2,
    people: {
      n1: 1,
      n2: 2
    },
    score: 100
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})