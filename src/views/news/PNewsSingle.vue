<template>
<div class="mt-20">
    <div class="text-white container">
<CBreadcrumbs class="mb-10"/>
    <div class="max-w-5xl m-auto">
        <h1 class="text-white text-5xl ">{{ news?.title }}</h1>
        <div class="flex items-center gap-4 my-6 text-[#727272]">
            <p class="flex items-center gap-1"> <i class="icon-calendar text-xl"></i>{{ news?.date }}</p>
            <p class="flex items-center gap-1"> <i class="icon-eye text-xl"></i>73</p>
        </div>
        <img :src="news?.images" 
        class="rounded-xl"
        alt="">
        <p class="my-8 font-light text-xl border-b border-[#727272]/20 pb-8">{{ news?.string }}</p>
    </div>
</div>
</div>
</template>
<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import CBreadcrumbs from '@/components/ui/CBreadcrumbs.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
import { newsList } from '@/data/Newsdata';
const news = computed(()=> {
    return newsList.find((element)=> element.id === Number(route.params.id))
})
</script>