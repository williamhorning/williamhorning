import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import './styles.scss';
import 'highlight.js/scss/tokyo-night-dark.scss';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(
    router
  )
  .mount('#app');
