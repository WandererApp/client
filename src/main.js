import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Single/Authentication/Login';
import Register from "./components/Single/Authentication/Register";
import ForgotPassword from "./components/Single/Authentication/ForgotPassword";
import Home from "./components/Single/Home/Home";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home, meta: {
      requiresAuth: true
    }},
  { path: '/signin', component: Login },
  { path: '/signup', component: Register},
  { path: '/forgotPassword', component: ForgotPassword}
];

const router = new VueRouter({
  routes // short for `routes: routes`
});


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/signin',
        params: { nextUrl: to.fullPath }
      })
    } else {
        next()
    }
  } else {
    next()
  }
})




new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
