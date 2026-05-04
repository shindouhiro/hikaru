<template>
  <div class="relative w-full max-w-4xl mx-auto py-12 px-6 overflow-hidden">
    <!-- Header -->
    <div class="text-center mb-16 relative z-10">
      <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 mb-4 tracking-tight">
        随笔
      </h1>
      <p class="text-gray-500 dark:text-gray-400 text-lg">每一天</p>
    </div>

    <!-- Background Decoration -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- Timeline Container -->
    <div class="relative border-l-2 border-gray-200 dark:border-gray-700/50 ml-4 md:ml-0 md:border-none z-10">
      <!-- Centered Line for MD+ -->
      <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400/50 via-cyan-400/50 dark:from-purple-500/50 dark:via-cyan-500/50 to-transparent -translate-x-1/2 rounded-full"></div>

      <!-- Items -->
      <div class="space-y-12">
        <div 
          v-for="(item, index) in logs" 
          :key="index"
          class="relative flex flex-col md:flex-row items-start md:items-center group timeline-item"
          :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
        >
          <!-- Node / Icon -->
          <div 
            class="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 top-2 md:top-auto flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] dark:group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 z-10"
          >
            <div :class="[item.icon || 'i-carbon-development', 'text-xl text-gray-400 dark:text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors duration-300']"></div>
          </div>

          <!-- Content Card -->
          <div class="ml-8 md:ml-0 md:w-[calc(50%-3rem)]" :class="index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'">
            <div class="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/40 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/60 hover:border-purple-300/50 dark:hover:border-purple-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-sm dark:shadow-lg hover:shadow-purple-500/10">
              <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700/50 text-cyan-600 dark:text-cyan-300 mb-3 border border-gray-200 dark:border-gray-600/50">
                {{ item.date }}
              </span>
              <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {{ item.description }}
              </p>
              
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mt-2" :class="index % 2 === 0 ? 'justify-start' : 'md:justify-end'">
                <span 
                  v-for="tag in item.tags" 
                  :key="tag"
                  class="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-900/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-cyan-600 dark:hover:text-cyan-200 transition-colors cursor-pointer"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface LogItem {
  date: string;
  title: string;
  description: string;
  icon?: string;
  tags?: string[];
}

// 模拟的日志数据
const logs = ref<LogItem[]>([
  {
    date: '2026-05-05',
    title: '深夜侵蚀',
    description: '2025年那些事之后，失眠成了我的常态，整个人活得很疲惫。看着父母身体一天不如一天，我意识到自己不能再这样消沉下去。他们是我现在最需要照顾的人，也是我活着的重心。我没什么别的念想了，只想把剩下的精力都放在他们身上，好好尽孝，让他们走得时候平平安安，没有遗憾。',
    icon: 'i-carbon-time',
    tags: ['个人']
  },

])
</script>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-item {
  animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-item:nth-child(4) { animation-delay: 0.4s; }
.timeline-item:nth-child(5) { animation-delay: 0.5s; }
.timeline-item:nth-child(6) { animation-delay: 0.6s; }
</style>
