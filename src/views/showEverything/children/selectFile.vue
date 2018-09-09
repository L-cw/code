<template>
  <el-button
    type="primary"
    size="small"
    class="upload-btn"
    @click="onSelectFile">
    <input
      ref="fileInput"
      type="file"
      class="upload-btn__hidden"
      @change="onFileInputChange">
    选择文件
  </el-button>
</template>

<script>
export default {
  name: 'selectFile',

  methods: {
    onSelectFile() {
      const event = new MouseEvent('click')
      this.$refs.fileInput.dispatchEvent(event)
    },

    onFileInputChange() {
      const file = this.$refs.fileInput.files[0]
      if (typeof this.$attrs['on-change'] === 'function') {
        this.$attrs['on-change'].call(this.$parent, file)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .upload-btn {
    position: relative;
      cursor: pointer;
    overflow: hidden;
    .upload-btn__hidden {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: none;
      cursor: default!important;
    }
  }
</style>
