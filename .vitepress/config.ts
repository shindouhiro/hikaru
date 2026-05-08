import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { presetUno, presetIcons } from 'unocss'
import type { DefaultTheme } from 'vitepress'
import { link } from 'fs'

// 定义导航菜单项的类型
interface NavItem {
  text: string
  link?: string
  items?: (NavItem | { text: string; items: NavItem[] })[]
}

export default defineConfig({
  // 如果是部署到 GitHub Pages，请在 GitHub Actions 中设置环境变量 IS_GH_PAGES=true
  base: process.env.IS_GH_PAGES ? '/hikaru/' : '/',
  lang: 'zh-CN',
  appearance: 'dark',
  title: "Hikaru",
  description: "AI Native Coder",
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],
  themeConfig: {
    outlineTitle: '本页目录',
    // 评论配置在 `.vitepress/giscus.ts` 中维护
    nav: [
      { text: '首页', link: '/' },
      { text: '日志', link: '/changelog' },
      {
        text: 'Nas',
        items: [
          {
            text: '私人影院资源篇',
            link: '/nas/movie'
          },
          {
            text: '转存',
            link: '/nas/pan'
          }
        ]
      },
      {
        text: '工具',
        items: [
          {
            text: 'Mac',
            items: [
              { text: 'Raycast', link: '/tools/mac/raycast' }
            ]
          },
          {
            text: 'Windows',
            items: [
              { text: 'uTools', link: '/tools/windows/utools' },
              { text: 'PowerShell', link: '/tools/windows/powershell' }
            ]
          },
          {
            text: '终端',
            items: [
              { text: 'LazyVim', link: '/tools/compatible/lazyvim' },
              { text: 'LazyGit', link: '/tools/compatible/lazygit' },
              { text: 'LazyDocker', link: '/tools/terminal/lazydocker' },
              { text: 'Tmux', link: '/tools/terminal/tmux' },
              { text: 'Yazi', link: '/tools/compatible/yazi' },
              { text: 'Kitty', link: '/tools/terminal/kitty' },
              { text: 'Warp', link: '/tools/terminal/warp' }
            ]
          },
          {
            text: '效率工具',
            items: [
              { text: 'Obsidian', link: '/tools/compatible/obsidian' }
            ]
          },
          {
            text: '在线工具',
            items: [
              { text: 'MD2Card', link: '/tools/plugins/mdcard' }
            ]
          }
        ]
      },
      {
        text: '技术分享',
        items: [
          {
            text: 'DevOps',
            items: [
              { text: 'GitHub Actions', link: '/devops/github-actions' },
              { text: 'Jenkins自动化部署', link: '/devops/jenkins' },
            ]
          },
          {
            text: '前端开发',
            items: [
              { text: 'NPM 包发布指南', link: '/frontend/npm-publish' },
              { text: 'NPM 发布组件库', link: '/frontend/component-ui' },
              { text: 'NPM 发布CLI工具', link: '/frontend/cli-publish' },
              { text: 'pnpm-lock 文件详解', link: '/frontend-pnpm-lock-guide' },
              { text: 'Mini-Vue 学习打卡', link: '/frontend/mini-vue' },
              { text: 'Mini-Router学习', link: '/frontend/mini-router' },
              { text: 'React Router 6 源码学习', link: '/frontend/react-router' },
              { text: '高效批量管理自定义 SVG 图标最佳实践', link: '/frontend/vscode-svg-icon-plugin' }
            ]
          },
          {
            text: 'AI',
            items: [
              { text: 'Antigravity 使用技巧', link: '/ai/antigravity' },
              { text: 'Gemini Pro', link: '/ai/gemini' },
              { text: '解决Cursor Claude模型被封', link: '/ai/claude-model' },
              { text: 'Roo Code集成模型', link: '/ai/roocode' },
              { text: 'Claude CLI 使用技巧', link: '/ai/claude-cli' },
              { text: 'Codex Cli接入指南', link: '/ai/codex-cli' },
              { text: 'Crush终端连接LLM', link: '/ai/crush' },
              { text: '癌症发展与预防指南', link: '/ai/cancer-guide' },
            ]
          },]
      },
      {
        text: '项目',
        items: [
          {
            text: 'VSCode 插件',
            items: [
              { text: '🧩 SVG 预览', link: '/frontend/vscode-svg-icon-plugin' }
            ]
          },
          {
            text: 'Web网站',
            items: [
              { text: '🌐 网站展示', link: '/projects/web-sites' },
              { text: '✨ Demos', link: '/projects/demos' }
            ]
          },
          { text: 'nbagent.ai 前端技术栈介绍', link: '/nbagent-frontend-stack' },
          {
            text: 'ATC(与阿里合作项目)',
            link: '/docs/atc'
          },
          // 可继续添加更多项目子菜单项
        ]
      },

      {
        text: '生活',
        items: [
          { text: '阅读', link: '/life/reading' },
          { text: '运动', link: '/life/running' },
          { text: '十三邀打卡', link: '/life/thirteen-invitations' },
          { text: '观影记录', link: '/movie-collection' }
        ]
      },
    ] satisfies DefaultTheme.NavItem[],

  },
  vite: {
    plugins: [
      UnoCSS({
        presets: [
          presetUno(),
          presetIcons({
            scale: 1.2,
            cdn: 'https://esm.sh/'
          }),
        ]
      }),
    ],
    // 解决构建警告
    ssr: {
      noExternal: ['uno.css']
    }
  }
})
