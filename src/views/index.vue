<template>
  <div class="topic-cont clearfix">
    <div class="content">
      <div class="banner">
        <img src="../../static/images/123.jpg" alt="">
      </div>
      <a href="javascript:;" v-for="item in list" :key="item.id" class="main-box">
        {{item.title}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      pageHeight: 0,
      list: [
        {
          id: '1',
          title: '程序猿的中年危机如何解决，构建测试'
        },
        {
          id: '2',
          title: '如何判断空气币'
        },
        {
          id: '3',
          title: '大佬是怎样炼成的'
        },
        {
          id: '4',
          title: '5G 确实比 2G 快'
        },
        {
          id: '5',
          title: '四个天线的路由器比两个天线强在哪里'
        }
      ]
    }
  }
  // methods: {
  //   handleWindowResize () {
  //     this.pageHeight = window.innerHeight - 130
  //   }
  // },
  // created () {
  //   this.pageHeight = window.innerHeight - 130
  //   window.addEventListener('resize', this.handleWindowResize)
  // },
  // destroyed () {
  //   window.removeEventListener('resize', this.handleWindowResize)
  // }
}
</script>

<style scoped lang='less'>
  @import "../assets/less/base.less";
  .topic-cont {
    padding: 20px 0;
    min-height: calc(100vh - 130px);
    background-color: @bg-default;
    .banner {
      width: 100%;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
    .main-box{
      display: block;
      background-color: @bg-white;
      border-radius: @box-radius;
      padding: @p-w;
      margin-bottom: @p-w;
      transition: all .5s;
      &:hover {
        transform: translate3d(0, -2px, 3px);
        box-shadow: 0 2px 12px 0 rgba(7, 7, 7, .13);
      }
    }
  }
</style>
