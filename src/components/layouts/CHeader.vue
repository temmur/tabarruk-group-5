<template>
    <div class="c-header">
        <div class="c-header__logo">
        <img src="/images/slowlogo.png" alt="Logo" />
        </div>
        <nav class="c-header_nav">
        <ul class="font-medium">
            <li v-for="(el, idx) in navList"
            :key="idx"
            ><router-link :to="el.dropdownMenu ? '' : el.path">{{ el.name }} </router-link></li>
        </ul>
        <CSwitchlang/>
        </nav>
    </div>          
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import CSwitchlang from '@/components/layouts/CSwitchlang.vue';


const navList = ref([
    { name: 'Biz haqimizda', path: '/about' },
    { name: 'Davlatlar', path: '/countries', dropdownMenu: true },
    { name: 'Umumiy xarita', path: '/map', dropdownMenu: false },
    { name: 'Dinlar', path: '/religions', dropdownMenu: true },
    { name: 'Yordam', path: '/help', dropdownMenu: false },
    { name: 'FAQ', path: '/faq', dropdownMenu: false }
]);



</script>
<style>

.c-header {
    display: flex;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8f8f8;
}

.c-header_nav ul {
    list-style: none;
    display: flex;
    gap: 50px;
    margin-right: 40px;
}

.c-header_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.c-header_nav a {
    text-decoration: none;
    color: inherit;
}
</style>
