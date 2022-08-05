<template>
  
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" size='medium'>
      <el-table-column type="index" label="序号" width="100"> </el-table-column>
      <el-table-column property="taskCode" label="工单编号"> </el-table-column>
      <el-table-column property="innerCode" label="设备编号"> </el-table-column>
      <el-table-column property="taskType.typeName" label="工单类型">
      </el-table-column>
      <el-table-column property="createType" label="工单方式"> </el-table-column>
      <el-table-column
        property="taskStatusTypeEntity.statusName"
        label="工单状态"
      >
      </el-table-column>
      <el-table-column property="userName" label="运营人员"> </el-table-column>
      <el-table-column property="createTime" label="创建日期">
      </el-table-column>
      <el-table-column  label="操作">
        <template>
          <span :style="{color:'blue'}">查看详情</span>
        </template>
      </el-table-column>
    </el-table>

</template>

<script>
import moment from "moment";
export default {
  data() {
    return {};
  },

  created() {
  },

  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },

  computed: {
    time() {
      moment(this.tableData.createTime).format("YYYY.MM.DD HH:mm:ss");
    },
  },

  methods: {
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 0) {
          return 'head-row';
        } 
        return '';
      }
    },
  
};
</script>

<style scoped lang="scss">

.el-table .head-row {
  background-color: #f4f6fa;
}
</style>
