import Layout from "@/layout";
export default {
  path: "/equipmentmanagement",
  component: Layout,
  redirect: "/equipmentmanagement/equipment",
  name: "设备管理",
  meta: {
    title: "设备管理",
    icon: "equipment",
  },
  children: [
    {
      path: "equipment",
      component: () => import("@/views/equipmentmanagement/equipment/index"), // Parent router-view
      name: "设备管理",
      meta: { title: "设备管理" },
    },
    {
      path: "equipmentStatus",
      component: () =>
        import("@/views/equipmentmanagement/equipmentStatus/index"),
      name: "设备状态",
      meta: { title: "设备状态" },
    },
    {
      path: "equipmentType",
      component: () =>
        import("@/views/equipmentmanagement/equipmentType/index"),
      name: "设备类型管理",
      meta: { title: "设备类型管理" },
    },
  ],
};
