(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auth_RegForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/RegForm.vue?vue&type=script&setup=true&lang=ts"
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/RegForm.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _entities_app_stores_appStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @entities/app/stores/appStore */ "./resources/js/entities/app/stores/appStore.ts");
/* harmony import */ var _entities_auth_api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/auth/api/endpoints */ "./resources/js/entities/auth/api/endpoints.ts");
/* harmony import */ var _shared_services_notifyService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/notifyService */ "./resources/js/shared/services/notifyService.ts");
/* harmony import */ var _shared_ui_InputEmail_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/ui/InputEmail.vue */ "./resources/js/shared/ui/InputEmail.vue");
/* harmony import */ var _shared_ui_InputPass_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/ui/InputPass.vue */ "./resources/js/shared/ui/InputPass.vue");
/* harmony import */ var _shared_ui_InputText_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/ui/InputText.vue */ "./resources/js/shared/ui/InputText.vue");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'RegForm',
  setup: function setup(__props, _ref) {
    var _this = this;
    var __expose = _ref.expose;
    __expose();
    var appStore = (0,_entities_app_stores_appStore__WEBPACK_IMPORTED_MODULE_1__.useAppStore)();
    var errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    var isLoading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var formData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    });
    var onSubmit = function onSubmit() {
      return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
        var _a, _b, _c, _d, url, _yield$api$post, status, data, message, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              errors.value = {};
              isLoading.value = true;
              _context.p = 1;
              url = _entities_auth_api_endpoints__WEBPACK_IMPORTED_MODULE_2__.authEndpoints.api.reg;
              _context.n = 2;
              return _entities_auth_api_endpoints__WEBPACK_IMPORTED_MODULE_2__.api.post(url, formData.value);
            case 2:
              _yield$api$post = _context.v;
              status = _yield$api$post.status;
              data = _yield$api$post.data;
              if (!(status === 200)) {
                _context.n = 4;
                break;
              }
              appStore.setAuth(data.data);
              _shared_services_notifyService__WEBPACK_IMPORTED_MODULE_3__["default"].success('Вы успешно зарегистрировались!');
              _context.n = 3;
              return setTimeout(function () {
                window.location.href = '/';
              }, 1000);
            case 3:
              return _context.a(2, true);
            case 4:
              _context.n = 6;
              break;
            case 5:
              _context.p = 5;
              _t = _context.v;
              if ((_b = (_a = _t.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.errors) {
                _shared_services_notifyService__WEBPACK_IMPORTED_MODULE_3__["default"].error('Ошибка при регистрации!');
                errors.value = _t.response.data.errors;
              } else {
                message = ((_d = (_c = _t.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || 'Ошибка при регистрации!';
                _shared_services_notifyService__WEBPACK_IMPORTED_MODULE_3__["default"].error(message);
                console.error('Registration error:', _t);
              }
            case 6:
              _context.p = 6;
              isLoading.value = false;
              return _context.f(6);
            case 7:
              return _context.a(2);
          }
        }, _callee, null, [[1, 5, 6, 7]]);
      }));
    };
    var __returned__ = {
      appStore: appStore,
      errors: errors,
      isLoading: isLoading,
      formData: formData,
      onSubmit: onSubmit,
      get authEndpoints() {
        return _entities_auth_api_endpoints__WEBPACK_IMPORTED_MODULE_2__.authEndpoints;
      },
      InputEmail: _shared_ui_InputEmail_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      InputPass: _shared_ui_InputPass_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
      InputText: _shared_ui_InputText_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputEmail.vue?vue&type=script&setup=true&lang=ts"
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputEmail.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputPass.vue?vue&type=script&setup=true&lang=ts"
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputPass.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputText.vue?vue&type=script&setup=true&lang=ts"
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputText.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'InputText',
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/RegForm.vue?vue&type=template&id=15ce5f5a&ts=true"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/RegForm.vue?vue&type=template&id=15ce5f5a&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4"
};
var _hoisted_2 = ["disabled"];
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 1,
  "class": "animate-pulse"
};
var _hoisted_5 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.onSubmit, ["prevent"]),
    "class": "w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-5 transition"
  }, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "text-2xl font-bold text-center text-gray-800 dark:text-gray-100"
  }, " Регистрация ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputText"], {
    modelValue: $setup.formData.name,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.formData.name = $event;
    }),
    title: "Имя",
    placeholder: "Имя",
    name: "name",
    errors: $setup.errors
  }, null, 8 /* PROPS */, ["modelValue", "errors"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputEmail"], {
    modelValue: $setup.formData.email,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.formData.email = $event;
    }),
    title: "Почта",
    placeholder: "Почта",
    name: "email",
    errors: $setup.errors
  }, null, 8 /* PROPS */, ["modelValue", "errors"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputPass"], {
    modelValue: $setup.formData.password,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.formData.password = $event;
    }),
    title: "Пароль",
    placeholder: "Пароль",
    name: "password",
    errors: $setup.errors
  }, null, 8 /* PROPS */, ["modelValue", "errors"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputPass"], {
    modelValue: $setup.formData.password_confirmation,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.formData.password_confirmation = $event;
    }),
    title: "Подтверждение пароля",
    placeholder: "Подтверждение пароля",
    name: "password_confirmation",
    errors: $setup.errors
  }, null, 8 /* PROPS */, ["modelValue", "errors"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "w-full rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-medium py-3 transition disabled:opacity-60 disabled:pointer-events-none",
    disabled: $setup.isLoading
  }, [!$setup.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, "Зарегистрироваться")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, "Подождите..."))], 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $setup.authEndpoints.web.login,
    "class": "block text-center text-sm text-blue-600 hover:text-blue-700 transition"
  }, " Есть аккаунт? Войти ", 8 /* PROPS */, _hoisted_5)], 32 /* NEED_HYDRATION */)]);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputEmail.vue?vue&type=template&id=194ca041&ts=true"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputEmail.vue?vue&type=template&id=194ca041&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputPass.vue?vue&type=template&id=c005bf08&ts=true"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputPass.vue?vue&type=template&id=c005bf08&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputText.vue?vue&type=template&id=1bb11398&ts=true"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputText.vue?vue&type=template&id=1bb11398&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['w-full rounded-xl border px-4 py-3 text-sm transition outline-none', 'bg-white dark:bg-gray-900', 'border-gray-300 dark:border-gray-700 text-white', 'placeholder-gray-400 dark:placeholder-gray-500', 'focus:ring-2 focus:ring-blue-500 focus:border-blue-500', $setup.props.errors && $setup.props.errors[$setup.props.name] ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '']),
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.model = $event;
    }),
    type: "text",
    placeholder: $setup.props.placeholder,
    name: $setup.props.name
  }, null, 10 /* CLASS, PROPS */, _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.model]]), $setup.props.errors && $setup.props.errors[$setup.props.name] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.errors[$setup.props.name][0]), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ },

