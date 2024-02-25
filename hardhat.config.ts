const INFURA_API_KEY = 'YOUR INFURA API KEY '; // Your Infura API Key

const SEPOLIA_PRIVATE_KEY = 'YOUR WALLET PRIVATE KEY'; // Private key of the account you want to deploy from

require("@nomicfoundation/hardhat-toolbox");

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};

export default config;


  //   networks: {
//     sepolia: {
//       url: `https://sepolia.infura.io/v3/bcd488233a6342c988f3b2398ad9e21a`,
//       accounts: `2014f0afe006ac95ec14c68f26259aed0c7e6ea98cc3108733f4351254b87576`
//     }
// }





