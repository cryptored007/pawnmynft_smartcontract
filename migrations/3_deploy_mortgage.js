const PawnMyNFTMortgage = artifacts.require("PawnMyNFTMortgage");

module.exports = function (deployer) {
  deployer.deploy(PawnMyNFTMortgage, "-address-of-locker-");
};
