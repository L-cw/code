<template>
  <div
    class='preview-img'
    v-show="show"
    @click.stop="close">
    <img :src="url" @load="handleImgLoad" ref="img">
  </div>
</template>

<script>
export default {
  name: 'previewImg',
  data() {
    this.bindResize = this.handleWindowResize.bind(this)

    return {
      url: '',
      show: true,
      aspectRatio: 1,
      originWidth: 0,
      originHeight: 0
    }
  },
  methods: {
    close() {
      this.show = false
      this.$el.parentNode.removeChild(this.$el)
    },
    handleImgLoad(e) {
      this.originWidth = this.$refs.img.width
      this.originHeight = this.$refs.img.height
      this.aspectRatio = this.originWidth / this.originHeight
      window.addEventListener('resize', this.bindResize)
    },
    handleWindowResize(e) {
      if (window.innerWidth >= this.originWidth && window.innerHeight >= this.originHeight) {
        return
      }

      let winAspectRatio = window.innerWidth / window.innerHeight
      if (winAspectRatio < this.aspectRatio) {
        this.$refs.img.width = window.innerWidth
        this.$refs.img.height = window.innerWidth / this.aspectRatio
      } else {
        this.$refs.img.height = window.innerHeight
        this.$refs.img.width = window.innerHeight * this.aspectRatio
      }
    }
  },
  mounted() {
    window.removeEventListener('resize', this.bindResize)
  }
}
</script>

<style scoped lang="less">
  .preview-img {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, .8);
  }
</style>
