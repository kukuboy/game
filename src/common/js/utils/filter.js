export default {
  install: function (Vue) {
    Vue.filter('phoneHidden', (val = 0) => {
      if (!this.phone(val)) {
        return val
      }
      return val.substring(0, 3) + '****' + val.substring(7)
    })
    Vue.filter('headImg', (val = '') => {
      if (val === undefined || val === '') {
        return require('../../common/images/客服.png')
      } else {
        return val
      }
    })
  },
  phone (val) {
    var reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/
    return reg.test(val)
  }
}
