(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["2d6e798f"],{

/***/ "5870":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/UnAuthed/index.vue?vue&type=template&id=74d45351&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-layout',[_c('q-header',[_c('Header')],1),_c('div',{staticClass:"flex justify-center bg-primary"},[_c('div',{staticClass:"layout-wrapper background",class:{ 'no-footer': !_vm.isMainNavVisible }},[_c('router-view')],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/UnAuthed/index.vue?vue&type=template&id=74d45351&

// EXTERNAL MODULE: ./src/layouts/Header/index.vue + 4 modules
var Header = __webpack_require__("cda3");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/UnAuthed/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UnAuthedvue_type_script_lang_js_ = ({
  name: 'UnAuthedLayout',
  components: {
    Header: Header["a" /* default */]
  },
  data: function data() {
    return {
      isMainNavVisible: false
    };
  }
});
// CONCATENATED MODULE: ./src/layouts/UnAuthed/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_UnAuthedvue_type_script_lang_js_ = (UnAuthedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layouts/UnAuthed/index.vue?vue&type=style&index=0&lang=css&
var UnAuthedvue_type_style_index_0_lang_css_ = __webpack_require__("a8c0");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/layouts/UnAuthed/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_UnAuthedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UnAuthed = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "a8c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c9ed");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b359":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c9ed":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cda3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/Header/index.vue?vue&type=template&id=7cfc136e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"transaction-notification"},[_c('q-dialog',{attrs:{"seamless":"","position":"bottom","content-class":_vm.getClass},model:{value:(_vm.showTxNotification),callback:function ($$v) {_vm.showTxNotification=$$v},expression:"showTxNotification"}},[(_vm.newTxModalData)?_c('div',{staticClass:"row justify-between",staticStyle:{"width":"100%","max-width":"600px"}},[_c('div',{staticClass:"col-2"},[_c('img',{staticClass:"coin-logo",attrs:{"src":_vm.newTxModalData.logo}})]),_c('div',{staticClass:"label col-6"},[_vm._v("\n          "+_vm._s(_vm.$t('newTxIntro'))+" "+_vm._s(_vm.newTxModalData.value)+" "+_vm._s(_vm.newTxModalData.symbol)+"!\n        ")]),_c('div',{staticClass:"button-grp col-4"},[_c('q-btn',{attrs:{"flat":"","label":_vm.$t('view')},on:{"click":function($event){return _vm.viewTx(_vm.newTxModalData.id, _vm.newTxModalData.wallet_id)}}}),_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","icon":"close"},on:{"click":_vm.closeNotification}})],1)]):_vm._e()])],1),(!_vm.hideHeader)?_c('section',{staticClass:"header-section"},[_c('div',{staticClass:"header-back-button-wrapper"},[_c('q-btn',{staticClass:"icon-btn back-arrow-btn",class:{ hideBackButton: !_vm.isBackButtonEnabled },attrs:{"disable":!_vm.isBackButtonEnabled,"icon":"arrow_back","color":"primary","size":"lg","flat":""},on:{"click":function($event){$event.preventDefault();return _vm.goBack($event)}}})],1),(_vm.coinHeading)?_c('div',[_c('h1',{staticClass:"header-h1"},[_c('img',{staticClass:"coin-logo",attrs:{"src":_vm.coinLogo}}),_vm._v("\n        "+_vm._s(_vm.wallet.displayName)+"\n      ")])]):_c('div',[(_vm.heading === 'CryptoWallet')?_c('div',[_c('h1',{staticClass:"header-h1 logo"},[_vm._v("\n          "+_vm._s(_vm.heading)+"\n        ")])]):_c('div',[_c('h1',{staticClass:"header-h1"},[_vm._v("\n          "+_vm._s(_vm.heading)+"\n        ")])])]),(_vm.displayPriceChart)?_c('div',{staticClass:"header-settings-button-wrapper"}):_vm._e(),(_vm.displayAccounts)?_c('div',{staticClass:"header-accounts-button-wrapper"},[_c('q-btn',{staticClass:"icon-btn icon-btn-right",attrs:{"icon":"people","color":"primary","size":"lg","flat":""},on:{"click":function($event){$event.preventDefault();return _vm.setAccountModalOpened(true)}}})],1):_vm._e(),(_vm.coinHeading)?_c('div',{staticClass:"header-accounts-button-wrapper"},[_c('q-btn',{staticClass:"icon-btn icon-btn-right",attrs:{"icon":"crop_free","color":"primary","size":"lg","flat":""},on:{"click":function($event){$event.preventDefault();return _vm.scan($event)}}})],1):_vm._e()]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/Header/index.vue?vue&type=template&id=7cfc136e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("386d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("06db");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js
var defineProperty = __webpack_require__("c47a");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/statics/cc-icons/icons-list.json
var icons_list = __webpack_require__("58fc");

// EXTERNAL MODULE: ./src/store/wallet/entities/wallet.js
var entities_wallet = __webpack_require__("3d84");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/Header/index.vue?vue&type=script&lang=js&













function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: 'Header',
  data: function data() {
    return {
      isBackButtonEnabled: false,
      newTxModalData: null,
      showTxNotification: false,
      enableTxNotification: true
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    id: function id(state) {
      return state.route.params.id;
    },
    delay: function delay(state) {
      return state.settings.delay;
    },
    modals: function modals(state) {
      return state.modals;
    }
  })), {}, {
    wallet: function wallet() {
      if (this.id) {
        return this.$store.getters['entities/wallet/find'](this.id);
      }

      return entities_wallet["a" /* default */].query().where(function (wallet) {
        return wallet.name === 'Catalyst' && wallet.account_id === 1;
      }).get()[0];
    },
    selectedCurrency: function selectedCurrency() {
      return this.$store.state.settings.selectedCurrency;
    },
    displayAccounts: function displayAccounts() {
      return this.$route.path === '/';
    },
    displayAddWallet: function displayAddWallet() {
      return this.$route.path === '/wallet';
    },
    displayPriceChart: function displayPriceChart() {
      if (this.wallet && this.selectedCurrency) {
        var price = this.$store.getters['entities/latestPrice/find']("".concat(this.wallet.symbol, "_").concat(this.selectedCurrency.code));

        if (price) {
          return this.$route.name === 'walletSingle' || this.$route.name === 'sendCoinSingle';
        }
      }

      return false;
    },
    heading: function heading() {
      if (this.$route.name === 'setup') {
        return '';
      }

      if (this.$route.name === 'exchange') {
        return this.$t('exchange');
      }

      if (this.$route.name === 'settings') {
        return this.$t('settings');
      }

      return this.$t('cryptoWallet');
    },
    coinHeading: function coinHeading() {
      if (this.$route.name === 'walletSingle' || this.$route.name === 'sendCoinSingle' || this.$route.name === 'receiveCoinSingle' || this.$route.name === 'coinSinglePrices' || this.$route.name === 'wallet') {
        return true;
      }

      return false;
    },
    getClass: function getClass() {
      if (this.$route.name === 'walletSingle' || this.$route.name === 'wallet' || this.$route.name === 'settings') {
        return 'transaction-notification bottom-space';
      }

      return 'transaction-notification bottom';
    },
    hideHeader: function hideHeader() {
      if (this.$route.path === '/setup/0') {
        return true;
      }

      return false;
    },
    coinLogo: function coinLogo() {
      var _this = this;

      if (icons_list.find(function (icon) {
        return icon.symbol === _this.wallet.symbol.toUpperCase();
      })) {
        return "./statics/cc-icons/color/".concat(this.wallet.symbol.toLowerCase(), ".svg");
      }

      return './statics/cc-icons/color/generic.svg';
    },
    txsLength: function txsLength() {
      return this.$store.getters['entities/tx/all']().length;
    },
    txs: function txs() {
      return this.$store.getters['entities/tx/all']();
    }
  }),
  watch: {
    $route: function $route() {
      if (window.history.length > 0 && this.$route.path !== '/setup/0' && this.$route.path !== '/setup/7' && this.$route.path !== '/' && this.$route.path !== '/wallet') {
        this.isBackButtonEnabled = true;
      } else {
        this.isBackButtonEnabled = false;
      }
    },
    txsLength: function txsLength(newValue, oldValue) {
      if (this.enableTxNotification && newValue > oldValue) {
        var newTransactions = this.txs.slice(oldValue);
        this.showNotification(newTransactions);
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$root.$on('enableTxNotifications', function (value) {
      _this2.enableTxNotification = value;
    });
  },
  methods: {
    goBack: function goBack() {
      this.$router.go(-1);
    },
    setAccountModalOpened: function setAccountModalOpened(value) {
      this.$store.dispatch('modals/setSelectAccountModalOpened', value);
    },
    openWalletsModal: function openWalletsModal() {
      this.$store.dispatch('modals/setAddWalletModalOpened', true);
    },
    openChartModal: function openChartModal() {
      this.$router.push({
        path: "/wallet/single/prices/".concat(this.wallet.id)
      });
    },
    showNotification: function showNotification(txs) {
      var _this3 = this;

      var tx = txs.shift();

      if (!tx.sent) {
        var wallet = this.$store.getters['entities/wallet/find'](tx.wallet_id);
        var logo;

        if (icons_list.find(function (icon) {
          return icon.symbol === wallet.symbol.toUpperCase();
        })) {
          logo = "./statics/cc-icons/color/".concat(wallet.symbol.toLowerCase(), ".svg");
        } else {
          logo = './statics/cc-icons/color/generic.svg';
        }

        this.newTxModalData = {
          logo: logo,
          value: tx.value,
          symbol: wallet.symbol,
          id: tx.hash,
          wallet_id: tx.wallet_id
        };
        this.showTxNotification = true;
        var wait = 10000;
        setTimeout(function () {
          _this3.showTxNotification = false;
          _this3.newTxModalData = null;

          if (txs.length > 0) {
            _this3.showNotification(txs);
          }
        }, wait);
      }
    },
    closeNotification: function closeNotification() {
      this.showTxNotification = false;
      this.newTxModalData = null;
    },
    viewTx: function viewTx(id, walletId) {
      var _this4 = this;

      Object.keys(this.modals).forEach(function (modal) {
        if (_this4.modals[modal] === true) {
          var capitalized = modal.charAt(0).toUpperCase() + modal.slice(1);

          _this4.$store.dispatch("modals/set".concat(capitalized), false);
        }
      });
      setTimeout(function () {
        var route = _this4.$route.name;

        if (route !== 'walletSingle') {
          _this4.$router.push({
            path: "/wallet/single/".concat(walletId)
          });
        }

        setTimeout(function () {
          _this4.$store.dispatch('modals/setNewTxData', id);

          _this4.closeNotification();
        }, _this4.delay.short);
      }, this.delay.short);
    },
    scan: function scan() {
      var _this5 = this;

      this.$store.dispatch('qrcode/setQRMode', 'restore');
      this.$store.dispatch('qrcode/scanQRCode');
      var invalidAddress = this.$t('ethereumAddressInvalid'); // const codeReader = new this.$QRScanner();

      setTimeout(function () {
        var scanQR = function scanQR() {
          _this5.codeReader.decodeOnceFromVideoDevice(undefined, 'video').then(function (result) {
            var text = result.text;
            var amount;

            if (text.includes(':')) {
              var query = new URL(text);
              text = query.pathname;
              var queryParams = new URLSearchParams(query.search);

              if (queryParams.has('amount')) {
                amount = queryParams.get('amount');
              }
            }

            var coinSDK = _this5.coinSDKS.Catalyst;
            var isValid = coinSDK.validateAddress(text, {});

            if (isValid) {
              _this5.$store.dispatch('qrcode/setScannedAddress', text);

              if (amount) {
                _this5.$store.dispatch('qrcode/setScannedAmount', amount);
              }

              _this5.codeReader.reset();

              _this5.$store.dispatch('qrcode/cancelScanning');

              _this5.$router.push({
                path: 'wallet/single/send/3'
              });
            } else {
              _this5.$toast.create(10, invalidAddress, _this5.delay.normal);

              var waitForToast = 5000;
              setTimeout(function () {
                return scanQR();
              }, waitForToast);
            }
          }).catch(function (err) {
            return console.error(err);
          });

          _this5.codeReader.reset();
        };

        scanQR();
      }, this.delay.normal);
    }
  }
});
// CONCATENATED MODULE: ./src/layouts/Header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layouts/Header/index.vue?vue&type=style&index=0&lang=css&
var Headervue_type_style_index_0_lang_css_ = __webpack_require__("eca4");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/layouts/Header/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Header = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "eca4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b359");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);