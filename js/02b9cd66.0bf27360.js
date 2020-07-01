(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["02b9cd66"],{

/***/ "0626":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0daf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c89d0cd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7b8f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c89d0cd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c89d0cd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c89d0cd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "1f0e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2b0a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0626");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "398b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d3f2247_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b267");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d3f2247_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d3f2247_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d3f2247_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "66f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/index.vue?vue&type=template&id=b2bf0500&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"setup-wrapper"},[_c(_vm.steps[_vm.id],{tag:"component"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Setup/index.vue?vue&type=template&id=b2bf0500&

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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Splash/index.vue?vue&type=template&id=5626769c&
var Splashvue_type_template_id_5626769c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container splash"},[_c('div',{staticClass:"splash-logo"},[_c('h1',[_vm._v(_vm._s(_vm.$t('cryptoWallet')))])]),_c('div',{staticClass:"btns-wrapper"},[_c('q-btn',{staticClass:"splash-btn get-started-btn",attrs:{"label":_vm.$t('getStarted'),"color":"primary","text-color":"blueish"},on:{"click":_vm.getStarted}})],1),_c('div',{staticClass:"btns-wrapper"},[_c('q-btn',{staticClass:"splash-btn import-account-btn",attrs:{"label":_vm.$t('importAccount'),"icon":"get_app","color":"blueish","text-color":"primary"},on:{"click":function($event){return _vm.importAccount()}}})],1),_c('div',{staticClass:"loading-footer",class:{ emphasised: _vm.emphasised }},[_c('img',{staticClass:"logo-loading",attrs:{"src":__webpack_require__("d270")}})])])}
var Splashvue_type_template_id_5626769c_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Setup/Steps/Splash/index.vue?vue&type=template&id=5626769c&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Splash/index.vue?vue&type=script&lang=js&








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

