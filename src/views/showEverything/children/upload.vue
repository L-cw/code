<template>
  <div class="upload">
    <div
      class="upload__float-btn"
      :class="{'rotate180': uploadShow}"
      :style="floatBtnPos"
      @mousedown.stop.prevent="onMousedown"
      @mouseup.stop.prevent="onMouseup">
    </div>

    <div
      class="upload-wrapper"
      v-show="uploadShow">
      <div class="upload-wrapper__btns">
        <select-file :on-change="onFileChange"></select-file>
        <el-button type="success" size="small">上传</el-button>
      </div>
      <div class="upload-list">
        <upload-item
          class="upload-list-item"
          v-for="fileData in fileDatas"
          :key="fileData.name"
          :fileName="fileData.name"
          :fileType="fileData.type"
          :ext="fileData.ext"
          :file="fileData.result"
          :complete="fileData.complete"
          @abort="handleAbort">
        </upload-item>
      </div>
    </div>
  </div>
</template>

<script>
import selectFile from './selectFile'
import uploadItem from './uploadItem'
import PreviewableFile from '../PreviewableFile'

export default {
  name: 'share-upload',

  data() {
    this.bindMousemove = this.onMousemove.bind(this)

    return {
      complete: 0,
      fileDatas: [],
      floatBtnPos: {
        top: '80px',
        left: '40px'
      },
      hasMoved: false,
      uploadShow: false,
      uploadHei: 0
    }
  },

  methods: {
    handleAbort() {
      this.previewFile.emit('abort')
    },

    onFileChange(file) {
      this.previewFile = new PreviewableFile(file)

      this.previewFile.on('loadstart', (data, e) => {
        data.complete = 0
        this.fileDatas.push(data)
      })
      this.previewFile.on('progress', (data, e) => {
        data.complete = e.loaded / e.total
      })
      this.previewFile.on('load', e => console.log(2))

      this.previewFile.generate()
    },

    onMousedown(e) {
      this.mdOffsetX = e.offsetX
      this.mdOffsetY = e.offsetY
      document.body.addEventListener('mousemove', this.bindMousemove)
    },

    onMouseup(e) {
      // this.uploadShow = this.hasMoved ? this.uploadShow : !this.uploadShow
      this.uploadShow = !this.uploadShow
      this.hasMoved = false
      document.body.removeEventListener('mousemove', this.bindMousemove)
    },

    onMousemove(e) {
      e.preventDefault()
      this.hasMoved = true
      this.floatBtnPos = {
        top: e.pageY - this.mdOffsetY + 'px',
        left: e.pageX - this.mdOffsetX + 'px'
      }
    }
  },

  components: {
    selectFile,
    uploadItem
  }
}
</script>

<style scoped lang="less">
  .upload {
    width: 80%;
    padding: 0 20px;
    margin: 0 auto;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    border: 1px solid #DCDFE6;
    .upload__float-btn {
      position: fixed;
      top: 80px;
      z-index: 99999;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      box-shadow: 0 0 6px rgba(0, 0, 0, .12);
      background: #fff;
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -12px 0 0 -8px;
        border: 8px solid transparent;
        border-bottom-color: #409eff;
      }
    }
    .upload-wrapper__btns {
      margin-top: 20px;
    }
    .rotate180 {
        transform:rotate(180deg);
    }
    .upload-list {
      transition: 0.5s;
      margin: 0 auto 20px;
      .upload-list-item {
        display: inline-block;
        margin: 10px
      }
    }
  }
</style>
