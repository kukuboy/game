import Axios from 'axios';
// import query from 'querystring'
import store from '../store';
// import Dialog from '../common/utils/dialog/dialog'
import router from '../router';

// Vue.use(Axios)
const httpA = Axios.create(
  {
    timeout: 600000,
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  },
);

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
      value: this, // 设置值
      writable: false, // 是否可以改变，默认false，更改会报undefined
    });
    httpA.defaults.baseURL = process.env.API_HOST;
    httpA.defaults.headers.common.token = localStorage.invest_h5_token;
    sessionStorage.asking = '\n';
    // 设置请求拦截器
    httpA.interceptors.request.use(
      (config) => {
          sessionStorage.asking += 'the api:' + config.url + ' is asking\n';
          config.headers.common.token = localStorage.invest_h5_token;
          return config;
      },
      (err) => {
        return Promise.reject(err);
      },
    );
    // 设置响应拦截器
    httpA.interceptors.response.use(
      (res) => {
        sessionStorage.asking = sessionStorage.asking.replace('the api:' + res.config.url + ' is asking\n', '');
        // console.log(sessionStorage.asking, ' success:' + res.config.url)
        // 统一判断，如果请求成功返回数据
        const data = res.data;
        const flag = data.flag;
        if (flag === 0 || flag === true) {
          return data;
        } else if (flag === 2002) {
          // 返回app界面
          // Dialog.Toast({
          //   content: 'token过期，请重新登录'
          // })
          localStorage.invest_h5_token = '';
          // Dialog.Dialog({
          //   type: 'quit',
          //   text: 'token过期，请重新登录'
          // })
          router.replace('');
        } else if (flag === 4000) {
          // token过期
          localStorage.invest_h5_token = '';
          // Dialog.Dialog({
          //   type: 'quit',
          //   text: 'token过期，请重新登录'
          // })
        } else if (flag === -1) {
            // Dialog.Toast({
            //   content: data.msg
            // })
          return data;
        } else {
          Dialog.Toast({
            content: data.msg,
          });
          return data;
        }
      },
      (error) => {
        // dialog.toast(error.message ? error.message : error)
        // console.log(error.config)
        if (error.config) {
          sessionStorage.asking = sessionStorage.asking.replace('the api:' + error.config.url + ' is asking\n', '');
        }
        // Dialog.Toast({
        //   content: '连接失败'
        // })
        // console.log(sessionStorage.asking, ' fail:' + error.config.url)
        return Promise.reject(error);
      },
    );
  },
  // 登录接口
  login({params}: { params: any }) {
    return httpA({
      url: '/advisor/h5/user/customerLogin',
      data: params,
      method: 'POST',
    });
  },
  // 查询公告
  getAnnouncement(params: any) {
    return httpA({
      url: '/advisor/h5/announcement/getAnnouncement',
      params,
      method: 'GET',
    });
  },
};
