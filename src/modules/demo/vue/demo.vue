<template>
  <div class="hello">
    <div>我是demo页面</div>
    <div class="globalTest bg-blue">
       {{msg}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '全局样式测试'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .hello {
    .globalTest {
      width: 200px;
      height: 200px;
      line-height: 200px;
      margin: 0 auto;
      color: @colorWhite;
    }
  }
</style>
