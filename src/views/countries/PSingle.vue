<template>
  <div class=" bg-cover bg-center h-screen flex flex-col justify-center items-center relative"
 :style="{backgroundImage: `url('${country?.img}')`}" 
  >
   <h1 class="text-white pb-15 text-7xl">
    {{ country?.name }}</h1>
    <p class="max-w-[800px] text-white  text-xl">
    {{ country?.info }}</p>
    
      <CButton variant="primary" text="Videoni tomosha qilish" size="lg" class="mt-10 items-center flex gap-2">
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
import CCountriesFlags from '@/components/sections/CCountries-flags.vue';
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