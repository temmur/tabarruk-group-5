<template>
  <section class="w-full bg-[#05061D] py-24 overflow-hidden">
    <div class="w-full mx-auto">
      
      <div class="text-center px-4">
        <div class="inline-block relative">
          <h2 class="text-[42px] md:text-[52px] font-serif font-semibold text-white tracking-wide">
            Hamkorlar
          </h2>
          <div class="w-full h-[2px] bg-red-600 absolute bottom-[-4px] left-0"></div>
        </div>

        <p class="max-w-4xl mx-auto mt-10 text-lg md:text-xl text-white/90 font-light tracking-wide">
          Ushbu veb-sayt turkiy mamlakatlarda joylashgan tarixiy, noyob joylar haqida ma'lumot almashish uchun yaratilgan.
        </p>
      </div>

      <div class="relative mt-24 w-full flex flex-col gap-6">
        
        <div class="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div
            class="w-[110px] h-[110px] md:w-[130px] md:h-[130px]
                   rounded-full
                   bg-[#E63946]
                   border border-red-400/30
                   shadow-[0_0_50px_rgba(230,57,70,0.6)]
                   flex items-center justify-center"
          >
            <img
              src="/images/partners/logo.svg"
              alt="Center Emblem"
              class=""
            />
          </div>
        </div>

        <div class="marquee-wrapper">
          <div class="marquee-track scroll-left">
            <div class="flex gap-6 pr-6 shrink-0" v-for="i in 2" :key="'top-group-' + i">
              <div
                v-for="(item, index) in partners"
                :key="'top-card-' + i + '-' + index"
                class="w-[280px] md:w-[360px] h-[130px] md:h-[160px] shrink-0
                       rounded-[20px] bg-[#0E1026]/70
                       border border-white/5 hover:border-red-500/40
                       transition-all duration-300
                       flex items-center justify-center px-6 md:px-8
                       cursor-pointer"
              >
                <img
                  :src="item"
                  class="max-w-full max-h-[60px] md:max-h-[80px] object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
                  alt="Partner Logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="marquee-wrapper">
          <div class="marquee-track scroll-right">
            <div class="flex gap-6 pr-6 shrink-0" v-for="i in 2" :key="'bottom-group-' + i">
              <div
                v-for="(item, index) in reversedPartners"
                :key="'bottom-card-' + i + '-' + index"
                class="w-[280px] md:w-[360px] h-[130px] md:h-[160px] shrink-0
                       rounded-[20px] bg-[#0E1026]/70
                       border border-white/5 hover:border-red-500/40
                       transition-all duration-300
                       flex items-center justify-center px-6 md:px-8
                       cursor-pointer"
              >
                <img
                  :src="item"
                  class="max-w-full max-h-[60px] md:max-h-[80px] object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
                  alt="Partner Logo"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const partners = [
  "/images/partners/Frame.svg",
  "/images/partners/Frame (1).svg",
  "/images/partners/Group 13.svg",
  "/images/partners/Group 86.svg",
  "/images/partners/Group 19051.svg",
  "/images/partners/Layer_1.svg",
]

const reversedPartners = computed(() => [...partners].reverse())
</script>

<style scoped>
.marquee-wrapper {
  display: flex;
  overflow: hidden;
  width: 100%;
  /* Chrome, Safari va boshqa brauzerlar uchun to'liq moslik (Fading effect) */
  -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
  mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
}

/* Qaysi qator ustiga sichqoncha kelsa, faqat o'sha qator to'xtaydi */
.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

.scroll-left {
  animation: moveLeft 35s linear infinite;
}

.scroll-right {
  animation: moveRight 35s linear infinite;
}

/* -50% siljish cheksiz karuseldagi uzilish va sakrashlarni to'liq yo'qotadi */
@keyframes moveLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes moveRight {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>