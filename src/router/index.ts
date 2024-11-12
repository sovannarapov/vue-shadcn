import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '@/pages/Dashboard.vue';
import Error from '@/layouts/error.vue';
import Product from '@/pages/Product.vue';
import Customer from '@/pages/Customer.vue';

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
    name: 'Product',
    component: Product,
  },
  {
    path: '/customers',
    name: 'Customer',
    component: Customer,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
