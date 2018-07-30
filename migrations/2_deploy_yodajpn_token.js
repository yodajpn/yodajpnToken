const yodajpnToken = artifacts.require('./yodajpnToken.sol')

module.exports = (deployer) => {
  const initialSupply = 1995042200000000000000000  //発行量 MetaMaskでDecimal Precisionが18の場合
  deployer.deploy(yodajpnToken, initialSupply)
}
