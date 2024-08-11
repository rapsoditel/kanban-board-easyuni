import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Import your Vuex store

const app = createApp(App);

app.use(store); // Register the Vuex store

app.mount('#app');
