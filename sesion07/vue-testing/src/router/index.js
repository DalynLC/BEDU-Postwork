import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import InvestmentVue from '../views/InvestmentVue.vue';
import getInvestmentDetails from '../views/getInvestmentDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/investmentAPI',
    name: 'InvestmentVue',
    component: InvestmentVue,
  },
  {
    path: '/investmentDetails',
    name: 'getInvestmentDetailsVue',
    component: getInvestmentDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
