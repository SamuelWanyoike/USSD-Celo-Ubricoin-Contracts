
var phoneaccess = artifacts.require("./Accessphone.sol");
var user = artifacts.require("./User.sol");
var erc20 = artifacts.require("./ERC20.sol");

module.exports = function(deployer) {
  
  deployer.deploy(phoneaccess);
  deployer.deploy(user);
  deployer.deploy(erc20);
  
}