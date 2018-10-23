<template>
  <div class="topic-cont clearfix">
    <div class="content">
      <h1 style="text-align: center;margin-bottom: 40px;">Let's start tucking up...</h1>
      <div class="test">
        <div class="input-container clearfix">
          <el-input class="input" v-model="complaints" placeholder="自由自在，一吐为快，就是这么任性..."></el-input>
          <el-button class="btn" type="primary">安排!</el-button>
        </div>
        <!-- comments -->
        <div class="comments">
          <div class="comment-item">
            <div class="item-top">
              <img class="logo" src="../../../static/images/logo.jpeg" alt="logo">
              <span class="name">jovi</span>
              <span class="time">1小时前</span>
            </div>
            <div class="item-des">
              不知道印度的情况，但是我印象中咱们国家在美顶尖学校留学的，是有回去做村官等的，而且我认为做贡献也不一定要局限于地理位置。
理解你的理想主义，至于人本自私的结论，我认为只要不伤天害理，通过自己的勤奋努力，每个人都有追求自己想要的幸福生活的权利，以统一的标准要求大家就是道德绑架了，毕竟一个地方贫瘠的问题不应该由个体来承担解决。
            </div>
          </div>
        </div>
        
        <div class="comment-item">
            <div class="item-top">
              <img class="logo" src="../../../static/images/logo.jpeg" alt="logo">
              <span class="name">jovi</span>
              <span class="time">1小时前</span>
            </div>
            <div class="item-des">
              不知道印度的情况，但是我印象中咱们国家在美顶尖学校留学的，是有回去做村官等的，而且我认为做贡献也不一定要局限于地理位置。
理解你的理想主义，至于人本自私的结论，我认为只要不伤天害理，通过自己的勤奋努力，每个人都有追求自己想要的幸福生活的权利，以统一的标准要求大家就是道德绑架了，毕竟一个地方贫瘠的问题不应该由个体来承担解决。
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      pageHeight: 0,
      complaints: ''
    }
  }
}
</script>

<style scoped lang='less'>
  @import "../../assets/less/base.less";
  .topic-cont {
    padding: 20px 0;
    min-height: calc(100vh - 130px);
    background-color: @bg-default;
    .test {
      width: 1180px;
      height: 2000px;
      .input-container {
        .input {
          width: 90%;
          margin-right: 2%;
          float: left;
        }
        .btn {
          float: right;
        }
      }
    }
  }
  .comments {}
  .comment-item {
    padding: 10px;
  }
  .item-top {
    height: 46px;
    border-bottom: 1px solid #ddd;
  }
  .logo {
    display: inline-block;
    width: 44px;
    float: left;
    border-radius: 44px;
  }
  .name {
    float: left;
    line-height: 44px;
    margin-left: 14px;
  }
  .time {
    float: left;
    line-height: 44px;
    margin-left: 14px;
  }
  .item-des {
    padding: 10px 0;
  }
            
</style>
