import Layout from "@/layout";
export default {
  path: "/pointmanagement",
  component: Layout,
  redirect: "/pointmanagement/area",
  name: "点位管理",
  meta: {
    title: "点位管理",
    icon: "point",
  },
  children: [
    {
      path: "area",
      component: () => import("@/views/pointmanagement/area/index"), // Parent router-view
      name: "区域管理",
      meta: { title: "区域管理" },
    },
    {
      path: "point",
      component: () => import("@/views/pointmanagement/point/index"),
      name: "点位管理",
      meta: { title: "点位管理" },
    },
    {
      path: "partners",
      component: () => import("@/views/pointmanagement/partners/index"),
      name: "合作商管理",
      meta: { title: "合作商管理" },
    },
  ],
};
