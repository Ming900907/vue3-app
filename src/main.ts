import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import route from './router';

const app = createApp(App);

app.use(store);
app.use(route);
app.mount('#app');
