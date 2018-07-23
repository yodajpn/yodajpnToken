const yodajpnToken = artifacts.require('./yodajpnToken.sol')

module.exports = (deployer) => {
  const initialSupply = 19950422
  deployer.deploy(yodajpnToken, initialSupply)
}
