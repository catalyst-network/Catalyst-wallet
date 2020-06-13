import * as CryptoWalletSDK from 'cryptowallet-js';

export default async ({ Vue }) => {
  const CryptoWallet = await CryptoWalletSDK.default();
  // eslint-disable-next-line new-cap
  const SDK = new CryptoWallet.default();

  Vue.prototype.coinSDKS = {
    Bitcoin: SDK.SDKFactory.createSDK('Bitcoin'),
    Ethereum: SDK.SDKFactory.createSDK('Ethereum'),
    Catalyst: SDK.SDKFactory.createSDK('Catalyst', { provider: 'https://api.catalystnet.org:2053/api/eth/request' }),
    ERC20: SDK.SDKFactory.createSDK('ERC20'),
  };
};
