
<template>
  <div class="flex justify-center ">
    <div class="flex gap-7">
      <div 
        v-for="(item, index) in stats" 
        :key="index"
        :class="[item.widthClass, 'border border-[#a2a0a1]/40 rounded-[15px] p-5 h-30 backdrop-blur-2xl flex flex-col justify-center ']"
      >
        <div class="flex mb-4 gap-3 items-center ">
          <img 
            class="h-12 bg-[#E64545] p-1 rounded-[10px] " 
            :src="item.icon" 
            alt="icon"
          >
          <p class="text-white text-3xl font-bold">{{ item.value }}</p>
        </div>
        <p class="text-[#93949c] text-2xl font-semibold">{{ item.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  {
    value: '175',
    label: 'Diqqatga sazovor joylar',
    icon: "/images/accordion-icon/user-heart-alt.svg",
    widthClass: 'w-110'
  },
  {
    value: '37 mln',
    label: 'Aholi soni',
    icon: '/images/accordion-icon/user-heart-alt.svg', 
    widthClass: 'w-155'
  }
];
</script> 