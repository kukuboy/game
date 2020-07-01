import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import "@/assets/scss/common.scss"
import { Button, Form, Field, Toast, Tabbar, TabbarItem, Circle,
  Stepper } from 'vant';

Vue.config.productionTip = false;

Vue.use(Form)
Vue.use(Button)
Vue.use(Field)
Vue.use(Toast)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Circle);
Vue.use(Stepper);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
