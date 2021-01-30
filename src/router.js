import VueRouter from "vue-router";
import Vue from "vue";

import AccountSetup from "./views/AccountSetup";
import Prerequisites_Requirements from "./views/Prerequisites_Requirements";
import InlineCheckout from "./views/InlineCheckout";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/account-setup", alias: "/", component: AccountSetup },
    {
      path: "/prerequisites-requirements",
      component: Prerequisites_Requirements,
    },
    {
      path: "/glade-inline-checkout",
      component: InlineCheckout,
    },
  ],
});
