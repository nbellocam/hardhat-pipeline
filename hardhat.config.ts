import "@nomiclabs/hardhat-waffle";
import "./tasks/accounts";
import "./tasks/balance";
import "solidity-coverage";

module.exports = {
  solidity: "0.6.11",

  paths: {
    sources: "./contracts",
    tests: "./tests",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  // Added this network configuration to solve Metamask issue, as this article suggests (https://hardhat.org/metamask-issue.html)
  networks: {
    hardhat: {
      chainId: 1337
    },
  }
};