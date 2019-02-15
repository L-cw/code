<template>
  <div class="share-cont clearfix">
    <div class="content">
      <div class="search-cont">
        <el-form :inline="true" :model="searchForm" class="demo-form-inline">
          <el-form-item label="快捷搜索">
            <el-input v-model="searchForm.content" placeholder="请输入搜索内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="share-tab">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane name="js">
              <span slot="label" class="share-tab-item"><i class="el-icon-tickets"></i> js</span>
            </el-tab-pane>
            <el-tab-pane name="css">
              <span slot="label" class="share-tab-item"><i class="el-icon-tickets"></i> css</span>
              <a class="main-box" target="_blank" href="/share-css/base.html">base.less</a>
              <a class="main-box" target="_blank" href="/share-css/media-query-css.html">media-query-css.less</a>
              <a class="main-box" target="_blank" href="/share-css/reset.html">reset.less</a>
              <a class="main-box" target="_blank" href="/share-css/variable.html">variable.less</a>
              <a class="main-box" target="_blank" href="/share-css/browser-scroller-style.html">browser-scroller-style.less</a>
            </el-tab-pane>
            <el-tab-pane name="component">
              <span slot="label" class="share-tab-item"><i class="el-icon-tickets"></i> Component</span>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sharecode',
  data () {
    return {
      searchForm: {
        content: ''
      },
      activeName: 'js'
    }
  },
  methods: {
    getAllCode () {
      // this.$http.post()
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    onSubmit () {}
  },
  created () {
    this.getAllCode()
  }
}
</script>

<style scoped lang='less'>
  @import "../../assets/less/base.less";
  .share-cont {
    padding: 20px 0;
    min-height: calc(100vh - 130px);
    background-color: @bg-default;
    .search-cont {
      width: 100%;
    }
    .share-tab {
      .share-tab-item {
        min-width: 100px;
        padding: 0 10px;
      }
      .main-box{
        display: block;
        background-color: @bg-white;
        border-radius: @box-radius;
        padding: @p-w;
        margin-bottom: @p-w;
        transition: all .5s;
        cursor: pointer;
        &:hover {
          transform: translate3d(0, -2px, 3px);
          box-shadow: 0 2px 12px 0 rgba(7, 7, 7, .13);
          color: #00d080;
        }
      }
    }
  }
</style>
