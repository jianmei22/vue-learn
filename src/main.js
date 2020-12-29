import Vue from 'vue'
import App from './App'
import store from './store'
import Element from 'element-ui'
import router from './router'
import './styles/index.scss'
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
