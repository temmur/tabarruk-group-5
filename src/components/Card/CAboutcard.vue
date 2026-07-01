<template>

    <div class="relative z-10 flex-col justify-center bg-[#202233] p-6 rounded-2xl relative w-80 ">
      <h2 class="text-white text-left text-[40px] font-bold leading-none mb-2">
         {{ statistic }}
      </h2>
      <p class="text-[#A6A7AD] text-[20px] font-bold tracking-wide">
      {{ text }}
      </p>
      <img :src="icon" alt="" class="absolute bottom-0 right-0">
    </div>   
    </template>
    <script setup lang="ts">
import {defineProps} from 'vue';
    const props = defineProps<{
        text: string 
        statistic: number, 
        icon: string
    }>()
    </script> 