/***/ "./resources/js/entities/auth/api/endpoints.ts"
/*!*****************************************************!*\
  !*** ./resources/js/entities/auth/api/endpoints.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   api: () => (/* reexport safe */ _shared_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.api),
/* harmony export */   authEndpoints: () => (/* binding */ authEndpoints)
/* harmony export */ });
/* harmony import */ var _shared_api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/api/endpoints */ "./resources/js/shared/api/endpoints.ts");

var authEndpoints = {
  web: {
    login: '/login',
    reg: '/reg'
  },
  api: {
    login: '/login',
    reg: '/reg',
    logout: '/logout'
  }
};


/***/ },

/***/ "./resources/js/shared/api/endpoints.ts"
/*!**********************************************!*\
  !*** ./resources/js/shared/api/endpoints.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_BASE_URL: () => (/* binding */ API_BASE_URL),
/* harmony export */   api: () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

var API_BASE_URL = '/api';
var api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: API_BASE_URL,
  withCredentials: true
});

/***/ },

/***/ "./resources/js/shared/services/notifyService.ts"
/*!*******************************************************!*\
  !*** ./resources/js/shared/services/notifyService.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-toast-notification */ "./node_modules/vue-toast-notification/dist/index.js");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_toast_notification__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toast-notification/dist/theme-sugar.css */ "./node_modules/vue-toast-notification/dist/theme-sugar.css");


