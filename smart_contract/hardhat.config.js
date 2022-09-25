require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/GkA-Xj4fkWrMEtlQzHFlJCp6JZYHp0xI',
      accounts: ['bcb271888bba4cb7233f39a998e7a45f287af81a42f7305fdc78d38d880c529e'],
    },
  },
};