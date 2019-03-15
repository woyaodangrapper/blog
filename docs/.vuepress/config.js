const architectureChildren = ['','1002','1001','1003','1004', '1005', 
'1006','1007','1008','1009','1010','1011','1012','1013','1014','1015',
'1016','1017','1018','1019','1020','1021','1022','1023','1024','1025',
'1026','1027','1028','1029','1030','1031','1032','1033','1034','1035',
'1036','1037','1038','1039','1040','1041'];

const moment = require('moment');

module.exports = {
  base: '/blog/',
  title: '肖君的博客',
  description: '喷泉之所以漂亮是因为有压力,瀑布之所以壮观是因为没有退路',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '架构设计', link: '/architecture/' },
	  { text: '前端', link: '/frontend/4001' },
	  { text: '后端', link: '/backend/2001' },
    { text: '大数据', link: '/bigdata' },
    { text: '系列教程',
      items:[
        {text:'Netty系列',link:'/series/netty/'}
      ]  
    },
	  { text: '杂记', link: '/other/5001' },
      { text: 'Github', link: 'https://github.com/xiaojun90/blog' } //,
	  /**
	   {
        text: 'Languages',
        items: [
          { text: '中文', link: '/language/chinese' },
          { text: 'English', link: '/language/english' }
        ]
      }
	  **/
	 
    ],
	sidebar: {

      '/architecture/': [
        {
          title: '架构设计',
          collapsable: false,
          children:architectureChildren
        }
      ],
      '/frontend/': [
        {
          title: '前端',
          collapsable: false,
          children:[
            '4001',
            '4003'
          ]
        }
      ],
      '/backend/':[
        {
          title:'后端技术',
          collapsable: false,
          children:[
            '2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007',
            '2008'
          ]
        }
      ],
      '/other/': [
        {
          title: '杂记',
          collapsable: false,
          children:[
            '5001',
            '5002',
            '5003',
            '5004',
            '5005',
            '5006'
          ]
        }
      ], 
      '/series/netty/':[
        {
          title:'Netty系列',
          collapsable: false,
          children:[
            '',
            '6001',
            '6002',
            '6003'
          ]
        }
      ],    
	  // fallback
      '/': [
        ''
      ]
	},
  lastUpdated: '上次更新'
  },
  markdown: {
    lineNumbers:true
  },
  plugins: [
    ['@vuepress/back-to-top',true],
    [ 
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale('zh-cn')
          return moment(timestamp).fromNow();
        }
      }
    ]
  ],
};