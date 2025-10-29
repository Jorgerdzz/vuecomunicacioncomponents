import { createApp } from 'vue'
import App from './App.vue'
import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

createApp(App).mount('#app')
