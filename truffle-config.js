require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('./src/lib/hdwalletprovider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain solid guess globe fox twice'; 
let testAccounts = [
"0x1500ca8d289330d68f03c91f44965e00310a1b2de4a5fd859f1cef6b858ed076",
"0x06b4be121a2ae19937ab872d58b21bb2a6bb50c24cfbd3eeaaad655a591d8105",
"0x528f72c9411eaef71bf57472ae9e44d4cad948e9f24eba57c53e2b47456c2893",
"0xff2357f705698f1aaf91840e3ac092be0bc0f0df56435aa1966a587d7a034d9a",
"0xd1d9fdc387140a453719c0cf85e981832aa0fd048d9ce933eef469286d682e41",
"0x501ccd8b054790c597a844994637bcf878a920da40e18d371b8c78db7286b9c9",
"0x7c40853edd3ee9bdd6683dc64a4c907ae313f59c896d174eca2bec76a5f057d4",
"0xf53a3599c44e86880a5e4d9d60d0c0b54dedfa4026c7805ec03a135f2b0601fa",
"0x4c16195d99631ee9184168d8343f7456b9b0bdcf71e65d8ef1327446c2adb66f",
"0xba6c0477859c93287cf276859bc3cda22d6aaf29e0ad48ae523701755d60647f"
]; 
let devUri = 'https://api.baobab.klaytn.net:8651';

module.exports = {
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
            network_id: '1001',
            gas: '8500000',
            gasPrice: null,
        }
    },
    compilers: {
        solc: {
            version: '^0.5.6'
        }
    }
};
