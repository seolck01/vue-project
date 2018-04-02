<template>
  <div class="hello">
    <div>我是demo页面</div>
    <div class="globalTest bg-blue">
       {{msg}}
    </div>
    <br>
    当前 count : {{count}}
    <br><br>
    <el-button @click="testAction">测试action +1</el-button>
    <el-button type="primary" @click="testMutation">测试 mutation 置1</el-button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed:mapGetters({
      count:'getCount'
    }),
    data() {
      return {
        msg: '全局样式测试'
      }
    },
    methods:{
      testAction(){
        this.$store.dispatch('addCount',1)
      },
      testMutation(){
        this.$store.commit('INIT_COUNT')
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
