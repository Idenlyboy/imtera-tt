"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_shared_ui_InputEmail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputEmail.vue?vue&type=script&setup=true&lang=ts"
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputEmail.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'InputEmail',
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
    var model = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useModel)(__props, "modelValue");
    var props = __props;
    var __returned__ = {
      model: model,
      props: props
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputEmail.vue?vue&type=template&id=194ca041&ts=true"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputEmail.vue?vue&type=template&id=194ca041&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "block"
};
var _hoisted_2 = {
  "class": "font-semibold text-sm mb-2 text-gray-800 dark:text-gray-200"
};
var _hoisted_3 = {
  "class": "relative"
};
var _hoisted_4 = ["placeholder", "name"];
var _hoisted_5 = {
  key: 0,
  "class": "absolute left-0 -bottom-5 text-red-500 text-xs"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_a = $setup.props.title) !== null && _a !== void 0 ? _a : ''), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['w-full rounded-xl border px-4 py-3 text-sm transition outline-none', 'bg-white dark:bg-gray-900', 'border-gray-300 dark:border-gray-700 text-white', 'focus:ring-2 focus:ring-blue-500 focus:border-blue-500', $setup.props.errors && $setup.props.errors[$setup.props.name] ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '']),
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.model = $event;
    }),
    type: "email",
    placeholder: $setup.props.placeholder,
    name: $setup.props.name
  }, null, 10 /* CLASS, PROPS */, _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.model]]), $setup.props.errors && $setup.props.errors[$setup.props.name] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.errors[$setup.props.name][0]), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
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

/***/ "./resources/js/shared/ui/InputEmail.vue"
/*!***********************************************!*\
  !*** ./resources/js/shared/ui/InputEmail.vue ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputEmail_vue_vue_type_template_id_194ca041_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputEmail.vue?vue&type=template&id=194ca041&ts=true */ "./resources/js/shared/ui/InputEmail.vue?vue&type=template&id=194ca041&ts=true");
/* harmony import */ var _InputEmail_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputEmail.vue?vue&type=script&setup=true&lang=ts */ "./resources/js/shared/ui/InputEmail.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var E_Projects_imtera_tt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_Projects_imtera_tt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InputEmail_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InputEmail_vue_vue_type_template_id_194ca041_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/ui/InputEmail.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/shared/ui/InputEmail.vue?vue&type=script&setup=true&lang=ts"
/*!**********************************************************************************!*\
  !*** ./resources/js/shared/ui/InputEmail.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputEmail_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputEmail_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-22!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputEmail.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputEmail.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./resources/js/shared/ui/InputEmail.vue?vue&type=template&id=194ca041&ts=true"
/*!*************************************************************************************!*\
  !*** ./resources/js/shared/ui/InputEmail.vue?vue&type=template&id=194ca041&ts=true ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputEmail_vue_vue_type_template_id_194ca041_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputEmail_vue_vue_type_template_id_194ca041_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-22!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputEmail.vue?vue&type=template&id=194ca041&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputEmail.vue?vue&type=template&id=194ca041&ts=true");


/***/ }

}]);