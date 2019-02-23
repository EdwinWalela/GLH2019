<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <vue-metamask @onComplete="onComplete"/>
    </v-content>
  </v-app>
</template>

<script>
import VueMetamask from 'vue-metamask';

export default {
  name: 'App',
  components: {
    VueMetamask,
  },
  data() {
    return {
      message: 'This is a demo net at work',
    };
  },
  methods: {
    onComplete(data) {
      console.log('MetaMask Data: ', data);
    },
  },
};
</script>
