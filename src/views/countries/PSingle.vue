<template>
   <p class="text-white">Hello{{ country }}</p>
</template>
<script setup lang="ts">
import {ref, computed} from 'vue'
import {useRoute} from 'vue-router'
import { countries } from '@/data/countriesList';

const route = useRoute()


const country = computed(()=> {
  return  countries.find((element)=> element.id === Number(route?.params.id))
})
</script>