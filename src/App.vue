<template>
<v-app>
  <router-view/>
</v-app>
</template>

<script>
import Web3 from '@/util/web3';
export default {
  name: 'App',
  data() {
    return {
      message: 'This is a demo net at work',
    };
  },
  methods: {
    async loadMeta() {
      const account = await Web3.eth.getAccounts();
      this.$store.commit('saveAccount', account);
    },
  },
  created() {
    this.loadMeta();  
  }
};
</script>
