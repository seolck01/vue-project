import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import initRouter from './common/router'

require('!style-loader!css-loader!less-loader!./assets/style/global.less'); //导入全局样式


Vue.use(VueRouter);

const router = initRouter();

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
