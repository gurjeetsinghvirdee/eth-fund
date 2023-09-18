require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    defaultNetwork: 'goreli',
    networks: {
      hardhat: {},
      url: 'https://rpc.ankr.com/eth_goerli',
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
