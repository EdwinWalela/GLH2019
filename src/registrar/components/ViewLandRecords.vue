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
        <v-card-actions v-if="record.transfer">
          <v-btn  block color="green" @click="approveTransfer">Approve Transer</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
import bank from '@/util/bank';
import web3 from '@/util/web3';
import compileDeed from '@/ethereum/build/Deed.json';
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
  methods: {
    async approveTransfer() {
      const deedAddress = await bank.methods.lookUp(this.titleNumber).call();
      const deed = await new web3.eth.Contract(
        JSON.parse(compileDeed.interface),
        deedAddress,
      );
      await deed.methods.transferApproval(
        '23/3/2019',
        'LYDIAMWANGI',
      ).send({
        from: this.$store.state.account[0],
        gas: '5000000',
      });
      this.record.approveTransfer = false;
    },
  },
  mixins: [
    searchMixin,
  ],
  async created() {
    this.fetchData();
  },
};
</script>
