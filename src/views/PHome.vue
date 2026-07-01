<template>
      <div>
              <CBanner/>
            <CAbout/>
            <CCountriesFlags/>
            <CNews/>
      </div>
</template>
<script setup lang="ts">
import CAbout from '@/components/sections/CAbout.vue';
import CBanner from '@/components/CBannner.vue';
import CNews from '@/components/sections/CNews.vue';
import CCountriesFlags from '@/components/sections/CCountries-flags.vue';
</script>