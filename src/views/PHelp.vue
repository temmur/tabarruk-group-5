<template>
  <div class="min-h-screen bg-[#0b0c16] text-white p-4 md:p-12 flex items-center justify-center">
    <div class="w-full max-w-[1240px] mx-auto">      
      <div class="mb-10">
        <h1 class="text-white text-3xl md:text-4xl font-bold pb-2 border-b-2 border-[#e53e3e] inline-block tracking-wide">
          Bizga savolingiz bormi?
        </h1>
        <p class="text-gray-300 mt-4 text-sm md:text-base">
          Quyidagi shaklda formani to'ldiring va biz siz bilan bog'lanamiz
        </p>
      </div>
      <div class="flex flex-col lg:flex-row gap-12 items-start justify-between">
        <form @submit.prevent="handleSubmit" class="w-full lg:flex-1 flex flex-col gap-5">
          <div class="flex flex-col md:flex-row gap-5">
            <div class="flex-1 flex flex-col gap-2">
              <label class="text-sm font-medium text-gray-300">Ism</label>
              <input 
                v-model="form.name"
                type="text" 
                placeholder="Samantha Smith" 
                :class="[
                  'w-full bg-[#111325] border rounded-xl p-2 text-white placeholder-[#4b4e6d] focus:outline-none transition',
                  errors.name ? 'border-[#e53e3e] focus:border-[#e53e3e]' : 'border-[#23263d] focus:border-gray-400'
                ]"
              />
            </div> 
            <div class="flex-1 flex flex-col gap-2">
              <label class="text-sm font-medium text-gray-300">Elektron pochta</label>
              <input 
                v-model="form.email"
                type="email" 
                placeholder="example@gmail.com" 
                :class="[
                  'w-full bg-[#111325] border rounded-xl p-2 text-white placeholder-[#4b4e6d] focus:outline-none transition',
                  errors.email ? 'border-[#e53e3e] focus:border-[#e53e3e]' : 'border-[#23263d] focus:border-gray-400'
                ]"
              />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-300">Xabar</label>
            <div 
              :class="[
                'relative border rounded-xl bg-[#111325] transition',
                errors.message ? 'border-[#e53e3e] focus-within:border-[#e53e3e]' : 'border-[#23263d] focus-within:border-gray-400'
              ]"
            >
              <textarea 
                v-model="form.message"
                placeholder="Sizning xabaringiz" 
                rows="5" 
                maxlength="300"
                class="w-full bg-transparent p-2 pb-3 text-white placeholder-[#4b4e6d] resize-none focus:outline-none"
              ></textarea>
              <span class="absolute bottom-3 right-4 text-xs text-[#4b4e6d]">
                {{ form.message.length }}/300
              </span>
            </div>
          </div>
          <div class="my-4 flex flex-col gap-5 items-start">
            <div 
              @click="toggleCaptcha" 
              :class="[
                'border rounded bg-[#202231] p-3 flex items-center justify-between w-full max-w-[300px] cursor-pointer select-none hover:bg-[#25283a] transition shadow-md',
                errors.captcha ? 'border-[#e53e3e]' : 'border-[#2a2c3e]'
              ]"
            >
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 border border-gray-400 rounded bg-white flex items-center justify-center transition-all">
                  <svg 
                    v-if="isRobotVerified" 
                    class="w-4 h-4 text-green-600 font-bold" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-sm font-normal text-white">Я не robot</span>
              </div>
              <div class="flex flex-col items-center opacity-80">
                <img 
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                  alt="reCAPTCHA" 
                  class="w-7 h-7 object-contain"
                />
                <span class="text-[8px] text-gray-400 mt-0.5 tracking-wider">reCAPTCHA</span>
              </div>
            </div>
            <p class="text-gray-400 text-sm">
              Bu xabarni yuborish orqali siz 
              <span 
                @click="handlePrivacyClick" 
                class="text-white font-semibold cursor-pointer hover:underline transition"
              >
                maxfiylik siyosati
              </span> 
              imzolagan bo‘lasiz
            </p>
  <button 
  class="w-[300px] h-[55px] mt-4 flex items-center justify-center gap-3  rounded-2xl bg-[#ef4d4d] text-white font-medium text-lg transition duration-200 hover:bg-[#d94444]">
  <span>Yuborish</span>
  <svg 
    class="w-6 h-6" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
  </svg>
</button>
          </div>
        </form>
        <div class="w-full m-[30px] lg:max-w-[460px] border border-[#1d1f30] rounded-2xl p-6 bg-[#111325]/60 backdrop-blur-sm">
          <div class="pb-5">
            <div class="flex items-center gap-2 mb-2">
              <img src="/images/Sections/CAbout/location.svg" alt="Location" class="w-4 h-4 opacity-70">
              <p class="text-gray-400 text-xs font-medium uppercase tracking-wider">Manzil</p>
            </div>
            <h2 class="text-lg font-medium leading-relaxed text-gray-100">
              Amir Temur shox ko'chasi, 107 B-uy, Toshkent, O'zbekiston
            </h2>
          </div>
          <div class="border-t border-[#1d1f30] my-2"></div>
          <div class="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <img src="/images/Sections/CAbout/mail.svg" alt="Mail" class="w-4 h-4 opacity-70">
                <p class="text-gray-400 text-xs font-medium uppercase tracking-wider">Elektron pochta</p>
              </div>
              <a href="mailto:tabarruk.ziyorat@info.uz" class="text-sm font-semibold text-white hover:text-red-400 transition break-all">
                tabarruk.ziyorat@info.uz
              </a>
            </div>
            <div class="sm:pl-6 sm:border-l border-[#1d1f30]">
              <div class="flex items-center gap-2 mb-2">
                <img src="/images/Sections/CAbout/phone.svg" alt="Phone" class="w-4 h-4 opacity-70">
                <p class="text-gray-400 text-xs font-medium uppercase tracking-wider">Telefon raqam</p>
              </div>
              <a href="tel:+998712007007" class="text-sm font-semibold text-white hover:text-red-400 transition whitespace-nowrap">
                +998 71 200 70 07
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const emit = defineEmits<{
  (e: 'submit', data: typeof form): void
  (e: 'privacy-click'): void
}>()
const isRobotVerified = ref<boolean>(false)
const form = reactive({
  name: '',
  email: '',
  message: ''
})
const errors = reactive({
  name: false,
  email: false,
  message: false,
  captcha: false
})
const toggleCaptcha = (): void => {
  isRobotVerified.value = !isRobotVerified.value
  if (isRobotVerified.value) errors.captcha = false
}

const handlePrivacyClick = (): void => {
  emit('privacy-click')
}


const handleSubmit = (): void => {
  errors.name = !form.name.trim()
  errors.email = !form.email.trim()
  errors.message = !form.message.trim()
  errors.captcha = !isRobotVerified.value


  const hasErrors = Object.values(errors).some(error => error)

  if (!hasErrors) {
    emit('submit', { ...form })
  }
}
</script>