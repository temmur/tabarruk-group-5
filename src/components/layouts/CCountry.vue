<template>
  <div class="relative" ref="triggerRef">

    <!-- Trigger tugma -->
    <button
      @click="toggleDropdown"
      class="flex items-center gap-2 text-white font-semibold hover:text-gray-300 transition-colors focus:outline-none"
    >
      Davlatlar
    </button>

    <!-- Dropdown -->                           
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 translate-y-2 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 translate-y-2 scale-95"
      >
        <div
          v-if="isOpen"
          ref="dropdownRef"
          :style="dropdownStyle"
          class="fixed z-[9999] bg-[#1a2235]/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/50 p-5 border border-white/10"
        >
          <!-- Grid: 2 ustun -->
          <div class="grid grid-cols-2 gap-x-6 gap-y-1">
            <button
              v-for="country in countries"
              :key="country.name"
              class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/10 transition-colors text-left group"
            >
              <img
                :src="country.flag"
                :alt="country.name"
                class="w-10 h-10 rounded-xl object-cover flex-shrink-0"
              />
              <div>
                <div class="text-white font-semibold text-sm group-hover:text-white/90">
                  {{ country.name }}
                </div>
                <div class="text-gray-400 text-xs mt-0.5">
                  {{ country.count }} Manzillar
                </div>
              </div>
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Davlatlar ro'yxati — flag va count ni o'zingiz to'ldiring
const countries = [
  { name: "O'zbekiston", count: 175, flag: '/images/dropdown-flag-icons/Uzbekistan.svg' },
  { name: 'Turkiya',     count: 150, flag: '/images/dropdown-flag-icons/Turkiye.svg' },
  { name: 'Turkmaniston',count: 20,  flag: '/images/dropdown-flag-icons/Turkmenistan.svg' },
  { name: 'Ozarbayjon',  count: 0,   flag: '/images/dropdown-flag-icons/Azerbaijan.svg' },
  { name: "Qozog'iston", count: 51,  flag: '/images/dropdown-flag-icons/Kazakhstan.svg' },
  { name: "Qirg'iziston",count: 19,  flag: '/images/dropdown-flag-icons/Kyrgyzstan.svg' },
  { name: 'Vengriya',    count: 14,  flag: '/images/dropdown-flag-icons/Hungary.svg' },
]

const isOpen = ref(false)
const triggerRef = ref(null)
const dropdownRef = ref(null)
const dropdownStyle = ref({})

function toggleDropdown() {
  if (!isOpen.value && triggerRef.value) {
    const rect = triggerRef.value.getBoundingClientRect()
    dropdownStyle.value = {
      top: `${rect.bottom + 8}px`,
      left: `${rect.left}px`,
    }
  }
  isOpen.value = !isOpen.value
}

function handleClickOutside(e) {
  const inTrigger = triggerRef.value && triggerRef.value.contains(e.target)
  const inDropdown = dropdownRef.value && dropdownRef.value.contains(e.target)
  if (!inTrigger && !inDropdown) isOpen.value = false
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onUnmounted(() => document.removeEventListener('mousedown', handleClickOutside))
</script>