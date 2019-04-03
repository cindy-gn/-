<template>
  <el-row class="row1" type="flex" justify="center" align="middle">
    <el-col class="col1" :span="8">
      <el-form class="form" :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="startLogin()">登录</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    startLogin() {
      this.$refs.ruleForm.validate(async valid => {
        console.log(valid); // 如果返回true就是登录成功
        // 如果检验不成功就返回
        if (!valid) {
          return;
        }
        // 如果校验成功 就开始登录
        let URL = "http://localhost:8888/api/private/v1/login";
        let res = await axios.post(URL, this.ruleForm);
        // console.log(res);
        // 登录的时候把token存储到本地
        if (res.data.meta.status === 200) {
          localStorage.setItem("token", res.data.data.token);
          // 1.提示登录成功
          this.$message({
            message: res.data.meta.msg,
            type: "success",
            duration: 800
          });
          // 跳转到 home页面
          this.$router.push("/home");
        } else {
          this.$message({
            message: res.data.meta.msg,
            type: "error",
            duration: 800
          });
        }
      });
      // axios
      //   .post("http://localhost:8888/api/private/v1/login", this.ruleForm)
      //   .then(res => {
      //   console.log(res);
      //   // 登录的时候把token存储到本地
      //   if (res.data.meta.status === 200) {
      //   localStorage.setItem('token',res.data.data.token)
      //     // 1.提示登录成功
      //     this.$message({
      //       message: res.data.meta.msg,
      //       type: "success",
      //       duration: 800
      //     });
      //     // 跳转到 home页面
      //     this.$router.push("/home");
      //   } else {
      //     this.$message({
      //       message: res.data.meta.msg,
      //       type: "error",
      //       duration: 800
      //     });
      //   }
      // });
      // console.log('登录成功')
      // });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  }
};
</script>

<style scoped lang='less'>
.row1 {
  height: 100%;
  background: #2d434c;
}
.col1 {
  background: #fff;
  border-radius: 20px;
  padding: 25px 40px;
}
</style>
