import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一只鸽",
  description: "一只鸽のblog",
  // base:"/yizhigee.github.io/",
  themeConfig: {
    logo:'/icons/gezi.svg',
    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Js', link: '/js/js相关' },
      { text: 'React', link: '/react/react相关' },
      { text: 'Node', link: '/node/安装验证淘宝镜像' },
      // { text: 'Git', link: '/markdown-examples' },
      { text: '杂', link: '/other/项目相关' },
      { text: '碎碎念', link: '/note/2024-05-21' },
      // {
      //   text: 'Node',
      //   items: [
      //     { text: 'npm', link: '/node/npm/安装验证淘宝镜像' },
      //     { text: 'pnpm', link: '/node/pnpm/清除pnpm缓存' },
      //   ]
      // },
    ],

    // 侧边栏
    sidebar:{
      '/js/':[
        { text: 'js相关', link: '/js相关/js相关' },
      ],
      '/react/':[
        { text: 'react相关', link: '/react/react相关' },
      ],
      '/node/':[
        { text: '安装验证淘宝镜像', link: '/node/安装验证淘宝镜像' },
        { text: 'pnpm相关', link: '/node/pnpm相关' },
      ],
      '/other/':[
        { text: '项目相关', link: '/other/项目相关' },
        { text: 'prettier格式化', link: '/other/prettier格式化' },
        { text: '集成Gitalk评论功能', link: '/other/集成Gitalk评论功能' },
        { text: 'test', link: '/other/test' },
      ],
      '/note/':[
        { text: '2024-05-21', link: '/note/2024-05-21' },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yizhigee/yizhigee.github.io.git' }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
     // 自定义配置上次更新的文本和日期格式
     lastUpdated: {
      text: '最后更新于',
    },
    // 开启本地搜索
    search: {
      provider: 'local'
    },
    // 锚点导航
    outline: {
      level: [2, 6],
      label: '目录'
    },
      // 底部版权部分
      footer: {
        message: '如有转载或 CV 的请标注本站原文地址',
        copyright: 'Copyright © 2023-2024-present yizhigee',
      },
  },
  markdown: {
    // 代码块风格
    // theme: 'material-theme-palenight',
    // theme:'github-light',
    // 代码块显示行数
    lineNumbers: true,
  }

})
