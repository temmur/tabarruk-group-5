<template >
<div class="grid grid-cols-2 gap-15 container bg-[url('./images/vectors/Vector(6).svg')]">
    <div class="flex text-white gap-5 border border-gray-700 p-4 rounded-lg w-170 h-75  hover:backdrop-blur-4xl ">
        <img class="w-50 rounded-lg object-cover" src="https://admin.tabarrukziyorat.uz/media/news/2881_turkic-ski-cup-to-take-place-on-18-february-2025-at-amirsoy-ski-resort-uzbekistan_f.jpg" alt="">

        <div class="flex flex-col justify-between">
            <h1 class="mb-5 text-4xl line-clamp-2 font-medium">{{ newsList[0]?.title }}</h1>
        
        <p class="text-gray-400">2025-02-03</p>
        </div>
    </div>
 <div class="ml-10">
       <div class="flex text-white gap-5 border  border-gray-700 p-4 rounded-lg w-120 h-37 bg-#07091C mb-2">
        <img class="w-50 rounded-lg object-cover" src="https://admin.tabarrukziyorat.uz/media/news/3107371.280b8123ff0ad60be67f8166274746b1.jpg" alt="">
    
    <div>   
        <h1 class="mb-2 font-bold text-md">{{ newsList[1]?.title }}</h1>
        <p class="line-clamp-2">{{ newsList[2]?.title }}</p>
        <p class="text-gray-400">2025-02-03</p>
    </div>
</div>
    <div class="flex text-white gap-5 border border-gray-700 p-4 rounded-lg w-120 h-37  bg-#07091C ">
        <img class="w-450 rounded-lg object-cover" src="https://admin.tabarrukziyorat.uz/media/news/photo_2024-10-03_15-31-00.jpg" alt="">
    
    <div>   
       <h1 class="mb-2 font-bold text-md">Interview with Ambassador <br>Kubanychbek Omuraliev</h1>
        <p class="line-clamp-2">Interview with Ambassador Kubanychbek Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, molestiae? Corrupti accusantium, libero saepe labore nihil exercitationem et aut eius nobis dignissimos! Nobis, impedit architecto nihil iusto obcaecati molestiae nemo?</p>
        <p class="text-gray-400">2025-02-03</p>
    </div>
</div>
<div>
<router-link to="/news">
    <CButton variant="secondary" class="mt-4 capitalize grid justify-items-end ml-60 justify-end" size="lg" text="biz haqimizda batafsil        →" />
</router-link>
 </div>
 </div>
</div>

</template>
<script setup lang="ts">
import {ref} from 'vue'
import { newsList } from '@/data/Newsdata';
import CButton from '../Form/CButton.vue';
const newsData = ref(newsList)  
</script>