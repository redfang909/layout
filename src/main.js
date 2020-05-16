import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/bootstrap-vue'
import './plugins/uuid-vue'
import './plugins/prism-editor-vue'
import './plugins/clipboard-vue'
import './utils/global-components'

import style from './assets/style.scss'

Vue.config.productionTip = false

new Vue({  
  el: '#app',
  router,
  store,
  render: h => h(App)
})
