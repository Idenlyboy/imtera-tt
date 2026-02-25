(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_shared_services_notifyService_ts"],{

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