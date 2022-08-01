<template>
  <div>
    <div class="fixed-header">
      <navbar />
    </div>
    <div class="main-container">
      <sidebar class="sidebar-container" />
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
  },

  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  width: 100%;
}
.main-container {
  position: relative;
  top: 50px;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: pink;
}
 #app .sidebar-container ::v-deep {
  top: 50px;
  background-color: #fff; 
}
</style>
