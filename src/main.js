import { createApp } from 'vue';
import App from './App.vue';
import data from './data/data';
import foo from './data/function';

createApp(App).mount('#app');

foo([data.data.message, data.data2.message]);
