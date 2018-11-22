<template>
  <div class="share-eve">
    <share-upload></share-upload>
  </div>
</template>

<script>
import shareUpload from './children/upload'

export default {
  name: 'share-eve',
  components: {
    shareUpload
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/base.less";
  .share-eve {
    width: 1180px;
    min-height: calc(100vh - @header-height - @footer-height);
    margin: 0 auto;
  }
</style>
