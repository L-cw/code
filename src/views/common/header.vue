<template>
  <div class="page-header">
    <div class="content">
      <li class="nav-item fl">
        <router-link to="/">首页</router-link>
      </li>
      <li class="nav-item fl">
        <router-link to="/shareCode">代码分享</router-link>
      </li>
      <li class="nav-item fl">
        <router-link to="/showEverything">文件上传</router-link>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageheader'
}
</script>

<style lang="less" scoped>
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1999;
    width: 100%;
    height: 60px;
    transition: all .5s ease 0s;
    box-shadow: 0 0 10px #ccc;
    background-color: #fff;
    .nav-item {
      padding: 20px 0;
      margin-right: 20px;
      a {
        line-height: 20px;
      }
    }
  }
</style>
