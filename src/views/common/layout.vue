<template>
  <div class="layout" :style="'min-height:' + pageHeight + 'px;'">
    <page-header></page-header>
    <router-view/>
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
  }
</style>
