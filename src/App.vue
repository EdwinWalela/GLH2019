<template>
<v-app>

          <vue-metamask
            @onComplete="onComplete"
        ></vue-metamask>
          <router-view>
          </router-view>

        

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
