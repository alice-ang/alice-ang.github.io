import Vue from 'vue';
import Router from 'vue-router';
import Contact from './components/Contact.vue'
import Gallery from './components/Gallery.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/gallery',
            name: 'gallery',
            component: Gallery
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }

    ]
});