# Hardhat Scripts
This directory contains the Hardhat scripts, written in TypeScript. You can write your custom scripts that can use all of Hardhat's functionality.

## Running Scripts
On a command-line terminal, run the following command (replace the placeholder with the script's name): `npx hardhat run scripts/{scriptName}.ts`

## Writing Scripts
Please review the document [Writing scripts with Hardhat](https://hardhat.org/guides/scripts.html) from the official documentation for details and instructions.

Note: remember to use TypeScript syntax and save the script as a .ts file.

## Included Scripts
### Deploying a contract with deploy.ts
 1. Make sure to have the contract located inside the contract's folder
 2. Configure an account on the Hardhat configuration file
 3. Open deploy.ts, and replace the placeholder "{ContractName}" with the name of the contract to deploy. This parameter is a string
 4. On a command-line terminal, run the following command: `npx hardhat run scripts/deploy.ts`

 ### Running the contracts on local network
 1. Start a local Node
    `npx hardhat node`
 2. Open the terminal and deploy the smart contract in the localhost network
    `npx hardhat run `
 3. Any network configured in the hardhat.config.js can be targeted
    `npx hardhat run --network <network> <deployment-script> `

   The `network` parameter defines the network where the script will be run. The network parameters can be found in the `network` object within the settings file(`hardhat.config.js`). For additional configurations, refer to [Hardhat Network documentation](https://hardhat.org/hardhat-network/).