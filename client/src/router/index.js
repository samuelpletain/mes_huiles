import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/HelloWorld';
import ListAll from '@/pages/Oils/ListAll';
import ListOne from '@/pages/Oils/ListOne';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/huiles',
      name: 'Oils',
      component: ListAll,
    },
    {
      path: '/huiles/:id',
      name: 'ListOne',
      component: ListOne,
    },
  ],
});
