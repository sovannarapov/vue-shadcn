import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
