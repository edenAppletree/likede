<template>
  <div class="navbar">
    <!-- 左侧 -->
    <div class="logo">
      <img src="../../assets/logo2.png" />
    </div>
    <!-- 右侧 -->
    <div class="right-menu">
      <img :src="$store.state.user.userInfo.image" />
      <span class="username">欢迎您，{{$store.state.user.userInfo.loginName}}</span>
      <el-dropdown class="avatar-container" >
        <div class="avatar-wrapper" @click="logout">
          <span>退出</span>
          <i class="el-icon-caret-bottom" />
        </div>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  created() {
    this.$store.dispatch("app/toggleSideBar");
  },
  methods: {
    async logout() {
      this.$router.push('/login');
      await this.$store.dispatch("user/logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  background: url("../../assets/headbg.png") no-repeat;
  background-size: cover;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .logo {
    float: left;
    width: 88px;
    height: 36px;
    position: relative;
    left: 20px;
    top: 7px;
    img {
      width: 100%;
    }
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    img {
      position: relative;
      top: 8px;
      width: 35px;
      height: 35px;
      margin-right: 10px;
    }
    .username {
      font-size: 16px;
      color: #fff;
      margin-right: 20px;
    }
    .avatar-container {
      margin-right: 30px;
      color: #fff;
      cursor: pointer;
      span {
        font-size: 16px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        top: 20px;
        font-size: 12px;
      }
    }
  }
}
</style>
