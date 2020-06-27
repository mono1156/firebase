import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
const config ={
  apiKey: 'AIzaSyDw-3xHYtxiQtBrrTqvxL4vQCTO60ifg8E',
  projectId: 'test-2b278',
  authDomain: 'test-2b278.firebaseapp.com',
  databaseURL: 'https://test-2b278.firebaseio.com',
  storageBucket: 'test-2b278.appspot.com',
}

firebase.initializeApp(config);

export default firebase;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
