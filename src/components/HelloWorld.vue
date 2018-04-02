<template>
  <div class="hello">
    <div class="globalTest bg-blue">
      全局样式测试
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
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
      color: @colorWhite;
    }
  }
</style>
