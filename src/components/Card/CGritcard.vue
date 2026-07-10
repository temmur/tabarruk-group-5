<!-- <template>
  <div class="flex  bg-[url(c:\Users\user\Desktop\vue\tabarruk-group-5\public\images\Sections\CAbout\country2.webp)]" >
    <div class="flex gap-10 m-30">
      <div class=" border border-[#a2a0a1] rounded-[15px] p-5 w-120 align-center justify-center 
      h-40 backdrop-blur-2xl">
        <div class="flex  mb-7 gap-3">
        <img class="h-10 bg-[#E64545] p-1 rounded-md" src="c:\Users\user\Desktop\vue\tabarruk-group-5\public\images\accordion-icon\user-heart-alt.svg" alt="">
        <p class="text-white text-4xl font-bold">175</p>
        </div>
        <p class="text-[#93949c] text-4xl font-semibold">Diqqatga sazovor joylar</p>
      </div>
       <div class=" border border-[#a2a0a1] rounded-[15px] p-5 w-190  align-center justify-center 
      h-40 backdrop-blur-2xl">
        <div class="flex  mb-7 gap-3">
        <img class="h-10 bg-[#E64545] p-1 rounded-md" src="c:\Users\user\Desktop\vue\tabarruk-group-5\public\images\accordion-icon\user-heart-alt.svg" alt="">
        <p class="text-white text-4xl font-bold">37 mln</p>
        </div>
        <p class="text-[#93949c] text-4xl font-semibold ">Aholi soni</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  
</script> -->



<template>
  <div class="flex justify-center">
    <div class="flex gap-10">
      <div 
        v-for="(item, index) in stats" 
        :key="index"
        :class="[item.widthClass, 'border border-[#a2a0a1] rounded-[15px] p-9 h-40 backdrop-blur-2xl flex flex-col justify-center']"
      >
        <div class="flex mb-7 gap-3 items-center">
          <img 
            class="h-12 bg-[#E64545] p-1 rounded-[10px]" 
            :src="item.icon" 
            alt="icon"
          >
          <p class="text-white text-4xl font-bold">{{ item.value }}</p>
        </div>
        <p class="text-[#93949c] text-4xl font-semibold">{{ item.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  {
    value: '175',
    label: 'Diqqatga sazovor joylar',
    icon: 'public/images/religions/Islam (1).svg',
    widthClass: 'w-120'
  },
  {
    value: '37 mln',
    label: 'Aholi soni',
    icon: '/images/accordion-icon/user-heart-alt.svg', 
    widthClass: 'w-190'
  }
];
</script>