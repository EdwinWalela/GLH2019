<template>
<v-app>

        <v-fade-transition appear>
          <!-- <vue-metamask
            @onComplete="onComplete"
        > -->
          <router-view />
          <!-- </vue-metamask> -->
        </v-fade-transition>

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
