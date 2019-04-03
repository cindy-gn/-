<template>
  <div>
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column label="用户状态"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
    <el-pagination :current-page="pagenum" :page-size="2" background layout="prev, pager, next" :total="total"></el-pagination>
  </div>
</template>

<script>
/*eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      userList: [
        {
          username: "王小虎",
          email: "2016-05-02",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      pagenum: 1,
      total: 6
    };
  },
  methods: {
    // 加载用户数据
    loadUserList() {
      axios
        .get("http://localhost:8888/api/private/v1/users", {
          headers: {
            Authorization: localStorage.getItem("token")
          },
          params: {
            query: "",
            pagenum: 1,
            pagesize: 2
          }
        })
        .then(res => {
          console.log(res);
          this.userList = res.data.data.users;
          // 总条数
          this.total = res.data.data.total;
          // 当前页
          this.pagenum = res.data.data.pagenum;
        });
    }
  },
  created() {
    this.loadUserList();
  }
};
</script>

<style scoped lang='less'>
</style>
