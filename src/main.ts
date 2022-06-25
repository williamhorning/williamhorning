import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import './styles.scss';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(
    router
  )
  .mount('#app');
