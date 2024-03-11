// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './components/style.css'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import axios from 'axios'
import './assets/iconfont/iconfont.css'


Vue.config.productionTip = false
Vue.use(ElementUI); 
Vue.use(Viewer)
Vue.prototype.$http = axios

axios.defaults.baseURL = 'http://39.101.122.176:88/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
