<template>
  <div class="topic-cont clearfix">
    <div class="content">
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang='less'>
  @import "../assets/less/base.less";
  .topic-cont {
    padding: 20px 0;
    min-height: calc(100vh - 130px);
    background-color: @bg-default;
    .test {
      width: 1180px;
      height: 2000px;
    }
  }
</style>
