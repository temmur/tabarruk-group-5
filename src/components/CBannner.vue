<template>
      <div class="min-h-screen relative flex flex-col bg-cover bg-center">
    <img
      src="/images/vectors/Vector(7).svg"
      alt=""
      class="absolute top-0 left-0 z-20"
    />
    <img :src="bannerData[0]?.image" alt=""
    class="w-full h-full absolute">
    <div class="absolute w-full h-full top-0 left-0 bg-[#07091C]/60"></div>

    <div class="text-center container z-20">
      <p class="text-[#FFFFFF] text-xl flex items-center justify-center gap-2">
        <i class="icon-map-pin"></i>
        {{ bannerData[0]?.name }}
      </p>

      <h1 class="text-white text-6xl font-bold my-8">
        {{ bannerData[0]?.titles.uz }}
      </h1>

      <p class="text-white mb-10 text-xl text-center max-w-4xl m-auto">
        {{ bannerData[0]?.desc.uz }}
      </p>

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
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { bannerList } from '@/data/bannerList'
import CButton from './Form/CButton.vue'
import 'swiper/css'
import CBannerCarousel from './carousel/CBannerCarousel.vue'

const bannerData = reactive([
  {
    name: 'Tashkent region, Uzbekistan',
    titles: {
      uz: 'Amir Temur haykali',
      ru: 'Статуя Амира Тимура',
      en: 'Statue of Amir Temur'
    },
    desc: {
      uz: "Amir Temur haykali – davlat arbobi va sarkarda, oʻzbek davlatchiligi asoschilaridan biri Amir Temurning bronzadan yasalgan otliq yodgorligi.",
      ru: 'Статуя Амира Тимура — это бронзовый конный памятник Амиру Тимуру, государственному деятелю и полководцу, одному из основателей узбекской государственности.',
      en: 'The statue of Amir Temur is a bronze equestrian monument to Amir Temur, a statesman and commander, one of the founders of Uzbek statehood.'
    },
    image: '/images/Hero/Tashkent.jpeg'
  },
  {
    name: 'Samarqand region, Uzbekistan',
    titles: {
      uz: 'Registon maydoni',
      ru: 'Площадь Регистана',
      en: 'Registan Square'
    },
    desc: {
      uz: 'Mirzo Ulugbek davridan beri bu hudud Samarqand aholisi uchun asosiy maydon hisoblangan. Samarqand hukmdorlarining farmonlari shu yerdan e’lon qilingan.',
      ru: 'Со времён Мирзо Улугбека эта площадь считалась главной площадью Самарканда. Отсюда издавались указы самаркандских правителей.',
      en: 'Since the time of Mirzo Ulugbek, this area has been considered the main square for the people of Samarkand. Decrees of the Samarkand rulers were announced from here.'
    },
    image: '/images/Hero/Samarkand.webp'
  },
  {
    name: 'Bukhara region, Uzbekistan',
    titles: {
      uz: 'Minorai Kalon',
      ru: 'Великая башня',
      en: 'The Kalon Tower'
    },
    desc: {
      uz: 'Minorayi Kalon, Arslonxon minorasi — Buxorodagi meʼmoriy yodgorlik. Poyi Kalon meʼmoriy ansamblining bir qismi.',
      ru: 'Башня Калон, также известная как башня Арсланхан, является архитектурным памятником Бухары. Она входит в состав архитектурного ансамбля Калон.',
      en: 'The Kalon Tower, also known as the Arslankhan Tower, is an architectural monument in Bukhara. It is part of the Kalon architectural ensemble.'
    },
    image: '/images/Hero/Bukhara.jpeg'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  }
])
</script>