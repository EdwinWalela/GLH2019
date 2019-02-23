<template>
<v-app>
  <vue-metamask @onComplete="onComplete"/>
  <router-view/>
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
      this.$store.commit('saveWeb3', data);
      console.log('MetaMask Data saved to state: ', data);
    },
  },
};
</script>
