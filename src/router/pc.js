import { createRouter } from 'vue-router'


//静态路由
const baseRoutes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./'),
    }
]

const router = createRouter({
    routes: baseRoutes
})


export default router;