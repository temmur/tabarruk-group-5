<template>
  <div class="container mx-auto px-4 py-8 ">
  <div class="text-center">
    <h1 class="text-white text-5xl font-semibold  mb-7 border-b-2 border-red-500 inline-block p-2">Instagram</h1>
    <p class="text-white">Turk dunyosidagi so‘nggi yangiliklar va o‘zgarishlardan xabardor bo‘ling.</p>
  </div>
<div class="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4 pt-5">
  <div 
    v-for="(item, index) in instaList" 
    :key="index" 
    class="group p-2 border border-[#2c2e3e] rounded-lg bg-[#141628] transition-all duration-300">
    <div class="relative overflow-hidden rounded-lg">
      <img 
        :src="item?.img" 
        :alt="item?.name" 
        class="w-full h-auto rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
      >
      <div class="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-white mb-2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        <p class="font-bold text-white text-[13px] leading-tight drop-shadow-lg text-center">
          Postni ko'rish
        </p>
      </div>
    </div>
    <div class="mt-3 px-1">
      <p class="font-semibold text-white text-[13px] line-clamp-1">{{ item?.name }}</p>
      <p class="text-gray-400 text-[10px] line-clamp-1 mt-0.5">{{ item?.title }}</p>
    </div>
  </div>
</div>
  </div>
</template>
<script setup lang="ts">
import { instaList } from '@/data/instaList';
import {ref, computed} from 'vue' 
</script>