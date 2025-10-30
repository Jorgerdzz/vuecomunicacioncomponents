import { createApp } from 'vue'
import App from './App.vue'
import jQuery from 'jquery';
import router from './Router';

window.$ = window.jQuery = jQuery;

createApp(App).use(router).mount('#app')
