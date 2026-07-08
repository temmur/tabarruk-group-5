<template>
<div class="relative">
  <CInput v-model="val"
  @toggleInput="handleToggle"
  >
    <template #suffix>
      <button 
      @click="val = ``"
      v-if="val.length >=4"
      class="bg-[#4e535c]/70 rounded-lg cursor-pointer p-2 text-white backdrop-blur-2xl">{{ $t('clearBtn') }}</button>
    </template>
  </CInput>
  <div
  v-if="val.length && isInputOpen"
  class="max-h-[300px] min-h-[200px] border border-[#474957] overflow-scroll bg-[#4e535c]/50 py-3 pl-3 rounded-xl w-220 absolute -bottom-64 right-10 mt-2 backdrop-blur-2xl">
    <ul v-if="filteredData.length">
     <li
  v-for="(el, idx) in filteredData"
  :key="idx"
  class="border-b py-2 first:pt-0 text-white border-b-[#545560] font-light cursor-pointer"
  v-html="highlightText(el.title)"
></li>
    </ul>
    <div v-else
    class="text-center flex justify-center flex-col h-full max-h-[300px] min-h-[200px] items-center"
    >
      <p class="text-white text-xl font-light">Natija topilmadi</p>
      <p class="text-[#B6B5B8] mt-4">Qidiruvingizga mos keladigan natija topilmadi</p>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import CInput from '@/components/Form/CInput.vue';

const val = ref('')
const isInputOpen = ref(false)

function handleToggle(value: boolean) {
  isInputOpen.value = value
}

const productsData = ref<any[]>([])

async function getProducts(){
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json()
  productsData.value = data.products
}

const filteredData = computed(()=> {
    if (val.value.length < 4) return []

  return productsData.value.filter(product =>
    product.title.toLowerCase().includes(val.value.toLowerCase())
  )
})

function highlightText(text: string) {
  if (!val.value) return text

  const escaped = val.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escaped})`, 'gi')

  return text.replace(
    regex,
    `<span class="bg-red-400 text-black rounded px-1">$1</span>`
  )
}

onMounted(()=> {
  getProducts()
})
</script>