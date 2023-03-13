import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: 'Layout',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/Layout/index.vue'),
    },
];

const route = createRouter({
    history: createWebHistory(),
    routes,
});
export default route;
