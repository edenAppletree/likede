<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        text-color="#000"
        background-color="#fff"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
        menu-trigger="click"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
  },
};
</script>
<style scoped lang="scss">
.sidebar-container {
  height: 100%;
  background-color: #fff;
}
// #app .sidebar-container ::v-deep.submenu-title-noDropdown:hover,
// #app .sidebar-container ::v-deep.el-submenu__title:hover {
//   background-color: #fff !important;
// }
// #app .sidebar-container ::v-deep.nest-menu .el-submenu > .el-submenu__title,
// #app .sidebar-container ::v-deep.el-submenu .el-menu-item {
//   background-color: #fff !important;
// }
</style>
