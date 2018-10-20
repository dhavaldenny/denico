var DenToken = artifacts.require("./DenToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DenToken);
};