var toast = (0,vue_toast_notification__WEBPACK_IMPORTED_MODULE_0__.useToast)();
var notify = {
  success: function success(message) {
    toast.success(message);
  },
  error: function error(message) {
    toast.error(message);
  },
  info: function info(message) {
    toast.info(message);
  },
  warning: function warning(message) {
    toast.warning(message);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notify);

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-toast-notification/dist/theme-sugar.css"
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-toast-notification/dist/theme-sugar.css ***!
  \**************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes fadeOut{from{opacity:1}to{opacity:0}}.v-toast--fade-out{animation-name:fadeOut}@keyframes fadeInDown{from{opacity:0;transform:translate3d(0, -100%, 0)}to{opacity:1;transform:none}}.v-toast--fade-in-down{animation-name:fadeInDown}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0, 100%, 0)}to{opacity:1;transform:none}}.v-toast--fade-in-up{animation-name:fadeInUp}.fade-enter-active,.fade-leave-active{transition:opacity 150ms ease-out}.fade-enter,.fade-leave-to{opacity:0}.v-toast{position:fixed;display:flex;top:0;bottom:0;left:0;right:0;padding:2em;overflow:hidden;z-index:1090;pointer-events:none}.v-toast__item{display:inline-flex;align-items:center;animation-duration:150ms;margin:.5em 0;box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:.25em;pointer-events:auto;opacity:.92;color:#fff;min-height:3em;cursor:pointer}.v-toast__item--success{background-color:#47d78a}.v-toast__item--info{background-color:#1c85d5}.v-toast__item--warning{background-color:#febc22}.v-toast__item--error{background-color:#f7471c}.v-toast__item--default{background-color:#343a40}.v-toast__item--warning{color:#000}.v-toast__item.v-toast__item--top,.v-toast__item.v-toast__item--bottom{align-self:center}.v-toast__item.v-toast__item--top-right,.v-toast__item.v-toast__item--bottom-right{align-self:flex-end}.v-toast__item.v-toast__item--top-left,.v-toast__item.v-toast__item--bottom-left{align-self:flex-start}.v-toast__text{margin:0;padding:.5em 1em;word-break:break-word}.v-toast__icon{display:none}.v-toast.v-toast--top{flex-direction:column}.v-toast.v-toast--bottom{flex-direction:column-reverse}.v-toast.v-toast--custom-parent{position:absolute}@media screen and (max-width: 768px){.v-toast{padding:0;position:fixed !important}}.v-toast__item{opacity:1;min-height:4em}.v-toast__item .v-toast__text{padding:1.5em 1em}.v-toast__item .v-toast__icon{display:block;width:27px;min-width:27px;height:27px;margin-left:1em;background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45.999 45.999'%3e %3cpath fill='%23fff' d='M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 11-6 0V21a3 3 0 116 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z'/%3e %3c/svg%3e\") no-repeat}[dir=rtl] .v-toast__item .v-toast__icon{margin-left:unset;margin-right:1em}.v-toast__item.v-toast__item--success .v-toast__icon{background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'%3e %3cpath fill='%23fff' d='M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm14.495 17.329l-16 18a1.997 1.997 0 01-2.745.233l-10-8a2 2 0 012.499-3.124l8.517 6.813L37.505 14.67a2.001 2.001 0 012.99 2.659z'/%3e %3c/svg%3e\") no-repeat}.v-toast__item.v-toast__item--error .v-toast__icon{background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 51.976 51.976'%3e %3cpath fill='%23fff' d='M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 01-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 11-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 112.828-2.828l7.425 7.425 7.071-7.071a2 2 0 112.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 010 2.828z'/%3e %3c/svg%3e\") no-repeat}.v-toast__item.v-toast__item--warning .v-toast__icon{background:url(\"data:image/svg+xml,%3csvg viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill='%23000' d='M49.466 41.26L29.216 6.85c-.69-1.16-1.89-1.85-3.22-1.85-1.32 0-2.53.69-3.21 1.85L2.536 41.26c-.71 1.2-.72 2.64-.03 3.85.68 1.18 1.89 1.89 3.24 1.89h40.51c1.35 0 2.56-.71 3.23-1.89.7-1.21.69-2.65-.02-3.85zm-25.53-21.405h3.381v3.187l-.724 8.92H24.66l-.725-8.92v-3.187zm2.97 17.344a1.712 1.712 0 01-1.267.543c-.491 0-.914-.181-1.268-.543a1.788 1.788 0 01-.531-1.297c0-.502.176-.935.53-1.297a1.712 1.712 0 011.269-.544c.49 0 .914.181 1.268.544s.53.795.53 1.297c0 .503-.176.934-.53 1.297z'/%3e %3c/svg%3e\") no-repeat}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ },

/***/ "./node_modules/vue-toast-notification/dist/theme-sugar.css"
/*!******************************************************************!*\
  !*** ./node_modules/vue-toast-notification/dist/theme-sugar.css ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_theme_sugar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./theme-sugar.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-toast-notification/dist/theme-sugar.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_theme_sugar_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_theme_sugar_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/vue-loader/dist/exportHelper.js"
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
(__unused_webpack_module, exports) {

"use strict";

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

/***/ "./resources/js/pages/auth/RegForm.vue"
/*!*********************************************!*\
  !*** ./resources/js/pages/auth/RegForm.vue ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegForm_vue_vue_type_template_id_15ce5f5a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegForm.vue?vue&type=template&id=15ce5f5a&ts=true */ "./resources/js/pages/auth/RegForm.vue?vue&type=template&id=15ce5f5a&ts=true");
