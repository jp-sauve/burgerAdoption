import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Survey from '@/components/Survey';
import Hamburgers from '@/components/Hamburgers';
import Questions from '@/components/Questions';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/survey/:name',
      name: 'Survey',
      component: Survey,
      children: [
        {
          path: 'questions',
          name: 'questions',
          component: Questions,
        },
      ],
    },
    {
      path: '/survey',
      name: 'Survey',
      component: Survey,
    },
    {
      path: '/hamburgers',
      name: 'Hamburgers',
      component: Hamburgers,
    },
  ],
});
