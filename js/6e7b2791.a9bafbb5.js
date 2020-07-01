(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["6e7b2791"],{

/***/ "0626":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Auth/PinPad/index.vue?vue&type=template&id=74a31f65&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('keyboard',{attrs:{"layouts":['123|456|789|0']},on:{"input":_vm.inputPin}}),_c('div',{staticClass:"dots-wrapper"},_vm._l((_vm.input),function(item){return _c('span',{key:item,staticClass:"dot"})}),0),_c('div',{staticClass:"btns-wrapper"},[_c('q-btn',{attrs:{"disabled":_vm.resetDisabled,"color":"secondary","label":"Clear"},on:{"click":_vm.clearPinArray}}),((_vm.mode === 'pin-setup'
        || _vm.mode === 'new-pin'
        || _vm.mode === 'pin-confirm'
        || _vm.mode === 'confirm-new-pin'))?_c('q-btn',{attrs:{"disabled":_vm.canProceed,"color":"primary","text-color":"blueish","label":_vm.$t('done')},on:{"click":_vm.done}}):_vm._e(),(_vm.mode != 'pin-setup'
        && _vm.mode != 'new-pin'
        && _vm.mode !== 'pin-confirm'
        && _vm.mode != 'confirm-new-pin'
        && _vm.mode != 'delete')?_c('q-btn',{attrs:{"disabled":_vm.canProceed,"color":"primary","text-color":"blueish","label":_vm.$t('unlock')},on:{"click":_vm.confirmPin}}):_vm._e(),(_vm.mode === 'delete')?_c('q-btn',{attrs:{"disabled":_vm.canProceed,"color":"red","text-color":"white","label":_vm.$t('delete')},on:{"click":_vm.confirmPin}}):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Auth/PinPad/index.vue?vue&type=template&id=74a31f65&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("06db");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js
var defineProperty = __webpack_require__("c47a");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/vue-keyboard/index.js
var vue_keyboard = __webpack_require__("3454");
var vue_keyboard_default = /*#__PURE__*/__webpack_require__.n(vue_keyboard);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Auth/PinPad/index.vue?vue&type=script&lang=js&








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


/* harmony default export */ var PinPadvue_type_script_lang_js_ = ({
  components: {
    keyboard: vue_keyboard_default.a
  },
  props: {
    mode: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      input: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    minLength: function minLength(state) {
      return state.settings.pin.minLength;
    },
    id: function id(state) {
      return parseInt(state.route.params.id, 10);
    }
  })), {}, {
    canProceed: function canProceed() {
      return this.input.length < this.minLength;
    },
    resetDisabled: function resetDisabled() {
      return this.input.length === 0;
    }
  }),
  mounted: function mounted() {
    this.clearPinArray();
  },
  methods: {
    /**
     * Emits pincode to parent components.
      * @param {*} pin
     */
    inputPin: function inputPin(pin) {
      if (window.navigator && window.navigator.vibrate) {
        var onInputVibrate = 25;
        window.navigator.vibrate(onInputVibrate);
      }

      this.input.push(Math.random());

      if (this.mode === 'pin-setup') {
        this.$store.dispatch('setup/setPin', {
          value: pin
        });
      }

      if (this.mode === 'pin-confirm') {
        this.$store.dispatch('setup/setPinConfirm', {
          value: pin
        });
      }

      if (this.mode === 'access' || this.mode === 'delete' || this.mode === 'new-pin' || this.mode === 'confirm-new-pin') {
        this.$emit('inputPin', pin);
      }

      if (this.mode === 'auth') {
        this.$root.$emit('inputPin', pin);
      }
    },
    confirmPin: function confirmPin() {
      if (this.mode === 'pin-confirm') {
        this.$parent.validatePin();
      }

      if (this.mode === 'auth') {
        this.$parent.attemptUnlock();
      }

      if (this.mode === 'access') {
        this.$emit('attemptUnlock');
      }

      if (this.mode === 'delete') {
        this.$emit('attemptUnlock');
      }
    },
    clearPinArray: function clearPinArray() {
      this.input = [];

      if (this.mode === 'pin-setup') {
        this.$store.dispatch('setup/resetPin');
      }

      if (this.mode === 'pin-confirm') {
        this.$store.dispatch('setup/resetPinConfirm');
      }

      if (this.mode === 'auth') {
        this.$parent.resetPin();
      }

      if (this.mode === 'access' || this.mode === 'delete' || this.mode === 'new-pin' || this.mode === 'confirm-new-pin') {
        this.$emit('resetPin');
      }
    },
    done: function done() {
      if (this.mode === 'pin-setup') {
        this.$router.push({
          path: "/setup/".concat(this.id + 1)
        });
      }

      if (this.mode === 'new-pin') {
        this.$emit('newPinSet');
      }

      if (this.mode === 'confirm-new-pin') {
        this.$emit('attemptConfirm');
      }

      if (this.mode === 'pin-confirm') {
        this.confirmPin();
      }
    },

    /**
     * Resets PinPad internal state
     */
    resetState: function resetState() {
      this.input = [];
    }
  }
});
// CONCATENATED MODULE: ./src/components/Auth/PinPad/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Auth_PinPadvue_type_script_lang_js_ = (PinPadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Auth/PinPad/index.vue?vue&type=style&index=0&lang=css&
var PinPadvue_type_style_index_0_lang_css_ = __webpack_require__("2b0a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Auth/PinPad/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Auth_PinPadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PinPad = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "2b0a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0626");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4399":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Settings/index.vue?vue&type=template&id=eb520472&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('AccountSettings')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Settings/index.vue?vue&type=template&id=eb520472&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSettings/index.vue?vue&type=template&id=68e519de&
var AccountSettingsvue_type_template_id_68e519de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"q-pt-xl q-mt-xl"},[_c('div',{staticClass:"settings-row",on:{"click":function($event){$event.preventDefault();return _vm.openNewPinModal($event)}}},[_c('div',[_vm._v("\n      "+_vm._s(_vm.$t('pinCode'))+"\n    ")]),_c('div',[_c('q-btn',{staticClass:"settings-chevron",attrs:{"icon":"chevron_right","size":"lg","color":"white","flat":""},on:{"click":function($event){$event.preventDefault();return _vm.openNewPinModal($event)}}})],1)]),_c('div',{staticClass:"settings-row",on:{"click":_vm.logout}},[_c('div',[_vm._v("\n      "+_vm._s(_vm.$t('logout'))+"\n    ")]),_c('div',[_c('q-btn',{staticClass:"settings-chevron",attrs:{"icon":"chevron_right","size":"lg","color":"white","flat":""},on:{"click":_vm.logout}})],1)]),_c('div',{staticClass:"settings-row",on:{"click":function($event){$event.preventDefault();return _vm.openDeleteAccountModal($event)}}},[_c('div',[_vm._v("\n      "+_vm._s(_vm.$t('deleteAccount'))+"\n    ")]),_c('div',[_c('q-btn',{staticClass:"settings-chevron",attrs:{"icon":"chevron_right","size":"lg","color":"white","flat":""},on:{"click":function($event){$event.preventDefault();return _vm.openDeleteAccountModal($event)}}})],1)]),_c('SelectLanguage',{attrs:{"current-locale":_vm.account.locale}}),_c('SelectCurrency',{attrs:{"current-currency":_vm.account.currency}}),_c('Pin',{attrs:{"pin-hash":_vm.account.pinHash}}),_c('DeleteAccount',{attrs:{"pin-hash":_vm.account.pinHash}})],1)}
var AccountSettingsvue_type_template_id_68e519de_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountSettings/index.vue?vue&type=template&id=68e519de&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("06db");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js
var defineProperty = __webpack_require__("c47a");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSettings/SelectLanguage.vue?vue&type=template&id=1ec248c4&
var SelectLanguagevue_type_template_id_1ec248c4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('q-dialog',{attrs:{"maximized":true,"transition-show":"slide-up","transition-hide":"slide-down","content-class":"dark-modal"},model:{value:(_vm.selectLanguageModalOpened),callback:function ($$v) {_vm.selectLanguageModalOpened=$$v},expression:"selectLanguageModalOpened"}},[_c('div',[_c('div',{staticClass:"header-section"},[_c('div',{staticClass:"header-back-button-wrapper"},[_c('q-btn',{staticClass:"icon-btn back-arrow-btn",attrs:{"icon":"arrow_back","size":"lg","flat":""},on:{"click":function($event){$event.preventDefault();return _vm.closeModal($event)}}})],1),_c('h1',{staticClass:"header-h1"},[_vm._v("\n          "+_vm._s(_vm.$t('language'))+"\n        ")])]),_c('div',{staticClass:"modal-layout-wrapper no-padding"},_vm._l((_vm.languages),function(key){return _c('div',{key:key,staticClass:"account-item"},[_c('div',[_vm._v(_vm._s(_vm.$t(key)))]),_c('div',{staticClass:"default-switch"},[_c('q-radio',{attrs:{"val":key,"dark":""},model:{value:(_vm.selectedLocale),callback:function ($$v) {_vm.selectedLocale=$$v},expression:"selectedLocale"}})],1)])}),0)])])],1)}
var SelectLanguagevue_type_template_id_1ec248c4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountSettings/SelectLanguage.vue?vue&type=template&id=1ec248c4&

