import Layout from "@/layout";
export default {
  path: "/workordermanagement",
  component: Layout,
  redirect: "/workordermanagement/operate",
  name: "工单管理",
  meta: { title: "工单管理", icon: "workorder" },
  children: [
    {
      path: "operate",
      name: "运营工单",
      component: () => import("@/views/workordermanagement/operate/index"),
      meta: { title: "运营工单", icon: "table" },
    },
    {
      path: "repair",
      name: "运维工单",
      component: () => import("@/views/workordermanagement/repair/index"),
      meta: { title: "运维工单", icon: "tree" },
    },
  ],
};
