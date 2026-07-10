<template>
  <div class=" py-10 w-full overflow-hidden">
    <div class="flex overflow-hidden mb-6">
      <div class="flex animate-marquee-left gap-7  hover:[animation-play-state:paused]">
        <img v-for="(img, i) in [...images, ...images, ...images]" :key="'l-'+i" 
             :src="img" 
             class="w-85 h-50 object-cover  rounded-2xl flex-shrink-0" />
      </div>
    </div>

    <div class="flex overflow-hidden">
      <div class="flex animate-marquee-right gap-7 hover:[animation-play-state:paused]">
        <img v-for="(img, i) in [...images, ...images, ...images]" :key="'r-'+i" 
             :src="img" 
             class="w-85 h-50 object-cover rounded-2xl flex-shrink-0 " />
      </div>
    </div>
  </div>
</template> 

<script setup lang="ts">
const images = [
  'https://admin.tabarrukziyorat.uz/media/country_media_images/027_Samarkand_Guri-Amir_Mausoleum.jpg',
  'https://admin.tabarrukziyorat.uz/media/country_media_images/%D1%87%D0%B0%D1%88%D0%BC%D0%B0_10.jpg',
  'https://admin.tabarrukziyorat.uz/media/country_media_images/shutterstock_499680133.jpg',
  'https://admin.tabarrukziyorat.uz/media/country_media_images/shutterstock_2153951587.jpg',
  'https://admin.tabarrukziyorat.uz/media/country_media_images/shutterstock_1667296441.jpg',
  'https://admin.tabarrukziyorat.uz/media/country_media_images/20._Ichan_Qala_2_2.jpg',
  'https://admin.tabarrukziyorat.uz/media/country_media_images/shutterstock_1544283224.jpg',
  'https://admin.tabarrukziyorat.uz/media/country_media_images/shutterstock_1086403388.jpg',
  'https://admin.tabarrukziyorat.uz/media/country_media_images/00.jpg',
];
</script>

<style>
.animate-marquee-left, .animate-marquee-right {
  will-change: transform;
}

@keyframes marquee-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); } 
}

@keyframes marquee-right {
  0% { transform: translateX(-33.333%); }
  100% { transform: translateX(0); }
}

.animate-marquee-left {
  animation: marquee-left 95s linear infinite;
}

.animate-marquee-right {
  animation: marquee-right 95s linear infinite;
}
</style>