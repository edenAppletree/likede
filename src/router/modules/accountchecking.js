import Layout from "@/layout";
export default {
  path: "/accountchecking",
  component: Layout,
  children: [
    {
      path: "index",
      name: "对账统计",
      component: () => import("@/views/accountchecking/index"),
      meta: { title: "对账统计", icon: "accountcheck" },
    },
  ],
};
