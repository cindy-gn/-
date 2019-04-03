
<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="8">
          <img src="../../assets/images/logo.png" alt>
        </el-col>
        <el-col :span="8">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col :span="8" class="col">
          <span>黑马前端35期</span>
          <a @click.prevent="logout" href="#">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- Aside -->

        <el-menu
          :router="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="users">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="roles">角色列表</el-menu-item>
              <el-menu-item index="rights">权限列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <!-- Main -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      // 阻止a的默认跳转  prevent时间修饰符 点击出现弹框确认是否退出
      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!',
            duration: 800
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出',
            duration: 800
          })
        })
    },
    handleOpen (key, keyPath) {
      console.log('打开了')
    },
    handleClose (key, keyPath) {
      console.log('关闭了')
    }
  }
}
</script>

<style scoped lang='less'>
.el-container {
  height: 100%;
  .el-header {
    background: #b3c1cd;
    padding: 0;
    height: 60px;
    h1 {
      color: #fff;
      font-size: 26px;
      text-align: center;
      line-height: 60px;
    }
    .col {
      text-align: right;
      line-height: 60px;
      padding-right: 20px;
      a {
        color: #daa520;
        text-decoration: none;
      }
    }
  }
}
.el-aside {
  background: #545c64;
}
.el-main {
  background: #eaeef1;
}
</style>
