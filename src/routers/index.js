import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Contatti from '@/pages/Contatti.vue';
import User from '@/pages/User.vue';
import TemplateFisso from '@/pages/TemplateFisso.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: TemplateFisso,
        children: [
            {
                path: '',
                name: 'HomePage',
                component: Home
            }
        ]
    },
    {
        path: '/contatti',
        name: 'Contatti',
        component: TemplateFisso,
        children: [
            {
                path: '',
                name: 'ContattiPage',
                component: Contatti
            }
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: TemplateFisso,
        children: [
            {
                path: '',
                name: 'UserPage',
                component: User
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;