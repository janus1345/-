//index.js
//获取应用实例
const app=getApp();
Page({
data:{
  longitude:"",
  latitude:"",
    controls: [{

      iconPath: '/pages/resources/定位.png',
      position: {
        left:(app.globalData.windowWidth/2)-10,
        top:((app.globalData.windowHeight-40)/2)-20,
        width: 20,
        height: 20
      },
      
       },

      {
        id: 1,
        iconPath:'../resources/center.png',
        position: {
          left: 20,
          top: (app.globalData.windowHeight - 40) - 60,
          width: 40,
          height: 40
        },
        clickable:true
        }]

},
onShow(){
this.getLocation();
this.getMessages();
},
getMessages(){
  wx.request({
    url: 'https://nuanwan.wekeji.cn/student/index.php/trade/get_list',
    data:{
      distinct:'longxiaozhai_cource'
    },
    header:{
      "content-type":"application/x-www-form-urlencoded"
    },
    success:function(res){
      this.getMessagesSucc.bind(this)
    }
  })
},
getMessagesSucc(res){
  const data = res.data.data;
  const arr = res.data.map((value, index) =>{
    return {
      iconPath:'/resources/'+value.type+"png",
      id:value.id,
      latitude:value.latitude,
      longitude:value.longitude,
      width:40,
      height:40
    }
  });
  this.setData({
    markers:markers
  })
},
  handleMarkerTap(e){
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.markerId
    })
  },
getLocation(){
  wx.getLocation({
    type: 'gcj02',
    success: this.handleGetLocation.bind(this)




})
},

  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map')
  },
  getLocation(){
    wx.getLocation({
      type: 'gcj02',
      success: this.handleGetLocation.bind(this)
    })
 
},

handleGetLocation(res){
this.setData({
  longitude:res.longitude,
  latitude:res.latitude
})
}
,
  controltap: function () {
    
    this.mapCtx.moveToLocation()
  },


 onShareAppMessage(){
   return {
     title:'萌宠交易平台',
     path:'/pages/index/index'
   }
 }
})