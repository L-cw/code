<template>
  <div
    class='preview'
    v-show="show"
    @click.stop="close"
    :style="{'alignItems': type==='txt' ? '' : 'center'}">
    <img
      ref="img"
      :src="content"
      @load="handleImgLoad"
      v-if="type === 'img'">
    <div
      v-if="type === 'txt'"
      class="preview-code"
      v-hljs>
      <pre>
        <code>{{code}}</code>
      </pre>
    </div>
    <div class="preview-pdf" v-if="type === 'pdf'">
      <div class="iconfont embed-icon">&#xe7f5;</div>
      <embed
        :src="content"
        type="application/pdf"
        @click="close" />
    </div>
    <video
      :src="content"
      v-if="type === 'video'"
      class="preview-video"
      controls
      autoplay
      ref="video">
    </video>
    <audio
      :src="content"
      v-if="type === 'audio'"
      class="preview-video"
      controls
      autoplay
      ref="video">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'previewImg',
  data() {
    this.bindResize = this.handleWindowResize.bind(this)

    return {
      show: true,
      aspectRatio: 1,
      originWidth: 0,
      originHeight: 0,
      type: '',
      content: ''
    }
  },
  computed: {
    code() {
      return this.content
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
  .preview {
    display: flex;
    justify-content: center;
    // align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    overflow: auto;
    background: rgba(0, 0, 0, .8);
    .preview-pdf {
      width: 100%;
      height: 100%;
      embed {
        width: 100%;
        height: 100%;
      }
      .embed-icon {
        position: absolute;
        top: 100px;
        right: 100px;
        z-index: 9999;
        font-size: 40px;
        color: red;
        cursor: pointer;
      }
    }
    .preview-code {
      width: 80%;
    }
    .preview-video {
      width: 80%;
      // height: 500px;
    }
  }
</style>
