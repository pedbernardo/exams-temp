/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/orquestra-helpers/index.js":
/*!*************************************************!*\
  !*** ./node_modules/orquestra-helpers/index.js ***!
  \*************************************************/
/*! exports provided: getMonthName, getMonthInt, getMonthNameByNumber, addYears, parseDate, getCodFlow, getCodFlowExecute, getCodFlowExecuteTask, getTaskAlias, getUserToken, resetAllTables, resetAllFields, resetForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/_dates */ "./node_modules/orquestra-helpers/src/_dates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMonthName", function() { return _src_dates__WEBPACK_IMPORTED_MODULE_0__["getMonthName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMonthInt", function() { return _src_dates__WEBPACK_IMPORTED_MODULE_0__["getMonthInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMonthNameByNumber", function() { return _src_dates__WEBPACK_IMPORTED_MODULE_0__["getMonthNameByNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addYears", function() { return _src_dates__WEBPACK_IMPORTED_MODULE_0__["addYears"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return _src_dates__WEBPACK_IMPORTED_MODULE_0__["parseDate"]; });

/* harmony import */ var _src_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/_forms */ "./node_modules/orquestra-helpers/src/_forms.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCodFlow", function() { return _src_forms__WEBPACK_IMPORTED_MODULE_1__["getCodFlow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCodFlowExecute", function() { return _src_forms__WEBPACK_IMPORTED_MODULE_1__["getCodFlowExecute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCodFlowExecuteTask", function() { return _src_forms__WEBPACK_IMPORTED_MODULE_1__["getCodFlowExecuteTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTaskAlias", function() { return _src_forms__WEBPACK_IMPORTED_MODULE_1__["getTaskAlias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserToken", function() { return _src_forms__WEBPACK_IMPORTED_MODULE_1__["getUserToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetAllTables", function() { return _src_forms__WEBPACK_IMPORTED_MODULE_1__["resetAllTables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetAllFields", function() { return _src_forms__WEBPACK_IMPORTED_MODULE_1__["resetAllFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetForm", function() { return _src_forms__WEBPACK_IMPORTED_MODULE_1__["resetForm"]; });

/**
 * Dates
 */



/**
 * Forms
 */



/***/ }),

/***/ "./node_modules/orquestra-helpers/src/_dates.js":
/*!******************************************************!*\
  !*** ./node_modules/orquestra-helpers/src/_dates.js ***!
  \******************************************************/
/*! exports provided: getMonthName, getMonthInt, getMonthNameByNumber, addYears, parseDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthName", function() { return getMonthName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthInt", function() { return getMonthInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthNameByNumber", function() { return getMonthNameByNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addYears", function() { return addYears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
/**
 * @param {Date} date - related date to get locale string month name
 * @param {String} config.month - native option of toLocaleString method for month output
 * @param {Boolean} config.capitalize - transform locale month in captilezed format (eg. January insted january)
 * @param {String} config.lang - language used to get locale string month name
 * @return {String} month name
 */
const getMonthName = (date, config = {
  month: 'long',
  capitalize: true,
  lang: 'pt-BR'
}) => {
  const month = date.toLocaleString(config.lang, { month: config.month })

  if (!config.capitalize) {
    return month
  }

  return month[0].toUpperCase() + month.slice(1)
}

/**
 * @param {Date} date - related date to get integer month value
 * @return {Number} month integer equivalent
 */
const getMonthInt = date =>
  date.getMonth() + 1 // avoid months starting at 0

/**
 * @param {String, Number} monthNumber - month number, starting at 1 (eg. 1 = January)
 * @param {String} config.month - native option of toLocaleString method for month output
 * @param {Boolean} config.capitalize - transform locale month in captilezed format (eg. January insted january)
 * @param {String} config.lang - language used to get locale string month name
 * @return {String} month name
 */
const getMonthNameByNumber = (monthNumber, config = {
  month: 'long',
  capitalize: true,
  lang: 'pt-BR'
}) => {
  const date = new Date()
  const currentMonth = parseInt(monthNumber) - 1 // adjust months to starts at 0

  date.setMonth(currentMonth)

  const month = date.toLocaleString(config.lang, { month: config.month })

  if (!config.capitalize) {
    return month
  }

  return month[0].toUpperCase() + month.slice(1)
}

/**
 * @param {Date} date - actual date to add years
 * @param {Number} quantity - years quantity to sum, accepts negative numbers
 * @return {Date} result date
 */
const addYears = (date, quantity) => {
  const newDate = new Date(date)
  newDate.setFullYear(date.getFullYear() + quantity)

  return newDate
}

/**
 * @param {String} stringDate - dates with pt-br format dd/mm/yyyy
 * @return {Date} stringDate as date object
 */
const parseDate = stringDate => {
  const [dd, mm, yyyy] = stringDate.split('/')
  return new Date(yyyy, mm - 1, dd)
}


/***/ }),

/***/ "./node_modules/orquestra-helpers/src/_forms.js":
/*!******************************************************!*\
  !*** ./node_modules/orquestra-helpers/src/_forms.js ***!
  \******************************************************/
/*! exports provided: getCodFlow, getCodFlowExecute, getCodFlowExecuteTask, getTaskAlias, getUserToken, resetAllTables, resetAllFields, resetForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCodFlow", function() { return getCodFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCodFlowExecute", function() { return getCodFlowExecute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCodFlowExecuteTask", function() { return getCodFlowExecuteTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskAlias", function() { return getTaskAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserToken", function() { return getUserToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAllTables", function() { return resetAllTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAllFields", function() { return resetAllFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetForm", function() { return resetForm; });
/**
 * @return {String} Orquestra Process CodFlow
 */
const getCodFlow = () =>
  document.querySelector('#inpCodFlow').value

/**
 * @return {String} Orquestra Process CodFlowExecute
 */
const getCodFlowExecute = () =>
  document.querySelector('#inpCodFlowExecute').value

/**
 * @return {String} Orquestra Task CodFlowExecuteTask
 */
const getCodFlowExecuteTask = () =>
  document.querySelector('#inpCodFlowExecuteTask').value

/**
 * @return {String} Orquestra Task Alias
 */
const getTaskAlias = () =>
  document.querySelector('#inpDsFlowElementAlias').value

/**
 * @return {String} Orquestra Logged User Token
 */
const getUserToken = () =>
  document.querySelector('#inpToken').value

/**
 * @description Reset Orquestra Multivalue Tables,
 * inserting a new blank row and deleting all the rest
 */
const resetAllTables = () => {
  document.querySelectorAll('table[mult=S]')
    .forEach(table => {
      const btnInsert = table.querySelector('#BtnInsertNewRow')

      btnInsert.click()

      table.querySelectorAll('tr:not(.header):not(:last-child')
        .forEach(row => row.remove())
    })
}

/**
 * @description Reset all form fields values inside Orquestra
 * Task Form (`#BoxFrmExecute` container)
 *
 * Note: Using jQuery to trigger change event after resetting values
 *
 * @param {Boolean} hard - flag used to change custom
 * Orquestra required attribute to false after cleaning values
 */
const resetAllFields = (hard = false) => {
  const form = document.querySelector('#BoxFrmExecute')
  const inputs = form.querySelectorAll('input[type=text]')
  const textareas = form.querySelectorAll('textarea')
  const checkboxes = form.querySelectorAll('input[type=checkbox]')
  const radios = form.querySelectorAll('input[type=radio]')
  const selects = form.querySelectorAll('select')

  const singleValue = [...inputs, ...textareas, ...selects]
  const checkValue = [...checkboxes, ...radios]

  singleValue.forEach(field => {
    field.value = ''

    if (hard) {
      field.setAttribute('required', 'N')
    }

    $(field).trigger('change')
  })

  checkValue.forEach(field => {
    field.checked = false

    if (hard) {
      field.setAttribute('required', 'N')
    }

    $(field).trigger('change')
  })
}

/**
 * @description Reset all form fields values and Multivalue
 * Tables inside Orquestra Task Form (`#BoxFrmExecute` container)
 *
 * @param {Boolean} hard - flag used to change custom
 * Orquestra required attribute to false after cleaning values
 */
const resetForm = (hard = false) => {
  resetAllTables()
  resetAllFields(hard)
}


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/template */ "./src/js/components/template.js");
/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/switch */ "./src/js/components/switch.js");
/* harmony import */ var _modules_exams_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/exams-search */ "./src/js/modules/exams-search/index.js");
/* harmony import */ var _modules_send_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/send-options */ "./src/js/modules/send-options/index.js");




/**
 * Componentes Globais
 */

_components_template__WEBPACK_IMPORTED_MODULE_0__["default"].init();
_components_template__WEBPACK_IMPORTED_MODULE_0__["default"].conditionals();
_components_switch__WEBPACK_IMPORTED_MODULE_1__["default"].init('.switch');
/**
 * Módulos
 */

/**
 * @description Responsável pela pesquisa de dados
 * conforme o período de levantamento informado, bem
 * como exibir módulos subsequentes, sendo:
 *
 * `occupational-exams-table`: tabela de Exames Ocupacionais
 * `actions-table`: tabela de Acompanhamento de Plano de Ação
 * `recommendations-table`: tabela de Recomendações
 */

_modules_exams_search__WEBPACK_IMPORTED_MODULE_2__["default"].init();
/**
 * @description Responsável pelas opções de envio do
 * relatório gerado via template.
 */

_modules_send_options__WEBPACK_IMPORTED_MODULE_3__["default"].init();

/***/ }),

/***/ "./src/js/components/button-radio.js":
/*!*******************************************!*\
  !*** ./src/js/components/button-radio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function mount(btnRadioWrapper, hidePrefix) {
  var select = btnRadioWrapper.querySelector('select');
  var hasBtnGroupMarkup = btnRadioWrapper.querySelector('.btn-group');

  if (!hasBtnGroupMarkup) {
    var options = getOptions(select, hidePrefix);
    var btnGroup = createButtonGroup(options);
    select.insertAdjacentHTML('afterend', btnGroup);
  } else {
    reset(btnRadioWrapper);
  }

  handleChange.apply(select);
  select.addEventListener('change', handleChange);
  btnRadioWrapper.querySelectorAll('.btn-radio').forEach(function (btn) {
    return setTriggers(btn);
  });
}

function setTriggers(btn) {
  btn.addEventListener('click', handleClick);
}

function handleClick() {
  var optionValue = this.dataset.option;
  var btnRadioWrapper = this.closest('.btn-radio-wrapper');
  var select = btnRadioWrapper.querySelector('select');
  reset(btnRadioWrapper);
  this.classList.add('-active');
  select.value = optionValue;
}

function handleChange() {
  var btnRadioWrapper = this.closest('.btn-radio-wrapper');

  if (this.value === '') {
    return reset(btnRadioWrapper);
  }

  var btnRadio = btnRadioWrapper.querySelector(".btn-radio[data-option='".concat(this.value, "']"));
  handleClick.apply(btnRadio);
}

function resetState(btn) {
  btn.classList.remove('-active');
}
/**
 * Helpers
 */


var getOptions = function getOptions(select, hidePrefix) {
  return _toConsumableArray(select.options).filter(function (option) {
    return option.value;
  }).map(function (option) {
    var value = option.value;
    var label = hidePrefix ? value.substring(2) : value;
    return {
      value: value,
      label: label
    };
  });
};

var createButtonGroup = function createButtonGroup(options) {
  var buttons = options.map(function (option) {
    return createButton(option);
  });
  return "<div class=\"btn-group\">".concat(buttons.join(''), "</div>");
};

var createButton = function createButton(_ref) {
  var value = _ref.value,
      label = _ref.label;
  return "<button type=\"button\" class=\"btn btn-radio\" data-option=\"".concat(value, "\">").concat(label, "</button>");
};
/**
 * Public API
 */


function init(btnRadioWrapperSelector) {
  var hidePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  context.querySelectorAll(btnRadioWrapperSelector).forEach(function (btnRadioWrapper) {
    return mount(btnRadioWrapper, hidePrefix);
  });
}

function reset(btnRadioWrapper) {
  btnRadioWrapper.querySelectorAll('.btn-radio').forEach(function (btn) {
    return resetState(btn);
  });
}

function destroy(btnRadioWrapper) {
  btnRadioWrapper.querySelectorAll('.btn-radio').forEach(function (btn) {
    btn.removeEventListener('click', handleClick);
    resetState(btn);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  reset: reset,
  destroy: destroy
});

/***/ }),

/***/ "./src/js/components/datepicker-range.js":
/*!***********************************************!*\
  !*** ./src/js/components/datepicker-range.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mount(container) {
  var datepickerOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var inputs = $(container).find('[xname]');
  var labels = $(container).find('[xid]');

  var options = _objectSpread({
    language: 'pt-BR',
    inputs: inputs
  }, datepickerOptions);

  if (labels.length > 0) {
    container.classList.add('-readonly');
  }

  if (inputs.length === 0) {
    return console.error("[DatepickerRange] Orquestra inputs not found inside ".concat(container));
  }

  inputs.attr('autocomplete', 'off');
  $(container).datepicker(options);
}
/**
 * Public API
 */


function init(containerElementSelector, datepickerOptions) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  context.querySelectorAll(containerElementSelector).forEach(function (container) {
    return mount(container, datepickerOptions);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/components/form-validation.js":
/*!**********************************************!*\
  !*** ./src/js/components/form-validation.js ***!
  \**********************************************/
/*! exports provided: FormValidation, addError, removeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidation", function() { return FormValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addError", function() { return addError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeError", function() { return removeError; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function mount(group, context) {
  var element = context.querySelector(group.element);
  var errorMessage = group.errorMessage;

  if (!element) {
    return console.error("[Form Validation] element not found for selector: ".concat(group.element));
  }

  setTriggers(element, errorMessage);
}

function setTriggers(element, errorMessage) {
  // Utilizado jQuery para corrigir o não disparo de
  // eventos `change` em campos do tipo `data` do Orquestra
  // que fazem uso do componente Bootstrap Datepicker.
  $(element).on('change', function (e) {
    handleChange.call(this, e, errorMessage);
  });
}

function handleChange(e, errorMessage) {
  validateField(this, errorMessage);
}

function validateField(field, errorMessage, silent) {
  if (field.value === '') {
    if (!silent) addError(field, errorMessage);
    return true;
  } else {
    if (!silent) removeError(field);
    return false;
  }
}

function validateForm(groups, silent, context) {
  var hasErrors = false;
  var result = groups.map(function (group) {
    var element = context.querySelector(group.element);
    var errorMessage = group.errorMessage;
    var validation = {
      result: validateField(element, errorMessage, silent),
      error: null
    };

    if (!validation.result) {
      return validation;
    }

    hasErrors = true;
    validation.error = errorMessage;
    return validation;
  });
  var errors = result.filter(function (_ref) {
    var error = _ref.error;
    return error !== null;
  });
  return {
    hasErrors: hasErrors,
    errors: errors
  };
}

var getFormHelpElement = function getFormHelpElement(message) {
  return "<p class=\"form-help\">".concat(message, "</p>");
};
/**
 * Public API
 */


var FormValidation = /*#__PURE__*/function () {
  function FormValidation(config) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    _classCallCheck(this, FormValidation);

    this.groups = config;
    this.context = context;

    if (!Array.isArray(config)) {
      return console.error('[Form Validation] config parameter must by a array with a element selector, error message and callback (optional)');
    }

    this.groups.forEach(function (group) {
      return mount(group, context);
    });
  }

  _createClass(FormValidation, [{
    key: "validate",
    value: function validate() {
      var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return validateForm(this.groups, silent, this.context);
    }
  }]);

  return FormValidation;
}();
function addError(element, errorMessage) {
  var formGroup = element.closest('.form-group');

  if (!formGroup) {
    return console.error('[Form Validation] the element must be inside a .form-group container');
  }

  var formHelp = formGroup.querySelector('.form-help');
  formGroup.classList.add('-error');

  if (!formHelp) {
    var _formHelp = getFormHelpElement(errorMessage);

    formGroup.insertAdjacentHTML('beforeend', _formHelp);
  } else {
    formHelp.textContent = errorMessage;
  }
}
function removeError(element) {
  var formGroup = element.closest('.form-group');
  var formHelp = formGroup.querySelector('.form-help');

  if (!formGroup) {
    return console.error('[Form Validation] the element must be inside a .form-group container');
  }

  if (formHelp) {
    formHelp.remove();
  }

  formGroup.classList.remove('-error');
}

/***/ }),

/***/ "./src/js/components/switch.js":
/*!*************************************!*\
  !*** ./src/js/components/switch.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function mount(switchEl) {
  var label = switchEl.querySelector('label');
  var marker = getSwitchMarker();

  if (!label) {
    return;
  }

  label.insertAdjacentHTML('beforeend', marker);
}

var getSwitchMarker = function getSwitchMarker() {
  return '<div class="switch-marker"></div>';
};
/**
 * Public API
 */


function init(switchElementSelector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  context.querySelectorAll(switchElementSelector).forEach(function (switchEl) {
    return mount(switchEl);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/components/table-collapse.js":
/*!*********************************************!*\
  !*** ./src/js/components/table-collapse.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function mount(table) {
  table.querySelectorAll('.table-collapse-header th:first-child').forEach(function (tableGroupTitle) {
    return setTriggers(tableGroupTitle);
  });
}

function setTriggers(tableGroupTitle) {
  tableGroupTitle.addEventListener('click', handleClick);
}

function handleClick() {
  var tableGroupHeader = this.closest('.table-collapse-header');

  if (!tableGroupHeader) {
    return console.error('[Table Collapse] .table-collapse-header not found, must have a parent .table-collapse-header');
  }

  toggleGroup(tableGroupHeader);
}
/**
 * Public API
 */


function init(tableElementSelector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  context.querySelectorAll(tableElementSelector).forEach(function (table) {
    return mount(table);
  });
}

function expand(table) {
  table.querySelectorAll('.table-collapse-header').forEach(function (tableGroupHeader) {
    return showGroup(tableGroupHeader);
  });
}

function shrink(table) {
  table.querySelectorAll('.table-collapse-header').forEach(function (tableGroupHeader) {
    return hideGroup(tableGroupHeader);
  });
}

function destroy(table) {
  expand(table);
  table.querySelectorAll('.table-collapse-header th:first-child').forEach(function (tableGroupTitle) {
    tableGroupTitle.removeEventListener('click', handleClick);
  });
}

function toggleGroup(tableGroupHeader) {
  tableGroupHeader.classList.toggle('-collapse');
}

function showGroup(tableGroupHeader) {
  tableGroupHeader.classList.remove('-collapse');
}

function hideGroup(tableGroupHeader) {
  tableGroupHeader.classList.add('-collapse');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  expand: expand,
  shrink: shrink,
  destroy: destroy,
  toggleGroup: toggleGroup,
  showGroup: showGroup,
  hideGroup: hideGroup,

  /**
   * `.group` aliases
   */
  group: {
    toggle: toggleGroup,
    show: showGroup,
    hide: hideGroup
  }
});

/***/ }),

/***/ "./src/js/components/table-multivalue.js":
/*!***********************************************!*\
  !*** ./src/js/components/table-multivalue.js ***!
  \***********************************************/
/*! exports provided: TableMultivalue, mountTables, appendData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableMultivalue", function() { return TableMultivalue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountTables", function() { return mountTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendData", function() { return appendData; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function registerEvents(tableInstance) {
  tableInstance.btnInsert.onclick = '';
  tableInstance.btnInsert.removeEventListener('click', InsertNewRow);
  tableInstance.btnInsert.addEventListener('click', function (e) {
    handeClick.call(this, e, tableInstance);
  });
  tableInstance.rows().forEach(function (row) {
    return registerRowEvents(tableInstance, row);
  });
}

function registerRowEvents(tableInstance, row) {
  var btnDelete = row.querySelector('.btn-delete-mv');
  btnDelete.onclick = '';
  btnDelete.removeEventListener('click', DeleteRow);
  btnDelete.addEventListener('click', function (e) {
    handleRemove.call(this, e, tableInstance);
  });
}

function getEventConfig(tableInstance) {
  return {
    bubbles: true,
    detail: {
      table: tableInstance.table,
      length: getTableRowsLength(tableInstance.table),
      lastRow: getLastRow(tableInstance.table)
    }
  };
}

function handeClick(e, tableInstance) {
  this.dispatchEvent(new CustomEvent('beforeInsert', getEventConfig(tableInstance)));
  InsertNewRow(this, true);
  var newestRow = getLastRow(tableInstance.table);
  registerRowEvents(tableInstance, newestRow);

  if (tableInstance.onMount) {
    tableInstance.onMount(newestRow);
  }

  this.dispatchEvent(new CustomEvent('afterInsert', getEventConfig(tableInstance)));
}

function handleRemove(e, tableInstance) {
  var eventConfig = getEventConfig(tableInstance);
  eventConfig.detail.deletedRow = this.closest('tr'); // chamando o evento diretamente na <table>

  tableInstance.table.dispatchEvent(new CustomEvent('beforeDelete', eventConfig));
  DeleteRow(this);
  tableInstance.table.dispatchEvent(new CustomEvent('afterDelete', eventConfig));
}
/**
 * Helpers
 */


var getRows = function getRows(table) {
  return table.querySelectorAll('tr:not(.header)');
};

var getLastRow = function getLastRow(table) {
  return table.querySelector('tr:last-child');
};

var getTableRowsLength = function getTableRowsLength(table) {
  return getRows(table).length;
};
/**
 * Public Constructor
 */


var TableMultivalue = /*#__PURE__*/function () {
  function TableMultivalue(tableElementSelector, onMount) {
    var _this = this;

    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

    _classCallCheck(this, TableMultivalue);

    this.table = context.querySelector(tableElementSelector);
    this.onMount = onMount;

    if (!this.table) {
      console.error("[Table Multivalue] table not found for the following selector: ".concat(tableElementSelector));
    }

    if (this.onMount) {
      this.table.querySelectorAll('tr:not(.header)').forEach(function (row) {
        return _this.onMount(row);
      });
    }

    this.btnInsert = this.table.querySelector('#BtnInsertNewRow');
    registerEvents(this);
  }

  _createClass(TableMultivalue, [{
    key: "static",
    value: function _static() {
      this.table.classList.add('-static');
    }
  }, {
    key: "active",
    value: function active() {
      this.table.classList.remove('-static');
    }
  }, {
    key: "reset",
    value: function reset() {
      this.btnInsert.click();
      this.table.querySelectorAll('tr:not(.header):not(:last-child').forEach(function (row) {
        return row.remove();
      });
    }
  }, {
    key: "on",
    value: function on(eventName, callback) {
      this.table.addEventListener(eventName, callback);
    }
  }, {
    key: "rows",
    value: function rows() {
      return getRows(this.table);
    }
  }, {
    key: "lastRow",
    value: function lastRow() {
      return getLastRow(this.table);
    }
  }, {
    key: "length",
    value: function length() {
      return getTableRowsLength(this.table);
    }
  }]);

  return TableMultivalue;
}();
/**
 * @todo implementar usando parâmetros também...
 * colocar as funções auxiliares dentro de um namespace
 */

function mountTables() {
  document.querySelectorAll('[mult=S]').forEach(function (table) {
    var isActive = table.querySelector('#BtnInsertNewRow');

    if (!isActive) {
      table.classList.add('-readonly');
    }
  });
}
function appendData(table, data) {
  var addFirstRow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  data.forEach(function (field, rowIndex) {
    if (addFirstRow || rowIndex > 0) {
      table.querySelector('#BtnInsertNewRow').click();
    }

    Object.entries(field).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          id = _ref2[0],
          value = _ref2[1];

      var lastRow = getLastRow(table);
      var field = lastRow.querySelector("[xname=inp".concat(id, "]"));

      if (field) {
        field.value = value;
      }
    });
  });
}

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function mount(tabs) {
  var tabPanes = tabs.nextElementSibling;
  var hasPanes = tabPanes.classList.contains('tab-panes');

  if (!hasPanes) {
    return console.error('[Tabs Component] .tab-panes not found, must be used next to .tabs element');
  }

  tabs.querySelectorAll('.tab').forEach(function (tab) {
    return setTriggers(tab);
  });
}

function setTriggers(tab) {
  tab.addEventListener('click', handleClick);
}

function handleClick(e) {
  e.preventDefault();
  var tabDataRef = this.dataset.tab;
  var isActive = this.classList.contains('-active');
  var isDisabled = this.classList.contains('-disabled');
  var tabPane = this.closest('.tabs').nextElementSibling.querySelector(".tab-pane[data-tab=\"".concat(tabDataRef, "\"]"));

  if (!tabPane) {
    return console.error("[Tabs Component] element not found for data-tab ".concat(tabDataRef));
  }

  if (isActive || isDisabled) {
    return;
  }

  showTab(this);
}
/**
 * Helpers
 */


var getTabPane = function getTabPane(tab) {
  return tab.closest('.tabs').nextElementSibling.querySelector(".tab-pane[data-tab=\"".concat(tab.dataset.tab, "\"]"));
};
/**
 * Public API
 */


function init(tabsElementSelector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  context.querySelectorAll(tabsElementSelector).forEach(function (tabs) {
    return mount(tabs);
  });
}

function reset(tabs) {
  tabs.querySelectorAll('.tab').forEach(function (tab) {
    return hideTab(tab);
  });
}

function destroy(tabs) {
  tabs.querySelectorAll('.tab').forEach(function (tab) {
    tab.removeEventListener('click', handleClick);
    hideTab(tab);
    disabledTab(tab);
  });
}

function showTab(tab) {
  var tabPanel = getTabPane(tab);
  var tabs = tab.closest('.tabs');
  reset(tabs);
  tab.classList.add('-active');
  tab.classList.remove('-pulse');
  tabPanel.classList.add('-active');
}

function hideTab(tab) {
  var tabPane = getTabPane(tab);
  tab.classList.remove('-active');
  tabPane.classList.remove('-active');
}

function enableTab(tab) {
  tab.classList.remove('-disabled');
}

function pulseTab(tab) {
  tab.classList.add('-pulse');
}

function disabledTab(tab) {
  var tabPane = getTabPane(tab);
  tab.classList.add('-disabled');
  tab.classList.remove('-active');
  tabPane.classList.remove('-active');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  reset: reset,
  destroy: destroy,
  showTab: showTab,
  hideTab: hideTab,
  enableTab: enableTab,
  pulseTab: pulseTab,
  disabledTab: disabledTab,

  /**
   * `.tab` aliases
   */
  tab: {
    show: showTab,
    hide: hideTab,
    enable: enableTab,
    pulse: pulseTab,
    disabled: disabledTab
  }
});

/***/ }),

/***/ "./src/js/components/template.js":
/*!***************************************!*\
  !*** ./src/js/components/template.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function setTriggers(field, data) {
  // Workaround para não observância do evento `change` em campos do tipo `data` do Orquestra.
  // Estes fazem uso do plugin `Bootstrap Datepicker`, o qual restringe o evento change nativo
  $(field).on('change', function (e) {
    handleChange(e, field, data);
  });
}

function handleChange(e, field, data) {
  var input = e.target;
  var newValue = input.value || '';
  var id = field.getAttribute('xname').substring(3);
  var binds = document.querySelectorAll("[data-bind=".concat(id, "]"));

  if (field.type === 'checkbox') {
    if (field.checked) {
      data[id].value.push(newValue);
    } else {
      data[id].value.splice(data[id].value.indexOf(newValue), 1);
    }

    return handleUpdate(binds, data);
  }

  if (field.type === 'radio') {
    if (field.checked) {
      data[id].value = newValue;
    }

    return handleUpdate(binds, data);
  }

  if (Array.isArray(data[id].value)) {
    var index = input.closest('tr').rowIndex - 1; // ignora a 1º linha usada como cabeçalho

    data[id].value[index] = newValue;
  } else {
    data[id].value = newValue;
  }

  return handleUpdate(binds, data);
}

function handleUpdate(binds, data) {
  binds.forEach(function (element) {
    update(element, data);
  });
}

var addField = {
  single: function single(field, data) {
    var value = field.value || '';
    var defaultAttr = getDefaultAttributes(field);
    data[defaultAttr.id] = _objectSpread({
      value: value
    }, defaultAttr);
  },
  collection: function collection(field, data) {
    var isInputMultiple = field.type === 'checkbox' || field.type === 'radio';
    var defaultAttr = getDefaultAttributes(field);

    if (!data[defaultAttr.id]) {
      data[defaultAttr.id] = _objectSpread({
        value: field.type === 'radio' ? null : []
      }, defaultAttr);
    }

    if (isInputMultiple && !field.checked) {
      return;
    }

    if (field.type === 'radio') {
      data[defaultAttr.id].value = field.value;
      return;
    }

    data[defaultAttr.id].value.push(field.value || '');
  }
};
/**
 * Helpers
 */

var getIgnoredNotSelector = function getIgnoredNotSelector(ids) {
  return ids.map(function (id) {
    return ":not([xname=inp".concat(id, "])");
  });
};

var isFieldCollection = function isFieldCollection(field, context) {
  return context.querySelectorAll("[xname=".concat(field.getAttribute('xname'), "]")).length > 1 || context.querySelector("[xname=".concat(field.getAttribute('xname'), "]")).type === 'checkbox' || field.closest('table[mult=S]') !== null;
};

var getDefaultAttributes = function getDefaultAttributes(field) {
  return {
    id: field.getAttribute('xname').substring(3),
    codfield: field.getAttribute('name').substring(3)
  };
};
/**
 * Public API
 */


function init() {
  var ignored = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var data = {};
  var ignoredSelector = getIgnoredNotSelector(ignored);
  var fields = context.querySelectorAll("[xname]".concat(ignoredSelector.join()));
  document.data = data;
  fields.forEach(function (field) {
    mount(field, data, context);
  });
  handleUpdate(document.querySelectorAll('[data-bind]'));
  document.querySelectorAll('[data-bind]').forEach(function (element) {
    return update(element, data);
  });
}

function mount(field) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.data;
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  field.dataset.id = field.getAttribute('xname').substring(3);
  setTriggers(field, data);
  isFieldCollection(field, context) ? addField.collection(field, data) : addField.single(field, data);
}

function update(element) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.data;
  var fieldId = element.dataset.bind;

  if (!data[fieldId]) {
    return;
  }

  var fieldValueIndex = element.dataset.index === '{row}' ? element.closest('tr').rowIndex - 1 // ignora a linha de cabeçalho
  : element.dataset.index;
  var fieldValue = Array.isArray(data[fieldId].value) ? data[fieldId].value[fieldValueIndex] : data[fieldId].value;
  element.textContent = element.hasAttribute('data-prefix') ? fieldValue.substring(2) : fieldValue;
}

function remove(field) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.data;
  var fieldId = field.getAttribute('xname').substring(3);

  if (Array.isArray(data[fieldId].value)) {
    // previne a removação total de campos em tabelas multi-valoradas
    if (data[fieldId].value.length === 1) {
      return;
    }

    var fieldValueIndex = field.closest('tr').rowIndex - 1; // ignora a linha de cabeçalho

    if (fieldValueIndex < 0) {
      console.error('[Template] You are trying to remove a field from data that already been deleted from DOM');
    }

    data[fieldId].value.splice(fieldValueIndex, 1);
  } else {
    delete data[fieldId];
  }
}

function conditionals() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var taskAlias = document.querySelector('#inpDsFlowElementAlias').value;
  context.querySelectorAll('[data-if]').forEach(function (element) {
    var currentAlias = element.dataset["if"].replace(/[\s[\]]/g, '') // remove espaços em branco e colchetes
    .split(',');

    if (!currentAlias.includes(taskAlias)) {
      element.classList.add('hidden');
    } else {
      element.classList.remove('hidden');
      element.removeAttribute('data-if');
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  mount: mount,
  update: update,
  remove: remove,
  conditionals: conditionals
});

/***/ }),

/***/ "./src/js/components/textarea-autosize.js":
/*!************************************************!*\
  !*** ./src/js/components/textarea-autosize.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BASE_HEIGHT = 30; // default textarea height: 30px

function mount(textarea) {
  textarea.classList.add('textarea-autosize');
  setTriggers(textarea);
  update(textarea);
}

function setTriggers(textarea) {
  textarea.addEventListener('input', setHeight);
  textarea.addEventListener('focus', setHeight);
}

function setHeight() {
  this.style.height = 0;
  var lines = (this.scrollHeight + 2) / BASE_HEIGHT;
  var size = lines * BASE_HEIGHT;
  this.style.height = "".concat(size, "px");
}
/**
 * Public API
 */


function init(textareaElementSelector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  context.querySelectorAll(textareaElementSelector).forEach(function (textarea) {
    return mount(textarea);
  });
}

function update(textarea) {
  setHeight.apply(textarea);
}

function destroy(textarea) {
  textarea.classList.remove('textarea-autosize');
  textarea.removeEventListener('input', setHeight);
  textarea.removeEventListener('focus', setHeight);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  update: update,
  destroy: destroy
});

/***/ }),

/***/ "./src/js/mocks/_exportarDadosVidasAtivas_1192.js":
/*!********************************************************!*\
  !*** ./src/js/mocks/_exportarDadosVidasAtivas_1192.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  success: [{
    cod: 'ADRIANO DOS SANTOS VENANCIOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'ADRIANO DOS SANTOS VENANCIO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'ADRIANO FERREIRA DA SILVAAtivo',
    txt: 'Inativo',
    fields: {
      situacaoFuncionario: 'Inativo',
      nomeFuncionario: 'ADRIANO FERREIRA DA SILVA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'AGOSTINHA MARIA ROSA DOS SANTOAtivo',
    txt: 'Inativo',
    fields: {
      situacaoFuncionario: 'Inativo',
      nomeFuncionario: 'AGOSTINHA MARIA ROSA DOS SANTO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'ANDERSON CARLOS SANTOS SENAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'ANDERSON CARLOS SANTOS SENA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'ANDREIA SANTOS REGISAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'ANDREIA SANTOS REGIS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'ARILMA GONCALVES DA SILVAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'ARILMA GONCALVES DA SILVA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'CINTIA SILVA COSTAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'CINTIA SILVA COSTA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'CRISTIANE ALMEIDA RIBEIROAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'CRISTIANE ALMEIDA RIBEIRO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'DANYELLY DOS SANTOS BIZERRA DAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'DANYELLY DOS SANTOS BIZERRA DA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'DEOMIR DA LUZ DOS SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'DEOMIR DA LUZ DOS SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'DJALMA DA CONCEICAO BRITOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'DJALMA DA CONCEICAO BRITO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'EDEILTON HORA DOS SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'EDEILTON HORA DOS SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'ELAINE DOS SANTOS SOUZAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'ELAINE DOS SANTOS SOUZA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'ELISVALDO SANTOS DAS VIRGENSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'ELISVALDO SANTOS DAS VIRGENS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'ELIVAN DOS SANTOS SOUZAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'ELIVAN DOS SANTOS SOUZA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'GEANE CONCEICAO DOS SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'GEANE CONCEICAO DOS SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'GERLAN SILVA DOS SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'GERLAN SILVA DOS SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'GIVANILDO SANTOS DA CONCEICAOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'GIVANILDO SANTOS DA CONCEICAO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'ICARO ZACARIAS JORGE MAGALHAESAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'ICARO ZACARIAS JORGE MAGALHAES',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'IVANILDO CONCEICAO DOS SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'IVANILDO CONCEICAO DOS SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'IZABELA DA CONCEICAOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'IZABELA DA CONCEICAO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'JACIARA LINO DOS SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'JACIARA LINO DOS SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'JADSON DE ASSUNCAO SILVAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'JADSON DE ASSUNCAO SILVA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'JEFERSON DE DEUS BORGESAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'JEFERSON DE DEUS BORGES',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'JOANA CRISTINA SILVA COUTINHOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'JOANA CRISTINA SILVA COUTINHO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'JOAO VITOR JESUS DOS SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'JOAO VITOR JESUS DOS SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'JOELITON PANTA SANTANAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'JOELITON PANTA SANTANA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'JOILSON SANTANA ASSUNCAOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'JOILSON SANTANA ASSUNCAO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'JOSE RAIMUNDO SANTOS SAO JOSEAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'JOSE RAIMUNDO SANTOS SAO JOSE',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'JOSEANE GUIMARAES SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'JOSEANE GUIMARAES SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'JOSERLANDO SANTOS DA SILVAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'JOSERLANDO SANTOS DA SILVA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'LUANA  PEREIRA RIBEIROAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'LUANA  PEREIRA RIBEIRO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'LUCAS CRUZ DA CONCEICAOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'LUCAS CRUZ DA CONCEICAO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'LUISMAR DE LIMA SILVAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'LUISMAR DE LIMA SILVA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'LUIZ CARLOS SANTOS SOUZAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'LUIZ CARLOS SANTOS SOUZA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'MAIANA SILVA BARRETOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'MAIANA SILVA BARRETO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'MAIJARA SILVA BARRETOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'MAIJARA SILVA BARRETO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'MARCELO KINEIPPE BRANDAOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'MARCELO KINEIPPE BRANDAO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'MARCOS DE JESUSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'MARCOS DE JESUS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'MARIA VILMA DA SILVA SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'MARIA VILMA DA SILVA SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'MARIZA SILVA BARRETOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'MARIZA SILVA BARRETO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'MAXSUEL CONCEICAO DOS SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'MAXSUEL CONCEICAO DOS SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'MILENA DO AMPARO DE SOUZAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'MILENA DO AMPARO DE SOUZA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'RAFAELA SANTOS RIBEIROAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'RAFAELA SANTOS RIBEIRO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'RENATA DE JESUS SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'RENATA DE JESUS SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'RITA DE CASSIA DOS SANTOS SILVAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'RITA DE CASSIA DOS SANTOS SILV',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'ROBERT RAMOS AZEVEDOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'ROBERT RAMOS AZEVEDO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'ROGERIO SANTOS CONCEICAOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'ROGERIO SANTOS CONCEICAO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'RONALDO MOURA ELEUTERIOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'RONALDO MOURA ELEUTERIO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'ROSANGELA DOS SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'ROSANGELA DOS SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'SILVANEI DOS SANTOS CONCEICAOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'SILVANEI DOS SANTOS CONCEICAO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'SIMONE DOS SANTOS MASCARENHASAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'SIMONE DOS SANTOS MASCARENHAS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'SINTIA BARBOSA DOS SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'SINTIA BARBOSA DOS SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'TIAGO BOMFIM FERREIRAAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'TIAGO BOMFIM FERREIRA',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'UBIRACI SOARES FREIREAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'UBIRACI SOARES FREIRE',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'VANIA DE SOUZA DOCIOAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'VANIA DE SOUZA DOCIO',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }, {
    cod: 'ZENILDO DE JESUS SANTOSAtivo',
    txt: 'Ativo',
    fields: {
      situacaoFuncionario: 'Ativo',
      nomeFuncionario: 'ZENILDO DE JESUS SANTOS',
      nomeEmpresa: 'BAIXO SUL ARTEFATOS DE LATEX LTDA'
    }
  }],
  cache: false,
  datasource: '1192',
  runtime: 631,
  bytes: 33011
});

/***/ }),

