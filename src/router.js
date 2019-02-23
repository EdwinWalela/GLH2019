import Vue from 'vue';
import Router from 'vue-router';

/**
 * Registrar
 */

import Registrar from '@/registrar/Registrar.vue';
import ViewLandRecords from '@/registrar/components/ViewLandRecords.vue';
/**
 * Client
 */

import Client from '@/clients/Client.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/client',
      component: Client,
      children: [
        // {
        //   path: '/',
        //   component: ,
        // }
      ],
    },
    {
      path: '/registrar',
      component: Registrar,
      children: [
        {
          path: '/',
        },
        {
          path: 'records',
          name: 'viewLandRecords',
          component: ViewLandRecords,
        },
      ],
    },
  ],
});
