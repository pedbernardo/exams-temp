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

/***/ "./node_modules/tiny-emitter/index.js":
/*!********************************************!*\
  !*** ./node_modules/tiny-emitter/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-emitter */ "./node_modules/tiny-emitter/index.js");
/* harmony import */ var tiny_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tiny_emitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/template */ "./src/js/components/template.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form */ "./src/js/components/form.js");
/* harmony import */ var _modules_equipments_equipments_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/equipments/equipments-table */ "./src/js/modules/equipments/equipments-table.js");
/* harmony import */ var _modules_equipments_equipments_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/equipments/equipments-form */ "./src/js/modules/equipments/equipments-form.js");
/* harmony import */ var _modules_intervention_intervention_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/intervention/intervention-form */ "./src/js/modules/intervention/intervention-form.js");






var AppEvents = new tiny_emitter__WEBPACK_IMPORTED_MODULE_0___default.a();
_components_template__WEBPACK_IMPORTED_MODULE_1__["default"].init();
_components_form__WEBPACK_IMPORTED_MODULE_2__["default"].conditionals();
_components_form__WEBPACK_IMPORTED_MODULE_2__["default"].on('avulso', function () {
  _modules_equipments_equipments_form__WEBPACK_IMPORTED_MODULE_4__["default"].mount(AppEvents);
  AppEvents.on('search-done', function (tableData) {
    _modules_equipments_equipments_table__WEBPACK_IMPORTED_MODULE_3__["default"].mount(tableData);
  });
});
_components_form__WEBPACK_IMPORTED_MODULE_2__["default"].on('controle', function () {
  _modules_equipments_equipments_table__WEBPACK_IMPORTED_MODULE_3__["default"].mount();
});
_components_form__WEBPACK_IMPORTED_MODULE_2__["default"].on(['checklist-certificado', 'checklist-relatorio'], function (taskAlias) {
  _modules_intervention_intervention_form__WEBPACK_IMPORTED_MODULE_5__["default"].mount(taskAlias);
});

/***/ }),

/***/ "./src/js/components/button-radio.js":
/*!*******************************************!*\
  !*** ./src/js/components/button-radio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroup; });
/* harmony import */ var _helpers_component_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/component-error */ "./src/js/helpers/component-error.js");
/* harmony import */ var _helpers_component_reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/component-reference */ "./src/js/helpers/component-reference.js");
/* harmony import */ var _helpers_component_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/component-helpers */ "./src/js/helpers/component-helpers.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var defaults = {
  groupClass: 'btn-radio-group',
  btnClass: 'btn-radio',
  activeClass: '-active',
  hidePrefix: false,
  splitSeparator: '.'
};
function ButtonGroup(reference, params) {
  params = _objectSpread(_objectSpread(_objectSpread({}, defaults), params), {}, {
    name: 'ButtonRadio'
  });
  var elements = Object(_helpers_component_reference__WEBPACK_IMPORTED_MODULE_1__["default"])(reference, params.name);

  if (elements instanceof HTMLElement) {
    var _elements = _slicedToArray(elements, 1),
        element = _elements[0];

    return createInstance(element, params);
  }

  return elements.map(function (element) {
    return createInstance(element, params);
  }).filter(function (element) {
    return element !== undefined;
  });
}

function createInstance(element, params) {
  var changeEvent = new Event('change');

  var _getOrquestraField = getOrquestraField(element, params),
      select = _getOrquestraField.select,
      textvalue = _getOrquestraField.textvalue;

  if (textvalue && params.hidePrefix) {
    removeTextPrefix(textvalue);
  }

  if (!select) {
    return;
  }

  var _createButtonGroup = createButtonGroup(select, params),
      buttons = _createButtonGroup.buttons,
      buttonGroup = _createButtonGroup.buttonGroup;

  var state = {
    value: '',
    isEnable: true
  };
  var instance = {
    state: state,
    element: element,
    select: select,
    buttonGroup: buttonGroup,
    buttons: _toConsumableArray(buttons),
    reset: reset,
    set: set,
    get: get
  };
  addListners(buttons, select);

  if (select.value !== '') {
    set(select.value, true);
  }

  element._buttonGroup = instance;
  return instance;
  /**
   * 🔒 Private Methods
   */

  function addListners(buttons, select) {
    buttons.forEach(function (button) {
      button.addEventListener('click', onClick);
    });
    select.addEventListener('change', onChange);
  }

  function onChange() {
    var value = this.value;

    if (value === '') {
      reset();
    } else {
      set(value, true);
    }
  }

  function onClick(e, silent) {
    var option = this.dataset.option;
    reset();
    this.classList.add(params.activeClass);
    instance.select.value = option;
    state.value = option;

    if (!silent) {
      instance.select.dispatchEvent(changeEvent);
    }
  }

  function removeTextPrefix(textvalue) {
    var value = Object(_helpers_component_helpers__WEBPACK_IMPORTED_MODULE_2__["removeOptionPrefix"])(textvalue.textContent, params.splitSeparator);
    textvalue.textContent = value;
  }
  /**
   * 🔑 Public Methods
   * @todo Destroy / ShowOption / HideOption / Disable (readonly) / Enable / TextOnly
   */


  function reset() {
    state.value = '';
    instance.select.value = '';
    instance.buttons.forEach(function (button) {
      button.classList.remove(params.activeClass);
    });
  }

  function set(option) {
    var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var button = instance.buttons.find(function (button) {
      return button.dataset.option === option;
    });

    if (!button) {
      throw new _helpers_component_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: params.name,
        message: "Erro ao realizar set para novo valor.\nN\xE3o foi encontrada nenhuma op\xE7\xE3o para o valor ".concat(option),
        type: 'option_not_found'
      });
    }

    onClick.call(button, null, silent);
  }

  function get() {
    return state.value;
  }
}
/**
 * 💡 Helper Functions
 */


