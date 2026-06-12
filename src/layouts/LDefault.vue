<template>
    <div class="flex min-h-screen flex-col">
        <CHeader/>

        <main class="flex-1">
            <router-view></router-view>
        </main>

        <CFooter/>
    </div>
</template>
<script setup lang="ts">
import CHeader from '@/assets/components/layouts/CHeader.vue';
import CFooter from '@/assets/components/layouts/CFooter.vue';
</script>