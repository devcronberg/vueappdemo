import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes.js";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});
new Vue({
  render: (createElement) => createElement(App),
  router,
}).$mount("#app");