/* harmony default export */ var Splashvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      locale: this.$i18n.locale,
      $i18n: '',
      selectedLang: {
        label: 'English',
        value: 'en-gb',
        icon: './statics/flags/en-gb.svg'
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    id: function id(state) {
      return parseInt(state.route.params.id, 10);
    }
  })), {}, {
    emphasised: function emphasised() {
      if (this.$route.path === '/setup/0') {
        return true;
      }

      return false;
    },
    supportedLanguages: function supportedLanguages() {
      return Object.keys(this.$i18n.messages).map(function (key) {
        return key;
      });
    },
    languageArray: function languageArray() {
      var _this = this;

      return this.supportedLanguages.map(function (lang) {
        return {
          label: _this.$t(lang),
          value: lang,
          icon: "./statics/flags/".concat(lang, ".svg")
        };
      });
    }
  }),
  mounted: function mounted() {
    this.$store.dispatch('setup/setAccountLocale', this.selectedLang.value);
  },
  methods: {
    importAccount: function importAccount() {
      this.$i18n.locale = this.selectedLang.value;
      this.$store.dispatch('setup/setAccountLocale', this.selectedLang.value);
      this.$store.dispatch('setup/setAccountCurrency', this.$t('supportedCurrency'));
      this.$store.dispatch('setup/setAccountType', 'restored');
      this.$router.push({
        path: "/setup/".concat(this.id + 1)
      });
      return true;
    },
    getStarted: function getStarted() {
      this.$store.dispatch('setup/setAccountLocale', this.selectedLang.value);
      this.$store.dispatch('setup/setAccountCurrency', this.$t('supportedCurrency'));
      this.$store.dispatch('setup/setAccountType', 'new');
      this.$router.push({
        path: '/setup/8'
      });
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Setup/Steps/Splash/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Steps_Splashvue_type_script_lang_js_ = (Splashvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Setup/Steps/Splash/index.vue?vue&type=style&index=0&lang=css&
var Splashvue_type_style_index_0_lang_css_ = __webpack_require__("e41d");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Setup/Steps/Splash/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Steps_Splashvue_type_script_lang_js_,
  Splashvue_type_template_id_5626769c_render,
  Splashvue_type_template_id_5626769c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Splash = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/AccountName/index.vue?vue&type=template&id=c89d0cd8&scoped=true&
var AccountNamevue_type_template_id_c89d0cd8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',[_c('h1',{staticClass:"setup"},[_vm._v("\n      "+_vm._s(_vm.$t('setAccountName'))+"\n    ")])]),_c('div',{staticClass:"account-name-input-wrapper"},[_c('q-input',{attrs:{"float-label":_vm.$t('accountName'),"outlined":"","dark":"","color":"primary"},model:{value:(_vm.accountName),callback:function ($$v) {_vm.accountName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"accountName"}})],1),_c('div',{staticClass:"btns-wrapper"},[_c('q-btn',{attrs:{"color":"primary","text-color":"blueish","label":"Next"},on:{"click":_vm.validate}})],1)])}
var AccountNamevue_type_template_id_c89d0cd8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Setup/Steps/AccountName/index.vue?vue&type=template&id=c89d0cd8&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("b5ae");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/AccountName/index.vue?vue&type=script&lang=js&










function AccountNamevue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AccountNamevue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AccountNamevue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AccountNamevue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AccountNamevue_type_script_lang_js_ = ({
  name: 'AccountName',
  data: function data() {
    return {
      accountName: ''
    };
  },
  validations: {
    accountName: {
      required: validators["required"],
      alphaNum: validators["alphaNum"]
    }
  },
  computed: AccountNamevue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    delay: function delay(state) {
      return state.settings.delay;
    }
  })),
  methods: {
    validate: function validate() {
      var _this = this;

      if (!this.$v.accountName.required) {
        this.$toast.create(10, this.$t('enterAccountName'), this.delay.normal);
        return false;
      }

      if (!this.$v.accountName.alphaNum) {
        this.$toast.create(10, this.$t('invalidAccountName'), this.delay.normal);
        return false;
      }

      var accounts = this.$store.getters['entities/account/query']().get();
      var nameAlreadyInUse = accounts.find(function (account) {
        return account.name === _this.accountName;
      });

      if (nameAlreadyInUse) {
        this.$toast.create(10, this.$t('accountNameTaken'), this.delay.normal);
        return false;
      }

      this.$store.dispatch('setup/setAccountName', this.accountName);
      this.$router.push({
        path: '/setup/7'
      });
      return true;
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Setup/Steps/AccountName/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Steps_AccountNamevue_type_script_lang_js_ = (AccountNamevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Setup/Steps/AccountName/index.vue?vue&type=style&index=0&id=c89d0cd8&scoped=true&lang=css&
var AccountNamevue_type_style_index_0_id_c89d0cd8_scoped_true_lang_css_ = __webpack_require__("0daf");

// CONCATENATED MODULE: ./src/pages/Setup/Steps/AccountName/index.vue






/* normalize component */

var AccountName_component = Object(componentNormalizer["a" /* default */])(
  Steps_AccountNamevue_type_script_lang_js_,
  AccountNamevue_type_template_id_c89d0cd8_scoped_true_render,
  AccountNamevue_type_template_id_c89d0cd8_scoped_true_staticRenderFns,
  false,
  null,
  "c89d0cd8",
  null
  
)

/* harmony default export */ var AccountName = (AccountName_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/AccountRecovery/index.vue?vue&type=template&id=3d3f2247&scoped=true&
var AccountRecoveryvue_type_template_id_3d3f2247_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"q-mb-xl",staticStyle:{"margin-top":"-2.5rem"}},[_c('h1',{staticClass:"setup "},[_vm._v("\n      "+_vm._s(_vm.$t('accountRecovery'))+"\n    ")]),_c('div',{staticClass:"text-center"},[_vm._v("\n      "+_vm._s(_vm.$t('accountRecoveryDesc'))+"\n    ")])]),_c('div',{staticClass:"container q-px-md"},[_c('div',[_c('div',{staticClass:"q-pl-sm"},[_c('div',{staticClass:"text-h6 text-weight-bold"},[_vm._v("\n          "+_vm._s(_vm.$t('basicSecurity'))+"\n        ")]),_c('div',{staticClass:"text-caption"},[_vm._v("\n          "+_vm._s(_vm.$t('basicSecurityDesc'))+"\n        ")])]),_c('q-list',{staticClass:"q-mt-md q-gutter-y-md"},[_c('q-item',[_c('q-item-section',{staticClass:"q-pt-md",attrs:{"avatar":"","top":""}},[_c('q-radio',{attrs:{"dark":"","val":"email","color":"primary"},model:{value:(_vm.recoveryType),callback:function ($$v) {_vm.recoveryType=$$v},expression:"recoveryType"}})],1),_c('q-item-section',{staticClass:" recovery-option q-pa-md"},[_c('q-item-label',[_c('q-icon',{attrs:{"name":"fas fa-at"}}),_vm._v("\n              "+_vm._s(_vm.$t('emailRecovery'))+"\n            ")],1),_c('div',{staticClass:"account-email-input-wrapper"},[_c('q-input',{attrs:{"type":"email","outlined":"","dark":"","dense":"","color":"primary","placeholder":_vm.$t('emailPlaceholder')},model:{value:(_vm.accountEmail),callback:function ($$v) {_vm.accountEmail=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"accountEmail"}})],1)],1)],1),_c('q-item',[_c('q-item-section',{staticClass:"q-pt-xs",attrs:{"avatar":"","top":""}},[_c('q-radio',{staticClass:"sms",attrs:{"dark":"","val":"sms","color":"primary"},model:{value:(_vm.recoveryType),callback:function ($$v) {_vm.recoveryType=$$v},expression:"recoveryType"}})],1),_c('q-item-section',{staticClass:"recovery-option q-pa-md"},[_c('q-item-label',[_c('q-icon',{attrs:{"name":"fas fa-mobile-alt"}}),_vm._v("\n              "+_vm._s(_vm.$t('smsRecovery'))+"\n            ")],1)],1)],1)],1)],1),_c('div',{staticClass:"q-mt-xl"},[_c('div',{staticClass:"q-mb-md q-pl-sm"},[_c('div',{staticClass:"text-h6 text-weight-bold"},[_vm._v("\n          "+_vm._s(_vm.$t('advancedSecurity'))+"\n        ")]),_c('div',{staticClass:"text-caption"},[_vm._v("\n          "+_vm._s(_vm.$t('advancedSecurityDesc'))+"\n        ")])]),_c('q-list',[_c('q-item',[_c('q-item-section',{attrs:{"avatar":"","top":""}},[_c('q-radio',{staticClass:"recoveryPhrase",attrs:{"dark":"","val":"recoveryPhrase","color":"primary"},model:{value:(_vm.recoveryType),callback:function ($$v) {_vm.recoveryType=$$v},expression:"recoveryType"}})],1),_c('q-item-section',{staticClass:" recovery-option q-pa-md"},[_c('q-item-label',[_c('q-icon',{attrs:{"name":"far fa-list-alt"}}),_vm._v("\n\n              "+_vm._s(_vm.$t('recoveryPhrase'))+"\n            ")],1)],1)],1)],1)],1),_c('div',{staticClass:"btns-wrapper q-mt-lg"},[_c('q-btn',{attrs:{"color":"primary","text-color":"blueish","label":_vm.$t('next')},on:{"click":_vm.validate}})],1)]),_c('q-inner-loading',{attrs:{"showing":_vm.visible}},[_c('q-spinner',{attrs:{"size":"50px","color":"primary"}})],1)],1)}
var AccountRecoveryvue_type_template_id_3d3f2247_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Setup/Steps/AccountRecovery/index.vue?vue&type=template&id=3d3f2247&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("967e");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("fa84");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@toruslabs/torus-direct-web-sdk/dist/directWebSdk.cjs.js
var directWebSdk_cjs = __webpack_require__("4b94");
var directWebSdk_cjs_default = /*#__PURE__*/__webpack_require__.n(directWebSdk_cjs);

// EXTERNAL MODULE: ./node_modules/bip39/index.js
var bip39 = __webpack_require__("00a5");
var bip39_default = /*#__PURE__*/__webpack_require__.n(bip39);

// CONCATENATED MODULE: ./src/helpers/DirectAuth/index.js





var auth = {
  login: function login() {
    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var torusdirectsdk, loginDetails;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              torusdirectsdk = new directWebSdk_cjs_default.a({
                baseUrl: "".concat(window.location.origin, "/statics/serviceworker"),
                enableLogging: true,
                proxyContractAddress: '0x4023d2a0D330bF11426B12C6144Cfb96B7fa6183',
                // details for test net
                network: 'ropsten' // details for test net

              });
              _context.next = 4;
              return torusdirectsdk.init({
                skipSw: false
              });

            case 4:
              _context.next = 6;
              return torusdirectsdk.triggerLogin({
                typeOfLogin: 'jwt',
                verifier: 'atlascity-auth0-sms-passwordless',
                clientId: 'sinmK0yyTRWpruIA2YfVSDUQ2vARX4CA',
                jwtParams: {
                  connection: '',
                  domain: 'https://atlascity.eu.auth0.com',
                  verifierIdField: 'name'
                }
              });

            case 6:
              loginDetails = _context.sent;
              return _context.abrupt("return", loginDetails);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0, 'caught');
              return _context.abrupt("return", false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }))();
  },
  getMnemonic: function getMnemonic(entropy) {
    return bip39_default.a.entropyToMnemonic(entropy);
  }
};
/* harmony default export */ var DirectAuth = (auth);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/AccountRecovery/index.vue?vue&type=script&lang=js&












function AccountRecoveryvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AccountRecoveryvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AccountRecoveryvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AccountRecoveryvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var AccountRecoveryvue_type_script_lang_js_ = ({
  name: 'AccountRecovery',
  data: function data() {
    return {
      accountEmail: '',
      accountSms: '',
      recoveryType: 'email',
      visible: false
    };
  },
  validations: {
    accountEmail: {
      required: validators["required"],
      email: validators["email"]
    }
  },
  computed: AccountRecoveryvue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    delay: function delay(state) {
      return state.settings.delay;
    }
  })),
  methods: {
    validate: function validate() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var mnemonic, mnemonicArray;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.recoveryType === 'recoveryPhrase')) {
                  _context.next = 3;
                  break;
                }

                _this.$router.push({
                  path: '/setup/2'
                });

                return _context.abrupt("return", true);

              case 3:
                if (!(_this.recoveryType === 'sms')) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return _this.validateSMS();

              case 6:
                return _context.abrupt("return", true);

              case 7:
                if (_this.$v.accountEmail.required) {
                  _context.next = 10;
                  break;
                }

                _this.$toast.create(10, _this.$t('enterAccountEmail'), _this.delay.normal);

                return _context.abrupt("return", false);

              case 10:
                if (_this.$v.accountEmail.email) {
                  _context.next = 13;
                  break;
                }

                _this.$toast.create(10, _this.$t('invalidAccountEmail'), _this.delay.normal);

                return _context.abrupt("return", false);

              case 13:
                if (_this.$magic.isLoggedIn()) {
                  _this.$magic.logout();
                }

                _this.visible = true;
                _context.next = 17;
                return _this.$magic.login(_this.accountEmail);

              case 17:
                _context.next = 19;
                return _this.$magic.getMnemonic();

              case 19:
                mnemonic = _context.sent;
                mnemonicArray = mnemonic.split(' ');

                _this.$store.dispatch('setup/setSeed', mnemonicArray);

                _this.$store.dispatch('setup/setSeedString', mnemonic);

                _this.$router.push({
                  path: '/setup/4'
                });

                _this.visible = false;
                return _context.abrupt("return", true);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    validateSMS: function validateSMS() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var user, mnemonic, mnemonicArray;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.visible = true;
                _context2.next = 3;
                return DirectAuth.login();

              case 3:
                user = _context2.sent;
                console.log(user);

                if (user) {
                  mnemonic = DirectAuth.getMnemonic(user.privateKey);
                  mnemonicArray = mnemonic.split(' ');

                  _this2.$store.dispatch('setup/setSeed', mnemonicArray);

                  _this2.$store.dispatch('setup/setSeedString', mnemonic);

                  _this2.$router.push({
                    path: '/setup/4'
                  });
                }

                _this2.visible = false;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Setup/Steps/AccountRecovery/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Steps_AccountRecoveryvue_type_script_lang_js_ = (AccountRecoveryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Setup/Steps/AccountRecovery/index.vue?vue&type=style&index=0&id=3d3f2247&scoped=true&lang=css&
var AccountRecoveryvue_type_style_index_0_id_3d3f2247_scoped_true_lang_css_ = __webpack_require__("398b");

// CONCATENATED MODULE: ./src/pages/Setup/Steps/AccountRecovery/index.vue






/* normalize component */

var AccountRecovery_component = Object(componentNormalizer["a" /* default */])(
  Steps_AccountRecoveryvue_type_script_lang_js_,
  AccountRecoveryvue_type_template_id_3d3f2247_scoped_true_render,
  AccountRecoveryvue_type_template_id_3d3f2247_scoped_true_staticRenderFns,
  false,
  null,
  "3d3f2247",
  null
  
)

/* harmony default export */ var AccountRecovery = (AccountRecovery_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Pin/index.vue?vue&type=template&id=50e8dacb&scoped=true&
var Pinvue_type_template_id_50e8dacb_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"setup"},[_vm._v("\n    "+_vm._s(_vm.$t('pinSetupTitle'))+"\n  ")]),_c('h4',{staticClass:"setup"},[_vm._v("\n    "+_vm._s(_vm.$t('setupPin'))+"\n  ")]),_c('PinPad',{attrs:{"mode":"pin-setup"}})],1)}
var Pinvue_type_template_id_50e8dacb_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Setup/Steps/Pin/index.vue?vue&type=template&id=50e8dacb&scoped=true&

