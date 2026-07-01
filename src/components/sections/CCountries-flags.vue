<template>
<div class="container">
    <div class="text-center my-5">
            <h1 class="text-white text-4xl font-semibold  mb-7 border-b-2 border-red-500 inline-block p-2">
                Qancha mamlakat?
            </h1>
            <p class="text-white text-xl mb-10">
                Biz taqdim etayotgan barcha mamlakatlar
            </p>
    </div>
    <div class="justify-center  flex flex-wrap gap-0 ">
    <RouterLink :to="`country/${country.id}`"
         v-for="(country, idx) in countries" 
         :key="idx">
         <div class="mb-10 group justify-center overflow-hidden relative w-[calc(25%-18px)] min-w-[260px] cursor-pointer hover:bg-gray-700/20 py-6 rounded-3xl backdrop-blur-2xl"
       >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        <img :src="country.flag" alt="" class="m-auto my-4">
        <p class="text-white text-center mb-2">{{ country.name }}</p>
        <p class="text-[#83848d] text-center mb-5">{{ country.description }}</p>
        <div class="w-20 h-[2.5px] bg-gray-500 group-hover:w-full group-hover:bg-white transition-all duration-300 m-auto absolute bottom-0 right-1/2 transform translate-x-1/2"></div>
    </div>
       </RouterLink>
    </div>
</div> 
</template>
<script setup lang="ts">
import { countries } from '@/data/countriesList';
</script>