/* harmony import */ var _RegForm_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegForm.vue?vue&type=script&setup=true&lang=ts */ "./resources/js/pages/auth/RegForm.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var E_Projects_imtera_tt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_Projects_imtera_tt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RegForm_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RegForm_vue_vue_type_template_id_15ce5f5a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/auth/RegForm.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/shared/ui/InputEmail.vue"
/*!***********************************************!*\
  !*** ./resources/js/shared/ui/InputEmail.vue ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./resources/js/shared/ui/InputPass.vue"
/*!**********************************************!*\
  !*** ./resources/js/shared/ui/InputPass.vue ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./resources/js/shared/ui/InputText.vue"
/*!**********************************************!*\
  !*** ./resources/js/shared/ui/InputText.vue ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputText_vue_vue_type_template_id_1bb11398_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputText.vue?vue&type=template&id=1bb11398&ts=true */ "./resources/js/shared/ui/InputText.vue?vue&type=template&id=1bb11398&ts=true");
/* harmony import */ var _InputText_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputText.vue?vue&type=script&setup=true&lang=ts */ "./resources/js/shared/ui/InputText.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var E_Projects_imtera_tt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_Projects_imtera_tt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InputText_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InputText_vue_vue_type_template_id_1bb11398_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/shared/ui/InputText.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./resources/js/pages/auth/RegForm.vue?vue&type=script&setup=true&lang=ts"
/*!********************************************************************************!*\
  !*** ./resources/js/pages/auth/RegForm.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegForm_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegForm_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-22!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegForm.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/RegForm.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./resources/js/shared/ui/InputEmail.vue?vue&type=script&setup=true&lang=ts"
/*!**********************************************************************************!*\
  !*** ./resources/js/shared/ui/InputEmail.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputEmail_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputEmail_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-22!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputEmail.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputEmail.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./resources/js/shared/ui/InputPass.vue?vue&type=script&setup=true&lang=ts"
/*!*********************************************************************************!*\
  !*** ./resources/js/shared/ui/InputPass.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputPass_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputPass_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-22!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputPass.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputPass.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./resources/js/shared/ui/InputText.vue?vue&type=script&setup=true&lang=ts"
/*!*********************************************************************************!*\
  !*** ./resources/js/shared/ui/InputText.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputText_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputText_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-22!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputText.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputText.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./resources/js/pages/auth/RegForm.vue?vue&type=template&id=15ce5f5a&ts=true"
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/auth/RegForm.vue?vue&type=template&id=15ce5f5a&ts=true ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegForm_vue_vue_type_template_id_15ce5f5a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegForm_vue_vue_type_template_id_15ce5f5a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-22!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegForm.vue?vue&type=template&id=15ce5f5a&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/RegForm.vue?vue&type=template&id=15ce5f5a&ts=true");


/***/ },