function getOrquestraField(element, params) {
  var select = element.querySelector('select[xname]');
  var textvalue = element.querySelector('div[xid]');
  var inputHidden = element.querySelector('input[type=hidden][xname]');

  if (!select && !textvalue && !inputHidden) {
    throw new _helpers_component_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
      name: params.name,
      message: 'Erro ao criar a instância do componente.\nNenhum campo do Orquestra encontrado para a referência informada',
      type: 'instace_field_not_found'
    });
  }

  return {
    select: select,
    textvalue: textvalue
  };
}

function createButtonGroup(select, params) {
  var options = getOrquestraFieldOptions(select, params);
  var btnGroupHtml = getButtonGroupMarkup(options, params);
  select.insertAdjacentHTML('afterend', btnGroupHtml);
  select.style.display = 'none';
  var buttonGroup = select.nextSibling;
  var buttons = buttonGroup.querySelectorAll(".".concat(params.btnClass));
  return {
    buttonGroup: buttonGroup,
    buttons: buttons
  };
}

function getOrquestraFieldOptions(select, params) {
  return _toConsumableArray(select.options).filter(function (option) {
    return option.value;
  }).map(function (option) {
    var value = option.value;
    var label = params.hidePrefix ? Object(_helpers_component_helpers__WEBPACK_IMPORTED_MODULE_2__["removeOptionPrefix"])(value, params.splitSeparator) : value;
    return {
      value: value,
      label: label
    };
  });
}

function getButtonGroupMarkup(options, _ref) {
  var groupClass = _ref.groupClass,
      btnClass = _ref.btnClass;
  var buttons = options.map(function (option) {
    return getButtonMarkup(option, btnClass);
  });
  return "<div class=\"btn-group ".concat(groupClass, "\">").concat(buttons.join(''), "</div>");
}

function getButtonMarkup(_ref2, btnClass) {
  var value = _ref2.value,
      label = _ref2.label;
  return "<button type=\"button\" class=\"btn ".concat(btnClass, "\" data-option=\"").concat(value, "\">").concat(label, "</button>");
}

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

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_component_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/component-error */ "./src/js/helpers/component-error.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var COD_FLOW = document.getElementById('inpCodFlow');
var COD_FLOW_EXECUTE = document.getElementById('inpCodFlowExecute');
var COD_FLOW_EXECUTE_MASTER = document.getElementById('inpCodFlowExecuteMaster');
var COD_FLOW_EXECUTE_TASK = document.getElementById('inpCodFlowExecuteTask');
var COD_FLOW_EXECUTE_TASK_POSITION = document.getElementById('inpCodFlowExecuteTaskPosition');
var COD_FLOW_EXECUTE_C = document.getElementById('inpCodFlowExecuteC');
var ASSOCIATE_TO_COD_FLOW = document.getElementById('inpAssociateToCodFlow');
var ASSOCIATE_TO_COD_FLOW_EXECUTE = document.getElementById('inpAssociateToCodFlowExecute');
var COD_TASK = document.getElementById('inpCodFlowElement');
var TASK_ALIAS = document.getElementById('inpDsFlowElementAlias');
var IS_SIMULATION = document.getElementById('inpStSimulation');
var USER_TOKEN = document.getElementById('inpToken');
var OrquestraData = {
  codFlow: getInputValue(COD_FLOW),
  codFlowExecute: getInputValue(COD_FLOW_EXECUTE),
  codFlowExecuteMaster: getInputValue(COD_FLOW_EXECUTE_MASTER),
  codFlowExecuteTask: getInputValue(COD_FLOW_EXECUTE_TASK),
  codFlowExecuteTaskPosition: getInputValue(COD_FLOW_EXECUTE_TASK_POSITION),
  codFlowExecuteC: getInputValue(COD_FLOW_EXECUTE_C),
  associateToCodFlow: getInputValue(ASSOCIATE_TO_COD_FLOW),
  associateToCodFlowExecute: getInputValue(ASSOCIATE_TO_COD_FLOW_EXECUTE),
  codTask: getInputValue(COD_TASK),
  taskAlias: getInputValue(TASK_ALIAS),
  isSimulation: getInputValue(IS_SIMULATION),
  userToken: getInputValue(USER_TOKEN)
};
var params = {
  name: 'Form',
  container: '.form-group',
  hideClass: 'is-hidden'
};
/**
 * 💡 Helper Functions
 */

function getInputValue(inputValue) {
  return inputValue ? inputValue.value : null;
}
/**
 * 🔑 Public Methods
 */


function on(target, callback) {
  if (typeof target !== 'string' && !Array.isArray(target)) {
    throw new _helpers_component_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
      name: params.name,
      message: "Erro ao criar o evento 'on', \n".concat(target, " n\xE3o \xE9 um par\xE2metro v\xE1lido. Voc\xEA deve utilizar como target somente strings ou arrays de strings."),
      type: 'invalid_target_for_on_event'
    });
  }

  if (typeof callback !== 'function') {
    throw new _helpers_component_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
      name: params.name,
      message: "Erro ao criar o evento 'on', \n".concat(callback, " n\xE3o \xE9 um par\xE2metro v\xE1lido. Voc\xEA deve utilizar como callback somente fun\xE7\xF5es."),
      type: 'invalid_callback_for_on_event'
    });
  }

  var targets = typeof target === 'string' ? [target] : target;

  if (targets.includes(OrquestraData.taskAlias)) {
    callback(OrquestraData.taskAlias);
  }
}

