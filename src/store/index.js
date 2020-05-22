import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import VuexPersistence from 'vuex-persist';
import VuexORMLoki from '@atlascity/vuex-orm-plugin-lokijs';

// import entities.
import Account from './wallet/entities/account';
import Address from './wallet/entities/address';
import Tx from './wallet/entities/tx';
import Utxo from './wallet/entities/utxo';
import Wallet from './wallet/entities/wallet';
import Coin from './wallet/entities/coin';
import KeyPair from './wallet/entities/keyPair';
import Prices from './prices';
import LatestPrice from './latestPrice';
import Fees from './fees';


// import modules.
import settings from './settings';
import setup from './setup';
import qrcode from './qrcode';
import modals from './modals';

Vue.use(Vuex);

// Setup ORM database.
const database = new VuexORM.Database();

const vuexLocal = new VuexPersistence({
  key: 'Catalyst-Wallet',
  storage: window.localStorage,
});

database.register(Account, {});
database.register(Address, {});
database.register(Tx, {});
database.register(Utxo, {});
database.register(Wallet, {});
database.register(Coin, {});
database.register(KeyPair, {});
database.register(Prices, {});
database.register(LatestPrice, {});
database.register(Fees, {});


Vue.prototype.encryptedModels = [
  Account,
  Wallet,
];

window.Tx = Tx;
window.Utxo = Utxo;
window.Address = Address;
window.Wallet = Wallet;
window.LatestPrice = LatestPrice;
window.Prices = Prices;
window.Account = Account;
window.Coin = Coin;
window.Fees = Fees;

const options = {
  env: 'browser',
};

/**
 * Create CryptoWallet Vuex store obj.
 * @type {Store<any>}
 */
const store = new Vuex.Store({
  modules: {
    settings,
    setup,
    qrcode,
    modals,
  },
  plugins: [VuexORM.install(database), vuexLocal.plugin],
});

function hydrationCompletedCallback() {
  const delay = 1000;
  setTimeout(() => {
    store.dispatch('settings/setLoading', false);
  }, delay);
}

VuexORM.use(VuexORMLoki, { database, options, hydrationCompletedCallback });

Vue.prototype.activeWallets = {};

export default store;