/***/ "./resources/js/shared/ui/InputEmail.vue?vue&type=template&id=194ca041&ts=true"
/*!*************************************************************************************!*\
  !*** ./resources/js/shared/ui/InputEmail.vue?vue&type=template&id=194ca041&ts=true ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputEmail_vue_vue_type_template_id_194ca041_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputEmail_vue_vue_type_template_id_194ca041_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-22!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputEmail.vue?vue&type=template&id=194ca041&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputEmail.vue?vue&type=template&id=194ca041&ts=true");


/***/ },

/***/ "./resources/js/shared/ui/InputPass.vue?vue&type=template&id=c005bf08&ts=true"
/*!************************************************************************************!*\
  !*** ./resources/js/shared/ui/InputPass.vue?vue&type=template&id=c005bf08&ts=true ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputPass_vue_vue_type_template_id_c005bf08_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputPass_vue_vue_type_template_id_c005bf08_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-22!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputPass.vue?vue&type=template&id=c005bf08&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputPass.vue?vue&type=template&id=c005bf08&ts=true");


/***/ },

/***/ "./resources/js/shared/ui/InputText.vue?vue&type=template&id=1bb11398&ts=true"
/*!************************************************************************************!*\
  !*** ./resources/js/shared/ui/InputText.vue?vue&type=template&id=1bb11398&ts=true ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputText_vue_vue_type_template_id_1bb11398_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_22_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputText_vue_vue_type_template_id_1bb11398_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-22!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputText.vue?vue&type=template&id=1bb11398&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-22!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/shared/ui/InputText.vue?vue&type=template&id=1bb11398&ts=true");


/***/ },

/***/ "./node_modules/vue-toast-notification/dist/index.js"
/*!***********************************************************!*\
  !*** ./node_modules/vue-toast-notification/dist/index.js ***!
  \***********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"));
	else // removed by dead control flow
{}
})(this, (__WEBPACK_EXTERNAL_MODULE__594__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 113:
/***/ ((__unused_webpack_module, exports) => {


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


/***/ }),

/***/ 594:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__594__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_1260__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1260__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_1260__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_1260__.o(definition, key) && !__nested_webpack_require_1260__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_1260__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_1260__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// ESM COMPAT FLAG
__nested_webpack_require_1260__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_1260__.d(__nested_webpack_exports__, {
  ToastComponent: () => (/* reexport */ Component),
  ToastPlugin: () => (/* binding */ ToastPlugin),
  ToastPositions: () => (/* reexport */ positions),
  "default": () => (/* binding */ src),
  useToast: () => (/* reexport */ useToast)
});

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __nested_webpack_require_1260__(594);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.2.1_@babel+core@7.25.2_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.6_vue@3.5.6_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.6_vue@3.5.6_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/js/Component.vue?vue&type=template&id=f73c8b4e

