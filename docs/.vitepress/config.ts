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
      { text: '引导', link: '/guide/development-background', activeMatch: '/guide/' },
      { text: 'API', link: '/apis/', activeMatch: '/apis/' },
      { text: '更新日志', link: 'https://github.com/zguiyang/regex-utils-js' },
    ],
  },
} );