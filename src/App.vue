<template>
<v-app>
  <router-view/>
</v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'This is a demo net at work',
    };
  },
};
</script>
