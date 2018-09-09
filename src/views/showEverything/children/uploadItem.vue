<template>
  <div
    class="upload-item"
    @mouseenter.stop.prevent="maskShow = hasCompleted"
    @mouseleave.stop.prevent="maskShow = false">
    <div class="upload-item__content">
      <div
        class="upload-item__content--icon iconfont"
        :style="{'color': icon.color}"
        v-html="icon.content">
      </div>
      <div class="upload-item__content--name">{{fileName}}asdfasfasfasdf</div>
      <div class="upload-item__progress" v-show="!hasCompleted">
        <div
          class="upload-item__progress-item"
          :style="{'width': complete * 100 + '%'}">
        </div>
        <i
          class="iconfont upload-item__progress--icon"
          @mouseenter.stop.prevent="handleAbortPreview">
          &#xe7f5;
        </i>
      </div>
    </div>
    <div
      class="upload-item__mask"
      @click="onPreviewClick"
      v-show="maskShow">
      <div class="upload-item__mask--ext">{{ext}}</div>
      <div class="upload-item__mask--preview">
        <i class="upload-item__mask--icon iconfont">&#xe600;</i>
        点击预览
      </div>
    </div>
  </div>
</template>

<script>
import previewImg from './previewImg'

export default {
  name: 'uploadItem',
  props: {
    fileName: {
      type: String,
      default: '未命名'
    },
    fileType: {
      type: String,
      default: ''
    },
    ext: {
      type: String,
      default: 'No Name'
    },
    file: {
      type: String,
      default: ''
    },
    complete: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      maskShow: false
    }
  },
  computed: {
    hasCompleted() {
      return this.complete >= 1
    },
    icon() {
      switch (this.fileType) {
        case 'txt':
          return {
            content: '&#xe732;',
            color: '#000'
          }
        case 'img':
          return {
            content: '&#xe6ac;',
            color: 'orange'
          }
        case 'video':
          return {
            content: '&#xe620;',
            color: '#409eff'
          }
        case 'pdf':
          return {
            content: '&#xe614;',
            color: '#000'
          }
        default: return {}
      }
    }
  },
  methods: {
    handleAbortPreview() {
      this.$emit('abort')
    },
    onPreviewClick() {
      previewImg({ url: this.file })
    }
  }
}
</script>

<style scoped lang="less">
  .upload-item {
    position: relative;
    width: 96px;
    height: 110px;
    overflow: hidden;
    border-radius: 10px;
    // &:hover>.upload-item__mask {
    //   display: block;
    // }
    .upload-item__content {
      padding-bottom: 10px;
      overflow: hidden;
      border-radius: 10px;
      text-align: center;
      .upload-item__content--icon {
        line-height: 70px;
        font-size: 40px;
        color: #000;
      }
      .upload-item__content--name {
        padding: 0 10px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        word-break: break-all;
        font-size: 12px;
        color: #000;
      }
    }
    .upload-item__progress {
      position: relative;
      width: 70%;
      margin: 5px 0 0 5px;
      border-radius: 20px;
      .upload-item__progress-item {
        width: 100%;
        height: 4px;
        background: #409eff;
      }
      .upload-item__progress--icon {
        position: absolute;
        top: -5px;
        right: -14px;
        font-size: 14px;
        color: red;
        cursor: pointer;
      }
    }
    .upload-item__mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding-top: 20px;
      cursor: pointer;
      border-radius: 10px;
      text-align: center;
      background: rgba(0, 0, 0, .8);
      .upload-item__mask--ext {
        font-weight: bold;
        font-size: 32px;
        color: #ff0000;
      }
      .upload-item__mask--preview {
        line-height: 40px;
        font-size: 14px;
        color: #ff0000;
        .upload-item__mask--icon {
          font-size: 12px;
        }
      }
    }
  }
</style>
