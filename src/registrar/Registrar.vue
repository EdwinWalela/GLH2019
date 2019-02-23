<template>
        <v-app id="keep">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
    >
      <v-list
        dense
        class="grey lighten-4"
      >
          <v-layout
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader>
                Land Registration
              </v-subheader>
            </v-flex>
          </v-layout>
          <v-divider dark
            class="my-3"
          ></v-divider>
          <v-list-tile
          >
            <v-list-tile-action>
              <v-icon>add</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                Add Land Record
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
          >
            <v-list-tile-action>
              <v-icon>touch_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                Approve Transfer Requests
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Mali&nbsp;<span class="font-weight-light">Safi</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
        v-model="search"
        v-on:keyup.enter="searchLand"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="grey lighten-4">

        <router-view />

      </v-container>
    </v-content>
</v-app>
</template>

<script>
export default {
  name: 'Registrar',
  data() {
    return {
      drawer: null,
      search: null,
    };
  },
  methods: {
    landRecords() {
      this.$router.push({ name: 'viewLandRecords' });
    },
    searchLand(){
        // GoTo Land Records display
    }
  },
};
</script>
