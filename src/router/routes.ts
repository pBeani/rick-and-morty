import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'characters',
        component: () => import('pages/Characters.vue'),
      },
      {
        path: 'personagem/:id',
        name: 'characterProfile',
        component: () => import('pages/CharacterProfile.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
