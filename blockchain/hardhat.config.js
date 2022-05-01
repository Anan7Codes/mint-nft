//Rinkeby Deployed Contract Address: 0x946F341dDe27B30Eb2e6fd119906a0A26a06E52d
//0x6CFA89c8eE8f7ab588DaA30B0eFF2102254E6ea0
//0x2bF843E6AE22A20E3d1E29509e71934DD583e5ec
//0xFBB06a156a85882F2f1F2e44c692Dd779f6b9133

require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.1",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },
  },
};
