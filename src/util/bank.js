import web3 from './web3';
import compileBank from '@/ethereum/build/Registry.json';

const address = '0xe8232845924f94F2366E2292C1724715CfaCB2fe';

const abi = JSON.parse(compileBank.interface);

export default new web3.eth.Contract(abi, address);
