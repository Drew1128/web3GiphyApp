
 // https://eth-ropsten.alchemyapi.io/v2/ZKmQ0FMDYklmyleUDI6ri3tpn2vV2o0K

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ZKmQ0FMDYklmyleUDI6ri3tpn2vV2o0K',
      accounts: ['6b803e8ab9f050065c3306c96d405a794a8f4e42f7de013e4579413a20f94e64'],
    },
  },
};