/***/ "./src/js/mocks/_pa-sesi207-coordenacao_1207.js":
/*!******************************************************!*\
  !*** ./src/js/mocks/_pa-sesi207-coordenacao_1207.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  success: [{
    cod: '5',
    txt: '5',
    fields: {
      quantidade: '1',
      ano: '2020'
    }
  }, {
    cod: '7',
    txt: '7',
    fields: {
      quantidade: '1',
      ano: '2020'
    }
  }],
  cache: false,
  datasource: '913',
  runtime: 3,
  bytes: 57605
});

/***/ }),

/***/ "./src/js/mocks/_pa-sesi207-helpmais_1206.js":
/*!***************************************************!*\
  !*** ./src/js/mocks/_pa-sesi207-helpmais_1206.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  success: [{
    cod: 'Dúvida - 10',
    txt: 'Dúvida - 10',
    fields: {
      quantidadeTipo: '1',
      mes: '10',
      tipoDeDemanda: 'Dúvida',
      ano: '2020'
    }
  }, {
    cod: 'Mudança nos Programas/Documentos/Exames - 9',
    txt: 'Mudança nos Programas/Documentos/Exames - 9',
    fields: {
      quantidadeTipo: '9',
      mes: '1',
      tipoDeDemanda: 'Mudança nos Programas/Documentos/Exames',
      ano: '2020'
    }
  }, {
    cod: 'Mudança nos Programas/Documentos/Exames - 9',
    txt: 'Mudança nos Programas/Documentos/Exames - 9',
    fields: {
      quantidadeTipo: '13',
      mes: '11',
      tipoDeDemanda: 'Mudança nos Programas/Documentos/Exames',
      ano: '2020'
    }
  }],
  cache: false,
  datasource: '913',
  runtime: 5,
  bytes: 57605
});

/***/ }),

/***/ "./src/js/mocks/orquestra-api.js":
/*!***************************************!*\
  !*** ./src/js/mocks/orquestra-api.js ***!
  \***************************************/
/*! exports provided: exportarDadosVidasAtivas, paSesiHelpMais, paSesiCoordenacao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportarDadosVidasAtivas", function() { return exportarDadosVidasAtivas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paSesiHelpMais", function() { return paSesiHelpMais; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paSesiCoordenacao", function() { return paSesiCoordenacao; });
/* harmony import */ var _exportarDadosVidasAtivas_1192__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_exportarDadosVidasAtivas_1192 */ "./src/js/mocks/_exportarDadosVidasAtivas_1192.js");
/* harmony import */ var _pa_sesi207_helpmais_1206__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_pa-sesi207-helpmais_1206 */ "./src/js/mocks/_pa-sesi207-helpmais_1206.js");
/* harmony import */ var _pa_sesi207_coordenacao_1207__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_pa-sesi207-coordenacao_1207 */ "./src/js/mocks/_pa-sesi207-coordenacao_1207.js");



var exportarDadosVidasAtivas = function exportarDadosVidasAtivas() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(_exportarDadosVidasAtivas_1192__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }, 1500);
  });
};
var paSesiHelpMais = function paSesiHelpMais() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(_pa_sesi207_helpmais_1206__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }, 500);
  });
};
var paSesiCoordenacao = function paSesiCoordenacao() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(_pa_sesi207_coordenacao_1207__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }, 500);
  });
};

/***/ }),

/***/ "./src/js/modules/actions-table/index.js":
/*!***********************************************!*\
  !*** ./src/js/modules/actions-table/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_table_multivalue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/table-multivalue */ "./src/js/components/table-multivalue.js");
/* harmony import */ var _components_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/textarea-autosize */ "./src/js/components/textarea-autosize.js");
/* harmony import */ var _components_button_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button-radio */ "./src/js/components/button-radio.js");
/* harmony import */ var _components_datepicker_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/datepicker-range */ "./src/js/components/datepicker-range.js");




var config = {
  $section: document.querySelector('#section-actions'),
  tableSelector: '#tbl-actions',
  actionsTextareaId: 'planoAcompanhamento',
  executedInputId: 'planoExecutado'
};

function mount(_ref) {
  var _ref$readonly = _ref.readonly,
      readonly = _ref$readonly === void 0 ? false : _ref$readonly,
      _ref$staticonly = _ref.staticonly,
      staticonly = _ref$staticonly === void 0 ? false : _ref$staticonly;
  config.$section.classList.remove('hidden');

  if (readonly) {
    return setReadOnly();
  }

  var ActionsTable = new _components_table_multivalue__WEBPACK_IMPORTED_MODULE_0__["TableMultivalue"](config.tableSelector, handeTableMount);

  if (staticonly) {
    ActionsTable["static"]();
  }

  return ActionsTable;
}

function setReadOnly(staticonly) {
  document.querySelector(config.tableSelector).classList.add('-readonly', '-hover');
  _components_datepicker_range__WEBPACK_IMPORTED_MODULE_3__["default"].init("".concat(config.tableSelector, " .input-monthrange"), {});
  document.querySelectorAll("[xid=div".concat(config.executedInputId, "]")).forEach(function (label) {
    return appendExecutedLabel(label);
  });
}

function appendExecutedLabel(label) {
  // Disclaimer: ignora o prefixo das options do <select>,
  // utilizado no Orquestra para questão da ordenação de opções
  var labelText = label.textContent.substring(2);
  var td = label.closest('td');
  var btnRadio = td.querySelector('.btn-radio-wrapper');
  var tag = "<span class=\"tag ".concat(getLabelClassModifier(labelText), "\">").concat(labelText, "</span>");
  td.insertAdjacentHTML('beforeend', tag);
  label.classList.add('hidden');
  btnRadio.classList.add('hidden');
}

function destroy() {
  config.$section.remove();
}

function handeTableMount(row) {
  _components_button_radio__WEBPACK_IMPORTED_MODULE_2__["default"].init('.btn-radio-wrapper', true, row);
  _components_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__["default"].init("[xname=inp".concat(config.actionsTextareaId, "]"), row);
  _components_datepicker_range__WEBPACK_IMPORTED_MODULE_3__["default"].init('.input-monthrange', {
    startView: 'months',
    minViewMode: 'months',
    format: 'M/yyyy'
  }, row);
}

var getLabelClassModifier = function getLabelClassModifier(value) {
  if (value === 'Sim') {
    return '-success';
  }

  if (value === 'Não') {
    return '-danger';
  }

  if (value === 'Parcial') {
    return '-warning';
  }
};

var shouldMountTable = function shouldMountTable(taskAlias) {
  return ['elaboracao', 'complementacao', 'elaboracaoAnual', 'complementacaoAnual'].includes(taskAlias);
};

var shouldBeReadonly = function shouldBeReadonly(taskAlias) {
  return ['complementacao', 'complementacaoAnual'].includes(taskAlias);
};

var shouldBeStatic = function shouldBeStatic(taskAlias) {
  return ['elaboracaoAnual'].includes(taskAlias);
};

function init(_ref2) {
  var taskAlias = _ref2.taskAlias;
  var readonly = shouldBeReadonly(taskAlias);
  var staticonly = shouldBeStatic(taskAlias);
  var shouldMount = shouldMountTable(taskAlias);

  if (shouldMount) {
    return mount({
      readonly: readonly,
      staticonly: staticonly
    });
  }

  return destroy();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/exams-search/api/api.coordination.js":
/*!*************************************************************!*\
  !*** ./src/js/modules/exams-search/api/api.coordination.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orquestra-helpers */ "./node_modules/orquestra-helpers/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/js/modules/exams-search/api/util.js");
/* harmony import */ var _mocks_orquestra_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mocks/orquestra-api */ "./src/js/mocks/orquestra-api.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Helpers
 */



var ORQUESTRA_DATASOURCE_URL = "https://sisweb.fieb.org.br/FIEB/Orquestra/api/json/datasource/get/1.0/0POMGDbP@kblzrbtsTh-i1RAayQeUn9SMODIiLXMLBAM0uYx1MTStOP0ZYmmn0e5OADW2irg1WWKcS0FtucXLg__"; // 'https://sisweb.fieb.org.br/FIEB/Orquestra/api/json/datasource/get/1.0/0POMGDbP@kblzrbtsTh-i1RAayQeUn9SMODIiLXMLBAM0uYx1MTStOP0ZYmmn0e5OADW2irg1WWKcS0FtucXLg__'

var config = {
  defaultParams: {
    quantity: 0
  }
};

var getDataFromDataSource = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var start, end, cnpj, url, params, _yield$paSesiCoordena, success, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = _ref.start, end = _ref.end, cnpj = _ref.cnpj;
            url = new URL(ORQUESTRA_DATASOURCE_URL);
            params = {
              inpperiodoInicial: Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["getMonthInt"])(start),
              inpanoInicial: start.getFullYear(),
              inpperiodoFinal: Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["getMonthInt"])(end),
              inpanoFinal: end.getFullYear(),
              inpcnpj: cnpj
            };
            url.search = new URLSearchParams(params).toString();
            _context.next = 6;
            return Object(_mocks_orquestra_api__WEBPACK_IMPORTED_MODULE_2__["paSesiCoordenacao"])();

          case 6:
            _yield$paSesiCoordena = _context.sent;
            success = _yield$paSesiCoordena.success;
            data = success.map(function (entry) {
              return {
                month: parseInt(entry.txt),
                monthName: Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["getMonthNameByNumber"])(entry.txt),
                year: parseInt(entry.fields.ano),
                quantity: parseInt(entry.fields.quantidade)
              };
            });
            return _context.abrupt("return", {
              data: data,
              start: start,
              end: end
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDataFromDataSource(_x) {
    return _ref2.apply(this, arguments);
  };
}();

function getDataFromPeriod(params) {
  return new Promise(function (resolve, reject) {
    getDataFromDataSource(params).then(function (_ref3) {
      var start = _ref3.start,
          end = _ref3.end,
          data = _ref3.data;

      if (!data.length) {
        return resolve(data);
      }

      var defaultParams = config.defaultParams;
      var filledData = Object(_util__WEBPACK_IMPORTED_MODULE_1__["fillMonthsOnPeriod"])({
        start: start,
        end: end,
        data: data,
        defaultParams: defaultParams
      });
      return resolve(filledData);
    })["catch"](function (err) {
      return reject(err);
    });
  });
}

function persistData(data) {
  return data.map(function (entry) {
    var rowData = {};
    rowData.coordenacaoMesAno = "".concat(entry.monthName.substring(0, 3), "/").concat(entry.year);
    rowData.coordenacaoRegistros = entry.quantity || '-';
    return rowData;
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getDataFromPeriod: getDataFromPeriod,
  persistData: persistData
});

/***/ }),

/***/ "./src/js/modules/exams-search/api/api.help-plus.js":
/*!**********************************************************!*\
  !*** ./src/js/modules/exams-search/api/api.help-plus.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orquestra-helpers */ "./node_modules/orquestra-helpers/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/js/modules/exams-search/api/util.js");
/* harmony import */ var _mocks_orquestra_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mocks/orquestra-api */ "./src/js/mocks/orquestra-api.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Helpers
 */



var ORQUESTRA_DATASOURCE_URL = "https://sisweb.fieb.org.br/FIEB/Orquestra/api/json/datasource/get/1.0/0POMGDbP@kblzrbtsTh-i1RAayQeUn9SMODIiLXMLBAM0uYx1MTStOP0ZYmmn0e5OADW2irg1WWKcS0FtucXLg__"; // 'https://sisweb.fieb.org.br/FIEB/Orquestra/api/json/datasource/get/1.0/0POMGDbP@kblzrbtsTh-i1RAayQeUn9SMODIiLXMLBAM0uYx1MTStOP0ZYmmn0e5OADW2irg1WWKcS0FtucXLg__'

var config = {
  defaultParams: {
    quantityDoubts: 0,
    quantityChanges: 0,
    quantitySupportSPlus: 0,
    quantitySupportCoord: 0,
    quantitySupportVivaPlus: 0
  }
};

var getDataFromDataSource = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var start, end, proposal, productId, productType, url, params, _yield$paSesiHelpMais, success, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = _ref.start, end = _ref.end, proposal = _ref.proposal, productId = _ref.productId, productType = _ref.productType;
            url = new URL(ORQUESTRA_DATASOURCE_URL);
            params = {
              inpperiodoInicial: Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["getMonthInt"])(start),
              inpanoInicial: start.getFullYear(),
              inpperiodoFinal: Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["getMonthInt"])(end),
              inpanoFinal: end.getFullYear(),
              inpnumeroDaProposta: proposal,
              inpcodProduto: productId
            };
            url.search = new URLSearchParams(params).toString();
            _context.next = 6;
            return Object(_mocks_orquestra_api__WEBPACK_IMPORTED_MODULE_2__["paSesiHelpMais"])();

          case 6:
            _yield$paSesiHelpMais = _context.sent;
            success = _yield$paSesiHelpMais.success;
            data = success.map(function (_ref3) {
              var fields = _ref3.fields;

              var result = _objectSpread({}, config.defaultParams, {
                month: parseInt(fields.mes),
                monthName: Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["getMonthNameByNumber"])(fields.mes),
                year: parseInt(fields.ano)
              });

              var quantityKey = getQuantityKeyByType(fields.tipoDeDemanda);
              result[quantityKey] = parseInt(fields.quantidadeTipo);
              return result;
            });
            return _context.abrupt("return", {
              data: data,
              start: start,
              end: end
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDataFromDataSource(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var getQuantityKeyByType = function getQuantityKeyByType(type) {
  var prefix = 'quantity';
  var keyType = '';

  switch (type) {
    case 'Dúvida':
      keyType = 'Doubts';
      break;

    case 'Mudança nos Programas/Documentos/Exames':
      keyType = 'Changes';
      break;

    case 'Suporte para o Sistema Informatizado S+':
      keyType = 'SupportSPlus';
      break;

    case 'Suporte do Médico Coordenador do PCMSO':
      keyType = 'SupportCoord';
      break;

    case 'Suporte Portal SESI Viva+':
      keyType = 'SupportVivaPlus';
      break;
  }

  return prefix + keyType;
};

var groupDataByType = function groupDataByType(data) {
  var years = new Set(data.map(function (_ref4) {
    var year = _ref4.year;
    return year;
  }));
  var result;
  years.forEach(function (year) {
    var yearlyData = data.filter(function (entry) {
      return entry.year === year;
    });

    var months = _toConsumableArray(new Set(yearlyData.map(function (_ref5) {
      var month = _ref5.month;
      return month;
    })));

    result = months.map(function (month) {
      return data.filter(function (entry) {
        return entry.month === month;
      }).reduce(function (acc, curr) {
        return Object.assign(acc, curr);
      }, {});
    });
  });
  return result;
};

function getDataFromPeriod(params) {
  return new Promise(function (resolve, reject) {
    getDataFromDataSource(params).then(function (_ref6) {
      var start = _ref6.start,
          end = _ref6.end,
          data = _ref6.data;

      if (!data.length) {
        return resolve(data);
      }

      var defaultParams = config.defaultParams;
      var mergedData = groupDataByType(data);
      var filledData = Object(_util__WEBPACK_IMPORTED_MODULE_1__["fillMonthsOnPeriod"])({
        start: start,
        end: end,
        defaultParams: defaultParams,
        data: mergedData
      });
      return resolve(filledData);
    })["catch"](function (err) {
      return reject(err);
    });
  });
}

function persistData(data) {
  return data.map(function (entry) {
    var rowData = {};
    rowData.helpMesAno = "".concat(entry.monthName.substring(0, 3), "/").concat(entry.year);
    rowData.helpDuvidas = entry.quantityDoubts || '-';
    rowData.helpMudancas = entry.quantityChanges || '-';
    rowData.helpSuporteSMais = entry.quantitySupportSPlus || '-';
    rowData.helpSuporteMedCoordenacao = entry.quantitySupportCoord || '-';
    rowData.helpSuporteVivaMais = entry.quantitySupportVivaPlus || '-';
    return rowData;
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getDataFromPeriod: getDataFromPeriod,
  persistData: persistData
});

/***/ }),

/***/ "./src/js/modules/exams-search/api/api.lives.js":
/*!******************************************************!*\
  !*** ./src/js/modules/exams-search/api/api.lives.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orquestra-helpers */ "./node_modules/orquestra-helpers/index.js");
/* harmony import */ var _mocks_orquestra_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mocks/orquestra-api */ "./src/js/mocks/orquestra-api.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Helpers
 */

/**
 * Mocks
 */


var ORQUESTRA_DATASOURCE_URL = "https://sisweb.fieb.org.br/FIEB/Orquestra/api/json/datasource/get/1.0/0POMGDbP@kblzrbtsTh-i1RAayQeUn9SMODIiLXMLBAM0uYx1MTStOP0ZYmmn0e5OADW2irg1WWKcS0FtucXLg__"; // 'https://sisweb.fieb.org.br/FIEB/Orquestra/api/json/datasource/get/1.0/0POMGDbP@kblzrbtsTh-i@hHppYiWf-5RwJyRzEhMKYO4zFyoM7S35HdDgCixvS2MFoNuOxaWM@pa0EoVT4TUg__'
// const API_KEY = '46955ddfe8a55f287b10' // probably fixed
// const EXPORT_ID = '16741' // eval if it's fixed
// const COMPANY_ID = '588867' // not fixed

var getDataFromSOC = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var date, companyId, exportId, apiKey, year, monthName, url, params, _yield$exportarDadosV, success, activeLives, inactiveLives;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            date = _ref.date, companyId = _ref.companyId, exportId = _ref.exportId, apiKey = _ref.apiKey;
            year = date.getFullYear();
            monthName = Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["getMonthName"])(date);
            url = new URL(ORQUESTRA_DATASOURCE_URL);
            params = {
              inpano: year,
              inpmes: Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["getMonthInt"])(date),
              inpempresaDeAtendimento: companyId,
              inpcodExportaDados: exportId,
              inpchaveExporta: apiKey
            };
            url.search = new URLSearchParams(params).toString();
            _context.next = 8;
            return Object(_mocks_orquestra_api__WEBPACK_IMPORTED_MODULE_1__["exportarDadosVidasAtivas"])();

          case 8:
            _yield$exportarDadosV = _context.sent;
            success = _yield$exportarDadosV.success;
            activeLives = success.filter(function (_ref3) {
              var fields = _ref3.fields;
              return fields.situacaoFuncionario === 'Ativo';
            });
            inactiveLives = success.filter(function (_ref4) {
              var fields = _ref4.fields;
              return fields.situacaoFuncionario !== 'Ativo';
            });
            return _context.abrupt("return", {
              year: year,
              monthName: monthName,
              quantityActiveLives: activeLives.length,
              quantityInactiveLives: inactiveLives.length
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDataFromSOC(_x) {
    return _ref2.apply(this, arguments);
  };
}();

function getDataFromPeriod(_ref5) {
  var start = _ref5.start,
      end = _ref5.end,
      companyId = _ref5.companyId,
      exportId = _ref5.exportId,
      apiKey = _ref5.apiKey;
  var data = [];
  var currentDate = new Date(start.getTime()); // eslint-disable-next-line no-unmodified-loop-condition

  while (currentDate <= end) {
    var monthData = getDataFromSOC({
      date: currentDate,
      companyId: companyId,
      exportId: exportId,
      apiKey: apiKey
    });
    data.push(monthData);
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return new Promise(function (resolve, reject) {
    Promise.all(data).then(function (months) {
      return resolve(months);
    })["catch"](function (err) {
      return reject(err);
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getDataFromPeriod: getDataFromPeriod
});

/***/ }),

/***/ "./src/js/modules/exams-search/api/util.js":
/*!*************************************************!*\
  !*** ./src/js/modules/exams-search/api/util.js ***!
  \*************************************************/
/*! exports provided: fillMonthsOnPeriod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillMonthsOnPeriod", function() { return fillMonthsOnPeriod; });
/* harmony import */ var orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orquestra-helpers */ "./node_modules/orquestra-helpers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var fillMonthsOnPeriod = function fillMonthsOnPeriod(_ref) {
  var start = _ref.start,
      end = _ref.end,
      data = _ref.data,
      defaultParams = _ref.defaultParams;
  var monthlyEntries = [];
  var currDate = new Date(start.getTime()); // eslint-disable-next-line no-unmodified-loop-condition

  var _loop = function _loop() {
    var currYear = currDate.getFullYear();
    var currMonth = Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["getMonthInt"])(currDate);
    var monthlyData = data.find(function (_ref2) {
      var month = _ref2.month,
          year = _ref2.year;
      return month === currMonth && year === currYear;
    });

    if (monthlyData) {
      monthlyEntries.push(monthlyData);
    } else {
      monthlyEntries.push(_objectSpread({
        month: currMonth,
        monthName: Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["getMonthNameByNumber"])(currMonth),
        year: currYear
      }, defaultParams));
    }

    currDate.setMonth(currDate.getMonth() + 1);
  };

  while (currDate <= end) {
    _loop();
  }

  return monthlyEntries;
};

/***/ }),

/***/ "./src/js/modules/exams-search/exams-form.js":
/*!***************************************************!*\
  !*** ./src/js/modules/exams-search/exams-form.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orquestra-helpers */ "./node_modules/orquestra-helpers/index.js");
/* harmony import */ var _components_datepicker_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/datepicker-range */ "./src/js/components/datepicker-range.js");
/* harmony import */ var _components_form_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/form-validation */ "./src/js/components/form-validation.js");
/* harmony import */ var _exams_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exams-tabs */ "./src/js/modules/exams-search/exams-tabs.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/js/modules/exams-search/index.js");





var config = {
  $searchTrigger: document.querySelector('.js-search-lives'),
  $examsPanes: Object(_exams_tabs__WEBPACK_IMPORTED_MODULE_3__["getTabsPane"])(),
  datepickerSelector: '#exams-period'
};
var SearchForm = new _components_form_validation__WEBPACK_IMPORTED_MODULE_2__["FormValidation"]([{
  element: '[xname=inpunidadeExecutora]',
  errorMessage: 'Informe uma Unidade'
}, {
  element: '[xname=inpperiodoInicio]',
  errorMessage: 'Informe o período para pesquisa'
}, {
  element: '[xname=inpperiodoFim]',
  errorMessage: 'Informe o período para pesquisa'
}]);

function handleSearch(e) {
  e.preventDefault();
  var validationResult = SearchForm.validate();
  var btnSearch = this;

  if (validationResult.hasErrors) {
    return;
  }

  var period = getPeriod();
  Object(_index__WEBPACK_IMPORTED_MODULE_4__["searchData"])(period, btnSearch);
}

var getPeriod = function getPeriod() {
  return {
    start: $('[xname=inpperiodoInicio]').datepicker('getDate'),
    end: $('[xname=inpperiodoFim]').datepicker('getDate')
  };
};
/**
 * Public API
 */


function mount() {
  config.$searchTrigger.addEventListener('click', handleSearch);
  console.log('pre datepicker');
  _components_datepicker_range__WEBPACK_IMPORTED_MODULE_1__["default"].init(config.datepickerSelector, {
    startDate: Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["addYears"])(new Date(), -2),
    endDate: Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["addYears"])(new Date(), 2),
    startView: 'months',
    minViewMode: 'months',
    format: 'M/yyyy'
  });
}

function addLoadingState() {
  config.$searchTrigger.classList.add('-loading');
  config.$examsPanes.classList.add('-loading');
}

function removeLoadingState() {
  config.$searchTrigger.classList.remove('-loading');
  config.$examsPanes.classList.remove('-loading');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  mount: mount,
  addLoadingState: addLoadingState,
  removeLoadingState: removeLoadingState,
  getPeriod: getPeriod,
  SearchForm: SearchForm
});

/***/ }),

/***/ "./src/js/modules/exams-search/exams-tables-config.js":
/*!************************************************************!*\
  !*** ./src/js/modules/exams-search/exams-tables-config.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  lives: {
    emptyMessage: 'Não foi encontrado nenhum dado de vidas dentro do período pesquisado.',
    tabName: 'dados-vidas',
    tableId: 'tbl-lives',
    columns: [{
      key: 'quantityActiveLives',
      title: 'Vidas Ativas',
      headerPrefix: '<i class="fas fa-plus-circle color-green"></i> '
    }, {
      key: 'quantityInactiveLives',
      title: 'Vidas Inativas',
      headerPrefix: '<i class="fas fa-minus-circle color-red"></i> '
    }]
  },
  help: {
    emptyMessage: 'Não foi encontrada nenhuma interação no Help+ dentro do período pesquisado.',
    tabName: 'interacoes-help',
    tableId: 'tbl-help-plus',
    columns: [{
      key: 'quantityDoubts',
      title: 'Dúvidas'
    }, {
      key: 'quantityChanges',
      title: 'Mudanças'
    }, {
      key: 'quantitySupportSPlus',
      title: 'S+',
      headerPrefix: '<span class="th-sup">Suporte</span>'
    }, {
      key: 'quantitySupportCoord',
      title: 'Méd. Coord.',
      headerPrefix: '<span class="th-sup">Suporte</span>'
    }, {
      key: 'quantitySupportVivaPlus',
      title: 'Viva+',
      headerPrefix: '<span class="th-sup">Suporte</span>'
    }]
  },
  coord: {
    tabName: 'interacoes-coordenacao',
    emptyMessage: 'Não foi encontrada nenhuma interação da Coordenação dentro do período pesquisado.',
    tableId: 'tbl-coordination',
    columns: [{
      key: 'quantity',
      title: 'Registros'
    }]
  }
});

/***/ }),

/***/ "./src/js/modules/exams-search/exams-tables.js":
/*!*****************************************************!*\
  !*** ./src/js/modules/exams-search/exams-tables.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/tabs */ "./src/js/components/tabs.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var columnDefaults = {
  showTotal: true,
  showAverage: true
};

var groupDataByYear = function groupDataByYear(data, columns) {
  var years = new Set(data.map(function (_ref) {
    var year = _ref.year;
    return year;
  }));
  var summary = data.reduce(function (acc, data, row) {
    columns.forEach(function (_ref2) {
      var key = _ref2.key;

      if (!(key in data)) {
        return;
      }

      if (row === 0) {
        acc[key] = data[key];
      } else {
        acc[key] += data[key];
      }
    });
    return acc;
  }, {});
  summary.rows = data.length;
  var entries = {};
  years.forEach(function (year) {
    var yearlyData = data.filter(function (entry) {
      return entry.year === year;
    });
    entries[year] = yearlyData;
  });
  return {
    entries: entries,
    summary: summary
  };
};

var createEmptyMessage = function createEmptyMessage(message) {
  return "\n<div class=\"empty\">\n<div class=\"empty-icon\">\n  <i class=\"fas fa-calendar -minus\"></i>\n</div>\n<div class=\"empty-content\">\n  <h1 class=\"empty-title\">Nenhuma informa\xE7\xE3o no per\xEDodo</h1>\n  <p class=\"empty-message\">".concat(message, "</p>\n</div>\n</div>");
};

var createCollapse = function createCollapse(title, rows, columns) {
  var collapseSettings = columns.map(function (column) {
    var total = rows.reduce(function (acc, data) {
      return acc + data[column.key];
    }, 0);
    var average = total / rows.length;

    var columnSettings = _objectSpread({}, columnDefaults, {
      average: average,
      total: total
    }, column);

    var collapsePrefix = crateCollapsePrefix(columnSettings);
    return _objectSpread({}, columnSettings, {
      collapsePrefix: collapsePrefix
    });
  });
  var collapseHeader = createCollapseHeader(title, collapseSettings);
  var collapseRows = createCollapseGroup(rows, columns);
  return collapseHeader + collapseRows;
};

var crateCollapsePrefix = function crateCollapsePrefix(column) {
  if (!column.showTotal && !column.showAverage) {
    return '';
  }

  var averageLabel = '<span class="text-summary">(Média)</span>';
  var totalLabel = '<span class="text-sub">Total</span>';
  return "\n  <span class=\"margin-right-m\">\n    ".concat(column.showAverage ? averageLabel : '', "\n    ").concat(column.showTotal ? totalLabel : '', "\n  </span>");
};

var createTableHeader = function createTableHeader(columns) {
  var cols = columns.map(function (col) {
    return createTableHeaderColumn(col);
  });
  return "\n<thead>\n  <tr class=\"-stick\">\n    <th></th>\n    ".concat(cols.join(''), "\n    <th></th>\n  </tr>\n</thead>");
};

var createTableHeaderColumn = function createTableHeaderColumn(_ref3) {
  var title = _ref3.title,
      total = _ref3.total,
      average = _ref3.average,
      headerPrefix = _ref3.headerPrefix,
      showTotal = _ref3.showTotal,
      showAverage = _ref3.showAverage;
  return "\n<th class=\"text-right\">\n  <div class=\"col\">".concat(headerPrefix).concat(title, "</div>\n  <div class=\"col ").concat(!showAverage && !showTotal ? 'hidden' : '', "\">\n    <span class=\"text-small text-summary margin-right-s ").concat(!showAverage ? 'hidden' : '', "\">\n    ").concat(total > 0 ? '(' + average.toLocaleString('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }) + ')' : '', "</span>\n    <span class=\"text-small ").concat(!showTotal ? 'hidden' : '', "\">").concat(total > 0 ? total : '', "</span>\n  </div>\n</th>");
};

var createCollapseHeader = function createCollapseHeader(title, columns) {
  var cols = columns.map(function (col, i) {
    return createCollapseHeaderColumn(col, i);
  });
  return "\n<tbody class=\"table-collapse-header -stick -summary\">\n  <tr>\n    <th><i class=\"table-collapse-indicator fas fa-chevron-down\"></i>".concat(title, "</th>\n    ").concat(cols.join(''), "\n    <th></th>\n  </tr>\n</tbody>");
};

var createCollapseHeaderColumn = function createCollapseHeaderColumn(_ref4, columnIndex) {
  var total = _ref4.total,
      average = _ref4.average,
      collapsePrefix = _ref4.collapsePrefix,
      showTotal = _ref4.showTotal,
      showAverage = _ref4.showAverage;
  return "\n<th class=\"text-right\">\n  ".concat(columnIndex === 0 ? collapsePrefix : '', "\n  ").concat(showAverage && average > 0 ? '<span class="text-summary margin-right-s">(' + average.toLocaleString('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }) + ')</span>' : '', "\n  ").concat(showTotal ? total > 0 ? total : '-' : '', "\n</th>");
};

var createCollapseGroup = function createCollapseGroup(rows, columns) {
  var tableRows = rows.map(function (row) {
    return createCollapseRow(row, columns);
  });
  return "\n<tbody class=\"table-collapse-group\">\n  ".concat(tableRows.join(''), "\n</tbody>");
};

var createCollapseRow = function createCollapseRow(row, columns) {
  var cols = columns.map(function (_ref5) {
    var key = _ref5.key;
    return "<td class=\"text-right\">".concat(row[key] > 0 ? row[key] : '-', "</td>");
  });
  return "\n<tr>\n  <td>".concat(row.monthName, "</td>\n  ").concat(cols.join(''), "\n  <td></td>\n</tr>\n  ");
};
/**
 * Public API
 */


function build(_ref6) {
  var data = _ref6.data,
      columns = _ref6.columns,
      tabName = _ref6.tabName,
      _ref6$tableId = _ref6.tableId,
      tableId = _ref6$tableId === void 0 ? '' : _ref6$tableId,
      _ref6$emptyMessage = _ref6.emptyMessage,
      emptyMessage = _ref6$emptyMessage === void 0 ? 'Não foi encontrada nenhuma informação no período pesquisado.' : _ref6$emptyMessage;
  var tabContainer = document.querySelector(".tab-pane[data-tab=\"".concat(tabName, "\"]"));
  var tabNav = document.querySelector(".tab[data-tab=\"".concat(tabName, "\"]"));

  if (!tabContainer) {
    return console.error("[Exams Tables] Container element not found for tab: ".concat(tabName));
  }

  if (!data.length) {
    var emptyHtml = createEmptyMessage(emptyMessage);
    tabContainer.innerHTML = emptyHtml;
    return;
  }

  var yearlyData = groupDataByYear(data, columns);
  var headerSettings = columns.map(function (column) {
    return _objectSpread({}, columnDefaults, {
      headerPrefix: '',
      total: yearlyData.summary[column.key],
      average: yearlyData.summary[column.key] / yearlyData.summary.rows
    }, column);
  });
  var tableHeaderHtml = createTableHeader(headerSettings);
  var tableCollapseHtml = Object.entries(yearlyData.entries).map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        year = _ref8[0],
        rows = _ref8[1];

    return createCollapse(year, rows, columns);
  }).join('');
  var tableHtml = "<table class=\"table-collapse -tree -padded -hover\" id=\"".concat(tableId, "\">").concat(tableHeaderHtml).concat(tableCollapseHtml, "</table>").replace(/[\t\n]/g, '') // remove white spaces and tabs
  .replace(/\s\s+(?=[^><]*<)/g, ''); // remove indentation

  tabContainer.innerHTML = tableHtml;

  if (!tabNav.classList.contains('-active')) {
    _components_tabs__WEBPACK_IMPORTED_MODULE_0__["default"].pulseTab(tabNav);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  build: build
});

/***/ }),

/***/ "./src/js/modules/exams-search/exams-tabs.js":
/*!***************************************************!*\
  !*** ./src/js/modules/exams-search/exams-tabs.js ***!
  \***************************************************/
/*! exports provided: getTabsPane, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabsPane", function() { return getTabsPane; });
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/tabs */ "./src/js/components/tabs.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var config = {
  tabsId: '#exams-tabs',
  tabsPaneId: '#exams-search-panes'
};

var getTabsElements = function getTabsElements() {
  return document.querySelectorAll("".concat(config.tabsId, " .tab"));
};

var getTabsPane = function getTabsPane() {
  return document.querySelector(config.tabsPaneId);
};
/**
 * Public API
 */

function mount() {
  _components_tabs__WEBPACK_IMPORTED_MODULE_0__["default"].init(config.tabsId);
}

function setInitialState() {
  _toConsumableArray(getTabsElements()).forEach(function (tab) {
    var isActive = tab.classList.contains('-active');

    if (!isActive) {
      _components_tabs__WEBPACK_IMPORTED_MODULE_0__["default"].disabledTab(tab);
    }
  });
}

function enableAll() {
  _toConsumableArray(getTabsElements()).forEach(function (tab) {
    _components_tabs__WEBPACK_IMPORTED_MODULE_0__["default"].enableTab(tab);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  mount: mount,
  setInitialState: setInitialState,
  enableAll: enableAll
});

/***/ }),

/***/ "./src/js/modules/exams-search/index.js":
/*!**********************************************!*\
  !*** ./src/js/modules/exams-search/index.js ***!
  \**********************************************/
/*! exports provided: searchData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchData", function() { return searchData; });
/* harmony import */ var orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orquestra-helpers */ "./node_modules/orquestra-helpers/index.js");
/* harmony import */ var _components_table_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/table-collapse */ "./src/js/components/table-collapse.js");
/* harmony import */ var _components_table_multivalue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/table-multivalue */ "./src/js/components/table-multivalue.js");
/* harmony import */ var _occupational_exams_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../occupational-exams-table */ "./src/js/modules/occupational-exams-table/index.js");
/* harmony import */ var _recommendations_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recommendations-table */ "./src/js/modules/recommendations-table/index.js");
/* harmony import */ var _actions_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions-table */ "./src/js/modules/actions-table/index.js");
/* harmony import */ var _exams_tables_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exams-tables-config */ "./src/js/modules/exams-search/exams-tables-config.js");
/* harmony import */ var _exams_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exams-form */ "./src/js/modules/exams-search/exams-form.js");
/* harmony import */ var _exams_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exams-tabs */ "./src/js/modules/exams-search/exams-tabs.js");
/* harmony import */ var _exams_tables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exams-tables */ "./src/js/modules/exams-search/exams-tables.js");
/* harmony import */ var _task_controllers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-controllers */ "./src/js/modules/exams-search/task-controllers.js");
/* harmony import */ var _api_api_lives__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api/api.lives */ "./src/js/modules/exams-search/api/api.lives.js");
/* harmony import */ var _api_api_coordination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api/api.coordination */ "./src/js/modules/exams-search/api/api.coordination.js");
/* harmony import */ var _api_api_help_plus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api/api.help-plus */ "./src/js/modules/exams-search/api/api.help-plus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Helpers
 */

