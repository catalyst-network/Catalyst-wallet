(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["38ba8b5a"],{

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

/***/ "20ba":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "bf9ba3739b85a724d74f.worker.js");
};

/***/ }),

/***/ "2b0a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0626");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3da8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Auth/Login/index.vue?vue&type=template&id=5c267b0e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"center-content-wrapper"},[(_vm.account)?_c('div',[_c('h1',{staticClass:"account-name-h1 setup"},[_vm._v("\n        "+_vm._s(_vm.account.name)+"\n      ")]),_c('PinPad',{ref:"PinPad",attrs:{"mode":"auth"}})],1):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Auth/Login/index.vue?vue&type=template&id=5c267b0e&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("967e");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("06db");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("fa84");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js
var defineProperty = __webpack_require__("c47a");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/crypto-js/aes.js
var aes = __webpack_require__("c198");
var aes_default = /*#__PURE__*/__webpack_require__.n(aes);

// EXTERNAL MODULE: ./node_modules/crypto-js/enc-utf8.js
var enc_utf8 = __webpack_require__("f8d5");
var enc_utf8_default = /*#__PURE__*/__webpack_require__.n(enc_utf8);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/components/Auth/PinPad/index.vue + 4 modules
var PinPad = __webpack_require__("1877");

// EXTERNAL MODULE: ./src/store/wallet/entities/wallet.js
var entities_wallet = __webpack_require__("3d84");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("fc74");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/createClass.js
var createClass = __webpack_require__("59a1");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/worker-loader/dist/cjs.js!./src/workers/RefreshWallet/worker.js
var worker = __webpack_require__("20ba");
var worker_default = /*#__PURE__*/__webpack_require__.n(worker);

// CONCATENATED MODULE: ./node_modules/comlink/dist/esm/comlink.mjs
/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const throwSet = new WeakSet();
const transferHandlers = new Map([
    [
        "proxy",
        {
            canHandle: obj => obj && obj[proxyMarker],
            serialize(obj) {
                const { port1, port2 } = new MessageChannel();
                expose(obj, port1);
                return [port2, [port2]];
            },
            deserialize: (port) => {
                port.start();
                return wrap(port);
            }
        }
    ],
    [
        "throw",
        {
            canHandle: obj => throwSet.has(obj),
            serialize(obj) {
                const isError = obj instanceof Error;
                let serialized = obj;
                if (isError) {
                    serialized = {
                        isError,
                        message: obj.message,
                        stack: obj.stack
                    };
                }
                return [serialized, []];
            },
            deserialize(obj) {
                if (obj.isError) {
                    throw Object.assign(new Error(), obj);
                }
                throw obj;
            }
        }
    ]
]);
function expose(obj, ep = self) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) {
            return;
        }
        const { id, type, path } = Object.assign({ path: [] }, ev.data);
        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
        let returnValue;
        try {
            const parent = path.slice(0, -1).reduce((obj, prop) => obj[prop], obj);
            const rawValue = path.reduce((obj, prop) => obj[prop], obj);
            switch (type) {
                case 0 /* GET */:
                    {
                        returnValue = rawValue;
                    }
                    break;
                case 1 /* SET */:
                    {
                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                        returnValue = true;
                    }
                    break;
                case 2 /* APPLY */:
                    {
                        returnValue = rawValue.apply(parent, argumentList);
                    }
                    break;
                case 3 /* CONSTRUCT */:
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;
                case 4 /* ENDPOINT */:
                    {
                        const { port1, port2 } = new MessageChannel();
                        expose(obj, port2);
                        returnValue = transfer(port1, [port1]);
                    }
                    break;
                case 5 /* RELEASE */:
                    {
                        returnValue = undefined;
                    }
                    break;
            }
        }
        catch (e) {
            returnValue = e;
            throwSet.add(e);
        }
        Promise.resolve(returnValue)
            .catch(e => {
            throwSet.add(e);
            return e;
        })
            .then(returnValue => {
            const [wireValue, transferables] = toWireValue(returnValue);
            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
            if (type === 5 /* RELEASE */) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                closeEndPoint(ep);
            }
        });
    });
    if (ep.start) {
        ep.start();
    }
}
function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint))
        endpoint.close();
}
function wrap(ep, target) {
    return createProxy(ep, [], target);
}
function throwIfProxyReleased(isReleased) {
    if (isReleased) {
        throw new Error("Proxy has been released and is not useable");
    }
}
function createProxy(ep, path = [], target = function () { }) {
    let isProxyReleased = false;
    const proxy = new Proxy(target, {
        get(_target, prop) {
            throwIfProxyReleased(isProxyReleased);
            if (prop === releaseProxy) {
                return () => {
                    return requestResponseMessage(ep, {
                        type: 5 /* RELEASE */,
                        path: path.map(p => p.toString())
                    }).then(() => {
                        closeEndPoint(ep);
                        isProxyReleased = true;
                    });
                };
            }
            if (prop === "then") {
                if (path.length === 0) {
                    return { then: () => proxy };
                }
                const r = requestResponseMessage(ep, {
                    type: 0 /* GET */,
                    path: path.map(p => p.toString())
                }).then(fromWireValue);
                return r.then.bind(r);
            }
            return createProxy(ep, [...path, prop]);
        },
        set(_target, prop, rawValue) {
            throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = toWireValue(rawValue);
            return requestResponseMessage(ep, {
                type: 1 /* SET */,
                path: [...path, prop].map(p => p.toString()),
                value
            }, transferables).then(fromWireValue);
        },
        apply(_target, _thisArg, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === createEndpoint) {
                return requestResponseMessage(ep, {
                    type: 4 /* ENDPOINT */
                }).then(fromWireValue);
            }
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") {
                return createProxy(ep, path.slice(0, -1));
            }
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: 2 /* APPLY */,
                path: path.map(p => p.toString()),
                argumentList
            }, transferables).then(fromWireValue);
        },
        construct(_target, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: 3 /* CONSTRUCT */,
                path: path.map(p => p.toString()),
                argumentList
            }, transferables).then(fromWireValue);
        }
    });
    return proxy;
}
function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [processed.map(v => v[0]), myFlat(processed.map(v => v[1]))];
}
const transferCache = new WeakMap();
function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
}
function proxy(obj) {
    return Object.assign(obj, { [proxyMarker]: true });
}
function windowEndpoint(w, context = self, targetOrigin = "*") {
    return {
        postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context)
    };
}
function toWireValue(value) {
    for (const [name, handler] of transferHandlers) {
        if (handler.canHandle(value)) {
            const [serializedValue, transferables] = handler.serialize(value);
            return [
                {
                    type: 3 /* HANDLER */,
                    name,
                    value: serializedValue
                },
                transferables
            ];
        }
    }
    return [
        {
            type: 0 /* RAW */,
            value
        },
        transferCache.get(value) || []
    ];
}
function fromWireValue(value) {
    switch (value.type) {
        case 3 /* HANDLER */:
            return transferHandlers.get(value.name).deserialize(value.value);
        case 0 /* RAW */:
            return value.value;
    }
}
function requestResponseMessage(ep, msg, transfers) {
    return new Promise(resolve => {
        const id = generateUUID();
        ep.addEventListener("message", function l(ev) {
            if (!ev.data || !ev.data.id || ev.data.id !== id) {
                return;
            }
            ep.removeEventListener("message", l);
            resolve(ev.data);
        });
        if (ep.start) {
            ep.start();
        }
        ep.postMessage(Object.assign({ id }, msg), transfers);
    });
}
function generateUUID() {
    return new Array(4)
        .fill(0)
        .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
        .join("-");
}


