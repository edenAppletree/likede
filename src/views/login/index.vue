<template>
  <div class="bg">
    <div class="login-container">
      <div class="logo">
        <img src="../../assets/logo.png" />
      </div>
      <div class="form">
        <el-form
          :model="loginForm"
          :rules="loginRules"
          ref="loginForm"
          class="loginForm"
        >
          <el-form-item prop="loginName">
            <el-input
              placeholder="请输入账号"
              prefix-icon="el-icon-mobile-phone"
              class="ipt"
              v-model="loginForm.loginName"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="loginForm.password"
              :type="passwordType"
              ref="password"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon
                :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
              />
            </span>
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              placeholder="请输入验证码"
              prefix-icon="el-icon-warning-outline"
              v-model="loginForm.code"
            >
              <template #suffix>
                <div class="yanzheng" @click="changeImg">
                  <img :src="imageCodeUrl" />
                </div>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getImageCode, login } from "@/api/user";
export default {
  data() {
    return {
      imageCodeUrl: "",
      passwordType: "password",
      loginForm: {
        loginName: "admin",
        password: "admin",
        code: "",
        clientToken: "",
        loginType: 0,
      },
      loginRules: {
        loginName: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [{ min: 5, max: 8, message: "请输入密码", trigger: "blur" }],
        code: [
          {
            type: "string",
            required: true,
            message: "请输入验证码",
            trigger: "",
          },
        ],
      },
    };
  },
  created() {
    this.getImageCode();
  },
  methods: {
    // 密码框
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    // 获取图片验证码
    async getImageCode() {
      try {
        this.loginForm.clientToken = Math.floor(Math.random() * 100);
        const res = await getImageCode(this.loginForm.clientToken);
        this.imageCodeUrl = URL.createObjectURL(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
    // 验证码点击切换
    changeImg() {
      this.getImageCode();
    },
    // 点击登录
    async login() {
      const {
        data: { token },
      } = await login(this.loginForm);
      // 保存token
      this.$store.dispatch("user/getToken", token);
      // 路由跳转页面
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.bg {
  width: 100%;
  height: 100%;
  background: url("../../assets/background.png") no-repeat;
  background-size: cover;
}
.login-container {
  position: absolute;
  width: 518px;
  height: 388px;
  top: 50%;
  left: 50%;
  margin-top: -199px;
  margin-left: -259px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
}
.logo {
  position: absolute;
  width: 96px;
  height: 96px;
  left: 50%;
  right: 50%;
  margin-left: -48px;
  margin-top: -48px;
}
.logo img {
  width: 100%;
  overflow: hidden;
}
.form {
  padding: 76px 35px 0;
}

::v-deep .el-input__inner {
  padding: 24px 30px;
}
.yanzheng {
  position: relative;
  width: 130px;
  height: 50px;
  // background-color: red;
  right: -5px;
  img {
    width: 100%;
  }
}
::v-deep .el-button {
  width: 100%;
  height: 52px;
  background: linear-gradient(262deg, #2e50e1, #6878f0);
  color: #fff;
  border-radius: 4px;
}
::v-deep.el-input__icon {
  font-size: 16px;
}
.show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: darkgray;
  cursor: pointer;
  user-select: none;
}
</style>
