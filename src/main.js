import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase' 

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyAWPVCdDNwktyXSHn5niZeIS1sv_F-mfR4",
  authDomain: "todo-da75a.firebaseapp.com",
  databaseURL: "https://todo-da75a.firebaseio.com",
  projectId: "todo-da75a",
  storageBucket: "todo-da75a.appspot.com",
  messagingSenderId: "770773059380",
  appId: "1:770773059380:web:f1f4563f88c032a5b18761"
};

firebase.initializeApp(config);
 
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')