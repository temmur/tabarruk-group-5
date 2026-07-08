<template>
  <!-- Asosiy qorong'i konteyner -->
  <div class=" p-3 rounded-2xl border border-gray-800 inline-flex items-center gap-4 shadow-lg">
    
    <!-- Ulashish (Share) Ikonkasi -->
    <div class="text-white pl-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
    </div>

    <!-- Vertikal chiziq -->
    <div class="w-px h-8 bg-gray-600 opacity-50"></div>

    <!-- Ijtimoiy tarmoqlar (Telegram) -->
    <a href="#" class="w-10 h-10 rounded-full bg-[#1F232D] flex items-center justify-center hover:bg-gray-700 transition">
      <svg class="text-white" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.11.03-1.83 1.16-5.17 3.42-.49.33-.93.5-1.33.49-.44-.01-1.28-.24-1.91-.45-.77-.25-1.38-.38-1.33-.8.02-.21.32-.42.89-.64 3.49-1.52 5.82-2.52 6.99-3.01 3.33-1.39 4.02-1.63 4.47-1.64.1 0 .32.02.43.14.09.1.12.24.12.35 0 .09-.01.21-.03.3z" />
      </svg>
    </a>

    <!-- Ijtimoiy tarmoqlar (Twitter) -->
    <a href="#" class="w-10 h-10 rounded-full bg-[#1F232D] flex items-center justify-center hover:bg-gray-700 transition">
      <svg class="text-white" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    </a>

    <!-- Silka inputi va Nusxa olish tugmasi -->
    <div class="flex items-center bg-[#1F232D] rounded-lg h-10 overflow-hidden w-[280px]">
      <!-- truncate klassi avtomat "..." qilib beradi -->
      <div class="px-3 text-[15px] font-medium text-gray-200 truncate flex-1 select-none">
        {{ displayUrl }}
      </div>
      
      <!-- Dinamik tugma -->
      <button
        @click="copyLink"
        class="bg-[#EF4444] hover:bg-red-600 transition-colors h-full px-3 flex items-center justify-center cursor-pointer active:bg-red-700"
        :title="copied ? 'Nusxa olindi!' : 'Nusxa olish'"
      >
        <!-- Nusxa olish ikonkasi -->
        <svg v-if="!copied" class="text-white" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <!-- Tasdiqlash ikonkasi (nusxalangandan keyin chiqadi) -->
        <svg v-else class="text-white animate-pulse" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// O'zgaruvchilar (Props qilib ham uzatsangiz bo'ladi)
const fullUrl = ref('https://tabarrukziyorat.uz/ru/news/2026/07/06')
const copied = ref(false)

// Ekranda ko'rsatiladigan qisqa URL ("https://" ni olib tashlab ko'rsatish)
const displayUrl = computed(() => {
  return fullUrl.value.replace(/^https?:\/\//, '')
})

// Nusxa olish funksiyasi
const copyLink = async () => {
  try {
    // Brauzerning xotirasiga to'liq silkani saqlash
    await navigator.clipboard.writeText(fullUrl.value)
    
    // Foydalanuvchiga nusxa olinganini ko'rsatish
    copied.value = true
    
    // 2 soniyadan so'ng eski holatiga qaytarish
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Nusxa olishda xatolik yuz berdi:', err)
  }
}
</script>