<template>
    <div class=" bg-[url('./images/vectors/Vector(6).svg')]">
   <div class="container flex gap-20">
     <div class=" flex flex-col justify-center">
        <div>
            <h1 class="text-white text-4xl font-semibold  mb-7 border-b-2 border-red-500 inline-block p-2">
                {{ $t("about-us-title") }}
            </h1>
            <p class="text-white text-xl mb-10">
              
             {{ $t("text-us-title") }} 
                          </p>
            <h1 class="text-white text-2xl font-bold ">
               {{ $t("home-us-text") }}
            </h1>
            <div>
            </div>
             <div class="flex items-center gap-10  ">
              
        </div>
      
<div class="  flex items-center  ">
    <div class="flex items-center gap-10">
      
      <!-- 1-rasm -->
      <div
        class="flex items-center relative"
        @mouseenter="active = 1"
        @mouseleave="active = null"
      >
    
        <div
          class=""
          :class="active === 1 ? '' : ''"
        >
          <img
            src="https://admin.tabarrukziyorat.uz/media/supporter/OTS_OVAL_LOGO_RGB_31_12_2024_mNW2jGL.png"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>

        <div
          class="  duration-900 "
          :class="active === 1 ? 'w-64 opacity-100 ml-4' : 'w-0 opacity-0 '"
        >
          <div class="text-white">
            
            <p class=" text-slate-200 ">
             Organization of Turkic States
            </p>
          </div>
        </div>
      </div>

      
      <div
        class="flex items-center relative transition-all duration-500"
        :class="active === 1 ? '' : ''"
        @mouseenter="active = 2"
        @mouseleave="active = null"
      >
        <!-- rasm -->
        <div
          class=""
          :class="active === 2 ? 'translate-x-2' : ''"
        >
          <img
            src="https://admin.tabarrukziyorat.uz/media/supporter/lg_3.png"
            alt=""
            class=""
          />
        </div>

       
        <div
          class="overflow-hidden transition-all duration-500 ease-in-out"
          :class="active === 2 ? 'w-72 opacity-100 ml-4' : 'w-0 opacity-0 ml-0'"
        >
          <div class="text-white">
            <p class="text-sm text-slate-200 mt-1">
                    Organization of Turkic States
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
       
        <div class="flex gap-10">

            <CButton class="font-bold text-3xl w-35 h-13 " :text="$t('index-us-litle')"/> 
           
                      <CButton class="font-bold text-3xl w-35 h-13 w-70 bg-grey-500 bg-gray-800 hover:bg-gray-900 text-2xl " :text="$t('css-like-title')" />

        </div>
    </div>
    </div>
    <div class="relative w-full max-w-6xl mx-auto py-10 overflow-hidden mt-25 pr-40 mb-10">
    <div class="flex gap-4 transition-transform duration-500 ease-in-out" 
         :style="{ transform: `translateX(-${currentIndex * 20}%)` }">
      
      <div v-for="(img, index) in images" :key="index" 
           class="group relative h-[400px] w-[20%] shrink-0 transition-all duration-500 ease-in-out hover:w-[65%] cursor-pointer overflow-hidden rounded-2xl">
        
        <img :src="img" class="w-full h-full object-cover" alt="slide">
        
        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all "></div>
      </div>
    </div>

    <button @click="prev" class="absolute left-2 top-1/2 -translate-y-1/2 text-white  backdrop-blur-md p-3 rounded-full  transition ">
      ←
    </button>

    <button @click="next" class="absolute  right-2 top-1/2 -translate-y-1/2 text-white backdrop-blur-md p-3 rounded-full transition">
      →
    </button>
  </div>
    </div>
    <div class="grid grid-cols-4 container gap-4 ">
       <CAboutcard class="w-full" v-for="(el, idx) in statistic"
      :key="idx"
      :text="el.title"
      :statistic="el.number"
      :icon="el.icon"
      />
   </div>
     </div>
</template>
<script setup lang="ts">


import { statistic } from '@/data/statisticData';
import CAboutcard from '@/components/Card/CAboutcard.vue';
import {ref} from 'vue'
import CButton from '../Form/CButton.vue';
import { title } from 'process';
const active = ref(null)

const images = ref([
  'public/images/Sections/CAbout/country7.webp', 'public/images/Sections/CAbout/country5.webp', 'public/images/Sections/CAbout/country6.webp',
  'public/images/Sections/CAbout/country4.webp', 'public/images/Sections/CAbout/country3.webp', 'public/images/Sections/CAbout/country1.webp', 'public/images/Sections/CAbout/country8.webp'
]);

const currentIndex = ref(0);

const next = () => {
  if (currentIndex.value < 2) currentIndex.value++;
};

const prev = () => {
  if (currentIndex.value > 0) currentIndex.value--;
};
</script>