// EXTERNAL MODULE: ./src/components/Auth/PinPad/index.vue + 4 modules
var PinPad = __webpack_require__("1877");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Pin/index.vue?vue&type=script&lang=js&
//
//
//
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
  }
});
// CONCATENATED MODULE: ./src/pages/Setup/Steps/Pin/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Steps_Pinvue_type_script_lang_js_ = (Pinvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Setup/Steps/Pin/index.vue





/* normalize component */

var Pin_component = Object(componentNormalizer["a" /* default */])(
  Steps_Pinvue_type_script_lang_js_,
  Pinvue_type_template_id_50e8dacb_scoped_true_render,
  Pinvue_type_template_id_50e8dacb_scoped_true_staticRenderFns,
  false,
  null,
  "50e8dacb",
  null
  
)

/* harmony default export */ var Pin = (Pin_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Pin/Confirm.vue?vue&type=template&id=1384082d&scoped=true&
var Confirmvue_type_template_id_1384082d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"setup"},[_vm._v("\n    "+_vm._s(_vm.$t('pinConfirmationTitle'))+"\n  ")]),_c('h4',{staticClass:"setup"},[_vm._v("\n    "+_vm._s(_vm.$t('confirmPin'))+"\n  ")]),_c('PinPad',{ref:"pinpad",attrs:{"mode":"pin-confirm"}})],1)}
var Confirmvue_type_template_id_1384082d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Setup/Steps/Pin/Confirm.vue?vue&type=template&id=1384082d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Pin/Confirm.vue?vue&type=script&lang=js&








function Confirmvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Confirmvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Confirmvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Confirmvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Confirmvue_type_script_lang_js_ = ({
  name: 'PinConfirm',
  components: {
    PinPad: PinPad["a" /* default */]
  },
  computed: Confirmvue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    pin: function pin(state) {
      return state.setup.pinArray;
    },
    pinConfirm: function pinConfirm(state) {
      return state.setup.pinConfirmArray;
    },
    id: function id(state) {
      return parseInt(state.route.params.id, 10);
    },
    delay: function delay(state) {
      return state.settings.delay;
    }
  })),
  methods: {
    validatePin: function validatePin() {
      if (this.pin.join('') === this.pinConfirm.join('')) {
        this.$router.push({
          path: "/setup/".concat(this.id + 1)
        });
      } else {
        this.$toast.create(10, this.$t('wrongPin'), this.delay.normal, 'top');
        this.$store.dispatch('setup/resetPinConfirm');
        this.$refs.pinpad.clearPinArray();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Setup/Steps/Pin/Confirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pin_Confirmvue_type_script_lang_js_ = (Confirmvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Setup/Steps/Pin/Confirm.vue





/* normalize component */

var Confirm_component = Object(componentNormalizer["a" /* default */])(
  Pin_Confirmvue_type_script_lang_js_,
  Confirmvue_type_template_id_1384082d_scoped_true_render,
  Confirmvue_type_template_id_1384082d_scoped_true_staticRenderFns,
  false,
  null,
  "1384082d",
  null
  
)

/* harmony default export */ var Confirm = (Confirm_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Restore/index.vue?vue&type=template&id=2ebd0a90&scoped=true&
var Restorevue_type_template_id_2ebd0a90_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"restore-header"},[_c('h1',{staticClass:"setup"},[_vm._v("\n        "+_vm._s(_vm.$t('restoreAccount'))+"\n      ")]),_c('p',{staticClass:"setup"},[_vm._v("\n        "+_vm._s(_vm.$t('restoreDescription'))+"\n      ")])]),_c('div',{staticClass:"restore-input-wrapper"},[_c('q-input',{attrs:{"type":"textarea","float-label":"Backup Phrase","outlined":"","dark":"","color":"primary"},model:{value:(_vm.seedPhrase),callback:function ($$v) {_vm.seedPhrase=$$v},expression:"seedPhrase"}})],1)]),_c('div',{staticClass:"btns-wrapper"},[_c('q-btn',{attrs:{"color":"primary","text-color":"blueish","label":"Next"},on:{"click":_vm.validate}})],1),_c('div',{staticClass:"qr-button-wrapper"},[_c('q-btn',{staticClass:"icon-btn",attrs:{"icon":"fas fa-qrcode","color":"primary","size":"lg","flat":""},on:{"click":_vm.scan}})],1)])}
var Restorevue_type_template_id_2ebd0a90_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Setup/Steps/Restore/index.vue?vue&type=template&id=2ebd0a90&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Restore/index.vue?vue&type=script&lang=js&










