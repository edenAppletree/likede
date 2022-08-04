import Layout from "@/layout";
export default {
  path: "/goodsmanagement",
  component: Layout,
  redirect: "/goodsmanagement/goodsType",
  name: "商品管理",
  meta: {
    title: "商品管理",
    icon: "goods",
  },
  children: [
    {
      path: "goodsType",
      component: () => import("@/views/goodsmanagement/goodsType/index"), // Parent router-view
      name: "商品类型",
      meta: { title: "商品类型" },
    },
    {
      path: "goods",
      component: () => import("@/views/goodsmanagement/goods/index"),
      name: "商品管理",
      meta: { title: "商品管理" },
    },
  ],
};
