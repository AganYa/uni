const md = require('markdown-it')();
module.exports = {
  dest: 'docs',
  base: '/uni/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'uni组件库',
      description: '基于JQuery的组件库'
    }
  },
  head: [
    ['link', {rel: 'icon', href: `/logo.png`}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png`}],
    ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
    ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
    ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
    ['script', {src: '/assets/js/article.js'}],
    ['script', {src: 'https://hm.baidu.com/hm.js?eeab23144137d3b40f28f0b49126c2ed'}],
    ['link', {rel: 'stylesheet', href: '/assets/css/common.css'}]
  ],
  plugins: [
    ['container', {
      type: 'demo',
      render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) {
          const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
          const description = (m && m.length > 1) ? m[1] : '';
          const content = tokens[idx + 1].content;
          const descriptionHTML = description ? md.render(description) : '';
          return '<base-demo><div slot="source">' + content + '</div>' + descriptionHTML + '<div slot="highlight">';
        }
        return '</div></base-demo>\n';
      }
    }],
    ['@vuepress/pwa', {
      updatePopup: {
        message: '发现新内容',
        buttonText: '刷新'
      }
    }],
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
  ],
  themeConfig: {
    repo: 'linjinze999/uni',
    docsRepo: 'linjinze999/uni',
    docsDir: 'vuepress',
    editLinks: true,
    sidebarDepth: 0,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '帮我改进此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: 'Element',
            link: '/element/',
          }
        ],
        sidebar: {
          '/element/': [
            '',
            'start',
            {
              title: '组件',
              collapsable: false,
              children: [
                {
                  title: 'Basic',
                  collapsable: false,
                  children: [
                    'components/layout',
                    'components/container',
                    'components/color',
                    'components/typography',
                    'components/border',
                    'components/icon',
                    'components/button',
                    'components/link',
                  ]
                }, {
                  title: 'Form',
                  collapsable: false,
                  children: [
                    'components/radio',
                    'components/checkbox',
                    'components/input',
                    'components/inputNumber',
                    'components/select',
                    'components/cascader',
                    'components/switch',
                    'components/slider',
                    'components/rate',
                    'components/colorPicker',
                    'components/transfer',
                  ]
                }, {
                  title: 'Data',
                  collapsable: false,
                  children: [
                    'components/tag',
                    'components/progress',
                    'components/badge',
                  ]
                }, {
                  title: 'Notice',
                  collapsable: false,
                  children: [
                    'components/alert',
                    'components/loading',
                    'components/message',
                    'components/notification',
                  ]
                }, {
                  title: 'Navigation',
                  collapsable: false,
                  children: [
                    'components/tabs',
                    'components/breadcrumb',
                    'components/dropdown',
                    'components/steps',
                  ]
                }, {
                  title: 'Others',
                  collapsable: false,
                  children: [
                    'components/ui18n',
                    'components/dialog',
                    'components/tooltip',
                    'components/popover',
                    'components/card',
                    'components/carousel',
                    'components/collapse',
                    'components/timeline',
                  ]
                },
              ]
            }
          ]
        }
      }
    }
  }
};
