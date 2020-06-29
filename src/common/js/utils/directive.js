export default {
  install: function (Vue) {
    // input框聚焦
    Vue.directive('focus', {
      inserted: function (el, binding) {
        if (binding.value) {
          el.focus()
        } else {
          el.blur()
        }
      },
      componentUpdated: function (el, binding) {
        if (binding.modifiers.lazy) {
          if (Boolean(binding.value) === Boolean(binding.oldValue)) {
            return
          }
        }

        if (binding.value) {
          el.focus()
        } else {
          el.blur()
        }
      }
    })
    Vue.directive('fix', {
      bind: function (el, binding, vnode) {
        el.style.position = 'absolute'
        var s = (binding.arg === 'left' ? 'left' : 'top')
        el.style[s] = binding.value + 'px'
      }
    })
  }
}
