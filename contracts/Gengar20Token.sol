import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GengarToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("Gengar", "GNG") {
        _mint(msg.sender, initialSupply);
    }
}
