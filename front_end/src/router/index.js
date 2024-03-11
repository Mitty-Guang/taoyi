import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },

    {
      path: '/test',
      component: () => import('@/components/test')
    },
    {
      path: '/index',
      component: () => import('@/components/index')
    },
    {
      path: '/forum',
      component: () => import('@/components/forum')
    },
    {
      path: '/register',
      component: () => import('@/components/register')
    },
    {
      path: '/login',
      component: () => import('@/components/login')
    },
    // 分类
    {
      path: '/classes',
      redirect: '/classes/yansetao/hongtao',
    },
    {
      path: '/classes/yansetao/hongtao',
      component: () => import('@/components/classes_pages/yansetao/hongtao')
    },
    {
      path: '/classes/yansetao/heitao',
      component: () => import('@/components/classes_pages/yansetao/heitao')
    },
    {
      path: '/classes/yansetao/huitao',
      component: () => import('@/components/classes_pages/yansetao/huitao')
    },
    {
      path: '/classes/yansetao/baitao',
      component: () => import('@/components/classes_pages/yansetao/baitao')
    },
    {
      path: '/classes/caitao/caitao',
      component: () => import('@/components/classes_pages/caitao/caitao')
    },
    {
      path: '/classes/caitao/yangshao',
      component: () => import('@/components/classes_pages/caitao/yangshao')
    },
    {
      path: '/classes/caitao/banpo',
      component: () => import('@/components/classes_pages/caitao/banpo')
    },
    {
      path: '/classes/caitao/miaodigou',
      component: () => import('@/components/classes_pages/caitao/miaodigou')
    },
    {
      path: '/classes/caitao/majiayao',
      component: () => import('@/components/classes_pages/caitao/majiayao')
    },
    {
      path: '/classes/caitao/banshan',
      component: () => import('@/components/classes_pages/caitao/banshan')
    },
    {
      path: '/classes/caitao/machang',
      component: () => import('@/components/classes_pages/caitao/machang')
    },
    {
      path: '/classes/caihui',
      component: () => import('@/components/classes_pages/caihui/caihui')
    },
    {
      path: '/classes/yinwen',
      component: () => import('@/components/classes_pages/yinwen/yinwen')
    },
    {
      path: '/classes/youtao',
      component: () => import('@/components/classes_pages/youtao/youtao')
    },

    //历史
    {
      path: '/history',
      redirect: '/history/xinshiqi/theoldest',
    },
    {
      path: '/history/xinshiqi/theoldest',
      component: () => import('@/components/history_pages/xin_shi_qi/the_oldest'),
    },
    {
      path: '/history/xinshiqi/yangshao',
      component: () => import('@/components/history_pages/xin_shi_qi/yangshao'),
    },
    {
      path: '/history/xinshiqi/longshan',
      component: () => import('@/components/history_pages/xin_shi_qi/longshan'),
    },
    {
      path: '/history/xinshiqi/yangshao',
      component: () => import('@/components/history_pages/xin_shi_qi/yangshao'),
    },
    {
      path: '/history/shangzhou/baitao',
      component: () => import('@/components/history_pages/shangzhou/baitao'),
    },
    {
      path: '/history/zhanguo/kongxinzhuan',
      component: () => import('@/components/history_pages/zhanguo/kongxinzhuan'),
    },
    {
      path: '/history/zhanguo/huitao',
      component: () => import('@/components/history_pages/zhanguo/huitao'),
    },
    {
      path: '/history/zhanguo/yinwenyingtao',
      component: () => import('@/components/history_pages/zhanguo/yinwenyingtao'),
    },
    {
      path: '/history/qinhan/bingmayong',
      component: () => import('@/components/history_pages/qinhan/bingmayong'),
    },
    {
      path: '/history/qinhan/caihuitao',
      component: () => import('@/components/history_pages/qinhan/caihuitao'),
    },
    {
      path: '/history/tang/tangsancai',
      component: () => import('@/components/history_pages/tang/tangsancai'),
    },
    {
      path: '/history/tang/tangsancai',
      component: () => import('@/components/history_pages/tang/tangsancai'),
    },
    {
      path: '/history/song/ruyao',
      component: () => import('@/components/history_pages/song/ruyao'),
    },
    {
      path: '/history/song/guanyao',
      component: () => import('@/components/history_pages/song/guanyao'),
    },
    {
      path: '/history/song/geyao',
      component: () => import('@/components/history_pages/song/geyao'),
    },
    {
      path: '/history/song/junyao',
      component: () => import('@/components/history_pages/song/junyao'),
    },
    {
      path: '/history/song/dingyao',
      component: () => import('@/components/history_pages/song/dingyao'),
    },
    {
      path: '/history/yuan',
      component: () => import('@/components/history_pages/yuan/yuan'),
    },
    {
      path: '/history/ming/mingchu',
      component: () => import('@/components/history_pages/ming/mingchu'),
    },
    {
      path: '/history/ming/yongxuan',
      component: () => import('@/components/history_pages/ming/yongxuan'),
    },
    {
      path: '/history/ming/zjt',
      component: () => import('@/components/history_pages/ming/zjt'),
    },
    {
      path: '/history/ming/chz',
      component: () => import('@/components/history_pages/ming/chz'),
    },
    {
      path: '/history/ming/jlw',
      component: () => import('@/components/history_pages/ming/jlw'),
    },
    {
      path: '/history/ming/tianqi',
      component: () => import('@/components/history_pages/ming/tianqi'),
    },
    {
      path: '/history/qing/shunzhi',
      component: () => import('@/components/history_pages/qing/shunzhi'),
    },
    {
      path: '/history/qing/kangxi',
      component: () => import('@/components/history_pages/qing/kangxi'),
    },
    {
      path: '/history/qing/yongqian',
      component: () => import('@/components/history_pages/qing/yongqian'),
    },
    {
      path: '/history/qing/jiaqing',
      component: () => import('@/components/history_pages/qing/jiaqing'),
    },
    {
      path: '/history/qing/guangxu',
      component: () => import('@/components/history_pages/qing/guangxu'),
    },
    {
      path: '/history/qing/xuantong',
      component: () => import('@/components/history_pages/qing/xuantong'),
    },
    {
      path: '/history/xiandai',
      component: () => import('@/components/history_pages/xiandai/xiandai'),
    },
    // 用户
    {
      path: '/user',
      redirect: '/login',
    },
    {
      path: '/4',
      component: () => import('@/components/tutorial/chengxing/nitiao'),
    },
    {
      path: '/*/4',
      component: () => import('@/components/tutorial/chengxing/nitiao'),
    },
    {
      path: '/usercenter',
      component: () => import('@/components/user'),
    },
    {
      path: '/*/5',
      redirect: '/forum',
    },
    {
      path: '/5',
      redirect: '/forum',
    },
    {
      path: '/news',
      component: () => import('@/components/News')
    },
    {
      path: '/news/N20210306',
      component: () => import('@/components/news/N20210306')
    },
    {
      path: '/news/N20220406',
      component: () => import('@/components/news/N20220406')
    },
    {
      path: '/news/N20220417',
      component: () => import('@/components/news/N20220417')
    },
    {
      path: '/news/N20220426',
      component: () => import('@/components/news/N20220426')
    },
    {
      path: '/news/N20220614',
      component: () => import('@/components/news/N20220614')
    },
    {
      path: '/news/N20220618',
      component: () => import('@/components/news/N20220618')
    },
    {
      path: '/news/N20220709',
      component: () => import('@/components/news/N20220709')
    },
    {
      path: '/news/N20220822',
      component: () => import('@/components/news/N20220822')
    },
    {
      path: '/news/N20220912',
      component: () => import('@/components/news/N20220912')
    },
    {
      path: '/news/N20220930',
      component: () => import('@/components/news/N20220930')
    },
    {
      path: '/tutorial',
      redirect: '/tutorial/chengxing/nitiao',
    },
    {
      path: '/tutorial/chengxing/nitiao',
      component: () => import('@/components/tutorial/chengxing/nitiao'),
    },
    {
      path: '/tutorial/chengxing/shounie',
      component: () => import('@/components/tutorial/chengxing/shounie'),
    },
    {
      path: '/tutorial/chengxing/niban',
      component: () => import('@/components/tutorial/chengxing/niban'),
    },
    {
      path: '/tutorial/chengxing/shigao',
      component: () => import('@/components/tutorial/chengxing/shigao'),
    }, {
      path: '/tutorial/chengxing/lapei',
      component: () => import('@/components/tutorial/chengxing/lapei'),
    },
    {
      path: '/tutorial/shiyou/jinyou',
      component: () => import('@/components/tutorial/shiyou/jinyou'),
    },
    {
      path: '/tutorial/chengxing/shounie',
      component: () => import('@/components/tutorial/chengxing/shounie'),
    },
    {
      path: '/tutorial/chengxing/niban',
      component: () => import('@/components/tutorial/chengxing/niban'),
    },
    {
      path: '/tutorial/chengxing/shigao',
      component: () => import('@/components/tutorial/chengxing/shigao'),
    },
    {
      path: '/tutorial/chengxing/lapei',
      component: () => import('@/components/tutorial/chengxing/lapei'),
    },
    {
      path: '/tutorial/shiyou/jinyou',
      component: () => import('@/components/tutorial/shiyou/jinyou'),
    },
    {
      path: '/tutorial/shiyou/linyou',
      component: () => import('@/components/tutorial/shiyou/linyou'),
    },
    {
      path: '/tutorial/shiyou/dangyou',
      component: () => import('@/components/tutorial/shiyou/dangyou'),
    },
    {
      path: '/tutorial/shiyou/tushuayou',
      component: () => import('@/components/tutorial/shiyou/tushuayou'),
    },
    {
      path: '/tutorial/shiyou/penyou',
      component: () => import('@/components/tutorial/shiyou/penyou'),
    },
    {
      path: '/tutorial/shiyou/shuaiyou',
      component: () => import('@/components/tutorial/shiyou/shuaiyou'),
    },
    {
      path: '/tutorial/shiyou/xinxing',
      component: () => import('@/components/tutorial/shiyou/xinxing'),
    },
    {
      path: '/tutorial/zhuangshi/caihui',
      component: () => import('@/components/tutorial/zhuangshi/caihui'),
    },
    {
      path: '/tutorial/zhuangshi/guijinshu',
      component: () => import('@/components/tutorial/zhuangshi/guijinshu'),
    },
    {
      path: '/tutorial/zhuangshi/guangzecai',
      component: () => import('@/components/tutorial/zhuangshi/guangzecai'),
    },
    {
      path: '/tutorial/qubie/qubie',
      component: () => import('@/components/tutorial/qubie/qubie'),
    },
    {
      path: '/tutorial/buzhou/1lianni',
      component: () => import('@/components/tutorial/buzhou/1lianni'),
    },
    {
      path: '/tutorial/buzhou/8shaoyao',
      component: () => import('@/components/tutorial/buzhou/8shaoyao'),
    },
    {
      path: '/tutorial/buzhou/9caihui',
      component: () => import('@/components/tutorial/buzhou/9caihui'),
    },
    {
      path: '/tutorial/buzhou/2lapei',
      component: () => import('@/components/tutorial/buzhou/2lapei'),
    },
    {
      path: '/tutorial/buzhou/3yinpei',
      component: () => import('@/components/tutorial/buzhou/3yinpei'),
    },
    {
      path: '/tutorial/buzhou/4lipei',
      component: () => import('@/components/tutorial/buzhou/4lipei'),
    },
    {
      path: '/tutorial/buzhou/5shaipei',
      component: () => import('@/components/tutorial/buzhou/5shaipei'),
    },
    {
      path: '/tutorial/buzhou/6kehua',
      component: () => import('@/components/tutorial/buzhou/6kehua'),
    },
    {
      path: '/tutorial/buzhou/7shiyou',
      component: () => import('@/components/tutorial/buzhou/7shiyou'),
    },
  ]
})