/**
 * Componentes
 */



/**
 * Módulos
 */









/**
 * Fontes de Dados Orquestra
 */




var config = {
  stage: {
    taskAlias: document.querySelector('#inpDsFlowElementAlias').value,
    productType: document.querySelector('[xname=inptipoProduto]').value
  },
  tables: _exams_tables_config__WEBPACK_IMPORTED_MODULE_6__["default"]
};

function handleSearchDone(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      livesData = _ref2[0],
      helpData = _ref2[1],
      coordData = _ref2[2];

  var taskAlias = config.stage.taskAlias;
  buildTables({
    livesData: livesData,
    helpData: helpData,
    coordData: coordData
  });
  _exams_form__WEBPACK_IMPORTED_MODULE_7__["default"].removeLoadingState();
  initFormTables();

  if (taskAlias === 'elaboracao') {
    _task_controllers__WEBPACK_IMPORTED_MODULE_10__["default"].enableConclude();
  }

  if (taskAlias === 'complementacao') {
    persistSearchData({
      helpData: helpData,
      coordData: coordData
    });
  }
}

function buildTables(_ref3) {
  var livesData = _ref3.livesData,
      helpData = _ref3.helpData,
      coordData = _ref3.coordData;
  var productType = config.stage.productType;
  var configTablesHelp = config.tables.help;

  if (productType === 'PPRA') {
    configTablesHelp = removeColumnFromConfig('quantitySupportCoord', config.tables.help);
  }

  _exams_tables__WEBPACK_IMPORTED_MODULE_9__["default"].build(_objectSpread({
    data: livesData
  }, config.tables.lives));
  _exams_tables__WEBPACK_IMPORTED_MODULE_9__["default"].build(_objectSpread({
    data: helpData
  }, configTablesHelp));
  _exams_tables__WEBPACK_IMPORTED_MODULE_9__["default"].build(_objectSpread({
    data: coordData
  }, config.tables.coord));
  _exams_tabs__WEBPACK_IMPORTED_MODULE_8__["default"].enableAll();
  _components_table_collapse__WEBPACK_IMPORTED_MODULE_1__["default"].init('.table-collapse');
}

function persistSearchData(_ref4) {
  var helpData = _ref4.helpData,
      coordData = _ref4.coordData;
  Object(_components_table_multivalue__WEBPACK_IMPORTED_MODULE_2__["appendData"])(document.querySelector('#template-help'), _api_api_help_plus__WEBPACK_IMPORTED_MODULE_13__["default"].persistData(helpData));
  Object(_components_table_multivalue__WEBPACK_IMPORTED_MODULE_2__["appendData"])(document.querySelector('#template-coordenacao'), _api_api_coordination__WEBPACK_IMPORTED_MODULE_12__["default"].persistData(coordData));
}

function initFormTables() {
  var _config$stage = config.stage,
      taskAlias = _config$stage.taskAlias,
      productType = _config$stage.productType;
  _occupational_exams_table__WEBPACK_IMPORTED_MODULE_3__["default"].init({
    taskAlias: taskAlias,
    productType: productType
  });
  _actions_table__WEBPACK_IMPORTED_MODULE_5__["default"].init({
    taskAlias: taskAlias,
    productType: productType
  });
  _recommendations_table__WEBPACK_IMPORTED_MODULE_4__["default"].init({
    taskAlias: taskAlias,
    productType: productType
  });
}

function handleSearchError(err) {
  console.error('[Exams Search] Something went wrong during the search');
  console.error(err);
  _exams_form__WEBPACK_IMPORTED_MODULE_7__["default"].removeLoadingState();
}

var removeColumnFromConfig = function removeColumnFromConfig(tableKey, tableConfig) {
  var columnIndex = tableConfig.columns.findIndex(function (_ref5) {
    var key = _ref5.key;
    return key === tableKey;
  });
  tableConfig.columns.splice(columnIndex, 1);
  return tableConfig;
};

var shouldMountComponent = function shouldMountComponent(taskAlias) {
  return ['elaboracao', 'complementacao', 'elaboracaoAnual', 'complementacaoAnual'].includes(taskAlias);
};

var shouldResetForm = function shouldResetForm(taskAlias) {
  return taskAlias === 'reset';
};

function unmount() {
  document.querySelectorAll('.form-section:not(#section-intro)').forEach(function (section) {
    return section.classList.add('hidden');
  });
}

function mount() {
  var _ExamsForm$SearchForm = _exams_form__WEBPACK_IMPORTED_MODULE_7__["default"].SearchForm.validate(true),
      hasErrors = _ExamsForm$SearchForm.hasErrors;

  _exams_form__WEBPACK_IMPORTED_MODULE_7__["default"].mount();
  _exams_tabs__WEBPACK_IMPORTED_MODULE_8__["default"].mount();

  if (hasErrors) {
    _task_controllers__WEBPACK_IMPORTED_MODULE_10__["default"].disabledConclude();
    _exams_tabs__WEBPACK_IMPORTED_MODULE_8__["default"].setInitialState();
  } else {
    var period = _exams_form__WEBPACK_IMPORTED_MODULE_7__["default"].getPeriod();
    searchData(period);
  }
}

function init() {
  var shouldMount = shouldMountComponent(config.stage.taskAlias);
  var shouldReset = shouldResetForm(config.stage.taskAlias);

  if (shouldReset) {
    Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["resetForm"])(true);
  }

  if (!shouldMount) {
    return unmount();
  }

  mount();
}

function searchData(_ref6) {
  var start = _ref6.start,
      end = _ref6.end;
  var livesData = _api_api_lives__WEBPACK_IMPORTED_MODULE_11__["default"].getDataFromPeriod({
    start: start,
    end: end,
    companyId: 'id-company',
    exportId: 'export-id',
    apiKey: 'api-key'
  });
  var helpPlusData = _api_api_help_plus__WEBPACK_IMPORTED_MODULE_13__["default"].getDataFromPeriod({
    start: start,
    end: end,
    proposal: '',
    productId: '',
    productType: config.stage.productType
  });
  var coordinationData = _api_api_coordination__WEBPACK_IMPORTED_MODULE_12__["default"].getDataFromPeriod({
    start: start,
    end: end,
    cnpj: ''
  });
  _exams_form__WEBPACK_IMPORTED_MODULE_7__["default"].addLoadingState();
  Promise.all([livesData, helpPlusData, coordinationData]).then(function (results) {
    return handleSearchDone(results);
  })["catch"](function (err) {
    return handleSearchError(err);
  });
}
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/exams-search/task-controllers.js":
/*!*********************************************************!*\
  !*** ./src/js/modules/exams-search/task-controllers.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  alertId: 'search-data-alert',
  $btnContainer: document.querySelector('#controllers #buttons'),
  $btnFinish: document.querySelector('#btnFinish'),
  $well: document.querySelector('#controllers .well')
};

var getAlertHtml = function getAlertHtml() {
  return "\n  <div class=\"alert alert-info\" id=\"".concat(config.alertId, "\">\n    <strong>Aten\xE7\xE3o!</strong> Antes de concluir a atividade voc\xEA deve <strong>pesquisar</strong> por um per\xEDodo de levantamento.\n  </div>\n  ");
};

function disabledConclude() {
  var alertHtml = getAlertHtml();
  config.$btnFinish.disabled = true;
  config.$well.classList.add('hidden');
  config.$btnContainer.insertAdjacentHTML('beforebegin', alertHtml);
}

function enableConclude() {
  var requiredAlert = document.querySelector("#".concat(config.alertId));
  config.$btnFinish.disabled = false;
  config.$well.classList.remove('hidden');

  if (requiredAlert) {
    requiredAlert.classList.add('hidden');
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  disabledConclude: disabledConclude,
  enableConclude: enableConclude
});

/***/ }),

/***/ "./src/js/modules/occupational-exams-table/index.js":
/*!**********************************************************!*\
  !*** ./src/js/modules/occupational-exams-table/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orquestra-helpers */ "./node_modules/orquestra-helpers/index.js");
/* harmony import */ var _components_table_multivalue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/table-multivalue */ "./src/js/components/table-multivalue.js");
/* harmony import */ var _components_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/template */ "./src/js/components/template.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var config = {
  $section: document.querySelector('#section-exams'),
  tableSelector: '#tbl-exams',
  alertSelector: '#exams-alert'
};

function mount(_ref) {
  var _ref$readonly = _ref.readonly,
      readonly = _ref$readonly === void 0 ? false : _ref$readonly,
      _ref$alert = _ref.alert,
      alert = _ref$alert === void 0 ? false : _ref$alert;
  config.$section.classList.remove('hidden');

  if (alert) {
    createAlert();
  }

  if (readonly) {
    return setReadOnly();
  }

  var ExamsTable = new _components_table_multivalue__WEBPACK_IMPORTED_MODULE_1__["TableMultivalue"](config.tableSelector, handeTableMount);
  ExamsTable.on('afterInsert', handleNewRow);
  ExamsTable.on('beforeDelete', updateTemplateData);
  ExamsTable.on('afterDelete', handleDeleteRow);
  return ExamsTable;
}

function setReadOnly() {
  document.querySelector(config.tableSelector).classList.add('-readonly', '-hover');
}

function createAlert() {
  var reportDateStr = document.querySelector('[xname=inpdataCicloRelatorio]').value;
  var reportDate = Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["parseDate"])(reportDateStr);
  var month = Object(orquestra_helpers__WEBPACK_IMPORTED_MODULE_0__["getMonthName"])(reportDate);
  var year = reportDate.getFullYear();
  var message = "Os dados abaixo s\xE3o referentes ao relat\xF3rio semestral elaborado em ".concat(month, "/").concat(year, ".");
  document.querySelector("".concat(config.alertSelector)).textContent = message;
}

function destroy() {
  config.$section.remove();
}

function handeTableMount(row) {
  var totalLabel = row.querySelector('[data-bind=examesTipoTotal]');
  var inputs = getInputs(row);
  var btnDelete = row.querySelector('.btn-delete-mv');
  setTriggers(inputs, btnDelete);
  /**
   * Disclaimer:
   * Força a autalização do label da coluna `Total` na tabela de Exames Ocupacionais.
   * Somente necessário pois a função `InsertNewRow` do Orquestra faz um clone da 1º linha
   * da tabela, copiando também o valor total presente na linha copiada. Desta forma,
   * o método `update` do componente `Template` atualiza o label para o valor correto.
   */

  _components_template__WEBPACK_IMPORTED_MODULE_2__["default"].update(totalLabel);
}

function handleNewRow(e) {
  var lastRow = e.detail.lastRow;
  var totalInput = getInputTotal(lastRow);
  _components_template__WEBPACK_IMPORTED_MODULE_2__["default"].mount(totalInput);
}

function updateTemplateData(e) {
  var deletedRow = e.detail.deletedRow;
  var totalInput = getInputTotal(deletedRow);
  _components_template__WEBPACK_IMPORTED_MODULE_2__["default"].remove(totalInput);
}

function handleDeleteRow(e) {
  var table = e.detail.table;
  var summary = getSummaryTable();
  updateSummary(table, summary);
}

function setTriggers(inputs, btnDelete) {
  Object.values(inputs).forEach(function (input) {
    input.addEventListener('change', handleChange);
  });
}

function handleChange() {
  var row = this.closest('tr');
  var table = this.closest('table');
  var summary = getSummaryTable();
  var inputs = getInputs(row);
  updateRowTotal(inputs);
  updateSummary(table, summary);
}

function updateRowTotal(_ref2) {
  var normal = _ref2.normal,
      altered = _ref2.altered,
      total = _ref2.total;
  var normalCount = parseInt(normal.value) || 0;
  var alteredCount = parseInt(altered.value) || 0;
  total.value = normalCount + alteredCount; // dispara manualmente o evento `change` para
  // atualizar o objeto `document.data`, utilizado
  // pelo componente Template.

  $(total).trigger('change');
}

function updateSummary(table, summary) {
  var totalInputs = getSummaryInputs(summary);
  var examsData = getExamsData(table);
  totalInputs.normal.value = sumExams(examsData, 'normal');
  totalInputs.altered.value = sumExams(examsData, 'altered');
  totalInputs.total.value = sumExams(examsData, 'total'); // dispara manualmente o evento `change` para
  // atualizar o objeto `document.data`, utilizado
  // pelo componente Template.

  Object.values(totalInputs).forEach(function (input) {
    return $(input).trigger('change');
  });
}

var sumExams = function sumExams(data, type) {
  return data.filter(function (_ref3) {
    var input = _ref3.input;
    return input === type;
  }).reduce(function (acc, input) {
    return acc + input.value;
  }, 0);
};

var getInputs = function getInputs(row) {
  return {
    normal: row.querySelector('[xname=inpexamesNormais]'),
    altered: row.querySelector('[xname=inpexamesAlterados]'),
    total: row.querySelector('[xname=inpexamesTipoTotal]')
  };
};

var getInputTotal = function getInputTotal(row) {
  return row.querySelector('[xname=inpexamesTipoTotal]');
};

var getExamsData = function getExamsData(table) {
  var data = _toConsumableArray(table.querySelectorAll('tr:not(.header)')).map(function (row) {
    return getInputValues(row);
  }); // realiza o `flat` do array bidimensional de valores


  return [].concat.apply([], data);
};

var getInputValues = function getInputValues(row) {
  var values = Object.entries(getInputs(row)).map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        input = _ref5[1];

    return {
      input: key,
      value: parseInt(input.value) || 0
    };
  });
  return [].concat.apply([], values);
};

var getSummaryTable = function getSummaryTable() {
  return document.querySelector('#tbl-exames-total');
};

var getSummaryInputs = function getSummaryInputs(table) {
  return {
    normal: table.querySelector('[xname=inpexamesTotalNormal]'),
    altered: table.querySelector('[xname=inpexamesTotalAlterado]'),
    total: table.querySelector('[xname=inpexamesTotalGlobal]')
  };
};

var shouldMountTable = function shouldMountTable(taskAlias, productType) {
  return productType === 'PCMSO' && ['elaboracao', 'complementacao', 'elaboracaoAnual', 'complementacaoAnual'].includes(taskAlias);
};

var shouldBeReadonly = function shouldBeReadonly(taskAlias, productType) {
  return productType === 'PCMSO' && ['complementacao', 'elaboracaoAnual', 'complementacaoAnual'].includes(taskAlias);
};

var shouldShowAlert = function shouldShowAlert(taskAlias, productType) {
  return productType === 'PCMSO' && ['elaboracaoAnual', 'complementacaoAnual'].includes(taskAlias);
};
/**
 * Public API
 */


function init(_ref6) {
  var taskAlias = _ref6.taskAlias,
      productType = _ref6.productType;
  var readonly = shouldBeReadonly(taskAlias, productType);
  var shouldMount = shouldMountTable(taskAlias, productType);
  var alert = shouldShowAlert(taskAlias, productType);

  if (!shouldMount) {
    return destroy();
  }

  return mount({
    readonly: readonly,
    alert: alert
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/recommendations-table/index.js":
/*!*******************************************************!*\
  !*** ./src/js/modules/recommendations-table/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_table_multivalue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/table-multivalue */ "./src/js/components/table-multivalue.js");
/* harmony import */ var _components_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/textarea-autosize */ "./src/js/components/textarea-autosize.js");
/* harmony import */ var _components_button_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button-radio */ "./src/js/components/button-radio.js");
/* harmony import */ var _components_datepicker_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/datepicker-range */ "./src/js/components/datepicker-range.js");




var config = {
  $section: document.querySelector('#section-recommendations'),
  tableSelector: '#tbl-recommendations',
  recommendationsTextareaId: 'recomendacoesDescricao'
};

function mount(_ref) {
  var _ref$readonly = _ref.readonly,
      readonly = _ref$readonly === void 0 ? false : _ref$readonly;
  config.$section.classList.remove('hidden');

  if (readonly) {
    return setReadOnly();
  }

  var RecommendationsTable = new _components_table_multivalue__WEBPACK_IMPORTED_MODULE_0__["TableMultivalue"](config.tableSelector, handeTableMount);
  return RecommendationsTable;
}

function destroy() {
  config.$section.remove();
}

function setReadOnly() {
  document.querySelector(config.tableSelector).classList.add('-readonly', '-hover');
  _components_datepicker_range__WEBPACK_IMPORTED_MODULE_3__["default"].init("".concat(config.tableSelector, " .input-monthrange"), {});
}

function handeTableMount(row) {
  _components_button_radio__WEBPACK_IMPORTED_MODULE_2__["default"].init('.btn-radio-wrapper', true, row);
  _components_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__["default"].init("[xname=inp".concat(config.recommendationsTextareaId, "]"), row);
  _components_datepicker_range__WEBPACK_IMPORTED_MODULE_3__["default"].init('.input-monthrange', {
    startView: 'months',
    minViewMode: 'months',
    format: 'M/yyyy'
  }, row);
}

var shouldMountTable = function shouldMountTable(taskAlias, productType) {
  return ['complementacao', 'elaboracaoAnual', 'complementacaoAnual'].includes(taskAlias) || productType === 'PPRA' && taskAlias === 'elaboracao';
};

var shouldBeReadonly = function shouldBeReadonly(taskAlias, productType) {
  return ['elaboracaoAnual', 'complementacaoAnual'].includes(taskAlias);
};

