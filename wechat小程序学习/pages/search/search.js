Page({
  staticData:{
    inputValue:""
  },

onLoad(){
this.getSearchResult();
},
getSearchResult(){
  wx.request({
    url: '',
    data:{
      distinct:'tanyao',
      keyword:""
    },
    method:"POST",
    header:{
      'content-type': "application/x-www-form-urlencoded",

    },
    success:this.getSearchResultSucc.bind(this)
    

  })
},
getSearchResultSucc(res){
  if(res.data.ret){
    const result = res.data.data;
    this.setData({
      list: result
    })
    
  }else{
    this.setData({
      list:[]
    })
  }
 
},
  handleInputChange(e){
 this.staticData.inputValue = e.detail.value;
  },
  handleSearch(){
    this.getSearchResult()
  },
  handleItemTap(e){
    wx.navigateTo({
      url: '/pages/detail/detail?id=' +e.currentTarget.id,
    })
  },
  onShareAppMessage() {
    return {
      title: '萌宠交易平台',
      path: '/pages/index/index'
    }
  }
})