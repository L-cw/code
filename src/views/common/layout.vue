<template>
  <div class="layout" :style="'min-height:' + pageHeight + 'px;'">
    <page-header></page-header>
    <div class="layout-content">
      <router-view/>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from './header.vue'
import PageFooter from './footer.vue'
export default {
  name: 'layout',
  data () {
    return {
      pageHeight: window.innerHeight
    }
  },
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/less/base.less";

  .layout {
    padding-top: @header-height;
    .layout-content {
      min-height: calc(100vh - @header-height - @footer-height);
    }
  }
</style>
