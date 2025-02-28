import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Contatti from '@/pages/Contatti.vue';
import User from '@/pages/User.vue';
import TemplateFisso from '@/pages/TemplateFisso.vue';
import Welfare from '@/pages/Welfare.vue';
import Soluzioni from '@/pages/Soluzioni.vue';
import News from '@/pages/News.vue';
import Chisiamo from '@/pages/chisiamo.vue';

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

    {
        path: '/welfare',
        name: 'Welfare',
        component: TemplateFisso,
        children: [
            {
                path: '',
                name: 'WelfarePage',
                component: Welfare
            }
        ]
    },
    {
        path: '/chisiamo',
        name: 'Chisiamo',
        component: TemplateFisso,
        children: [
            {
                path: '',
                name: 'ChisiamoPage',
                component: Chisiamo
            }
        ]
    },
    {
        path: '/soluzioni',
        name: 'Soluzioni',
        component: TemplateFisso,
        children: [
            {
                path: '',
                name: 'SoluzioniPage',
                component: Soluzioni
            }
        ]
    },
    {
        path: '/news',
        name: 'News',
        component: TemplateFisso,
        children: [
            {
                path: '',
                name: 'NewsPage',
                component: News
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;