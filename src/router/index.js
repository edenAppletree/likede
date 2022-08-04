import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
import workorder from "./modules/workordermanagement";
import point from "./modules/pointmanagement";
import equipment from "./modules/equipmentmanagement";
import staff from "./modules/staffmanagement";
import goods from "./modules/goodsmanagement";
import strategy from "./modules/strategy";
import order from "./modules/order";
import accountchecking from "./modules/accountchecking";

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "帝可得",
        component: () => import("@/views/home/index"),
        meta: { title: "帝可得", icon: "home" },
      },
    ],
  },
  workorder,
  point,
  equipment,
  staff,
  goods,
  strategy,
  order,
  accountchecking,

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
