<template>
  <article class="bg-[#0f1526] rounded-2xl overflow-hidden shadow-xl border border-white/5 hover:border-cyan-400/30 transition-all duration-300 group max-w-xl">
    <div class="p-5 pb-3">
      <h2 class="text-white text-xl md:text-2xl font-bold leading-snug mb-3 group-hover:text-cyan-300 transition-colors duration-300">
        {{ article.title }}
      </h2>
      <div class="flex items-center gap-4 text-orange-400 text-sm font-medium">
        <span class="flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {{ article.date }}
        </span>
        <span class="flex items-center gap-1.5 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          {{ article.views }}
        </span>
      </div>
    </div>

    <div class="mx-5 rounded-xl overflow-hidden relative">
      <img :src="article.image" :alt="article.title"
           class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    </div>

    <p class="text-slate-300 text-sm leading-relaxed p-5 pt-4">
      {{ article.caption }}
    </p>
  </article>
</template>

<script setup>
import { newsList } from '@/data/NowNewsdata';
import { defineProps } from 'vue'

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>