import Vue from 'vue';
import Router from 'vue-router';

/**
 * Registrar
 */

import Registrar from '@/registrar/Registrar.vue';
import ViewLandRecords from '@/registrar/components/ViewLandRecords.vue';
import AddLandRecord from '@/registrar/components/AddLandRecord.vue';
/**
 * Client
 */

import Client from '@/clients/Client.vue';
import UserLandRecord from '@/clients/components/UserLandRecord.vue';
import UserTransferRequest from '@/clients/components/UserTransferRequest.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/client',
      component: Client,
      children: [
        {
          path: '/',
        },
        {
          path: 'landrecord',
          name: 'landrecord',
          component: UserLandRecord,
        },
        {
          path: 'transferrequest',
          name: 'transferrequest',
          component: UserTransferRequest,
        },
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
        {
          path: 'addrecord',
          name: 'addrecord',
          component: AddLandRecord,
        },
      ],
    },
  ],
});
