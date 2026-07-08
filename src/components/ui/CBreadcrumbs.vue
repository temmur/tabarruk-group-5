<template>
  <nav class="flex items-center gap-2 text-sm text-gray-400">
    <RouterLink
      to="/"
      class="flex items-center gap-1 hover:text-white transition"
    >
      <Home class="w-4 h-4" />
      <span>Asosiy</span>
    </RouterLink>

    <template v-for="(item, index) in breadcrumbs" :key="item.path">
      <ChevronRight class="w-4 h-4 text-gray-500" />

      <RouterLink
        v-if="index !== breadcrumbs.length - 1"
        :to="item.path"
        class="hover:text-white transition"
      >
        {{ item.name }}
      </RouterLink>

      <span v-else class="text-gray-400">
        {{ item.name }}
      </span>
    </template>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Home, ChevronRight } from 'lucide-vue-next'

const route = useRoute()

const nameMap = {
  news: 'News',
  elchi: 'Elchi Kubanichbek Omuraliyev Bilan Suhbat',
}

const breadcrumbs = computed(() => {
  const parts = route.path.split('/').filter(Boolean)

  return parts.map((part, index) => {
    const path = '/' + parts.slice(0, index + 1).join('/')

    return {
      name: nameMap[part] || part.replaceAll('-', ' '),
      path,
    }
  })
})
</script>