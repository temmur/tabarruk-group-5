<template>
      <div>
              <CBanner/>
            <CAbout/>
            <CCountriesFlags/>
            <CNews/>
            <CInsta/>
            <CPartners/>
      </div>
</template>
<script setup lang="ts">
import CAbout from '@/components/sections/CAbout.vue';
import CBanner from '@/components/CBannner.vue';
import CNews from '@/components/sections/CNews.vue';
import CCountriesFlags from '@/components/sections/CCountries-flags.vue';
import CInsta from '@/components/Card/CInsta.vue';
import CPartners from '@/components/Carousel/CPartners.vue';
</script>