import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { BigNumber } from "ethers";
import { task } from "hardhat/config";

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs, hre)=> {
    try {
        const accounts : SignerWithAddress[] = await hre.ethers.getSigners();
        const balance : BigNumber = await accounts.find(async obj => await obj.getAddress() === taskArgs.account).getBalance();
        
        console.log(hre.ethers.utils.formatEther(balance), "ETH");
    }
    catch (error) {
        console.error(error);
    }
  });
