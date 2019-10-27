import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Single/Authentication/Login';
import Register from "./components/Single/Authentication/Register";
import Home from "./components/Single/Home/Home";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home},
  { path: '/signin', component: Login },
  { path: '/signup', component: Register}
];

const router = new VueRouter({
  routes // short for `routes: routes`
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
