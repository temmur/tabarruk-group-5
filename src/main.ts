import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import{registerLicense} from '@syncfusion/ej2-base'
registerLicense("ORg4AjUWIQA/Gnt2VFhiQ1hPcEBAX3xLf1F1VWJbdVpxf1ZEcDwsT3RfQF5jT3xRdkJmUX1YdHJTTg==");

createApp(App).use(router).mount('#app')
