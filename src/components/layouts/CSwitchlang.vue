<template>
  <div ref="triggerRef" class="relative inline-block">
    <!-- Selected language -->
    <button @click="toggleDropdown" class="selected-btn">
      <img
        :src="currentLanguage.flag"
        :alt="currentLanguage.code"
        class="selected-flag"
      />
    </button>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="isOpen"
          ref="dropdownRef"
          :style="dropdownStyle"
          class="dropdown-menu"
        >
          <!-- Top row -->
          <div class="row">
            <button
              v-for="lang in topRow"
              :key="lang.code"
              @click="selectLang(lang)"
              class="lang-item"
              :class="{ active: currentLanguage.code === lang.code }"
            >
              <img :src="lang.flag" :alt="lang.code" class="lang-flag" />
              <span class="lang-name">{{ lang.name }}</span>
              <span
                v-if="currentLanguage.code === lang.code"
                class="check"
              >
                ✓
              </span>
            </button>
          </div>

          <!-- Bottom row -->
          <div class="row row-center">
            <button
              @click="selectLang(bottomRow)"
              class="lang-item"
              :class="{ active: currentLanguage.code === bottomRow.code }"
            >
              <img :src="bottomRow.flag" :alt="bottomRow.code" class="lang-flag" />
              <span class="lang-name">{{ bottomRow.name }}</span>
              <span
                v-if="currentLanguage.code === bottomRow.code"
                class="check"
              >
                ✓
              </span>
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  {
    code: 'uz',
    name: "O'zbekcha",
    flag: '/images/language-icons/Uzbekistan.svg',
  },
  {
    code: 'ru',
    name: 'Русский',
    flag: '/images/language-icons/Russia.svg',
  },
  {
    code: 'en',
    name: 'English',
    flag: '/images/language-icons/UK.svg',
  },
]

const isOpen = ref(false)
const triggerRef = ref(null)
const dropdownRef = ref(null)
const dropdownStyle = ref({})

const currentLanguage = computed(() => {
  return (
    languages.find(lang => lang.code === locale.value) ??
    languages[0]
  )
})

const topRow = computed(() => languages.slice(0, 2))
const bottomRow = computed(() => languages[2])

function toggleDropdown() {
  if (!isOpen.value && triggerRef.value) {
    const rect = triggerRef.value.getBoundingClientRect()

    dropdownStyle.value = {
      position: 'fixed',
      top: `${rect.bottom + 8}px`,
      left: `${rect.right - 100}px`,
      transform: 'translateX(-100%)',
      zIndex: 9999,
    }
  }

  isOpen.value = !isOpen.value
}

function selectLang(lang) {
  locale.value = lang.code
  localStorage.setItem('lang', lang.code)
  isOpen.value = false
}

function handleClickOutside(event) {
  const inTrigger =
    triggerRef.value && triggerRef.value.contains(event.target)

  const inDropdown =
    dropdownRef.value && dropdownRef.value.contains(event.target)

  if (!inTrigger && !inDropdown) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<style scoped>
.selected-btn {
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.selected-flag {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

.dropdown-menu {
  background: #1a2235;
  border-radius: 16px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  min-width: 280px;
  margin-left: 110px;
  margin-top: 9px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.row {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.row-center {
  justify-content: center;
}

.lang-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  flex: 1;
  transition: background 0.15s ease;
}

.row-center .lang-item {
  flex: 0 0 auto;
  min-width: 130px;
}

.lang-item:hover {
  background: rgba(255, 255, 255, 0.07);
}

.lang-flag {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  display: block;
}

.lang-name {
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  flex: 1;
  text-align: left;
  white-space: nowrap;
}

.check {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-left: auto;
}
</style>