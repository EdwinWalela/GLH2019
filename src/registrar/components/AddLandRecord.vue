<template>
    <v-form>
            <v-container>
              <v-layout row class="heading-text">Payment Information</v-layout>
              <v-layout column>
                <v-flex xs6>
                  <v-text-field

                    label="Name on Card"
                    placeholder="Jane Doe"
                    clearable
                  />
                </v-flex>
                <v-flex xs6>
                  <v-text-field

                    label="Card Number"
                    placeholder="4444-4444-4444-444"
                    clearable
                  />
                </v-flex>
                <v-layout px-2>
                  <v-flex xs6 pr-1>
                    <v-text-field
                      label="Expiry Date"
                      placeholder="210321"
                      clearable
                    />
                  </v-flex>
                  <v-flex xs6 pl-1>
                    <v-text-field label="CSV" placeholder="123" clearable />
                  </v-flex>
                </v-layout>
              </v-layout>
              <v-layout row justify-center>
                <v-btn block class="keep"
                  >Add Record</v-btn>
              </v-layout>
            </v-container>
          </v-form>
</template>

<script>
export default {
  name: 'AddLandRecord',

};
</script>
