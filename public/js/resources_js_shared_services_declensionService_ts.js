"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_shared_services_declensionService_ts"],{

/***/ "./resources/js/shared/services/declensionService.ts"
/*!***********************************************************!*\
  !*** ./resources/js/shared/services/declensionService.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDeclension: () => (/* binding */ getDeclension)
/* harmony export */ });
/**
 * Возвращает правильную форму слова в зависимости от числа.
 *
 * @param count - число, по которому определяется форма слова
 * @param forms - массив из 3 форм слова:
 *   Пример: ['отзыв', 'отзыва', 'отзывов']
 */
function getDeclension(number, forms) {
  if (forms.length !== 3) {
    throw new Error('Функция declension ожидает массив из ровно 3 форм слова');
  }
  var last2 = Math.floor(Math.abs(number !== null && number !== void 0 ? number : 0)) % 100;
  var last1 = last2 % 10;
  if (10 <= last2 && last2 >= 20) {
    return forms[2];
  }
  if (last1 === 1) {
    return forms[0];
  }
  if (2 <= last1 && last1 <= 4) {
    return forms[1];
  }
  return forms[2];
}

/***/ }

}]);