function conditionals() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var helperClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'is-hidden';
  context.querySelectorAll('[data-if]').forEach(function (element) {
    var currentAlias = element.dataset["if"].replace(/[\s[\]]/g, '') // remove white spaces and brakets
    .split(','); // splits if it's a list, using comma

    if (currentAlias.includes(OrquestraData.taskAlias)) {
      element.classList.remove(helperClass);
    } else {
      element.classList.add(helperClass);
    }
  });
}

function getField(fieldId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    alwaysArray: false
  };
  var fields = document.querySelectorAll("[xname=\"inp".concat(fieldId, "\"]"));

  if (!fields.length) {
    return null;
  }

  if (options.alwaysArray) {
    return _toConsumableArray(fields);
  }

  return fields.length > 1 ? _toConsumableArray(fields) : fields[0];
}

function clearField(fieldId) {
  var changeEvent = new Event('change');
  var fields = getField(fieldId, {
    alwaysArray: true
  });
  fields.forEach(function (field) {
    field.value = '';
    field.checked = false;
    field.dispatchEvent(changeEvent);
  });
}

function addRequired(fieldId) {
  var fields = getField(fieldId, {
    alwaysArray: true
  });

  if (!fields) {
    return console.error("[Form] Unable to add required. Field reference ".concat(fieldId, " not found"));
  }

  fields.forEach(function (field) {
    field.setAttribute('required', 'S');
    field.removeAttribute('data-was-required');
  });
}

function removeRequired(fieldId) {
  var fields = getField(fieldId, {
    alwaysArray: true
  });

  if (!fields) {
    return console.error("[Form] Unable to remove required. Field reference ".concat(fieldId, " not found"));
  }

  fields.forEach(function (field) {
    field.setAttribute('required', 'N');
    field.setAttribute('data-was-required', true);
  });
}

function showField(fieldId) {
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : params.container;
  var fields = getField(fieldId, {
    alwaysArray: true
  });
  var $container = fields[0].closest(container);
  var isRequired = fields.filter(function (field) {
    return field.getAttribute('data-was-required');
  }).length > 0;
  $container.classList.remove(params.hideClass);

  if (isRequired) {
    addRequired(fieldId);
  }
}

function hideField(fieldId) {
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : params.container;
  var fields = getField(fieldId, {
    alwaysArray: true
  });
  var $container = fields[0].closest(container);
  var isRequired = fields.filter(function (field) {
    return field.getAttribute('required') === 'S';
  }).length > 0;
  $container.classList.add(params.hideClass);
  clearField(fieldId);

  if (isRequired) {
    removeRequired(fieldId);
  }
}

function getFieldValue(fieldId) {
  var fields = getField(fieldId, {
    alwaysArray: true
  });
  var fieldType = fields[0].type;

  if (['text', 'textarea', 'select-one', 'hidden'].includes(fieldType)) {
    return fields[0].value;
  }

  if (fieldType === 'radio') {
    var checkedField = fields.find(function (field) {
      return field.checked;
    });
    return checkedField ? checkedField.value : null;
  }

  if (fieldType === 'checkbox') {
    var checkedFields = fields.filter(function (field) {
      return field.checked;
    }).map(function (field) {
      return field.value;
    });
    return checkedFields.length ? checkedFields : null;
  }

  return null;
}

function handler(_ref, callback) {
  var target = _ref.target,
      events = _ref.events;
  var fields = getField(target, {
    alwaysArray: true
  });
  var arrEvents = typeof events === 'string' ? [events] : events;

  if (!callback) {
    return console.error('[Form] Unable to attach handler. You must inform a callback param');
  }

  fields.forEach(function (field) {
    arrEvents.forEach(function (event) {
      field.addEventListener(event, resolveCallbacks);
    });
  });
  resolveCallbacks();

  function resolveCallbacks() {
    var values = getFieldValue(target);
    callback(values);
  }
}
/**
 * 🔑 Public API
 */


/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, OrquestraData), {}, {
  on: on,
  conditionals: conditionals,
  getField: getField,
  getFieldValue: getFieldValue,
  clearField: clearField,
  addRequired: addRequired,
  removeRequired: removeRequired,
  showField: showField,
  hideField: hideField,
  handler: handler
}));

/***/ }),

/***/ "./src/js/components/input-radio.js":
/*!******************************************!*\
  !*** ./src/js/components/input-radio.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputRadio; });
/* harmony import */ var _helpers_component_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/component-error */ "./src/js/helpers/component-error.js");
/* harmony import */ var _helpers_component_reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/component-reference */ "./src/js/helpers/component-reference.js");
/* harmony import */ var _helpers_component_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/component-helpers */ "./src/js/helpers/component-helpers.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var defaults = {
  radioInnerClass: 'input-radio-inner',
  radioHelpClass: 'ctrl-option-help',
  activeClass: '-active',
  hidePrefix: false,
  splitSeparator: '.'
};
function InputRadio(reference, params) {
  params = _objectSpread(_objectSpread(_objectSpread({}, defaults), params), {}, {
    name: 'InputRadio'
  });
  var elements = Object(_helpers_component_reference__WEBPACK_IMPORTED_MODULE_1__["default"])(reference, params.name);

  if (elements instanceof HTMLElement) {
    var _elements = _slicedToArray(elements, 1),
        element = _elements[0];

    return createInstance(element, params);
  }

  return elements.map(function (element) {
    return createInstance(element, params);
  }).filter(function (element) {
    return element !== undefined;
  });
}

