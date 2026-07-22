<template>
    <div class="text-white container">
        <div class="m-20">
            <h1 class="text-5xl font-semibold mb-10">Yangiliklar</h1>
           <div class="grid grid-cols-4 gap-4">
             <div v-for="(el, idx) in newsList"
            :key="idx"
            >
   <router-link :to="`news/${el.id}`">
                 <div class="h-full bg-[#1a1d29] rounded-2xl overflow-hidden p-4 shadow-lg flex flex-col justify-between group">
    <!-- Rasm qismi -->
    <img   
      :src="el.images" 
      :alt="el.title" 
      class="w-full h-48 object-cover rounded-xl"
    />
    
  
    <div class="mt-4">
      <h3 class=" font-bold text-lg leading-tight mb-2 line-clamp-2 hover:text-red-500">
        {{ el.title }}
      </h3>
      <p class="text-gray-400 text-sm line-clamp-2">
        {{ el.string }}
      </p>
    </div>

    <!-- Pastki qism (Sana va tugma) -->
    <div class="flex justify-between items-center mt-5">
      <span class="text-white font-medium">{{ el.date }}</span>
      <button class="bg-[#2a2f42] p-2 rounded-full hover:bg-red-500 transition opacity-0 group-hover:opacity-100 transition-all">
        <svg class="w-5 h-5 text-red-500 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
   </router-link>
            </div>
           </div>
        </div>
    </div>
    
</template>
<script setup lang="ts">

import { newsList } from '@/data/Newsdata';

</script>