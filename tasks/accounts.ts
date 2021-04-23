import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { task } from "hardhat/config";

task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts : SignerWithAddress[] = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});
