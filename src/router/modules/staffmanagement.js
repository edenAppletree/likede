import Layout from "@/layout";
export default {
  path: "/staffmanagement",
  component: Layout,
  redirect: "/staffmanagement/staff",
  name: "人员管理",
  meta: {
    title: "人员管理",
    icon: "staff",
  },
  children: [
    {
      path: "staff",
      component: () => import("@/views/staffmanagement/staff/index"), // Parent router-view
      name: "人员列表",
      meta: { title: "人员列表" },
    },
    {
      path: "singleworkcount",
      component: () => import("@/views/staffmanagement/singleworkcount/index"),
      name: "人效统计",
      meta: { title: "人效统计" },
    },
    {
      path: "worknumber",
      component: () => import("@/views/staffmanagement/worknumber/index"),
      name: "工作量列表",
      meta: { title: "工作量列表" },
    },
  ],
};
