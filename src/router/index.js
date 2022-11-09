import { createRouter, createWebHistory } from "vue-router";
import useSupabase from "../composables/UseSupabase";
import { useUserStore } from "../store/useUserStore";

const routes = [
  {
    name: "EmailConfirmation",
    path: "/email-confirmation",
    component: () => import("../pages/EmailConfirmation.vue"),
  },
  {
    name: "Home",
    path: "/",
    component: () => import("../pages/Home.vue"),
  },
  {
    name: "Me",
    path: "/me",
    meta: {
      requiresAuth: true,
    },
    children: [
      // {
      //   name: "Create User",
      //   path: "pages/createuser",
      //   component: () => import("@/views/dashboard/DashboardCreateUser"),
      // },
      // // Components
      // {
      //   name: "Alerts",
      //   path: "pages/alerts",
      //   component: () => import("@/views/dashboard/DashboardAlerts"),
      // },

      // {
      //   name: "Timekeeping",
      //   path: "pages/timekeeping",
      //   component: () => import("@/views/dashboard/DashboardTimekeeping"),
      // },

      // {
      //   name: "Icons",
      //   path: "pages/icons",
      //   component: () => import("@/views/dashboard/DashboardIcons"),
      // },

      // {
      //   name: "TableSimple",
      //   path: "pages/tables-simple",
      //   component: () => import("@/views/dashboard/DashboardTableSimple"),
      // },
      // {
      //   name: "DashboardTest",
      //   path: "pages/test",
      //   component: () => import("@/views/dashboard/DashboardTest"),
      // },
      {
        name: "Profile",
        path: "profile",
        component: () => import("../pages/users/UserProfile.vue"),
      },
      {
        name: "Dashboard",
        path: "dashboard",
        component: () => import("../pages/users/UserDashboard.vue"),
      },
    ],
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
      const { logout } = (useUserStore().isLogin = false);
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

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const { supabase } = useSupabase();

  if (
    (to.path === "/login" || to.path === "/register") &&
    (await supabase.auth.getUser()).data.user != null
  ) {
    next("/me");
  } else if (
    requiresAuth &&
    (await supabase.auth.getUser()).data.user == null
  ) {
    next("login");
  } else if (
    to.path === "/" &&
    (await supabase.auth.getUser()).data.user != null
  ) {
    next("me");
  } else {
    next();
  }
});

export default router;
