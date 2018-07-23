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
