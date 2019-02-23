import bank from '@/util/bank';
import web3 from '@/util/web3';
import compileDeed from '@/ethereum/build/Deed.json';

export default {
  data() {
    return {
      record: null,
    };
  },
  methods: {
    async fetchData() {
      console.log('Title:', this.titleNumber);
      const deedAddress = await bank.methods.lookUp(this.titleNumber).call();
      const deed = await new web3.eth.Contract(
        JSON.parse(compileDeed.interface),
        deedAddress,
      );
      console.log('Deed: ', deed);
      console.log('Deed Addr', deedAddress);

      const transOwners = await deed.methods.owners().call();
      console.log(transOwners);
      const forSale = await deed.methods.forSale().call();
      this.record = {
        owners: transOwners.owners,
        date: transOwners.date,
        lawyers: transOwners.lawyers,
        registrar: transOwners.registar,
        forSale,
      };
    },
  },
};
