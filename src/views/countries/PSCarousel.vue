<template>
    <div class="container mx-auto  gap-10 py-20">
        <div>
            <h1 class="text-white text-3xl ">Diqqatga sazovor joylar</h1>
            <p class="text-[#9c9da4]">Eng so'nggi yangiliklardan xabardor bo'ling</p>
        </div>
        <div>
            <div>
                <img :src="singer?.img" alt="">
                <p>{{ singer?.name }}</p>
                <p>
                    <img src="./location.svg" alt="">
                   {{ singer?.region }}</p>
            </div>
        </div>
      <CButton text="Hammasini ko'rish" size="lg" variant="secondary" class="mt-10">
        <template #suffix>
          <i class="icon-arrow-right"></i>
        </template>
      </CButton>
    </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import { singerList } from '@/data/PSingerlist';
import CButton from '@/components/Form/CButton.vue';

const currentSinger = ref(singerList[0]);

</script>