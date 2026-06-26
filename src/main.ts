import './assets/main.css'
import uz from './locales/uz.json'
import ru from './locales/ru.json'
import en from './locales/en.json'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router/index.ts'

const choosenLang = localStorage.getItem('lang') || 'uz'
const i18n = createI18n({
  locale: choosenLang,
  fallbackLocale: 'en',
  messages: {
    uz,
    ru,
    en,
  },
})

export default i18n

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')