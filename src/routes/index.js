import Login from "@/components/Login/Login";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', component: Login, name: 'Login'},
    {path: '/:pathMatch(.*)*', redirect: '/'},
    {path: '/:pathMatch(.*)', redirect: '/'},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});


export {router};
