<template>
    
    <div class="text-white  justify-center text-center mb-15 mt-10">
    <h1 class="text-6xl border-b-3 border-red-500 pb-4 inline-block mb-2">
        Yangiliklar
    </h1>
    <p class="text-lg">
        Turkiy davlatlar haqida so'zngi yangiliklar
    </p>
    </div>
    <div>
        <CNewsCard/>  
    </div>
    <div>
    <CButton class="font-bold text-3xl w-35 h-13 w-70 bg-grey-500 bg-gray-800 hover:bg-gray-900 text-2xl " text="biz haqimizda batafsil " />

    </div>
 
</template>
<script setup lang="ts">

import CNewsCard from '../Card/CNewsCard.vue';
import { newsList } from '@/data/Newsdata.ts';
</script>