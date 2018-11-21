// 通过 getApp() 全局函数来获取应用实例
const App = getApp()
console.log(App.glbData);

Page({
    pageData:{     // 在这个页面内都可以通过this.pageData去访问这个页面实例
        b:2
    },
    onLoad: function(){
        console.log('onLoad')
    },
    onReady:function(){
        console.log('onReady')
    },
    onShow:function(){
        console.log('onShow')
    },
    onHide:function(){
        console.log('onHide')
    },
    onUnLoad:function(){
        console.log('onUnLoad')
    }

})