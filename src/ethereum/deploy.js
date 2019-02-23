const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const fs = require('fs-extra');
const path = require('path');
const compiledFactory = require('./build/Registry.json');
const config = require('./config');

const provider = new HDWalletProvider(
  config.MNEMONIC,
  config.URI,
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('attempting to deploy registry from account: ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode, arguments: [] })
    .send({ gas: '5000000', from: accounts[0] });

  console.log('Contract successfuly deployed at :', result.options.address);
  const addressPath = path.resolve(__dirname, 'registry_address.txt');
  fs.writeFileSync(addressPath, result.options.address, 'utf8');
};

deploy();
