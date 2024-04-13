import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// eslint-disable-next-line
import '../node_modules/bulma/css/bulma.css';

createApp(App).use(router).mount('#app');
