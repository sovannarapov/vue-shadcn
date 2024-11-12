import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '@/pages/dashboard.vue';
import NotFound from '@/pages/404.vue';
import ProductList from '@/pages/product/index.vue';
import CustomerList from '@/pages/customer/index.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/',
    component: Dashboard,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
    ],
  },
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/customers',
    name: 'CustomerList',
    component: CustomerList,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
