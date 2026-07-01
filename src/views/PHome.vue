<template>
      <div>
              <CBanner/>
            <CAbout/>
            <CCountriesFlags/>
      </div>
</template>
<script setup lang="ts">
import CAbout from '@/components/sections/CAbout.vue';
import CBanner from '@/components/CBannner.vue';
import CCountriesFlags from '@/components/sections/CCountries-flags.vue';
</script>