import { createApp } from 'vue';
import './Styles/style.css';
import App from './App.vue';
import store from './Store';
import route from './Router';

const app = createApp(App);
app.use(store);
app.use(route);

app.mount('#app');
