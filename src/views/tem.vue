<template>
  <div class="topic-cont clearfix">
    <div class="content">
      <h1>This is Index Page</h1>
      <div class="test"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      pageHeight: 0
    }
  },
  // methods: {
  //   handleWindowResize () {
  //     this.pageHeight = window.innerHeight - 130
  //   }
  // },
  // created () {
  //   this.pageHeight = window.innerHeight - 130
  //   window.addEventListener('resize', this.handleWindowResize)
  // },
  // destroyed () {
  //   window.removeEventListener('resize', this.handleWindowResize)
  // }
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