function createInstance(element, params) {
  var _getOrquestraField = getOrquestraField(element, params),
      radios = _getOrquestraField.radios,
      textvalue = _getOrquestraField.textvalue;

  var checked = radios.find(function (radio) {
    return radio.checked;
  });

  if (textvalue && params.hidePrefix) {
    removeTextPrefix(textvalue);
  }

  if (!radios) {
    return;
  }

  createInputRadio(radios, element, params);
  var state = {
    value: '',
    isEnable: true
  };
  var instance = {
    state: state,
    element: element,
    radios: radios,
    checked: checked,
    reset: reset,
    set: set,
    get: get
  };
  addListners(radios);

  if (checked) {
    set(checked.value);
  }

  element._inputRadio = instance;
  return instance;
  /**
   * 🔒 Private Methods
   */

  function addListners(radios) {
    radios.forEach(function (radio) {
      radio.addEventListener('click', onClick);
    });
  }

  function onClick() {
    instance.checked = this;
    state.value = this.value;
  }

  function removeTextPrefix(textvalue) {
    var value = Object(_helpers_component_helpers__WEBPACK_IMPORTED_MODULE_2__["removeOptionPrefix"])(textvalue.textContent, params.splitSeparator);
    textvalue.textContent = value;
  }
  /**
   * 🔑 Public Methods
   * @todo Destroy / AddOption / RemoveOption / Disable (readonly) / Enable / TextOnlys
   */


  function reset() {
    state.value = '';
    instance.radios.forEach(function (radio) {
      radio.checked = false;
    });
  }

  function set(option) {
    var radio = instance.radios.find(function (radio) {
      return radio.value === option;
    });

    if (!radio) {
      throw new _helpers_component_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: params.name,
        message: "Erro ao realizar set para novo valor.\nN\xE3o foi encontrada nenhuma op\xE7\xE3o para o valor ".concat(option),
        type: 'option_not_found'
      });
    }

    onClick.apply(radio);
  }

  function get() {
    return state.value;
  }
}
/**
 * 💡 Helper Functions
 */


function getOrquestraField(element, params) {
  var radios = _toConsumableArray(element.querySelectorAll('input[type=radio][xname]'));

  var textvalue = element.querySelector('div[xid]');

  if (!radios && !textvalue) {
    throw new _helpers_component_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
      name: params.name,
      message: 'Erro ao criar a instância do componente.\nNenhum campo do tipo múltipla seleção (radio) Orquestra encontrado',
      type: 'instace_field_not_found'
    });
  }

  return {
    radios: radios,
    textvalue: textvalue
  };
}

function createInputRadio(radios, element, params) {
  var radioInnerHtml = getRadioInnerMarkup(params.radioInnerClass);
  radios.forEach(function (radio) {
    var radioOption = radio.value;
    var radioHelper = getRadioHelper(element, radioOption, params);
    var textNode = radio.nextSibling;
    var radioText = params.hidePrefix ? Object(_helpers_component_helpers__WEBPACK_IMPORTED_MODULE_2__["removeOptionPrefix"])(radioOption, params.splitSeparator) : textNode.textContent;
    textNode.remove();

    if (radioHelper) {
      radio.insertAdjacentElement('afterend', radioHelper);
    }

    radio.insertAdjacentHTML('afterend', "<span>".concat(radioText, "</span>"));
    radio.insertAdjacentHTML('afterend', radioInnerHtml);
  });
}

function getRadioHelper(element, radioOption, params) {
  var radioHelper = element.querySelector("[data-ctrl-help=\"".concat(radioOption, "\"]"));

  if (!radioHelper) {
    return null;
  }

  var radioHelperClone = radioHelper.cloneNode(true);
  delete radioHelperClone.dataset.ctrlHelp;
  radioHelperClone.classList.add(params.radioHelpClass);
  return radioHelperClone;
}

function getRadioInnerMarkup(radioInnerClass) {
  return "<div class=\"".concat(radioInnerClass, "\"></div>");
}

/***/ }),

/***/ "./src/js/components/table-expand.js":
/*!*******************************************!*\
  !*** ./src/js/components/table-expand.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroup; });
/* harmony import */ var _helpers_component_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/component-error */ "./src/js/helpers/component-error.js");
/* harmony import */ var _helpers_component_reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/component-reference */ "./src/js/helpers/component-reference.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaults = {
  openClass: '-open',
  expandCellClass: 'form-table-expand-trigger',
  expandIcon: 'fa-angle-right'
};
function ButtonGroup(reference, params) {
  params = _objectSpread(_objectSpread(_objectSpread({}, defaults), params), {}, {
    name: 'TableExpand'
  });
  var elements = Object(_helpers_component_reference__WEBPACK_IMPORTED_MODULE_1__["default"])(reference, params.name);

  if (elements instanceof HTMLElement) {
    var _elements = _slicedToArray(elements, 1),
        element = _elements[0];

    return createInstance(element, params);
  }

  return elements.map(function (element) {
    return createInstance(element, params);
  }).filter(function (element) {
    return element !== undefined;
  });
}