function init(_ref2) {
  var taskAlias = _ref2.taskAlias,
      productType = _ref2.productType;
  var readonly = shouldBeReadonly(taskAlias, productType);
  var shouldMount = shouldMountTable(taskAlias, productType);

  if (!shouldMount) {
    return destroy();
  }

  return mount({
    readonly: readonly
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/modules/send-options/index.js":
/*!**********************************************!*\
  !*** ./src/js/modules/send-options/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  stage: {
    taskAlias: document.querySelector('#inpDsFlowElementAlias').value,
    productType: document.querySelector('[xname=inptipoProduto]').value
  },
  switches: {
    $email: document.querySelector('[xname=inpenviarEmail]'),
    $letter: document.querySelector('[xname=inpcartaDeOrientacoes]')
  }
};

function mount(productType) {
  if (productType === 'PPRA') {
    config.switches.$email.addEventListener('change', handleOptionEmail);
    config.switches.$letter.addEventListener('change', handleOptionLetter);
  } else {
    config.switches.$letter.closest('.columns').remove();
  }
}

function handleOptionEmail() {
  var switches = config.switches;

  var _getValues = getValues(),
      email = _getValues.email;

  if (email) {
    switches.$letter.checked = false;
  }
}

function handleOptionLetter() {
  var switches = config.switches;

  var _getValues2 = getValues(),
      letter = _getValues2.letter;

  if (letter) {
    switches.$email.checked = false;
  }
}

var getValues = function getValues() {
  return {
    email: config.switches.$email.checked,
    letter: config.switches.$letter.checked
  };
};

function init() {
  var _config$stage = config.stage,
      taskAlias = _config$stage.taskAlias,
      productType = _config$stage.productType;

  if (taskAlias === 'complementacao') {
    mount(productType);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29ycXVlc3RyYS1oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vcnF1ZXN0cmEtaGVscGVycy9zcmMvX2RhdGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vcnF1ZXN0cmEtaGVscGVycy9zcmMvX2Zvcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYnV0dG9uLXJhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RhdGVwaWNrZXItcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZm9ybS12YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90YWJsZS1jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90YWJsZS1tdWx0aXZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGV4dGFyZWEtYXV0b3NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vY2tzL19leHBvcnRhckRhZG9zVmlkYXNBdGl2YXNfMTE5Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9ja3MvX3BhLXNlc2kyMDctY29vcmRlbmFjYW9fMTIwNy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9ja3MvX3BhLXNlc2kyMDctaGVscG1haXNfMTIwNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9ja3Mvb3JxdWVzdHJhLWFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9hY3Rpb25zLXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2V4YW1zLXNlYXJjaC9hcGkvYXBpLmNvb3JkaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9leGFtcy1zZWFyY2gvYXBpL2FwaS5oZWxwLXBsdXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZXhhbXMtc2VhcmNoL2FwaS9hcGkubGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZXhhbXMtc2VhcmNoL2FwaS91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2V4YW1zLXNlYXJjaC9leGFtcy1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2V4YW1zLXNlYXJjaC9leGFtcy10YWJsZXMtY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2V4YW1zLXNlYXJjaC9leGFtcy10YWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZXhhbXMtc2VhcmNoL2V4YW1zLXRhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZXhhbXMtc2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2V4YW1zLXNlYXJjaC90YXNrLWNvbnRyb2xsZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL29jY3VwYXRpb25hbC1leGFtcy10YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9yZWNvbW1lbmRhdGlvbnMtdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvc2VuZC1vcHRpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlIiwiaW5pdCIsImNvbmRpdGlvbmFscyIsIlN3aXRjaCIsIkV4YW1zU2VhcmNoIiwiU2VuZE9wdGlvbnMiLCJtb3VudCIsImJ0blJhZGlvV3JhcHBlciIsImhpZGVQcmVmaXgiLCJzZWxlY3QiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQnRuR3JvdXBNYXJrdXAiLCJvcHRpb25zIiwiZ2V0T3B0aW9ucyIsImJ0bkdyb3VwIiwiY3JlYXRlQnV0dG9uR3JvdXAiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJyZXNldCIsImhhbmRsZUNoYW5nZSIsImFwcGx5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwic2V0VHJpZ2dlcnMiLCJoYW5kbGVDbGljayIsIm9wdGlvblZhbHVlIiwiZGF0YXNldCIsIm9wdGlvbiIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJ2YWx1ZSIsImJ0blJhZGlvIiwicmVzZXRTdGF0ZSIsInJlbW92ZSIsImZpbHRlciIsIm1hcCIsImxhYmVsIiwic3Vic3RyaW5nIiwiYnV0dG9ucyIsImNyZWF0ZUJ1dHRvbiIsImpvaW4iLCJidG5SYWRpb1dyYXBwZXJTZWxlY3RvciIsImNvbnRleHQiLCJkb2N1bWVudCIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udGFpbmVyIiwiZGF0ZXBpY2tlck9wdGlvbnMiLCJpbnB1dHMiLCIkIiwiZmluZCIsImxhYmVscyIsImxhbmd1YWdlIiwibGVuZ3RoIiwiY29uc29sZSIsImVycm9yIiwiYXR0ciIsImRhdGVwaWNrZXIiLCJjb250YWluZXJFbGVtZW50U2VsZWN0b3IiLCJncm91cCIsImVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJvbiIsImUiLCJjYWxsIiwidmFsaWRhdGVGaWVsZCIsImZpZWxkIiwic2lsZW50IiwiYWRkRXJyb3IiLCJyZW1vdmVFcnJvciIsInZhbGlkYXRlRm9ybSIsImdyb3VwcyIsImhhc0Vycm9ycyIsInJlc3VsdCIsInZhbGlkYXRpb24iLCJlcnJvcnMiLCJnZXRGb3JtSGVscEVsZW1lbnQiLCJtZXNzYWdlIiwiRm9ybVZhbGlkYXRpb24iLCJjb25maWciLCJBcnJheSIsImlzQXJyYXkiLCJmb3JtR3JvdXAiLCJmb3JtSGVscCIsInRleHRDb250ZW50Iiwic3dpdGNoRWwiLCJtYXJrZXIiLCJnZXRTd2l0Y2hNYXJrZXIiLCJzd2l0Y2hFbGVtZW50U2VsZWN0b3IiLCJ0YWJsZSIsInRhYmxlR3JvdXBUaXRsZSIsInRhYmxlR3JvdXBIZWFkZXIiLCJ0b2dnbGVHcm91cCIsInRhYmxlRWxlbWVudFNlbGVjdG9yIiwiZXhwYW5kIiwic2hvd0dyb3VwIiwic2hyaW5rIiwiaGlkZUdyb3VwIiwidG9nZ2xlIiwic2hvdyIsImhpZGUiLCJyZWdpc3RlckV2ZW50cyIsInRhYmxlSW5zdGFuY2UiLCJidG5JbnNlcnQiLCJvbmNsaWNrIiwiSW5zZXJ0TmV3Um93IiwiaGFuZGVDbGljayIsInJvd3MiLCJyb3ciLCJyZWdpc3RlclJvd0V2ZW50cyIsImJ0bkRlbGV0ZSIsIkRlbGV0ZVJvdyIsImhhbmRsZVJlbW92ZSIsImdldEV2ZW50Q29uZmlnIiwiYnViYmxlcyIsImRldGFpbCIsImdldFRhYmxlUm93c0xlbmd0aCIsImxhc3RSb3ciLCJnZXRMYXN0Um93IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwibmV3ZXN0Um93Iiwib25Nb3VudCIsImV2ZW50Q29uZmlnIiwiZGVsZXRlZFJvdyIsImdldFJvd3MiLCJUYWJsZU11bHRpdmFsdWUiLCJjbGljayIsImV2ZW50TmFtZSIsImNhbGxiYWNrIiwibW91bnRUYWJsZXMiLCJpc0FjdGl2ZSIsImFwcGVuZERhdGEiLCJkYXRhIiwiYWRkRmlyc3RSb3ciLCJyb3dJbmRleCIsIk9iamVjdCIsImVudHJpZXMiLCJpZCIsInRhYnMiLCJ0YWJQYW5lcyIsIm5leHRFbGVtZW50U2libGluZyIsImhhc1BhbmVzIiwiY29udGFpbnMiLCJ0YWIiLCJwcmV2ZW50RGVmYXVsdCIsInRhYkRhdGFSZWYiLCJpc0Rpc2FibGVkIiwidGFiUGFuZSIsInNob3dUYWIiLCJnZXRUYWJQYW5lIiwidGFic0VsZW1lbnRTZWxlY3RvciIsImhpZGVUYWIiLCJkaXNhYmxlZFRhYiIsInRhYlBhbmVsIiwiZW5hYmxlVGFiIiwicHVsc2VUYWIiLCJlbmFibGUiLCJwdWxzZSIsImRpc2FibGVkIiwiaW5wdXQiLCJ0YXJnZXQiLCJuZXdWYWx1ZSIsImdldEF0dHJpYnV0ZSIsImJpbmRzIiwidHlwZSIsImNoZWNrZWQiLCJwdXNoIiwic3BsaWNlIiwiaW5kZXhPZiIsImhhbmRsZVVwZGF0ZSIsImluZGV4IiwidXBkYXRlIiwiYWRkRmllbGQiLCJzaW5nbGUiLCJkZWZhdWx0QXR0ciIsImdldERlZmF1bHRBdHRyaWJ1dGVzIiwiY29sbGVjdGlvbiIsImlzSW5wdXRNdWx0aXBsZSIsImdldElnbm9yZWROb3RTZWxlY3RvciIsImlkcyIsImlzRmllbGRDb2xsZWN0aW9uIiwiY29kZmllbGQiLCJpZ25vcmVkIiwiaWdub3JlZFNlbGVjdG9yIiwiZmllbGRzIiwiZmllbGRJZCIsImJpbmQiLCJmaWVsZFZhbHVlSW5kZXgiLCJmaWVsZFZhbHVlIiwiaGFzQXR0cmlidXRlIiwidGFza0FsaWFzIiwiY3VycmVudEFsaWFzIiwicmVwbGFjZSIsInNwbGl0IiwiaW5jbHVkZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJCQVNFX0hFSUdIVCIsInRleHRhcmVhIiwic2V0SGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJsaW5lcyIsInNjcm9sbEhlaWdodCIsInNpemUiLCJ0ZXh0YXJlYUVsZW1lbnRTZWxlY3RvciIsInN1Y2Nlc3MiLCJjb2QiLCJ0eHQiLCJzaXR1YWNhb0Z1bmNpb25hcmlvIiwibm9tZUZ1bmNpb25hcmlvIiwibm9tZUVtcHJlc2EiLCJjYWNoZSIsImRhdGFzb3VyY2UiLCJydW50aW1lIiwiYnl0ZXMiLCJxdWFudGlkYWRlIiwiYW5vIiwicXVhbnRpZGFkZVRpcG8iLCJtZXMiLCJ0aXBvRGVEZW1hbmRhIiwiZXhwb3J0YXJEYWRvc1ZpZGFzQXRpdmFzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiZXhwb3J0YXJEYWRvc1ZpZGFzQXRpdmFzMTE5MiIsInBhU2VzaUhlbHBNYWlzIiwicGFTZXNpSGVscE1haXMxMjA2IiwicGFTZXNpQ29vcmRlbmFjYW8iLCJwYVNlc2lDb29yZGVuYWNhbzEyMDciLCIkc2VjdGlvbiIsInRhYmxlU2VsZWN0b3IiLCJhY3Rpb25zVGV4dGFyZWFJZCIsImV4ZWN1dGVkSW5wdXRJZCIsInJlYWRvbmx5Iiwic3RhdGljb25seSIsInNldFJlYWRPbmx5IiwiQWN0aW9uc1RhYmxlIiwiaGFuZGVUYWJsZU1vdW50IiwiRGF0ZXBpY2tlclJhbmdlIiwiYXBwZW5kRXhlY3V0ZWRMYWJlbCIsImxhYmVsVGV4dCIsInRkIiwidGFnIiwiZ2V0TGFiZWxDbGFzc01vZGlmaWVyIiwiQnV0dG9uUmFkaW8iLCJUZXh0YXJlYUF1dG9zaXplIiwic3RhcnRWaWV3IiwibWluVmlld01vZGUiLCJmb3JtYXQiLCJzaG91bGRNb3VudFRhYmxlIiwic2hvdWxkQmVSZWFkb25seSIsInNob3VsZEJlU3RhdGljIiwic2hvdWxkTW91bnQiLCJPUlFVRVNUUkFfREFUQVNPVVJDRV9VUkwiLCJwcm9jZXNzIiwiZGVmYXVsdFBhcmFtcyIsInF1YW50aXR5IiwiZ2V0RGF0YUZyb21EYXRhU291cmNlIiwic3RhcnQiLCJlbmQiLCJjbnBqIiwidXJsIiwiVVJMIiwicGFyYW1zIiwiaW5wcGVyaW9kb0luaWNpYWwiLCJnZXRNb250aEludCIsImlucGFub0luaWNpYWwiLCJnZXRGdWxsWWVhciIsImlucHBlcmlvZG9GaW5hbCIsImlucGFub0ZpbmFsIiwiaW5wY25waiIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiZW50cnkiLCJtb250aCIsInBhcnNlSW50IiwibW9udGhOYW1lIiwiZ2V0TW9udGhOYW1lQnlOdW1iZXIiLCJ5ZWFyIiwiZ2V0RGF0YUZyb21QZXJpb2QiLCJ0aGVuIiwiZmlsbGVkRGF0YSIsImZpbGxNb250aHNPblBlcmlvZCIsImVyciIsInBlcnNpc3REYXRhIiwicm93RGF0YSIsImNvb3JkZW5hY2FvTWVzQW5vIiwiY29vcmRlbmFjYW9SZWdpc3Ryb3MiLCJxdWFudGl0eURvdWJ0cyIsInF1YW50aXR5Q2hhbmdlcyIsInF1YW50aXR5U3VwcG9ydFNQbHVzIiwicXVhbnRpdHlTdXBwb3J0Q29vcmQiLCJxdWFudGl0eVN1cHBvcnRWaXZhUGx1cyIsInByb3Bvc2FsIiwicHJvZHVjdElkIiwicHJvZHVjdFR5cGUiLCJpbnBudW1lcm9EYVByb3Bvc3RhIiwiaW5wY29kUHJvZHV0byIsInF1YW50aXR5S2V5IiwiZ2V0UXVhbnRpdHlLZXlCeVR5cGUiLCJwcmVmaXgiLCJrZXlUeXBlIiwiZ3JvdXBEYXRhQnlUeXBlIiwieWVhcnMiLCJTZXQiLCJ5ZWFybHlEYXRhIiwibW9udGhzIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImFzc2lnbiIsIm1lcmdlZERhdGEiLCJoZWxwTWVzQW5vIiwiaGVscER1dmlkYXMiLCJoZWxwTXVkYW5jYXMiLCJoZWxwU3Vwb3J0ZVNNYWlzIiwiaGVscFN1cG9ydGVNZWRDb29yZGVuYWNhbyIsImhlbHBTdXBvcnRlVml2YU1haXMiLCJnZXREYXRhRnJvbVNPQyIsImRhdGUiLCJjb21wYW55SWQiLCJleHBvcnRJZCIsImFwaUtleSIsImdldE1vbnRoTmFtZSIsImlucGFubyIsImlucG1lcyIsImlucGVtcHJlc2FEZUF0ZW5kaW1lbnRvIiwiaW5wY29kRXhwb3J0YURhZG9zIiwiaW5wY2hhdmVFeHBvcnRhIiwiYWN0aXZlTGl2ZXMiLCJpbmFjdGl2ZUxpdmVzIiwicXVhbnRpdHlBY3RpdmVMaXZlcyIsInF1YW50aXR5SW5hY3RpdmVMaXZlcyIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJtb250aERhdGEiLCJzZXRNb250aCIsImdldE1vbnRoIiwiYWxsIiwibW9udGhseUVudHJpZXMiLCJjdXJyRGF0ZSIsImN1cnJZZWFyIiwiY3Vyck1vbnRoIiwibW9udGhseURhdGEiLCIkc2VhcmNoVHJpZ2dlciIsIiRleGFtc1BhbmVzIiwiZ2V0VGFic1BhbmUiLCJkYXRlcGlja2VyU2VsZWN0b3IiLCJTZWFyY2hGb3JtIiwiaGFuZGxlU2VhcmNoIiwidmFsaWRhdGlvblJlc3VsdCIsInZhbGlkYXRlIiwiYnRuU2VhcmNoIiwicGVyaW9kIiwiZ2V0UGVyaW9kIiwic2VhcmNoRGF0YSIsImxvZyIsInN0YXJ0RGF0ZSIsImFkZFllYXJzIiwiZW5kRGF0ZSIsImFkZExvYWRpbmdTdGF0ZSIsInJlbW92ZUxvYWRpbmdTdGF0ZSIsImxpdmVzIiwiZW1wdHlNZXNzYWdlIiwidGFiTmFtZSIsInRhYmxlSWQiLCJjb2x1bW5zIiwia2V5IiwidGl0bGUiLCJoZWFkZXJQcmVmaXgiLCJoZWxwIiwiY29vcmQiLCJjb2x1bW5EZWZhdWx0cyIsInNob3dUb3RhbCIsInNob3dBdmVyYWdlIiwiZ3JvdXBEYXRhQnlZZWFyIiwic3VtbWFyeSIsImNyZWF0ZUVtcHR5TWVzc2FnZSIsImNyZWF0ZUNvbGxhcHNlIiwiY29sbGFwc2VTZXR0aW5ncyIsImNvbHVtbiIsInRvdGFsIiwiYXZlcmFnZSIsImNvbHVtblNldHRpbmdzIiwiY29sbGFwc2VQcmVmaXgiLCJjcmF0ZUNvbGxhcHNlUHJlZml4IiwiY29sbGFwc2VIZWFkZXIiLCJjcmVhdGVDb2xsYXBzZUhlYWRlciIsImNvbGxhcHNlUm93cyIsImNyZWF0ZUNvbGxhcHNlR3JvdXAiLCJhdmVyYWdlTGFiZWwiLCJ0b3RhbExhYmVsIiwiY3JlYXRlVGFibGVIZWFkZXIiLCJjb2xzIiwiY29sIiwiY3JlYXRlVGFibGVIZWFkZXJDb2x1bW4iLCJ0b0xvY2FsZVN0cmluZyIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsImkiLCJjcmVhdGVDb2xsYXBzZUhlYWRlckNvbHVtbiIsImNvbHVtbkluZGV4IiwidGFibGVSb3dzIiwiY3JlYXRlQ29sbGFwc2VSb3ciLCJidWlsZCIsInRhYkNvbnRhaW5lciIsInRhYk5hdiIsImVtcHR5SHRtbCIsImlubmVySFRNTCIsImhlYWRlclNldHRpbmdzIiwidGFibGVIZWFkZXJIdG1sIiwidGFibGVDb2xsYXBzZUh0bWwiLCJ0YWJsZUh0bWwiLCJUYWJzIiwidGFic0lkIiwidGFic1BhbmVJZCIsImdldFRhYnNFbGVtZW50cyIsInNldEluaXRpYWxTdGF0ZSIsImVuYWJsZUFsbCIsInN0YWdlIiwidGFibGVzIiwiRXhhbXNUYWJsZXNDb25maWciLCJoYW5kbGVTZWFyY2hEb25lIiwibGl2ZXNEYXRhIiwiaGVscERhdGEiLCJjb29yZERhdGEiLCJidWlsZFRhYmxlcyIsIkV4YW1zRm9ybSIsImluaXRGb3JtVGFibGVzIiwiVGFza0NvbnRyb2xsZXJzIiwiZW5hYmxlQ29uY2x1ZGUiLCJwZXJzaXN0U2VhcmNoRGF0YSIsImNvbmZpZ1RhYmxlc0hlbHAiLCJyZW1vdmVDb2x1bW5Gcm9tQ29uZmlnIiwiRXhhbXNUYWJsZXMiLCJFeGFtc1RhYnMiLCJUYWJsZUNvbGxhcHNlIiwiSGVscFBsdXMiLCJDb29yZGluYXRpb24iLCJPY2N1cGF0aW9uYWxFeGFtc1RhYmxlIiwiUmVjb21tZW5kYXRpb25zVGFibGUiLCJoYW5kbGVTZWFyY2hFcnJvciIsInRhYmxlS2V5IiwidGFibGVDb25maWciLCJmaW5kSW5kZXgiLCJzaG91bGRNb3VudENvbXBvbmVudCIsInNob3VsZFJlc2V0Rm9ybSIsInVubW91bnQiLCJzZWN0aW9uIiwiZGlzYWJsZWRDb25jbHVkZSIsInNob3VsZFJlc2V0IiwicmVzZXRGb3JtIiwiTGl2ZXMiLCJoZWxwUGx1c0RhdGEiLCJjb29yZGluYXRpb25EYXRhIiwicmVzdWx0cyIsImFsZXJ0SWQiLCIkYnRuQ29udGFpbmVyIiwiJGJ0bkZpbmlzaCIsIiR3ZWxsIiwiZ2V0QWxlcnRIdG1sIiwiYWxlcnRIdG1sIiwicmVxdWlyZWRBbGVydCIsImFsZXJ0U2VsZWN0b3IiLCJhbGVydCIsImNyZWF0ZUFsZXJ0IiwiRXhhbXNUYWJsZSIsImhhbmRsZU5ld1JvdyIsInVwZGF0ZVRlbXBsYXRlRGF0YSIsImhhbmRsZURlbGV0ZVJvdyIsInJlcG9ydERhdGVTdHIiLCJyZXBvcnREYXRlIiwicGFyc2VEYXRlIiwiZ2V0SW5wdXRzIiwidG90YWxJbnB1dCIsImdldElucHV0VG90YWwiLCJnZXRTdW1tYXJ5VGFibGUiLCJ1cGRhdGVTdW1tYXJ5IiwidmFsdWVzIiwidXBkYXRlUm93VG90YWwiLCJub3JtYWwiLCJhbHRlcmVkIiwibm9ybWFsQ291bnQiLCJhbHRlcmVkQ291bnQiLCJ0cmlnZ2VyIiwidG90YWxJbnB1dHMiLCJnZXRTdW1tYXJ5SW5wdXRzIiwiZXhhbXNEYXRhIiwiZ2V0RXhhbXNEYXRhIiwic3VtRXhhbXMiLCJnZXRJbnB1dFZhbHVlcyIsImNvbmNhdCIsInNob3VsZFNob3dBbGVydCIsInJlY29tbWVuZGF0aW9uc1RleHRhcmVhSWQiLCJzd2l0Y2hlcyIsIiRlbWFpbCIsIiRsZXR0ZXIiLCJoYW5kbGVPcHRpb25FbWFpbCIsImhhbmRsZU9wdGlvbkxldHRlciIsImdldFZhbHVlcyIsImVtYWlsIiwibGV0dGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFB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QkFBVCxHQUE4QjtBQUFBLE1BQ3BCSCxRQURvQixHQUNQbmEsTUFETyxDQUNwQm1hLFFBRG9COztBQUFBLG1CQUVWSyxTQUFTLEVBRkM7QUFBQSxNQUVwQkMsS0FGb0IsY0FFcEJBLEtBRm9COztBQUk1QixNQUFJQSxLQUFKLEVBQVc7QUFDVE4sWUFBUSxDQUFDRSxPQUFULENBQWlCOVUsT0FBakIsR0FBMkIsS0FBM0I7QUFDRDtBQUNGOztBQUVELFNBQVNnVixrQkFBVCxHQUErQjtBQUFBLE1BQ3JCSixRQURxQixHQUNSbmEsTUFEUSxDQUNyQm1hLFFBRHFCOztBQUFBLG9CQUVWSyxTQUFTLEVBRkM7QUFBQSxNQUVyQkUsTUFGcUIsZUFFckJBLE1BRnFCOztBQUk3QixNQUFJQSxNQUFKLEVBQVk7QUFDVlAsWUFBUSxDQUFDQyxNQUFULENBQWdCN1UsT0FBaEIsR0FBMEIsS0FBMUI7QUFDRDtBQUNGOztBQUVELElBQU1pVixTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU87QUFDdkJDLFNBQUssRUFBRXphLE1BQU0sQ0FBQ21hLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCN1UsT0FEUDtBQUV2Qm1WLFVBQU0sRUFBRTFhLE1BQU0sQ0FBQ21hLFFBQVAsQ0FBZ0JFLE9BQWhCLENBQXdCOVU7QUFGVCxHQUFQO0FBQUEsQ0FBbEI7O0FBS0EsU0FBU3ZLLElBQVQsR0FBaUI7QUFBQSxzQkFDb0JnRixNQUFNLENBQUN3VixLQUQzQjtBQUFBLE1BQ1B4TyxTQURPLGlCQUNQQSxTQURPO0FBQUEsTUFDSTJHLFdBREosaUJBQ0lBLFdBREo7O0FBR2YsTUFBSTNHLFNBQVMsS0FBSyxnQkFBbEIsRUFBb0M7QUFDbEMzTCxTQUFLLENBQUNzUyxXQUFELENBQUw7QUFDRDtBQUNGOztBQUVjO0FBQ2IzUyxNQUFJLEVBQUpBO0FBRGEsQ0FBZixFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hcHAuanNcIik7XG4iLCIvKipcclxuICogRGF0ZXNcclxuICovXHJcblxyXG5leHBvcnQge1xyXG4gIGdldE1vbnRoTmFtZSxcclxuICBnZXRNb250aEludCxcclxuICBnZXRNb250aE5hbWVCeU51bWJlcixcclxuICBhZGRZZWFycyxcclxuICBwYXJzZURhdGVcclxufSBmcm9tICcuL3NyYy9fZGF0ZXMnXHJcblxyXG4vKipcclxuICogRm9ybXNcclxuICovXHJcbmV4cG9ydCB7XHJcbiAgZ2V0Q29kRmxvdyxcclxuICBnZXRDb2RGbG93RXhlY3V0ZSxcclxuICBnZXRDb2RGbG93RXhlY3V0ZVRhc2ssXHJcbiAgZ2V0VGFza0FsaWFzLFxyXG4gIGdldFVzZXJUb2tlbixcclxuICByZXNldEFsbFRhYmxlcyxcclxuICByZXNldEFsbEZpZWxkcyxcclxuICByZXNldEZvcm1cclxufSBmcm9tICcuL3NyYy9fZm9ybXMnXHJcbiIsIi8qKlxyXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgLSByZWxhdGVkIGRhdGUgdG8gZ2V0IGxvY2FsZSBzdHJpbmcgbW9udGggbmFtZVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLm1vbnRoIC0gbmF0aXZlIG9wdGlvbiBvZiB0b0xvY2FsZVN0cmluZyBtZXRob2QgZm9yIG1vbnRoIG91dHB1dFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy5jYXBpdGFsaXplIC0gdHJhbnNmb3JtIGxvY2FsZSBtb250aCBpbiBjYXB0aWxlemVkIGZvcm1hdCAoZWcuIEphbnVhcnkgaW5zdGVkIGphbnVhcnkpXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcubGFuZyAtIGxhbmd1YWdlIHVzZWQgdG8gZ2V0IGxvY2FsZSBzdHJpbmcgbW9udGggbmFtZVxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IG1vbnRoIG5hbWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRNb250aE5hbWUgPSAoZGF0ZSwgY29uZmlnID0ge1xyXG4gIG1vbnRoOiAnbG9uZycsXHJcbiAgY2FwaXRhbGl6ZTogdHJ1ZSxcclxuICBsYW5nOiAncHQtQlInXHJcbn0pID0+IHtcclxuICBjb25zdCBtb250aCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoY29uZmlnLmxhbmcsIHsgbW9udGg6IGNvbmZpZy5tb250aCB9KVxyXG5cclxuICBpZiAoIWNvbmZpZy5jYXBpdGFsaXplKSB7XHJcbiAgICByZXR1cm4gbW9udGhcclxuICB9XHJcblxyXG4gIHJldHVybiBtb250aFswXS50b1VwcGVyQ2FzZSgpICsgbW9udGguc2xpY2UoMSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIHJlbGF0ZWQgZGF0ZSB0byBnZXQgaW50ZWdlciBtb250aCB2YWx1ZVxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IG1vbnRoIGludGVnZXIgZXF1aXZhbGVudFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldE1vbnRoSW50ID0gZGF0ZSA9PlxyXG4gIGRhdGUuZ2V0TW9udGgoKSArIDEgLy8gYXZvaWQgbW9udGhzIHN0YXJ0aW5nIGF0IDBcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1N0cmluZywgTnVtYmVyfSBtb250aE51bWJlciAtIG1vbnRoIG51bWJlciwgc3RhcnRpbmcgYXQgMSAoZWcuIDEgPSBKYW51YXJ5KVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLm1vbnRoIC0gbmF0aXZlIG9wdGlvbiBvZiB0b0xvY2FsZVN0cmluZyBtZXRob2QgZm9yIG1vbnRoIG91dHB1dFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy5jYXBpdGFsaXplIC0gdHJhbnNmb3JtIGxvY2FsZSBtb250aCBpbiBjYXB0aWxlemVkIGZvcm1hdCAoZWcuIEphbnVhcnkgaW5zdGVkIGphbnVhcnkpXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcubGFuZyAtIGxhbmd1YWdlIHVzZWQgdG8gZ2V0IGxvY2FsZSBzdHJpbmcgbW9udGggbmFtZVxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IG1vbnRoIG5hbWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRNb250aE5hbWVCeU51bWJlciA9IChtb250aE51bWJlciwgY29uZmlnID0ge1xyXG4gIG1vbnRoOiAnbG9uZycsXHJcbiAgY2FwaXRhbGl6ZTogdHJ1ZSxcclxuICBsYW5nOiAncHQtQlInXHJcbn0pID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gIGNvbnN0IGN1cnJlbnRNb250aCA9IHBhcnNlSW50KG1vbnRoTnVtYmVyKSAtIDEgLy8gYWRqdXN0IG1vbnRocyB0byBzdGFydHMgYXQgMFxyXG5cclxuICBkYXRlLnNldE1vbnRoKGN1cnJlbnRNb250aClcclxuXHJcbiAgY29uc3QgbW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKGNvbmZpZy5sYW5nLCB7IG1vbnRoOiBjb25maWcubW9udGggfSlcclxuXHJcbiAgaWYgKCFjb25maWcuY2FwaXRhbGl6ZSkge1xyXG4gICAgcmV0dXJuIG1vbnRoXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbW9udGhbMF0udG9VcHBlckNhc2UoKSArIG1vbnRoLnNsaWNlKDEpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgLSBhY3R1YWwgZGF0ZSB0byBhZGQgeWVhcnNcclxuICogQHBhcmFtIHtOdW1iZXJ9IHF1YW50aXR5IC0geWVhcnMgcXVhbnRpdHkgdG8gc3VtLCBhY2NlcHRzIG5lZ2F0aXZlIG51bWJlcnNcclxuICogQHJldHVybiB7RGF0ZX0gcmVzdWx0IGRhdGVcclxuICovXHJcbmV4cG9ydCBjb25zdCBhZGRZZWFycyA9IChkYXRlLCBxdWFudGl0eSkgPT4ge1xyXG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKVxyXG4gIG5ld0RhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpICsgcXVhbnRpdHkpXHJcblxyXG4gIHJldHVybiBuZXdEYXRlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nRGF0ZSAtIGRhdGVzIHdpdGggcHQtYnIgZm9ybWF0IGRkL21tL3l5eXlcclxuICogQHJldHVybiB7RGF0ZX0gc3RyaW5nRGF0ZSBhcyBkYXRlIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhcnNlRGF0ZSA9IHN0cmluZ0RhdGUgPT4ge1xyXG4gIGNvbnN0IFtkZCwgbW0sIHl5eXldID0gc3RyaW5nRGF0ZS5zcGxpdCgnLycpXHJcbiAgcmV0dXJuIG5ldyBEYXRlKHl5eXksIG1tIC0gMSwgZGQpXHJcbn1cclxuIiwiLyoqXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gT3JxdWVzdHJhIFByb2Nlc3MgQ29kRmxvd1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldENvZEZsb3cgPSAoKSA9PlxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnBDb2RGbG93JykudmFsdWVcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IE9ycXVlc3RyYSBQcm9jZXNzIENvZEZsb3dFeGVjdXRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0Q29kRmxvd0V4ZWN1dGUgPSAoKSA9PlxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnBDb2RGbG93RXhlY3V0ZScpLnZhbHVlXHJcblxyXG4vKipcclxuICogQHJldHVybiB7U3RyaW5nfSBPcnF1ZXN0cmEgVGFzayBDb2RGbG93RXhlY3V0ZVRhc2tcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRDb2RGbG93RXhlY3V0ZVRhc2sgPSAoKSA9PlxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnBDb2RGbG93RXhlY3V0ZVRhc2snKS52YWx1ZVxyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gT3JxdWVzdHJhIFRhc2sgQWxpYXNcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRUYXNrQWxpYXMgPSAoKSA9PlxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnBEc0Zsb3dFbGVtZW50QWxpYXMnKS52YWx1ZVxyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gT3JxdWVzdHJhIExvZ2dlZCBVc2VyIFRva2VuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlclRva2VuID0gKCkgPT5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wVG9rZW4nKS52YWx1ZVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBSZXNldCBPcnF1ZXN0cmEgTXVsdGl2YWx1ZSBUYWJsZXMsXHJcbiAqIGluc2VydGluZyBhIG5ldyBibGFuayByb3cgYW5kIGRlbGV0aW5nIGFsbCB0aGUgcmVzdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlc2V0QWxsVGFibGVzID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlW211bHQ9U10nKVxyXG4gICAgLmZvckVhY2godGFibGUgPT4ge1xyXG4gICAgICBjb25zdCBidG5JbnNlcnQgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKCcjQnRuSW5zZXJ0TmV3Um93JylcclxuXHJcbiAgICAgIGJ0bkluc2VydC5jbGljaygpXHJcblxyXG4gICAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0cjpub3QoLmhlYWRlcik6bm90KDpsYXN0LWNoaWxkJylcclxuICAgICAgICAuZm9yRWFjaChyb3cgPT4gcm93LnJlbW92ZSgpKVxyXG4gICAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBSZXNldCBhbGwgZm9ybSBmaWVsZHMgdmFsdWVzIGluc2lkZSBPcnF1ZXN0cmFcclxuICogVGFzayBGb3JtIChgI0JveEZybUV4ZWN1dGVgIGNvbnRhaW5lcilcclxuICpcclxuICogTm90ZTogVXNpbmcgalF1ZXJ5IHRvIHRyaWdnZXIgY2hhbmdlIGV2ZW50IGFmdGVyIHJlc2V0dGluZyB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtCb29sZWFufSBoYXJkIC0gZmxhZyB1c2VkIHRvIGNoYW5nZSBjdXN0b21cclxuICogT3JxdWVzdHJhIHJlcXVpcmVkIGF0dHJpYnV0ZSB0byBmYWxzZSBhZnRlciBjbGVhbmluZyB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXNldEFsbEZpZWxkcyA9IChoYXJkID0gZmFsc2UpID0+IHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0JveEZybUV4ZWN1dGUnKVxyXG4gIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT10ZXh0XScpXHJcbiAgY29uc3QgdGV4dGFyZWFzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpXHJcbiAgY29uc3QgY2hlY2tib3hlcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKVxyXG4gIGNvbnN0IHJhZGlvcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1yYWRpb10nKVxyXG4gIGNvbnN0IHNlbGVjdHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpXHJcblxyXG4gIGNvbnN0IHNpbmdsZVZhbHVlID0gWy4uLmlucHV0cywgLi4udGV4dGFyZWFzLCAuLi5zZWxlY3RzXVxyXG4gIGNvbnN0IGNoZWNrVmFsdWUgPSBbLi4uY2hlY2tib3hlcywgLi4ucmFkaW9zXVxyXG5cclxuICBzaW5nbGVWYWx1ZS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgIGZpZWxkLnZhbHVlID0gJydcclxuXHJcbiAgICBpZiAoaGFyZCkge1xyXG4gICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ04nKVxyXG4gICAgfVxyXG5cclxuICAgICQoZmllbGQpLnRyaWdnZXIoJ2NoYW5nZScpXHJcbiAgfSlcclxuXHJcbiAgY2hlY2tWYWx1ZS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgIGZpZWxkLmNoZWNrZWQgPSBmYWxzZVxyXG5cclxuICAgIGlmIChoYXJkKSB7XHJcbiAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnTicpXHJcbiAgICB9XHJcblxyXG4gICAgJChmaWVsZCkudHJpZ2dlcignY2hhbmdlJylcclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIFJlc2V0IGFsbCBmb3JtIGZpZWxkcyB2YWx1ZXMgYW5kIE11bHRpdmFsdWVcclxuICogVGFibGVzIGluc2lkZSBPcnF1ZXN0cmEgVGFzayBGb3JtIChgI0JveEZybUV4ZWN1dGVgIGNvbnRhaW5lcilcclxuICpcclxuICogQHBhcmFtIHtCb29sZWFufSBoYXJkIC0gZmxhZyB1c2VkIHRvIGNoYW5nZSBjdXN0b21cclxuICogT3JxdWVzdHJhIHJlcXVpcmVkIGF0dHJpYnV0ZSB0byBmYWxzZSBhZnRlciBjbGVhbmluZyB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXNldEZvcm0gPSAoaGFyZCA9IGZhbHNlKSA9PiB7XHJcbiAgcmVzZXRBbGxUYWJsZXMoKVxyXG4gIHJlc2V0QWxsRmllbGRzKGhhcmQpXHJcbn1cclxuIiwiaW1wb3J0IFRlbXBsYXRlIGZyb20gJy4vY29tcG9uZW50cy90ZW1wbGF0ZSdcclxuaW1wb3J0IFN3aXRjaCBmcm9tICcuL2NvbXBvbmVudHMvc3dpdGNoJ1xyXG5pbXBvcnQgRXhhbXNTZWFyY2ggZnJvbSAnLi9tb2R1bGVzL2V4YW1zLXNlYXJjaCdcclxuaW1wb3J0IFNlbmRPcHRpb25zIGZyb20gJy4vbW9kdWxlcy9zZW5kLW9wdGlvbnMnXHJcblxyXG4vKipcclxuICogQ29tcG9uZW50ZXMgR2xvYmFpc1xyXG4gKi9cclxuXHJcblRlbXBsYXRlLmluaXQoKVxyXG5UZW1wbGF0ZS5jb25kaXRpb25hbHMoKVxyXG5Td2l0Y2guaW5pdCgnLnN3aXRjaCcpXHJcblxyXG4vKipcclxuICogTcOzZHVsb3NcclxuICovXHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIFJlc3BvbnPDoXZlbCBwZWxhIHBlc3F1aXNhIGRlIGRhZG9zXHJcbiAqIGNvbmZvcm1lIG8gcGVyw61vZG8gZGUgbGV2YW50YW1lbnRvIGluZm9ybWFkbywgYmVtXHJcbiAqIGNvbW8gZXhpYmlyIG3Ds2R1bG9zIHN1YnNlcXVlbnRlcywgc2VuZG86XHJcbiAqXHJcbiAqIGBvY2N1cGF0aW9uYWwtZXhhbXMtdGFibGVgOiB0YWJlbGEgZGUgRXhhbWVzIE9jdXBhY2lvbmFpc1xyXG4gKiBgYWN0aW9ucy10YWJsZWA6IHRhYmVsYSBkZSBBY29tcGFuaGFtZW50byBkZSBQbGFubyBkZSBBw6fDo29cclxuICogYHJlY29tbWVuZGF0aW9ucy10YWJsZWA6IHRhYmVsYSBkZSBSZWNvbWVuZGHDp8O1ZXNcclxuICovXHJcbkV4YW1zU2VhcmNoLmluaXQoKVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBSZXNwb25zw6F2ZWwgcGVsYXMgb3DDp8O1ZXMgZGUgZW52aW8gZG9cclxuICogcmVsYXTDs3JpbyBnZXJhZG8gdmlhIHRlbXBsYXRlLlxyXG4gKi9cclxuU2VuZE9wdGlvbnMuaW5pdCgpXHJcbiIsImZ1bmN0aW9uIG1vdW50IChidG5SYWRpb1dyYXBwZXIsIGhpZGVQcmVmaXgpIHtcclxuICBjb25zdCBzZWxlY3QgPSBidG5SYWRpb1dyYXBwZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcclxuICBjb25zdCBoYXNCdG5Hcm91cE1hcmt1cCA9IGJ0blJhZGlvV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuYnRuLWdyb3VwJylcclxuXHJcbiAgaWYgKCFoYXNCdG5Hcm91cE1hcmt1cCkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IGdldE9wdGlvbnMoc2VsZWN0LCBoaWRlUHJlZml4KVxyXG4gICAgY29uc3QgYnRuR3JvdXAgPSBjcmVhdGVCdXR0b25Hcm91cChvcHRpb25zKVxyXG5cclxuICAgIHNlbGVjdC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgYnRuR3JvdXApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlc2V0KGJ0blJhZGlvV3JhcHBlcilcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZS5hcHBseShzZWxlY3QpXHJcbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcclxuXHJcbiAgYnRuUmFkaW9XcmFwcGVyXHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yYWRpbycpXHJcbiAgICAuZm9yRWFjaChidG4gPT4gc2V0VHJpZ2dlcnMoYnRuKSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VHJpZ2dlcnMgKGJ0bikge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDbGljayAoKSB7XHJcbiAgY29uc3Qgb3B0aW9uVmFsdWUgPSB0aGlzLmRhdGFzZXQub3B0aW9uXHJcbiAgY29uc3QgYnRuUmFkaW9XcmFwcGVyID0gdGhpcy5jbG9zZXN0KCcuYnRuLXJhZGlvLXdyYXBwZXInKVxyXG4gIGNvbnN0IHNlbGVjdCA9IGJ0blJhZGlvV3JhcHBlci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxyXG5cclxuICByZXNldChidG5SYWRpb1dyYXBwZXIpXHJcbiAgdGhpcy5jbGFzc0xpc3QuYWRkKCctYWN0aXZlJylcclxuICBzZWxlY3QudmFsdWUgPSBvcHRpb25WYWx1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2UgKCkge1xyXG4gIGNvbnN0IGJ0blJhZGlvV3JhcHBlciA9IHRoaXMuY2xvc2VzdCgnLmJ0bi1yYWRpby13cmFwcGVyJylcclxuXHJcbiAgaWYgKHRoaXMudmFsdWUgPT09ICcnKSB7XHJcbiAgICByZXR1cm4gcmVzZXQoYnRuUmFkaW9XcmFwcGVyKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYnRuUmFkaW8gPSBidG5SYWRpb1dyYXBwZXJcclxuICAgIC5xdWVyeVNlbGVjdG9yKGAuYnRuLXJhZGlvW2RhdGEtb3B0aW9uPScke3RoaXMudmFsdWV9J11gKVxyXG5cclxuICBoYW5kbGVDbGljay5hcHBseShidG5SYWRpbylcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRTdGF0ZSAoYnRuKSB7XHJcbiAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJy1hY3RpdmUnKVxyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyc1xyXG4gKi9cclxuY29uc3QgZ2V0T3B0aW9ucyA9IChzZWxlY3QsIGhpZGVQcmVmaXgpID0+XHJcbiAgWy4uLnNlbGVjdC5vcHRpb25zXVxyXG4gICAgLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnZhbHVlKVxyXG4gICAgLm1hcChvcHRpb24gPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbi52YWx1ZVxyXG4gICAgICBjb25zdCBsYWJlbCA9IGhpZGVQcmVmaXhcclxuICAgICAgICA/IHZhbHVlLnN1YnN0cmluZygyKVxyXG4gICAgICAgIDogdmFsdWVcclxuXHJcbiAgICAgIHJldHVybiB7IHZhbHVlLCBsYWJlbCB9XHJcbiAgICB9KVxyXG5cclxuY29uc3QgY3JlYXRlQnV0dG9uR3JvdXAgPSBvcHRpb25zID0+IHtcclxuICBjb25zdCBidXR0b25zID0gb3B0aW9ucy5tYXAob3B0aW9uID0+IGNyZWF0ZUJ1dHRvbihvcHRpb24pKVxyXG4gIHJldHVybiBgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPiR7YnV0dG9ucy5qb2luKCcnKX08L2Rpdj5gXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICh7IHZhbHVlLCBsYWJlbCB9KSA9PlxyXG4gIGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcmFkaW9cIiBkYXRhLW9wdGlvbj1cIiR7dmFsdWV9XCI+JHtsYWJlbH08L2J1dHRvbj5gXHJcblxyXG4vKipcclxuICogUHVibGljIEFQSVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdCAoYnRuUmFkaW9XcmFwcGVyU2VsZWN0b3IsIGhpZGVQcmVmaXggPSBmYWxzZSwgY29udGV4dCA9IGRvY3VtZW50KSB7XHJcbiAgY29udGV4dFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYnRuUmFkaW9XcmFwcGVyU2VsZWN0b3IpXHJcbiAgICAuZm9yRWFjaChidG5SYWRpb1dyYXBwZXIgPT4gbW91bnQoYnRuUmFkaW9XcmFwcGVyLCBoaWRlUHJlZml4KSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXQgKGJ0blJhZGlvV3JhcHBlcikge1xyXG4gIGJ0blJhZGlvV3JhcHBlclxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmFkaW8nKVxyXG4gICAgLmZvckVhY2goYnRuID0+IHJlc2V0U3RhdGUoYnRuKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzdHJveSAoYnRuUmFkaW9XcmFwcGVyKSB7XHJcbiAgYnRuUmFkaW9XcmFwcGVyXHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yYWRpbycpXHJcbiAgICAuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljaylcclxuICAgICAgcmVzZXRTdGF0ZShidG4pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaW5pdCxcclxuICByZXNldCxcclxuICBkZXN0cm95XHJcbn1cclxuIiwiZnVuY3Rpb24gbW91bnQgKGNvbnRhaW5lciwgZGF0ZXBpY2tlck9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IGlucHV0cyA9ICQoY29udGFpbmVyKS5maW5kKCdbeG5hbWVdJylcclxuICBjb25zdCBsYWJlbHMgPSAkKGNvbnRhaW5lcikuZmluZCgnW3hpZF0nKVxyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbGFuZ3VhZ2U6ICdwdC1CUicsXHJcbiAgICBpbnB1dHMsXHJcbiAgICAuLi5kYXRlcGlja2VyT3B0aW9uc1xyXG4gIH1cclxuXHJcbiAgaWYgKGxhYmVscy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnLXJlYWRvbmx5JylcclxuICB9XHJcblxyXG4gIGlmIChpbnB1dHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcihgW0RhdGVwaWNrZXJSYW5nZV0gT3JxdWVzdHJhIGlucHV0cyBub3QgZm91bmQgaW5zaWRlICR7Y29udGFpbmVyfWApXHJcbiAgfVxyXG5cclxuICBpbnB1dHMuYXR0cignYXV0b2NvbXBsZXRlJywgJ29mZicpXHJcbiAgJChjb250YWluZXIpLmRhdGVwaWNrZXIob3B0aW9ucylcclxufVxyXG5cclxuLyoqXHJcbiAqIFB1YmxpYyBBUElcclxuICovXHJcbmZ1bmN0aW9uIGluaXQgKGNvbnRhaW5lckVsZW1lbnRTZWxlY3RvciwgZGF0ZXBpY2tlck9wdGlvbnMsIGNvbnRleHQgPSBkb2N1bWVudCkge1xyXG4gIGNvbnRleHRcclxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKGNvbnRhaW5lckVsZW1lbnRTZWxlY3RvcilcclxuICAgIC5mb3JFYWNoKGNvbnRhaW5lciA9PiBtb3VudChjb250YWluZXIsIGRhdGVwaWNrZXJPcHRpb25zKSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGluaXRcclxufVxyXG4iLCJmdW5jdGlvbiBtb3VudCAoZ3JvdXAsIGNvbnRleHQpIHtcclxuICBjb25zdCBlbGVtZW50ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yKGdyb3VwLmVsZW1lbnQpXHJcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZ3JvdXAuZXJyb3JNZXNzYWdlXHJcblxyXG4gIGlmICghZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoYFtGb3JtIFZhbGlkYXRpb25dIGVsZW1lbnQgbm90IGZvdW5kIGZvciBzZWxlY3RvcjogJHtncm91cC5lbGVtZW50fWApXHJcbiAgfVxyXG5cclxuICBzZXRUcmlnZ2VycyhlbGVtZW50LCBlcnJvck1lc3NhZ2UpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRyaWdnZXJzIChlbGVtZW50LCBlcnJvck1lc3NhZ2UpIHtcclxuICAvLyBVdGlsaXphZG8galF1ZXJ5IHBhcmEgY29ycmlnaXIgbyBuw6NvIGRpc3Bhcm8gZGVcclxuICAvLyBldmVudG9zIGBjaGFuZ2VgIGVtIGNhbXBvcyBkbyB0aXBvIGBkYXRhYCBkbyBPcnF1ZXN0cmFcclxuICAvLyBxdWUgZmF6ZW0gdXNvIGRvIGNvbXBvbmVudGUgQm9vdHN0cmFwIERhdGVwaWNrZXIuXHJcbiAgJChlbGVtZW50KS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGhhbmRsZUNoYW5nZS5jYWxsKHRoaXMsIGUsIGVycm9yTWVzc2FnZSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2UgKGUsIGVycm9yTWVzc2FnZSkge1xyXG4gIHZhbGlkYXRlRmllbGQodGhpcywgZXJyb3JNZXNzYWdlKVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZpZWxkIChmaWVsZCwgZXJyb3JNZXNzYWdlLCBzaWxlbnQpIHtcclxuICBpZiAoZmllbGQudmFsdWUgPT09ICcnKSB7XHJcbiAgICBpZiAoIXNpbGVudCkgYWRkRXJyb3IoZmllbGQsIGVycm9yTWVzc2FnZSlcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghc2lsZW50KSByZW1vdmVFcnJvcihmaWVsZClcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtIChncm91cHMsIHNpbGVudCwgY29udGV4dCkge1xyXG4gIGxldCBoYXNFcnJvcnMgPSBmYWxzZVxyXG5cclxuICBjb25zdCByZXN1bHQgPSBncm91cHMubWFwKGdyb3VwID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3IoZ3JvdXAuZWxlbWVudClcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGdyb3VwLmVycm9yTWVzc2FnZVxyXG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IHtcclxuICAgICAgcmVzdWx0OiB2YWxpZGF0ZUZpZWxkKGVsZW1lbnQsIGVycm9yTWVzc2FnZSwgc2lsZW50KSxcclxuICAgICAgZXJyb3I6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXZhbGlkYXRpb24ucmVzdWx0KSB7XHJcbiAgICAgIHJldHVybiB2YWxpZGF0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgaGFzRXJyb3JzID0gdHJ1ZVxyXG4gICAgdmFsaWRhdGlvbi5lcnJvciA9IGVycm9yTWVzc2FnZVxyXG5cclxuICAgIHJldHVybiB2YWxpZGF0aW9uXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZXJyb3JzID0gcmVzdWx0LmZpbHRlcigoeyBlcnJvciB9KSA9PiBlcnJvciAhPT0gbnVsbClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGhhc0Vycm9ycyxcclxuICAgIGVycm9yc1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZ2V0Rm9ybUhlbHBFbGVtZW50ID0gbWVzc2FnZSA9PlxyXG4gIGA8cCBjbGFzcz1cImZvcm0taGVscFwiPiR7bWVzc2FnZX08L3A+YFxyXG5cclxuLyoqXHJcbiAqIFB1YmxpYyBBUElcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdGlvbiB7XHJcbiAgY29uc3RydWN0b3IgKGNvbmZpZywgY29udGV4dCA9IGRvY3VtZW50KSB7XHJcbiAgICB0aGlzLmdyb3VwcyA9IGNvbmZpZ1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShjb25maWcpKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbRm9ybSBWYWxpZGF0aW9uXSBjb25maWcgcGFyYW1ldGVyIG11c3QgYnkgYSBhcnJheSB3aXRoIGEgZWxlbWVudCBzZWxlY3RvciwgZXJyb3IgbWVzc2FnZSBhbmQgY2FsbGJhY2sgKG9wdGlvbmFsKScpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiBtb3VudChncm91cCwgY29udGV4dCkpXHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZSAoc2lsZW50ID0gZmFsc2UpIHtcclxuICAgIHJldHVybiB2YWxpZGF0ZUZvcm0odGhpcy5ncm91cHMsIHNpbGVudCwgdGhpcy5jb250ZXh0KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEVycm9yIChlbGVtZW50LCBlcnJvck1lc3NhZ2UpIHtcclxuICBjb25zdCBmb3JtR3JvdXAgPSBlbGVtZW50LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJylcclxuXHJcbiAgaWYgKCFmb3JtR3JvdXApIHtcclxuICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbRm9ybSBWYWxpZGF0aW9uXSB0aGUgZWxlbWVudCBtdXN0IGJlIGluc2lkZSBhIC5mb3JtLWdyb3VwIGNvbnRhaW5lcicpXHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtSGVscCA9IGZvcm1Hcm91cC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1oZWxwJylcclxuXHJcbiAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJy1lcnJvcicpXHJcblxyXG4gIGlmICghZm9ybUhlbHApIHtcclxuICAgIGNvbnN0IGZvcm1IZWxwID0gZ2V0Rm9ybUhlbHBFbGVtZW50KGVycm9yTWVzc2FnZSlcclxuICAgIGZvcm1Hcm91cC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGZvcm1IZWxwKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3JtSGVscC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVycm9yIChlbGVtZW50KSB7XHJcbiAgY29uc3QgZm9ybUdyb3VwID0gZWxlbWVudC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpXHJcbiAgY29uc3QgZm9ybUhlbHAgPSBmb3JtR3JvdXAucXVlcnlTZWxlY3RvcignLmZvcm0taGVscCcpXHJcblxyXG4gIGlmICghZm9ybUdyb3VwKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcignW0Zvcm0gVmFsaWRhdGlvbl0gdGhlIGVsZW1lbnQgbXVzdCBiZSBpbnNpZGUgYSAuZm9ybS1ncm91cCBjb250YWluZXInKVxyXG4gIH1cclxuXHJcbiAgaWYgKGZvcm1IZWxwKSB7XHJcbiAgICBmb3JtSGVscC5yZW1vdmUoKVxyXG4gIH1cclxuXHJcbiAgZm9ybUdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJy1lcnJvcicpXHJcbn1cclxuIiwiZnVuY3Rpb24gbW91bnQgKHN3aXRjaEVsKSB7XHJcbiAgY29uc3QgbGFiZWwgPSBzd2l0Y2hFbC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpXHJcbiAgY29uc3QgbWFya2VyID0gZ2V0U3dpdGNoTWFya2VyKClcclxuXHJcbiAgaWYgKCFsYWJlbCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBsYWJlbC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1hcmtlcilcclxufVxyXG5cclxuY29uc3QgZ2V0U3dpdGNoTWFya2VyID0gKCkgPT5cclxuICAnPGRpdiBjbGFzcz1cInN3aXRjaC1tYXJrZXJcIj48L2Rpdj4nXHJcblxyXG4vKipcclxuICogUHVibGljIEFQSVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdCAoc3dpdGNoRWxlbWVudFNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQpIHtcclxuICBjb250ZXh0XHJcbiAgICAucXVlcnlTZWxlY3RvckFsbChzd2l0Y2hFbGVtZW50U2VsZWN0b3IpXHJcbiAgICAuZm9yRWFjaChzd2l0Y2hFbCA9PiBtb3VudChzd2l0Y2hFbCkpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBpbml0XHJcbn1cclxuIiwiZnVuY3Rpb24gbW91bnQgKHRhYmxlKSB7XHJcbiAgdGFibGVcclxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGUtY29sbGFwc2UtaGVhZGVyIHRoOmZpcnN0LWNoaWxkJylcclxuICAgIC5mb3JFYWNoKHRhYmxlR3JvdXBUaXRsZSA9PiBzZXRUcmlnZ2Vycyh0YWJsZUdyb3VwVGl0bGUpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUcmlnZ2VycyAodGFibGVHcm91cFRpdGxlKSB7XHJcbiAgdGFibGVHcm91cFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrICgpIHtcclxuICBjb25zdCB0YWJsZUdyb3VwSGVhZGVyID0gdGhpcy5jbG9zZXN0KCcudGFibGUtY29sbGFwc2UtaGVhZGVyJylcclxuXHJcbiAgaWYgKCF0YWJsZUdyb3VwSGVhZGVyKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcignW1RhYmxlIENvbGxhcHNlXSAudGFibGUtY29sbGFwc2UtaGVhZGVyIG5vdCBmb3VuZCwgbXVzdCBoYXZlIGEgcGFyZW50IC50YWJsZS1jb2xsYXBzZS1oZWFkZXInKVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlR3JvdXAodGFibGVHcm91cEhlYWRlcilcclxufVxyXG5cclxuLyoqXHJcbiAqIFB1YmxpYyBBUElcclxuICovXHJcbmZ1bmN0aW9uIGluaXQgKHRhYmxlRWxlbWVudFNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQpIHtcclxuICBjb250ZXh0XHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCh0YWJsZUVsZW1lbnRTZWxlY3RvcilcclxuICAgIC5mb3JFYWNoKHRhYmxlID0+IG1vdW50KHRhYmxlKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZXhwYW5kICh0YWJsZSkge1xyXG4gIHRhYmxlXHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlLWNvbGxhcHNlLWhlYWRlcicpXHJcbiAgICAuZm9yRWFjaCh0YWJsZUdyb3VwSGVhZGVyID0+IHNob3dHcm91cCh0YWJsZUdyb3VwSGVhZGVyKSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2hyaW5rICh0YWJsZSkge1xyXG4gIHRhYmxlXHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlLWNvbGxhcHNlLWhlYWRlcicpXHJcbiAgICAuZm9yRWFjaCh0YWJsZUdyb3VwSGVhZGVyID0+IGhpZGVHcm91cCh0YWJsZUdyb3VwSGVhZGVyKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzdHJveSAodGFibGUpIHtcclxuICBleHBhbmQodGFibGUpXHJcblxyXG4gIHRhYmxlXHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlLWNvbGxhcHNlLWhlYWRlciB0aDpmaXJzdC1jaGlsZCcpXHJcbiAgICAuZm9yRWFjaCh0YWJsZUdyb3VwVGl0bGUgPT4ge1xyXG4gICAgICB0YWJsZUdyb3VwVGl0bGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljaylcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUdyb3VwICh0YWJsZUdyb3VwSGVhZGVyKSB7XHJcbiAgdGFibGVHcm91cEhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCctY29sbGFwc2UnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93R3JvdXAgKHRhYmxlR3JvdXBIZWFkZXIpIHtcclxuICB0YWJsZUdyb3VwSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJy1jb2xsYXBzZScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVHcm91cCAodGFibGVHcm91cEhlYWRlcikge1xyXG4gIHRhYmxlR3JvdXBIZWFkZXIuY2xhc3NMaXN0LmFkZCgnLWNvbGxhcHNlJylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGluaXQsXHJcbiAgZXhwYW5kLFxyXG4gIHNocmluayxcclxuICBkZXN0cm95LFxyXG4gIHRvZ2dsZUdyb3VwLFxyXG4gIHNob3dHcm91cCxcclxuICBoaWRlR3JvdXAsXHJcbiAgLyoqXHJcbiAgICogYC5ncm91cGAgYWxpYXNlc1xyXG4gICAqL1xyXG4gIGdyb3VwOiB7XHJcbiAgICB0b2dnbGU6IHRvZ2dsZUdyb3VwLFxyXG4gICAgc2hvdzogc2hvd0dyb3VwLFxyXG4gICAgaGlkZTogaGlkZUdyb3VwXHJcbiAgfVxyXG59XHJcbiIsImZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzICh0YWJsZUluc3RhbmNlKSB7XHJcbiAgdGFibGVJbnN0YW5jZS5idG5JbnNlcnQub25jbGljayA9ICcnXHJcbiAgdGFibGVJbnN0YW5jZS5idG5JbnNlcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBJbnNlcnROZXdSb3cpXHJcbiAgdGFibGVJbnN0YW5jZS5idG5JbnNlcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaGFuZGVDbGljay5jYWxsKHRoaXMsIGUsIHRhYmxlSW5zdGFuY2UpXHJcbiAgfSlcclxuXHJcbiAgdGFibGVJbnN0YW5jZVxyXG4gICAgLnJvd3MoKVxyXG4gICAgLmZvckVhY2gocm93ID0+IHJlZ2lzdGVyUm93RXZlbnRzKHRhYmxlSW5zdGFuY2UsIHJvdykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyUm93RXZlbnRzICh0YWJsZUluc3RhbmNlLCByb3cpIHtcclxuICBjb25zdCBidG5EZWxldGUgPSByb3cucXVlcnlTZWxlY3RvcignLmJ0bi1kZWxldGUtbXYnKVxyXG5cclxuICBidG5EZWxldGUub25jbGljayA9ICcnXHJcbiAgYnRuRGVsZXRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGVsZXRlUm93KVxyXG4gIGJ0bkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBoYW5kbGVSZW1vdmUuY2FsbCh0aGlzLCBlLCB0YWJsZUluc3RhbmNlKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2ZW50Q29uZmlnICh0YWJsZUluc3RhbmNlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICBkZXRhaWw6IHtcclxuICAgICAgdGFibGU6IHRhYmxlSW5zdGFuY2UudGFibGUsXHJcbiAgICAgIGxlbmd0aDogZ2V0VGFibGVSb3dzTGVuZ3RoKHRhYmxlSW5zdGFuY2UudGFibGUpLFxyXG4gICAgICBsYXN0Um93OiBnZXRMYXN0Um93KHRhYmxlSW5zdGFuY2UudGFibGUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kZUNsaWNrIChlLCB0YWJsZUluc3RhbmNlKSB7XHJcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KFxyXG4gICAgbmV3IEN1c3RvbUV2ZW50KCdiZWZvcmVJbnNlcnQnLCBnZXRFdmVudENvbmZpZyh0YWJsZUluc3RhbmNlKSlcclxuICApXHJcblxyXG4gIEluc2VydE5ld1Jvdyh0aGlzLCB0cnVlKVxyXG5cclxuICBjb25zdCBuZXdlc3RSb3cgPSBnZXRMYXN0Um93KHRhYmxlSW5zdGFuY2UudGFibGUpXHJcblxyXG4gIHJlZ2lzdGVyUm93RXZlbnRzKHRhYmxlSW5zdGFuY2UsIG5ld2VzdFJvdylcclxuXHJcbiAgaWYgKHRhYmxlSW5zdGFuY2Uub25Nb3VudCkge1xyXG4gICAgdGFibGVJbnN0YW5jZS5vbk1vdW50KG5ld2VzdFJvdylcclxuICB9XHJcblxyXG4gIHRoaXMuZGlzcGF0Y2hFdmVudChcclxuICAgIG5ldyBDdXN0b21FdmVudCgnYWZ0ZXJJbnNlcnQnLCBnZXRFdmVudENvbmZpZyh0YWJsZUluc3RhbmNlKSlcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVJlbW92ZSAoZSwgdGFibGVJbnN0YW5jZSkge1xyXG4gIGNvbnN0IGV2ZW50Q29uZmlnID0gZ2V0RXZlbnRDb25maWcodGFibGVJbnN0YW5jZSlcclxuICBldmVudENvbmZpZy5kZXRhaWwuZGVsZXRlZFJvdyA9IHRoaXMuY2xvc2VzdCgndHInKVxyXG5cclxuICAvLyBjaGFtYW5kbyBvIGV2ZW50byBkaXJldGFtZW50ZSBuYSA8dGFibGU+XHJcbiAgdGFibGVJbnN0YW5jZS50YWJsZS5kaXNwYXRjaEV2ZW50KFxyXG4gICAgbmV3IEN1c3RvbUV2ZW50KCdiZWZvcmVEZWxldGUnLCBldmVudENvbmZpZylcclxuICApXHJcblxyXG4gIERlbGV0ZVJvdyh0aGlzKVxyXG5cclxuICB0YWJsZUluc3RhbmNlLnRhYmxlLmRpc3BhdGNoRXZlbnQoXHJcbiAgICBuZXcgQ3VzdG9tRXZlbnQoJ2FmdGVyRGVsZXRlJywgZXZlbnRDb25maWcpXHJcbiAgKVxyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyc1xyXG4gKi9cclxuY29uc3QgZ2V0Um93cyA9IHRhYmxlID0+XHJcbiAgdGFibGUucXVlcnlTZWxlY3RvckFsbCgndHI6bm90KC5oZWFkZXIpJylcclxuXHJcbmNvbnN0IGdldExhc3RSb3cgPSB0YWJsZSA9PlxyXG4gIHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3RyOmxhc3QtY2hpbGQnKVxyXG5cclxuY29uc3QgZ2V0VGFibGVSb3dzTGVuZ3RoID0gdGFibGUgPT5cclxuICBnZXRSb3dzKHRhYmxlKS5sZW5ndGhcclxuXHJcbi8qKlxyXG4gKiBQdWJsaWMgQ29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUYWJsZU11bHRpdmFsdWUge1xyXG4gIGNvbnN0cnVjdG9yICh0YWJsZUVsZW1lbnRTZWxlY3Rvciwgb25Nb3VudCwgY29udGV4dCA9IGRvY3VtZW50KSB7XHJcbiAgICB0aGlzLnRhYmxlID0gY29udGV4dC5xdWVyeVNlbGVjdG9yKHRhYmxlRWxlbWVudFNlbGVjdG9yKVxyXG4gICAgdGhpcy5vbk1vdW50ID0gb25Nb3VudFxyXG5cclxuICAgIGlmICghdGhpcy50YWJsZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBbVGFibGUgTXVsdGl2YWx1ZV0gdGFibGUgbm90IGZvdW5kIGZvciB0aGUgZm9sbG93aW5nIHNlbGVjdG9yOiAke3RhYmxlRWxlbWVudFNlbGVjdG9yfWApXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub25Nb3VudCkge1xyXG4gICAgICB0aGlzLnRhYmxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyOm5vdCguaGVhZGVyKScpXHJcbiAgICAgICAgLmZvckVhY2gocm93ID0+IHRoaXMub25Nb3VudChyb3cpKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYnRuSW5zZXJ0ID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCcjQnRuSW5zZXJ0TmV3Um93JylcclxuICAgIHJlZ2lzdGVyRXZlbnRzKHRoaXMpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgKCkge1xyXG4gICAgdGhpcy50YWJsZS5jbGFzc0xpc3QuYWRkKCctc3RhdGljJylcclxuICB9XHJcblxyXG4gIGFjdGl2ZSAoKSB7XHJcbiAgICB0aGlzLnRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJy1zdGF0aWMnKVxyXG4gIH1cclxuXHJcbiAgcmVzZXQgKCkge1xyXG4gICAgdGhpcy5idG5JbnNlcnQuY2xpY2soKVxyXG4gICAgdGhpcy50YWJsZVxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgndHI6bm90KC5oZWFkZXIpOm5vdCg6bGFzdC1jaGlsZCcpXHJcbiAgICAgIC5mb3JFYWNoKHJvdyA9PiByb3cucmVtb3ZlKCkpXHJcbiAgfVxyXG5cclxuICBvbiAoZXZlbnROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy50YWJsZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spXHJcbiAgfVxyXG5cclxuICByb3dzICgpIHtcclxuICAgIHJldHVybiBnZXRSb3dzKHRoaXMudGFibGUpXHJcbiAgfVxyXG5cclxuICBsYXN0Um93ICgpIHtcclxuICAgIHJldHVybiBnZXRMYXN0Um93KHRoaXMudGFibGUpXHJcbiAgfVxyXG5cclxuICBsZW5ndGggKCkge1xyXG4gICAgcmV0dXJuIGdldFRhYmxlUm93c0xlbmd0aCh0aGlzLnRhYmxlKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEB0b2RvIGltcGxlbWVudGFyIHVzYW5kbyBwYXLDom1ldHJvcyB0YW1iw6ltLi4uXHJcbiAqIGNvbG9jYXIgYXMgZnVuw6fDtWVzIGF1eGlsaWFyZXMgZGVudHJvIGRlIHVtIG5hbWVzcGFjZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50VGFibGVzICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbXVsdD1TXScpXHJcbiAgICAuZm9yRWFjaCh0YWJsZSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGFibGUucXVlcnlTZWxlY3RvcignI0J0bkluc2VydE5ld1JvdycpXHJcblxyXG4gICAgICBpZiAoIWlzQWN0aXZlKSB7XHJcbiAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgnLXJlYWRvbmx5JylcclxuICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZERhdGEgKHRhYmxlLCBkYXRhLCBhZGRGaXJzdFJvdyA9IGZhbHNlKSB7XHJcbiAgZGF0YS5mb3JFYWNoKChmaWVsZCwgcm93SW5kZXgpID0+IHtcclxuICAgIGlmIChhZGRGaXJzdFJvdyB8fCByb3dJbmRleCA+IDApIHtcclxuICAgICAgdGFibGUucXVlcnlTZWxlY3RvcignI0J0bkluc2VydE5ld1JvdycpLmNsaWNrKClcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZW50cmllcyhmaWVsZCkuZm9yRWFjaCgoW2lkLCB2YWx1ZV0pID0+IHtcclxuICAgICAgY29uc3QgbGFzdFJvdyA9IGdldExhc3RSb3codGFibGUpXHJcbiAgICAgIGNvbnN0IGZpZWxkID0gbGFzdFJvdy5xdWVyeVNlbGVjdG9yKGBbeG5hbWU9aW5wJHtpZH1dYClcclxuXHJcbiAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWVcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcbiIsImZ1bmN0aW9uIG1vdW50ICh0YWJzKSB7XHJcbiAgY29uc3QgdGFiUGFuZXMgPSB0YWJzLm5leHRFbGVtZW50U2libGluZ1xyXG4gIGNvbnN0IGhhc1BhbmVzID0gdGFiUGFuZXMuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWItcGFuZXMnKVxyXG5cclxuICBpZiAoIWhhc1BhbmVzKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcignW1RhYnMgQ29tcG9uZW50XSAudGFiLXBhbmVzIG5vdCBmb3VuZCwgbXVzdCBiZSB1c2VkIG5leHQgdG8gLnRhYnMgZWxlbWVudCcpXHJcbiAgfVxyXG5cclxuICB0YWJzXHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpXHJcbiAgICAuZm9yRWFjaCh0YWIgPT4gc2V0VHJpZ2dlcnModGFiKSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VHJpZ2dlcnMgKHRhYikge1xyXG4gIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDbGljayAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICBjb25zdCB0YWJEYXRhUmVmID0gdGhpcy5kYXRhc2V0LnRhYlxyXG4gIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJy1hY3RpdmUnKVxyXG4gIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnLWRpc2FibGVkJylcclxuICBjb25zdCB0YWJQYW5lID0gdGhpc1xyXG4gICAgLmNsb3Nlc3QoJy50YWJzJylcclxuICAgIC5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgIC5xdWVyeVNlbGVjdG9yKGAudGFiLXBhbmVbZGF0YS10YWI9XCIke3RhYkRhdGFSZWZ9XCJdYClcclxuXHJcbiAgaWYgKCF0YWJQYW5lKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcihgW1RhYnMgQ29tcG9uZW50XSBlbGVtZW50IG5vdCBmb3VuZCBmb3IgZGF0YS10YWIgJHt0YWJEYXRhUmVmfWApXHJcbiAgfVxyXG5cclxuICBpZiAoaXNBY3RpdmUgfHwgaXNEaXNhYmxlZCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBzaG93VGFiKHRoaXMpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXJzXHJcbiAqL1xyXG5jb25zdCBnZXRUYWJQYW5lID0gdGFiID0+XHJcbiAgdGFiXHJcbiAgICAuY2xvc2VzdCgnLnRhYnMnKVxyXG4gICAgLm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYC50YWItcGFuZVtkYXRhLXRhYj1cIiR7dGFiLmRhdGFzZXQudGFifVwiXWApXHJcblxyXG4vKipcclxuICogUHVibGljIEFQSVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdCAodGFic0VsZW1lbnRTZWxlY3RvciwgY29udGV4dCA9IGRvY3VtZW50KSB7XHJcbiAgY29udGV4dFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwodGFic0VsZW1lbnRTZWxlY3RvcilcclxuICAgIC5mb3JFYWNoKHRhYnMgPT4gbW91bnQodGFicykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0ICh0YWJzKSB7XHJcbiAgdGFic1xyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKVxyXG4gICAgLmZvckVhY2godGFiID0+IGhpZGVUYWIodGFiKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzdHJveSAodGFicykge1xyXG4gIHRhYnNcclxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJylcclxuICAgIC5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgIHRhYi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKVxyXG4gICAgICBoaWRlVGFiKHRhYilcclxuICAgICAgZGlzYWJsZWRUYWIodGFiKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1RhYiAodGFiKSB7XHJcbiAgY29uc3QgdGFiUGFuZWwgPSBnZXRUYWJQYW5lKHRhYilcclxuICBjb25zdCB0YWJzID0gdGFiLmNsb3Nlc3QoJy50YWJzJylcclxuXHJcbiAgcmVzZXQodGFicylcclxuXHJcbiAgdGFiLmNsYXNzTGlzdC5hZGQoJy1hY3RpdmUnKVxyXG4gIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCctcHVsc2UnKVxyXG4gIHRhYlBhbmVsLmNsYXNzTGlzdC5hZGQoJy1hY3RpdmUnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVGFiICh0YWIpIHtcclxuICBjb25zdCB0YWJQYW5lID0gZ2V0VGFiUGFuZSh0YWIpXHJcblxyXG4gIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCctYWN0aXZlJylcclxuICB0YWJQYW5lLmNsYXNzTGlzdC5yZW1vdmUoJy1hY3RpdmUnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVUYWIgKHRhYikge1xyXG4gIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCctZGlzYWJsZWQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwdWxzZVRhYiAodGFiKSB7XHJcbiAgdGFiLmNsYXNzTGlzdC5hZGQoJy1wdWxzZScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc2FibGVkVGFiICh0YWIpIHtcclxuICBjb25zdCB0YWJQYW5lID0gZ2V0VGFiUGFuZSh0YWIpXHJcblxyXG4gIHRhYi5jbGFzc0xpc3QuYWRkKCctZGlzYWJsZWQnKVxyXG4gIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCctYWN0aXZlJylcclxuICB0YWJQYW5lLmNsYXNzTGlzdC5yZW1vdmUoJy1hY3RpdmUnKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaW5pdCxcclxuICByZXNldCxcclxuICBkZXN0cm95LFxyXG4gIHNob3dUYWIsXHJcbiAgaGlkZVRhYixcclxuICBlbmFibGVUYWIsXHJcbiAgcHVsc2VUYWIsXHJcbiAgZGlzYWJsZWRUYWIsXHJcbiAgLyoqXHJcbiAgICogYC50YWJgIGFsaWFzZXNcclxuICAgKi9cclxuICB0YWI6IHtcclxuICAgIHNob3c6IHNob3dUYWIsXHJcbiAgICBoaWRlOiBoaWRlVGFiLFxyXG4gICAgZW5hYmxlOiBlbmFibGVUYWIsXHJcbiAgICBwdWxzZTogcHVsc2VUYWIsXHJcbiAgICBkaXNhYmxlZDogZGlzYWJsZWRUYWJcclxuICB9XHJcbn1cclxuIiwiZnVuY3Rpb24gc2V0VHJpZ2dlcnMgKGZpZWxkLCBkYXRhKSB7XHJcbiAgLy8gV29ya2Fyb3VuZCBwYXJhIG7Do28gb2JzZXJ2w6JuY2lhIGRvIGV2ZW50byBgY2hhbmdlYCBlbSBjYW1wb3MgZG8gdGlwbyBgZGF0YWAgZG8gT3JxdWVzdHJhLlxyXG4gIC8vIEVzdGVzIGZhemVtIHVzbyBkbyBwbHVnaW4gYEJvb3RzdHJhcCBEYXRlcGlja2VyYCwgbyBxdWFsIHJlc3RyaW5nZSBvIGV2ZW50byBjaGFuZ2UgbmF0aXZvXHJcbiAgJChmaWVsZCkub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBoYW5kbGVDaGFuZ2UoZSwgZmllbGQsIGRhdGEpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlIChlLCBmaWVsZCwgZGF0YSkge1xyXG4gIGNvbnN0IGlucHV0ID0gZS50YXJnZXRcclxuICBjb25zdCBuZXdWYWx1ZSA9IGlucHV0LnZhbHVlIHx8ICcnXHJcbiAgY29uc3QgaWQgPSBmaWVsZC5nZXRBdHRyaWJ1dGUoJ3huYW1lJykuc3Vic3RyaW5nKDMpXHJcbiAgY29uc3QgYmluZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1iaW5kPSR7aWR9XWApXHJcblxyXG4gIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICBpZiAoZmllbGQuY2hlY2tlZCkge1xyXG4gICAgICBkYXRhW2lkXS52YWx1ZS5wdXNoKG5ld1ZhbHVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0YVtpZF0udmFsdWUuc3BsaWNlKFxyXG4gICAgICAgIGRhdGFbaWRdLnZhbHVlLmluZGV4T2YobmV3VmFsdWUpLFxyXG4gICAgICAgIDFcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhbmRsZVVwZGF0ZShiaW5kcywgZGF0YSlcclxuICB9XHJcblxyXG4gIGlmIChmaWVsZC50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICBpZiAoZmllbGQuY2hlY2tlZCkge1xyXG4gICAgICBkYXRhW2lkXS52YWx1ZSA9IG5ld1ZhbHVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlVXBkYXRlKGJpbmRzLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtpZF0udmFsdWUpKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGlucHV0LmNsb3Nlc3QoJ3RyJykucm93SW5kZXggLSAxIC8vIGlnbm9yYSBhIDHCuiBsaW5oYSB1c2FkYSBjb21vIGNhYmXDp2FsaG9cclxuICAgIGRhdGFbaWRdLnZhbHVlW2luZGV4XSA9IG5ld1ZhbHVlXHJcbiAgfSBlbHNlIHtcclxuICAgIGRhdGFbaWRdLnZhbHVlID0gbmV3VmFsdWVcclxuICB9XHJcblxyXG4gIHJldHVybiBoYW5kbGVVcGRhdGUoYmluZHMsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZSAoYmluZHMsIGRhdGEpIHtcclxuICBiaW5kcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgdXBkYXRlKGVsZW1lbnQsIGRhdGEpXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgYWRkRmllbGQgPSB7XHJcbiAgc2luZ2xlIChmaWVsZCwgZGF0YSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBmaWVsZC52YWx1ZSB8fCAnJ1xyXG4gICAgY29uc3QgZGVmYXVsdEF0dHIgPSBnZXREZWZhdWx0QXR0cmlidXRlcyhmaWVsZClcclxuXHJcbiAgICBkYXRhW2RlZmF1bHRBdHRyLmlkXSA9IHtcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIC4uLmRlZmF1bHRBdHRyXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgY29sbGVjdGlvbiAoZmllbGQsIGRhdGEpIHtcclxuICAgIGNvbnN0IGlzSW5wdXRNdWx0aXBsZSA9IGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZmllbGQudHlwZSA9PT0gJ3JhZGlvJ1xyXG4gICAgY29uc3QgZGVmYXVsdEF0dHIgPSBnZXREZWZhdWx0QXR0cmlidXRlcyhmaWVsZClcclxuXHJcbiAgICBpZiAoIWRhdGFbZGVmYXVsdEF0dHIuaWRdKSB7XHJcbiAgICAgIGRhdGFbZGVmYXVsdEF0dHIuaWRdID0ge1xyXG4gICAgICAgIHZhbHVlOiBmaWVsZC50eXBlID09PSAncmFkaW8nXHJcbiAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgIDogW10sXHJcbiAgICAgICAgLi4uZGVmYXVsdEF0dHJcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0lucHV0TXVsdGlwbGUgJiYgIWZpZWxkLmNoZWNrZWQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgZGF0YVtkZWZhdWx0QXR0ci5pZF0udmFsdWUgPSBmaWVsZC52YWx1ZVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBkYXRhW2RlZmF1bHRBdHRyLmlkXS52YWx1ZS5wdXNoKFxyXG4gICAgICBmaWVsZC52YWx1ZSB8fCAnJ1xyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlcnNcclxuICovXHJcbmNvbnN0IGdldElnbm9yZWROb3RTZWxlY3RvciA9IGlkcyA9PlxyXG4gIGlkcy5tYXAoaWQgPT4gYDpub3QoW3huYW1lPWlucCR7aWR9XSlgKVxyXG5cclxuY29uc3QgaXNGaWVsZENvbGxlY3Rpb24gPSAoZmllbGQsIGNvbnRleHQpID0+IChcclxuICBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoYFt4bmFtZT0ke2ZpZWxkLmdldEF0dHJpYnV0ZSgneG5hbWUnKX1dYCkubGVuZ3RoID4gMSB8fFxyXG4gIGNvbnRleHQucXVlcnlTZWxlY3RvcihgW3huYW1lPSR7ZmllbGQuZ2V0QXR0cmlidXRlKCd4bmFtZScpfV1gKS50eXBlID09PSAnY2hlY2tib3gnIHx8XHJcbiAgZmllbGQuY2xvc2VzdCgndGFibGVbbXVsdD1TXScpICE9PSBudWxsXHJcbilcclxuXHJcbmNvbnN0IGdldERlZmF1bHRBdHRyaWJ1dGVzID0gZmllbGQgPT4gKHtcclxuICBpZDogZmllbGQuZ2V0QXR0cmlidXRlKCd4bmFtZScpLnN1YnN0cmluZygzKSxcclxuICBjb2RmaWVsZDogZmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJykuc3Vic3RyaW5nKDMpXHJcbn0pXHJcblxyXG4vKipcclxuICogUHVibGljIEFQSVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdCAoaWdub3JlZCA9IFtdLCBjb250ZXh0ID0gZG9jdW1lbnQpIHtcclxuICBjb25zdCBkYXRhID0ge31cclxuICBjb25zdCBpZ25vcmVkU2VsZWN0b3IgPSBnZXRJZ25vcmVkTm90U2VsZWN0b3IoaWdub3JlZClcclxuICBjb25zdCBmaWVsZHMgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoYFt4bmFtZV0ke2lnbm9yZWRTZWxlY3Rvci5qb2luKCl9YClcclxuXHJcbiAgZG9jdW1lbnQuZGF0YSA9IGRhdGFcclxuXHJcbiAgZmllbGRzXHJcbiAgICAuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIG1vdW50KGZpZWxkLCBkYXRhLCBjb250ZXh0KVxyXG4gICAgfSlcclxuXHJcbiAgaGFuZGxlVXBkYXRlKFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYmluZF0nKVxyXG4gIClcclxuXHJcbiAgZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1iaW5kXScpXHJcbiAgICAuZm9yRWFjaChlbGVtZW50ID0+IHVwZGF0ZShlbGVtZW50LCBkYXRhKSlcclxufVxyXG5cclxuZnVuY3Rpb24gbW91bnQgKGZpZWxkLCBkYXRhID0gZG9jdW1lbnQuZGF0YSwgY29udGV4dCA9IGRvY3VtZW50KSB7XHJcbiAgZmllbGQuZGF0YXNldC5pZCA9IGZpZWxkLmdldEF0dHJpYnV0ZSgneG5hbWUnKS5zdWJzdHJpbmcoMylcclxuXHJcbiAgc2V0VHJpZ2dlcnMoZmllbGQsIGRhdGEpXHJcblxyXG4gIGlzRmllbGRDb2xsZWN0aW9uKGZpZWxkLCBjb250ZXh0KVxyXG4gICAgPyBhZGRGaWVsZC5jb2xsZWN0aW9uKGZpZWxkLCBkYXRhKVxyXG4gICAgOiBhZGRGaWVsZC5zaW5nbGUoZmllbGQsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZSAoZWxlbWVudCwgZGF0YSA9IGRvY3VtZW50LmRhdGEpIHtcclxuICBjb25zdCBmaWVsZElkID0gZWxlbWVudC5kYXRhc2V0LmJpbmRcclxuXHJcbiAgaWYgKCFkYXRhW2ZpZWxkSWRdKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvbnN0IGZpZWxkVmFsdWVJbmRleCA9IGVsZW1lbnQuZGF0YXNldC5pbmRleCA9PT0gJ3tyb3d9J1xyXG4gICAgPyBlbGVtZW50LmNsb3Nlc3QoJ3RyJykucm93SW5kZXggLSAxIC8vIGlnbm9yYSBhIGxpbmhhIGRlIGNhYmXDp2FsaG9cclxuICAgIDogZWxlbWVudC5kYXRhc2V0LmluZGV4XHJcblxyXG4gIGNvbnN0IGZpZWxkVmFsdWUgPSBBcnJheS5pc0FycmF5KGRhdGFbZmllbGRJZF0udmFsdWUpXHJcbiAgICA/IGRhdGFbZmllbGRJZF0udmFsdWVbZmllbGRWYWx1ZUluZGV4XVxyXG4gICAgOiBkYXRhW2ZpZWxkSWRdLnZhbHVlXHJcblxyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnKVxyXG4gICAgPyBmaWVsZFZhbHVlLnN1YnN0cmluZygyKVxyXG4gICAgOiBmaWVsZFZhbHVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZSAoZmllbGQsIGRhdGEgPSBkb2N1bWVudC5kYXRhKSB7XHJcbiAgY29uc3QgZmllbGRJZCA9IGZpZWxkLmdldEF0dHJpYnV0ZSgneG5hbWUnKS5zdWJzdHJpbmcoMylcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtmaWVsZElkXS52YWx1ZSkpIHtcclxuICAgIC8vIHByZXZpbmUgYSByZW1vdmHDp8OjbyB0b3RhbCBkZSBjYW1wb3MgZW0gdGFiZWxhcyBtdWx0aS12YWxvcmFkYXNcclxuICAgIGlmIChkYXRhW2ZpZWxkSWRdLnZhbHVlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWVsZFZhbHVlSW5kZXggPSBmaWVsZC5jbG9zZXN0KCd0cicpLnJvd0luZGV4IC0gMSAvLyBpZ25vcmEgYSBsaW5oYSBkZSBjYWJlw6dhbGhvXHJcblxyXG4gICAgaWYgKGZpZWxkVmFsdWVJbmRleCA8IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignW1RlbXBsYXRlXSBZb3UgYXJlIHRyeWluZyB0byByZW1vdmUgYSBmaWVsZCBmcm9tIGRhdGEgdGhhdCBhbHJlYWR5IGJlZW4gZGVsZXRlZCBmcm9tIERPTScpXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YVtmaWVsZElkXS52YWx1ZS5zcGxpY2UoZmllbGRWYWx1ZUluZGV4LCAxKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBkZWxldGUgZGF0YVtmaWVsZElkXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29uZGl0aW9uYWxzIChjb250ZXh0ID0gZG9jdW1lbnQpIHtcclxuICBjb25zdCB0YXNrQWxpYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wRHNGbG93RWxlbWVudEFsaWFzJykudmFsdWVcclxuXHJcbiAgY29udGV4dFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWlmXScpXHJcbiAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudEFsaWFzID0gZWxlbWVudC5kYXRhc2V0LmlmXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXHNbXFxdXS9nLCAnJykgLy8gcmVtb3ZlIGVzcGHDp29zIGVtIGJyYW5jbyBlIGNvbGNoZXRlc1xyXG4gICAgICAgIC5zcGxpdCgnLCcpXHJcblxyXG4gICAgICBpZiAoIWN1cnJlbnRBbGlhcy5pbmNsdWRlcyh0YXNrQWxpYXMpKSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pZicpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBpbml0LFxyXG4gIG1vdW50LFxyXG4gIHVwZGF0ZSxcclxuICByZW1vdmUsXHJcbiAgY29uZGl0aW9uYWxzXHJcbn1cclxuIiwiY29uc3QgQkFTRV9IRUlHSFQgPSAzMCAvLyBkZWZhdWx0IHRleHRhcmVhIGhlaWdodDogMzBweFxyXG5cclxuZnVuY3Rpb24gbW91bnQgKHRleHRhcmVhKSB7XHJcbiAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dGFyZWEtYXV0b3NpemUnKVxyXG4gIHNldFRyaWdnZXJzKHRleHRhcmVhKVxyXG4gIHVwZGF0ZSh0ZXh0YXJlYSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VHJpZ2dlcnMgKHRleHRhcmVhKSB7XHJcbiAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzZXRIZWlnaHQpXHJcbiAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBzZXRIZWlnaHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEhlaWdodCAoKSB7XHJcbiAgdGhpcy5zdHlsZS5oZWlnaHQgPSAwXHJcblxyXG4gIGNvbnN0IGxpbmVzID0gKHRoaXMuc2Nyb2xsSGVpZ2h0ICsgMikgLyBCQVNFX0hFSUdIVFxyXG4gIGNvbnN0IHNpemUgPSBsaW5lcyAqIEJBU0VfSEVJR0hUXHJcblxyXG4gIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGBcclxufVxyXG5cclxuLyoqXHJcbiAqIFB1YmxpYyBBUElcclxuICovXHJcbmZ1bmN0aW9uIGluaXQgKHRleHRhcmVhRWxlbWVudFNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQpIHtcclxuICBjb250ZXh0XHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCh0ZXh0YXJlYUVsZW1lbnRTZWxlY3RvcilcclxuICAgIC5mb3JFYWNoKHRleHRhcmVhID0+IG1vdW50KHRleHRhcmVhKSlcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlICh0ZXh0YXJlYSkge1xyXG4gIHNldEhlaWdodC5hcHBseSh0ZXh0YXJlYSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzdHJveSAodGV4dGFyZWEpIHtcclxuICB0ZXh0YXJlYS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0YXJlYS1hdXRvc2l6ZScpXHJcbiAgdGV4dGFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzZXRIZWlnaHQpXHJcbiAgdGV4dGFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBzZXRIZWlnaHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBpbml0LFxyXG4gIHVwZGF0ZSxcclxuICBkZXN0cm95XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHN1Y2Nlc3M6IFtcclxuICAgIHtcclxuICAgICAgY29kOiAnQURSSUFOTyBET1MgU0FOVE9TIFZFTkFOQ0lPQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnQURSSUFOTyBET1MgU0FOVE9TIFZFTkFOQ0lPJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnQURSSUFOTyBGRVJSRUlSQSBEQSBTSUxWQUF0aXZvJyxcclxuICAgICAgdHh0OiAnSW5hdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdJbmF0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdBRFJJQU5PIEZFUlJFSVJBIERBIFNJTFZBJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnQUdPU1RJTkhBIE1BUklBIFJPU0EgRE9TIFNBTlRPQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdJbmF0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0luYXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0FHT1NUSU5IQSBNQVJJQSBST1NBIERPUyBTQU5UTycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ0FOREVSU09OIENBUkxPUyBTQU5UT1MgU0VOQUF0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0FOREVSU09OIENBUkxPUyBTQU5UT1MgU0VOQScsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ0FORFJFSUEgU0FOVE9TIFJFR0lTQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnQU5EUkVJQSBTQU5UT1MgUkVHSVMnLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdBUklMTUEgR09OQ0FMVkVTIERBIFNJTFZBQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnQVJJTE1BIEdPTkNBTFZFUyBEQSBTSUxWQScsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ0NJTlRJQSBTSUxWQSBDT1NUQUF0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0NJTlRJQSBTSUxWQSBDT1NUQScsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ0NSSVNUSUFORSBBTE1FSURBIFJJQkVJUk9BdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdDUklTVElBTkUgQUxNRUlEQSBSSUJFSVJPJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnREFOWUVMTFkgRE9TIFNBTlRPUyBCSVpFUlJBIERBQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnREFOWUVMTFkgRE9TIFNBTlRPUyBCSVpFUlJBIERBJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnREVPTUlSIERBIExVWiBET1MgU0FOVE9TQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnREVPTUlSIERBIExVWiBET1MgU0FOVE9TJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnREpBTE1BIERBIENPTkNFSUNBTyBCUklUT0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0RKQUxNQSBEQSBDT05DRUlDQU8gQlJJVE8nLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdFREVJTFRPTiBIT1JBIERPUyBTQU5UT1NBdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdFREVJTFRPTiBIT1JBIERPUyBTQU5UT1MnLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdFTEFJTkUgRE9TIFNBTlRPUyBTT1VaQUF0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0VMQUlORSBET1MgU0FOVE9TIFNPVVpBJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnRUxJU1ZBTERPIFNBTlRPUyBEQVMgVklSR0VOU0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0VMSVNWQUxETyBTQU5UT1MgREFTIFZJUkdFTlMnLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdFTElWQU4gRE9TIFNBTlRPUyBTT1VaQUF0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0VMSVZBTiBET1MgU0FOVE9TIFNPVVpBJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnR0VBTkUgQ09OQ0VJQ0FPIERPUyBTQU5UT1NBdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdHRUFORSBDT05DRUlDQU8gRE9TIFNBTlRPUycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ0dFUkxBTiBTSUxWQSBET1MgU0FOVE9TQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnR0VSTEFOIFNJTFZBIERPUyBTQU5UT1MnLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdHSVZBTklMRE8gU0FOVE9TIERBIENPTkNFSUNBT0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0dJVkFOSUxETyBTQU5UT1MgREEgQ09OQ0VJQ0FPJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnSUNBUk8gWkFDQVJJQVMgSk9SR0UgTUFHQUxIQUVTQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnSUNBUk8gWkFDQVJJQVMgSk9SR0UgTUFHQUxIQUVTJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnSVZBTklMRE8gQ09OQ0VJQ0FPIERPUyBTQU5UT1NBdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdJVkFOSUxETyBDT05DRUlDQU8gRE9TIFNBTlRPUycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ0laQUJFTEEgREEgQ09OQ0VJQ0FPQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnSVpBQkVMQSBEQSBDT05DRUlDQU8nLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdKQUNJQVJBIExJTk8gRE9TIFNBTlRPU0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0pBQ0lBUkEgTElOTyBET1MgU0FOVE9TJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnSkFEU09OIERFIEFTU1VOQ0FPIFNJTFZBQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnSkFEU09OIERFIEFTU1VOQ0FPIFNJTFZBJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnSkVGRVJTT04gREUgREVVUyBCT1JHRVNBdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdKRUZFUlNPTiBERSBERVVTIEJPUkdFUycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ0pPQU5BIENSSVNUSU5BIFNJTFZBIENPVVRJTkhPQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnSk9BTkEgQ1JJU1RJTkEgU0lMVkEgQ09VVElOSE8nLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdKT0FPIFZJVE9SIEpFU1VTIERPUyBTQU5UT1NBdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdKT0FPIFZJVE9SIEpFU1VTIERPUyBTQU5UT1MnLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdKT0VMSVRPTiBQQU5UQSBTQU5UQU5BQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnSk9FTElUT04gUEFOVEEgU0FOVEFOQScsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ0pPSUxTT04gU0FOVEFOQSBBU1NVTkNBT0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0pPSUxTT04gU0FOVEFOQSBBU1NVTkNBTycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ0pPU0UgUkFJTVVORE8gU0FOVE9TIFNBTyBKT1NFQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnSk9TRSBSQUlNVU5ETyBTQU5UT1MgU0FPIEpPU0UnLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdKT1NFQU5FIEdVSU1BUkFFUyBTQU5UT1NBdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdKT1NFQU5FIEdVSU1BUkFFUyBTQU5UT1MnLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdKT1NFUkxBTkRPIFNBTlRPUyBEQSBTSUxWQUF0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0pPU0VSTEFORE8gU0FOVE9TIERBIFNJTFZBJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnTFVBTkEgIFBFUkVJUkEgUklCRUlST0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0xVQU5BICBQRVJFSVJBIFJJQkVJUk8nLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdMVUNBUyBDUlVaIERBIENPTkNFSUNBT0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ0xVQ0FTIENSVVogREEgQ09OQ0VJQ0FPJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnTFVJU01BUiBERSBMSU1BIFNJTFZBQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnTFVJU01BUiBERSBMSU1BIFNJTFZBJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnTFVJWiBDQVJMT1MgU0FOVE9TIFNPVVpBQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnTFVJWiBDQVJMT1MgU0FOVE9TIFNPVVpBJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnTUFJQU5BIFNJTFZBIEJBUlJFVE9BdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdNQUlBTkEgU0lMVkEgQkFSUkVUTycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ01BSUpBUkEgU0lMVkEgQkFSUkVUT0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ01BSUpBUkEgU0lMVkEgQkFSUkVUTycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ01BUkNFTE8gS0lORUlQUEUgQlJBTkRBT0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ01BUkNFTE8gS0lORUlQUEUgQlJBTkRBTycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ01BUkNPUyBERSBKRVNVU0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ01BUkNPUyBERSBKRVNVUycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ01BUklBIFZJTE1BIERBIFNJTFZBIFNBTlRPU0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ01BUklBIFZJTE1BIERBIFNJTFZBIFNBTlRPUycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ01BUklaQSBTSUxWQSBCQVJSRVRPQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnTUFSSVpBIFNJTFZBIEJBUlJFVE8nLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdNQVhTVUVMIENPTkNFSUNBTyBET1MgU0FOVE9TQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnTUFYU1VFTCBDT05DRUlDQU8gRE9TIFNBTlRPUycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ01JTEVOQSBETyBBTVBBUk8gREUgU09VWkFBdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdNSUxFTkEgRE8gQU1QQVJPIERFIFNPVVpBJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnUkFGQUVMQSBTQU5UT1MgUklCRUlST0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ1JBRkFFTEEgU0FOVE9TIFJJQkVJUk8nLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdSRU5BVEEgREUgSkVTVVMgU0FOVE9TQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnUkVOQVRBIERFIEpFU1VTIFNBTlRPUycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ1JJVEEgREUgQ0FTU0lBIERPUyBTQU5UT1MgU0lMVkF0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ1JJVEEgREUgQ0FTU0lBIERPUyBTQU5UT1MgU0lMVicsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ1JPQkVSVCBSQU1PUyBBWkVWRURPQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnUk9CRVJUIFJBTU9TIEFaRVZFRE8nLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdST0dFUklPIFNBTlRPUyBDT05DRUlDQU9BdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdST0dFUklPIFNBTlRPUyBDT05DRUlDQU8nLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdST05BTERPIE1PVVJBIEVMRVVURVJJT0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ1JPTkFMRE8gTU9VUkEgRUxFVVRFUklPJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnUk9TQU5HRUxBIERPUyBTQU5UT1NBdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdST1NBTkdFTEEgRE9TIFNBTlRPUycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ1NJTFZBTkVJIERPUyBTQU5UT1MgQ09OQ0VJQ0FPQXRpdm8nLFxyXG4gICAgICB0eHQ6ICdBdGl2bycsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHNpdHVhY2FvRnVuY2lvbmFyaW86ICdBdGl2bycsXHJcbiAgICAgICAgbm9tZUZ1bmNpb25hcmlvOiAnU0lMVkFORUkgRE9TIFNBTlRPUyBDT05DRUlDQU8nLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdTSU1PTkUgRE9TIFNBTlRPUyBNQVNDQVJFTkhBU0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ1NJTU9ORSBET1MgU0FOVE9TIE1BU0NBUkVOSEFTJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnU0lOVElBIEJBUkJPU0EgRE9TIFNBTlRPU0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ1NJTlRJQSBCQVJCT1NBIERPUyBTQU5UT1MnLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdUSUFHTyBCT01GSU0gRkVSUkVJUkFBdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdUSUFHTyBCT01GSU0gRkVSUkVJUkEnLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdVQklSQUNJIFNPQVJFUyBGUkVJUkVBdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdVQklSQUNJIFNPQVJFUyBGUkVJUkUnLFxyXG4gICAgICAgIG5vbWVFbXByZXNhOiAnQkFJWE8gU1VMIEFSVEVGQVRPUyBERSBMQVRFWCBMVERBJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdWQU5JQSBERSBTT1VaQSBET0NJT0F0aXZvJyxcclxuICAgICAgdHh0OiAnQXRpdm8nLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBzaXR1YWNhb0Z1bmNpb25hcmlvOiAnQXRpdm8nLFxyXG4gICAgICAgIG5vbWVGdW5jaW9uYXJpbzogJ1ZBTklBIERFIFNPVVpBIERPQ0lPJyxcclxuICAgICAgICBub21lRW1wcmVzYTogJ0JBSVhPIFNVTCBBUlRFRkFUT1MgREUgTEFURVggTFREQSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnWkVOSUxETyBERSBKRVNVUyBTQU5UT1NBdGl2bycsXHJcbiAgICAgIHR4dDogJ0F0aXZvJyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgc2l0dWFjYW9GdW5jaW9uYXJpbzogJ0F0aXZvJyxcclxuICAgICAgICBub21lRnVuY2lvbmFyaW86ICdaRU5JTERPIERFIEpFU1VTIFNBTlRPUycsXHJcbiAgICAgICAgbm9tZUVtcHJlc2E6ICdCQUlYTyBTVUwgQVJURUZBVE9TIERFIExBVEVYIExUREEnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdLFxyXG4gIGNhY2hlOiBmYWxzZSxcclxuICBkYXRhc291cmNlOiAnMTE5MicsXHJcbiAgcnVudGltZTogNjMxLFxyXG4gIGJ5dGVzOiAzMzAxMVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBzdWNjZXNzOiBbXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJzUnLFxyXG4gICAgICB0eHQ6ICc1JyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgcXVhbnRpZGFkZTogJzEnLFxyXG4gICAgICAgIGFubzogJzIwMjAnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJzcnLFxyXG4gICAgICB0eHQ6ICc3JyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgcXVhbnRpZGFkZTogJzEnLFxyXG4gICAgICAgIGFubzogJzIwMjAnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdLFxyXG4gIGNhY2hlOiBmYWxzZSxcclxuICBkYXRhc291cmNlOiAnOTEzJyxcclxuICBydW50aW1lOiAzLFxyXG4gIGJ5dGVzOiA1NzYwNVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBzdWNjZXNzOiBbXHJcbiAgICB7XHJcbiAgICAgIGNvZDogJ0TDunZpZGEgLSAxMCcsXHJcbiAgICAgIHR4dDogJ0TDunZpZGEgLSAxMCcsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHF1YW50aWRhZGVUaXBvOiAnMScsXHJcbiAgICAgICAgbWVzOiAnMTAnLFxyXG4gICAgICAgIHRpcG9EZURlbWFuZGE6ICdEw7p2aWRhJyxcclxuICAgICAgICBhbm86ICcyMDIwJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2Q6ICdNdWRhbsOnYSBub3MgUHJvZ3JhbWFzL0RvY3VtZW50b3MvRXhhbWVzIC0gOScsXHJcbiAgICAgIHR4dDogJ011ZGFuw6dhIG5vcyBQcm9ncmFtYXMvRG9jdW1lbnRvcy9FeGFtZXMgLSA5JyxcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgcXVhbnRpZGFkZVRpcG86ICc5JyxcclxuICAgICAgICBtZXM6ICcxJyxcclxuICAgICAgICB0aXBvRGVEZW1hbmRhOiAnTXVkYW7Dp2Egbm9zIFByb2dyYW1hcy9Eb2N1bWVudG9zL0V4YW1lcycsXHJcbiAgICAgICAgYW5vOiAnMjAyMCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kOiAnTXVkYW7Dp2Egbm9zIFByb2dyYW1hcy9Eb2N1bWVudG9zL0V4YW1lcyAtIDknLFxyXG4gICAgICB0eHQ6ICdNdWRhbsOnYSBub3MgUHJvZ3JhbWFzL0RvY3VtZW50b3MvRXhhbWVzIC0gOScsXHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHF1YW50aWRhZGVUaXBvOiAnMTMnLFxyXG4gICAgICAgIG1lczogJzExJyxcclxuICAgICAgICB0aXBvRGVEZW1hbmRhOiAnTXVkYW7Dp2Egbm9zIFByb2dyYW1hcy9Eb2N1bWVudG9zL0V4YW1lcycsXHJcbiAgICAgICAgYW5vOiAnMjAyMCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgY2FjaGU6IGZhbHNlLFxyXG4gIGRhdGFzb3VyY2U6ICc5MTMnLFxyXG4gIHJ1bnRpbWU6IDUsXHJcbiAgYnl0ZXM6IDU3NjA1XHJcbn1cclxuIiwiaW1wb3J0IGV4cG9ydGFyRGFkb3NWaWRhc0F0aXZhczExOTIgZnJvbSAnLi9fZXhwb3J0YXJEYWRvc1ZpZGFzQXRpdmFzXzExOTInXHJcbmltcG9ydCBwYVNlc2lIZWxwTWFpczEyMDYgZnJvbSAnLi9fcGEtc2VzaTIwNy1oZWxwbWFpc18xMjA2J1xyXG5pbXBvcnQgcGFTZXNpQ29vcmRlbmFjYW8xMjA3IGZyb20gJy4vX3BhLXNlc2kyMDctY29vcmRlbmFjYW9fMTIwNydcclxuXHJcbmV4cG9ydCBjb25zdCBleHBvcnRhckRhZG9zVmlkYXNBdGl2YXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShleHBvcnRhckRhZG9zVmlkYXNBdGl2YXMxMTkyKSwgMTUwMClcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFTZXNpSGVscE1haXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShwYVNlc2lIZWxwTWFpczEyMDYpLCA1MDApXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhU2VzaUNvb3JkZW5hY2FvID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUocGFTZXNpQ29vcmRlbmFjYW8xMjA3KSwgNTAwKVxyXG4gIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgVGFibGVNdWx0aXZhbHVlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWJsZS1tdWx0aXZhbHVlJ1xyXG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHRhcmVhLWF1dG9zaXplJ1xyXG5pbXBvcnQgQnV0dG9uUmFkaW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24tcmFkaW8nXHJcbmltcG9ydCBEYXRlcGlja2VyUmFuZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kYXRlcGlja2VyLXJhbmdlJ1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICRzZWN0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VjdGlvbi1hY3Rpb25zJyksXHJcbiAgdGFibGVTZWxlY3RvcjogJyN0YmwtYWN0aW9ucycsXHJcbiAgYWN0aW9uc1RleHRhcmVhSWQ6ICdwbGFub0Fjb21wYW5oYW1lbnRvJyxcclxuICBleGVjdXRlZElucHV0SWQ6ICdwbGFub0V4ZWN1dGFkbydcclxufVxyXG5cclxuZnVuY3Rpb24gbW91bnQgKHsgcmVhZG9ubHkgPSBmYWxzZSwgc3RhdGljb25seSA9IGZhbHNlIH0pIHtcclxuICBjb25maWcuJHNlY3Rpb25cclxuICAgIC5jbGFzc0xpc3RcclxuICAgIC5yZW1vdmUoJ2hpZGRlbicpXHJcblxyXG4gIGlmIChyZWFkb25seSkge1xyXG4gICAgcmV0dXJuIHNldFJlYWRPbmx5KClcclxuICB9XHJcblxyXG4gIGNvbnN0IEFjdGlvbnNUYWJsZSA9IG5ldyBUYWJsZU11bHRpdmFsdWUoY29uZmlnLnRhYmxlU2VsZWN0b3IsIGhhbmRlVGFibGVNb3VudClcclxuXHJcbiAgaWYgKHN0YXRpY29ubHkpIHtcclxuICAgIEFjdGlvbnNUYWJsZS5zdGF0aWMoKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEFjdGlvbnNUYWJsZVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRSZWFkT25seSAoc3RhdGljb25seSkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnRhYmxlU2VsZWN0b3IpXHJcbiAgICAuY2xhc3NMaXN0XHJcbiAgICAuYWRkKCctcmVhZG9ubHknLCAnLWhvdmVyJylcclxuXHJcbiAgRGF0ZXBpY2tlclJhbmdlLmluaXQoYCR7Y29uZmlnLnRhYmxlU2VsZWN0b3J9IC5pbnB1dC1tb250aHJhbmdlYCwge30pXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3hpZD1kaXYke2NvbmZpZy5leGVjdXRlZElucHV0SWR9XWApXHJcbiAgICAuZm9yRWFjaChsYWJlbCA9PiBhcHBlbmRFeGVjdXRlZExhYmVsKGxhYmVsKSlcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kRXhlY3V0ZWRMYWJlbCAobGFiZWwpIHtcclxuICAvLyBEaXNjbGFpbWVyOiBpZ25vcmEgbyBwcmVmaXhvIGRhcyBvcHRpb25zIGRvIDxzZWxlY3Q+LFxyXG4gIC8vIHV0aWxpemFkbyBubyBPcnF1ZXN0cmEgcGFyYSBxdWVzdMOjbyBkYSBvcmRlbmHDp8OjbyBkZSBvcMOnw7Vlc1xyXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGxhYmVsLnRleHRDb250ZW50LnN1YnN0cmluZygyKVxyXG5cclxuICBjb25zdCB0ZCA9IGxhYmVsLmNsb3Nlc3QoJ3RkJylcclxuICBjb25zdCBidG5SYWRpbyA9IHRkLnF1ZXJ5U2VsZWN0b3IoJy5idG4tcmFkaW8td3JhcHBlcicpXHJcbiAgY29uc3QgdGFnID0gYDxzcGFuIGNsYXNzPVwidGFnICR7Z2V0TGFiZWxDbGFzc01vZGlmaWVyKGxhYmVsVGV4dCl9XCI+JHtsYWJlbFRleHR9PC9zcGFuPmBcclxuXHJcbiAgdGQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0YWcpXHJcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICBidG5SYWRpby5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZXN0cm95ICgpIHtcclxuICBjb25maWcuJHNlY3Rpb24ucmVtb3ZlKClcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGVUYWJsZU1vdW50IChyb3cpIHtcclxuICBCdXR0b25SYWRpby5pbml0KCcuYnRuLXJhZGlvLXdyYXBwZXInLCB0cnVlLCByb3cpXHJcbiAgVGV4dGFyZWFBdXRvc2l6ZS5pbml0KGBbeG5hbWU9aW5wJHtjb25maWcuYWN0aW9uc1RleHRhcmVhSWR9XWAsIHJvdylcclxuICBEYXRlcGlja2VyUmFuZ2UuaW5pdCgnLmlucHV0LW1vbnRocmFuZ2UnLCB7XHJcbiAgICBzdGFydFZpZXc6ICdtb250aHMnLFxyXG4gICAgbWluVmlld01vZGU6ICdtb250aHMnLFxyXG4gICAgZm9ybWF0OiAnTS95eXl5J1xyXG4gIH0sIHJvdylcclxufVxyXG5cclxuY29uc3QgZ2V0TGFiZWxDbGFzc01vZGlmaWVyID0gdmFsdWUgPT4ge1xyXG4gIGlmICh2YWx1ZSA9PT0gJ1NpbScpIHtcclxuICAgIHJldHVybiAnLXN1Y2Nlc3MnXHJcbiAgfVxyXG4gIGlmICh2YWx1ZSA9PT0gJ07Do28nKSB7XHJcbiAgICByZXR1cm4gJy1kYW5nZXInXHJcbiAgfVxyXG4gIGlmICh2YWx1ZSA9PT0gJ1BhcmNpYWwnKSB7XHJcbiAgICByZXR1cm4gJy13YXJuaW5nJ1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2hvdWxkTW91bnRUYWJsZSA9IHRhc2tBbGlhcyA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIFtcclxuICAgICAgJ2VsYWJvcmFjYW8nLFxyXG4gICAgICAnY29tcGxlbWVudGFjYW8nLFxyXG4gICAgICAnZWxhYm9yYWNhb0FudWFsJyxcclxuICAgICAgJ2NvbXBsZW1lbnRhY2FvQW51YWwnXHJcbiAgICBdXHJcbiAgICAgIC5pbmNsdWRlcyh0YXNrQWxpYXMpXHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBzaG91bGRCZVJlYWRvbmx5ID0gdGFza0FsaWFzID0+IHtcclxuICByZXR1cm4gW1xyXG4gICAgJ2NvbXBsZW1lbnRhY2FvJyxcclxuICAgICdjb21wbGVtZW50YWNhb0FudWFsJ1xyXG4gIF1cclxuICAgIC5pbmNsdWRlcyh0YXNrQWxpYXMpXHJcbn1cclxuXHJcbmNvbnN0IHNob3VsZEJlU3RhdGljID0gdGFza0FsaWFzID0+IHtcclxuICByZXR1cm4gW1xyXG4gICAgJ2VsYWJvcmFjYW9BbnVhbCdcclxuICBdXHJcbiAgICAuaW5jbHVkZXModGFza0FsaWFzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0ICh7IHRhc2tBbGlhcyB9KSB7XHJcbiAgY29uc3QgcmVhZG9ubHkgPSBzaG91bGRCZVJlYWRvbmx5KHRhc2tBbGlhcylcclxuICBjb25zdCBzdGF0aWNvbmx5ID0gc2hvdWxkQmVTdGF0aWModGFza0FsaWFzKVxyXG4gIGNvbnN0IHNob3VsZE1vdW50ID0gc2hvdWxkTW91bnRUYWJsZSh0YXNrQWxpYXMpXHJcblxyXG4gIGlmIChzaG91bGRNb3VudCkge1xyXG4gICAgcmV0dXJuIG1vdW50KHsgcmVhZG9ubHksIHN0YXRpY29ubHkgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXN0cm95KClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGluaXRcclxufVxyXG4iLCIvKipcclxuICogSGVscGVyc1xyXG4gKi9cclxuaW1wb3J0IHtcclxuICBnZXRNb250aEludCxcclxuICBnZXRNb250aE5hbWVCeU51bWJlclxyXG59IGZyb20gJ29ycXVlc3RyYS1oZWxwZXJzJ1xyXG5cclxuaW1wb3J0IHsgZmlsbE1vbnRoc09uUGVyaW9kIH0gZnJvbSAnLi91dGlsJ1xyXG5pbXBvcnQgeyBwYVNlc2lDb29yZGVuYWNhbyB9IGZyb20gJy4uLy4uLy4uL21vY2tzL29ycXVlc3RyYS1hcGknXHJcblxyXG5jb25zdCBPUlFVRVNUUkFfREFUQVNPVVJDRV9VUkwgPSBwcm9jZXNzLmVudi5EQVRBU09VUkNFX0NPT1JESU5BVElPTlxyXG4vLyAnaHR0cHM6Ly9zaXN3ZWIuZmllYi5vcmcuYnIvRklFQi9PcnF1ZXN0cmEvYXBpL2pzb24vZGF0YXNvdXJjZS9nZXQvMS4wLzBQT01HRGJQQGtibHpyYnRzVGgtaTFSQWF5UWVVbjlTTU9ESWlMWE1MQkFNMHVZeDFNVFN0T1AwWlltbW4wZTVPQURXMmlyZzFXV0tjUzBGdHVjWExnX18nXHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgZGVmYXVsdFBhcmFtczoge1xyXG4gICAgcXVhbnRpdHk6IDBcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldERhdGFGcm9tRGF0YVNvdXJjZSA9IGFzeW5jIGZ1bmN0aW9uICh7XHJcbiAgc3RhcnQsXHJcbiAgZW5kLFxyXG4gIGNucGpcclxufSkge1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoT1JRVUVTVFJBX0RBVEFTT1VSQ0VfVVJMKVxyXG5cclxuICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICBpbnBwZXJpb2RvSW5pY2lhbDogZ2V0TW9udGhJbnQoc3RhcnQpLFxyXG4gICAgaW5wYW5vSW5pY2lhbDogc3RhcnQuZ2V0RnVsbFllYXIoKSxcclxuICAgIGlucHBlcmlvZG9GaW5hbDogZ2V0TW9udGhJbnQoZW5kKSxcclxuICAgIGlucGFub0ZpbmFsOiBlbmQuZ2V0RnVsbFllYXIoKSxcclxuICAgIGlucGNucGo6IGNucGpcclxuICB9XHJcblxyXG4gIHVybC5zZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKVxyXG5cclxuICBjb25zdCB7IHN1Y2Nlc3MgfSA9IGF3YWl0IHBhU2VzaUNvb3JkZW5hY2FvKClcclxuXHJcbiAgY29uc3QgZGF0YSA9IHN1Y2Nlc3MubWFwKGVudHJ5ID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vbnRoOiBwYXJzZUludChlbnRyeS50eHQpLFxyXG4gICAgICBtb250aE5hbWU6IGdldE1vbnRoTmFtZUJ5TnVtYmVyKGVudHJ5LnR4dCksXHJcbiAgICAgIHllYXI6IHBhcnNlSW50KGVudHJ5LmZpZWxkcy5hbm8pLFxyXG4gICAgICBxdWFudGl0eTogcGFyc2VJbnQoZW50cnkuZmllbGRzLnF1YW50aWRhZGUpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGEsXHJcbiAgICBzdGFydCxcclxuICAgIGVuZFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YUZyb21QZXJpb2QgKHBhcmFtcykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBnZXREYXRhRnJvbURhdGFTb3VyY2UocGFyYW1zKVxyXG4gICAgICAudGhlbigoeyBzdGFydCwgZW5kLCBkYXRhIH0pID0+IHtcclxuICAgICAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYXRhKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0UGFyYW1zIH0gPSBjb25maWdcclxuICAgICAgICBjb25zdCBmaWxsZWREYXRhID0gZmlsbE1vbnRoc09uUGVyaW9kKHtcclxuICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgZW5kLFxyXG4gICAgICAgICAgZGF0YSxcclxuICAgICAgICAgIGRlZmF1bHRQYXJhbXNcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXNvbHZlKGZpbGxlZERhdGEpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcGVyc2lzdERhdGEgKGRhdGEpIHtcclxuICByZXR1cm4gZGF0YS5tYXAoZW50cnkgPT4ge1xyXG4gICAgY29uc3Qgcm93RGF0YSA9IHt9XHJcbiAgICByb3dEYXRhLmNvb3JkZW5hY2FvTWVzQW5vID0gYCR7ZW50cnkubW9udGhOYW1lLnN1YnN0cmluZygwLCAzKX0vJHtlbnRyeS55ZWFyfWBcclxuICAgIHJvd0RhdGEuY29vcmRlbmFjYW9SZWdpc3Ryb3MgPSBlbnRyeS5xdWFudGl0eSB8fCAnLSdcclxuXHJcbiAgICByZXR1cm4gcm93RGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXREYXRhRnJvbVBlcmlvZCxcclxuICBwZXJzaXN0RGF0YVxyXG59XHJcbiIsIi8qKlxyXG4gKiBIZWxwZXJzXHJcbiAqL1xyXG5pbXBvcnQge1xyXG4gIGdldE1vbnRoSW50LFxyXG4gIGdldE1vbnRoTmFtZUJ5TnVtYmVyXHJcbn0gZnJvbSAnb3JxdWVzdHJhLWhlbHBlcnMnXHJcblxyXG5pbXBvcnQgeyBmaWxsTW9udGhzT25QZXJpb2QgfSBmcm9tICcuL3V0aWwnXHJcbmltcG9ydCB7IHBhU2VzaUhlbHBNYWlzIH0gZnJvbSAnLi4vLi4vLi4vbW9ja3Mvb3JxdWVzdHJhLWFwaSdcclxuXHJcbmNvbnN0IE9SUVVFU1RSQV9EQVRBU09VUkNFX1VSTCA9IHByb2Nlc3MuZW52LkRBVEFTT1VSQ0VfTElWRVNcclxuLy8gJ2h0dHBzOi8vc2lzd2ViLmZpZWIub3JnLmJyL0ZJRUIvT3JxdWVzdHJhL2FwaS9qc29uL2RhdGFzb3VyY2UvZ2V0LzEuMC8wUE9NR0RiUEBrYmx6cmJ0c1RoLWkxUkFheVFlVW45U01PRElpTFhNTEJBTTB1WXgxTVRTdE9QMFpZbW1uMGU1T0FEVzJpcmcxV1dLY1MwRnR1Y1hMZ19fJ1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGRlZmF1bHRQYXJhbXM6IHtcclxuICAgIHF1YW50aXR5RG91YnRzOiAwLFxyXG4gICAgcXVhbnRpdHlDaGFuZ2VzOiAwLFxyXG4gICAgcXVhbnRpdHlTdXBwb3J0U1BsdXM6IDAsXHJcbiAgICBxdWFudGl0eVN1cHBvcnRDb29yZDogMCxcclxuICAgIHF1YW50aXR5U3VwcG9ydFZpdmFQbHVzOiAwXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBnZXREYXRhRnJvbURhdGFTb3VyY2UgPSBhc3luYyBmdW5jdGlvbiAoe1xyXG4gIHN0YXJ0LFxyXG4gIGVuZCxcclxuICBwcm9wb3NhbCxcclxuICBwcm9kdWN0SWQsXHJcbiAgcHJvZHVjdFR5cGVcclxufSkge1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoT1JRVUVTVFJBX0RBVEFTT1VSQ0VfVVJMKVxyXG5cclxuICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICBpbnBwZXJpb2RvSW5pY2lhbDogZ2V0TW9udGhJbnQoc3RhcnQpLFxyXG4gICAgaW5wYW5vSW5pY2lhbDogc3RhcnQuZ2V0RnVsbFllYXIoKSxcclxuICAgIGlucHBlcmlvZG9GaW5hbDogZ2V0TW9udGhJbnQoZW5kKSxcclxuICAgIGlucGFub0ZpbmFsOiBlbmQuZ2V0RnVsbFllYXIoKSxcclxuICAgIGlucG51bWVyb0RhUHJvcG9zdGE6IHByb3Bvc2FsLFxyXG4gICAgaW5wY29kUHJvZHV0bzogcHJvZHVjdElkXHJcbiAgfVxyXG5cclxuICB1cmwuc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKClcclxuXHJcbiAgY29uc3QgeyBzdWNjZXNzIH0gPSBhd2FpdCBwYVNlc2lIZWxwTWFpcygpXHJcblxyXG4gIGNvbnN0IGRhdGEgPSBzdWNjZXNzLm1hcCgoeyBmaWVsZHMgfSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICAuLi5jb25maWcuZGVmYXVsdFBhcmFtcyxcclxuICAgICAgbW9udGg6IHBhcnNlSW50KGZpZWxkcy5tZXMpLFxyXG4gICAgICBtb250aE5hbWU6IGdldE1vbnRoTmFtZUJ5TnVtYmVyKGZpZWxkcy5tZXMpLFxyXG4gICAgICB5ZWFyOiBwYXJzZUludChmaWVsZHMuYW5vKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHF1YW50aXR5S2V5ID0gZ2V0UXVhbnRpdHlLZXlCeVR5cGUoZmllbGRzLnRpcG9EZURlbWFuZGEpXHJcbiAgICByZXN1bHRbcXVhbnRpdHlLZXldID0gcGFyc2VJbnQoZmllbGRzLnF1YW50aWRhZGVUaXBvKVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF0YSxcclxuICAgIHN0YXJ0LFxyXG4gICAgZW5kXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRRdWFudGl0eUtleUJ5VHlwZSA9IHR5cGUgPT4ge1xyXG4gIGNvbnN0IHByZWZpeCA9ICdxdWFudGl0eSdcclxuICBsZXQga2V5VHlwZSA9ICcnXHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnRMO6dmlkYSc6XHJcbiAgICAgIGtleVR5cGUgPSAnRG91YnRzJ1xyXG4gICAgICBicmVha1xyXG5cclxuICAgIGNhc2UgJ011ZGFuw6dhIG5vcyBQcm9ncmFtYXMvRG9jdW1lbnRvcy9FeGFtZXMnOlxyXG4gICAgICBrZXlUeXBlID0gJ0NoYW5nZXMnXHJcbiAgICAgIGJyZWFrXHJcblxyXG4gICAgY2FzZSAnU3Vwb3J0ZSBwYXJhIG8gU2lzdGVtYSBJbmZvcm1hdGl6YWRvIFMrJzpcclxuICAgICAga2V5VHlwZSA9ICdTdXBwb3J0U1BsdXMnXHJcbiAgICAgIGJyZWFrXHJcblxyXG4gICAgY2FzZSAnU3Vwb3J0ZSBkbyBNw6lkaWNvIENvb3JkZW5hZG9yIGRvIFBDTVNPJzpcclxuICAgICAga2V5VHlwZSA9ICdTdXBwb3J0Q29vcmQnXHJcbiAgICAgIGJyZWFrXHJcblxyXG4gICAgY2FzZSAnU3Vwb3J0ZSBQb3J0YWwgU0VTSSBWaXZhKyc6XHJcbiAgICAgIGtleVR5cGUgPSAnU3VwcG9ydFZpdmFQbHVzJ1xyXG4gICAgICBicmVha1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHByZWZpeCArIGtleVR5cGVcclxufVxyXG5cclxuY29uc3QgZ3JvdXBEYXRhQnlUeXBlID0gZGF0YSA9PiB7XHJcbiAgY29uc3QgeWVhcnMgPSBuZXcgU2V0KFxyXG4gICAgZGF0YS5tYXAoKHsgeWVhciB9KSA9PiB5ZWFyKVxyXG4gIClcclxuXHJcbiAgbGV0IHJlc3VsdFxyXG5cclxuICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xyXG4gICAgY29uc3QgeWVhcmx5RGF0YSA9IGRhdGEuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LnllYXIgPT09IHllYXIpXHJcbiAgICBjb25zdCBtb250aHMgPSBbLi4ubmV3IFNldChcclxuICAgICAgeWVhcmx5RGF0YS5tYXAoKHsgbW9udGggfSkgPT4gbW9udGgpXHJcbiAgICApXVxyXG5cclxuICAgIHJlc3VsdCA9IG1vbnRocy5tYXAobW9udGggPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgIC5maWx0ZXIoZW50cnkgPT4gZW50cnkubW9udGggPT09IG1vbnRoKVxyXG4gICAgICAgIC5yZWR1Y2UoKGFjYywgY3VycikgPT4gT2JqZWN0LmFzc2lnbihhY2MsIGN1cnIpLCB7fSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhRnJvbVBlcmlvZCAocGFyYW1zKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGdldERhdGFGcm9tRGF0YVNvdXJjZShwYXJhbXMpXHJcbiAgICAgIC50aGVuKCh7IHN0YXJ0LCBlbmQsIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGlmICghZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKGRhdGEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IGRlZmF1bHRQYXJhbXMgfSA9IGNvbmZpZ1xyXG4gICAgICAgIGNvbnN0IG1lcmdlZERhdGEgPSBncm91cERhdGFCeVR5cGUoZGF0YSlcclxuICAgICAgICBjb25zdCBmaWxsZWREYXRhID0gZmlsbE1vbnRoc09uUGVyaW9kKHtcclxuICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgZW5kLFxyXG4gICAgICAgICAgZGVmYXVsdFBhcmFtcyxcclxuICAgICAgICAgIGRhdGE6IG1lcmdlZERhdGFcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmaWxsZWREYXRhKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBlcnNpc3REYXRhIChkYXRhKSB7XHJcbiAgcmV0dXJuIGRhdGEubWFwKGVudHJ5ID0+IHtcclxuICAgIGNvbnN0IHJvd0RhdGEgPSB7fVxyXG4gICAgcm93RGF0YS5oZWxwTWVzQW5vID0gYCR7ZW50cnkubW9udGhOYW1lLnN1YnN0cmluZygwLCAzKX0vJHtlbnRyeS55ZWFyfWBcclxuICAgIHJvd0RhdGEuaGVscER1dmlkYXMgPSBlbnRyeS5xdWFudGl0eURvdWJ0cyB8fCAnLSdcclxuICAgIHJvd0RhdGEuaGVscE11ZGFuY2FzID0gZW50cnkucXVhbnRpdHlDaGFuZ2VzIHx8ICctJ1xyXG4gICAgcm93RGF0YS5oZWxwU3Vwb3J0ZVNNYWlzID0gZW50cnkucXVhbnRpdHlTdXBwb3J0U1BsdXMgfHwgJy0nXHJcbiAgICByb3dEYXRhLmhlbHBTdXBvcnRlTWVkQ29vcmRlbmFjYW8gPSBlbnRyeS5xdWFudGl0eVN1cHBvcnRDb29yZCB8fCAnLSdcclxuICAgIHJvd0RhdGEuaGVscFN1cG9ydGVWaXZhTWFpcyA9IGVudHJ5LnF1YW50aXR5U3VwcG9ydFZpdmFQbHVzIHx8ICctJ1xyXG5cclxuICAgIHJldHVybiByb3dEYXRhXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldERhdGFGcm9tUGVyaW9kLFxyXG4gIHBlcnNpc3REYXRhXHJcbn1cclxuIiwiLyoqXHJcbiAqIEhlbHBlcnNcclxuICovXHJcbmltcG9ydCB7XHJcbiAgZ2V0TW9udGhJbnQsXHJcbiAgZ2V0TW9udGhOYW1lXHJcbn0gZnJvbSAnb3JxdWVzdHJhLWhlbHBlcnMnXHJcblxyXG4vKipcclxuICogTW9ja3NcclxuICovXHJcbmltcG9ydCB7XHJcbiAgZXhwb3J0YXJEYWRvc1ZpZGFzQXRpdmFzXHJcbn0gZnJvbSAnLi4vLi4vLi4vbW9ja3Mvb3JxdWVzdHJhLWFwaSdcclxuXHJcbmNvbnN0IE9SUVVFU1RSQV9EQVRBU09VUkNFX1VSTCA9IHByb2Nlc3MuZW52LkRBVEFTT1VSQ0VfTElWRVNcclxuLy8gJ2h0dHBzOi8vc2lzd2ViLmZpZWIub3JnLmJyL0ZJRUIvT3JxdWVzdHJhL2FwaS9qc29uL2RhdGFzb3VyY2UvZ2V0LzEuMC8wUE9NR0RiUEBrYmx6cmJ0c1RoLWlAaEhwcFlpV2YtNVJ3SnlSekVoTUtZTzR6RnlvTTdTMzVIZERnQ2l4dlMyTUZvTnVPeGFXTUBwYTBFb1ZUNFRVZ19fJ1xyXG4vLyBjb25zdCBBUElfS0VZID0gJzQ2OTU1ZGRmZThhNTVmMjg3YjEwJyAvLyBwcm9iYWJseSBmaXhlZFxyXG4vLyBjb25zdCBFWFBPUlRfSUQgPSAnMTY3NDEnIC8vIGV2YWwgaWYgaXQncyBmaXhlZFxyXG4vLyBjb25zdCBDT01QQU5ZX0lEID0gJzU4ODg2NycgLy8gbm90IGZpeGVkXHJcblxyXG5jb25zdCBnZXREYXRhRnJvbVNPQyA9IGFzeW5jIGZ1bmN0aW9uICh7XHJcbiAgZGF0ZSxcclxuICBjb21wYW55SWQsXHJcbiAgZXhwb3J0SWQsXHJcbiAgYXBpS2V5XHJcbn0pIHtcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgY29uc3QgbW9udGhOYW1lID0gZ2V0TW9udGhOYW1lKGRhdGUpXHJcbiAgY29uc3QgdXJsID0gbmV3IFVSTChPUlFVRVNUUkFfREFUQVNPVVJDRV9VUkwpXHJcbiAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgaW5wYW5vOiB5ZWFyLFxyXG4gICAgaW5wbWVzOiBnZXRNb250aEludChkYXRlKSxcclxuICAgIGlucGVtcHJlc2FEZUF0ZW5kaW1lbnRvOiBjb21wYW55SWQsXHJcbiAgICBpbnBjb2RFeHBvcnRhRGFkb3M6IGV4cG9ydElkLFxyXG4gICAgaW5wY2hhdmVFeHBvcnRhOiBhcGlLZXlcclxuICB9XHJcblxyXG4gIHVybC5zZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKVxyXG5cclxuICBjb25zdCB7IHN1Y2Nlc3MgfSA9IGF3YWl0IGV4cG9ydGFyRGFkb3NWaWRhc0F0aXZhcygpXHJcblxyXG4gIGNvbnN0IGFjdGl2ZUxpdmVzID0gc3VjY2Vzcy5maWx0ZXIoKHsgZmllbGRzIH0pID0+XHJcbiAgICBmaWVsZHMuc2l0dWFjYW9GdW5jaW9uYXJpbyA9PT0gJ0F0aXZvJ1xyXG4gIClcclxuXHJcbiAgY29uc3QgaW5hY3RpdmVMaXZlcyA9IHN1Y2Nlc3MuZmlsdGVyKCh7IGZpZWxkcyB9KSA9PlxyXG4gICAgZmllbGRzLnNpdHVhY2FvRnVuY2lvbmFyaW8gIT09ICdBdGl2bydcclxuICApXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB5ZWFyLFxyXG4gICAgbW9udGhOYW1lLFxyXG4gICAgcXVhbnRpdHlBY3RpdmVMaXZlczogYWN0aXZlTGl2ZXMubGVuZ3RoLFxyXG4gICAgcXVhbnRpdHlJbmFjdGl2ZUxpdmVzOiBpbmFjdGl2ZUxpdmVzLmxlbmd0aFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YUZyb21QZXJpb2QgKHtcclxuICBzdGFydCxcclxuICBlbmQsXHJcbiAgY29tcGFueUlkLFxyXG4gIGV4cG9ydElkLFxyXG4gIGFwaUtleVxyXG59KSB7XHJcbiAgY29uc3QgZGF0YSA9IFtdXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkpXHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bm1vZGlmaWVkLWxvb3AtY29uZGl0aW9uXHJcbiAgd2hpbGUgKGN1cnJlbnREYXRlIDw9IGVuZCkge1xyXG4gICAgY29uc3QgbW9udGhEYXRhID0gZ2V0RGF0YUZyb21TT0Moe1xyXG4gICAgICBkYXRlOiBjdXJyZW50RGF0ZSxcclxuICAgICAgY29tcGFueUlkLFxyXG4gICAgICBleHBvcnRJZCxcclxuICAgICAgYXBpS2V5XHJcbiAgICB9KVxyXG5cclxuICAgIGRhdGEucHVzaChtb250aERhdGEpXHJcbiAgICBjdXJyZW50RGF0ZS5zZXRNb250aChjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSlcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBQcm9taXNlLmFsbChkYXRhKVxyXG4gICAgICAudGhlbihtb250aHMgPT4gcmVzb2x2ZShtb250aHMpKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXREYXRhRnJvbVBlcmlvZFxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgZ2V0TW9udGhJbnQsXHJcbiAgZ2V0TW9udGhOYW1lQnlOdW1iZXJcclxufSBmcm9tICdvcnF1ZXN0cmEtaGVscGVycydcclxuXHJcbmV4cG9ydCBjb25zdCBmaWxsTW9udGhzT25QZXJpb2QgPSAoe1xyXG4gIHN0YXJ0LFxyXG4gIGVuZCxcclxuICBkYXRhLFxyXG4gIGRlZmF1bHRQYXJhbXNcclxufSkgPT4ge1xyXG4gIGNvbnN0IG1vbnRobHlFbnRyaWVzID0gW11cclxuICBjb25zdCBjdXJyRGF0ZSA9IG5ldyBEYXRlKHN0YXJ0LmdldFRpbWUoKSlcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVubW9kaWZpZWQtbG9vcC1jb25kaXRpb25cclxuICB3aGlsZSAoY3VyckRhdGUgPD0gZW5kKSB7XHJcbiAgICBjb25zdCBjdXJyWWVhciA9IGN1cnJEYXRlLmdldEZ1bGxZZWFyKClcclxuICAgIGNvbnN0IGN1cnJNb250aCA9IGdldE1vbnRoSW50KGN1cnJEYXRlKVxyXG5cclxuICAgIGNvbnN0IG1vbnRobHlEYXRhID0gZGF0YS5maW5kKCh7IG1vbnRoLCB5ZWFyIH0pID0+IHtcclxuICAgICAgcmV0dXJuIG1vbnRoID09PSBjdXJyTW9udGggJiYgeWVhciA9PT0gY3VyclllYXJcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKG1vbnRobHlEYXRhKSB7XHJcbiAgICAgIG1vbnRobHlFbnRyaWVzLnB1c2gobW9udGhseURhdGEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtb250aGx5RW50cmllcy5wdXNoKHtcclxuICAgICAgICBtb250aDogY3Vyck1vbnRoLFxyXG4gICAgICAgIG1vbnRoTmFtZTogZ2V0TW9udGhOYW1lQnlOdW1iZXIoY3Vyck1vbnRoKSxcclxuICAgICAgICB5ZWFyOiBjdXJyWWVhcixcclxuICAgICAgICAuLi5kZWZhdWx0UGFyYW1zXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY3VyckRhdGUuc2V0TW9udGgoY3VyckRhdGUuZ2V0TW9udGgoKSArIDEpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbW9udGhseUVudHJpZXNcclxufVxyXG4iLCJpbXBvcnQgeyBhZGRZZWFycyB9IGZyb20gJ29ycXVlc3RyYS1oZWxwZXJzJ1xyXG5pbXBvcnQgRGF0ZXBpY2tlclJhbmdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGF0ZXBpY2tlci1yYW5nZSdcclxuaW1wb3J0IHsgRm9ybVZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm0tdmFsaWRhdGlvbidcclxuaW1wb3J0IHsgZ2V0VGFic1BhbmUgfSBmcm9tICcuL2V4YW1zLXRhYnMnXHJcbmltcG9ydCB7IHNlYXJjaERhdGEgfSBmcm9tICcuL2luZGV4J1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICRzZWFyY2hUcmlnZ2VyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2VhcmNoLWxpdmVzJyksXHJcbiAgJGV4YW1zUGFuZXM6IGdldFRhYnNQYW5lKCksXHJcbiAgZGF0ZXBpY2tlclNlbGVjdG9yOiAnI2V4YW1zLXBlcmlvZCdcclxufVxyXG5cclxuY29uc3QgU2VhcmNoRm9ybSA9IG5ldyBGb3JtVmFsaWRhdGlvbihbXHJcbiAge1xyXG4gICAgZWxlbWVudDogJ1t4bmFtZT1pbnB1bmlkYWRlRXhlY3V0b3JhXScsXHJcbiAgICBlcnJvck1lc3NhZ2U6ICdJbmZvcm1lIHVtYSBVbmlkYWRlJ1xyXG4gIH0sIHtcclxuICAgIGVsZW1lbnQ6ICdbeG5hbWU9aW5wcGVyaW9kb0luaWNpb10nLFxyXG4gICAgZXJyb3JNZXNzYWdlOiAnSW5mb3JtZSBvIHBlcsOtb2RvIHBhcmEgcGVzcXVpc2EnXHJcbiAgfSwge1xyXG4gICAgZWxlbWVudDogJ1t4bmFtZT1pbnBwZXJpb2RvRmltXScsXHJcbiAgICBlcnJvck1lc3NhZ2U6ICdJbmZvcm1lIG8gcGVyw61vZG8gcGFyYSBwZXNxdWlzYSdcclxuICB9XHJcbl0pXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVTZWFyY2ggKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IFNlYXJjaEZvcm0udmFsaWRhdGUoKVxyXG4gIGNvbnN0IGJ0blNlYXJjaCA9IHRoaXNcclxuXHJcbiAgaWYgKHZhbGlkYXRpb25SZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvbnN0IHBlcmlvZCA9IGdldFBlcmlvZCgpXHJcblxyXG4gIHNlYXJjaERhdGEocGVyaW9kLCBidG5TZWFyY2gpXHJcbn1cclxuXHJcbmNvbnN0IGdldFBlcmlvZCA9ICgpID0+ICh7XHJcbiAgc3RhcnQ6ICQoJ1t4bmFtZT1pbnBwZXJpb2RvSW5pY2lvXScpLmRhdGVwaWNrZXIoJ2dldERhdGUnKSxcclxuICBlbmQ6ICQoJ1t4bmFtZT1pbnBwZXJpb2RvRmltXScpLmRhdGVwaWNrZXIoJ2dldERhdGUnKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFB1YmxpYyBBUElcclxuICovXHJcbmZ1bmN0aW9uIG1vdW50ICgpIHtcclxuICBjb25maWcuJHNlYXJjaFRyaWdnZXJcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNlYXJjaClcclxuXHJcbiAgY29uc29sZS5sb2coJ3ByZSBkYXRlcGlja2VyJylcclxuICBEYXRlcGlja2VyUmFuZ2UuaW5pdChjb25maWcuZGF0ZXBpY2tlclNlbGVjdG9yLCB7XHJcbiAgICBzdGFydERhdGU6IGFkZFllYXJzKG5ldyBEYXRlKCksIC0yKSxcclxuICAgIGVuZERhdGU6IGFkZFllYXJzKG5ldyBEYXRlKCksIDIpLFxyXG4gICAgc3RhcnRWaWV3OiAnbW9udGhzJyxcclxuICAgIG1pblZpZXdNb2RlOiAnbW9udGhzJyxcclxuICAgIGZvcm1hdDogJ00veXl5eSdcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMb2FkaW5nU3RhdGUgKCkge1xyXG4gIGNvbmZpZy4kc2VhcmNoVHJpZ2dlclxyXG4gICAgLmNsYXNzTGlzdFxyXG4gICAgLmFkZCgnLWxvYWRpbmcnKVxyXG5cclxuICBjb25maWcuJGV4YW1zUGFuZXNcclxuICAgIC5jbGFzc0xpc3RcclxuICAgIC5hZGQoJy1sb2FkaW5nJylcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTG9hZGluZ1N0YXRlICgpIHtcclxuICBjb25maWcuJHNlYXJjaFRyaWdnZXJcclxuICAgIC5jbGFzc0xpc3RcclxuICAgIC5yZW1vdmUoJy1sb2FkaW5nJylcclxuXHJcbiAgY29uZmlnLiRleGFtc1BhbmVzXHJcbiAgICAuY2xhc3NMaXN0XHJcbiAgICAucmVtb3ZlKCctbG9hZGluZycpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtb3VudCxcclxuICBhZGRMb2FkaW5nU3RhdGUsXHJcbiAgcmVtb3ZlTG9hZGluZ1N0YXRlLFxyXG4gIGdldFBlcmlvZCxcclxuICBTZWFyY2hGb3JtXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxpdmVzOiB7XHJcbiAgICBlbXB0eU1lc3NhZ2U6ICdOw6NvIGZvaSBlbmNvbnRyYWRvIG5lbmh1bSBkYWRvIGRlIHZpZGFzIGRlbnRybyBkbyBwZXLDrW9kbyBwZXNxdWlzYWRvLicsXHJcbiAgICB0YWJOYW1lOiAnZGFkb3MtdmlkYXMnLFxyXG4gICAgdGFibGVJZDogJ3RibC1saXZlcycsXHJcbiAgICBjb2x1bW5zOiBbe1xyXG4gICAgICBrZXk6ICdxdWFudGl0eUFjdGl2ZUxpdmVzJyxcclxuICAgICAgdGl0bGU6ICdWaWRhcyBBdGl2YXMnLFxyXG4gICAgICBoZWFkZXJQcmVmaXg6ICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzLWNpcmNsZSBjb2xvci1ncmVlblwiPjwvaT4gJ1xyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdxdWFudGl0eUluYWN0aXZlTGl2ZXMnLFxyXG4gICAgICB0aXRsZTogJ1ZpZGFzIEluYXRpdmFzJyxcclxuICAgICAgaGVhZGVyUHJlZml4OiAnPGkgY2xhc3M9XCJmYXMgZmEtbWludXMtY2lyY2xlIGNvbG9yLXJlZFwiPjwvaT4gJ1xyXG4gICAgfV1cclxuICB9LFxyXG4gIGhlbHA6IHtcclxuICAgIGVtcHR5TWVzc2FnZTogJ07Do28gZm9pIGVuY29udHJhZGEgbmVuaHVtYSBpbnRlcmHDp8OjbyBubyBIZWxwKyBkZW50cm8gZG8gcGVyw61vZG8gcGVzcXVpc2Fkby4nLFxyXG4gICAgdGFiTmFtZTogJ2ludGVyYWNvZXMtaGVscCcsXHJcbiAgICB0YWJsZUlkOiAndGJsLWhlbHAtcGx1cycsXHJcbiAgICBjb2x1bW5zOiBbe1xyXG4gICAgICBrZXk6ICdxdWFudGl0eURvdWJ0cycsXHJcbiAgICAgIHRpdGxlOiAnRMO6dmlkYXMnXHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogJ3F1YW50aXR5Q2hhbmdlcycsXHJcbiAgICAgIHRpdGxlOiAnTXVkYW7Dp2FzJ1xyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdxdWFudGl0eVN1cHBvcnRTUGx1cycsXHJcbiAgICAgIHRpdGxlOiAnUysnLFxyXG4gICAgICBoZWFkZXJQcmVmaXg6ICc8c3BhbiBjbGFzcz1cInRoLXN1cFwiPlN1cG9ydGU8L3NwYW4+J1xyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdxdWFudGl0eVN1cHBvcnRDb29yZCcsXHJcbiAgICAgIHRpdGxlOiAnTcOpZC4gQ29vcmQuJyxcclxuICAgICAgaGVhZGVyUHJlZml4OiAnPHNwYW4gY2xhc3M9XCJ0aC1zdXBcIj5TdXBvcnRlPC9zcGFuPidcclxuICAgIH0sIHtcclxuICAgICAga2V5OiAncXVhbnRpdHlTdXBwb3J0Vml2YVBsdXMnLFxyXG4gICAgICB0aXRsZTogJ1ZpdmErJyxcclxuICAgICAgaGVhZGVyUHJlZml4OiAnPHNwYW4gY2xhc3M9XCJ0aC1zdXBcIj5TdXBvcnRlPC9zcGFuPidcclxuICAgIH1dXHJcbiAgfSxcclxuICBjb29yZDoge1xyXG4gICAgdGFiTmFtZTogJ2ludGVyYWNvZXMtY29vcmRlbmFjYW8nLFxyXG4gICAgZW1wdHlNZXNzYWdlOiAnTsOjbyBmb2kgZW5jb250cmFkYSBuZW5odW1hIGludGVyYcOnw6NvIGRhIENvb3JkZW5hw6fDo28gZGVudHJvIGRvIHBlcsOtb2RvIHBlc3F1aXNhZG8uJyxcclxuICAgIHRhYmxlSWQ6ICd0YmwtY29vcmRpbmF0aW9uJyxcclxuICAgIGNvbHVtbnM6IFt7XHJcbiAgICAgIGtleTogJ3F1YW50aXR5JyxcclxuICAgICAgdGl0bGU6ICdSZWdpc3Ryb3MnXHJcbiAgICB9XVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgVGFicyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhYnMnXHJcblxyXG5jb25zdCBjb2x1bW5EZWZhdWx0cyA9IHtcclxuICBzaG93VG90YWw6IHRydWUsXHJcbiAgc2hvd0F2ZXJhZ2U6IHRydWVcclxufVxyXG5cclxuY29uc3QgZ3JvdXBEYXRhQnlZZWFyID0gKGRhdGEsIGNvbHVtbnMpID0+IHtcclxuICBjb25zdCB5ZWFycyA9IG5ldyBTZXQoXHJcbiAgICBkYXRhLm1hcCgoeyB5ZWFyIH0pID0+IHllYXIpXHJcbiAgKVxyXG5cclxuICBjb25zdCBzdW1tYXJ5ID0gZGF0YS5yZWR1Y2UoKGFjYywgZGF0YSwgcm93KSA9PiB7XHJcbiAgICBjb2x1bW5zLmZvckVhY2goKHsga2V5IH0pID0+IHtcclxuICAgICAgaWYgKCEoa2V5IGluIGRhdGEpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJvdyA9PT0gMCkge1xyXG4gICAgICAgIGFjY1trZXldID0gZGF0YVtrZXldXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWNjW2tleV0gKz0gZGF0YVtrZXldXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gYWNjXHJcbiAgfSwge30pXHJcblxyXG4gIHN1bW1hcnkucm93cyA9IGRhdGEubGVuZ3RoXHJcblxyXG4gIGNvbnN0IGVudHJpZXMgPSB7fVxyXG5cclxuICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xyXG4gICAgY29uc3QgeWVhcmx5RGF0YSA9IGRhdGEuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LnllYXIgPT09IHllYXIpXHJcbiAgICBlbnRyaWVzW3llYXJdID0geWVhcmx5RGF0YVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlbnRyaWVzLFxyXG4gICAgc3VtbWFyeVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlRW1wdHlNZXNzYWdlID0gbWVzc2FnZSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuPGRpdiBjbGFzcz1cImVtcHR5XCI+XHJcbjxkaXYgY2xhc3M9XCJlbXB0eS1pY29uXCI+XHJcbiAgPGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXIgLW1pbnVzXCI+PC9pPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImVtcHR5LWNvbnRlbnRcIj5cclxuICA8aDEgY2xhc3M9XCJlbXB0eS10aXRsZVwiPk5lbmh1bWEgaW5mb3JtYcOnw6NvIG5vIHBlcsOtb2RvPC9oMT5cclxuICA8cCBjbGFzcz1cImVtcHR5LW1lc3NhZ2VcIj4ke21lc3NhZ2V9PC9wPlxyXG48L2Rpdj5cclxuPC9kaXY+YFxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVDb2xsYXBzZSA9ICh0aXRsZSwgcm93cywgY29sdW1ucykgPT4ge1xyXG4gIGNvbnN0IGNvbGxhcHNlU2V0dGluZ3MgPSBjb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgY29uc3QgdG90YWwgPSByb3dzLnJlZHVjZSgoYWNjLCBkYXRhKSA9PiBhY2MgKyBkYXRhW2NvbHVtbi5rZXldLCAwKVxyXG4gICAgY29uc3QgYXZlcmFnZSA9IHRvdGFsIC8gcm93cy5sZW5ndGhcclxuXHJcbiAgICBjb25zdCBjb2x1bW5TZXR0aW5ncyA9IHtcclxuICAgICAgLi4uY29sdW1uRGVmYXVsdHMsXHJcbiAgICAgIGF2ZXJhZ2UsXHJcbiAgICAgIHRvdGFsLFxyXG4gICAgICAuLi5jb2x1bW5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb2xsYXBzZVByZWZpeCA9IGNyYXRlQ29sbGFwc2VQcmVmaXgoY29sdW1uU2V0dGluZ3MpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uY29sdW1uU2V0dGluZ3MsXHJcbiAgICAgIGNvbGxhcHNlUHJlZml4XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29sbGFwc2VIZWFkZXIgPSBjcmVhdGVDb2xsYXBzZUhlYWRlcih0aXRsZSwgY29sbGFwc2VTZXR0aW5ncylcclxuICBjb25zdCBjb2xsYXBzZVJvd3MgPSBjcmVhdGVDb2xsYXBzZUdyb3VwKHJvd3MsIGNvbHVtbnMpXHJcblxyXG4gIHJldHVybiBjb2xsYXBzZUhlYWRlciArIGNvbGxhcHNlUm93c1xyXG59XHJcblxyXG5jb25zdCBjcmF0ZUNvbGxhcHNlUHJlZml4ID0gKGNvbHVtbikgPT4ge1xyXG4gIGlmICghY29sdW1uLnNob3dUb3RhbCAmJiAhY29sdW1uLnNob3dBdmVyYWdlKSB7XHJcbiAgICByZXR1cm4gJydcclxuICB9XHJcblxyXG4gIGNvbnN0IGF2ZXJhZ2VMYWJlbCA9ICc8c3BhbiBjbGFzcz1cInRleHQtc3VtbWFyeVwiPihNw6lkaWEpPC9zcGFuPidcclxuICBjb25zdCB0b3RhbExhYmVsID0gJzxzcGFuIGNsYXNzPVwidGV4dC1zdWJcIj5Ub3RhbDwvc3Bhbj4nXHJcblxyXG4gIHJldHVybiBgXHJcbiAgPHNwYW4gY2xhc3M9XCJtYXJnaW4tcmlnaHQtbVwiPlxyXG4gICAgJHtjb2x1bW4uc2hvd0F2ZXJhZ2UgPyBhdmVyYWdlTGFiZWwgOiAnJ31cclxuICAgICR7Y29sdW1uLnNob3dUb3RhbCA/IHRvdGFsTGFiZWwgOiAnJ31cclxuICA8L3NwYW4+YFxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUYWJsZUhlYWRlciA9IChjb2x1bW5zKSA9PiB7XHJcbiAgY29uc3QgY29scyA9IGNvbHVtbnMubWFwKGNvbCA9PiBjcmVhdGVUYWJsZUhlYWRlckNvbHVtbihjb2wpKVxyXG5cclxuICByZXR1cm4gYFxyXG48dGhlYWQ+XHJcbiAgPHRyIGNsYXNzPVwiLXN0aWNrXCI+XHJcbiAgICA8dGg+PC90aD5cclxuICAgICR7Y29scy5qb2luKCcnKX1cclxuICAgIDx0aD48L3RoPlxyXG4gIDwvdHI+XHJcbjwvdGhlYWQ+YFxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUYWJsZUhlYWRlckNvbHVtbiA9ICh7XHJcbiAgdGl0bGUsXHJcbiAgdG90YWwsXHJcbiAgYXZlcmFnZSxcclxuICBoZWFkZXJQcmVmaXgsXHJcbiAgc2hvd1RvdGFsLFxyXG4gIHNob3dBdmVyYWdlXHJcbn0pID0+IHtcclxuICByZXR1cm4gYFxyXG48dGggY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbFwiPiR7aGVhZGVyUHJlZml4fSR7dGl0bGV9PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNvbCAkeyFzaG93QXZlcmFnZSAmJiAhc2hvd1RvdGFsID8gJ2hpZGRlbicgOiAnJ31cIj5cclxuICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbWFsbCB0ZXh0LXN1bW1hcnkgbWFyZ2luLXJpZ2h0LXMgJHshc2hvd0F2ZXJhZ2UgPyAnaGlkZGVuJyA6ICcnfVwiPlxyXG4gICAgJHt0b3RhbCA+IDAgPyAnKCcgKyBhdmVyYWdlLnRvTG9jYWxlU3RyaW5nKCdwdC1CUicsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAxLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSkgKyAnKScgOiAnJ308L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cInRleHQtc21hbGwgJHshc2hvd1RvdGFsID8gJ2hpZGRlbicgOiAnJ31cIj4ke3RvdGFsID4gMCA/IHRvdGFsIDogJyd9PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L3RoPmBcclxufVxyXG5cclxuY29uc3QgY3JlYXRlQ29sbGFwc2VIZWFkZXIgPSAodGl0bGUsIGNvbHVtbnMpID0+IHtcclxuICBjb25zdCBjb2xzID0gY29sdW1ucy5tYXAoKGNvbCwgaSkgPT4gY3JlYXRlQ29sbGFwc2VIZWFkZXJDb2x1bW4oY29sLCBpKSlcclxuXHJcbiAgcmV0dXJuIGBcclxuPHRib2R5IGNsYXNzPVwidGFibGUtY29sbGFwc2UtaGVhZGVyIC1zdGljayAtc3VtbWFyeVwiPlxyXG4gIDx0cj5cclxuICAgIDx0aD48aSBjbGFzcz1cInRhYmxlLWNvbGxhcHNlLWluZGljYXRvciBmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPiR7dGl0bGV9PC90aD5cclxuICAgICR7Y29scy5qb2luKCcnKX1cclxuICAgIDx0aD48L3RoPlxyXG4gIDwvdHI+XHJcbjwvdGJvZHk+YFxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVDb2xsYXBzZUhlYWRlckNvbHVtbiA9ICh7XHJcbiAgdG90YWwsXHJcbiAgYXZlcmFnZSxcclxuICBjb2xsYXBzZVByZWZpeCxcclxuICBzaG93VG90YWwsXHJcbiAgc2hvd0F2ZXJhZ2VcclxufSwgY29sdW1uSW5kZXgpID0+IHtcclxuICByZXR1cm4gYFxyXG48dGggY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgJHtjb2x1bW5JbmRleCA9PT0gMCA/IGNvbGxhcHNlUHJlZml4IDogJyd9XHJcbiAgJHtzaG93QXZlcmFnZSAmJiBhdmVyYWdlID4gMCA/ICc8c3BhbiBjbGFzcz1cInRleHQtc3VtbWFyeSBtYXJnaW4tcmlnaHQtc1wiPignICtcclxuICAgIGF2ZXJhZ2UudG9Mb2NhbGVTdHJpbmcoJ3B0LUJSJywgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDEsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSB9KSArXHJcbiAgJyk8L3NwYW4+JyA6ICcnfVxyXG4gICR7c2hvd1RvdGFsXHJcbiAgICAgID8gdG90YWwgPiAwXHJcbiAgICAgICAgPyB0b3RhbFxyXG4gICAgICAgIDogJy0nXHJcbiAgICAgIDogJydcclxuICAgIH1cclxuPC90aD5gXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUNvbGxhcHNlR3JvdXAgPSAocm93cywgY29sdW1ucykgPT4ge1xyXG4gIGNvbnN0IHRhYmxlUm93cyA9IHJvd3MubWFwKHJvdyA9PiBjcmVhdGVDb2xsYXBzZVJvdyhyb3csIGNvbHVtbnMpKVxyXG5cclxuICByZXR1cm4gYFxyXG48dGJvZHkgY2xhc3M9XCJ0YWJsZS1jb2xsYXBzZS1ncm91cFwiPlxyXG4gICR7dGFibGVSb3dzLmpvaW4oJycpfVxyXG48L3Rib2R5PmBcclxufVxyXG5cclxuY29uc3QgY3JlYXRlQ29sbGFwc2VSb3cgPSAocm93LCBjb2x1bW5zKSA9PiB7XHJcbiAgY29uc3QgY29scyA9IGNvbHVtbnMubWFwKCh7IGtleSB9KSA9PiBgPHRkIGNsYXNzPVwidGV4dC1yaWdodFwiPiR7cm93W2tleV0gPiAwID8gcm93W2tleV0gOiAnLSd9PC90ZD5gKVxyXG5cclxuICByZXR1cm4gYFxyXG48dHI+XHJcbiAgPHRkPiR7cm93Lm1vbnRoTmFtZX08L3RkPlxyXG4gICR7Y29scy5qb2luKCcnKX1cclxuICA8dGQ+PC90ZD5cclxuPC90cj5cclxuICBgXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQdWJsaWMgQVBJXHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZCAoe1xyXG4gIGRhdGEsXHJcbiAgY29sdW1ucyxcclxuICB0YWJOYW1lLFxyXG4gIHRhYmxlSWQgPSAnJyxcclxuICBlbXB0eU1lc3NhZ2UgPSAnTsOjbyBmb2kgZW5jb250cmFkYSBuZW5odW1hIGluZm9ybWHDp8OjbyBubyBwZXLDrW9kbyBwZXNxdWlzYWRvLidcclxufSkge1xyXG4gIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YWItcGFuZVtkYXRhLXRhYj1cIiR7dGFiTmFtZX1cIl1gKVxyXG4gIGNvbnN0IHRhYk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YWJbZGF0YS10YWI9XCIke3RhYk5hbWV9XCJdYClcclxuXHJcbiAgaWYgKCF0YWJDb250YWluZXIpIHtcclxuICAgIHJldHVybiBjb25zb2xlLmVycm9yKGBbRXhhbXMgVGFibGVzXSBDb250YWluZXIgZWxlbWVudCBub3QgZm91bmQgZm9yIHRhYjogJHt0YWJOYW1lfWApXHJcbiAgfVxyXG5cclxuICBpZiAoIWRhdGEubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBlbXB0eUh0bWwgPSBjcmVhdGVFbXB0eU1lc3NhZ2UoZW1wdHlNZXNzYWdlKVxyXG4gICAgdGFiQ29udGFpbmVyLmlubmVySFRNTCA9IGVtcHR5SHRtbFxyXG5cclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgY29uc3QgeWVhcmx5RGF0YSA9IGdyb3VwRGF0YUJ5WWVhcihkYXRhLCBjb2x1bW5zKVxyXG4gIGNvbnN0IGhlYWRlclNldHRpbmdzID0gY29sdW1ucy5tYXAoY29sdW1uID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmNvbHVtbkRlZmF1bHRzLFxyXG4gICAgICBoZWFkZXJQcmVmaXg6ICcnLFxyXG4gICAgICB0b3RhbDogeWVhcmx5RGF0YS5zdW1tYXJ5W2NvbHVtbi5rZXldLFxyXG4gICAgICBhdmVyYWdlOiB5ZWFybHlEYXRhLnN1bW1hcnlbY29sdW1uLmtleV0gLyB5ZWFybHlEYXRhLnN1bW1hcnkucm93cyxcclxuICAgICAgLi4uY29sdW1uXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgdGFibGVIZWFkZXJIdG1sID0gY3JlYXRlVGFibGVIZWFkZXIoaGVhZGVyU2V0dGluZ3MpXHJcblxyXG4gIGNvbnN0IHRhYmxlQ29sbGFwc2VIdG1sID0gT2JqZWN0LmVudHJpZXMoeWVhcmx5RGF0YS5lbnRyaWVzKVxyXG4gICAgLm1hcCgoW3llYXIsIHJvd3NdKSA9PiB7XHJcbiAgICAgIHJldHVybiBjcmVhdGVDb2xsYXBzZSh5ZWFyLCByb3dzLCBjb2x1bW5zKVxyXG4gICAgfSlcclxuICAgIC5qb2luKCcnKVxyXG5cclxuICBjb25zdCB0YWJsZUh0bWwgPSBgPHRhYmxlIGNsYXNzPVwidGFibGUtY29sbGFwc2UgLXRyZWUgLXBhZGRlZCAtaG92ZXJcIiBpZD1cIiR7dGFibGVJZH1cIj4ke3RhYmxlSGVhZGVySHRtbH0ke3RhYmxlQ29sbGFwc2VIdG1sfTwvdGFibGU+YFxyXG4gICAgLnJlcGxhY2UoL1tcXHRcXG5dL2csICcnKSAvLyByZW1vdmUgd2hpdGUgc3BhY2VzIGFuZCB0YWJzXHJcbiAgICAucmVwbGFjZSgvXFxzXFxzKyg/PVtePjxdKjwpL2csICcnKSAvLyByZW1vdmUgaW5kZW50YXRpb25cclxuXHJcbiAgdGFiQ29udGFpbmVyLmlubmVySFRNTCA9IHRhYmxlSHRtbFxyXG5cclxuICBpZiAoIXRhYk5hdi5jbGFzc0xpc3QuY29udGFpbnMoJy1hY3RpdmUnKSkge1xyXG4gICAgVGFicy5wdWxzZVRhYih0YWJOYXYpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYnVpbGRcclxufVxyXG4iLCJpbXBvcnQgVGFicyBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvdGFicydcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICB0YWJzSWQ6ICcjZXhhbXMtdGFicycsXHJcbiAgdGFic1BhbmVJZDogJyNleGFtcy1zZWFyY2gtcGFuZXMnXHJcbn1cclxuXHJcbmNvbnN0IGdldFRhYnNFbGVtZW50cyA9ICgpID0+XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtjb25maWcudGFic0lkfSAudGFiYClcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUYWJzUGFuZSA9ICgpID0+XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcudGFic1BhbmVJZClcclxuXHJcbi8qKlxyXG4gKiBQdWJsaWMgQVBJXHJcbiAqL1xyXG5mdW5jdGlvbiBtb3VudCAoKSB7XHJcbiAgVGFicy5pbml0KGNvbmZpZy50YWJzSWQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEluaXRpYWxTdGF0ZSAoKSB7XHJcbiAgWy4uLmdldFRhYnNFbGVtZW50cygpXS5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJy1hY3RpdmUnKVxyXG5cclxuICAgIGlmICghaXNBY3RpdmUpIHtcclxuICAgICAgVGFicy5kaXNhYmxlZFRhYih0YWIpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlQWxsICgpIHtcclxuICBbLi4uZ2V0VGFic0VsZW1lbnRzKCldLmZvckVhY2godGFiID0+IHtcclxuICAgIFRhYnMuZW5hYmxlVGFiKHRhYilcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbW91bnQsXHJcbiAgc2V0SW5pdGlhbFN0YXRlLFxyXG4gIGVuYWJsZUFsbFxyXG59XHJcbiIsIi8qKlxyXG4gKiBIZWxwZXJzXHJcbiAqL1xyXG5pbXBvcnQgeyByZXNldEZvcm0gfSBmcm9tICdvcnF1ZXN0cmEtaGVscGVycydcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnRlc1xyXG4gKi9cclxuaW1wb3J0IFRhYmxlQ29sbGFwc2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWJsZS1jb2xsYXBzZSdcclxuaW1wb3J0IHsgYXBwZW5kRGF0YSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFibGUtbXVsdGl2YWx1ZSdcclxuXHJcbi8qKlxyXG4gKiBNw7NkdWxvc1xyXG4gKi9cclxuaW1wb3J0IE9jY3VwYXRpb25hbEV4YW1zVGFibGUgZnJvbSAnLi4vb2NjdXBhdGlvbmFsLWV4YW1zLXRhYmxlJ1xyXG5pbXBvcnQgUmVjb21tZW5kYXRpb25zVGFibGUgZnJvbSAnLi4vcmVjb21tZW5kYXRpb25zLXRhYmxlJ1xyXG5pbXBvcnQgQWN0aW9uc1RhYmxlIGZyb20gJy4uL2FjdGlvbnMtdGFibGUnXHJcbmltcG9ydCBFeGFtc1RhYmxlc0NvbmZpZyBmcm9tICcuL2V4YW1zLXRhYmxlcy1jb25maWcnXHJcbmltcG9ydCBFeGFtc0Zvcm0gZnJvbSAnLi9leGFtcy1mb3JtJ1xyXG5pbXBvcnQgRXhhbXNUYWJzIGZyb20gJy4vZXhhbXMtdGFicydcclxuaW1wb3J0IEV4YW1zVGFibGVzIGZyb20gJy4vZXhhbXMtdGFibGVzJ1xyXG5pbXBvcnQgVGFza0NvbnRyb2xsZXJzIGZyb20gJy4vdGFzay1jb250cm9sbGVycydcclxuXHJcbi8qKlxyXG4gKiBGb250ZXMgZGUgRGFkb3MgT3JxdWVzdHJhXHJcbiAqL1xyXG5pbXBvcnQgTGl2ZXMgZnJvbSAnLi9hcGkvYXBpLmxpdmVzJ1xyXG5pbXBvcnQgQ29vcmRpbmF0aW9uIGZyb20gJy4vYXBpL2FwaS5jb29yZGluYXRpb24nXHJcbmltcG9ydCBIZWxwUGx1cyBmcm9tICcuL2FwaS9hcGkuaGVscC1wbHVzJ1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIHN0YWdlOiB7XHJcbiAgICB0YXNrQWxpYXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnBEc0Zsb3dFbGVtZW50QWxpYXMnKS52YWx1ZSxcclxuICAgIHByb2R1Y3RUeXBlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbeG5hbWU9aW5wdGlwb1Byb2R1dG9dJykudmFsdWVcclxuICB9LFxyXG4gIHRhYmxlczogRXhhbXNUYWJsZXNDb25maWdcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU2VhcmNoRG9uZSAoW2xpdmVzRGF0YSwgaGVscERhdGEsIGNvb3JkRGF0YV0pIHtcclxuICBjb25zdCB7IHRhc2tBbGlhcyB9ID0gY29uZmlnLnN0YWdlXHJcblxyXG4gIGJ1aWxkVGFibGVzKHtcclxuICAgIGxpdmVzRGF0YSxcclxuICAgIGhlbHBEYXRhLFxyXG4gICAgY29vcmREYXRhXHJcbiAgfSlcclxuXHJcbiAgRXhhbXNGb3JtLnJlbW92ZUxvYWRpbmdTdGF0ZSgpXHJcbiAgaW5pdEZvcm1UYWJsZXMoKVxyXG5cclxuICBpZiAodGFza0FsaWFzID09PSAnZWxhYm9yYWNhbycpIHtcclxuICAgIFRhc2tDb250cm9sbGVycy5lbmFibGVDb25jbHVkZSgpXHJcbiAgfVxyXG5cclxuICBpZiAodGFza0FsaWFzID09PSAnY29tcGxlbWVudGFjYW8nKSB7XHJcbiAgICBwZXJzaXN0U2VhcmNoRGF0YSh7IGhlbHBEYXRhLCBjb29yZERhdGEgfSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkVGFibGVzICh7IGxpdmVzRGF0YSwgaGVscERhdGEsIGNvb3JkRGF0YSB9KSB7XHJcbiAgY29uc3QgeyBwcm9kdWN0VHlwZSB9ID0gY29uZmlnLnN0YWdlXHJcbiAgbGV0IGNvbmZpZ1RhYmxlc0hlbHAgPSBjb25maWcudGFibGVzLmhlbHBcclxuXHJcbiAgaWYgKHByb2R1Y3RUeXBlID09PSAnUFBSQScpIHtcclxuICAgIGNvbmZpZ1RhYmxlc0hlbHAgPSByZW1vdmVDb2x1bW5Gcm9tQ29uZmlnKFxyXG4gICAgICAncXVhbnRpdHlTdXBwb3J0Q29vcmQnLFxyXG4gICAgICBjb25maWcudGFibGVzLmhlbHBcclxuICAgIClcclxuICB9XHJcblxyXG4gIEV4YW1zVGFibGVzLmJ1aWxkKHtcclxuICAgIGRhdGE6IGxpdmVzRGF0YSxcclxuICAgIC4uLmNvbmZpZy50YWJsZXMubGl2ZXNcclxuICB9KVxyXG5cclxuICBFeGFtc1RhYmxlcy5idWlsZCh7XHJcbiAgICBkYXRhOiBoZWxwRGF0YSxcclxuICAgIC4uLmNvbmZpZ1RhYmxlc0hlbHBcclxuICB9KVxyXG5cclxuICBFeGFtc1RhYmxlcy5idWlsZCh7XHJcbiAgICBkYXRhOiBjb29yZERhdGEsXHJcbiAgICAuLi5jb25maWcudGFibGVzLmNvb3JkXHJcbiAgfSlcclxuXHJcbiAgRXhhbXNUYWJzLmVuYWJsZUFsbCgpXHJcbiAgVGFibGVDb2xsYXBzZS5pbml0KCcudGFibGUtY29sbGFwc2UnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwZXJzaXN0U2VhcmNoRGF0YSAoeyBoZWxwRGF0YSwgY29vcmREYXRhIH0pIHtcclxuICBhcHBlbmREYXRhKFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBsYXRlLWhlbHAnKSxcclxuICAgIEhlbHBQbHVzLnBlcnNpc3REYXRhKGhlbHBEYXRhKVxyXG4gIClcclxuXHJcbiAgYXBwZW5kRGF0YShcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wbGF0ZS1jb29yZGVuYWNhbycpLFxyXG4gICAgQ29vcmRpbmF0aW9uLnBlcnNpc3REYXRhKGNvb3JkRGF0YSlcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRGb3JtVGFibGVzICgpIHtcclxuICBjb25zdCB7IHRhc2tBbGlhcywgcHJvZHVjdFR5cGUgfSA9IGNvbmZpZy5zdGFnZVxyXG5cclxuICBPY2N1cGF0aW9uYWxFeGFtc1RhYmxlLmluaXQoeyB0YXNrQWxpYXMsIHByb2R1Y3RUeXBlIH0pXHJcbiAgQWN0aW9uc1RhYmxlLmluaXQoeyB0YXNrQWxpYXMsIHByb2R1Y3RUeXBlIH0pXHJcbiAgUmVjb21tZW5kYXRpb25zVGFibGUuaW5pdCh7IHRhc2tBbGlhcywgcHJvZHVjdFR5cGUgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU2VhcmNoRXJyb3IgKGVycikge1xyXG4gIGNvbnNvbGUuZXJyb3IoJ1tFeGFtcyBTZWFyY2hdIFNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyB0aGUgc2VhcmNoJylcclxuICBjb25zb2xlLmVycm9yKGVycilcclxuXHJcbiAgRXhhbXNGb3JtLnJlbW92ZUxvYWRpbmdTdGF0ZSgpXHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZUNvbHVtbkZyb21Db25maWcgPSAodGFibGVLZXksIHRhYmxlQ29uZmlnKSA9PiB7XHJcbiAgY29uc3QgY29sdW1uSW5kZXggPSB0YWJsZUNvbmZpZy5jb2x1bW5zXHJcbiAgICAuZmluZEluZGV4KCh7IGtleSB9KSA9PiBrZXkgPT09IHRhYmxlS2V5KVxyXG5cclxuICB0YWJsZUNvbmZpZy5jb2x1bW5zLnNwbGljZShjb2x1bW5JbmRleCwgMSlcclxuXHJcbiAgcmV0dXJuIHRhYmxlQ29uZmlnXHJcbn1cclxuXHJcbmNvbnN0IHNob3VsZE1vdW50Q29tcG9uZW50ID0gdGFza0FsaWFzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgW1xyXG4gICAgICAnZWxhYm9yYWNhbycsXHJcbiAgICAgICdjb21wbGVtZW50YWNhbycsXHJcbiAgICAgICdlbGFib3JhY2FvQW51YWwnLFxyXG4gICAgICAnY29tcGxlbWVudGFjYW9BbnVhbCdcclxuICAgIF1cclxuICAgICAgLmluY2x1ZGVzKHRhc2tBbGlhcylcclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHNob3VsZFJlc2V0Rm9ybSA9IHRhc2tBbGlhcyA9PiB7XHJcbiAgcmV0dXJuIHRhc2tBbGlhcyA9PT0gJ3Jlc2V0J1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bm1vdW50ICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1zZWN0aW9uOm5vdCgjc2VjdGlvbi1pbnRybyknKVxyXG4gICAgLmZvckVhY2goc2VjdGlvbiA9PiBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VudCAoKSB7XHJcbiAgY29uc3QgeyBoYXNFcnJvcnMgfSA9IEV4YW1zRm9ybS5TZWFyY2hGb3JtLnZhbGlkYXRlKHRydWUpXHJcblxyXG4gIEV4YW1zRm9ybS5tb3VudCgpXHJcbiAgRXhhbXNUYWJzLm1vdW50KClcclxuXHJcbiAgaWYgKGhhc0Vycm9ycykge1xyXG4gICAgVGFza0NvbnRyb2xsZXJzLmRpc2FibGVkQ29uY2x1ZGUoKVxyXG4gICAgRXhhbXNUYWJzLnNldEluaXRpYWxTdGF0ZSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHBlcmlvZCA9IEV4YW1zRm9ybS5nZXRQZXJpb2QoKVxyXG5cclxuICAgIHNlYXJjaERhdGEocGVyaW9kKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgY29uc3Qgc2hvdWxkTW91bnQgPSBzaG91bGRNb3VudENvbXBvbmVudChjb25maWcuc3RhZ2UudGFza0FsaWFzKVxyXG4gIGNvbnN0IHNob3VsZFJlc2V0ID0gc2hvdWxkUmVzZXRGb3JtKGNvbmZpZy5zdGFnZS50YXNrQWxpYXMpXHJcblxyXG4gIGlmIChzaG91bGRSZXNldCkge1xyXG4gICAgcmVzZXRGb3JtKHRydWUpXHJcbiAgfVxyXG5cclxuICBpZiAoIXNob3VsZE1vdW50KSB7XHJcbiAgICByZXR1cm4gdW5tb3VudCgpXHJcbiAgfVxyXG5cclxuICBtb3VudCgpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hEYXRhICh7IHN0YXJ0LCBlbmQgfSkge1xyXG4gIGNvbnN0IGxpdmVzRGF0YSA9IExpdmVzLmdldERhdGFGcm9tUGVyaW9kKHtcclxuICAgIHN0YXJ0LFxyXG4gICAgZW5kLFxyXG4gICAgY29tcGFueUlkOiAnaWQtY29tcGFueScsXHJcbiAgICBleHBvcnRJZDogJ2V4cG9ydC1pZCcsXHJcbiAgICBhcGlLZXk6ICdhcGkta2V5J1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhlbHBQbHVzRGF0YSA9IEhlbHBQbHVzLmdldERhdGFGcm9tUGVyaW9kKHtcclxuICAgIHN0YXJ0LFxyXG4gICAgZW5kLFxyXG4gICAgcHJvcG9zYWw6ICcnLFxyXG4gICAgcHJvZHVjdElkOiAnJyxcclxuICAgIHByb2R1Y3RUeXBlOiBjb25maWcuc3RhZ2UucHJvZHVjdFR5cGVcclxuICB9KVxyXG5cclxuICBjb25zdCBjb29yZGluYXRpb25EYXRhID0gQ29vcmRpbmF0aW9uLmdldERhdGFGcm9tUGVyaW9kKHtcclxuICAgIHN0YXJ0LFxyXG4gICAgZW5kLFxyXG4gICAgY25wajogJydcclxuICB9KVxyXG5cclxuICBFeGFtc0Zvcm0uYWRkTG9hZGluZ1N0YXRlKClcclxuXHJcbiAgUHJvbWlzZS5hbGwoW1xyXG4gICAgbGl2ZXNEYXRhLFxyXG4gICAgaGVscFBsdXNEYXRhLFxyXG4gICAgY29vcmRpbmF0aW9uRGF0YVxyXG4gIF0pXHJcbiAgICAudGhlbihyZXN1bHRzID0+IGhhbmRsZVNlYXJjaERvbmUocmVzdWx0cykpXHJcbiAgICAuY2F0Y2goZXJyID0+IGhhbmRsZVNlYXJjaEVycm9yKGVycikpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBpbml0XHJcbn1cclxuIiwiY29uc3QgY29uZmlnID0ge1xyXG4gIGFsZXJ0SWQ6ICdzZWFyY2gtZGF0YS1hbGVydCcsXHJcbiAgJGJ0bkNvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRyb2xsZXJzICNidXR0b25zJyksXHJcbiAgJGJ0bkZpbmlzaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkZpbmlzaCcpLFxyXG4gICR3ZWxsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udHJvbGxlcnMgLndlbGwnKVxyXG59XHJcblxyXG5jb25zdCBnZXRBbGVydEh0bWwgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIGlkPVwiJHtjb25maWcuYWxlcnRJZH1cIj5cclxuICAgIDxzdHJvbmc+QXRlbsOnw6NvITwvc3Ryb25nPiBBbnRlcyBkZSBjb25jbHVpciBhIGF0aXZpZGFkZSB2b2PDqiBkZXZlIDxzdHJvbmc+cGVzcXVpc2FyPC9zdHJvbmc+IHBvciB1bSBwZXLDrW9kbyBkZSBsZXZhbnRhbWVudG8uXHJcbiAgPC9kaXY+XHJcbiAgYFxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlZENvbmNsdWRlICgpIHtcclxuICBjb25zdCBhbGVydEh0bWwgPSBnZXRBbGVydEh0bWwoKVxyXG5cclxuICBjb25maWcuJGJ0bkZpbmlzaC5kaXNhYmxlZCA9IHRydWVcclxuICBjb25maWcuJHdlbGwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICBjb25maWcuJGJ0bkNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgYWxlcnRIdG1sKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVDb25jbHVkZSAoKSB7XHJcbiAgY29uc3QgcmVxdWlyZWRBbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbmZpZy5hbGVydElkfWApXHJcblxyXG4gIGNvbmZpZy4kYnRuRmluaXNoLmRpc2FibGVkID0gZmFsc2VcclxuICBjb25maWcuJHdlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuXHJcbiAgaWYgKHJlcXVpcmVkQWxlcnQpIHtcclxuICAgIHJlcXVpcmVkQWxlcnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkaXNhYmxlZENvbmNsdWRlLFxyXG4gIGVuYWJsZUNvbmNsdWRlXHJcbn1cclxuIiwiaW1wb3J0IHsgcGFyc2VEYXRlLCBnZXRNb250aE5hbWUgfSBmcm9tICdvcnF1ZXN0cmEtaGVscGVycydcclxuaW1wb3J0IHsgVGFibGVNdWx0aXZhbHVlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWJsZS1tdWx0aXZhbHVlJ1xyXG5pbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZW1wbGF0ZSdcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAkc2VjdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlY3Rpb24tZXhhbXMnKSxcclxuICB0YWJsZVNlbGVjdG9yOiAnI3RibC1leGFtcycsXHJcbiAgYWxlcnRTZWxlY3RvcjogJyNleGFtcy1hbGVydCdcclxufVxyXG5cclxuZnVuY3Rpb24gbW91bnQgKHsgcmVhZG9ubHkgPSBmYWxzZSwgYWxlcnQgPSBmYWxzZSB9KSB7XHJcbiAgY29uZmlnLiRzZWN0aW9uXHJcbiAgICAuY2xhc3NMaXN0XHJcbiAgICAucmVtb3ZlKCdoaWRkZW4nKVxyXG5cclxuICBpZiAoYWxlcnQpIHtcclxuICAgIGNyZWF0ZUFsZXJ0KClcclxuICB9XHJcblxyXG4gIGlmIChyZWFkb25seSkge1xyXG4gICAgcmV0dXJuIHNldFJlYWRPbmx5KClcclxuICB9XHJcblxyXG4gIGNvbnN0IEV4YW1zVGFibGUgPSBuZXcgVGFibGVNdWx0aXZhbHVlKGNvbmZpZy50YWJsZVNlbGVjdG9yLCBoYW5kZVRhYmxlTW91bnQpXHJcblxyXG4gIEV4YW1zVGFibGUub24oJ2FmdGVySW5zZXJ0JywgaGFuZGxlTmV3Um93KVxyXG4gIEV4YW1zVGFibGUub24oJ2JlZm9yZURlbGV0ZScsIHVwZGF0ZVRlbXBsYXRlRGF0YSlcclxuICBFeGFtc1RhYmxlLm9uKCdhZnRlckRlbGV0ZScsIGhhbmRsZURlbGV0ZVJvdylcclxuXHJcbiAgcmV0dXJuIEV4YW1zVGFibGVcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UmVhZE9ubHkgKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnRhYmxlU2VsZWN0b3IpXHJcbiAgICAuY2xhc3NMaXN0XHJcbiAgICAuYWRkKCctcmVhZG9ubHknLCAnLWhvdmVyJylcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWxlcnQgKCkge1xyXG4gIGNvbnN0IHJlcG9ydERhdGVTdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbeG5hbWU9aW5wZGF0YUNpY2xvUmVsYXRvcmlvXScpLnZhbHVlXHJcbiAgY29uc3QgcmVwb3J0RGF0ZSA9IHBhcnNlRGF0ZShyZXBvcnREYXRlU3RyKVxyXG4gIGNvbnN0IG1vbnRoID0gZ2V0TW9udGhOYW1lKHJlcG9ydERhdGUpXHJcbiAgY29uc3QgeWVhciA9IHJlcG9ydERhdGUuZ2V0RnVsbFllYXIoKVxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBgT3MgZGFkb3MgYWJhaXhvIHPDo28gcmVmZXJlbnRlcyBhbyByZWxhdMOzcmlvIHNlbWVzdHJhbCBlbGFib3JhZG8gZW0gJHttb250aH0vJHt5ZWFyfS5gXHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Y29uZmlnLmFsZXJ0U2VsZWN0b3J9YCkudGV4dENvbnRlbnQgPSBtZXNzYWdlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xyXG4gIGNvbmZpZy4kc2VjdGlvbi5yZW1vdmUoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kZVRhYmxlTW91bnQgKHJvdykge1xyXG4gIGNvbnN0IHRvdGFsTGFiZWwgPSByb3cucXVlcnlTZWxlY3RvcignW2RhdGEtYmluZD1leGFtZXNUaXBvVG90YWxdJylcclxuICBjb25zdCBpbnB1dHMgPSBnZXRJbnB1dHMocm93KVxyXG4gIGNvbnN0IGJ0bkRlbGV0ZSA9IHJvdy5xdWVyeVNlbGVjdG9yKCcuYnRuLWRlbGV0ZS1tdicpXHJcblxyXG4gIHNldFRyaWdnZXJzKGlucHV0cywgYnRuRGVsZXRlKVxyXG5cclxuICAvKipcclxuICAgKiBEaXNjbGFpbWVyOlxyXG4gICAqIEZvcsOnYSBhIGF1dGFsaXphw6fDo28gZG8gbGFiZWwgZGEgY29sdW5hIGBUb3RhbGAgbmEgdGFiZWxhIGRlIEV4YW1lcyBPY3VwYWNpb25haXMuXHJcbiAgICogU29tZW50ZSBuZWNlc3PDoXJpbyBwb2lzIGEgZnVuw6fDo28gYEluc2VydE5ld1Jvd2AgZG8gT3JxdWVzdHJhIGZheiB1bSBjbG9uZSBkYSAxwrogbGluaGFcclxuICAgKiBkYSB0YWJlbGEsIGNvcGlhbmRvIHRhbWLDqW0gbyB2YWxvciB0b3RhbCBwcmVzZW50ZSBuYSBsaW5oYSBjb3BpYWRhLiBEZXN0YSBmb3JtYSxcclxuICAgKiBvIG3DqXRvZG8gYHVwZGF0ZWAgZG8gY29tcG9uZW50ZSBgVGVtcGxhdGVgIGF0dWFsaXphIG8gbGFiZWwgcGFyYSBvIHZhbG9yIGNvcnJldG8uXHJcbiAgICovXHJcbiAgVGVtcGxhdGUudXBkYXRlKHRvdGFsTGFiZWwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU5ld1JvdyAoZSkge1xyXG4gIGNvbnN0IHsgbGFzdFJvdyB9ID0gZS5kZXRhaWxcclxuICBjb25zdCB0b3RhbElucHV0ID0gZ2V0SW5wdXRUb3RhbChsYXN0Um93KVxyXG5cclxuICBUZW1wbGF0ZS5tb3VudCh0b3RhbElucHV0KVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUZW1wbGF0ZURhdGEgKGUpIHtcclxuICBjb25zdCB7IGRlbGV0ZWRSb3cgfSA9IGUuZGV0YWlsXHJcbiAgY29uc3QgdG90YWxJbnB1dCA9IGdldElucHV0VG90YWwoZGVsZXRlZFJvdylcclxuXHJcbiAgVGVtcGxhdGUucmVtb3ZlKHRvdGFsSW5wdXQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZVJvdyAoZSkge1xyXG4gIGNvbnN0IHsgdGFibGUgfSA9IGUuZGV0YWlsXHJcbiAgY29uc3Qgc3VtbWFyeSA9IGdldFN1bW1hcnlUYWJsZSgpXHJcblxyXG4gIHVwZGF0ZVN1bW1hcnkodGFibGUsIHN1bW1hcnkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRyaWdnZXJzIChpbnB1dHMsIGJ0bkRlbGV0ZSkge1xyXG4gIE9iamVjdFxyXG4gICAgLnZhbHVlcyhpbnB1dHMpXHJcbiAgICAuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSAoKSB7XHJcbiAgY29uc3Qgcm93ID0gdGhpcy5jbG9zZXN0KCd0cicpXHJcbiAgY29uc3QgdGFibGUgPSB0aGlzLmNsb3Nlc3QoJ3RhYmxlJylcclxuICBjb25zdCBzdW1tYXJ5ID0gZ2V0U3VtbWFyeVRhYmxlKClcclxuICBjb25zdCBpbnB1dHMgPSBnZXRJbnB1dHMocm93KVxyXG5cclxuICB1cGRhdGVSb3dUb3RhbChpbnB1dHMpXHJcbiAgdXBkYXRlU3VtbWFyeSh0YWJsZSwgc3VtbWFyeSlcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUm93VG90YWwgKHsgbm9ybWFsLCBhbHRlcmVkLCB0b3RhbCB9KSB7XHJcbiAgY29uc3Qgbm9ybWFsQ291bnQgPSBwYXJzZUludChub3JtYWwudmFsdWUpIHx8IDBcclxuICBjb25zdCBhbHRlcmVkQ291bnQgPSBwYXJzZUludChhbHRlcmVkLnZhbHVlKSB8fCAwXHJcblxyXG4gIHRvdGFsLnZhbHVlID0gbm9ybWFsQ291bnQgKyBhbHRlcmVkQ291bnRcclxuXHJcbiAgLy8gZGlzcGFyYSBtYW51YWxtZW50ZSBvIGV2ZW50byBgY2hhbmdlYCBwYXJhXHJcbiAgLy8gYXR1YWxpemFyIG8gb2JqZXRvIGBkb2N1bWVudC5kYXRhYCwgdXRpbGl6YWRvXHJcbiAgLy8gcGVsbyBjb21wb25lbnRlIFRlbXBsYXRlLlxyXG4gICQodG90YWwpLnRyaWdnZXIoJ2NoYW5nZScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN1bW1hcnkgKHRhYmxlLCBzdW1tYXJ5KSB7XHJcbiAgY29uc3QgdG90YWxJbnB1dHMgPSBnZXRTdW1tYXJ5SW5wdXRzKHN1bW1hcnkpXHJcbiAgY29uc3QgZXhhbXNEYXRhID0gZ2V0RXhhbXNEYXRhKHRhYmxlKVxyXG5cclxuICB0b3RhbElucHV0cy5ub3JtYWwudmFsdWUgPSBzdW1FeGFtcyhleGFtc0RhdGEsICdub3JtYWwnKVxyXG4gIHRvdGFsSW5wdXRzLmFsdGVyZWQudmFsdWUgPSBzdW1FeGFtcyhleGFtc0RhdGEsICdhbHRlcmVkJylcclxuICB0b3RhbElucHV0cy50b3RhbC52YWx1ZSA9IHN1bUV4YW1zKGV4YW1zRGF0YSwgJ3RvdGFsJylcclxuXHJcbiAgLy8gZGlzcGFyYSBtYW51YWxtZW50ZSBvIGV2ZW50byBgY2hhbmdlYCBwYXJhXHJcbiAgLy8gYXR1YWxpemFyIG8gb2JqZXRvIGBkb2N1bWVudC5kYXRhYCwgdXRpbGl6YWRvXHJcbiAgLy8gcGVsbyBjb21wb25lbnRlIFRlbXBsYXRlLlxyXG4gIE9iamVjdC52YWx1ZXModG90YWxJbnB1dHMpXHJcbiAgICAuZm9yRWFjaChpbnB1dCA9PiAkKGlucHV0KS50cmlnZ2VyKCdjaGFuZ2UnKSlcclxufVxyXG5cclxuY29uc3Qgc3VtRXhhbXMgPSAoZGF0YSwgdHlwZSkgPT5cclxuICBkYXRhLmZpbHRlcigoeyBpbnB1dCB9KSA9PiBpbnB1dCA9PT0gdHlwZSlcclxuICAgIC5yZWR1Y2UoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0LnZhbHVlLCAwKVxyXG5cclxuY29uc3QgZ2V0SW5wdXRzID0gcm93ID0+ICh7XHJcbiAgbm9ybWFsOiByb3cucXVlcnlTZWxlY3RvcignW3huYW1lPWlucGV4YW1lc05vcm1haXNdJyksXHJcbiAgYWx0ZXJlZDogcm93LnF1ZXJ5U2VsZWN0b3IoJ1t4bmFtZT1pbnBleGFtZXNBbHRlcmFkb3NdJyksXHJcbiAgdG90YWw6IHJvdy5xdWVyeVNlbGVjdG9yKCdbeG5hbWU9aW5wZXhhbWVzVGlwb1RvdGFsXScpXHJcbn0pXHJcblxyXG5jb25zdCBnZXRJbnB1dFRvdGFsID0gcm93ID0+XHJcbiAgcm93LnF1ZXJ5U2VsZWN0b3IoJ1t4bmFtZT1pbnBleGFtZXNUaXBvVG90YWxdJylcclxuXHJcbmNvbnN0IGdldEV4YW1zRGF0YSA9IHRhYmxlID0+IHtcclxuICBjb25zdCBkYXRhID0gWy4uLnRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyOm5vdCguaGVhZGVyKScpXVxyXG4gICAgLm1hcChyb3cgPT4gZ2V0SW5wdXRWYWx1ZXMocm93KSlcclxuXHJcbiAgLy8gcmVhbGl6YSBvIGBmbGF0YCBkbyBhcnJheSBiaWRpbWVuc2lvbmFsIGRlIHZhbG9yZXNcclxuICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCBkYXRhKVxyXG59XHJcblxyXG5jb25zdCBnZXRJbnB1dFZhbHVlcyA9IHJvdyA9PiB7XHJcbiAgY29uc3QgdmFsdWVzID0gT2JqZWN0LmVudHJpZXMoZ2V0SW5wdXRzKHJvdykpXHJcbiAgICAubWFwKChba2V5LCBpbnB1dF0pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbnB1dDoga2V5LFxyXG4gICAgICAgIHZhbHVlOiBwYXJzZUludChpbnB1dC52YWx1ZSkgfHwgMFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCB2YWx1ZXMpXHJcbn1cclxuXHJcbmNvbnN0IGdldFN1bW1hcnlUYWJsZSA9ICgpID0+XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RibC1leGFtZXMtdG90YWwnKVxyXG5cclxuY29uc3QgZ2V0U3VtbWFyeUlucHV0cyA9IHRhYmxlID0+ICh7XHJcbiAgbm9ybWFsOiB0YWJsZS5xdWVyeVNlbGVjdG9yKCdbeG5hbWU9aW5wZXhhbWVzVG90YWxOb3JtYWxdJyksXHJcbiAgYWx0ZXJlZDogdGFibGUucXVlcnlTZWxlY3RvcignW3huYW1lPWlucGV4YW1lc1RvdGFsQWx0ZXJhZG9dJyksXHJcbiAgdG90YWw6IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ1t4bmFtZT1pbnBleGFtZXNUb3RhbEdsb2JhbF0nKVxyXG59KVxyXG5cclxuY29uc3Qgc2hvdWxkTW91bnRUYWJsZSA9ICh0YXNrQWxpYXMsIHByb2R1Y3RUeXBlKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIChwcm9kdWN0VHlwZSA9PT0gJ1BDTVNPJykgJiZcclxuICAgIChcclxuICAgICAgW1xyXG4gICAgICAgICdlbGFib3JhY2FvJyxcclxuICAgICAgICAnY29tcGxlbWVudGFjYW8nLFxyXG4gICAgICAgICdlbGFib3JhY2FvQW51YWwnLFxyXG4gICAgICAgICdjb21wbGVtZW50YWNhb0FudWFsJ1xyXG4gICAgICBdXHJcbiAgICAgICAgLmluY2x1ZGVzKHRhc2tBbGlhcylcclxuICAgIClcclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHNob3VsZEJlUmVhZG9ubHkgPSAodGFza0FsaWFzLCBwcm9kdWN0VHlwZSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAocHJvZHVjdFR5cGUgPT09ICdQQ01TTycpICYmXHJcbiAgICAoXHJcbiAgICAgIFtcclxuICAgICAgICAnY29tcGxlbWVudGFjYW8nLFxyXG4gICAgICAgICdlbGFib3JhY2FvQW51YWwnLFxyXG4gICAgICAgICdjb21wbGVtZW50YWNhb0FudWFsJ1xyXG4gICAgICBdXHJcbiAgICAgICAgLmluY2x1ZGVzKHRhc2tBbGlhcylcclxuICAgIClcclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHNob3VsZFNob3dBbGVydCA9ICh0YXNrQWxpYXMsIHByb2R1Y3RUeXBlKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIChwcm9kdWN0VHlwZSA9PT0gJ1BDTVNPJykgJiZcclxuICAgIChcclxuICAgICAgW1xyXG4gICAgICAgICdlbGFib3JhY2FvQW51YWwnLFxyXG4gICAgICAgICdjb21wbGVtZW50YWNhb0FudWFsJ1xyXG4gICAgICBdXHJcbiAgICAgICAgLmluY2x1ZGVzKHRhc2tBbGlhcylcclxuICAgIClcclxuICApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQdWJsaWMgQVBJXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0ICh7IHRhc2tBbGlhcywgcHJvZHVjdFR5cGUgfSkge1xyXG4gIGNvbnN0IHJlYWRvbmx5ID0gc2hvdWxkQmVSZWFkb25seSh0YXNrQWxpYXMsIHByb2R1Y3RUeXBlKVxyXG4gIGNvbnN0IHNob3VsZE1vdW50ID0gc2hvdWxkTW91bnRUYWJsZSh0YXNrQWxpYXMsIHByb2R1Y3RUeXBlKVxyXG4gIGNvbnN0IGFsZXJ0ID0gc2hvdWxkU2hvd0FsZXJ0KHRhc2tBbGlhcywgcHJvZHVjdFR5cGUpXHJcblxyXG4gIGlmICghc2hvdWxkTW91bnQpIHtcclxuICAgIHJldHVybiBkZXN0cm95KClcclxuICB9XHJcblxyXG4gIHJldHVybiBtb3VudCh7IHJlYWRvbmx5LCBhbGVydCB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaW5pdFxyXG59XHJcbiIsImltcG9ydCB7IFRhYmxlTXVsdGl2YWx1ZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFibGUtbXVsdGl2YWx1ZSdcclxuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0YXJlYS1hdXRvc2l6ZSdcclxuaW1wb3J0IEJ1dHRvblJhZGlvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uLXJhZGlvJ1xyXG5pbXBvcnQgRGF0ZXBpY2tlclJhbmdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGF0ZXBpY2tlci1yYW5nZSdcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAkc2VjdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlY3Rpb24tcmVjb21tZW5kYXRpb25zJyksXHJcbiAgdGFibGVTZWxlY3RvcjogJyN0YmwtcmVjb21tZW5kYXRpb25zJyxcclxuICByZWNvbW1lbmRhdGlvbnNUZXh0YXJlYUlkOiAncmVjb21lbmRhY29lc0Rlc2NyaWNhbydcclxufVxyXG5cclxuZnVuY3Rpb24gbW91bnQgKHsgcmVhZG9ubHkgPSBmYWxzZSB9KSB7XHJcbiAgY29uZmlnLiRzZWN0aW9uXHJcbiAgICAuY2xhc3NMaXN0XHJcbiAgICAucmVtb3ZlKCdoaWRkZW4nKVxyXG5cclxuICBpZiAocmVhZG9ubHkpIHtcclxuICAgIHJldHVybiBzZXRSZWFkT25seSgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBSZWNvbW1lbmRhdGlvbnNUYWJsZSA9IG5ldyBUYWJsZU11bHRpdmFsdWUoY29uZmlnLnRhYmxlU2VsZWN0b3IsIGhhbmRlVGFibGVNb3VudClcclxuXHJcbiAgcmV0dXJuIFJlY29tbWVuZGF0aW9uc1RhYmxlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xyXG4gIGNvbmZpZy4kc2VjdGlvbi5yZW1vdmUoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRSZWFkT25seSAoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcudGFibGVTZWxlY3RvcilcclxuICAgIC5jbGFzc0xpc3RcclxuICAgIC5hZGQoJy1yZWFkb25seScsICctaG92ZXInKVxyXG5cclxuICBEYXRlcGlja2VyUmFuZ2UuaW5pdChgJHtjb25maWcudGFibGVTZWxlY3Rvcn0gLmlucHV0LW1vbnRocmFuZ2VgLCB7fSlcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGVUYWJsZU1vdW50IChyb3cpIHtcclxuICBCdXR0b25SYWRpby5pbml0KCcuYnRuLXJhZGlvLXdyYXBwZXInLCB0cnVlLCByb3cpXHJcbiAgVGV4dGFyZWFBdXRvc2l6ZS5pbml0KGBbeG5hbWU9aW5wJHtjb25maWcucmVjb21tZW5kYXRpb25zVGV4dGFyZWFJZH1dYCwgcm93KVxyXG4gIERhdGVwaWNrZXJSYW5nZS5pbml0KCcuaW5wdXQtbW9udGhyYW5nZScsIHtcclxuICAgIHN0YXJ0VmlldzogJ21vbnRocycsXHJcbiAgICBtaW5WaWV3TW9kZTogJ21vbnRocycsXHJcbiAgICBmb3JtYXQ6ICdNL3l5eXknXHJcbiAgfSwgcm93KVxyXG59XHJcblxyXG5jb25zdCBzaG91bGRNb3VudFRhYmxlID0gKHRhc2tBbGlhcywgcHJvZHVjdFR5cGUpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgW1xyXG4gICAgICAnY29tcGxlbWVudGFjYW8nLFxyXG4gICAgICAnZWxhYm9yYWNhb0FudWFsJyxcclxuICAgICAgJ2NvbXBsZW1lbnRhY2FvQW51YWwnXHJcbiAgICBdXHJcbiAgICAgIC5pbmNsdWRlcyh0YXNrQWxpYXMpXHJcbiAgKSB8fFxyXG4gIChwcm9kdWN0VHlwZSA9PT0gJ1BQUkEnICYmIHRhc2tBbGlhcyA9PT0gJ2VsYWJvcmFjYW8nKVxyXG59XHJcblxyXG5jb25zdCBzaG91bGRCZVJlYWRvbmx5ID0gKHRhc2tBbGlhcywgcHJvZHVjdFR5cGUpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgW1xyXG4gICAgICAnZWxhYm9yYWNhb0FudWFsJyxcclxuICAgICAgJ2NvbXBsZW1lbnRhY2FvQW51YWwnXHJcbiAgICBdXHJcbiAgICAgIC5pbmNsdWRlcyh0YXNrQWxpYXMpXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0ICh7IHRhc2tBbGlhcywgcHJvZHVjdFR5cGUgfSkge1xyXG4gIGNvbnN0IHJlYWRvbmx5ID0gc2hvdWxkQmVSZWFkb25seSh0YXNrQWxpYXMsIHByb2R1Y3RUeXBlKVxyXG4gIGNvbnN0IHNob3VsZE1vdW50ID0gc2hvdWxkTW91bnRUYWJsZSh0YXNrQWxpYXMsIHByb2R1Y3RUeXBlKVxyXG5cclxuICBpZiAoIXNob3VsZE1vdW50KSB7XHJcbiAgICByZXR1cm4gZGVzdHJveSgpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbW91bnQoeyByZWFkb25seSB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaW5pdFxyXG59XHJcbiIsImNvbnN0IGNvbmZpZyA9IHtcclxuICBzdGFnZToge1xyXG4gICAgdGFza0FsaWFzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wRHNGbG93RWxlbWVudEFsaWFzJykudmFsdWUsXHJcbiAgICBwcm9kdWN0VHlwZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3huYW1lPWlucHRpcG9Qcm9kdXRvXScpLnZhbHVlXHJcbiAgfSxcclxuICBzd2l0Y2hlczoge1xyXG4gICAgJGVtYWlsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbeG5hbWU9aW5wZW52aWFyRW1haWxdJyksXHJcbiAgICAkbGV0dGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbeG5hbWU9aW5wY2FydGFEZU9yaWVudGFjb2VzXScpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VudCAocHJvZHVjdFR5cGUpIHtcclxuICBpZiAocHJvZHVjdFR5cGUgPT09ICdQUFJBJykge1xyXG4gICAgY29uZmlnLnN3aXRjaGVzLiRlbWFpbFxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlT3B0aW9uRW1haWwpXHJcblxyXG4gICAgY29uZmlnLnN3aXRjaGVzLiRsZXR0ZXJcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZU9wdGlvbkxldHRlcilcclxuICB9IGVsc2Uge1xyXG4gICAgY29uZmlnLnN3aXRjaGVzLiRsZXR0ZXJcclxuICAgICAgLmNsb3Nlc3QoJy5jb2x1bW5zJylcclxuICAgICAgLnJlbW92ZSgpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVPcHRpb25FbWFpbCAoKSB7XHJcbiAgY29uc3QgeyBzd2l0Y2hlcyB9ID0gY29uZmlnXHJcbiAgY29uc3QgeyBlbWFpbCB9ID0gZ2V0VmFsdWVzKClcclxuXHJcbiAgaWYgKGVtYWlsKSB7XHJcbiAgICBzd2l0Y2hlcy4kbGV0dGVyLmNoZWNrZWQgPSBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlT3B0aW9uTGV0dGVyICgpIHtcclxuICBjb25zdCB7IHN3aXRjaGVzIH0gPSBjb25maWdcclxuICBjb25zdCB7IGxldHRlciB9ID0gZ2V0VmFsdWVzKClcclxuXHJcbiAgaWYgKGxldHRlcikge1xyXG4gICAgc3dpdGNoZXMuJGVtYWlsLmNoZWNrZWQgPSBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcclxuICBlbWFpbDogY29uZmlnLnN3aXRjaGVzLiRlbWFpbC5jaGVja2VkLFxyXG4gIGxldHRlcjogY29uZmlnLnN3aXRjaGVzLiRsZXR0ZXIuY2hlY2tlZFxyXG59KVxyXG5cclxuZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgY29uc3QgeyB0YXNrQWxpYXMsIHByb2R1Y3RUeXBlIH0gPSBjb25maWcuc3RhZ2VcclxuXHJcbiAgaWYgKHRhc2tBbGlhcyA9PT0gJ2NvbXBsZW1lbnRhY2FvJykge1xyXG4gICAgbW91bnQocHJvZHVjdFR5cGUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaW5pdFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=