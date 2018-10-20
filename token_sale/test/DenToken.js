var DenToken = artifacts.require("./DenToken.sol");

contract('DenToken',function(account){

	it('sets the total supply upon deployment',function(){
		return DenToken.deployed().then(function(instance){
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply){
			assert.equal(totalSupply.toNumber(),1000000,"sets the totalSupply to 1,000,000");
		});
	});
});
