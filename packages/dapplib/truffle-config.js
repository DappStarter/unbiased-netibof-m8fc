require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remember smile inner enrich orange smoke'; 
let testAccounts = [
"0x0e3ae1f6a13f9ae09f23983162366fce7403253eef30fd02f9d2cc508a08f375",
"0xb480a47512768671bac27b299b0082d519fd4c6887753cc64751843defe278d4",
"0xad7f468360d3450597f93844c80531acb30875ad86e85f68903d2e84a2b2acca",
"0xeb46148a198766122f02477839d30f2a466143b1511dcc02f0c8c6223716290d",
"0x1d963cb0f6d13a6ce087f65be21640efc350b26ff940d9c0837c131db82bd188",
"0x2aaa7a7059c38f32bb716fa8e395b29373b9e958fb52e0a3634ff72f6c75d9d3",
"0x4befe71f25147f93d5fea1427d8746954142fd4b3be8ed85f19753a550fa2a91",
"0x3235c00dc4ab702e7a07c51669c52979ebab4f06e708dea0e1f3764a5d0e0c4d",
"0x220f05b99dd26054cbe244c8b0030266654b61dd30d16d3c4cf4bbfd9e76df17",
"0xd720ce5be9ab02fa5f8a525401a790214f08d0d17ac251313a030fa92f882e5a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

