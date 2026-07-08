<template>
  <div class="flex items-center gap-5">
 <div 
  class="flex items-center absolute right-10 border border-[#474957] bg-[#4e535c]/50  backdrop-blur-xl rounded-md overflow-hidden transition-all duration-500 ease-in-out w-220  focus-within:border-white"
  :class="openInput ? 'px-3  opacity-100' : 'max-w-0 px-0 opacity-0 border-transparent'"
>
  <slot name="prefix"></slot>
  <input 
    :type="type"
    class="bg-transparent outline-none py-3 w-full placeholder:text-[#393B4B]/50 pr-4 text-white pl-3"
    v-bind="{ disabled, error, placeholder }"
    :value="modelValue"
    @input="onInput"
  >
  <slot name="suffix">
  </slot>
</div>

    <i 
      @click="openInputFunc()"
      class="icon cursor-pointer text-xl hover:text-[#474957] text-white transition-all duration-300 active:scale-90"
      :class="openInput ? 'icon-xmark rotate-90 text-gray-700-500' : 'icon-search text-gray-700'"
    ></i>

  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

interface Props{
   modelValue: string,
   type: string
  error: boolean, 
  placeholder: string,
  disabled: boolean,
  min: number
  max: number,
  data: any[]
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Search...',
  min: 4,
  max: 20,
  type: 'text'
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'toggleInput', value: boolean): void
}>()
const openInput = ref(false)


const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const openInputFunc=()=> {
  openInput.value = !openInput.value
  emit('toggleInput', openInput.value)
}
</script>
<style>

</style>