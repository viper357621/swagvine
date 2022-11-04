import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../store/useUserStore";

const routes = [
// --start sample--
  {
    name: "SamplHome",
    path: "/sample_home",
    component: () => import("../pages/SampleHome.vue"),
  },
  // --end--
  {
    name: "EmailConfirmation",
    path: "/email-confirmation",
    component: () => import("../pages/EmailConfirmation.vue"),
  },
  {
    name: "Home",
    path: "/",
    redirect: '/me',
    component: () => import("../pages/Home.vue"),
  },
  {
    name: "Me",
    path: "/me",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../pages/Me.vue"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("../pages/Login.vue"),
  },
  {
    name: "ForgotPassword",
    path: "/forgotPassword",
    component: () => import("../pages/ForgotPassword.vue"),
  },
  {
    name: "Logout",
    path: "/logout",
    beforeEnter: async () => {
      const { logout } = useUserStore().isLogin=false;
      await logout();
      return { name: "Home" };
    },
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("../pages/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const isLoggedIn= useUserStore().isLogin;
  if (
    !isLoggedIn &&
    to.meta.requiresAuth &&
    !Object.keys(to.query).includes("fromEmail")
  ) {
    return { name: "Login" };
  }
});

export default router;