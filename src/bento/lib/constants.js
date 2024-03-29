import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xDdca0E44e69e6f06939fF7c39B71A23D930D4FF1', //'0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0x0a180a76e4466bf68a7f86fb029bed3cccfaaac5', // '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x232229F91643674Ae7A796f26d6246681F6311f3', // '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x583F44e01C2daf25D527980d4b19A05d3B43659c', //'0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  bento: {
    1: '0xE90b13eCA5Bb4fa0e5Ed3e54A85220058aeA80B5',
  },
  bentoChef: {
    1: '0x1D456A3C71e969987F4463Da63f527f04AD83297',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    3: '0x0a180a76e4466bf68a7f86fb029bed3cccfaaac5'
  },
  xBento: {
    1: '0x48B6244378929133E9507Ad0D93B99Cdbb68C987',
  }
}
// MainNet:
// BentoToken : 0xE90b13eCA5Bb4fa0e5Ed3e54A85220058aeA80B5
// BentoChef: 0x1D456A3C71e969987F4463Da63f527f04AD83297
// BentoBar: 0x48B6244378929133E9507Ad0D93B99Cdbb68C987
// BentoLock: 0xa0989f65247Ea4554fd88568D1aEd3e566e8D211

//100
// V2 Ropsten
// BentoToken : 0x253F5A244aa8eDEcf5F0D5e4d2AAe9A1a48F31d8
// BentoChef: 0x25a3D71079F2DC26ea561166269ED5098847D441
// BentoBar: 0x5006EcDfF7e0b31F5fbea0069398CAd5bD83FEAF
/*
SLP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 BENTO 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/


export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
      3: '0x20aFA75332dEdDa6140d0A48Bb6570721170d666',
    },
    tokenAddresses: {
      1: '0xE90b13eCA5Bb4fa0e5Ed3e54A85220058aeA80B5',
      3: '0x253F5A244aa8eDEcf5F0D5e4d2AAe9A1a48F31d8'
    },
    name: 'Bento Party!',
    symbol: 'BENTO-ETH UNI-V2 LP',
    tokenSymbol: 'BENTO',
    icon: '🍱',
  },
  {
    pid: 0,
    lpAddresses: {
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'DAI DOG',
    symbol: 'DAI-ETH UNI-V2 LP',
    tokenSymbol: 'DAI',
    icon: '🐕',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Tether Turkey',
    symbol: 'USDT-ETH UNI-V2 LP',
    tokenSymbol: 'USDT',
    icon: '🦃',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Circle Snake',
    symbol: 'USDC-ETH UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: '🐍',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
    },
    tokenAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'Link Lion',
    symbol: 'LINK-ETH UNI-V2 LP',
    tokenSymbol: 'LINK',
    icon: '🦁',
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0xd3d2e2692501a5c9ca623199d38826e513033a17',
    },
    tokenAddresses: {
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    },
    name: 'Uni Unicorn',
    symbol: 'UNI-ETH UNI-V2 LP',
    tokenSymbol: 'UNI',
    icon: '🦄',
  },
]