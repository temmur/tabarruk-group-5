<template>
   <div class="bg-[url('')] bg-cover bg-center">
     <h1>Home page</h1>
<Swiper
    :modules="[Autoplay]"
    :slides-per-view="3.2"
    :space-between="20"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
    class="w-full rounded-xl !flex"
  >
    <SwiperSlide
      v-for="(item, idx) in bannerList"
      :key="idx"
      class="!h-auto flex"
    >
      <CBannerCarousel
        :title="item.name"
        :image="item.image"
        :subtitle="item.describtion"
        class="h-full w-full"
      />
    </SwiperSlide>
  </Swiper>
   </div> 
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import CBannerCarousel from '@/components/carousel/CBannerCarousel.vue';
import { bannerList } from '@/data/bannerList';

</script>