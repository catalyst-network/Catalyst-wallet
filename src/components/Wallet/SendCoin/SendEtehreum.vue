<template>
  <div>
    <div class="send-coin-box">
      <div class="send-modal-heading">
        <h3>{{ $t('recipient') }}</h3>
        <span class="h3-line" />
        <q-btn
          :label="$t('paste')"
          size="sm"
          class="send-heading-btn paste-btn"
          @click="paste"
        />
      </div>
      <div class="to">
        <q-input
          v-model="address"
          :error="$v.address.$error"
          placeholder="address"
          class="sm-input address-input"
          outlined
          dense
          color="primary"
          @blur="checkField('address')"
          @input="checkField('address')"
        />
        <div
          class="side-content qr-code-wrapper"
          @click="scan"
        >
          <div class="hor-line" />
          <div class="ver-line" />
          <img src="~assets/QR.svg">
        </div>
      </div>
      <span class="error-label error-label-address">
        {{ addressError }}
      </span>
      <div class="send-modal-heading">
        <h3>{{ $t('amount') }}</h3>
        <span class="h3-line" />
        <q-btn
          :label="$t('max')"
          :class="{ active: maxed }"
          size="sm"
          class="send-heading-btn max-button"
          @click="max"
        />
      </div>
      <div class="amount">
        <div class="amount-div-wrapper">
          <q-input
            v-model="inCoin"
            :error="$v.inCoin.$error"
            :disable="maxed"
            type="number"
            placeholder="0"
            class="sm-input amount-in-coin"
            outlined
            dense
            color="primary"
            @focus="updateInCoinFocus(true)"
            @focus.native="updateInCoinFocus(true)"
            @blur="updateInCoinFocus(false)"
            @blur.native="updateInCoinFocus(false)"
            @input="validateInput('inCoin')"
          />
          <div class="side-content">
            {{ coinSymbol }}
          </div>
        </div>
        <div
          v-if="latestPrice"
          class="amount-div-wrapper"
        >
          <q-input
            v-model="inCurrency"
            :error="$v.inCoin.$error"
            :disable="maxed"
            type="number"
            placeholder="0"
            class="sm-input amount-in-currency"
            outlined
            dense
            color="primary"
            @focus="updateInCurrencyFocus(true)"
            @focus.native="updateInCurrencyFocus(true)"
            @blur="updateInCurrencyFocus(false)"
            @blur.native="updateInCurrencyFocus(false)"
            @input="validateInput('inCoin')"
          />
          <div class="side-content">
            {{ selectedCurrency.code }}
          </div>
        </div>
      </div>
      <span class="error-label error-label-amount">
        {{ amountError }}
      </span>
      <!-- <div class="send-modal-heading">
        <h3>
          Fee
        </h3>
        <span class="h3-line" />
      </div> -->
      <!-- <div>
        <div class="fee">
          <q-slider
            v-model="feeSetting"
            :label-value="customFeeLabel(feeSetting)"
            :min="0"
            :max="2"
            :step="1"
            color="blueish"
            label-always
            snap
            markers
            @input="feeChange"
          />
        </div>
        <div class="estimated-fee">
          {{ $t('estimatedTransaction') }} {{ estimatedFee }}
        </div>
      </div> -->
      <div class="send">
        <q-btn
          :label="$t('send')"
          color="blueish"
          class="send-btn"
          size="md"
          @click="send"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  alphaNum,
  between,
} from 'vuelidate/lib/validators';
import {
  AmountFormatter,
  getBalance,
} from '@/helpers';
import { mapState } from 'vuex';
import Coin from '@/store/wallet/entities/coin';
import Wallet from '@/store/wallet/entities/wallet';

