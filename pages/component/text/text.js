Component({
    properties:{
        nowIn: String
    },
    data:{
        magicNum:Math.random()
    },
    attached(){
        this.triggerEvent('sendMagicNum',this.data.magicNum)
    },
    methods:{
        onTab(ev){
            this.setData({
                magicNum: Math.random()
            })
            this.triggerEvent('sendMagicNum',this.data.magicNum)
          }
    }
})