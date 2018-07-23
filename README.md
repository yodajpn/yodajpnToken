# yodajpnToken
ERC20 yodajpnToken
from @IzuruYokotsuka 

0. 準備
```
$ npm install -g truffle
```

1. truffle init
```
$ mkdir yodajpnToken
$ cd yodajpnToken
$ truffle init
```

2. install zepplin-solidity
```
$ npm init -f
$ nmp install zepplin-solidity --save
```

3. yodajpnTokenを作ってみる
contract/yodajpnToken.sol
```
pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract yodajpnToken is StandardToken {
    string public name = "yodajpnToken";
    string public symbol = "yoda";
    uint public decimals = 18;

    constructor(uint initialSupply) public {
        totalSupply_ = initialSupply;
        balances[msg.sender] = initialSupply;
    }
}
```
4. マイグレーションファイルの作成
migrations/2_deploy_yodajpn_token.js
```
const yodajpnToken = artifacts.require('./yodajpnToken.sol')

module.exports = (deployer) => {
    const initialSupply = 1995042200000000000000000  //発行量 MetaMaskでDecimal Precisionが18の場合
    deployer.deploy(yodajpnToken, initialSupply)
}
```

5. コンパイル
```
$ truffle compile
```
6. エミュレータの起動
```
$ truffle develop
```
localhost: 9454 でEthereumブロックチェーンのエミュレータが起動

7. マイグレート
```
$truffle migrate
Error: No network specified. Cannot determine current network.
・
・
・
```
エラー
truffle.js
```
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "era utility sight lab vocal oven sphere today click tape evolve trash";
module.exports = {
    networks: {
        ganache: {  //ganacheを使いました。
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
```

```
$ truffle migrate -network ganache  //networkの指定
Using network 'development'
```
できた。
