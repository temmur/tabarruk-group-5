
 <template>
  <div class="flex items-center gap-5">
    
 <div 
  class="flex items-center border border-[#474957] backdrop-blur-xl rounded-md overflow-hidden transition-all duration-500 ease-in-out w-145 h-11 focus-within:border-white"
  :class="openInput ? 'px-3 py-1.5 opacity-100' : 'max-w-0 px-0 py-1.5 opacity-0 border-transparent'"
>
  <slot name="prefix"></slot>
  <input 
    type="text"
    class="bg-transparent outline-none w-full placeholder:text-[#393B4B] text-white pl-3"
    v-bind="{ disabled, error, placeholder }"
    :value="modelValue"
    @input="onInput"
  >
  <slot name="suffix"></slot>
</div>

    <i 
      @click="openInput = !openInput"
      class="icon cursor-pointer text-xl hover:text-[#474957] text-white transition-all duration-300 active:scale-90"
      :class="openInput ? 'icon-xmark rotate-90 text-gray-700-500' : 'icon-search text-gray-700'"
    ></i>

  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps<{
  modelValue: string,
  error: boolean, 
  placeholder: string,
  disabled: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const openInput = ref(false)


const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
<style>

</style>