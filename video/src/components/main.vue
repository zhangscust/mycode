<template>
  <el-container>
    <el-drawer
      title="人人中心"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :show-close="false"
    >
      <div>用户名</div>
      <div>我的视频数量</div>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
      </el-upload>
    </el-drawer>
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
            <el-button @click="drawer = true" type="success" icon="el-icon-user-solid" circle></el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(n,inx) in advList" :key="inx">
          <img :src="n" />
        </el-carousel-item>
      </el-carousel>
      <div class="hotWord">
        <i class="el-icon-s-data"></i>今日热门
      </div>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>

                <el-popover>
                  <video :src="tabList" controls="controls"></video>
                  <el-button slot="reference">喜欢</el-button>
                </el-popover>
              </div>
            </div>
          </el-card>
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
      tabList: "/video/static/1.mp4",
      currentDate: new Date(),
      drawer: false,
      direction: "rtl",
      advList: [
        require("../assets/banner1.jpg"),
        require("../assets/banner2.jpg"),
        require("../assets/banner3.jpg"),
        require("../assets/banner4.jpg")
      ]
    };
  },
  // created() {
  //   axios.post("http://localhost:3000/api/video").then(_d => {
  //     console.log(_d.data);
  //     header("Access-Control-Allow-Origin: *");
  //     this.tabList = _d.data;
  //   });
  // },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style>
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-drawer div {
  margin-left: 25px;
}
.el-drawer .el-upload {
  margin-left: 5px;
}
</style>