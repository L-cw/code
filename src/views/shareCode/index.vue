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
      }
    }
  },
  methods: {
    onSubmit () {}
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
  }
</style>
