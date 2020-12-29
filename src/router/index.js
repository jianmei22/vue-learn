import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../components/dashboard"

Vue.use(VueRouter)
const router = new VueRouter({
    //去除“#”符号
    mode:'history',
    // routes是路由规则数组
    routes: [
        // redirect路由重定向，强制跳转
        {
            path: '/',
            component: Dashboard,
            redirect: '/dashboard',
        },
    ]
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to将要访问的路径
    // from代表从哪个路径跳转而来
    // next是一个函数，表示放行
    // next('/login')强制跳转
    if(to.path === '/dashboard') return next()
    // 获取token
    const token = window.sessionStorage.getItem('token')
    if(!token) return next('/dashboard')
    next()
})
export default router
