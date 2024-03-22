import { defineConfig } from 'vitepress'


//命令集：pnpm add -D vitepress vue less

export default defineConfig({
  lang: 'zh-CN',
  title: "LYNK OSN基地",
  description: "领克OSN",
  cleanUrls: true,
  // #region fav
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],
  // #endregion fav

  base: '/', //网站部署到github的vitepress这个仓库里

  //cleanUrls:true, //开启纯净链接无html


  //启用深色模式
  //appearance:'dark',

  //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    }
  },

  //markdown配置
  markdown: {
    theme: 'github-dark-dimmed',
    headers: {
      level: [0, 0],
    },
  },


  //主题配置
  themeConfig: {
    
    //左上角logo
    logo: '/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'ChatGPT', link: 'https://ai.xbrooke.cn' },
      {
        text: '🍉安装教程',
        items: [
          {
            // 分组标题1
            text: '前言',
            items: [
              { text: '第三方软件', link: '/azjc/qy/d3' },
            ],
          },
          {
            // 分组标题2
            text: '基础安装',
            items: [
              { text: '快速上手', link: '/azjc/jcaz/ksss' },
              { text: '安装软件', link: '/azjc/jcaz/az' },
              { text: '设置安装', link: '/azjc/jcaz/sz' },
            ],
            
          },
          {
            //分组标题1
            text: '软件',
            items: [
              { text: '车机软件', link: '/azjc/rj/rj' },
             
            ],
          },
          {
            //分组标题1
            text: '常见问题',
            items: [
              { text: 'OSN常见问题', link: '/azjc/wt/wt' },
            ],
          },
         
          {
            //分组标题1
            text: '车友沟通',
            items: [
              { text: '企微群', link: '/azjc/wx/wx' },
            ],
          },
          {
            //分组标题1
            text: '对我说',
            items: [
              { text: '留言板', link: '/azjc/ly/ly' },
            ],
          },
        ],
        
      },
    ],


    //侧边栏
    sidebar: {
      '/azjc/':[
      {
        //分组标题1
        text: '前言',
        collapsed: false,
        items: [
          { text: '第三方软件', link: '/azjc/qy/d3' },
        ],
      },
      {
        //分组标题1
        text: '基础安装',
        collapsed: false,
        items: [
          { text: '快速上手', link: '/azjc/jcaz/ksss' },
          { text: '安装软件', link: '/azjc/jcaz/az' },
          { text: '设置安装', link: '/azjc/jcaz/sz' },
        ],
      },
      {
        //分组标题1
        text: '软件',
        collapsed: false,
        items: [
          { text: '车机软件', link: '/azjc/rj/rj' },
         
        ],
      },
      {
        //分组标题1
        text: '常见问题',
        collapsed: false,
        items: [
          { text: 'OSN常见问题', link: '/azjc/wt/wt' },
        ],
      },
     
      {
        //分组标题1
        text: '车友沟通',
        collapsed: false,
        items: [
          { text: '微信群', link: '/azjc/wx/wx' },
        ],
      },
      {
        //分组标题1
        text: '对我说',
        collapsed: false,
        items: [
          { text: '留言板', link: '/azjc/ly/ly' },
        ],
      },

      
    ],
  },



    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },



    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xbrooke/lynk '},
      //{ icon: 'twitter', link: 'https://twitter.com/' }, 
     // { icon: 'discord', link: 'https://chat.vitejs.dev/' }, 
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',



    //页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 备案号：<a href="https://beian.miit.gov.cn/">徐大兵维护</a>',
    },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',


    //大纲显示2-3级标题
    outline:[2,3],
    //大纲顶部标题
    outlineTitle:'当前页大纲',


    //编辑本页
    //editLink: {
    //  pattern: 'https://github.com/账户名/仓库名/edit/main/docs/:path',
    //  text: '在GitHub编辑本页'
    //},
    


    //上次更新时间
    //lastUpdatedText:'Updated Date',


    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 

  },

  
  
})
