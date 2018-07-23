var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "era utility sight lab vocal oven sphere today click tape evolve trash";
module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 3
    },
    ropsten: {
      provider: function(){
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/v3/cd7f4d4c27984eaa96571178ac230448"
        );
      },
      network_id: 3,
      gas: 4700000,
      gasPrice: 100
    }
  }
};
