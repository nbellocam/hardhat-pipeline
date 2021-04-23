import { Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat";

async function main() {
  const factory : ContractFactory = await ethers.getContractFactory("MyNFT");
  
  // If we had constructor arguments, they would be passed into deploy()
  const contract : Contract = await factory.deploy();
  // The address the Contract WILL have once mined
  console.log("Contract's address: " + contract.address);
  // The transaction that was sent to the network to deploy the Contract
  console.log("Transaction hash: " + contract.deployTransaction.hash);
  // The contract is NOT deployed yet; we must wait until it is mined
  await contract.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error);
      process.exit(1);
    }
  );
