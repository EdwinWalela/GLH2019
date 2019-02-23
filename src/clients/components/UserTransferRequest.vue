<template>
      <v-form>
    <v-container>
      <v-layout row class="heading-text">Land Information</v-layout>
      <v-layout column>
        <v-flex>
          <v-text-field
            v-model="to"
            label="To Person"
            placeholder="MILLER,ADULU"
            clearable
          />
        </v-flex>
        <v-flex>
          <v-text-field
            v-model="nature"
            label="Nature"
            placeholder="PURCHASE/INNHERITANCE"
            clearable
          />
        </v-flex>
        <v-flex>
          <v-text-field
            v-model="toAddress"
            label="To Address"
            placeholder="0x226868f5451FAc537b16Ae5f39E9Beaa26C19daD"
            clearable
          />
        </v-flex>
        <v-flex>
          <v-text-field
            v-model="lawyers"
            label="Lawyers"
            placeholder="MILLER,ADULU"
            clearable
          />
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-btn block @click="transferLand" class="keep">Request Transfer</v-btn>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import bank from '@/util/bank';
import web3 from '@/util/web3';
import compileDeed from '@/ethereum/build/Deed.json';

export default {
  name: 'UserTransferRequest',
  data() {
    return {
      to: '',
      nature: '',
      toAddress: '',
      lawyers: '',
    };
  },
  methods: {
    async transferLand() {
      const deedAddress = await bank.methods.lookUp('MZAE').call();
      const deed = await new web3.eth.Contract(
        JSON.parse(compileDeed.interface),
        deedAddress,
      );
      console.log(deed);
      await deed.methods.ownershipTransferRequest(
        this.to,
        this.nature,
        this.toAddress,
        this.lawyers,
      ).send({
        from: this.$store.state.account[0],
        gas: '5000000',
      });
    },
  },
};
</script>
