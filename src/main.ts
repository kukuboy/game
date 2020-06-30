import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import "@/assets/scss/common.scss"
import { Button, Form, Field, Toast  } from 'vant';

Vue.config.productionTip = false;

Vue.use(Form)
Vue.use(Button)
Vue.use(Field)
Vue.use(Toast)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
