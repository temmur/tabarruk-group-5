<template>
<div class="min-h-screen relative flex flex-col bg-[url('https://uzbekistan.travel/storage/app/media/cropped-images/cropped-images/Registan-Square-in-Samarkand-at-Night-Time-0-0-0-0-1594028943-0-0-0-0-1594030429.jpg')] bg-no-repeat bg-cover bg-center">
    <img src="/images/vectors/Vector(7).svg" alt="" class="absolute top-0 left-0 z-20">
    <div class="absolute w-full h-full top-0 left-0 bg-[#07091C]/60"></div>
    <div class="text-center container z-20">
        <p class="text-[#FFFFFF] text-xl flex items-center justify-center gap-2"><i class="icon-map-pin"></i>Туркменская область, Узбекистан</p>
        <h1 class="text-white text-6xl font-bold my-8">Registan Square</h1>
        <p class="text-white mb-10 text-xl text-center max-w-4xl m-auto">When it became clear to Uwais that the teeth of the Prophet (pbuh) had been broken by the enemies in the battle of Uhud, he was very upset and continuously prayed to Allah asking a longer life for the prophet Muhammed (pbuh)</p>
        <CButton variant="primary" text="Explore" size="xl">
            <template #suffix>
                <i class="icon-arrow-right"></i>
            </template>
        </CButton>
    </div>
        <Swiper
    :modules="[Autoplay]"
    :slides-per-view="3.2"
    :space-between="20"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
    class="w-full rounded-xl !flex absolute -bottom-10"
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
import {ref, reactive} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { bannerList } from '@/data/bannerList';
import 'swiper/css'
import CButton from './Form/CButton.vue';
import CBannerCarousel from './carousel/CBannerCarousel.vue';

const bannerData = reactive([
    {
        name:"",
        title: {
            uz: '',
            ru: '',
            en: ''
        },
        desc: {
            uz: '',
            ru: '', 
            en: ''
        },
        image: ''
    }
])
</script>

</script>