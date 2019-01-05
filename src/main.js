import '@babel/polyfill'
import Vue from 'vue'
import firebase from 'firebase'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let app = '';

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API,
  authDomain: "beerup-vue.firebaseapp.com",
  databaseURL: "https://beerup-vue.firebaseio.com",
  projectId: "beerup-vue",
  storageBucket: "beerup-vue.appspot.com",
  messagingSenderId: "193632319277"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});


