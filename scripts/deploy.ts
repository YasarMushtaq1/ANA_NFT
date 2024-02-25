// We require the Hardhat Runtime Environment explicitly here.
const { ethers } = require("hardhat");

// async function main() {
//   // Deploying the AITO_SAYED contract
//   const AITO_SAYED = await ethers.getContractFactory("AITO_SAYED");
//   console.log("AITO_SAYED deployed");
// }

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);
  
  // Obtain the contract factory
  const ANA_Nft = await ethers.getContractFactory("ANA_Nft");
  
  // Deploy the contract
  const token = await ANA_Nft.deploy();
  await token.deployed();
  
  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error during deployment:", error);
    process.exit(1);
  });

  