function createInstance(table, params) {
  if (!(table instanceof HTMLTableElement)) {
    throw new _helpers_component_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
      name: params.name,
      message: 'Erro ao criar a instância do componente.\nO elemento informado deve obrigatoriamente ser uma tabela (HTMLTableElement)',
      type: 'instace_table_not_found'
    });
  }

  var buttonInsert = getTableBtnInsert(table);
  var isReadOnly = !buttonInsert;
  var rows = createExpandRows(table, isReadOnly, params);
  var instance = {
    table: table,
    rows: rows,
    buttonInsert: buttonInsert,
    isReadOnly: isReadOnly,
    closeAll: closeAll,
    openAll: openAll
  };
  addTableListners();
  table._tableExpand = instance;
  return instance;
  /**
   * 🔒 Private Methods
   */

  function addTableListners() {
    rows.forEach(function (row) {
      return addRowListners(row, instance.isReadOnly);
    });

    if (!isReadOnly) {
      instance.buttonInsert.addEventListener('click', function () {
        return mountNewRow(isReadOnly);
      });
    }
  }

  function addRowListners(row, isReadOnly) {
    row.open = open;
    row.close = close;
    row.expandElement.addEventListener('click', function () {
      return onClick(row);
    });

    if (!isReadOnly) {
      row.deleteButton.addEventListener('click', function () {
        return removeRow(row);
      });
    }
  }

  function mountNewRow(isReadOnly) {
    var lastRow = getLastRow(table);
    var rowInstance = getRowInstance(lastRow, params.expandCellClass);
    addRowListners(rowInstance);
    lastRow.classList.remove(params.openClass);
    instance.rows.push(rowInstance);
  }

  function removeRow(row) {
    var rowIndex = row.element.rowIndex; // rowIndex it's only `1` when row isn't removed yet by
    // Orquestra `DeleteRow` function

    if (rowIndex === 1) {
      return;
    } // the first table row is actually the table header


    instance.rows.splice(rowIndex - 1, 1);
  }

  function onClick(row) {
    row.element.classList.toggle(params.openClass);
    row.isOpen = !row.isOpen;
  }
  /**
   * 🔑 Public Methods
   */


  function closeAll() {
    instance.rows.forEach(function (row) {
      return row.close();
    });
  }

  function openAll() {
    instance.rows.forEach(function (row) {
      return row.open();
    });
  }

  function close() {
    this.element.classList.remove(params.openClass);
    this.isOpen = false;
  }

  function open() {
    this.element.classList.add(params.openClass);
    this.isOpen = true;
  }
}
/**
 * 💡 Helper Functions
 */


function getTableBtnInsert(table) {
  return table.querySelector('#BtnInsertNewRow');
}

function getTableRows(table) {
  return _toConsumableArray(table.querySelectorAll('tr:not(.header)'));
}

function getRowFirstCell(row, isReadOnly) {
  return isReadOnly ? row.querySelector('td:nth-child(1)') : row.querySelector('td:nth-child(2)');
}

function getfirstHeaderCell(table, isReadOnly) {
  return isReadOnly ? table.querySelector('tr.header td:nth-child(1)') : table.querySelector('tr.header td:nth-child(2)');
}

function getLastRow(table) {
  return table.querySelector('tr:last-child');
}

function getRowInstance(row, expandCellClass) {
  var expandElement = row.querySelector(".".concat(expandCellClass));
  var deleteButton = row.querySelector('.btn-delete-mv');
  return {
    expandElement: expandElement,
    deleteButton: deleteButton,
    element: row,
    isOpen: false
  };
}

function createExpandRows(table, isReadOnly, params) {
  var rows = getTableRows(table);
  var firstHeaderCell = getfirstHeaderCell(table, isReadOnly);
  var emptyHeaderHtml = '<td class="form-table-expand-th"></td>';
  firstHeaderCell.insertAdjacentHTML('beforebegin', emptyHeaderHtml);
  return rows.map(function (row) {
    var firstCell = getRowFirstCell(row, isReadOnly);
    var expandCellHtml = getExpandCellMarkup(params);
    firstCell.insertAdjacentHTML('beforebegin', expandCellHtml);
    return getRowInstance(row, params.expandCellClass);
  });
}

function getExpandCellMarkup(params) {
  return "\n  <td class=\"".concat(params.expandCellClass, "\">\n    <i class=\"form-table-expand-icon fas ").concat(params.expandIcon, "\"></i>\n  </td>");
}

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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

function removeRows(table) {
  var btnInsert = table.querySelector('#BtnInsertNewRow');
  btnInsert.click();
  table.querySelectorAll('tr:not(.header):not(:last-child').forEach(function (row) {
    return row.remove();
  });
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
      removeRows(this.table);
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
  removeRows(table);
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

var config = {
  filters: {
    cnpj: function cnpj(value) {
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d)/, '$1.$2.$3/$4-$5');
    },
    titleCase: function titleCase(value) {
      return value.toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    }
  }
};

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

var getRowIndex = function getRowIndex(element) {
  return element.closest('tr').rowIndex - 1; // ignora a linha de cabeçalho
};
/**
 * Public API
 */


function init() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    ignored: [],
    filters: {}
  },
      _ref$ignored = _ref.ignored,
      ignored = _ref$ignored === void 0 ? [] : _ref$ignored,
      _ref$filters = _ref.filters,
      filters = _ref$filters === void 0 ? {} : _ref$filters;

  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var data = {};
  var ignoredSelector = getIgnoredNotSelector(ignored);
  var fields = context.querySelectorAll("[xname]".concat(ignoredSelector.join()));
  document.data = data;
  config.filters = _objectSpread(_objectSpread({}, config.filters), filters);
  fields.forEach(function (field) {
    mount(field, data, context);
  });
  handleUpdate(document.querySelectorAll('[data-bind]'), data);
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
  var filterName = element.dataset.filter;

  if (!data[fieldId]) {
    return;
  }

  var fieldValueIndex = element.dataset.index === '{row}' ? getRowIndex(element) : element.dataset.index || 0;
  var fieldValue = Array.isArray(data[fieldId].value) ? data[fieldId].value[fieldValueIndex] : data[fieldId].value;
  var fieldText = fieldValue;

  if (element.hasAttribute('data-prefix')) {
    fieldText = fieldValue.substring(2);
  }

  if (filterName) {
    var filterFn = config.filters[filterName];

    if (!filterFn) {
      return console.error("[Template] Filter function ".concat(filterName, " not found"));
    }

    fieldText = filterFn.call(config.filters, fieldText);
  }

  element.textContent = fieldText;
}