const _hoisted_1 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.createBlock)(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.Transition, {
    "enter-active-class": _ctx.transition.enter,
    "leave-active-class": _ctx.transition.leave
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.createElementVNode)("div", {
      ref: "root",
      role: "alert",
      class: (0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.normalizeClass)(["v-toast__item", [`v-toast__item--${_ctx.type}`, `v-toast__item--${_ctx.position}`]]),
      onMouseover: _cache[0] || (_cache[0] = $event => _ctx.toggleTimer(true)),
      onMouseleave: _cache[1] || (_cache[1] = $event => _ctx.toggleTimer(false)),
      onClick: _cache[2] || (_cache[2] = function () {
        return _ctx.whenClicked && _ctx.whenClicked(...arguments);
      })
    }, [_cache[3] || (_cache[3] = (0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.createElementVNode)("div", {
      class: "v-toast__icon"
    }, null, -1)), (0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.createElementVNode)("p", {
      class: "v-toast__text",
      innerHTML: _ctx.message
    }, null, 8, _hoisted_1)], 34), [[external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.vShow, _ctx.isActive]])]),
    _: 1
  }, 8, ["enter-active-class", "leave-active-class"]);
}
;// CONCATENATED MODULE: ./src/js/Component.vue?vue&type=template&id=f73c8b4e

;// CONCATENATED MODULE: ./src/js/helpers.js

function removeElement(el) {
  if (typeof el.remove !== 'undefined') {
    el.remove();
  } else {
    el.parentNode?.removeChild(el);
  }
}
function createComponent(component, props, parentContainer) {
  let slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const vNode = (0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.h)(component, props, slots);
  const container = document.createElement('div');
  container.classList.add('v-toast--pending');
  parentContainer.appendChild(container);
  (0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.render)(vNode, container);
  return vNode.component;
}
;// CONCATENATED MODULE: ./src/js/timer.js
// https://stackoverflow.com/a/3969760
class Timer {
  constructor(callback, delay) {
    this.startedAt = Date.now();
    this.callback = callback;
    this.delay = delay;
    this.timer = setTimeout(callback, delay);
  }
  pause() {
    this.stop();
    this.delay -= Date.now() - this.startedAt;
  }
  resume() {
    this.stop();
    this.startedAt = Date.now();
    this.timer = setTimeout(this.callback, this.delay);
  }
  stop() {
    clearTimeout(this.timer);
  }
}
;// CONCATENATED MODULE: ./src/js/positions.js
/* harmony default export */ const positions = (Object.freeze({
  TOP_RIGHT: 'top-right',
  TOP: 'top',
  TOP_LEFT: 'top-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM: 'bottom',
  BOTTOM_LEFT: 'bottom-left'
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/mitt@3.0.1/node_modules/mitt/dist/mitt.mjs
/* harmony default export */ function mitt(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]))},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e)}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e)})}}}
//# sourceMappingURL=mitt.mjs.map

;// CONCATENATED MODULE: ./src/js/bus.js

const eventBus = mitt();
/* harmony default export */ const bus = (eventBus);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.2.1_@babel+core@7.25.2_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.6_vue@3.5.6_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/js/Component.vue?vue&type=script&lang=js





