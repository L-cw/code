<template>
  <div class="topic-cont clearfix">
    <div class="content">
      code_content
    </div>
  </div>
</template>

<script>
import codeBeautify from '@/assets/js/tools/codeBeautify'
export default {
  name: 'codecontent',
  data () {
    return {
      code: ''
    }
  },
  methods: {
    // getCode (name) {
    //   this.$http.post({
    //     url: 'code.json',
    //     data: {name},
    //     success: (res) => {
    //       console.log(res)
    //     },
    //     fail: () => {}
    //   })
    // },
    beautyJson (value) {
      if (value === null || typeof value === 'undefined') return
      return '<pre><code class="json">' + codeBeautify.jsBeautify(value) + '</code></pre>'
    },
    beautyJs (value) {
      if (value === null || typeof value === 'undefined') return
      return '<pre><code class="js">' + codeBeautify.jsBeautify(value) + '</code></pre>'
    }
  },
  created () {
    // this.getCode()
  }
}
</script>

<style scoped lang='less'>
  @import "../../assets/less/base.less";
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