function remove(field) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.data;
  var fieldId = field.getAttribute('xname').substring(3);

  if (Array.isArray(data[fieldId].value)) {
    // previne a removação total de campos em tabelas multi-valoradas
    if (data[fieldId].value.length === 1) {
      return;
    }

    var fieldValueIndex = getRowIndex(field);

    if (fieldValueIndex < 0) {
      console.error('[Template] You are trying to remove a field from data that already been deleted from DOM');
    }

    data[fieldId].value.splice(fieldValueIndex, 1);
  } else {
    delete data[fieldId];
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  mount: mount,
  update: update,
  remove: remove
});

/***/ }),

/***/ "./src/js/helpers/component-error.js":
/*!*******************************************!*\
  !*** ./src/js/helpers/component-error.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var ComponentError = /*#__PURE__*/function (_extendableBuiltin2) {
  _inherits(ComponentError, _extendableBuiltin2);

  var _super = _createSuper(ComponentError);

  function ComponentError() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        name = _ref.name,
        message = _ref.message,
        type = _ref.type,
        errors = _ref.errors;

    _classCallCheck(this, ComponentError);

    _this = _super.call(this);
    _this.name = name || 'ComponentError';
    _this.message = message;
    _this.type = type;
    return _this;
  }

  return ComponentError;
}(_extendableBuiltin(Error));

/* harmony default export */ __webpack_exports__["default"] = (ComponentError);

/***/ }),

/***/ "./src/js/helpers/component-helpers.js":
/*!*********************************************!*\
  !*** ./src/js/helpers/component-helpers.js ***!
  \*********************************************/
/*! exports provided: removeOptionPrefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeOptionPrefix", function() { return removeOptionPrefix; });
function removeOptionPrefix(option, splitSeparator) {
  return option.split(splitSeparator)[1].trim();
}

/***/ }),

/***/ "./src/js/helpers/component-reference.js":
/*!***********************************************!*\
  !*** ./src/js/helpers/component-reference.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveReference; });
/* harmony import */ var _component_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-error */ "./src/js/helpers/component-error.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function resolveReference(reference, component) {
  // Any QuerySelector string
  // e.g. 'div > .class'
  if (typeof reference === 'string') {
    var elements;

    try {
      elements = _toConsumableArray(document.querySelectorAll(reference));
    } catch (error) {
      throw new _component_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: component,
        message: "Erro ao inicializar a inst\xE2ncia do componente.\n".concat(reference, " n\xE3o \xE9 um seletor v\xE1lido"),
        type: 'reference_queryselector_validation'
      });
    }

    if (!elements.length) {
      throw new _component_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: component,
        message: "Erro ao inicializar a inst\xE2ncia do componente.\nN\xE3o foi encontrado nenhum elemento para o seletor ".concat(reference),
        type: 'reference_queryselector_empty'
      });
    }

    return elements;
  } // Single HTML Elements
  // e.g. document.querySelector('div')


  if (reference instanceof HTMLElement) {
    return [reference];
  } // HTML Collection and Node List
  // HTMLCollection: e.g. document.getElementsByClassName('myClass')
  // NodeList: e.g. document.querySelectorAll('div')


  if (reference instanceof HTMLCollection) {
    return _toConsumableArray(reference);
  } // Array of HTML Elements
  // e.g. [document.querySelector('#a'), document.querySelector('#b')]


  if (Array.isArray(reference)) {
    if (!reference.length) {
      throw new _component_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: component,
        message: 'Erro ao inicializar a instância do componente.\nVocê não pode chamar o construtor com array vazio',
        type: 'reference_array_empty'
      });
    }

    reference.forEach(function (element) {
      if (!(element instanceof HTMLElement)) {
        throw new _component_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
          name: component,
          message: 'Erro ao inicializar a instância do componente\nVocê não pode chamar o construtor com arrays que possuam elementos diferentes de HTMLElement',
          type: 'reference_array_validation'
        });
      }
    });
    return reference;
  }

  throw new _component_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
    name: component,
    message: 'Erro ao inicializar a instância do componente.\nVocê deve chamar o construtor com strings (seletores CSS), HTMLElement, HTMLElement[], HTMLCollection ou NodeList',
    type: 'reference_invalid_type'
  });
}

/***/ }),

