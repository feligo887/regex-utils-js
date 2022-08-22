import { defineConfig } from 'vitepress';

export default defineConfig ( {
  title: 'Regex-utils-js',

  // locales: {
  //     '/': {
  //         lang: 'en-US',
  //         description: 'A tool library that integrates common regular check expressions.',
  //         selectText: 'English',
  //     },
  //     '/zh_CN/': {
  //         lang: 'zh-CN',
  //         title: 'Regex-utils-js',
  //         description: '一个集成了常用正则校验表达式的工具库',
  //         selectText: '简体中文',
  //     },
  // },

  themeConfig: {
    nav: [
      { text: '引导', link: '/guide/foreword', activeMatch: '/guide/' },
      { text: '更新日志', link: 'https://github.com/zguiyang/regex-utils-js' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '引导',
          collapsed: true,
          collapsible: false,
          items: [
            {
              text: '前言',
              link: '/guide/foreword',
            },
            {
              text: '使用指南',
              link: '/guide/getting-started',
            },
          ],
        },
        {
          text: 'API',
          collapsed: true,
          collapsible: false,
          items: [
            {
              text: '常用正则',
              link: '/guide/apis/common',
            },
            {
              text: '数字正则',
              link: '/guide/apis/number',
            },
            {
              text: '字符串正则',
              link: '/guide/apis/string',
            },
          ],
        },
      ],
    },
    editLink: {
      pattern: 'https://github.com/zguiyang/regex-utils-js/tree/main/docs/:path',
      text: '编辑此页',
    },
  },
} );