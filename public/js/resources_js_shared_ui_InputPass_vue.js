"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_shared_ui_InputPass_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputPass.vue?vue&type=script&setup=true&lang=ts"
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputPass.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'InputPass',
  props: /*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeModels)({
    title: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    errors: {
      type: Object,
      required: true
    }
  }, {
    "modelValue": {
      type: String
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var password = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useModel)(__props, "modelValue");
    var props = __props;
    var type = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('password');
    var toggleVisibility = function toggleVisibility() {
      type.value = type.value === 'password' ? 'text' : 'password';
    };
    var __returned__ = {
      password: password,
      props: props,
      type: type,
      toggleVisibility: toggleVisibility
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputPass.vue?vue&type=template&id=c005bf08&ts=true"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputPass.vue?vue&type=template&id=c005bf08&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "block"
};
var _hoisted_2 = {
  "class": "font-semibold text-sm mb-2 text-gray-800 dark:text-gray-200"
};
var _hoisted_3 = {
  "class": "relative"
};
var _hoisted_4 = ["type", "placeholder", "name"];
var _hoisted_5 = {
  key: 0,
  "class": "absolute left-0 -bottom-5 text-red-500 text-xs"
};
var _hoisted_6 = {
  key: 0,
  "class": "w-5 h-5"
};
var _hoisted_7 = {
  key: 1,
  "class": "w-5 h-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_a = $setup.props.title) !== null && _a !== void 0 ? _a : ''), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['w-full rounded-xl border px-4 py-3 pr-12 text-sm transition outline-none', 'bg-white dark:bg-gray-900', 'border-gray-300 dark:border-gray-700 text-white', 'focus:ring-2 focus:ring-blue-500 focus:border-blue-500', $setup.props.errors && $setup.props.errors[$setup.props.name] ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '']),
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.password = $event;
    }),
    type: $setup.type,
    placeholder: $setup.props.placeholder,
    autocomplete: "new-password",
    name: $setup.props.name
  }, null, 10 /* CLASS, PROPS */, _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $setup.password]]), $setup.props.errors && $setup.props.errors[$setup.props.name] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.errors[$setup.props.name][0]), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "absolute top-0 right-0 bottom-0 w-12 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition",
    type: "button",
    onClick: $setup.toggleVisibility
  }, [$setup.type === 'text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_6, _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("use", {
    href: "/images/icons.svg#eye-visible"
  }, null, -1 /* CACHED */)])))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_7, _toConsumableArray(_cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("use", {
    href: "/images/icons.svg#eye-hidden"
  }, null, -1 /* CACHED */)]))))])])]);
}

/***/ },

/***/ "./node_modules/vue-loader/dist/exportHelper.js"
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ },

/***/ "./resources/js/shared/ui/InputPass.vue"
/*!**********************************************!*\
  !*** ./resources/js/shared/ui/InputPass.vue ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputPass_vue_vue_type_template_id_c005bf08_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputPass.vue?vue&type=template&id=c005bf08&ts=true */ "./resources/js/shared/ui/InputPass.vue?vue&type=template&id=c005bf08&ts=true");
/* harmony import */ var _InputPass_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputPass.vue?vue&type=script&setup=true&lang=ts */ "./resources/js/shared/ui/InputPass.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var E_Projects_imtera_tt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_Projects_imtera_tt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InputPass_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InputPass_vue_vue_type_template_id_c005bf08_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/ui/InputPass.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/shared/ui/InputPass.vue?vue&type=script&setup=true&lang=ts"
/*!*********************************************************************************!*\
  !*** ./resources/js/shared/ui/InputPass.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputPass_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputPass_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-22!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputPass.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputPass.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./resources/js/shared/ui/InputPass.vue?vue&type=template&id=c005bf08&ts=true"
/*!************************************************************************************!*\
  !*** ./resources/js/shared/ui/InputPass.vue?vue&type=template&id=c005bf08&ts=true ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputPass_vue_vue_type_template_id_c005bf08_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputPass_vue_vue_type_template_id_c005bf08_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-22!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputPass.vue?vue&type=template&id=c005bf08&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputPass.vue?vue&type=template&id=c005bf08&ts=true");


/***/ }

}]);