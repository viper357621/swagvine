import { createRouter, createWebHistory } from "vue-router";
import useAuthUser from "../composables/UseAuthUser";
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
  console.log((await supabase.auth.getUser()).data.user);
  if ((await supabase.auth.getUser()).data.user != null) {
    console.log("Not Null TEST");
  }
  console.log("Routes");

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
  } else {
    next();
  }
});

// router.beforeEach(async (to) => {
//   const { supabase } = useSupabase();

//   supabase.auth.getUser().then(({ data, error }) => {
//     if (
//       error != null &&
//       to.meta.requiresAuth &&
//       !Object.keys(to.query).includes("fromEmail")
//     ) {
//       return { name: "Login" };
//     }
//   });
// });

export default router;
