import web3 from './web3';
import compileBank from '@/ethereum/build/Registry.json';

const address = '0xFFaE760e3aeC115B4658E53d3881a5000Bc99a30';

const abi = JSON.parse(compileBank.interface);

export default new web3.eth.Contract(abi, address);