/***/ "./src/js/modules/equipments/api/api.equipments.js":
/*!*********************************************************!*\
  !*** ./src/js/modules/equipments/api/api.equipments.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ORQUESTRA_DATASOURCE_URL = "http://d-sisweb.fieb.org.br/FIEB/Orquestra/api/json/datasource/get/1.0" + "/0POMGDbP@kblzrbtsTh-i4Lgl7Mzl1gG3hOgTyxkxMJyzC0CNdkglVxv0yCx3WjMLFO-pEmX4PuSAAif0owYUQ__";

var getDataFromDataSource = function getDataFromDataSource(_ref) {
  var unitId = _ref.unitId,
      period = _ref.period,
      equipmentSector = _ref.equipmentSector,
      equipmentGroup = _ref.equipmentGroup;
  var url = new URL(ORQUESTRA_DATASOURCE_URL);
  var params = {
    inppunidadeSesi: unitId,
    inpperiodoDeReferencia: "".concat(period.getMonth() + 1, "/").concat(period.getFullYear()),
    inppequipmentSector: equipmentSector,
    inpgrupoDeEquipamento: equipmentGroup
  };
  url.search = new URLSearchParams(params).toString();
  return fetch(url).then(function (res) {
    return res.json();
  }).then(function (_ref2) {
    var success = _ref2.success;
    return success.map(function (_ref3) {
      var fields = _ref3.fields;
      return fields;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getDataFromDataSource: getDataFromDataSource
});

/***/ }),

/***/ "./src/js/modules/equipments/equipments-config.js":
/*!********************************************************!*\
  !*** ./src/js/modules/equipments/equipments-config.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $query = function $query(query) {
  return document.querySelector(query);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  $pane: $query('#equipments-pane'),
  $emptyMessage: $query('#equipments-empty-state'),
  $table: $query('#equipments-table'),
  form: {
    $btnSearch: $query('.js-search-equipments'),
    $unity: $query('[xname=inpunidadeSesi]'),
    $period: $query('[xname=inpperiodoDeReferencia]'),
    $sector: $query('[xname=inpsetorEquipamento]'),
    $group: $query('[xname=inpgrupoDeEquipamento]')
  },
  processVariables: {
    $referenceTermNeeded: $query('[xname=inpnecessarioElaborarTr]')
  }
});

/***/ }),

/***/ "./src/js/modules/equipments/equipments-form.js":
/*!******************************************************!*\
  !*** ./src/js/modules/equipments/equipments-form.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _equipments_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipments-config */ "./src/js/modules/equipments/equipments-config.js");
/* harmony import */ var _api_api_equipments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/api.equipments */ "./src/js/modules/equipments/api/api.equipments.js");
/* harmony import */ var _components_form_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/form-validation */ "./src/js/components/form-validation.js");



var SearchForm = new _components_form_validation__WEBPACK_IMPORTED_MODULE_2__["FormValidation"]([{
  element: '[xname=inpunidadeSesi]',
  errorMessage: 'Informe uma Unidade para pesquisar'
}, {
  element: '[xname=inpsetorEquipamento]',
  errorMessage: 'Informe o setor dos equipamentos'
}, {
  element: '[xname=inpperiodoDeReferencia]',
  errorMessage: 'Informe um período'
}]);
var AppEvents;

function handleSearch(e) {
  var validationResult = SearchForm.validate();
  var params = {
    unitId: _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].form.$unity.value,
    period: $(_equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].form.$period).datepicker('getDate'),
    equipmentSector: _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].form.$sector.value,
    equipmentGroup: _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].form.$group.value
  };
  e.preventDefault();

  if (validationResult.hasErrors) {
    return;
  }

  addLoadingState();
  searchEquipments(params);
}

function setReferenceTermNeeded() {
  var processVariables = _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].processVariables;
  var sectorId = this.value;
  var securitySectorsIds = ['04', '05'];

  if (securitySectorsIds.includes(sectorId)) {
    processVariables.$referenceTermNeeded.value = 'Não';
  } else {
    processVariables.$referenceTermNeeded.value = 'Sim';
  }
}

function searchEquipments(params) {
  _api_api_equipments__WEBPACK_IMPORTED_MODULE_1__["default"].getDataFromDataSource(params).then(function (data) {
    return mountTable(data);
  })["catch"](function (err) {
    return handleSearchError(err);
  });
}

function mountTable(data) {
  _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].$emptyMessage.classList.add('is-hidden');
  removeLoadingState();
  AppEvents.emit('search-done', data);
}

function handleSearchError(err) {
  console.error(err);
  removeLoadingState();
}

function addLoadingState() {
  _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].form.$btnSearch.classList.add('-loading');
  _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].$pane.classList.add('-loading');
  _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].$table.classList.add('is-hidden');
}

function removeLoadingState() {
  _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].form.$btnSearch.classList.remove('-loading');
  _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].$pane.classList.remove('-loading');
}
/**
 * Public API
 */


function mount(EventEmitter) {
  AppEvents = EventEmitter;
  _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].form.$btnSearch.addEventListener('click', handleSearch);
  _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].form.$sector.addEventListener('change', setReferenceTermNeeded);
  $(_equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].form.$period).datepicker({
    language: 'pt-BR',
    startView: 'months',
    minViewMode: 'months',
    format: 'M/yyyy'
  }).attr('autocomplete', 'off');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  mount: mount
});

/***/ }),

/***/ "./src/js/modules/equipments/equipments-table.js":
/*!*******************************************************!*\
  !*** ./src/js/modules/equipments/equipments-table.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _equipments_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipments-config */ "./src/js/modules/equipments/equipments-config.js");
/* harmony import */ var _components_table_expand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/table-expand */ "./src/js/components/table-expand.js");
/* harmony import */ var _components_table_multivalue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/table-multivalue */ "./src/js/components/table-multivalue.js");
/* harmony import */ var _components_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/template */ "./src/js/components/template.js");





function addTagsLocationVariant(table, fieldId) {
  table.querySelectorAll('tr:not(.header').forEach(function (tr) {
    var tag = tr.querySelector("[data-bind=\"".concat(fieldId, "\"]"));
    var variant = getTagVariant(tag.textContent);
    tag.classList.add(variant);
  });
}

