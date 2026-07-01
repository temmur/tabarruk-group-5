<template>
    <div
        :class="[
            'fixed top-0 left-0 w-full transition-all duration-300 z-50 px-6 py-5',
            isScrolled ? 'bg-[#000026]/60 backdrop-blur-md' : 'bg-transparent'
        ]"
    >
        <div class="container mx-auto flex items-center justify-between">
            <img src="/images/slowlogo.png" alt="Logo" class="h-16 w-auto" />

            <!-- Desktop nav -->
            <nav class="hidden lg:flex items-center gap-10">
                <template v-for="(el, idx) in navList" :key="idx">
                    <CCountry v-if="el.name === 'Davlatlar'" />
                    <span
                        v-else-if="el.name === 'Dinlar'"
                        @click="(e) => religionRef.toggle(e.target.getBoundingClientRect())"
                        class="text-white font-semibold cursor-pointer hover:text-gray-300 transition-colors"
                    >Dinlar</span>
                    <router-link v-else :to="el.path" class="text-white font-semibold hover:text-gray-300 transition-colors">
                        {{ el.name }}
                    </router-link>
                </template>
                <div class="w-px h-6 bg-white/30"></div>
                <CSwitchlang />
                <div class="w-px h-6 bg-white/30"></div>
                <button class="text-white hover:text-gray-300 transition-colors bg-transparent border-none cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
                    </svg>
                </button>
            </nav>

            <!-- Mobile hamburger -->
            <button class="lg:hidden text-white bg-transparent border-none cursor-pointer" @click="mobileOpen = true">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        <!-- Mobile fullscreen menu -->
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-if="mobileOpen" class="lg:hidden fixed inset-0 bg-[#000926] z-[100] flex flex-col px-6 py-5">

                <!-- Top: logo + close -->
                <div class="flex items-center justify-between">
                    <img src="/images/slowlogo.png" alt="Logo" class="h-14 w-auto" />
                    <button @click="mobileOpen = false" class="text-white bg-transparent border-none cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Search -->
                <div class="mt-5">
                    <input
                        type="text"
                        placeholder="Qidiruv"
                        class="w-full bg-[#0a1128] text-white placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none border border-white/10"
                    />
                </div>

                <!-- Nav links -->
                <nav class="flex flex-col gap-1 mt-6 flex-1 overflow-y-auto">
                    <template v-for="(el, idx) in navList" :key="idx">
                        <span v-if="el.name === 'Dinlar'" class="text-white font-bold text-2xl cursor-pointer hover:text-gray-300 transition-colors py-2">Dinlar</span>
                        <span v-else-if="el.name === 'Davlatlar'" class="text-white font-bold text-2xl cursor-pointer hover:text-gray-300 transition-colors py-2">Davlatlar</span>
                        <router-link v-else :to="el.path" class="text-white font-bold text-2xl hover:text-gray-300 transition-colors py-2" @click="mobileOpen = false">
                            {{ el.name }}
                        </router-link>
                    </template>

                    <!-- Til tanlash -->
                    <div class="mt-4">
                        <CSwitchlang />
                    </div>
                </nav>

                <!-- Footer -->
                <div class="flex items-center justify-between pt-4 border-t border-white/10 mt-4">
                    <span class="text-gray-400 text-sm">© 2026, Tabarruk Ziyorat</span>
                    <img src="/images/slowlogo.png" alt="Logo" class="h-8 w-auto opacity-50" />
                </div>
            </div>
        </Transition>

        <CReligion ref="religionRef" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import CReligion from '@/components/layouts/CReligion.vue'
import CSwitchlang from '@/components/layouts/CSwitchlang.vue'
import CCountry from '@/components/layouts/CCountry.vue'

const religionRef = ref(null)
const isScrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => { isScrolled.value = window.scrollY > 50 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navList = ref([
    { name: 'Biz haqimizda', path: '/about' },
    { name: 'Davlatlar',     path: '/countries' },
    { name: 'Umumiy xarita', path: '/map' },
    { name: 'Dinlar',        path: '/religions' },
    { name: 'Yordam',        path: '/help' },
    { name: 'FAQ',           path: '/faq' },
])
</script>