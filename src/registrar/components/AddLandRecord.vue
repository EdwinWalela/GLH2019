<template>
  <v-form>
    <v-container>
      <v-layout row class="heading-text">Land Information</v-layout>
      <v-layout column>
        <v-flex>
          <v-text-field
            v-model="ownerAddress"
            label="Owner Address"
            placeholder="0x226868f5451FAc537b16Ae5f39E9Beaa26C19daD"
            clearable
          />
        </v-flex>
        <v-flex>
          <v-text-field
            v-model="titleNumb"
            label="Title Number"
            placeholder="4444-4444-4444-444"
            clearable
          />
        </v-flex>
        <v-flex>
          <v-text-field
            v-model="approxArea"
            label="Approximate Area (Acres)"
            placeholder="2.3"
            clearable
          />
        </v-flex>
        <v-flex>
          <v-text-field
            v-model="regMapSheetNo"
            label="Registration Map Sheet Number"
            placeholder="2dadada3"
            clearable
          />
        </v-flex>
        <v-flex>
          <v-text-field
            v-model="owners"
            label="Owners"
            placeholder="MILLER,ADULU"
            clearable
          />
        </v-flex>
        <v-flex>
          <v-text-field
            v-model="date"
            label="Date"
            placeholder="12/12/13"
            clearable
          />
        </v-flex>
        <v-flex>
          <v-text-field
            v-model="registrar"
            label="Registrar"
            placeholder="Obonyo"
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
        <v-btn block @click="registerLand" class="keep">Add Record</v-btn>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import bank from '@/util/bank';

export default {
  name: 'AddLandRecord',
  data() {
    return {
      ownerAddress: '',
      titleNumb: '',
      approxArea: '',
      regMapSheetNo: '',
      owners: '',
      date: '',
      registrar: '',
      lawyers: '',
    };
  },
  methods: {
    async registerLand() {
      await bank.methods.registerDeed(
        this.ownerAddress,
        this.titleNumb,
        this.approxArea,
        this.regMapSheetNo,
        this.owners,
        this.date,
        this.registrar,
        this.lawyers,
      ).send({
        from: this.$store.state.account[0],
        gas: '5000000',
      });
    },
  },
};
</script>
