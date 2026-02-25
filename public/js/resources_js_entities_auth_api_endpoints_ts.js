"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_entities_auth_api_endpoints_ts"],{

/***/ "./resources/js/entities/auth/api/endpoints.ts"
/*!*****************************************************!*\
  !*** ./resources/js/entities/auth/api/endpoints.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ }

}]);