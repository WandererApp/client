import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Single/Authentication/Login';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/signin', component: Login }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
