import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'

Vue.config.productionTip = false

auth.onAuthStateChanged(user => {
  if (user) {
    const { uid, email } = user;
    store.dispatch('setUser', { uid, email })
  } else {
    store.dispatch('setUser', null)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})