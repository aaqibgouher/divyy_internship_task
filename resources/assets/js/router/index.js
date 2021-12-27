import VueRouter from 'vue-router';
import webRoutes from './webRoutes';

const routes = [
    ...webRoutes,
];

export const router = new VueRouter({
    
    routes,
    mode: 'history'
    
})