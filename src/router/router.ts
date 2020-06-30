/**
 * @author 水印红枫
 * @date 2020/6/30 8:55
 * @Description:
 */
/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
  {
    path: '/',
    name: 'login',
    component: () => import('@/components/login/login.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'login'
    }
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('@/components/game/game.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'game'
    }
  }
]