/* harmony default export */ const Componentvue_type_script_lang_js = ((0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.defineComponent)({
  name: 'Toast',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'success'
    },
    position: {
      type: String,
      default: positions.BOTTOM_RIGHT,
      validator(value) {
        return Object.values(positions).includes(value);
      }
    },
    duration: {
      type: Number,
      default: 3000
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    onDismiss: {
      type: Function,
      default: () => {}
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    queue: Boolean,
    pauseOnHover: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isActive: false,
      parentTop: null,
      parentBottom: null,
      isHovered: false
    };
  },
  beforeMount() {
    this.setupContainer();
  },
  mounted() {
    this.showNotice();
    bus.on('toast-clear', this.dismiss);
  },
  methods: {
    setupContainer() {
      this.parentTop = document.querySelector('.v-toast.v-toast--top');
      this.parentBottom = document.querySelector('.v-toast.v-toast--bottom');
      // No need to create them, they already exists
      if (this.parentTop && this.parentBottom) return;
      if (!this.parentTop) {
        this.parentTop = document.createElement('div');
        this.parentTop.className = 'v-toast v-toast--top';
      }
      if (!this.parentBottom) {
        this.parentBottom = document.createElement('div');
        this.parentBottom.className = 'v-toast v-toast--bottom';
      }
      const container = document.body;
      container.appendChild(this.parentTop);
      container.appendChild(this.parentBottom);
    },
    shouldQueue() {
      if (!this.queue) return false;
      return this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0;
    },
    dismiss() {
      if (this.timer) this.timer.stop();
      clearTimeout(this.queueTimer);
      this.isActive = false;

      // Timeout for the animation complete before destroying
      setTimeout(() => {
        this.onDismiss.apply(null, arguments);
        const wrapper = this.$refs.root;
        // unmount the component
        (0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.render)(null, wrapper);
        removeElement(wrapper);
      }, 150);
    },
    showNotice() {
      if (this.shouldQueue()) {
        // Call recursively if it should queue
        this.queueTimer = setTimeout(this.showNotice, 250);
        return;
      }
      const wrapper = this.$refs.root.parentElement;
      this.correctParent.insertAdjacentElement('afterbegin', this.$refs.root);
      removeElement(wrapper);
      this.isActive = true;
      if (this.duration) {
        this.timer = new Timer(this.dismiss, this.duration);
      }
    },
    whenClicked() {
      if (!this.dismissible) return;
      this.onClick.apply(null, arguments);
      this.dismiss();
    },
    toggleTimer(newVal) {
      if (!this.pauseOnHover || !this.timer) return;
      newVal ? this.timer.pause() : this.timer.resume();
    }
  },
  computed: {
    correctParent() {
      switch (this.position) {
        case positions.TOP:
        case positions.TOP_RIGHT:
        case positions.TOP_LEFT:
          return this.parentTop;
        case positions.BOTTOM:
        case positions.BOTTOM_RIGHT:
        case positions.BOTTOM_LEFT:
          return this.parentBottom;
      }
    },
    transition() {
      switch (this.position) {
        case positions.TOP:
        case positions.TOP_RIGHT:
        case positions.TOP_LEFT:
          return {
            enter: 'v-toast--fade-in-down',
            leave: 'v-toast--fade-out'
          };
        case positions.BOTTOM:
        case positions.BOTTOM_RIGHT:
        case positions.BOTTOM_LEFT:
          return {
            enter: 'v-toast--fade-in-up',
            leave: 'v-toast--fade-out'
          };
      }
    }
  },
  beforeUnmount() {
    bus.off('toast-clear', this.dismiss);
  }
}));
;// CONCATENATED MODULE: ./src/js/Component.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.6_vue@3.5.6_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __nested_webpack_require_1260__(113);
;// CONCATENATED MODULE: ./src/js/Component.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper["default"])(Componentvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const Component = (__exports__);
;// CONCATENATED MODULE: ./src/js/api.js



const useToast = function () {
  let globalProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    open(options) {
      let message = null;
      if (typeof options === 'string') message = options;
      const defaultProps = {
        message
      };
      const propsData = Object.assign({}, defaultProps, globalProps, options);
      const instance = createComponent(Component, propsData, document.body);
      return {
        dismiss: instance.ctx.dismiss
      };
    },
    clear() {
      bus.emit('toast-clear');
    },
    success(message) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.open(Object.assign({}, {
        message,
        type: 'success'
      }, options));
    },
    error(message) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.open(Object.assign({}, {
        message,
        type: 'error'
      }, options));
    },
    info(message) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.open(Object.assign({}, {
        message,
        type: 'info'
      }, options));
    },
    warning(message) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.open(Object.assign({}, {
        message,
        type: 'warning'
      }, options));
    },
    default(message) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.open(Object.assign({}, {
        message,
        type: 'default'
      }, options));
    }
  };
};
;// CONCATENATED MODULE: ./src/index.js



const ToastPlugin = {
  install: function (app) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let instance = useToast(options);
    app.config.globalProperties.$toast = instance;
    app.provide('$toast', instance);
  }
};
/* harmony default export */ const src = (ToastPlugin);

/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }

}]);