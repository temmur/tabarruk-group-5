<template>
  <img
      src="/images/vectors/Vector(7).svg"
      alt=""
      class="absolute top-0 left-0 z-20"
    />
  <div class=" bg-cover bg-center h-screen flex flex-col justify-center items-center relative "
 :style="{backgroundImage: `url('${country?.img}')`}" 
  >

   <div class="   absolute w-full h-full top-0 left-0 bg-[#07091C]/60 "></div>
   <h1 class="text-white pb-15 text-7xl relative z-10">
    {{ country?.name }}</h1>
    <p class="max-w-[800px] text-white  text-xl relative z-10">
    {{ country?.info }}</p>

      <CButton variant="primary" text="Videoni tomosha qilish" size="lg" class="mt-10 items-center flex gap-2 relative z-10">
        <template #suffix>
          <i class="icon-play"></i>
        </template>
        
      </CButton>
        <CGritcard class="absolute -bottom-0 right-1/2 transform translate-1/2 "/>
  </div>

  <PSCarousel :items="bannerList" />
<CFontkarusel/>
</template>
<script setup lang="ts">
import {ref, computed} from 'vue'                     
import {useRoute} from 'vue-router'
import { countries } from '@/data/countriesList';
import CButton from '@/components/Form/CButton.vue';
import CFontkarusel from '@/components/Card/CFontkarusel.vue';
import CGritcard from '@/components/Card/CGritcard.vue';
import { count } from 'console';
  import PSCarousel from './PSCarousel.vue';  
const route = useRoute()
    

const country = computed(()=> {
  return  countries.find((element)=> element.id === Number(route?.params.id))
})
</script>