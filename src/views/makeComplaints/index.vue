<template>
  <div class="topic-cont clearfix">
    <div class="content">
      <h1 style="text-align: center;margin-bottom: 40px;">Let's start tucking up...</h1>
      <div class="test">
        <div class="input-container clearfix">
          <el-input class="input" v-model="complaints" placeholder="自由自在，一吐为快，就是这么任性..."></el-input>
          <el-button class="btn" type="primary" @click="handleSubmit" icon="el-icon-edit">安排</el-button>
          <p class="tag">
            <el-tag>有搞头</el-tag>
            <el-tag type="success">有点东西</el-tag>
            <el-tag type="info">嗯...</el-tag>
            <el-tag type="warning">吐一波？</el-tag>
            <el-tag type="danger">low</el-tag>
          </p>
        </div>
        <!-- comments -->
        <div class="comments">
          <div class="comment-item" v-for='item in info' :key="item.name">
            <div class="item-top">
              <img class="logo" src="../../../static/images/logo.jpeg" alt="logo">
              <span class="name">{{item.name}}</span>
              <span class="time">{{item.time}}</span>
            </div>
            <div class="item-des">
              <p>{{item.des}}</p>
              <!-- Reply -->
              <div>
                  <div class="item-top comment" v-for="c in item.comments" :key="c.id + c.name">
                    <img class="logo" src="https://qlogo1.store.qq.com/qzone/691876272/691876272/50?1513216141" alt="logo">
                    <span class="name">{{c.name}}</span>
                    <p class="time">评论：{{c.des}}</p>
                    <i class="iconfont time" @click="handleReply(c.id)">&#xe61a;</i>
                  </div>

                  <div class="item-top replay" v-for="r in item.replays" :key="r.name + r.id">
                    <img class="logo" src="../../../static/images/logo.jpeg" alt="logo">
                    <span class="name">{{r.name}}</span>
                    <p class="time">回复<span>{{r.replayName}} ：</span> {{r.des}}</p>
                    <i class="iconfont time" @click="handleReply(r.id)">&#xe61a;</i>
                  </div>
              </div>
            </div>
            <div class="icon-box">
              <i class="el-icon-edit icon" @click="addComment(item.id)"> 添加评论</i>
              <i class="iconfont" @click="handleFollow(item.id)">{{item.follow ? '&#xe60c;' : '&#xe618;'}}</i>
              <span>{{item.followCount}} 赞</span>
              <i class="el-icon-share icon"> 分享</i>
              <i class="el-icon-view icon"> {{item.viewed}}人看过</i>
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
      complaints: '',
      info: [{
        id: 1,
        name: 'jovi',
        time: '1小时前',
        des: 'Vue.js 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。',
        follow: false,
        followCount: 2,
        viewed: 20,
        comments: [{
          id: 3,
          name: 'gily',
          des: '你是不是在闹笑呢？'
        }],
        replays: [{
          id: 1,
          name: 'jovi',
          des: '又说这话！',
          replayName: 'gily'
        }]
      }, {
        id: 2,
        name: 'leo',
        time: '2小时前',
        des: 'What are you nonshalei ?',
        follow: false,
        followCount: 0,
        viewed: 11,
        comments: [],
        replays: []
      }]
    }
  },
  methods: {
    handleSubmit () {
      if (!this.complaints) {
        this.showMessage('warning', '必须安排点什么！')
        return
      }
      var obj = {
        name: 'dell',
        time: 'now',
        des: this.complaints
      }
      this.info.unshift(obj)
      this.showMessage('success', '必须安排的明明白白的!')
    },
    addComment (id) {
      this.$prompt('请输入评论内容', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: '',
        inputErrorMessage: ''
      }).then(({value}) => {
        var obj = {
          id: 4,
          name: 'dell',
          des: value
        }
        this.info.forEach((item) => {
          if (item.id === id) {
            item.comments.unshift(obj)
          }
        })
        this.showMessage('success', '安排')
      })
    },
    handleReply (id) {
      this.$prompt('请输入回复内容', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: '',
        inputErrorMessage: ''
      }).then(() => {
        this.showMessage('success', '安排')
      })
    },
    handleFollow (id) {
      this.info.forEach((item) => {
        if (id === item.id) {
          if (item.follow) {
            item.follow = false
            item.followCount--
          } else {
            item.follow = true
            item.followCount++
          }
        }
      })
    },
    showMessage (type, value) {
      // type: success/warning/info/error
      this.$message({
        type: type,
        message: value
      })
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
        height: 110px;
        .tag {
          line-height: 60px;
          text-align: center;
        }
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
    padding: 10px 0;
  }
  .item-top {
    height: 46px;
    border-bottom: 1px solid #ddd;
  }
  .comment {
    padding: 10px 20px;
    border-bottom: 0;
  }
  .replay {
    padding: 10px 20px;
    border-bottom: 0;
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
    padding: 15px 10px;
    min-height: 50px;
    _height: 50px;
    background: #fff;
  }
  .icon-box {
    margin-top: 10px;
  }
  .icon {
    padding: 0 10px;
  }
</style>
