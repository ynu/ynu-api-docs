const { fs, path } = require("@vuepress/shared-utils");

module.exports = ctx => ({
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  // theme: '@vuepress/vue',
  themeConfig: {
    repo: "ynu/ynu-api-docs",
    editLinks: true,
    docsDir: "docs",
    locales: {
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: require("./nav/zh"),
        sidebarDepth: 3,
        sidebar: {
          "/guide/": getGuideSidebar("指南", "深入"),
          "/esop/": [
            {
              title: "基础",
              collapsable: false,
              children: ["", "introduction", "admin-manual"]
            },
            {
              title: "深入",
              collapsable: false,
              children: ["developer-manual"]
            },
            {
              title: "API文档",
              collapsable: false,
              children: [
                {
                  title: "API用法",
                  collapsable: false,
                  children: ["apiUsage"]
                },
                {
                  title: "API返回数据说明",
                  collapsable: false,
                  children: ["api-return-data-description"]
                },
                {
                  title: "标准代码",
                  collapsable: false,
                  children: [
                    "api-standard/return-data-description",
                    "api-standard/xbdm",
                    "api-standard/mzdm",
                    "api-standard/zzmmdm",
                    "api-standard/zjlbdm",
                    "api-standard/zjdm",
                    "api-standard/dqdm",
                    "api-standard/yxdm",
                    "api-standard/hyzkdm",
                    "api-standard/jkzkdm",
                    "api-standard/pyccdm",
                    "api-standard/yjs-xslbdm",
                    "api-standard/xslbdm",
                    "api-standard/xqdm",
                    "api-standard/pyfsdm",
                    "api-standard/rxfsdm",
                    "api-standard/yjs-zxjhlbdm",
                    "api-standard/jdfsdm",
                    "api-standard/xjztdm",
                    "api-standard/ksfsdm",
                    "api-standard/xxfsdm",
                    "api-standard/lxbzdm",
                    "api-standard/xkmldm"
                  ]
                },
                {
                  title: "研究生管理",
                  collapsable: false,
                  children: ["api-manual"]
                },
                {
                  title: "本科教务",
                  collapsable: false,
                  children: []
                },
                {
                  title: "人事管理",
                  collapsable: false,
                  children: []
                }
              ]
            },

            {
              title: "其他",
              collapsable: false,
              children: ["markdown-getting-started"]
            }
          ]
        }
      }
    }
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ["@vuepress/medium-zoom", true],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ],
    [
      "container",
      {
        type: "upgrade",
        before: info => `<UpgradePath title="${info}">`,
        after: "</UpgradePath>"
      }
    ],
    "flowchart",
    [
      "mathjax",
      {
        target: "svg",
        macros: {
          "*": "\\times"
        }
      }
    ]
  ],
  extraWatchFiles: [".vuepress/nav/zh.js"]
});

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        "",
        "getting-started",
        "directory-structure",
        "basic-config",
        "assets",
        "markdown",
        "using-vue",
        "i18n",
        "deploy"
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        "frontmatter",
        "permalinks",
        "markdown-slot",
        "global-computed"
      ]
    }
  ];
}
