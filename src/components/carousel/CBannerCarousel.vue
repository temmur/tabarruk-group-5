<template>
  <div class="w-full h-full">
    <div class="flex items-center gap-4 border border-[#83848d] p-4 rounded-xl hover:border-gray-400 backdrop-blur-xl h-full">
        <img :src="image" class="w-full max-w-[100px] rounded-lg object-cover h-[100px] shrink-0" alt="">
        <div class="flex flex-col self-stretch justify-between py-1">
            <p class="text-[#83848d] text-sm">{{ title }}</p>
            <p class="text-2xl font-medium text-white">{{ subtitle }}</p>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// defineProps doesn't need to be imported in Vue 3 <script setup>, it's a global compiler macro.
defineProps<{
    image: string
    title: string
    subtitle: string
}>()
</script>