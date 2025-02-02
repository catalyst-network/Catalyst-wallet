<template>
  <div v-if="wallet">
    <Transactions :wallet="wallet" />
  </div>
</template>

<script>
import Transactions from '@/components/Wallet/Transactions';
import { mapState } from 'vuex';
import refreshWallet from '@/helpers/RefreshWallet';
import Wallet from '@/store/wallet/entities/wallet';

export default {
  name: 'WalletSingle',

  components: {
    Transactions,
  },

  data() {
    return {
      checkForUpdates: null,
      interval: 15000,
      timeout: 300000,
      startTime: null,
      balanceChanged: false,
    };
  },

  computed: {
    ...mapState({
      authenticatedAccount: (state) => { return state.settings.authenticatedAccount; },
      id: (state) => { return state.route.params.id; },
      delay: (state) => { return state.settings.delay; },
    }),

    wallet() {
      if (this.id) {
        return this.$store.getters['entities/wallet/find'](this.id);
      }
      return Wallet.query().where((wallet) => {
        return wallet.name === 'Catalyst' && wallet.account_id === this.authenticatedAccount;
      }).get()[0];
    },
  },

  async activated() {
    let fullRefresh = false;

    this.startTime = Date.now();
    this.checkForUpdates = setInterval(async () => {
      const time = Date.now();
      if (time - this.startTime > this.timeout) {
        clearInterval(this.checkForUpdates);
      }
      if (this.balanceChanged && this.wallet.sdk !== 'Bitcoin') { fullRefresh = true; }
      await this.refresher(() => {}, fullRefresh);
    }, this.interval);

    setTimeout(async () => {
      await this.refresher(() => {});
    }, this.delay.short);
  },

  deactivated() {
    this.worker = null;
    this.balanceChanged = false;
    clearInterval(this.checkForUpdates);
  },

  mounted() {
    this.$root.$on('updateWalletSingle', async (done) => {
      try {
        // await this.backEndService.loadCoinPriceData(this.wallet.symbol);
        await this.refresher(done);
      } catch (err) {
        this.errorHandler(err);
        done();
      }
    });
  },

  methods: {
    /**
     * Performs a wallet update
     */
    async refresher(done, fullRefresh = true) {
      const online = window ? window.navigator.onLine : navigator.connection === 'none';
      if (online) {
        this.balanceChanged = await refreshWallet(
          this.coinSDKS[this.wallet.sdk], this.wallet, 0, fullRefresh,
        );
        setTimeout(() => {
          done();
        }, this.delay.normal);
      } else { done(); }
    },
  },
};
</script>

<style scoped>

</style>
