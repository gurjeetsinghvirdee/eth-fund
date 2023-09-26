/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.17',
    defaultNetwork: 'goerli',
    networks: {
      hardhat: {},
      goerli: {
        url: 'https://goerli.infura.io/v3/${INFURA_PROJECT_ID}',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};