function getTagVariant(value) {
  if (value === 'Interno') {
    return '-yellow';
  }

  if (value === 'Externo') {
    return '-blue';
  }

  return null;
}
/**
 * Public API
 */


function mount(tableData) {
  var tagFieldId = 'metodoCalibracao';
  var equipmentsTable = Object(_components_table_expand__WEBPACK_IMPORTED_MODULE_1__["default"])(_equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].$table);

  if (tableData) {
    Object(_components_table_multivalue__WEBPACK_IMPORTED_MODULE_2__["appendData"])(_equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].$table, tableData);
  }

  _components_template__WEBPACK_IMPORTED_MODULE_3__["default"].init();
  addTagsLocationVariant(_equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].$table, tagFieldId);
  _equipments_config__WEBPACK_IMPORTED_MODULE_0__["default"].$table.classList.remove('is-hidden');
  return equipmentsTable;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  mount: mount
});

/***/ }),

/***/ "./src/js/modules/intervention/intervention-form.js":
/*!**********************************************************!*\
  !*** ./src/js/modules/intervention/intervention-form.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/form */ "./src/js/components/form.js");
/* harmony import */ var _components_button_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button-radio */ "./src/js/components/button-radio.js");
/* harmony import */ var _components_input_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/input-radio */ "./src/js/components/input-radio.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function addCertificateFormHandlers() {
  _components_form__WEBPACK_IMPORTED_MODULE_0__["default"].handler({
    target: 'calibracaoSegundoNormaTecnica',
    events: 'change'
  }, function (value) {
    if (value === '1. Sim') {
      _components_form__WEBPACK_IMPORTED_MODULE_0__["default"].showField('normaTecnica');
    } else {
      _components_form__WEBPACK_IMPORTED_MODULE_0__["default"].hideField('normaTecnica');
    }
  });
  _components_form__WEBPACK_IMPORTED_MODULE_0__["default"].handler({
    target: 'laboratorioCalibracaoRbc',
    events: 'change'
  }, function (value) {
    var fields = ['certificadosDosPadroesFornecidos', 'padoresSecundariosCalibradosRbc', 'calibracaoDosPadroesSecundariosNaValidade'];

    if (value === '2. Não') {
      fields.forEach(function (field) {
        return _components_form__WEBPACK_IMPORTED_MODULE_0__["default"].showField(field);
      });
    } else {
      fields.forEach(function (field) {
        return _components_form__WEBPACK_IMPORTED_MODULE_0__["default"].hideField(field);
      });
    }
  });
  _components_form__WEBPACK_IMPORTED_MODULE_0__["default"].handler({
    target: 'equipamentoAptoUtilizacao',
    events: 'change'
  }, function (value) {
    if (value === '2. Não') {
      _components_form__WEBPACK_IMPORTED_MODULE_0__["default"].showField('destinoEquipamento');
    } else {
      _components_form__WEBPACK_IMPORTED_MODULE_0__["default"].hideField('destinoEquipamento');
    }
  });
}

function addReportFormHandler() {
  _components_form__WEBPACK_IMPORTED_MODULE_0__["default"].handler({
    target: 'equipamentoAprovadoPeloFornecedor',
    events: 'change'
  }, function (value) {
    if (value === '2. Não') {
      _components_form__WEBPACK_IMPORTED_MODULE_0__["default"].showField('destinoEquipamento');
    } else {
      _components_form__WEBPACK_IMPORTED_MODULE_0__["default"].hideField('destinoEquipamento');
    }
  });
}

function handlePreviousAndNextIntervention() {
  var $lastDate = document.querySelector('[xname=inpultimaCalibracao]');
  var $nextDate = document.querySelector('[xname=inpproximaCalibracaoPrevisto]');
  var $targets = [$nextDate, document.querySelector('[name=proximaCalibracaoPrevisto]')]; // Limpa os campos com as datas da última e próxima calibração
  // para que sejam validados pelo Orquestra como campos obrigatórios
  // caso a tarefa seja concluída sem o preenchimento do campo `ultimaCalibracao`

  $lastDate.value = '';
  $nextDate.value = '';
  $('[name=ultimaCalibracao]').on('change', function () {
    calculateNextIntervention($(this), $lastDate, $targets);
  });
}

function calculateNextIntervention($input, $origin, $targets) {
  if ($input.val() === '') {
    return [].concat(_toConsumableArray($targets), [$origin]).forEach(function ($input) {
      $input.value = '';
    });
  }

  var lastDate = $input.datepicker('getDate');
  var nextDate = new Date(lastDate);
  var daysToAdd = parseInt(document.querySelector('[xname=inpqtdDiasFrequenciaCalibracao]').value);
  nextDate.setDate(nextDate.getDate() + daysToAdd);
  $origin.value = dateToStringDate(lastDate);
  $targets.forEach(function ($target) {
    $target.value = dateToStringDate(nextDate);
  });
}

function dateToStringDate(date) {
  return date.toLocaleString('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
}
/**
 * Public API
 */


function mount(taskAlias) {
  Object(_components_button_radio__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-btn-radio]', {
    hidePrefix: true
  });
  Object(_components_input_radio__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-input-radio]', {
    hidePrefix: true
  });
  handlePreviousAndNextIntervention();

  if (taskAlias === 'checklist-certificado') {
    addCertificateFormHandlers();
  }

  if (taskAlias === 'checklist-relatorio') {
    addReportFormHandler();
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  mount: mount
});

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map