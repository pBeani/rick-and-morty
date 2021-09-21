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
        path: 'character/:id',
        name: 'characterProfile',
        component: () => import('pages/CharacterProfile.vue'),
      },
      {
        path: 'episode/:id',
        name: 'episode',
        component: () => import('pages/Episode.vue'),
      },
      {
        path: 'location/:id',
        name: 'location',
        component: () => import('pages/Location.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
