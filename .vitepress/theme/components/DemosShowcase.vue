<template>
  <div class="demos-container w-full px-4 md:px-8 lg:px-12 py-8 md:py-12">
    <!-- Header -->
    <div class="mb-16">
      <h1 class="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100 fade-in-up">
        Demos
      </h1>
      <p class="text-lg text-gray-500 dark:text-gray-400 fade-in-up" style="animation-delay: 100ms;">
        Demonstrations for projects I am working on.
      </p>
    </div>

    <!-- Grid Layout -->
    <div class="demo-grid">
      <div 
        v-for="(demo, index) in demos" 
        :key="demo.id"
        class="demo-card group flex flex-col relative bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-md dark:shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700/80 overflow-hidden fade-in-up"
        :style="{ animationDelay: `${(index % 10) * 80 + 150}ms` }"
      >
        <!-- Media Container (Full Bleed Top) -->
        <div v-if="demo.media" class="relative w-full aspect-video bg-gray-100 dark:bg-[#1a1a1a] overflow-hidden border-b border-gray-100 dark:border-gray-800">
          <a :href="demo.link || demo.github || '#'" target="_blank" class="block cursor-pointer w-full h-full">
            <template v-if="demo.media.type === 'video'">
              <video 
                :src="withBase(demo.media.url)" 
                autoplay 
                loop 
                muted 
                playsinline
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              ></video>
            </template>
            <template v-else>
              <img 
                :src="withBase(demo.media.url)" 
                :alt="demo.project || 'Demo'" 
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </template>
            <!-- Overlay for click area feedback -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300"></div>
          </a>
        </div>

        <!-- Content Area -->
        <div class="flex flex-col flex-grow p-6">
          <p class="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300 flex-grow" v-html="renderContent(demo.content)"></p>
          
          <!-- Divider -->
          <div class="h-px bg-gray-100 dark:bg-gray-800/80 my-5"></div>
          
          <!-- Actions & Meta -->
          <div class="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 mt-auto">
            <div class="flex flex-wrap items-center gap-4">
              <a v-if="demo.link" :href="demo.link" target="_blank" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1.5 uppercase tracking-wide">
                <span class="i-carbon-launch text-lg"></span> VISIT
              </a>
              <a v-if="demo.github" :href="demo.github" target="_blank" class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1.5 uppercase tracking-wide">
                <span class="i-carbon-logo-github text-lg"></span> SOURCE
              </a>
            </div>
            <span class="text-xs text-gray-400 dark:text-gray-500 font-mono shrink-0">{{ demo.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'

interface DemoItem {
  id: string
  content: string
  date: string
  link?: string
  github?: string
  project?: string
  media?: {
    type: 'video' | 'image'
    url: string
  }
}

const demos = ref<DemoItem[]>([
  {
    id: 'svg-tools',
    project: 'svg-tools',
    content: '🎨 <b>svg-tools</b> 是一个实用的 SVG 处理与转换工具集。<br/>帮助开发者快速清理、压缩和管理项目中的 SVG 图标资源，大幅提升前端开发效率。',
    date: '2026-05-08',
    github: 'https://github.com/shindouhiro/svg-tools',
    media: {
      type: 'image',
      url: '/images/demos/svg_tools_cover.png'
    }
  },
  {
    id: 'bilibili-crawler',
    project: 'bilibili-crawler',
    content: '📺 <b>bilibili-crawler</b> 是一个强大的 Bilibili 数据抓取工具。<br/>提供高效的视频数据、弹幕及评论提取能力，支持自定义配置与内容分析。',
    date: '2026-05-08',
    github: 'https://github.com/shindouhiro/bilibili-crawler',
    media: {
      type: 'image',
      url: '/images/demos/bilibili_crawler_cover.png'
    }
  },
  {
    id: 'skills-cli',
    project: 'skills-cli',
    content: '🚀 <b>Skills CLI</b> 是一款专为 30+ 种 AI 编码助手量身定制的技能管理工具。<br/>它可以让你在不同的 AI 助手（如 Cursor、Claude Code、Antigravity 等）之间一键搜索、下载并同步安装指令集。',
    date: '2026-05-03',
    github: 'https://github.com/shindouhiro/skills-cli',
    media: {
      type: 'image',
      url: '/images/demos/skills_cli_cover.png'
    }
  },
  {
    id: 'rules-cli',
    project: 'rules-cli',
    content: '🛡️ <b>Rules CLI</b> 是一个为多种 AI 编码助手设计的规则管理工具。<br/>把统一套 Rules 指令集存放在本地，并一键同步到各大助手，支持从 <b>cursor.directory</b> 直接搜索与下载。',
    date: '2026-04-20',
    github: 'https://github.com/shindouhiro/rules-cli',
    media: {
      type: 'image',
      url: '/images/demos/rules_cli_cover.png'
    }
  },
  {
    id: 'config-cli',
    project: 'config-cli',
    content: '⚙️ <b>config-cli</b> 是一个用于管理本机 <code>~/.config</code> 配置的命令行工具。<br/>交互式扫描和选择需要管理的配置，快速备份并一键同步到你的 GitHub 仓库。',
    date: '2026-04-15',
    github: 'https://github.com/shindouhiro/config-cli',
    media: {
      type: 'image',
      url: '/images/demos/config_cli_cover.png'
    }
  },
  {
    id: 'gtd',
    project: 'GTD (Calendar To-Do)',
    content: '🗓️ <b>GTD</b> 是一个现代化的全栈待办事项管理系统，采用 Monorepo 架构。<br/>集成了交互式日历、农历节气支持与高效的任务列表，更有数据看板助你把控工作效率。',
    date: '2026-05-01',
    github: 'https://github.com/shindouhiro/GTD',
    media: {
      type: 'image',
      url: '/images/demos/gtd_cover.png'
    }
  },
  {
    id: 'vscode-cli',
    project: 'vscode-cli',
    content: '💻 <b>vscode-cli</b> 是一个用于跨设备同步 VS Code 设置的命令行工具。<br/>一键拉取你的云端 <code>settings.json</code> 及 Snippets，并能自动备份原有配置。',
    date: '2026-04-30',
    github: 'https://github.com/shindouhiro/vscode-cli',
    media: {
      type: 'image',
      url: '/images/demos/vscode_cli_cover.png'
    }
  }
])

// 渲染文本内容，支持将链接等做简单高亮
const renderContent = (text: string) => {
  return text
}
</script>

<style scoped>
.demos-container {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

:deep(.VPDoc) {
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
}

:deep(.VPDoc .container) {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

:deep(.VPContent) {
  padding: 0 !important;
}

:deep(.VPDoc .content) {
  max-width: 100% !important;
  width: 100% !important;
  padding: 0 !important;
}

:deep(.VPDoc h1) {
  display: none;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2.5rem 1.5rem;
}

@media (min-width: 640px) {
  .demo-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .demo-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem 2rem;
  }
}

@media (min-width: 1440px) {
  .demo-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem 2.5rem;
  }
}

.demo-card {
  transform: translateZ(0); /* Force GPU acceleration */
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.demo-card:hover {
  transform: translateY(-8px) translateZ(0);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Custom styling for rendered content */
:deep(b), :deep(strong) {
  font-weight: 600;
  color: var(--vp-c-brand, #3b82f6);
}
</style>