// EXTERNAL MODULE: ./src/store/wallet/entities/account.js
var entities_account = __webpack_require__("5907");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSettings/SelectLanguage.vue?vue&type=script&lang=js&








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


/* harmony default export */ var SelectLanguagevue_type_script_lang_js_ = ({
  name: 'SelectLanguage',
  props: {
    currentLocale: {
      type: String,
      required: true
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    authenticatedAccount: function authenticatedAccount(state) {
      return state.settings.authenticatedAccount;
    }
  })), {}, {
    languages: function languages() {
      return Object.keys(this.$i18n.messages).map(function (key) {
        return key;
      });
    },

    /**
     * Updates the database on locale change
     */
    selectedLocale: {
      get: function get() {
        return this.currentLocale;
      },
      set: function set(newLocale) {
        var _this = this;

        entities_account["a" /* default */].$update({
          where: function where(record) {
            return record.id === _this.authenticatedAccount;
          },
          data: {
            locale: newLocale
          }
        });
        this.$i18n.locale = newLocale;
      }
    },
    selectLanguageModalOpened: {
      get: function get() {
        return this.$store.state.modals.selectLanguageModalOpened;
      },
      set: function set(value) {
        this.$store.dispatch('modals/setSelectLanguageModalOpened', value);
      }
    }
  }),
  methods: {
    closeModal: function closeModal() {
      this.selectLanguageModalOpened = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/AccountSettings/SelectLanguage.vue?vue&type=script&lang=js&
 /* harmony default export */ var AccountSettings_SelectLanguagevue_type_script_lang_js_ = (SelectLanguagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/AccountSettings/SelectLanguage.vue?vue&type=style&index=0&lang=css&
var SelectLanguagevue_type_style_index_0_lang_css_ = __webpack_require__("e544");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/AccountSettings/SelectLanguage.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AccountSettings_SelectLanguagevue_type_script_lang_js_,
  SelectLanguagevue_type_template_id_1ec248c4_render,
  SelectLanguagevue_type_template_id_1ec248c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SelectLanguage = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSettings/SelectCurrency.vue?vue&type=template&id=a4a18c8c&
var SelectCurrencyvue_type_template_id_a4a18c8c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('q-dialog',{attrs:{"persistent":"","maximized":true,"transition-show":"slide-up","transition-hide":"slide-down","content-class":"dark-modal"},model:{value:(_vm.selectCurrencyModalOpened),callback:function ($$v) {_vm.selectCurrencyModalOpened=$$v},expression:"selectCurrencyModalOpened"}},[_c('div',[_c('div',{staticClass:"header-section"},[_c('div',{staticClass:"header-back-button-wrapper"},[_c('q-btn',{staticClass:"icon-btn back-arrow-btn",attrs:{"icon":"arrow_back","size":"lg","flat":""},on:{"click":function($event){$event.preventDefault();return _vm.closeModal($event)}}})],1),_c('h1',{staticClass:"header-h1"},[_vm._v("\n          "+_vm._s(_vm.$t('currency'))+"\n        ")])]),_c('div',{staticClass:"modal-layout-wrapper no-padding"},_vm._l((_vm.currencies),function(key){return _c('div',{key:key,staticClass:"account-item"},[_c('div',[_vm._v(_vm._s(_vm.$t(key)))]),_c('div',{staticClass:"default-switch"},[_c('q-radio',{attrs:{"val":key,"dark":""},model:{value:(_vm.selectedCurrency),callback:function ($$v) {_vm.selectedCurrency=$$v},expression:"selectedCurrency"}})],1)])}),0)])])],1)}
var SelectCurrencyvue_type_template_id_a4a18c8c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountSettings/SelectCurrency.vue?vue&type=template&id=a4a18c8c&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("967e");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("fa84");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./src/store/wallet/entities/wallet.js
var entities_wallet = __webpack_require__("3d84");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSettings/SelectCurrency.vue?vue&type=script&lang=js&














function SelectCurrencyvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SelectCurrencyvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SelectCurrencyvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SelectCurrencyvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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



/* harmony default export */ var SelectCurrencyvue_type_script_lang_js_ = ({
  name: 'SelectCurrency',
  props: {
    currentCurrency: {
      type: String,
      required: true
    }
  },
  computed: SelectCurrencyvue_type_script_lang_js_objectSpread(SelectCurrencyvue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    authenticatedAccount: function authenticatedAccount(state) {
      return state.settings.authenticatedAccount;
    }
  })), {}, {
    currencies: function currencies() {
      return this.$store.state.settings.supportedCurrencies.map(function (item) {
        return item.code;
      });
    },
    account: function account() {
      return this.$store.getters['entities/account/find'](this.authenticatedAccount);
    },
    wallets: function wallets() {
      return entities_wallet["a" /* default */].query().where('account_id', this.authenticatedAccount).where('imported', true).get();
    },
    selectedCurrency: {
      get: function get() {
        return this.currentCurrency;
      },
      set: function set(newCurrency) {
        var _this = this;

        entities_account["a" /* default */].$update({
          where: function where(record) {
            return record.id === _this.authenticatedAccount;
          },
          data: {
            currency: newCurrency
          }
        });
        var currency = this.$store.state.settings.supportedCurrencies.find(function (item) {
          return item.code === _this.account.currency;
        });
        this.$store.dispatch('settings/setCurrency', currency);
      }
    },
    selectCurrencyModalOpened: {
      get: function get() {
        return this.$store.state.modals.selectCurrencyModalOpened;
      },
      set: function set(value) {
        this.$store.dispatch('modals/setSelectCurrencyModalOpened', value);
      }
    }
  }),
  methods: {
    refreshPrices: function refreshPrices() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var online, promises;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                online = window ? window.navigator.onLine : navigator.connection === 'none';

                if (!online) {
                  _context.next = 6;
                  break;
                }

                promises = [];

                _this2.wallets.forEach(function (wallet) {
                  promises.push(new Promise(function (res) {
                    return res(_this2.backEndService.loadCoinPriceData(wallet.symbol));
                  }));
                });

                _context.next = 6;
                return Promise.all(promises);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    closeModal: function closeModal() {
      this.refreshPrices();
      this.selectCurrencyModalOpened = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/AccountSettings/SelectCurrency.vue?vue&type=script&lang=js&
 /* harmony default export */ var AccountSettings_SelectCurrencyvue_type_script_lang_js_ = (SelectCurrencyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/AccountSettings/SelectCurrency.vue





/* normalize component */

var SelectCurrency_component = Object(componentNormalizer["a" /* default */])(
  AccountSettings_SelectCurrencyvue_type_script_lang_js_,
  SelectCurrencyvue_type_template_id_a4a18c8c_render,
  SelectCurrencyvue_type_template_id_a4a18c8c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SelectCurrency = (SelectCurrency_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSettings/Pin.vue?vue&type=template&id=ff6b4362&
var Pinvue_type_template_id_ff6b4362_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-dialog',{attrs:{"maximized":true,"transition-show":"slide-up","transition-hide":"slide-down","content-class":"dark-modal"},model:{value:(_vm.newPinModalOpened),callback:function ($$v) {_vm.newPinModalOpened=$$v},expression:"newPinModalOpened"}},[_c('div',[_c('div',{staticClass:"header-section"},[_c('div',{staticClass:"header-back-button-wrapper"},[_c('q-btn',{staticClass:"icon-btn back-arrow-btn",attrs:{"icon":"arrow_back","size":"lg","flat":""},on:{"click":function($event){$event.preventDefault();return _vm.closeModal($event)}}})],1),_c('h1',{staticClass:"header-h1"},[_vm._v("\n        "+_vm._s(_vm.$t('pinCode'))+"\n      ")])]),_c('div',{staticClass:"modal-layout-wrapper center"},[_c('h1',{staticClass:"setup with-margin"},[(!_vm.authorized)?_c('span',[_vm._v(_vm._s(_vm.$t('enterPin')))]):_vm._e(),(_vm.authorized && !_vm.newPinConfirmed)?_c('span',[_vm._v(_vm._s(_vm.$t('enterNewPin')))]):_vm._e(),(_vm.authorized && _vm.newPinConfirmed)?_c('span',[_vm._v(_vm._s(_vm.$t('repeatNewPin')))]):_vm._e()]),_c('PinPad',{ref:"PinPad",attrs:{"mode":_vm.mode},on:{"inputPin":_vm.pinInputListener,"attemptUnlock":_vm.attemptUnlock,"resetPin":_vm.resetPin,"newPinSet":_vm.storeNewPin,"attemptConfirm":_vm.updateAccount}})],1)])])}
var Pinvue_type_template_id_ff6b4362_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountSettings/Pin.vue?vue&type=template&id=ff6b4362&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./src/components/Auth/PinPad/index.vue + 4 modules
var PinPad = __webpack_require__("1877");

// EXTERNAL MODULE: ./node_modules/crypto-js/aes.js
var aes = __webpack_require__("c198");
var aes_default = /*#__PURE__*/__webpack_require__.n(aes);

// EXTERNAL MODULE: ./node_modules/crypto-js/enc-utf8.js
var enc_utf8 = __webpack_require__("f8d5");
var enc_utf8_default = /*#__PURE__*/__webpack_require__.n(enc_utf8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSettings/Pin.vue?vue&type=script&lang=js&













function Pinvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Pinvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Pinvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Pinvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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






/* harmony default export */ var Pinvue_type_script_lang_js_ = ({
  name: 'Pin',
  components: {
    PinPad: PinPad["a" /* default */]
  },
  props: {
    pinHash: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      pin: [],
      oldPin: null,
      newPin: null,
      authorized: false,
      newPinConfirmed: false,
      newPinHash: null,
      salt: null,
      mode: 'access'
    };
  },
  computed: Pinvue_type_script_lang_js_objectSpread(Pinvue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    authenticatedAccount: function authenticatedAccount(state) {
      return state.settings.authenticatedAccount;
    },
    delay: function delay(state) {
      return state.settings.delay;
    }
  })), {}, {
    account: function account() {
      return this.$store.getters['entities/account/find'](this.authenticatedAccount);
    },
    newPinModalOpened: {
      get: function get() {
        return this.$store.state.modals.newPinModalOpened;
      },
      set: function set(value) {
        this.$store.dispatch('modals/setNewPinModalOpened', value);
      }
    }
  }),
  methods: {
    /**
     * Decrypts and returns a piece of data
     * @param  {Uint8Array} data
     * @param  {String} password
     * @return {Any}
     */
    decrypt: function decrypt(data, password) {
      var bytes = aes_default.a.decrypt(data, password);
      return JSON.parse(bytes.toString(enc_utf8_default.a));
    },
    resetPin: function resetPin() {
      this.pin = [];
    },

    /**
     * Adds or removes pin input event to pin arr.
     */
    pinInputListener: function pinInputListener(pin) {
      this.pin.push(pin);
    },

    /**
     * Compares bcrypt pin string to try and unlock an account
     */
    attemptUnlock: function attemptUnlock() {
      if (this.$CWCrypto.bcryptCompareString(this.pin.join(''), this.account.pinHash) === true) {
        this.oldPin = this.pin;
        this.authorized = true;
        this.$refs.PinPad.resetState();
        this.resetPin();
        this.mode = 'new-pin';
      } else {
        this.$toast.create(10, this.$t('wrongPin'), this.delay.normal, 'top');
        this.$refs.PinPad.resetState();
        this.resetPin();
      }
    },

    /**
     * Closes the modal and resets the state
     */
    closeModal: function closeModal() {
      this.authorized = false;
      this.$refs.PinPad.resetState();
      this.resetPin();
      Object.assign(this.$data, this.$options.data.apply(this));
      this.newPinModalOpened = false;
    },

    /**
     * Gets the salt
     * @return {String}
     */
    getSalt: function getSalt() {
      if (this.salt) {
        return this.salt;
      }

      this.salt = this.$CWCrypto.getSalt();
      return this.salt;
    },

    /**
     * Generates new PIN hash
     */
    storeNewPin: function storeNewPin() {
      this.newPin = this.pin;
      this.newPinHash = this.$CWCrypto.bcryptHashString(this.pin.join(''), this.getSalt());
      this.newPinConfirmed = true;
      this.$refs.PinPad.resetState();
      this.resetPin();
      this.mode = 'confirm-new-pin';
    },

    /**
     * Encrypts sensitive data with the new pin
     */
    encryptPersistentData: function encryptPersistentData() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var wallets, account, data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wallets = entities_wallet["a" /* default */].query().where('account_id', _this.authenticatedAccount).get();
                wallets.forEach(function (wallet) {
                  entities_wallet["a" /* default */].AES.forEach(function (property) {
                    var data = {};
                    data[property] = wallet[property];
                    entities_wallet["a" /* default */].$update({
                      data: data,
                      where: function where(record) {
                        return record.id === wallet.id;
                      },
                      password: _this.newPin.join('')
                    });
                  });
                });
                account = entities_account["a" /* default */].query().where('id', _this.authenticatedAccount).get();
                data = {
                  pinHash: _this.newPinHash,
                  refresh_token: _this.decrypt(account[0].refresh_token, _this.oldPin.join('')),
                  seed: account[0].seed,
                  salt: _this.salt
                };
                entities_account["a" /* default */].$update({
                  data: data,
                  where: function where(record) {
                    return record.id === _this.authenticatedAccount;
                  },
                  password: _this.newPin.join('')
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /**
     * If new PIN confirmed correctly updates the account
     */
    updateAccount: function updateAccount() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.$CWCrypto.bcryptCompareString(_this2.pin.join(''), _this2.newPinHash)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 3;
                return _this2.encryptPersistentData();

              case 3:
                _this2.$toast.create(0, _this2.$t('pinChanged'), _this2.delay.normal);

                _this2.$refs.PinPad.resetState();

                _this2.resetPin();

                _this2.closeModal();

                _context2.next = 12;
                break;

              case 9:
                _this2.$toast.create(10, _this2.$t('wrongPin'), _this2.delay.normal, 'top');

                _this2.$refs.PinPad.resetState();

                _this2.resetPin();

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/AccountSettings/Pin.vue?vue&type=script&lang=js&
 /* harmony default export */ var AccountSettings_Pinvue_type_script_lang_js_ = (Pinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/AccountSettings/Pin.vue?vue&type=style&index=0&lang=css&
var Pinvue_type_style_index_0_lang_css_ = __webpack_require__("9c35");

// CONCATENATED MODULE: ./src/components/AccountSettings/Pin.vue






/* normalize component */

var Pin_component = Object(componentNormalizer["a" /* default */])(
  AccountSettings_Pinvue_type_script_lang_js_,
  Pinvue_type_template_id_ff6b4362_render,
  Pinvue_type_template_id_ff6b4362_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pin = (Pin_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSettings/DeleteAccount.vue?vue&type=template&id=54fb1500&
var DeleteAccountvue_type_template_id_54fb1500_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-dialog',{attrs:{"persistent":"","maximized":true,"transition-show":"slide-up","transition-hide":"slide-down","content-class":"dark-modal"},model:{value:(_vm.deleteAccountModalOpened),callback:function ($$v) {_vm.deleteAccountModalOpened=$$v},expression:"deleteAccountModalOpened"}},[_c('div',[_c('div',{staticClass:"header-section"},[_c('div',{staticClass:"header-back-button-wrapper"},[_c('q-btn',{staticClass:"icon-btn back-arrow-btn",attrs:{"icon":"arrow_back","size":"lg","flat":""},on:{"click":function($event){$event.preventDefault();return _vm.closeModal($event)}}})],1),_c('h1',{staticClass:"header-h1"},[_vm._v("\n        "+_vm._s(_vm.$t('deleteAccount'))+"\n      ")])]),_c('div',{staticClass:"modal-layout-wrapper center"},[_c('h1',{staticClass:"setup with-margin"},[_c('span',[_vm._v("\n          "+_vm._s(_vm.$t('enterPin'))+"\n        ")])]),_c('PinPad',{ref:"PinPad",attrs:{"mode":"delete"},on:{"inputPin":_vm.pinInputListener,"attemptUnlock":_vm.attemptUnlock,"resetPin":_vm.resetPin}})],1),_c('q-dialog',{model:{value:(_vm.confirmDeleteOpen),callback:function ($$v) {_vm.confirmDeleteOpen=$$v},expression:"confirmDeleteOpen"}},[(_vm.account)?_c('q-card',{staticClass:"dialog",staticStyle:{"width":"300px"}},[_c('q-card-section',[_c('h2',[_vm._v("\n            "+_vm._s(_vm.$t('confirm'))+"\n          ")]),_c('p',[_vm._v("\n            "+_vm._s(((_vm.$t('confirmMessage')) + " " + (_vm.account.name) + (_vm.$t('questionMark'))))+"\n          ")])]),_c('q-card-actions',{attrs:{"align":"right"}},[_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":_vm.$t('cancelConfirm'),"color":"blueish"}}),_c('q-btn',{attrs:{"flat":"","label":_vm.$t('acceptConfirm'),"color":"blueish"},on:{"click":function($event){return _vm.deleteAccount()}}})],1)],1):_vm._e()],1)],1)])}
var DeleteAccountvue_type_template_id_54fb1500_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountSettings/DeleteAccount.vue?vue&type=template&id=54fb1500&

// EXTERNAL MODULE: ./src/store/wallet/entities/address.js
var entities_address = __webpack_require__("33cd");

// EXTERNAL MODULE: ./src/store/wallet/entities/tx.js
var entities_tx = __webpack_require__("253c");

// EXTERNAL MODULE: ./src/store/wallet/entities/utxo.js
var utxo = __webpack_require__("afe1");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSettings/DeleteAccount.vue?vue&type=script&lang=js&









function DeleteAccountvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DeleteAccountvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DeleteAccountvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DeleteAccountvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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







/* harmony default export */ var DeleteAccountvue_type_script_lang_js_ = ({
  name: 'Pin',
  components: {
    PinPad: PinPad["a" /* default */]
  },
  props: {
    pinHash: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      confirmDeleteOpen: false,
      pin: []
    };
  },
  computed: DeleteAccountvue_type_script_lang_js_objectSpread(DeleteAccountvue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    authenticatedAccount: function authenticatedAccount(state) {
      return state.settings.authenticatedAccount;
    },
    delay: function delay(state) {
      return state.settings.delay;
    }
  })), {}, {
    account: function account() {
      return this.$store.getters['entities/account/find'](this.authenticatedAccount);
    },
    accounts: function accounts() {
      return this.$store.getters['entities/account/query']().get();
    },
    deleteAccountModalOpened: {
      get: function get() {
        return this.$store.state.modals.deleteAccountModalOpened;
      },
      set: function set(value) {
        this.$store.dispatch('modals/setDeleteAccountModalOpened', value);
      }
    }
  }),
  methods: {
    resetPin: function resetPin() {
      this.pin = [];
    },

    /**
     * Adds or removes pin input event to pin arr.
     */
    pinInputListener: function pinInputListener(pin) {
      this.pin.push(pin);
    },

    /**
     * Compares bcrypt pin string to try and unlock an account
     */
    attemptUnlock: function attemptUnlock() {
      if (this.$CWCrypto.bcryptCompareString(this.pin.join(''), this.account.pinHash) === true) {
        this.$refs.PinPad.resetState();
        this.resetPin();
        this.confirmDeleteOpen = true;
      } else {
        this.$toast.create(10, this.$t('wrongPin'), this.delay.normal, 'top');
        this.$refs.PinPad.resetState();
        this.resetPin();
      }
    },

    /**
     * Closes the modal and resets state
     */
    closeModal: function closeModal() {
      this.$refs.PinPad.resetState();
      this.resetPin();
      Object.assign(this.$data, this.$options.data.apply(this));
      this.deleteAccountModalOpened = false;
    },
    deleteAccount: function deleteAccount() {
      var _this = this;

      var id = this.account.id;
      var wasDefault = this.account.default;
      this.$store.dispatch('settings/setLoading', true);
      this.$store.dispatch('settings/setSelectedAccount', null);
      this.$store.dispatch('settings/setAuthenticatedAccount', null);
      this.closeModal();
      this.$router.push({
        path: '/'
      });
      this.$store.dispatch('settings/setLayout', 'dark');
      setTimeout(function () {
        entities_account["a" /* default */].$delete(id);

        if (wasDefault && _this.accounts.length > 0) {
          entities_account["a" /* default */].$update({
            where: function where(record) {
              return record.id === _this.accounts[0].id;
            },
            data: {
              default: true
            }
          });
        }

        var wallets = entities_wallet["a" /* default */].query().where('account_id', id).get();
        wallets.forEach(function (wallet) {
          entities_wallet["a" /* default */].$delete(wallet.id);
        });
        var transactions = entities_tx["a" /* default */].query().where('account_id', id).get();
        transactions.forEach(function (tx) {
          entities_tx["a" /* default */].$delete(tx.id);
        });
        var utxos = utxo["a" /* default */].query().where('account_id', id).get();
        utxos.forEach(function (tx) {
          utxo["a" /* default */].$delete(tx.id);
        });
        var addresses = entities_address["a" /* default */].query().where('account_id', id).get();
        addresses.forEach(function (address) {
          entities_address["a" /* default */].$delete(address.id);
        });

        _this.$store.dispatch('settings/setLoading', false);
      }, this.delay.normal);
      return false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/AccountSettings/DeleteAccount.vue?vue&type=script&lang=js&
 /* harmony default export */ var AccountSettings_DeleteAccountvue_type_script_lang_js_ = (DeleteAccountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/AccountSettings/DeleteAccount.vue?vue&type=style&index=0&lang=css&
var DeleteAccountvue_type_style_index_0_lang_css_ = __webpack_require__("9a07");

// CONCATENATED MODULE: ./src/components/AccountSettings/DeleteAccount.vue






/* normalize component */

var DeleteAccount_component = Object(componentNormalizer["a" /* default */])(
  AccountSettings_DeleteAccountvue_type_script_lang_js_,
  DeleteAccountvue_type_template_id_54fb1500_render,
  DeleteAccountvue_type_template_id_54fb1500_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DeleteAccount = (DeleteAccount_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSettings/index.vue?vue&type=script&lang=js&








function AccountSettingsvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AccountSettingsvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AccountSettingsvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AccountSettingsvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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





/* harmony default export */ var AccountSettingsvue_type_script_lang_js_ = ({
  name: 'AccountSettings',
  components: {
    SelectLanguage: SelectLanguage,
    SelectCurrency: SelectCurrency,
    Pin: Pin,
    DeleteAccount: DeleteAccount
  },
  computed: AccountSettingsvue_type_script_lang_js_objectSpread(AccountSettingsvue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    authenticatedAccount: function authenticatedAccount(state) {
      return state.settings.authenticatedAccount;
    }
  })), {}, {
    account: function account() {
      return this.$store.getters['entities/account/find'](this.authenticatedAccount);
    }
  }),
  methods: {
    openSelectCurrencyModal: function openSelectCurrencyModal() {
      this.$store.dispatch('modals/setSelectCurrencyModalOpened', true);
    },
    openSelectLanguageModal: function openSelectLanguageModal() {
      this.$store.dispatch('modals/setSelectLanguageModalOpened', true);
    },
    openDeleteAccountModal: function openDeleteAccountModal() {
      this.$store.dispatch('modals/setDeleteAccountModalOpened', true);
    },
    openNewPinModal: function openNewPinModal() {
      this.$store.dispatch('modals/setNewPinModalOpened', true);
    },
    logout: function logout() {
      window.location.reload(true);
    }
  }
});
// CONCATENATED MODULE: ./src/components/AccountSettings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AccountSettingsvue_type_script_lang_js_ = (AccountSettingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/AccountSettings/index.vue?vue&type=style&index=0&lang=css&
var AccountSettingsvue_type_style_index_0_lang_css_ = __webpack_require__("ed9f");

// CONCATENATED MODULE: ./src/components/AccountSettings/index.vue






/* normalize component */

var AccountSettings_component = Object(componentNormalizer["a" /* default */])(
  components_AccountSettingsvue_type_script_lang_js_,
  AccountSettingsvue_type_template_id_68e519de_render,
  AccountSettingsvue_type_template_id_68e519de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AccountSettings = (AccountSettings_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Settings/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Settingsvue_type_script_lang_js_ = ({
  name: 'Settings',
  components: {
    AccountSettings: AccountSettings
  }
});
// CONCATENATED MODULE: ./src/pages/Settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Settingsvue_type_script_lang_js_ = (Settingsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Settings/index.vue





/* normalize component */

var Settings_component = Object(componentNormalizer["a" /* default */])(
  pages_Settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "eb520472",
  null
  
)

/* harmony default export */ var Settings = __webpack_exports__["default"] = (Settings_component.exports);

/***/ }),

/***/ "5f42":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9a07":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5f42");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9c35":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f75e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a90c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ad83":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e544":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ad83");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ed9f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a90c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f75e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);