function Restorevue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Restorevue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Restorevue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Restorevue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Restorevue_type_script_lang_js_ = ({
  name: 'Restore',
  data: function data() {
    return {
      seedPhrase: ''
    };
  },
  computed: Restorevue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    delay: function delay(state) {
      return state.settings.delay;
    }
  })),
  methods: {
    validate: function validate() {
      var twelve = 12;
      var fifteen = 15;
      var eighteen = 18;
      var twentyone = 21;
      var twentyfour = 24;
      var seedLengths = [twelve, fifteen, eighteen, twentyone, twentyfour];
      var lowercase = this.seedPhrase.toLowerCase();
      var seedPhrase = lowercase.trim().split(' ');

      if (!seedLengths.includes(seedPhrase.length)) {
        this.$toast.create(10, this.$t('notEnoughWords'), this.delay.normal);
        return false;
      }

      if (!bip39_default.a.validateMnemonic(seedPhrase.join(' '))) {
        this.$toast.create(10, this.$t('invalidSeedPhrase'), this.delay.normal);
        return false;
      }

      this.$store.dispatch('setup/setSeed', seedPhrase);
      this.$store.dispatch('setup/setSeedString', lowercase);
      this.$router.push({
        path: '/setup/4'
      });
      return true;
    },

    /**
     * Initiates the QR code scanner
     */
    scan: function scan() {
      var _this = this;

      this.$store.dispatch('qrcode/setQRMode', 'restore');
      this.$store.dispatch('qrcode/scanQRCode');
      setTimeout(function () {
        _this.codeReader.decodeOnceFromVideoDevice(undefined, 'video').then(function (result) {
          var text = result.text;
          _this.seedPhrase = text;

          var valid = _this.validate();

          if (!valid) {
            _this.seedPhrase = '';
          }

          _this.codeReader.reset();

          _this.$store.dispatch('qrcode/cancelScanning');
        }).catch(function (err) {
          return console.error(err);
        });

        _this.codeReader.reset();
      }, this.delay.normal);
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Setup/Steps/Restore/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Steps_Restorevue_type_script_lang_js_ = (Restorevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Setup/Steps/Restore/index.vue?vue&type=style&index=0&id=2ebd0a90&scoped=true&lang=css&
var Restorevue_type_style_index_0_id_2ebd0a90_scoped_true_lang_css_ = __webpack_require__("b43c");

// CONCATENATED MODULE: ./src/pages/Setup/Steps/Restore/index.vue






/* normalize component */

var Restore_component = Object(componentNormalizer["a" /* default */])(
  Steps_Restorevue_type_script_lang_js_,
  Restorevue_type_template_id_2ebd0a90_scoped_true_render,
  Restorevue_type_template_id_2ebd0a90_scoped_true_staticRenderFns,
  false,
  null,
  "2ebd0a90",
  null
  
)

/* harmony default export */ var Restore = (Restore_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Seed/index.vue?vue&type=template&id=012fb950&scoped=true&
var Seedvue_type_template_id_012fb950_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"setup"},[_vm._v("\n    "+_vm._s(_vm.$t('seedPhrase'))+"\n  ")]),_c('p',{staticClass:"setup"},[_vm._v("\n    "+_vm._s(_vm.$t('writeSeed'))+"\n  ")]),_c('h4',{staticClass:"setup seed-box"},_vm._l((_vm.seedPhrase),function(word,i){return _c('span',{key:("word" + i),staticClass:"word-span"},[_c('span',{staticClass:"word-index"},[_vm._v(_vm._s(i + 1)+".")]),_vm._v("\n      "+_vm._s(word)+"\n    ")])}),0),_c('div',{staticClass:"btns-wrapper"},[_c('q-btn',{attrs:{"color":"secondary","label":"Try Different Seed"},on:{"click":_vm.anotherSeed}}),_c('q-btn',{attrs:{"color":"primary","text-color":"blueish","label":"Done"},on:{"click":_vm.confirmed}})],1),_c('q-dialog',{attrs:{"persistent":""},model:{value:(_vm.confirm),callback:function ($$v) {_vm.confirm=$$v},expression:"confirm"}},[_c('q-card',{staticClass:"dialog",staticStyle:{"width":"300px"}},[_c('q-card-section',[_c('h2',[_vm._v(_vm._s(_vm.$t('confirm')))]),_c('p',{},[_vm._v("\n          "+_vm._s(_vm.$t('seedConfirmation'))+"\n        ")])]),_c('q-card-actions',{attrs:{"align":"right"}},[_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":_vm.$t('cancelConfirm'),"color":"blueish"}}),_c('q-btn',{attrs:{"flat":"","label":_vm.$t('acceptConfirm'),"color":"blueish"},on:{"click":_vm.done}})],1)],1)],1)],1)}
var Seedvue_type_template_id_012fb950_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Setup/Steps/Seed/index.vue?vue&type=template&id=012fb950&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Seed/index.vue?vue&type=script&lang=js&









function Seedvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Seedvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Seedvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Seedvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Seedvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      generateble: true,
      seedPhrase: [],
      valid: false,
      confirm: false
    };
  },
  computed: Seedvue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    id: function id(state) {
      return parseInt(state.route.params.id, 10);
    }
  })),
  mounted: function mounted() {
    this.generateSeed();
  },
  methods: {
    generateSeed: function generateSeed() {
      var _this = this;

      var mnemonic = bip39_default.a.generateMnemonic();
      this.seedPhrase = mnemonic.split(' ');
      this.seedPhrase = this.seedPhrase.filter(function (word, index) {
        return _this.seedPhrase.indexOf(word) === index;
      });
      var expectedSeedLength = 12;

      if (this.seedPhrase.length === expectedSeedLength) {
        this.$store.dispatch('setup/setSeed', this.seedPhrase);
        this.$store.dispatch('setup/setSeedString', mnemonic);
      } else {
        this.anotherSeed();
      }
    },
    confirmed: function confirmed() {
      this.confirm = true;
    },
    done: function done() {
      this.confirm = false;
      this.$router.push({
        path: "/setup/".concat(this.id + 1)
      });
    },
    anotherSeed: function anotherSeed() {
      this.generateSeed();
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Setup/Steps/Seed/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Steps_Seedvue_type_script_lang_js_ = (Seedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Setup/Steps/Seed/index.vue?vue&type=style&index=0&id=012fb950&scoped=true&lang=css&
var Seedvue_type_style_index_0_id_012fb950_scoped_true_lang_css_ = __webpack_require__("a588");

// CONCATENATED MODULE: ./src/pages/Setup/Steps/Seed/index.vue






/* normalize component */

var Seed_component = Object(componentNormalizer["a" /* default */])(
  Steps_Seedvue_type_script_lang_js_,
  Seedvue_type_template_id_012fb950_scoped_true_render,
  Seedvue_type_template_id_012fb950_scoped_true_staticRenderFns,
  false,
  null,
  "012fb950",
  null
  
)

/* harmony default export */ var Seed = (Seed_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Seed/Confirm.vue?vue&type=template&id=bef4a552&
var Confirmvue_type_template_id_bef4a552_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"setup"},[_vm._v("\n    "+_vm._s(_vm.$t('confirmSeed'))+"\n  ")]),_c('p',{staticClass:"setup"},[_vm._v("\n    "+_vm._s(_vm.$t('pressSeed'))+"\n  ")]),_c('div',{staticClass:"randomSeedContainer"},[_c('div',{staticClass:"seed-input-preview-box"},_vm._l((_vm.seedPhrase),function(word,i){return _c('span',{key:("holder" + i)},[_vm._v("\n        "+_vm._s(word)+"\n      ")])}),0)]),_c('div',{staticClass:"randomSeedContainer"},_vm._l((_vm.shuffledSeed),function(word,i){return _c('q-btn',{key:("word" + i),staticClass:"seed-btn",attrs:{"label":("" + word),"disabled":_vm.wasUsed(word),"color":"primary","text-color":"blueish","size":"sm"},on:{"click":function($event){return _vm.addToSequence(word)}}})}),1),_c('div',{staticClass:"btns-wrapper"},[_c('q-btn',{attrs:{"disabled":_vm.resetDisabled,"color":"secondary","label":"Reset"},on:{"click":_vm.reset}})],1)])}
var Confirmvue_type_template_id_bef4a552_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Setup/Steps/Seed/Confirm.vue?vue&type=template&id=bef4a552&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Seed/Confirm.vue?vue&type=script&lang=js&








function Seed_Confirmvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Seed_Confirmvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Seed_Confirmvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Seed_Confirmvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Seed_Confirmvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      pipSeq: [],
      seedPhrase: []
    };
  },
  computed: Seed_Confirmvue_type_script_lang_js_objectSpread(Seed_Confirmvue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    seed: function seed(state) {
      return state.setup.seed;
    },
    id: function id(state) {
      return parseInt(state.route.params.id, 10);
    },
    delay: function delay(state) {
      return state.settings.delay;
    }
  })), {}, {
    shuffledSeed: function shuffledSeed() {
      return this.$store.getters['setup/getShuffledSeed']();
    },
    resetDisabled: function resetDisabled() {
      return this.pipSeq.length === 0;
    }
  }),
  watch: {
    pipSeq: function pipSeq() {
      var _this = this;

      var seedLength = 12;

      if (this.pipSeq.length === seedLength) {
        setTimeout(function () {
          _this.validate();
        }, this.delay.normal);
      }
    }
  },
  mounted: function mounted() {
    this.reset();
  },
  methods: {
    validate: function validate() {
      if (Object.keys(this.seed).join('') === this.pipSeq.join('')) {
        this.$router.push({
          path: "/setup/".concat(this.id + 1)
        });
      } else {
        this.$toast.create(10, this.$t('seedSeqNotMatch'), this.delay.normal);
        this.reset();
      }
    },
    addToSequence: function addToSequence(pip) {
      this.pipSeq.push(pip);
      this.seedPhrase.push(pip);
    },
    reset: function reset() {
      this.pipSeq = [];
      this.seedPhrase = [];
    },
    wasUsed: function wasUsed(pip) {
      return this.pipSeq.indexOf(pip) >= 0;
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Setup/Steps/Seed/Confirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var Steps_Seed_Confirmvue_type_script_lang_js_ = (Seed_Confirmvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Setup/Steps/Seed/Confirm.vue?vue&type=style&index=0&lang=css&
var Confirmvue_type_style_index_0_lang_css_ = __webpack_require__("68d9");

// CONCATENATED MODULE: ./src/pages/Setup/Steps/Seed/Confirm.vue






/* normalize component */

var Seed_Confirm_component = Object(componentNormalizer["a" /* default */])(
  Steps_Seed_Confirmvue_type_script_lang_js_,
  Confirmvue_type_template_id_bef4a552_render,
  Confirmvue_type_template_id_bef4a552_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Seed_Confirm = (Seed_Confirm_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Node/index.vue?vue&type=template&id=1281ba32&
var Nodevue_type_template_id_1281ba32_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"setup"},[_vm._v("\n    "+_vm._s(_vm.$t("nodeTitle"))+"\n  ")]),_c('p',{staticClass:"setup"},[_vm._v("\n    "+_vm._s(_vm.$t("nodeSubtitle"))+"\n  ")]),_c('div',{staticClass:"ip-input"},[_c('q-input',{attrs:{"float-label":_vm.$t('IPAddress'),"outlined":"","dark":"","color":"primary"},model:{value:(_vm.nodeIp),callback:function ($$v) {_vm.nodeIp=$$v},expression:"nodeIp"}})],1),_c('div',{staticClass:"btns-wrapper"},[_c('q-btn',{attrs:{"color":"secondary","label":"Skip"},on:{"click":_vm.skip}}),_c('q-btn',{attrs:{"color":"primary","text-color":"blueish","label":"Done"},on:{"click":_vm.done}})],1)])}
var Nodevue_type_template_id_1281ba32_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Setup/Steps/Node/index.vue?vue&type=template&id=1281ba32&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Node/index.vue?vue&type=script&lang=js&








