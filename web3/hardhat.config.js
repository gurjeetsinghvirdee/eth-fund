require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  solidity: {
    version: '0.8.17',
  },
  networks: {
    hardhat: {
      chainId: 5
    },
    goerli: {
      url: 'https://sepolia.infura.io/v3/e585fed0b2c147a89e4ce855a2a75ac7',
      accounts: {
        mnemonic: `0x${process.env.PRIVATE_KEY_1}`,
      },
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};