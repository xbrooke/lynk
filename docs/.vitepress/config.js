import { defineConfig } from 'vitepress'
import AutoNavPlugin from 'vitepress-auto-nav-sidebar'

// import XMindPlugin from 'vite-plugin-vue-xmind'
const { nav, sidebar } = AutoNavPlugin({
  ignoreFolders: [
    'node_modules',
    'assets',
    'public',
    '.vitepress',
    'code',
    '.obsidian',
    'utils',
    'resource',
    'xmind',
    'Vue'
  ],
  dirPrefix: '',
  filePrefix: '',
  ignoreFiles: ['学习大纲', '学习计划', '面试准备', '互联网公司列表', 'index'],
  isCollapse: true,

})

export default defineConfig({
  base: '',
  appearance: false,
  lang: 'zh-CN',
  title: 'Code More Create',
  // description: "Merlin's Blog",
  assetsInclude: ['**/*.xmind'],
  // vite: {
  //   plugins: [XMindPlugin()]
  // },
  head: [
    // add jquert and fancybox
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
  ],
  markdown: {
    config: (md) => {
      // md.use(CodeRunPlugin)
      md.use(function (md) {
        // const handleImage = md.renderer.rules.image
        md.renderer.rules.image = (tokens, idx, options, env, self) => {
          const url = tokens[idx].attrs[0][1];
          if (/.xmind$/.test(url)) {
            // const title = tokens[idx].children[0].content;
            // const url = tokens[idx].attrs[0][1];
            // return `<XMindViewer src="${url}" title="${title}"></XMindViewer>`;
            return `<p>暂时不支持XMIND预览</p>`;
          } else {
            const PUBLIC_PREFIX = "/docs/.vitepress/public";
            const token = tokens[idx];
            const srcIndex = token.attrIndex("src");
            const url = token.attrs[srcIndex][1].replace(PUBLIC_PREFIX, "");
            const caption = md.utils.escapeHtml(token.content);
            return `<a data-fancybox href="${url}" content="${caption}">
                    <img src="${url}" alt="${caption}" />
                </a>`;
            // return handleImage(tokens, idx, options, env, self);
          }
        }
      })
    }
  },
  themeConfig: {
    // logo: '/logo.png',
    siteTitle: 'OSN交流基地',
    nav: [
      ...nav,
      {
        text: '🏄🏻‍♂️ 软件下载',
        link: 'https://algorithm.merlin218.top'
      }
    ], sidebar,
    footer: {
      message: 'MIT Licensed | Copyright © 2021 - 2022',
      copyright: '粤ICP备2021165391号'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xbrooke'
      }
    ],
    lastUpdatedText: '更新时间',
    darkModeSwitchLabel: '深浅模式',
    sidebarMenuLabel:'目录',
    outline:[2,3],
    outlineTitle:'当前页大纲',
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 


  },
})
