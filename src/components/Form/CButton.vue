    <template>
        <button 
        :class="[
  variants[variant || 'primary'],
  sizes[size || 'md'],
  btnClass
]"
class="rounded-lg cursor-pointer"
        :disabled="props.disabled" 
        >
            <slot name="prefix"></slot>
            {{ text }}
            <slot name="suffix"></slot>
        </button>
    </template>
    <script setup lang="ts">
import {defineProps} from 'vue';

    const props = defineProps<{
        variant?: 'primary' | 'secondary' | 'tertiary',
        text: string 
        btnClass?: string
        size?: 'md' | 'lg' | 'xl'
        disabled?: boolean
    }>()

    const variants = {
        primary: 'bg-[#E64545] text-white hover:bg-[#b22323]',
        secondary: 'bg-gray-600  text-white hover:bg-[#2C2E3E]',
        tertiary: 'bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-100'
    }
    const sizes = {
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-10 py-3 text-xl'
    }
    </script>