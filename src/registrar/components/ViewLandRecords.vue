<template>
  <v-layout>
    <v-flex xs12 >
      <v-card v-if="record">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Land Record</h3>
          </div>
        </v-card-title>

        <p> Title No: {{ record.titleNo }}</p>
        <p> OwnerAddress: {{ record.ownAddress}}</p>
        <p> Sheet No: {{ record.sheetNo}} </p>
        <p> Owners: {{ record.owners }} </p>
        <p> Registrar: {{ record.registrar }} </p>
        <p> Lawyers: {{ record.lawyers }} </p>
        <p> Date: {{ record.date }} </p>

      </v-card>
    </v-flex>
  </v-layout>
  
</template>

<script>
import axios from 'axios';

export default {
  name: 'ViewLandRecords',
  data() {
    return {
      loading: true,
      record: null,
      monthList: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
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
      return `${
        this.monthList[this.record.date.getMonth()]
      } ${this.record.date.getFullYear()}`;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
