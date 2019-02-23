import web3 from './web3';
import compileBank from '@/ethereum/build/Registry.json';

const address = '0x7cB6E7F57A2f19B3c7be9c4E258e0c717848187F';

const abi = JSON.parse(compileBank.interface);

export default new web3.eth.Contract(abi, address);
