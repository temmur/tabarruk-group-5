<template>
  <div class="m-10  text-white font-sans  md:p-20 flex  items-center justify-center">
     
    <div class="w-full max-w-6xl">
     <div class="mb-10">
        <h1 class="text-[#727272] font-bold"><span class="text-white hover:text-red-600 ">{{ $t("bord-like-asosiy") }}</span> > FAQ</h1>
      </div>
      <h2 class="text-3xl md:text-4xl font-bold mb-2 text-left  pb-4">
        {{ $t("like-about-title") }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        
        <div class="space-y-6">
          <div 
            v-for="faq in leftColumnFaqs" 
            :key="faq.id"
            class="bg-[#161729] border border-[#454655] rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-slate-700"
          >
            <div 
              @click="toggleFaq(faq.id)" 
              class="flex items-start justify-between gap-4 cursor-pointer select-none"
            >
              <div class="flex items-start gap-4">
                <div class="bg-[#E54545] text-white p-3 rounded-xl shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-slate-200 hover:text-white transition-colors pt-2">
                  {{ faq.question }}
                </h3>
              </div>

              <button class="border border-slate-700/60 rounded-xl p-2.5 text-white hover:text-white bg-[#2E3040] transition-all duration-300 shrink-0 mt-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-5 w-5 transition-transform duration-300" 
                  :class="{ 'rotate-180': activeId === faq.id }"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  stroke-width="2.5"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div 
              class="grid transition-all duration-300 ease-in-out"
              :class="activeId === faq.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'"
            >
              <div class="overflow-hidden">
                <p class="text-white text-sm md:text-base leading-relaxed pl-14 border-t border-slate-800/50 pt-4">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div 
            v-for="faq in rightColumnFaqs" 
            :key="faq.id"
            class="bg-[#161729] border border-[#454655] rounded-2xl p-5 md:p-6 transition-all duration-300 "
          >
            <div 
              @click="toggleFaq(faq.id)" 
              class="flex items-start justify-between gap-4 cursor-pointer select-none"
            >
              <div class="flex items-start gap-4">
                <div class="bg-[#E54545] text-white p-3 rounded-xl shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-slate-200 hover:text-white transition-colors pt-2">
                  {{ faq.question }}
                </h3>
              </div>

              <button class="border border-slate-700/60 rounded-xl p-2.5 text-slate-400 hover:text-white bg-[#2E3040] transition-all duration-300 shrink-0 mt-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-5 w-5 transition-transform duration-300" 
                  :class="{ 'rotate-180': activeId === faq.id }"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  stroke-width="2.5"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div 
              class="grid transition-all duration-300 ease-in-out"
              :class="activeId === faq.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'"
            >
              <div class="overflow-hidden">
                <p class="text-white text-sm md:text-base leading-relaxed pl-14 border-t border-slate-800/50 pt-4">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'


const activeId = ref(null)

// Videodagi ma'lumotlar ro'yxati
const faqs = ref([
  {
    id: 1,
    question: "What is the goal of the \"Tabarruk Ziyorat\" platform?",
    answer: "By introducing this platform, it is aimed to increase the number of tourists on mutual pilgrimage tourism by posting information about pilgrimage sites belonging to Turkish countries."
  },
  {
    id: 2,
    question: "When was the \"Tabarruk Ziyorat\" platform developed?",
    answer: "The tourism committee involved experts in the field and launched the \"Tabarruk Ziyorat\" tourism platform for members of the Organization of Turkic States in 2023 (www.tabarrukziyorat.uz)."
  },
  {
    id: 3,
    question: "How many countries in Organization of Turkic states?",
    answer: "In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kyrgyzstan, Turkey, Azerbaijan, Turkmenistan, Hungary."
  }
])

const leftColumnFaqs = computed(() => faqs.value.filter(item => item.id === 1))
const rightColumnFaqs = computed(() => faqs.value.filter(item => item.id !== 1))


const toggleFaq = (id) => {
  if (activeId.value === id) {
    activeId.value = null 
  } else {
    activeId.value = id 
  }
}
</script>

<style scoped>

</style>