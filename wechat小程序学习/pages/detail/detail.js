// pages/detail/detail.js
Page({
data:{
  address:"",
  type:"",
  message:"",
  contact:""
},
onLoad(options){
 this.getDetailInfo(options.id);

 console.log(options);
},
getDetailInfo(id){
wx.request({
  url: '',
  data:{
    distinct:'longxiaozhai_cource',
    id:id
  },
  method:'POST',
  header:{
    'content-type':'application/x-www-form-urlencoded'
  },
  success:this.getDetailSucc.bind(this)
})
},
getDetailSucc(res){
  const result = res.data.data;
  this.setData({
    address:result.address,
    type:result.type,
    message:result.message,
    contact:result.contact
  })
},
})