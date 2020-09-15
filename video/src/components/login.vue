<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="6">
          <div class="grid-content">
            <i class="el-icon-video-camera-solid" style="line-heoght:60px">视频，你我的点滴</i>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <el-button round>
              <router-link to="/main">游客</router-link>
            </el-button>
            <el-button round>
              <router-link to="/login">登录</router-link>
            </el-button>
            <el-button type="danger" round>
              <router-link to="/register">注册</router-link>
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="3">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="demo-image__placeholder">
              <div class="banner">
                <div class="b1">上传你的视频</div>
                <div class="b2">一键上传，好玩的视频社区</div>
              </div>
              <div class="block">
                <el-image :src="src"></el-image>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-tabs v-model="activeName" @tab-click.prevent="handleClick">
              <el-tab-pane label="登录" name="first">
                <el-form status-icon label-width="100px" :label-position="labelPosition">
                  <el-form-item label="用户名">
                    <el-input
                      v-model="userName"
                      name="用户名"
                      placeholder="用户名"
                      :rules="[{ required: true, message: '请填写用户名' }]"
                    ></el-input>
                  </el-form-item>
                  <el-form-item for="password" label="密码">
                    <el-input
                      type="password"
                      autocomplete="off"
                      placeholder="请输入密码"
                      v-model="password"
                      id="password"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" native-type="submit">
                      <router-link to="/login">登录</router-link>
                    </el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="注册" name="second">注册</el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content"></div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      联系我
      <el-divider direction="vertical"></el-divider>170521227&nbsp;张帅
    </el-footer>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      src: require("../assets/data.png"),
      activeName: "first",
      labelPosition: "left",
      userName: "",
      password: ""
    };
  },
  methods: {
    //登录
    onSubmit() {
      var _this = this;
      let data = {
        userName: _this.userName,
        userPassword: _this.password
      };
      this.axios
        .get("/api/login", {
          params: data
        })
        .then(res => {
          console.log(res);
          var code = res.data.statusCode;
          var msg = res.data.msg;
          if (code == 200) {
            //登录成功，直接跳转首页
            this.$router.push("/main");
          } else {
            //这里用的vant框架，弹出框，错误提示
            alert({ msg }).then(() => {
              // on close
            });
          }
        });
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-header {
  text-align: center;
  line-height: 50px;
  font-size: 22px;
  color: rgb(114, 114, 114);
  border: none;
  border-bottom: 1px solid #e7e7e7;
}
.el-main {
  margin: 50px;
}
.el-footer {
  padding-top: 20px;
  height: 150px;
  background: #fff;
  text-align: center;
  color: rgb(114, 114, 114);
  border: none;
  border-top: 1px solid #e7e7e7;
}
.el-image {
  height: 120%;
  width: 120%;
}
.banner {
  height: 100px;
}
.banner .b1 {
  font-size: 50px;
  text-align: center;
  padding-bottom: 20px;
}
.banner .b2 {
  font-size: 16px;
  text-align: center;
  padding-bottom: 14px;
}
</style>
