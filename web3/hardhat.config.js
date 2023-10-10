require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  solidity: {
    version: '0.8.17',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
        url: 'https://eth-sepolia.g.alchemy.com/v2/vtib0EoxefPKvVCDTtlGWv3x1cOqnyGz',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    },
  },
}