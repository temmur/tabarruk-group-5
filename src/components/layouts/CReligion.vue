<template>
  <div class="relative" ref="triggerRef">

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
          class="fixed z-[9999] bg-[#000026]/80 backdrop-blur-md rounded-2xl shadow-xl p-3 min-w-[220px] border border-white/10"
        >
          <div class="flex flex-col gap-1">
            <button
              v-for="religion in religions"
              :key="religion.name"
              class="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors text-left w-full bg-transparent border-none cursor-pointer"
            >
              <img
                :src="religion.icon"
                :alt="religion.name"
                class="w-10 h-10 rounded-xl object-cover flex-shrink-0"
              />
              <div>
                <div class="text-white font-semibold text-sm">{{ religion.name }}</div>
                <div class="text-gray-400 text-xs mt-0.5">{{ religion.count }} Manzillar</div>
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

const religions = [
  { name: 'Islam', count: 6, icon: '/images/religions/islam-icon.svg' },
]

const isOpen = ref(false)
const triggerRef = ref(null)
const dropdownRef = ref(null)
const dropdownStyle = ref({})

// Bu funksiyani tashqaridan chaqirish uchun
function open(rect) {
  dropdownStyle.value = {
    top: `${rect.bottom + 8}px`,
    left: `${rect.left}px`,
  }
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

function toggle(rect) {
  isOpen.value ? close() : open(rect)
}

defineExpose({ open, close, toggle })

function handleClickOutside(e) {
  const inDropdown = dropdownRef.value && dropdownRef.value.contains(e.target)
  if (!inDropdown) isOpen.value = false
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onUnmounted(() => document.removeEventListener('mousedown', handleClickOutside))
</script>