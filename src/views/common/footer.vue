<template>
  <div class="page-footer">
    <div class="page-footer-con content">Copyright © 2018. All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'pagefooter'
}
</script>

<style lang="less" scoped>
  @import "../../assets/less/base.less";
  .page-footer {
    height: 70px;
    background-color: #303353;
    .page-footer-con {
      line-height: 70px;
      font-size: @f-14;
      text-align: center;
      color: @color-white;
    }
  }
</style>
