import VueRouter from "vue-router";
import Vue from "vue";

import Guide from "./views/Guide";
import AccountSetup from "./views/AccountSetup";
import Prerequisites_Requirements from "./views/Prerequisites_Requirements";
import InlineCheckout from "./views/InlineCheckout";

Vue.use(VueRouter);

export const ROUTES = [
  { name: "Home", path: "/home" },
  {
    name: "Guide",
    path: "/guide",
    alias: "/",
    component: Guide,
    children: [
      {
        name: "Account Setup",
        path: "account-setup",
        alias: "",
        component: AccountSetup,
        sections: [
          "Test Accounts",
          "Live Accounts",
          "Using the Glade Payment Services",
        ],
      },
      {
        name: "Prerequisites / Requirements",
        path: "prerequisites-requirements",
        component: Prerequisites_Requirements,
        sections: [{ name: "HTTPS requirements", path: "https-requirements" }],
      },
      {
        name: "Glade Inline Checkout",
        path: "glade-inline-checkout",
        component: InlineCheckout,
        sections: [
          { name: "Embed Parameters", path: "embed-parameters" },
          { name: "Recurring Payment", path: "recurring payment" },
          { name: "Installment Payment", path: "installment-payment" },
          { name: "Split Payment", path: "split-payment" },
        ],
      },
      { name: "Verify Transactions", path: "verify-transactions" },
      { name: "Refund Transactions", path: "refund-transactions" },
      { name: "Disputes", path: "disputes" },
      { name: "Settlements", path: "settlements" },
      { name: "Questions?", path: "questions" },
    ],
  },
  { name: "API Reference", path: "/api-eference" },
  { name: "SDK & Plugins", path: "/sdk-plugins" },
  { name: "Faqs", path: "/faqs" },
  { name: "Contact Us", path: "/contact-us" },
];

export default new VueRouter({
  mode: "history",
  routes: ROUTES,
  scrollBehavior: function(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