//# sourceMappingURL=comlink.mjs.map

// EXTERNAL MODULE: ./src/store/wallet/entities/tx.js
var entities_tx = __webpack_require__("253c");

// EXTERNAL MODULE: ./src/store/wallet/entities/address.js
var address = __webpack_require__("33cd");

// EXTERNAL MODULE: ./src/store/wallet/entities/utxo.js
var entities_utxo = __webpack_require__("afe1");

// CONCATENATED MODULE: ./src/workers/RefreshWallet/index.js





// eslint-disable-next-line import/no-webpack-loader-syntax







var RefreshWallet_RefreshWalletWorker = /*#__PURE__*/function () {
  function RefreshWalletWorker() {
    classCallCheck_default()(this, RefreshWalletWorker);

    this.worker = new worker_default.a();
    this.instance = wrap(this.worker);
  }

  createClass_default()(RefreshWalletWorker, [{
    key: "refreshWallet",
    value: function () {
      var _refreshWallet = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(wallet) {
        var fullRefresh,
            getAddresses,
            insertAddress,
            getUtxos,
            insertUtxos,
            deleteUtxo,
            updateTxs,
            insertTxs,
            getTxs,
            updateWallet,
            func,
            refresh,
            _args = arguments;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                updateWallet = function _updateWallet(walletId, option) {
                  if (option.newBalance) {
                    entities_wallet["a" /* default */].$update({
                      where: function where(record) {
                        return record.id === walletId;
                      },
                      data: {
                        confirmedBalance: parseFloat(option.newBalance)
                      }
                    });
                  }

                  if (option.addr) {
                    entities_wallet["a" /* default */].$update({
                      where: function where(record) {
                        return record.id === walletId;
                      },
                      data: {
                        externalChainAddressIndex: option.addr.index,
                        externalAddress: option.addr.address
                      }
                    });
                  }
                };

                getTxs = function _getTxs(walletId) {
                  return entities_tx["a" /* default */].query().where('wallet_id', walletId).get().map(function (tx) {
                    return tx.hash;
                  });
                };

                insertTxs = function _insertTxs(txs) {
                  entities_tx["a" /* default */].$insert({
                    data: txs
                  });
                };

                updateTxs = function _updateTxs(txs, walletId) {
                  txs.forEach(function (tx) {
                    entities_tx["a" /* default */].$update({
                      where: function where(record) {
                        return record.hash === tx.hash && record.wallet_id === walletId;
                      },
                      data: tx
                    });
                  });
                };

                deleteUtxo = function _deleteUtxo(id) {
                  var utxo = entities_utxo["a" /* default */].query().where('txid', id).get();
                  entities_utxo["a" /* default */].$delete(utxo[0].id);
                };

                insertUtxos = function _insertUtxos(utxos) {
                  entities_utxo["a" /* default */].$insert({
                    data: utxos
                  });
                };

                getUtxos = function _getUtxos(walletId) {
                  return entities_utxo["a" /* default */].query().where('wallet_id', walletId).get().map(function (utxo) {
                    return utxo.txid;
                  });
                };

                insertAddress = function _insertAddress(newAddress) {
                  address["a" /* default */].$insert({
                    data: newAddress
                  });
                };

                getAddresses = function _getAddresses(walletId) {
                  return address["a" /* default */].query().where('wallet_id', walletId).get().map(function (item) {
                    return item.address;
                  });
                };

                fullRefresh = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
                func = {
                  updateWallet: updateWallet,
                  updateTxs: updateTxs,
                  insertTxs: insertTxs,
                  getTxs: getTxs,
                  getAddresses: getAddresses,
                  insertAddress: insertAddress,
                  getUtxos: getUtxos,
                  insertUtxos: insertUtxos,
                  deleteUtxo: deleteUtxo
                };
                _context.next = 13;
                return this.instance(wallet, proxy(func), fullRefresh);

              case 13:
                refresh = _context.sent;
                return _context.abrupt("return", refresh);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refreshWallet(_x) {
        return _refreshWallet.apply(this, arguments);
      }

      return refreshWallet;
    }()
  }]);

  return RefreshWalletWorker;
}();

/* harmony default export */ var RefreshWallet = (RefreshWallet_RefreshWalletWorker);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Auth/Login/index.vue?vue&type=script&lang=js&
















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
// import LoadingScreen from '@/components/LoadingScreen';






/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  components: {
    PinPad: PinPad["a" /* default */]
  },
  data: function data() {
    return {
      pin: [],
      loading: true
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex_esm["b" /* mapState */])({
    selectedAccount: function selectedAccount(state) {
      return state.settings.selectedAccount;
    },
    delay: function delay(state) {
      return state.settings.delay;
    }
  })), {}, {
    accounts: function accounts() {
      return this.$store.getters['entities/account/query']().get();
    },

    /**
     * Computes the currently selected account
     */
    account: function account() {
      var _this = this;

      if (this.selectedAccount) {
        return this.accounts.find(function (account) {
          return account.name === _this.selectedAccount;
        });
      }

      return this.accounts.find(function (account) {
        return account.default;
      });
    }
  }),
  beforeMount: function beforeMount() {
    this.pinInputListener();
  },

  /**
   * If there is no account seleted, selects te default one
   */
  mounted: function mounted() {
    if (this.account) {
      this.$store.dispatch('settings/setSelectedAccount', this.account.name);
    }
  },
  methods: {
    resetPin: function resetPin() {
      this.pin = [];
    },

    /**
     * Adds or removes pin input event to pin arr.
     */
    pinInputListener: function pinInputListener() {
      var _this2 = this;

      this.$root.$on('inputPin', function (pin) {
        _this2.pin.push(pin);
      });
    },

    /**
     * Compares bcrypt pin string to try and unlock an account
     */
    attemptUnlock: function attemptUnlock() {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var minPinLength, currency;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                minPinLength = 6;

                if (!(_this3.pin.length >= minPinLength)) {
                  _context.next = 34;
                  break;
                }

                _context.prev = 2;

                _this3.$store.dispatch('settings/setLoading', true);

                _context.next = 6;
                return new Promise(function (r) {
                  return setTimeout(r, 0);
                });

              case 6:
                if (!(_this3.$CWCrypto.bcryptCompareString(_this3.pin.join(''), _this3.account.pinHash) === true)) {
                  _context.next = 25;
                  break;
                }

                _this3.$store.dispatch('settings/setAuthenticatedAccount', _this3.account.id);

                currency = _this3.$store.state.settings.supportedCurrencies.find(function (item) {
                  return item.code === _this3.account.currency;
                });
                _this3.$i18n.locale = _this3.account.locale;

                _this3.$store.dispatch('settings/setCurrency', currency);

                _context.next = 13;
                return _this3.decryptData(_this3.account.id, _this3.pin.join(''));

              case 13:
                _context.next = 15;
                return _this3.initializeWallets(_this3.account.id);

              case 15:
                _context.next = 17;
                return new RefreshWallet();

              case 17:
                Object.getPrototypeOf(_this3.$root).$walletWorker = _context.sent;

                // const connect = await this.backEndService.connect();
                // if (connect) {
                //   await this.backEndService.loadPriceFeed();
                // }
                _this3.$router.push({
                  path: '/wallet'
                });

                _this3.$store.dispatch('settings/setLayout', 'light');

                _context.next = 22;
                return new Promise(function (r) {
                  return setTimeout(r, _this3.delay.long);
                });

              case 22:
                _this3.$store.dispatch('settings/setLoading', false);

                _context.next = 29;
                break;

              case 25:
                _this3.$toast.create(10, _this3.$t('wrongPin'), _this3.delay.normal, 'top');

                _this3.$refs.PinPad.resetState();

                _this3.resetPin();

                _this3.$store.dispatch('settings/setLoading', false);

              case 29:
                _context.next = 34;
                break;

              case 31:
                _context.prev = 31;
                _context.t0 = _context["catch"](2);

                _this3.errorHandler(_context.t0);

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 31]]);
      }))();
    },

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
    decryptData: function decryptData(id, pass) {
      var _this4 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4.encryptedModels.forEach(function (model) {
                  if (model.name === 'Account') {
                    var result = model.query().where('id', id).get();
                    result.forEach(function (item) {
                      model.AES.forEach(function (key) {
                        if (item[key]) {
                          item[key] = _this4.decrypt(item[key], pass);
                        }
                      });
                    });
                  }

                  if (model.name === 'Wallet') {
                    var _result = model.query().where('account_id', id).get();

                    _result.forEach(function (item) {
                      model.AES.forEach(function (key) {
                        if (item[key]) {
                          item[key] = _this4.decrypt(item[key], pass);
                        }
                      });
                    });
                  }
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    initializeWallets: function initializeWallets(accountId) {
      var _this5 = this;

      return new Promise( /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee7(resolve) {
          var initializedWallets, wallets, generate, _generate, generateErc20, _generateErc, erc20Promises, promises;

          return regenerator_default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _generateErc = function _generateErc3() {
                    _generateErc = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee6(wallet) {
                      return regenerator_default.a.wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              initializedWallets[wallet.name] = wallet.erc20Wallet;

                            case 1:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6);
                    }));
                    return _generateErc.apply(this, arguments);
                  };

                  generateErc20 = function _generateErc2(_x3) {
                    return _generateErc.apply(this, arguments);
                  };

                  _generate = function _generate3() {
                    _generate = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5(wallet) {
                      return regenerator_default.a.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              initializedWallets[wallet.name] = wallet.hdWallet;

                            case 1:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    }));
                    return _generate.apply(this, arguments);
                  };

                  generate = function _generate2(_x2) {
                    return _generate.apply(this, arguments);
                  };

                  initializedWallets = {};
                  _this5.activeWallets[accountId] = initializedWallets;
                  wallets = entities_wallet["a" /* default */].query().where('account_id', accountId).where('enabled', true).get();

                  if (wallets.length === 0) {
                    resolve();
                  }

                  erc20Promises = [];
                  promises = [];
                  wallets.forEach(function (wallet) {
                    if (wallet.sdk !== 'ERC20') {
                      promises.push(new Promise( /*#__PURE__*/function () {
                        var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(res) {
                          return regenerator_default.a.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  _context3.next = 2;
                                  return generate(wallet);

                                case 2:
                                  res();

                                case 3:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        return function (_x4) {
                          return _ref2.apply(this, arguments);
                        };
                      }()));
                    }
                  });
                  _context7.next = 13;
                  return Promise.all(promises);

                case 13:
                  wallets.forEach(function (wallet) {
                    if (wallet.sdk === 'ERC20') {
                      erc20Promises.push(new Promise( /*#__PURE__*/function () {
                        var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4(res) {
                          return regenerator_default.a.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return generateErc20(wallet);

                                case 2:
                                  res();

                                case 3:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4);
                        }));

                        return function (_x5) {
                          return _ref3.apply(this, arguments);
                        };
                      }()));
                    }
                  });
                  _context7.next = 16;
                  return Promise.all(erc20Promises);

                case 16:
                  resolve();

                case 17:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Auth/Login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Auth_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Auth/Login/index.vue?vue&type=style&index=0&id=5c267b0e&scoped=true&lang=css&
var Loginvue_type_style_index_0_id_5c267b0e_scoped_true_lang_css_ = __webpack_require__("eaa2");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Auth/Login/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Auth_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5c267b0e",
  null
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "dc1b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "eaa2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c267b0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dc1b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c267b0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c267b0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c267b0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);