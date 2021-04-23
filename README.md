## Description
The solution uses a combination of the tools available to improve the development experience.
The framework of choice is [Hardhat](https://hardhat.org/), [Waffle](https://getwaffle.io/) is the testing framework, and [Ethers](https://docs.ethers.io/v5/) the interface used to interact with the network.
Based on it's goodnesses, the solution uses `Typescript`, which is widely supported by all the underlying technologies used across the project.

## Dependencies
- [Node.js](https://nodejs.org/en/download/)
- [Hardhat](https://www.npmjs.com/package/hardhat)
- [Hardhat-waffle](https://www.npmjs.com/package/@nomiclabs/hardhat-waffle)
- [Hardhat-ethers](https://www.npmjs.com/package/@nomiclabs/hardhat-ethers)
- [Ethers.js](https://docs.ethers.io/v5/getting-started/#installing)
- [Solhint](https://www.npmjs.com/package/solhint)
- [Typescript](https://www.npmjs.com/package/typescript)
- [Ethereum-Waffle](https://www.npmjs.com/package/ethereum-waffle)

## Auditing
[Slither](https://github.com/crytic/slither) is used by the project to audit the Smart Contracts code ensuring security as well as enforcing styling. The tool is used on the Azure Pipelines used as checks on the GitHub repository to enforce the rules.

## Configuring the Network
The global documentation includes the steps to run the solution locally. Refer to the official [Hardhat Network documentation](https://hardhat.org/hardhat-network/) for more details.

## Deploying Smart Contracts
Refer to the official Hardhat documentation regarding [Smart Contracts deployment](https://hardhat.org/guides/deploying.html).

## Running Standalone Scripts
Refer to the official Hardhat documentation regarding running [standalone Scripts](https://hardhat.org/guides/scripts.html#standalone-scripts-using-hardhat-as-a-library)

## Unit Tests
Run `npm runt test` or `npx hardhat test` on this directory to run the test cases.