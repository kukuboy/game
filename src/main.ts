import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import ax from '@/api/api';
// import Dialog from '@/common/js/utils/dialog/dialog';

Vue.config.productionTip = false;

// Vue.use(Dialog)
Vue.use(ax);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
