<template>
  <div class="main">
    <FormHeader :selectArr="selectArr"></FormHeader>
    <el-card class="box-card">
      <button class="btn create">
        <span class="el-icon-circle-plus-outline"></span>新建
      </button>
      <button class="btn fit">工单配置</button>
      <FormMain :tableData="operateList || []"></FormMain>
      <div class="foot">
        <span
          >共{{ totalCount }}条记录，第{{ pageIndex }}/{{ totalPage }}页</span
        >
        <div>
          <button ref="prepage">上一页</button>
          <button ref="nextpage">下一页</button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import FormHeader from "@/components/FormHeader";
// import Button from '@/components/Button'
import FormMain from "@/components/FormMain";
import { getOpreateInfo } from "@/api/workorder";

export default {
  data() {
    return {
      totalCount: "",
      totalPage: "",
      pageSize: "",
      pageIndex: "",
      operateList: [],
      selectArr: ["代办", "进行", "取消", "完成"],
    };
  },
  components: {
    FormHeader,
    FormMain,
  },
  created() {
    this.getOpreateInfo();
  },

  methods: {
    // 获取运营工单数据
    async getOpreateInfo() {
      const { data } = await getOpreateInfo();
      this.operateList = data.currentPageRecords;
      this.totalCount = data.totalCount;
      this.totalPage = data.totalPage;
      this.pageSize = data.pageSize;//10
      this.pageIndex = data.pageIndex;
      // console.log(data);
      if (this.pageIndex <= 1) {
        this.$refs.prepage.disabled = true;
      } else if(this.pageIndex===this.totalCount) {
        this.$refs.nextpage.disabled = true;
      }else {
         this.$refs.prepage.disabled = false;
         this.$refs.nextpage.disabled = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  padding: 20px;
  max-width: calc(100vh-76px);
}
::v-deep .el-card__body {
  padding: unset;
}
.box-card {
  width: 100%;
  margin: 0 0 20px;
  padding: 15px 0 0 17px;
}
.btn {
  width: 90px;
  height: 40px;
  line-height: 40px;
  margin: 10px 10px 20px 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}
.create {
  color: #fff;
  background-color: #ed713c;
  span {
    margin-right: 5px;
  }
}
.fit {
  color: #635b57;
  background: #faf4f0;
}
.foot {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 10px 0 30px 0;
  span {
    font-size: 18px;
    color: #dce1e9;
  }
  button {
    margin-left: 30px;
    width: 70px;
    height: 32px;
    background-color: #d6ddf6;
    color: #606266;
    border: none;
    font-size: 14px;
  }
}
</style>
