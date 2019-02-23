<template>
  <v-layout>
    <v-flex xs12 >
      <v-card v-if="record">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Land Record</h3>
          </div>
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-tile>
              <v-list-tile-title>
                Title Number
              </v-list-tile-title>
              <v-list-tile-sub-title>1111</v-list-tile-sub-title>
            </v-list-tile>


            <v-list-tile>
              <v-list-tile-title>
                Owners
              </v-list-tile-title>
              <v-list-tile-sub-title>{{ record.owners }}</v-list-tile-sub-title>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-title>
                Lawyers
              </v-list-tile-title>
              <v-list-tile-sub-title>{{ record.lawyers }}</v-list-tile-sub-title>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-title>
                Date
              </v-list-tile-title>
              <v-list-tile-sub-title>{{ record.date }}</v-list-tile-sub-title>
            </v-list-tile>

          </v-list>
        </v-card-text>
        <v-card-actions v-if="record.forSale">
          <v-btn  block color="green">Approve Transer</v-btn>
        </v-card-actions>

      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
import searchMixin from '@/mixins/search';
import moment from 'moment';

export default {
  name: 'ViewLandRecords',
  data() {
    return {
      loading: true,
      moment,
      titleNumber: null || this.$route.params.titleNumber,
    };
  },
  mixins: [
    searchMixin,
  ],
  async created() {
    this.fetchData();
  },
};
</script>
