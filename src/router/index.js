import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "HomeView",
            component: () => import("../views/home/TheHome.vue"),
            children: [
                {
                    path: '/home',
                    alias: '',
                    name: 'Home',
                    component: () => import("../components/Common/Home.vue"),
                },
                {
                    path: '/payment-list',
                    alias: '',
                    name: 'PaymentList',
                    component: () => import("../components/Payment/PaymentList.vue"),
                },
                {
                    path: '/add-payment',
                    alias: '',
                    name: 'AddPayment',
                    component: () => import("../components/Payment/AddPayment.vue"),
                },
            ]
        },
        {
            path: "/signin",
            name: "SignInView",
            component: () => import("../views/auth/SignIn.vue"),
        },
        {
            path: "/register",
            name: "RegisterView",
            component: () => import("../views/auth/Register.vue"),
        },
    ],
});

export default router;
