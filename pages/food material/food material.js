// pages/food material/food material.js
Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "推荐",
        ishaveChild: false,
        children:
          [
            // {
            //   child_id: 1,
            //   name: '洁面皂',
            //   image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117972563.jpg"
            // },
            // {
            //   child_id: 2,
            //   name: '卸妆',
            //   image: "http://mz.djmall.xmisp.cn/files/logo/20161207/148110444480.jpg"
            // },
            // {
            //   child_id: 3,
            //   name: '洁面乳',
            //   image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117973270.jpg"
            // },
            // {
            //   child_id: 4,
            //   name: '面部祛角质',
            //   image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117981591.jpg"
            // }
          ]
      },
      {
        cate_id: 2,
        cate_name: "肉蛋类",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              image: "/images/foodmaterial/meategg/anchun.jpg"
            },
            {
              child_id: 2,
              image: "/images/foodmaterial/meategg/huotui.jpg"
            },
            {
              child_id: 3,
              image: "/images/foodmaterial/meategg/ji.jpg"
            },
            {
              child_id: 4,
              image: "/images/foodmaterial/meategg/jichi.jpg"
            },
            {
              child_id: 5,
              image: "/images/foodmaterial/meategg/jidan.jpg"
            },
            {
              child_id: 6,
              image: "/images/foodmaterial/meategg/jixongrou.jpg"
            },
            {
              child_id: 7,
              image: "/images/foodmaterial/meategg/larou.jpg"
            },
            {
              child_id: 8,
              image: "/images/foodmaterial/meategg/liji.jpg"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "海鲜类",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              image: "/images/foodmaterial/seafood/baoyu.jpg"
            },
            {
              child_id: 2,
              image: "/images/foodmaterial/seafood/caoyu.jpg"
            },
            {
              child_id: 3,
              image: "/images/foodmaterial/seafood/daiyu.jpg"
            },
            {
              child_id: 4,
              image: "/images/foodmaterial/seafood/diwang.jpg"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "菌类",
        ishaveChild: true,
        children: 
          [
            {
              child_id: 1,
              image: "/images/foodmaterial/jun/jin.jpg"
            },
            {
              child_id: 2,
              image: "/images/foodmaterial/jun/m.jpg"
            },
            {
              child_id: 3,
              image: "/images/foodmaterial/jun/pinggu.jpg"
            },
            {
              child_id: 4,
              image: "/images/foodmaterial/jun/xianggu.jpg"
            }
          ]
      },
      {
        cate_id: 5,
        cate_name: "鲜果类",
        ishaveChild: true,
        children: 
          [
            {
              child_id: 1,
              image: "/images/foodmaterial/fruit/1.jpg"
            },
            {
              child_id: 2,
              image: "/images/foodmaterial/fruit/2.jpg"
            },
            {
              child_id: 3,
              image: "/images/foodmaterial/fruit/3.jpg"
            },
            {
              child_id: 4,
              image: "/images/foodmaterial/fruit/4.jpg"
            }
          ]
      },
      {
        cate_id: 6,
        cate_name: "蔬菜类",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 7,
        cate_name: "豆制类",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 8,
        cate_name: "米类",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 9,
        cate_name: "干果类",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 10,
        cate_name: "方便面类",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})  