export default {
  name: 'SendEthereum',
  components: {
  },
  data() {
    return {
      address: '',
      inCoin: '',
      inCurrency: '',
      inCoinFocus: false,
      inCurrencyFocus: false,
      sendingModalOpened: false,
      feeSetting: 1,
      fee: 0,
      rawFee: 5,
      feeData: null,
      estimatedFee: 'N/A',
      maxed: false,
      maxValueCoin: Infinity,
      maxValueCurrency: Infinity,
      addressError: '',
      amountError: '',
      feeDialogOpened: false,
      weiMultiplier: 1000000000000000000,
      addressLength: 42,
    };
  },

  validations() {
    return {
      address: {
        required,
        alphaNum,
        between: (value) => {
          return value.length <= this.addressLength && value.length >= this.addressLength;
        },
        isValidAddress: (value) => { return this.validateAddress(value); },
      },
      inCoin: {
        required,
        between: between(0, this.maxValueCoin),
      },
      inCurrency: {
        required,
        between: between(0, this.maxValueCurrency),
      },
    };
  },

  computed: {
    ...mapState({
      id: (state) => { return state.route.params.id; },
      authenticatedAccount: (state) => { return state.settings.authenticatedAccount; },
      delay: (state) => { return state.settings.delay; },
      scannedAddress: (state) => { return state.qrcode.scannedAddress; },
      scannedAmount: (state) => { return state.qrcode.scannedAmount; },

    }),
    wallet() {
      if (this.id) {
        return this.$store.getters['entities/wallet/find'](this.id);
      }
      return Wallet.query().where((wallet) => {
        return wallet.name === 'Catalyst' && wallet.account_id === this.authenticatedAccount;
      }).get()[0];
    },

    selectedCurrency() {
      return this.$store.state.settings.selectedCurrency;
    },

    supportedCoins() {
      return Coin.all();
    },

    coinSymbol() {
      return this.supportedCoins.find((coin) => {
        return coin.name === this.wallet.name;
      }).symbol;
    },

    coinDenomination() {
      if (this.wallet.sdk === 'ERC20') {
        const num = 0;
        const denomination = num.toFixed(this.wallet.decimals);
        return denomination;
      }
      const { denomination } = this.supportedCoins.find((coin) => {
        return coin.name === this.wallet.name;
      });
      return denomination;
    },

    latestPrice() {
      const prices = this.$store.getters['entities/latestPrice/find'](`${this.coinSymbol}_${this.selectedCurrency.code}`);
      if (!prices) {
        return null;
      }
      return prices.data.PRICE;
    },

    decimals() {
      if (this.wallet.sdk === 'ERC20') {
        const { decimals } = this.wallet;
        return decimals;
      }
      const decimals = 17;
      return decimals;
    },
  },

  watch: {
    inCoin(val) {
      if (val === null || val === '') {
        this.inCurrency = '';
        this.validateInput('inCoin');
        return false;
      }

      if (!this.inCurrencyFocus) {
        this.inCurrency = this.amountToCurrency(val);
      }

      this.validateInput('inCoin');
      return false;
    },

    inCurrency(val) {
      if (val === null || val === '') {
        this.inCoin = '';
        return false;
      }
      if (this.inCurrencyFocus && !this.maxed) {
        this.inCoin = this.currencyToCoin(val);
      }
      return false;
    },
  },

  async mounted() {
    console.log('opened');
    // await this.getFee();
    this.maxValueCoin = this.getMaxAmount();
    this.maxValueCurrency = this.amountToCurrency(this.maxValueCoin);
    if (this.scannedAddress && this.scannedAmount && (this.scannedAmount <= this.maxValueCoin)) {
      this.address = this.scannedAddress;
      this.inCoin = this.scannedAmount;
      await this.send();
      this.$store.dispatch('qrcode/setScannedAddress', null);
      this.$store.dispatch('qrcode/setScannedAmount', null);
    } else {
      if (this.scannedAddress) {
        this.address = this.scannedAddress;
        this.$store.dispatch('qrcode/setScannedAddress', null);
      }
      setTimeout(() => {
        if (this.scannedAmount) {
          this.inCoin = this.scannedAmount;
          this.$store.dispatch('qrcode/setScannedAmount', null);
        }
      }, this.delay.normal);
    }
  },

  methods: {
    validateAddress(address) {
      const coinSDK = this.coinSDKS.Ethereum;
      return coinSDK.validateAddress(address, this.wallet.network);
    },

    countDecimals(value) {
      if (value.toString().split('.')[1]) {
        return value.toString().split('.')[1].length;
      }
      return 0;
    },

    updateInCoinFocus(val) {
      if (!val) {
        if (this.inCoin > 0 && this.countDecimals(this.inCoin) > this.decimals) {
          this.inCoin = this.formatAmount(this.inCoin, this.coinDenomination);
        }
        this.validateInput('inCoin');
      }
      this.inCoinFocus = val;
    },
    updateInCurrencyFocus(val) {
      if (!val) {
        if (this.inCurrency > 0) {
          this.inCurrency = this.formatAmount(this.inCurrency, '0.00');
        }
        this.validateInput('inCoin');
      }
      this.inCurrencyFocus = val;
    },

    validateInput(field) {
      this.checkField(field);
    },
    async checkField(field) {
      if (field === 'address') {
        this.$v.address.$touch();

        if (!this.$v.address.between) {
          this.addressError = this.$t('ethereumAddressInvalidLength');
        } else if (!this.$v.address.isValidAddress) {
          this.addressError = this.$t('ethereumAddressInvalid');
        } else {
          this.addressError = '';
        }
      }

      if (field === 'inCoin') {
        this.$v.inCoin.$touch();
        this.$v.inCurrency.$touch();

        if (!this.$v.inCoin.between) {
          this.amountError = this.$t('notEnoughFunds');
        } else {
          this.amountError = '';
        }

        if (!this.$v.inCoin.$model) {
          this.amountError = this.$t('noAmount');
        }
      }
    },

    formatAmount(amount, format) {
      const formattedAmount = new AmountFormatter({
        amount,
        format,
      });

      return formattedAmount.getFormatted();
    },


    /**
     * Converts coins to currency as user types
     */
    amountToCurrency(amount) {
      const formattedAmount = new AmountFormatter({
        amount,
        rate: this.latestPrice,
        format: '0.00',
        coin: this.wallet.name,
        prependPlusOrMinus: false,
        currency: this.selectedCurrency,
        toCurrency: true,
      });

      return formattedAmount.getFormatted();
    },

    /**
     * Converts currency to coin as user types
     */
    currencyToCoin(amount) {
      const formattedAmount = new AmountFormatter({
        amount,
        rate: this.latestPrice,
        format: this.coinDenomination,
        coin: this.wallet.name,
        prependPlusOrMinus: false,
        currency: this.selectedCurrency,
        toCoin: true,
      });
      return parseFloat(formattedAmount.getFormatted());
    },

    /**
     * Allows to display a custom fee label on Quasar component
     */
    customFeeLabel(feeSetting) {
      if (feeSetting === 0) {
        return this.$t('lowFeeLabel');
      }

      if (feeSetting === 1) {
        return this.$t('mediumFeeLabel');
      }

      return this.$t('highFeeLabel');
    },

    async feeChange() {
      this.getFee();
      if (this.maxed) {
        this.updateMax();
      }
    },

    /**
     * Fetches and sets an estimated fee
     */
    async getFee() {
      const online = window ? window.navigator.onLine : navigator.connection === 'none';
      if (online) {
        let gasLimit = 21000;
        let coinSymbol = this.wallet.symbol;
        let currentPrice = this.latestPrice;
        if (this.wallet.sdk === 'ERC20') {
          let amount = '1';
          let to = '0xcc345035D14458B3C012977f96fA1E116760D60a';
          if (this.inCoin) {
            amount = this.inCoin;
          }
          if (this.address) {
            to = this.address;
          }
          const gasUsed = await this.coinSDKS.ERC20.estimateGas(
            this.wallet.erc20Wallet,
            to,
            amount,
            this.wallet.network,
          );
          gasLimit = gasUsed;
          coinSymbol = 'ETH';
          currentPrice = this.$store.getters['entities/latestPrice/find'](`${coinSymbol}_${this.selectedCurrency.code}`).data.PRICE;
        }

        const response = await this.backEndService.getTransactionFee(coinSymbol);
        const { data } = response;
        const fees = {
          low: data.low,
          medium: data.medium,
          high: data.high,
        };

        let fee = (fees.medium * gasLimit) / this.weiMultiplier;
        if (this.feeSetting === 0) {
          fee = (fees.low * gasLimit) / this.weiMultiplier;
        }

        if (this.feeSetting === 2) {
          fee = (fees.high * gasLimit) / this.weiMultiplier;
        }

        let rawFee = fees.medium;
        if (this.feeSetting === 0) {
          rawFee = fees.low;
        }

        if (this.feeSetting === 2) {
          rawFee = fees.high;
        }

        this.fee = rawFee;
        this.rawFee = rawFee * gasLimit;
        this.feeData = fees;

        const formattedFee = new AmountFormatter({
          amount: fee,
          rate: currentPrice,
          format: '0.00',
          coin: this.wallet.name,
          currency: this.selectedCurrency,
          toCurrency: true,
          withCurrencySymbol: true,
        });

        const decimals = 6;
        this.estimatedFee = `${fee.toFixed(decimals)} ${coinSymbol} (${formattedFee.getFormatted()})`;
      } else {
        this.estimatedFee = this.$t('N/A');
      }
    },

    /**
     * Validates input fields
     * @return {Boolean}
     */
    isInvalid() {
      if (!this.address) { return this.$t('fillAllInputs'); }
      if (!this.inCoin) { return this.$t('fillAllInputs'); }
      if (this.addressError) { return this.addressError; }
      if (this.amountError) { return this.amountError; }

      return false;
    },

    availableBalance() {
      return getBalance(this.wallet, this.authenticatedAccount).available;
    },

    async sendETH() {
      const coinSDK = this.coinSDKS[this.wallet.sdk];
      const wallet = this.activeWallets[this.authenticatedAccount][this.wallet.name];
      const keypair = coinSDK.generateKeyPair(wallet, 0);

      try {
        const {
          transaction,
          hexTx,
        } = await coinSDK.createEthTx(keypair, this.address, this.inCoin, this.fee);

        this.$store.dispatch('modals/setConfirmTransactionData', {
          hexTx,
          transaction,
        });

        this.$store.dispatch('modals/setConfirmSendModalOpened', true);
      } catch (err) {
        this.errorHandler(err);
      }
    },

    async sendERC20() {
      const coinSDK = this.coinSDKS[this.wallet.sdk];
      const wallet = this.activeWallets[this.authenticatedAccount][this.wallet.name];
      const parentWallet = this.activeWallets[this.authenticatedAccount][this.wallet.parentName];
      const keypair = this.coinSDKS[this.wallet.parentSdk].generateKeyPair(parentWallet, 0);

      try {
        const {
          transaction,
          hexTx,
        } = await coinSDK.transfer(wallet, keypair, this.address, this.inCoin, this.fee);

        this.$store.dispatch('modals/setConfirmTransactionData', {
          hexTx,
          transaction,
        });

        this.$store.dispatch('modals/setConfirmSendModalOpened', true);
      } catch (err) {
        this.errorHandler(err);
      }
    },

    /**
     * Creates and sends a transaction
     */
    async send() {
      const online = window ? window.navigator.onLine : navigator.connection === 'none';
      if (online) {
        if (this.isInvalid()) {
          this.$toast.create(10, this.isInvalid(), this.delay.normal);
        } else if (this.wallet.sdk === 'ERC20') {
          await this.sendERC20();
        } else {
          await this.sendETH();
        }
      }
    },

    /**
     * Pastes in the text from the clipboard
     */
    // paste() {
    //   try {
    //     cordova.plugins.clipboard.paste((text) => {
    //       this.address = text;
    //     });
    //   } catch (err) {
    //     this.errorHandler(err);
    //   }
    // },

    async paste() {
      navigator.clipboard.readText().then((clipText) => {
        this.address = clipText;
      });
    },

    async max() {
      if (this.maxed) {
        this.maxed = false;
        this.inCoin = '';
        this.inCurrency = '';
        this.estimatedFee = 'N/A';
      } else {
        this.maxed = true;
        this.updateMax();
      }
    },

    getMaxAmount() {
      if (this.wallet.sdk === 'ERC20') {
        return this.availableBalance();
      }
      return ((this.availableBalance() * this.weiMultiplier) - this.rawFee) / this.weiMultiplier;
    },

    updateMax() {
      this.inCoin = this.getMaxAmount();
    },

    /**
     * Initiates the QR code scanner
     */
    scan() {
      this.$store.dispatch('qrcode/scanQRCode');
      this.$store.dispatch('modals/setSendCoinModalOpened', false);
      const invalidAddress = this.$t('ethereumAddressInvalid');
      // const codeReader = new this.$QRScanner();
      setTimeout(() => {
        const scanQR = () => {
          this.codeReader
            .decodeOnceFromVideoDevice(undefined, 'video')
            .then((result) => {
              let { text } = result;
              let amount;
              if (text.includes(':')) {
                const query = new URL(text);
                text = query.pathname;
                const queryParams = new URLSearchParams(query.search);
                if (queryParams.has('amount')) {
                  amount = queryParams.get('amount');
                }
              }
              let coinSDK = this.coinSDKS[this.wallet.sdk];
              if (this.wallet.sdk === 'ERC20') { coinSDK = this.coinSDKS[this.wallet.parentSdk]; }
              const isValid = coinSDK.validateAddress(text, this.wallet.network);
              if (isValid) {
                this.$store.dispatch('qrcode/setScannedAddress', text);
                if (amount) {
                  this.$store.dispatch('qrcode/setScannedAmount', amount);
                }
                this.codeReader.reset();

                this.$store.dispatch('qrcode/cancelScanning');
                this.$store.dispatch('modals/setSendCoinModalOpened', true);
              } else {
                this.$toast.create(10, invalidAddress, this.delay.normal);
                const waitForToast = 5000;
                setTimeout(() => { return scanQR(); }, waitForToast);
              }
            })
            .catch((err) => { return console.error(err); });
          this.codeReader.reset();
        };
        scanQR();
      }, this.delay.normal);
    },
  },
};
</script>

<style>

</style>
