
<template>
  <div class="min-h-screen relative flex flex-col bg-cover bg-center">
    <img
      src="/images/vectors/Vector(7).svg"
      alt=""
      class="absolute top-0 left-0 z-20"
    />

    <img
      :src="currentBanner.image"
      alt=""
      class="w-full h-full absolute object-cover object-top transition-all duration-700"
    />

    <div class="absolute w-full h-full top-0 left-0 bg-[#07091C]/60"></div>

    <div class="text-center container z-20 relative">
      <p class="text-white text-xl flex items-center justify-center gap-2">
        <i class="icon-map-pin"></i>
        {{ currentBanner.name }}
      </p>
      
      <h1 class="text-white text-6xl font-bold my-8">
        {{ currentBanner.titles.uz }}
      </h1>

      <p class="text-white mb-10 text-xl text-center max-w-4xl m-auto">
        {{ currentBanner.desc.uz }}
      </p>

      <CButton variant="primary" text="Explore" size="xl">
        <template #suffix>
          <i class="icon-arrow-right"></i>
        </template>
      </CButton>

      <!-- <div class="progress-block absolute right-0 top-1/2">
        <span class="text-white">{{ bannerStep + 1 }}</span>

        <div class="progress">
          <div
            class="progress-line"
            :style="{ width: progress + '%' }"
          ></div>
        </div>

        <span class="text-white">{{ bannerData.length }}</span>
      </div> -->
      <div class="progress-block">
  <span class="text-white">{{ bannerStep + 1 }}</span>

  <div class="progress">
    <div
      class="progress-line"
      :style="{ height: progress + '%' }"
    ></div>
  </div>

  <span class="text-white">{{ bannerData.length }}</span>
</div>
    </div>

    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="3.2"
      :space-between="20"
      :loop="true"
      :autoplay="{
        delay: timerTime,
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
<style scoped>
.progress-block {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.progress {
  width: 5px;
  height: 200px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  overflow: hidden;
}

.progress-line {
  width: 100%;
  height: 0%;
  background: white;
  border-radius: 999px;
  transition: height 0.03s linear;
}
</style><script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { bannerList } from '@/data/bannerList'
import CButton from './Form/CButton.vue'
import CBannerCarousel from './carousel/CBannerCarousel.vue'
import 'swiper/css'

const bannerStep = ref(0)
const progress = ref(0)

const timerTime = 3000
const intervalSpeed = 30

let timer: ReturnType<typeof setInterval> | null = null

const bannerData = [
  {
    name: 'Tashkent region, Uzbekistan',
    titles: {
      uz: 'Amir Temur haykali',
      ru: 'Статуя Амира Тимура',
      en: 'Statue of Amir Temur'
    },
    desc: {
      uz: "Amir Temur haykali – davlat arbobi va sarkarda, oʻzbek davlatchiligi asoschilaridan biri Amir Temurning bronzadan yasalgan otliq yodgorligi.",
      ru: 'Статуя Амира Тимура — это бронзовый конный памятник Амиру Тимуру.',
      en: 'The statue of Amir Temur is a bronze equestrian monument.'
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
      uz: 'Mirzo Ulugbek davridan beri bu hudud Samarqand aholisi uchun asosiy maydon hisoblangan.',
      ru: 'Со времён Мирзо Улугбека эта площадь считалась главной площадью Самарканда.',
      en: 'Since the time of Mirzo Ulugbek, this area has been considered the main square.'
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
      uz: 'Minorayi Kalon, Arslonxon minorasi — Buxorodagi meʼmoriy yodgorlik.',
      ru: 'Башня Калон является архитектурным памятником Бухары.',
      en: 'The Kalon Tower is an architectural monument in Bukhara.'
    },
    image: '/images/Hero/Bukhara.jpeg'
  }
]

const currentBanner = computed(() => bannerData[bannerStep.value])

const nextBanner = () => {
  bannerStep.value = (bannerStep.value + 1) % bannerData.length
  progress.value = 0
}

onMounted(() => {
  const progressStep = 100 / (timerTime / intervalSpeed)

  timer = setInterval(() => {
    progress.value += progressStep

    if (progress.value >= 100) {
      nextBanner()
    }
  }, intervalSpeed)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>