<template>
  <div>
    <el-card class="box-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item :label="name1">
          <el-input
            v-model="formInline.user"
            placeholder="请输入"
            style="width: 220px"
          ></el-input>
        </el-form-item>
        <el-form-item :label="name2">
          <el-select
            v-model="formInline.region"
            placeholder="请选择"
            style="width: 220px"
          >
            <el-option
              :label="item"
              v-for="item in selectArr"
              :key="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            :style="{ backgroundColor: '#6783f7' }"
            @click="onSubmit"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },

  created() {},

  props: {
    selectArr: {
      type: Array
    },
    name1: {
      type: String,
      default: "工单编号:",
    },
    name2: {
      type: String,
      default: "工单状态:",
    },
  },

  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .el-form-item__label {
  font-weight: 400;
}
::v-deep .el-card__body {
    padding:unset
}
.box-card {
  width: 100%;
  height: 70px;
  margin: 0 0 20px;
  padding: 15px 0 0 17px;
}
</style>
