<template>
  <div class="bg">
    <div class="login-container">
      <div class="logo">
        <img src="../../assets/logo.png">
      </div>
        <div class='form'>
          <el-form>
          <el-form-item >
            <el-input placeholder='admin' prefix-icon='el-icon-mobile-phone' class="ipt"/>
          </el-form-item>
          <el-form-item >
            <el-input placeholder='111111' prefix-icon='el-icon-lock' suffix-icon='el-icon-view'/>
          </el-form-item>
          <el-form-item >
            <el-input placeholder='请输入验证码' prefix-icon='el-icon-warning-outline'>
            <template #suffix>
              <div class="yanzheng">
                <img src="../../assets/yanzheng.png">
              </div>
            </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button>登录</el-button>
          </el-form-item>
        </el-form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang='less'>
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

/deep/ .el-input__inner{
  padding: 24px 30px ;
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
/deep/ .el-button {
  width: 100%;
  height: 52px;
  background: linear-gradient(262deg,#2e50e1,#6878f0);
  color: #fff;
  border-radius: 4px;
}
/deep/ .el-input__icon {
  font-size: 16px;
}
</style>
