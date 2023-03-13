import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: 'Home',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/Home/Index.vue'),
    },
];

const route = createRouter({
    history: createWebHistory(),
    routes,
});
export default route;
