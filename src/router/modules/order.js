import Layout from "@/layout";
export default {
  path: "/order",
  component: Layout,
  children: [
    {
      path: "index",
      name: "订单管理",
      component: () => import("@/views/order/index"),
      meta: { title: "订单管理", icon: "order" },
    },
  ],
};
