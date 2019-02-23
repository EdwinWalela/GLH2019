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
              <v-list-tile-sub-title>{{ record.titleNo }}</v-list-tile-sub-title>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-title>
                Owner Address
              </v-list-tile-title>
              <v-list-tile-sub-title>{{ record.ownAddress }}</v-list-tile-sub-title>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-title>
                Sheet Number
              </v-list-tile-title>
              <v-list-tile-sub-title>{{ record.sheetNo }}</v-list-tile-sub-title>
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
              <v-list-tile-sub-title>{{ date }}</v-list-tile-sub-title>
            </v-list-tile>

          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="green">List for Sale</v-btn>
        </v-card-actions>

      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'UserLandRecord',
  data() {
    return {
      loading: true,
      record: null,
      moment,
    };
  },
  methods: {
    fetchData() {
      axios
        .get('https://5c711f4a0eddba001435b5d1.mockapi.io/land/1')
        .then((response) => {
          this.record = response.data;
          this.loading = false;
        })
        .catch(error => console.log(error));
    },
  },
  computed: {
    date() {
      return moment(this.record.date).format('dddd, MMMM Do YYYY');
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
