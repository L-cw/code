<template>
  <div class="topic-cont clearfix" :style="'min-height:'+pageHeight+'px;'">
    <div class="content">
      <div class="topic-left"></div>
      <div class="topic-right"></div>
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
  methods: {
    handleWindowResize () {
      this.pageHeight = window.innerHeight - 130
    }
  },
  created () {
    this.pageHeight = window.innerHeight - 130
    window.addEventListener('resize', this.handleWindowResize)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleWindowResize)
  }
}
</script>

<style scoped lang='less'>
  @import "../assets/less/base.less";
  .topic-cont {
    padding: 20px 0;
    background-color: @bg-default;
  }
</style>
