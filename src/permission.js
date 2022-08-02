import router from '@/router'
import store from '@/store'

// 路由全局前置守卫
const whiteList = ['/login','/404']
router.beforeEach((to, from, next) => {
    const token = store.state.user.token
    if (token) {//已登录
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {//未登录
        const clude = whiteList.includes(to.path)
        if (clude) {
          next();
        } else {
          next("/login");
        }
    }
})