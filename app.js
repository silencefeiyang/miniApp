// 1. 注册App
// 会得到一个程序的实例, 这个实例可以被其他页面访问
App(
    {
        glbData: {a:1},
        onLaunch: function(){
            // console.log('onLaunch');           
        },
        onShow: function(){
            // console.log('onShow')
        },
        onHide: function(){
            // console.log('onHide')

        }
    }
)