//index.js
// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        link: '/pages/cook/cook',
        url: '/images/slider/01.jpg'
      }, {
        link: '/pages/cook/cook',
        url: '/images/slider/02.jpg'
      }, {
        link: '/pages/cook/cook',
        url: '/images/slider/03.jpg'
      }, {
        link: '/pages/cook/cook',
        url: '/images/slider/04.jpg'
      }
    ],
    indicatorDots: true,  //小点
    autoplay: true,  //是否自动轮播
    interval: 4000,  //间隔时间
    duration: 1000,  //滑动时间
    subjects: [],
    test: '这是一个测试',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  },
  menu1:function(){
    wx.navigateTo({
      title:"主食菜单",
      url: "../menu1/menu1",
    })
  },
  cook: function () {
    wx.navigateTo({
      title: "菜谱详情",
      url: "../cook/cook",
    })
  }

})