function Nodevue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Nodevue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Nodevue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Nodevue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Nodevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      nodeIp: null
    };
  },
  computed: Nodevue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    id: function id(state) {
      return parseInt(state.route.params.id, 10);
    },
    delay: function delay(state) {
      return state.settings.delay;
    }
  })),
  methods: {
    validIp: function validIp(ip) {
      if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
        return true;
      }

      return false;
    },
    done: function done() {
      if (this.validIp(this.nodeIp)) {
        this.$router.push({
          path: "/setup/".concat(this.id + 1)
        });
      } else {
        this.$toast.create(10, this.$t('invalidIpAddress'), this.delay.normal);
      }
    },
    skip: function skip() {
      this.$router.push({
        path: "/setup/".concat(this.id + 1)
      });
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Setup/Steps/Node/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Steps_Nodevue_type_script_lang_js_ = (Nodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Setup/Steps/Node/index.vue?vue&type=style&index=0&lang=css&
var Nodevue_type_style_index_0_lang_css_ = __webpack_require__("7834");

// CONCATENATED MODULE: ./src/pages/Setup/Steps/Node/index.vue






/* normalize component */

var Node_component = Object(componentNormalizer["a" /* default */])(
  Steps_Nodevue_type_script_lang_js_,
  Nodevue_type_template_id_1281ba32_render,
  Nodevue_type_template_id_1281ba32_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Node = (Node_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Complete/index.vue?vue&type=template&id=3a7a45a0&
var Completevue_type_template_id_3a7a45a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showContent)?_c('div',{staticClass:"container"},[_c('div',[_c('h1',{staticClass:"setup"},[_vm._v("\n      "+_vm._s(_vm.$t('completeSetup'))+"\n    ")])]),_c('div',{staticClass:"slide-wrapper"},[_c('div',{staticClass:"icon-wrapper"},[_c('q-icon',{staticClass:"temp-ill",attrs:{"name":"wifi","size":"10rem","color":"white"}})],1),_c('p',[_vm._v("\n      "+_vm._s(_vm.$t('reconnectToInternet'))+"\n    ")])]),_c('div',{staticClass:"btns-wrapper"},[_c('q-btn',{attrs:{"disabled":!_vm.online,"label":_vm.$t('activateYourWallet'),"color":"primary","text-color":"blueish"},on:{"click":_vm.complete}})],1)]):_vm._e()}
var Completevue_type_template_id_3a7a45a0_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Setup/Steps/Complete/index.vue?vue&type=template&id=3a7a45a0&

// EXTERNAL MODULE: ./src/helpers/index.js + 5 modules
var helpers = __webpack_require__("ce96");

// EXTERNAL MODULE: ./src/store/wallet/entities/wallet.js
var entities_wallet = __webpack_require__("3d84");

// EXTERNAL MODULE: ./src/store/wallet/entities/address.js
var address = __webpack_require__("33cd");

// EXTERNAL MODULE: ./src/store/wallet/entities/tx.js
var tx = __webpack_require__("253c");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/Steps/Complete/index.vue?vue&type=script&lang=js&












function Completevue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Completevue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Completevue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Completevue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Completevue_type_script_lang_js_ = ({
  name: 'Complete',
  data: function data() {
    return {
      online: null,
      account: null,
      showContent: false
    };
  },
  computed: Completevue_type_script_lang_js_objectSpread(Completevue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    authenticatedAccount: function authenticatedAccount(state) {
      return state.settings.authenticatedAccount;
    },
    setup: function setup(state) {
      return state.setup;
    },
    delay: function delay(state) {
      return state.settings.delay;
    }
  })), {}, {
    supportedCoins: function supportedCoins() {
      return this.$store.state.settings.supportedCoins;
    }
  }),
  mounted: function mounted() {
    var _this = this;

    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.network = new helpers["b" /* Network */](_this.$q.platform.is);
              _this.online = _this.network.isOnline();

              _this.network.on('offline', function () {
                _this.online = false;
              }).on('online', function () {
                _this.online = true;
              });

              if (_this.setup.accountCreated) {
                _context.next = 11;
                break;
              }

              console.log('this.setup: ', _this.setup);

              if (!_this.online) {
                _context.next = 10;
                break;
              }

              _context.next = 8;
              return _this.complete();

            case 8:
              _context.next = 11;
              break;

            case 10:
              _this.showContent = true;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    storeTransactions: function storeTransactions(txs, id) {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var transactions;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(txs.length > 0)) {
                  _context2.next = 5;
                  break;
                }

                transactions = txs.map(function (tx) {
                  tx.account_id = _this2.authenticatedAccount;
                  tx.wallet_id = id;
                  return tx;
                });
                transactions.sort(function (a, b) {
                  return _this2.createDate(b.confirmedTime) - _this2.createDate(a.confirmedTime);
                });
                _context2.next = 5;
                return tx["a" /* default */].$insert({
                  data: transactions
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    enableCatalyst: function enableCatalyst(initializedWallet, wallet) {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var coinSDK, _yield$_this3$discove, txHistory, accounts, balance, newAddress;

        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                coinSDK = _this3.coinSDKS[wallet.sdk];
                _context3.next = 3;
                return _this3.discoverWallet(initializedWallet, coinSDK, wallet.network, wallet.sdk);

              case 3:
                _yield$_this3$discove = _context3.sent;
                txHistory = _yield$_this3$discove.txHistory;
                accounts = _yield$_this3$discove.accounts;
                balance = _yield$_this3$discove.balance;
                entities_wallet["a" /* default */].$update({
                  where: function where(record) {
                    return record.id === wallet.id;
                  },
                  data: {
                    externalChainAddressIndex: 0,
                    internalChainAddressIndex: 0,
                    confirmedBalance: balance,
                    externalAddress: accounts[0].address
                  }
                });
                newAddress = {
                  account_id: _this3.authenticatedAccount,
                  wallet_id: wallet.id,
                  chain: 'external',
                  address: accounts[0].address,
                  index: 0
                };
                _context3.next = 11;
                return address["a" /* default */].$insert({
                  data: newAddress
                });

              case 11:
                _context3.next = 13;
                return _this3.storeTransactions(txHistory.txs, wallet.id);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },

    /**
     * complete setup and store account entity.
     */
    complete: function complete() {
      var _this4 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this4.$store.dispatch('settings/setLoading', true);

                setTimeout( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
                  var account, wallet, initializedWallet, success;
                  return regenerator_default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.prev = 0;
                          _context4.next = 3;
                          return _this4.accountInitializer.createAccount(_this4.setup);

                        case 3:
                          account = _context4.sent;

                          _this4.$store.dispatch('settings/setSelectedAccount', _this4.setup.accountName);

                          _context4.next = 7;
                          return _this4.accountInitializer.createWallets(_this4.setup, account.id, _this4.supportedCoins);

                        case 7:
                          _context4.next = 9;
                          return _this4.accountInitializer.createERC20Wallets(_this4.setup, account.id, _this4.supportedCoins);

                        case 9:
                          _this4.$store.dispatch('setup/setAccountCreated');

                          _this4.$store.dispatch('settings/setAuthenticatedAccount', account.id);

                          wallet = entities_wallet["a" /* default */].query().where(function (wal) {
                            return wal.name === 'Catalyst' && wal.account_id === account.id;
                          }).get()[0];
                          initializedWallet = wallet.hdWallet;

                          if (!_this4.activeWallets[account.id]) {
                            _this4.activeWallets[account.id] = {};
                          }

                          _this4.activeWallets[account.id][wallet.name] = initializedWallet;
                          success = true;
                          _context4.prev = 16;
                          _context4.next = 19;
                          return _this4.enableCatalyst(initializedWallet, wallet);

                        case 19:
                          _context4.next = 24;
                          break;

                        case 21:
                          _context4.prev = 21;
                          _context4.t0 = _context4["catch"](16);
                          success = false;

                        case 24:
                          entities_wallet["a" /* default */].$update({
                            where: function where(record) {
                              return record.id === wallet.id;
                            },
                            data: {
                              imported: success,
                              enabled: success
                            }
                          }); // Object.getPrototypeOf(this.$root).backEndService =
                          // new this.BackEndService
                          // (this.$root, this.authenticatedAccount, this.setup.pinArray.join(''));
                          // await this.backEndService.connect();
                          // await this.backEndService.loadPriceFeed();

                          _this4.$store.dispatch('setup/clearSetupData');

                          _this4.$store.dispatch('settings/setLayout', 'light');

                          _this4.$router.push({
                            path: '/wallet'
                          });

                          _context4.next = 33;
                          break;

                        case 30:
                          _context4.prev = 30;
                          _context4.t1 = _context4["catch"](0);

                          _this4.errorHandler(_context4.t1);

                        case 33:
                          setTimeout(function () {
                            _this4.$store.dispatch('settings/setLoading', false);
                          }, _this4.delay.normal);

                        case 34:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, null, [[0, 30], [16, 21]]);
                })), _this4.delay.normal);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Setup/Steps/Complete/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Steps_Completevue_type_script_lang_js_ = (Completevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Setup/Steps/Complete/index.vue?vue&type=style&index=0&lang=css&
var Completevue_type_style_index_0_lang_css_ = __webpack_require__("dc67");

// CONCATENATED MODULE: ./src/pages/Setup/Steps/Complete/index.vue






/* normalize component */

var Complete_component = Object(componentNormalizer["a" /* default */])(
  Steps_Completevue_type_script_lang_js_,
  Completevue_type_template_id_3a7a45a0_render,
  Completevue_type_template_id_3a7a45a0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Complete = (Complete_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Setup/index.vue?vue&type=script&lang=js&








function Setupvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Setupvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Setupvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Setupvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//











/* harmony default export */ var Setupvue_type_script_lang_js_ = ({
  components: {
    Splash: Splash,
    AccountName: AccountName,
    AccountRecovery: AccountRecovery,
    Pin: Pin,
    PinConfirm: Confirm,
    Restore: Restore,
    Seed: Seed,
    SeedConfirm: Seed_Confirm,
    Node: Node,
    Complete: Complete
  },
  data: function data() {
    return {
      showNext: false,
      steps: [Splash, Restore, Seed, Seed_Confirm, Pin, Confirm, AccountName, Complete, AccountRecovery]
    };
  },
  computed: Setupvue_type_script_lang_js_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    id: function id(state) {
      return parseInt(state.route.params.id, 10);
    }
  })),
  created: function created() {
    if (this.$store.state.setup.salt) {
      return false;
    }

    this.$store.dispatch('setup/setSalt', this.$CWCrypto.getSalt());
    return true;
  }
});
// CONCATENATED MODULE: ./src/pages/Setup/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Setupvue_type_script_lang_js_ = (Setupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Setup/index.vue





/* normalize component */

var Setup_component = Object(componentNormalizer["a" /* default */])(
  pages_Setupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Setup = __webpack_exports__["default"] = (Setup_component.exports);

/***/ }),

/***/ "68d9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f200");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7834":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ba58");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7b8f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7dac":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "902c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a588":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_012fb950_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("902c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_012fb950_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_012fb950_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_012fb950_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b267":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b43c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ebd0a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7dac");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ebd0a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ebd0a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ebd0a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ba58":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c6ef":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dc67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1f0e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e41d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c6ef");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f200":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);