import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/components/views/Index";
import Login from "@/components/views/Login";

Vue.use(VueRouter);

const routes = [
    {
        path : 'index',
        name : 'index',
        component : Index
    },
    {
        path : 'login',
        name : 'login',
        component: Login
    }
];

const router = new VueRouter({
    mode: 'abstract',
    base: process.env.BASE_URL,
    routes
});



export default router
