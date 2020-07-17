(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/extensions/lightbox/styles.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/extensions/lightbox/styles.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".rt-lightbox {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: all 200ms linear;\n}\n.rt-lightbox, .rt-lightbox * {\n  font-family: Arial, Helvetica, sans-serif;\n}\n.rt-lightbox__spinner, .rt-lightbox__spinner:after {\n  border-radius: 50%;\n  width: 2em;\n  height: 2em;\n}\n.rt-lightbox__spinner {\n  margin: 0;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 0.5em solid rgba(255, 255, 255, 0.2);\n  border-right: 0.5em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 0.5em solid rgba(255, 255, 255, 0.2);\n  border-left: 0.5em solid white;\n  transform: translateZ(0);\n  animation: loop 1.1s infinite linear;\n}\n@keyframes loop {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rt-lightbox--swiping > * {\n  opacity: 0.5 !important;\n}\n.rt-lightbox__spinner {\n  border-top-color: rgba(255, 255, 255, 0.2) !important;\n  border-right-color: rgba(255, 255, 255, 0.2) !important;\n  border-bottom-color: rgba(255, 255, 255, 0.2) !important;\n  border-left-color: #fff !important;\n  position: absolute !important;\n  z-index: -1;\n  left: 50%;\n  top: 50%;\n  margin-left: -2em;\n  margin-top: -2em;\n}\n.rt-lightbox__spinner, .rt-lightbox__spinner:after {\n  width: 4em !important;\n  height: 4em !important;\n}\n.rt-lightbox__thumbnails {\n  opacity: 0;\n  background: #fff;\n  max-width: calc(100% - 8px);\n  z-index: 13;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 0);\n  align-self: center;\n  justify-self: center;\n  bottom: 0;\n  margin-bottom: -100px;\n  overflow: hidden;\n  overflow-x: auto;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  border: 4px solid #fff;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.rt-lightbox__thumbnails::-webkit-scrollbar {\n  width: 0px;\n  height: 0px;\n  background: transparent;\n  /* Chrome/Safari/Webkit */\n}\n.rt-lightbox__thumbnails--visible {\n  transition: all 200ms linear;\n  opacity: 1;\n  margin-bottom: 0;\n}\n.rt-lightbox__thumbnail {\n  cursor: pointer;\n  opacity: 0.5;\n  box-shadow: 0px 0px 20px #00000027;\n  height: 60px !important;\n  margin: 0;\n  padding: 0;\n}\n.rt-lightbox__thumbnail--active {\n  opacity: 1;\n}\n.rt-lightbox__closer {\n  box-shadow: 0px 0px 20px #00000027;\n  opacity: 0;\n  max-width: 80%;\n  background: #fff;\n  display: flex;\n  z-index: 9;\n  position: relative;\n  cursor: pointer;\n  padding: 10px 16px;\n  text-align: center;\n  color: #616161;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n  line-height: 1em;\n  margin-top: -100px;\n}\n.rt-lightbox__closer--visible {\n  transition: all 200ms linear;\n  opacity: 1;\n  margin-top: 0;\n}\n.rt-lightbox__title {\n  box-shadow: 0px 0px 20px #00000027;\n  opacity: 0;\n  max-width: 80%;\n  background: #fff;\n  display: flex;\n  z-index: 9;\n  position: relative;\n  padding: 10px 16px;\n  font-size: 12px;\n  text-align: center;\n  color: #000;\n  align-items: center;\n  justify-content: center;\n  line-height: 1em;\n  margin-bottom: -100px;\n}\n.rt-lightbox__title--visible {\n  transition: all 200ms linear;\n  opacity: 1;\n  margin-bottom: 0;\n}\n.rt-lightbox__image-error {\n  display: flex;\n  box-shadow: 0px 0px 20px #00000027;\n  background: #fff;\n  padding: 20px;\n  width: 80%;\n  min-height: 200px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #000;\n  flex-direction: column;\n  font-style: italic;\n  transition: all 200ms linear;\n}\n.rt-lightbox__image {\n  position: relative;\n  z-index: 10;\n  box-shadow: 0px 0px 20px #00000027;\n  opacity: 0;\n  max-width: 80%;\n  max-height: 70%;\n  min-width: 200px;\n  margin-top: -100px;\n}\n.rt-lightbox__image--visible {\n  transition: all 200ms linear;\n  border: 4px solid #fff;\n  opacity: 1;\n  margin-top: 0;\n}\n.rt-lightbox__prev, .rt-lightbox__next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  margin-top: -25px;\n  height: 50px;\n  line-height: 50px;\n  width: 30px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  z-index: 9;\n  opacity: 0;\n}\n.rt-lightbox__prev--visible, .rt-lightbox__next--visible {\n  transition: all 1200ms linear;\n  opacity: 1;\n}\n.rt-lightbox__prev {\n  left: 0;\n}\n.rt-lightbox__next {\n  right: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, StrictMode, Suspense, SuspenseList, lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return tn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return L; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"]; });

/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






function w(n, t) {
  for (var e in t) {
    n[e] = t[e];
  }

  return n;
}

function x(n, t) {
  for (var e in n) {
    if ("__source" !== e && !(e in t)) return !0;
  }

  for (var r in t) {
    if ("__source" !== r && n[r] !== t[r]) return !0;
  }

  return !1;
}

var E = function (n) {
  var t, e;

  function r(t) {
    var e;
    return (e = n.call(this, t) || this).isPureReactComponent = !0, e;
  }

  return e = n, (t = r).prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e, r.prototype.shouldComponentUpdate = function (n, t) {
    return x(this.props, n) || x(this.state, t);
  }, r;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function C(n, t) {
  function e(n) {
    var e = this.props.ref,
        r = e == n.ref;
    return !r && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, n) || !r : x(this.props, n);
  }

  function r(t) {
    return this.shouldComponentUpdate = e, Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(n, t);
  }

  return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (n.displayName || n.name) + ")", r.t = !0, r;
}

var _ = preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b;

preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b = function (n) {
  n.type && n.type.t && n.ref && (n.props.ref = n.ref, n.ref = null), _ && _(n);
};

var A = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.forward_ref") || 3911;

function k(n) {
  function t(t, e) {
    var r = w({}, t);
    return delete r.ref, n(r, (e = t.ref || e) && ("object" != _typeof(e) || "current" in e) ? e : null);
  }

  return t.$$typeof = A, t.render = t, t.prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}

var R = function R(n, t) {
  return n ? Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).reduce(function (n, e, r) {
    return n.concat(t(e, r));
  }, []) : null;
},
    F = {
  map: R,
  forEach: R,
  count: function count(n) {
    return n ? Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length : 0;
  },
  only: function only(n) {
    if (1 !== (n = Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n)).length) throw new Error("Children.only() expects only one child.");
    return n[0];
  },
  toArray: preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"]
},
    N = preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e;

function U(n) {
  return n && ((n = w({}, n)).__c = null, n.__k = n.__k && n.__k.map(U)), n;
}

function M() {
  this.__u = 0, this.o = null, this.__b = null;
}

function j(n) {
  var t = n.__.__c;
  return t && t.u && t.u(n);
}

function L(n) {
  var t, e, r;

  function o(o) {
    if (t || (t = n()).then(function (n) {
      e = n["default"] || n;
    }, function (n) {
      r = n;
    }), r) throw r;
    if (!e) throw t;
    return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(e, o);
  }

  return o.displayName = "Lazy", o.t = !0, o;
}

function O() {
  this.i = null, this.l = null;
}

preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e = function (n, t, e) {
  if (n.then) for (var r, o = t; o = o.__;) {
    if ((r = o.__c) && r.__c) return r.__c(n, t.__c);
  }
  N(n, t, e);
}, (M.prototype = new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]()).__c = function (n, t) {
  var e = this;
  null == e.o && (e.o = []), e.o.push(t);

  var r = j(e.__v),
      o = !1,
      u = function u() {
    o || (o = !0, r ? r(i) : i());
  };

  t.__c = t.componentWillUnmount, t.componentWillUnmount = function () {
    u(), t.__c && t.__c();
  };

  var i = function i() {
    var n;
    if (! --e.__u) for (e.__v.__k[0] = e.state.u, e.setState({
      u: e.__b = null
    }); n = e.o.pop();) {
      n.forceUpdate();
    }
  };

  e.__u++ || e.setState({
    u: e.__b = e.__v.__k[0]
  }), n.then(u, u);
}, M.prototype.render = function (n, t) {
  return this.__b && (this.__v.__k && (this.__v.__k[0] = U(this.__b)), this.__b = null), [Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, t.u ? null : n.children), t.u && n.fallback];
};

var P = function P(n, t, e) {
  if (++e[1] === e[0] && n.l["delete"](t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e = n.i; e;) {
    for (; e.length > 3;) {
      e.pop()();
    }

    if (e[1] < e[0]) break;
    n.i = e = e[2];
  }
};

(O.prototype = new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]()).u = function (n) {
  var t = this,
      e = j(t.__v),
      r = t.l.get(n);
  return r[0]++, function (o) {
    var u = function u() {
      t.props.revealOrder ? (r.push(o), P(t, n, r)) : o();
    };

    e ? e(u) : u();
  };
}, O.prototype.render = function (n) {
  this.i = null, this.l = new Map();
  var t = Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

  for (var e = t.length; e--;) {
    this.l.set(t[e], this.i = [1, 0, this.i]);
  }

  return n.children;
}, O.prototype.componentDidUpdate = O.prototype.componentDidMount = function () {
  var n = this;
  n.l.forEach(function (t, e) {
    P(n, e, t);
  });
};

var W = function () {
  function n() {}

  var t = n.prototype;
  return t.getChildContext = function () {
    return this.props.context;
  }, t.render = function (n) {
    return n.children;
  }, n;
}();

function z(n) {
  var t = this,
      e = n.container,
      r = Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(W, {
    context: t.context
  }, n.vnode);
  return t.s && t.s !== e && (t.v.parentNode && t.s.removeChild(t.v), Object(preact__WEBPACK_IMPORTED_MODULE_1__["__u"])(t.h), t.p = !1), n.vnode ? t.p ? (e.__k = t.__k, Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r, e), t.__k = e.__k) : (t.v = document.createTextNode(""), Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])("", e), e.appendChild(t.v), t.p = !0, t.s = e, Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r, e, t.v), t.__k = t.v.__k) : t.p && (t.v.parentNode && t.s.removeChild(t.v), Object(preact__WEBPACK_IMPORTED_MODULE_1__["__u"])(t.h)), t.h = r, t.componentWillUnmount = function () {
    t.v.parentNode && t.s.removeChild(t.v), Object(preact__WEBPACK_IMPORTED_MODULE_1__["__u"])(t.h);
  }, null;
}

function D(n, t) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(z, {
    vnode: n,
    container: t
  });
}

var H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent = {};
var T = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;

function V(n, t, e) {
  if (null == t.__k) for (; t.firstChild;) {
    t.removeChild(t.firstChild);
  }
  return Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

function Z(n, t, e) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

var I = preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;

function $(n, t) {
  n["UNSAFE_" + t] && !n[t] && Object.defineProperty(n, t, {
    configurable: !1,
    get: function get() {
      return this["UNSAFE_" + t];
    },
    set: function set(n) {
      this["UNSAFE_" + t] = n;
    }
  });
}

preact__WEBPACK_IMPORTED_MODULE_1__["options"].event = function (n) {
  I && (n = I(n)), n.persist = function () {};
  var t = !1,
      e = !1,
      r = n.stopPropagation;

  n.stopPropagation = function () {
    r.call(n), t = !0;
  };

  var o = n.preventDefault;
  return n.preventDefault = function () {
    o.call(n), e = !0;
  }, n.isPropagationStopped = function () {
    return t;
  }, n.isDefaultPrevented = function () {
    return e;
  }, n.nativeEvent = n;
};

var q = {
  configurable: !0,
  get: function get() {
    return this["class"];
  }
},
    B = preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;

preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode = function (n) {
  n.$$typeof = T;
  var t = n.type,
      e = n.props;

  if (t) {
    if (e["class"] != e.className && (q.enumerable = "className" in e, null != e.className && (e["class"] = e.className), Object.defineProperty(e, "className", q)), "function" != typeof t) {
      var r, o, u;

      for (u in e.defaultValue && void 0 !== e.value && (e.value || 0 === e.value || (e.value = e.defaultValue), delete e.defaultValue), Array.isArray(e.value) && e.multiple && "select" === t && (Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function (n) {
        -1 != e.value.indexOf(n.props.value) && (n.props.selected = !0);
      }), delete e.value), e) {
        if (r = H.test(u)) break;
      }

      if (r) for (u in o = n.props = {}, e) {
        o[H.test(u) ? u.replace(/[A-Z0-9]/, "-$&").toLowerCase() : u] = e[u];
      }
    }

    !function (t) {
      var e = n.type,
          r = n.props;

      if (r && "string" == typeof e) {
        var o = {};

        for (var u in r) {
          /^on(Ani|Tra|Tou)/.test(u) && (r[u.toLowerCase()] = r[u], delete r[u]), o[u.toLowerCase()] = u;
        }

        if (o.ondoubleclick && (r.ondblclick = r[o.ondoubleclick], delete r[o.ondoubleclick]), o.onbeforeinput && (r.onbeforeinput = r[o.onbeforeinput], delete r[o.onbeforeinput]), o.onchange && ("textarea" === e || "input" === e.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
          var i = o.oninput || "oninput";
          r[i] || (r[i] = r[o.onchange], delete r[o.onchange]);
        }
      }
    }(), "function" == typeof t && !t.m && t.prototype && ($(t.prototype, "componentWillMount"), $(t.prototype, "componentWillReceiveProps"), $(t.prototype, "componentWillUpdate"), t.m = !0);
  }

  B && B(n);
};

var G = "16.8.0";

function J(n) {
  return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null, n);
}

function K(n) {
  return !!n && n.$$typeof === T;
}

function Q(n) {
  return K(n) ? preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null, arguments) : n;
}

function X(n) {
  return !!n.__k && (Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null, n), !0);
}

function Y(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}

var nn = function nn(n, t) {
  return n(t);
},
    tn = preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"];

/* harmony default export */ __webpack_exports__["default"] = ({
  useState: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"],
  useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"],
  useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"],
  useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"],
  useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"],
  useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"],
  useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"],
  useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"],
  useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"],
  version: "16.8.0",
  Children: F,
  render: V,
  hydrate: Z,
  unmountComponentAtNode: X,
  createPortal: D,
  createElement: preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],
  createContext: preact__WEBPACK_IMPORTED_MODULE_1__["createContext"],
  createFactory: J,
  cloneElement: Q,
  createRef: preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],
  Fragment: preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
  isValidElement: K,
  findDOMNode: Y,
  Component: preact__WEBPACK_IMPORTED_MODULE_1__["Component"],
  PureComponent: E,
  memo: C,
  forwardRef: k,
  unstable_batchedUpdates: nn,
  StrictMode: preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
  Suspense: M,
  SuspenseList: O,
  lazy: L
});


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, __u, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__u", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,
    l,
    u,
    i,
    t,
    r,
    o,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function s(n, l) {
  for (var u in l) {
    n[u] = l[u];
  }

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v(n, l, u) {
  var i,
      t = arguments,
      r = {};

  for (i in l) {
    "key" !== i && "ref" !== i && (r[i] = l[i]);
  }

  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) {
    u.push(t[i]);
  }
  if (null != u && (r.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) {
    void 0 === r[i] && (r[i] = n.defaultProps[i]);
  }
  return h(n, r, l && l.key, l && l.ref, null);
}

function h(l, u, i, t, r) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: r
  };
  return null == r && (o.__v = o), n.vnode && n.vnode(o), o;
}

function y() {
  return {
    current: null
  };
}

function p(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function _(n, l) {
  if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) {
    if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  }

  return "function" == typeof n.type ? _(n) : null;
}

function k(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
      if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }
    }

    return k(n);
  }
}

function w(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
}

function m() {
  for (var n; m.__r = u.length;) {
    n = u.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    }), u = [], n.some(function (n) {
      var l, u, i, t, r, o, f;
      n.__d && (o = (r = (l = n).__v).__e, (f = l.__P) && (u = [], (i = s({}, r)).__v = i, t = T(f, r, i, l.__n, void 0 !== f.ownerSVGElement, null, u, null == o ? _(r) : o), $(u, r), t != o && k(r)));
    });
  }
}

function g(n, l, u, i, t, r, o, c, s, v) {
  var y,
      d,
      k,
      w,
      m,
      g,
      b,
      A = i && i.__k || e,
      P = A.length;

  for (s == f && (s = null != o ? o[0] : P ? _(i, 0) : null), u.__k = [], y = 0; y < l.length; y++) {
    if (null != (w = u.__k[y] = null == (w = l[y]) || "boolean" == typeof w ? null : "string" == typeof w || "number" == typeof w ? h(null, w, null, null, w) : Array.isArray(w) ? h(p, {
      children: w
    }, null, null, null) : null != w.__e || null != w.__c ? h(w.type, w.props, w.key, null, w.__v) : w)) {
      if (w.__ = u, w.__b = u.__b + 1, null === (k = A[y]) || k && w.key == k.key && w.type === k.type) A[y] = void 0;else for (d = 0; d < P; d++) {
        if ((k = A[d]) && w.key == k.key && w.type === k.type) {
          A[d] = void 0;
          break;
        }

        k = null;
      }
      m = T(n, w, k = k || f, t, r, o, c, s, v), (d = w.ref) && k.ref != d && (b || (b = []), k.ref && b.push(k.ref, null, w), b.push(d, w.__c || m, w)), null != m ? (null == g && (g = m), s = x(n, w, k, A, o, m, s), "option" == u.type ? n.value = "" : "function" == typeof u.type && (u.__d = s)) : s && k.__e == s && s.parentNode != n && (s = _(k));
    }
  }

  if (u.__e = g, null != o && "function" != typeof u.type) for (y = o.length; y--;) {
    null != o[y] && a(o[y]);
  }

  for (y = P; y--;) {
    null != A[y] && I(A[y], A[y]);
  }

  if (b) for (y = 0; y < b.length; y++) {
    H(b[y], b[++y], b[++y]);
  }
}

function b(n) {
  return null == n || "boolean" == typeof n ? [] : Array.isArray(n) ? e.concat.apply([], n.map(b)) : [n];
}

function x(n, l, u, i, t, r, o) {
  var f, e, c;
  if (void 0 !== l.__d) f = l.__d, l.__d = void 0;else if (t == u || r != o || null == r.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(r), f = null;else {
    for (e = o, c = 0; (e = e.nextSibling) && c < i.length; c += 2) {
      if (e == r) break n;
    }

    n.insertBefore(r, o), f = o;
  }
  return void 0 !== f ? f : r.nextSibling;
}

function A(n, l, u, i, t) {
  var r;

  for (r in u) {
    "children" === r || "key" === r || r in l || C(n, r, null, u[r], i);
  }

  for (r in l) {
    t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || C(n, r, l[r], u[r], i);
  }
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
}

function C(n, l, u, i, t) {
  var r, o, f, e, c;
  if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "style" === l) {
    if (r = n.style, "string" == typeof u) r.cssText = u;else {
      if ("string" == typeof i && (r.cssText = "", i = null), i) for (e in i) {
        u && e in u || P(r, e, "");
      }
      if (u) for (c in u) {
        i && u[c] === i[c] || P(r, c, u[c]);
      }
    }
  } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), f = l.toLowerCase(), l = (f in n ? f : l).slice(2), u ? (i || n.addEventListener(l, N, o), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function z(n, l, u) {
  var i, t;

  for (i = 0; i < n.__k.length; i++) {
    (t = n.__k[i]) && (t.__ = n, t.__e && ("function" == typeof t.type && t.__k.length > 1 && z(t, l, u), l = x(u, t, t, n.__k, null, t.__e, l), "function" == typeof n.type && (n.__d = l)));
  }
}

function T(l, u, i, t, r, o, f, e, c) {
  var a,
      v,
      h,
      y,
      _,
      k,
      w,
      m,
      b,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (m = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? w = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(m, x) : (u.__c = v = new d(m, x), v.constructor = P, v.render = L), b && b.sub(v), v.props = m, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(m, v.__s))), y = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && m !== y && null != v.componentWillReceiveProps && v.componentWillReceiveProps(m, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(m, v.__s, x) || u.__v === i.__v) {
          v.props = m, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), z(u, e, l);
          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(m, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(y, _, k);
        });
      }
      v.context = x, v.props = m, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (k = v.getSnapshotBeforeUpdate(y, _)), A = null != a && a.type == p && null == a.key ? a.props.children : a, g(l, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, c), v.base = u.__e, v.__h.length && f.push(v), w && (v.__E = v.__ = null), v.__e = !1;
    } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = j(i.__e, u, i, t, r, o, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, n.__e(l, u, i);
  }

  return u.__e;
}

function $(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function j(n, l, u, i, t, r, o, c) {
  var s,
      a,
      v,
      h,
      y,
      p = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null != r) for (s = 0; s < r.length; s++) {
    if (null != (a = r[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
      n = a, r[s] = null;
      break;
    }
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
      is: d.is
    }), r = null, c = !1;
  }

  if (null === l.type) p !== d && n.data != d && (n.data = d);else {
    if (null != r && (r = e.slice.call(n.childNodes)), v = (p = u.props || f).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
      if (null != r) for (p = {}, y = 0; y < n.attributes.length; y++) {
        p[n.attributes[y].name] = n.attributes[y].value;
      }
      (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
    }

    A(n, d, p, t, c), h ? l.__k = [] : (s = l.props.children, g(n, Array.isArray(s) ? s : [s], l, u, i, "foreignObject" !== l.type && t, r, o, f, c)), c || ("value" in d && void 0 !== (s = d.value) && s !== n.value && C(n, "value", s, p.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && C(n, "checked", s, p.checked, !1));
  }
  return n;
}

function H(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function I(l, u, i) {
  var t, r, o;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || H(t, null, u)), i || "function" == typeof l.type || (i = null != (r = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (o = 0; o < t.length; o++) {
    t[o] && I(t[o], u, i);
  }
  null != r && a(r);
}

function L(n, l, u) {
  return this.constructor(n, u);
}

function M(l, u, i) {
  var t, o, c;
  n.__ && n.__(l, u), o = (t = i === r) ? null : i && i.__k || u.__k, l = v(p, null, [l]), c = [], T(u, (t ? u : i || u).__k = l, o || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : o ? null : u.childNodes.length ? e.slice.call(u.childNodes) : null, c, i || f, t), $(c, l);
}

function O(n, l) {
  M(n, l, r);
}

function S(n, l) {
  var u, i;

  for (i in l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), u = {}, l) {
    "key" !== i && "ref" !== i && (u[i] = l[i]);
  }

  return h(n.type, u, l.key || n.key, l.ref || n.ref, null);
}

function q(n) {
  var l = {},
      u = {
    __c: "__cC" + o++,
    __: n,
    Consumer: function Consumer(n, l) {
      return n.children(l);
    },
    Provider: function Provider(n) {
      var i,
          t = this;
      return this.getChildContext || (i = [], this.getChildContext = function () {
        return l[u.__c] = t, l;
      }, this.shouldComponentUpdate = function (n) {
        t.props.value !== n.value && i.some(function (l) {
          l.context = n.value, w(l);
        });
      }, this.sub = function (n) {
        i.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          i.splice(i.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u.Provider.__ = u, u;
}

n = {
  __e: function __e(n, l) {
    for (var u, i; l = l.__;) {
      if ((u = l.__c) && !u.__) try {
        if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) return w(u.__E = u);
      } catch (l) {
        n = l;
      }
    }

    throw n;
  }
}, l = function l(n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), w(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), w(this));
}, d.prototype.render = p, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, r = f, o = 0;


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return d; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");

var t,
    u,
    r,
    o = 0,
    i = [],
    c = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
    f = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
    e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
    a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;

function v(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}

function m(n) {
  return o = 1, p(k, n);
}

function p(n, r, o) {
  var i = v(t++, 2);
  return i.t = n, i.__c || (i.__c = u, i.__ = [o ? o(r) : k(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }]), i.__;
}

function y(r, o) {
  var i = v(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && j(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
}

function l(r, o) {
  var i = v(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && j(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
}

function h(n) {
  return o = 5, _(function () {
    return {
      current: n
    };
  }, []);
}

function s(n, t, u) {
  o = 6, l(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function _(n, u) {
  var r = v(t++, 7);
  return j(r.__H, u) ? (r.__H = u, r.__h = n, r.__ = n()) : r.__;
}

function A(n, t) {
  return o = 8, _(function () {
    return n;
  }, t);
}

function F(n) {
  var r = u.context[n.__c],
      o = v(t++, 9);
  return o.__c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function T(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u ? u(t) : t);
}

function d(n) {
  var r = v(t++, 10),
      o = m();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}

function q() {
  i.some(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(b), t.__H.__h.forEach(g), t.__H.__h = [];
    } catch (u) {
      return t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v), !0;
    }
  }), i = [];
}

preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  c && c(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(b), r.__h.forEach(g), r.__h = []);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  f && f(t);
  var u = t.__c;
  u && u.__H && u.__H.__h.length && (1 !== i.push(u) && r === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((r = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || function (n) {
    var t,
        u = function u() {
      clearTimeout(r), x && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    x && (t = requestAnimationFrame(u));
  })(q));
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(b), t.__h = t.__h.filter(function (n) {
        return !n.__ || g(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
    }
  }), e && e(t, u);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  a && a(t);
  var u = t.__c;
  if (u && u.__H) try {
    u.__H.__.forEach(b);
  } catch (t) {
    preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(t, u.__v);
  }
};
var x = "function" == typeof requestAnimationFrame;

function b(n) {
  "function" == typeof n.u && n.u();
}

function g(n) {
  n.u = n.__();
}

function j(n, t) {
  return !n || t.some(function (t, u) {
    return t !== n[u];
  });
}

function k(n, t) {
  return "function" == typeof t ? t(n) : t;
}



/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    var nonce =  true ? __webpack_require__.nc : undefined;

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

  if (sourceMap && btoa) {
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

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: RTJS, RTJS_lightbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTJS", function() { return RTJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTJS_lightbox", function() { return RTJS_lightbox; });
/* harmony import */ var _helpers_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/polyfills */ "./src/helpers/polyfills.js");
/* harmony import */ var _helpers_polyfills__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_polyfills__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/common */ "./src/helpers/common.js");
/* harmony import */ var _extensions_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/lightbox */ "./src/extensions/lightbox/index.js");






var InitRTJS = function InitRTJS() {
  return {
    // events
    _eventsLiveListeners: {
      click: []
    },
    onLiveEvent: function onLiveEvent(eventName, selector, eventCallback) {
      var _this = this;

      if (!this._eventsLiveListeners[eventName].length) {
        document.body.addEventListener(eventName, function (event) {
          _this._eventsLiveListeners[eventName].forEach(function (eventListener) {
            if (Object(_helpers_common__WEBPACK_IMPORTED_MODULE_1__["isElementInCollection"])(document.body.querySelectorAll(eventListener.selector), event.target)) {
              eventListener.eventCallback(event);
            }
          });
        });
      }

      this._eventsLiveListeners[eventName].push({
        selector: selector,
        eventCallback: eventCallback
      });
    },
    // actions witch nodes list
    query: function query(selector) {
      var queryContext = {
        // returned (by query selector) elements collection 
        _elements: document.body.querySelectorAll(selector),
        // closest parent
        closest: function closest(closestSelector) {
          var newElements = [];
          _helpers_common__WEBPACK_IMPORTED_MODULE_1__["elementsIterator"].call(this, function (element) {
            var closestEl = element.closest(closestSelector);
            closestEl ? newElements.push(closestEl) : null;
          });
          this._elements = newElements;
          return this;
        },
        // each iterator
        each: function each(elementCallback) {
          return _helpers_common__WEBPACK_IMPORTED_MODULE_1__["elementsIterator"].call(this, elementCallback);
        },
        // classList modifications
        addClass: function addClass(className) {
          return _helpers_common__WEBPACK_IMPORTED_MODULE_1__["elementsIterator"].call(this, function (element) {
            element.classList.add(className);
          });
        },
        removeClass: function removeClass(className) {
          return _helpers_common__WEBPACK_IMPORTED_MODULE_1__["elementsIterator"].call(this, function (element) {
            element.classList.remove(className);
          });
        },
        toggleClass: function toggleClass(className) {
          return _helpers_common__WEBPACK_IMPORTED_MODULE_1__["elementsIterator"].call(this, function (element) {
            element.classList.toggle(className);
          });
        },
        // visibility
        toggle: function toggle(_toggle) {
          return _helpers_common__WEBPACK_IMPORTED_MODULE_1__["elementsIterator"].call(this, function (element) {
            if (_toggle === true) {
              element.style.display === 'none' ? element.style.removeProperty('display') : null;
            } else if (_toggle === false) {
              element.style.display = 'none';
            } else {
              element.style.display === 'none' ? element.style.removeProperty('display') : element.style.display = 'none';
            }
          });
        },
        // attributes
        attr: function attr(name, value) {
          if (value === null || value === undefined) {
            return _helpers_common__WEBPACK_IMPORTED_MODULE_1__["elementsIterator"].call(this, function (element) {
              return element.getAttribute(name);
            }, 'callback');
          } else {
            return _helpers_common__WEBPACK_IMPORTED_MODULE_1__["elementsIterator"].call(this, function (element) {
              element.setAttribute(name, value);
            });
          }
        },
        // html content
        html: function html(content) {
          return _helpers_common__WEBPACK_IMPORTED_MODULE_1__["elementsIterator"].call(this, function (element) {
            if (content) {
              element.innerHTML = content;
            } else {
              return element.innerHTML;
            }
          }, content ? undefined : 'callback');
        }
      };
      return queryContext;
    } // future (XHR, ...) ?

  };
};

var RTJS = function () {
  return InitRTJS();
}();
var RTJS_lightbox = _extensions_lightbox__WEBPACK_IMPORTED_MODULE_2__["default"];

/***/ }),

/***/ "./src/extensions/lightbox/arrows.js":
/*!*******************************************!*\
  !*** ./src/extensions/lightbox/arrows.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");


var Arrows = function Arrows(_ref) {
  var showArrows = _ref.showArrows,
      isItemLoaded = _ref.isItemLoaded,
      moveNext = _ref.moveNext,
      movePrev = _ref.movePrev;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, showArrows && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    onClick: function onClick() {
      movePrev();
    },
    className: "rt-lightbox__prev".concat(isItemLoaded ? ' rt-lightbox__prev--visible' : '')
  }, "<"), showArrows && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    onClick: function onClick() {
      moveNext();
    },
    className: "rt-lightbox__next".concat(isItemLoaded ? ' rt-lightbox__next--visible' : '')
  }, ">"));
};

/* harmony default export */ __webpack_exports__["default"] = (Arrows);

/***/ }),

/***/ "./src/extensions/lightbox/closer.js":
/*!*******************************************!*\
  !*** ./src/extensions/lightbox/closer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");


var Closer = function Closer(_ref) {
  var showCloser = _ref.showCloser,
      isItemLoaded = _ref.isItemLoaded,
      label = _ref.label;
  return showCloser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "rt-lightbox__closer".concat(isItemLoaded ? ' rt-lightbox__closer--visible' : '')
  }, "\xD7 ", label) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Closer);

/***/ }),

/***/ "./src/extensions/lightbox/image.js":
/*!******************************************!*\
  !*** ./src/extensions/lightbox/image.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Image = function Image(_ref) {
  var showImage = _ref.showImage,
      selectedItem = _ref.selectedItem,
      isItemLoaded = _ref.isItemLoaded,
      src = _ref.src,
      onLoad = _ref.onLoad,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      onMouseUp = _ref.onMouseUp,
      onMouseMove = _ref.onMouseMove,
      onTouchEnd = _ref.onTouchEnd,
      onTouchMove = _ref.onTouchMove,
      errorText = _ref.errorText;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  return showImage && !error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: "rt-lightbox__image".concat(isItemLoaded ? ' rt-lightbox__image--visible' : ''),
    src: src,
    onLoad: onLoad,
    onMouseDown: onMouseDown,
    onTouchstart: onTouchStart,
    onMouseUp: onMouseUp,
    onMouseMove: onMouseMove,
    onTouchEnd: onTouchEnd,
    onTouchMove: onTouchMove,
    onError: function onError(error) {
      // console.log(error)
      setError(error);
      onLoad();
    }
  }) : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    onMouseDown: onMouseDown,
    onTouchstart: onTouchStart,
    onMouseUp: onMouseUp,
    onMouseMove: onMouseMove,
    onTouchEnd: onTouchEnd,
    onTouchMove: onTouchMove,
    className: "rt-lightbox__image-error"
  }, "[url: \"", src, "\"]", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("br", null), errorText || '...') : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/extensions/lightbox/index.js":
/*!******************************************!*\
  !*** ./src/extensions/lightbox/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./src/extensions/lightbox/options.js");
/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrows */ "./src/extensions/lightbox/arrows.js");
/* harmony import */ var _closer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./closer */ "./src/extensions/lightbox/closer.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image */ "./src/extensions/lightbox/image.js");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spinner */ "./src/extensions/lightbox/spinner.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title */ "./src/extensions/lightbox/title.js");
/* harmony import */ var _thumbnails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thumbnails */ "./src/extensions/lightbox/thumbnails.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ "./src/extensions/lightbox/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var swipeTreshold = 20;

var RTJS_lightbox = function RTJS_lightbox(selector, options) {
  // lightbox react app
  var App = function App(_ref) {
    var element = _ref.element;

    // state
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
        _useState2 = _slicedToArray(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
        _useState4 = _slicedToArray(_useState3, 2),
        selectedItem = _useState4[0],
        setSelectedItem = _useState4[1];

    var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
        _useState6 = _slicedToArray(_useState5, 2),
        loadedImages = _useState6[0],
        setLoadedImages = _useState6[1];

    var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
        _useState8 = _slicedToArray(_useState7, 2),
        galleryItems = _useState8[0],
        setGalleryItems = _useState8[1];

    var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
        _useState10 = _slicedToArray(_useState9, 2),
        forcedLoading = _useState10[0],
        setForcedLoading = _useState10[1];

    var swipeOriginX = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var finalOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // lifecycle

    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      finalOptions.current = _objectSpread(_objectSpread({}, _options__WEBPACK_IMPORTED_MODULE_1__["defaultOptions"]), options);
      setVisible(true);
      var dataset = element.dataset;
      var gallery = dataset.rtLightboxGallery;
      var bigSrc = element.getAttribute('href') || dataset.rtLightboxSrc;
      var smallSrc = element.querySelector('img') ? element.querySelector('img').getAttribute('src') : dataset.rtLightboxThumbnailSrc;
      var title = element.getAttribute('title') || dataset.rtLightboxTitle;

      if (gallery) {
        var galleryElements = document.body.querySelectorAll('[data-rt-lightbox-gallery="' + gallery + '"]');

        if (galleryElements.length > 1) {
          var newGalleryItems = [];
          galleryElements.forEach(function (item, index) {
            if (item === element) {
              setSelectedItem(index);
            }

            var bigSrc = item.getAttribute('href') || item.dataset.rtLightboxSrc;
            var title = item.getAttribute('title') || item.dataset.rtLightboxTitle;
            var smallSrc = item.querySelector('img') ? item.querySelector('img').getAttribute('src') : item.dataset.rtLightboxThumbnailSrc;
            newGalleryItems.push({
              bigSrc: bigSrc,
              title: title,
              smallSrc: smallSrc
            });
          });
          setGalleryItems(newGalleryItems);
        } else {
          setGalleryItems([{
            bigSrc: bigSrc,
            title: title,
            smallSrc: smallSrc
          }]);
        }
      } else {
        setGalleryItems([{
          bigSrc: bigSrc,
          title: title,
          smallSrc: smallSrc
        }]);
      }
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      var wrapper = document.getElementById('rt-lightbox-container').querySelector('.rt-lightbox');

      if (wrapper && wrapper.classList.contains('rt-lightbox--swiping')) {
        wrapper.classList.remove('rt-lightbox--swiping');
      }

      if (forcedLoading && loadedImages && galleryItems && loadedImages.includes(galleryItems[selectedItem].bigSrc)) {
        setForcedLoading(false);
      }
    }, [selectedItem, loadedImages, galleryItems, forcedLoading]); // helpers

    var movePrev = function movePrev() {
      var delayed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      setForcedLoading(true);
      setSelectedItem(selectedItem ? selectedItem - 1 : galleryItems.length - 1);
    };

    var moveNext = function moveNext() {
      var delayed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      setForcedLoading(true);
      setSelectedItem(galleryItems.length === selectedItem + 1 ? 0 : selectedItem + 1);
    };

    var setItemByIndex = function setItemByIndex(index) {
      setForcedLoading(true);
      setSelectedItem(index);
    }; // output


    var img = galleryItems ? galleryItems[selectedItem] : undefined;
    var isLoaded = img && loadedImages ? loadedImages.includes(img.bigSrc) : undefined;
    var isMultiple = galleryItems ? galleryItems.length > 1 : undefined;
    return visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "rt-lightbox",
      onClick: function onClick(event) {
        if (event.target.classList.contains('rt-lightbox') || event.target.classList.contains('rt-lightbox__closer')) {
          setVisible(false);
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_title__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: "title-".concat(selectedItem),
      showTitle: img,
      isItemLoaded: isLoaded && !forcedLoading,
      title: img.title,
      selectedItem: selectedItem,
      sum: galleryItems.length
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
      showSpinner: !isLoaded || forcedLoading
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
      errorText: finalOptions.current.imageErrorLabel,
      key: "image-".concat(selectedItem),
      showImage: img,
      isItemLoaded: isLoaded && !forcedLoading,
      selectedItem: selectedItem,
      src: img.bigSrc,
      onLoad: function onLoad() {
        if (!isLoaded) {
          setTimeout(function () {
            setLoadedImages([].concat(_toConsumableArray(loadedImages), [img.bigSrc]));
          }, 200);
        }
      },
      onMouseDown: !isMultiple ? undefined : function (event) {
        event.preventDefault();

        if (event.button === 0) {
          swipeOriginX.current = event.clientX;
        }
      },
      onTouchStart: !isMultiple ? undefined : function (event) {
        event.preventDefault();
        swipeOriginX.current = event.changedTouches[0].clientX;
      },
      onMouseUp: !isMultiple ? undefined : function (event) {
        event.preventDefault();
        if (!swipeOriginX.current) return;

        if (swipeOriginX.current > event.clientX) {
          moveNext();
        } else if (swipeOriginX.current < event.clientX) {
          movePrev();
        }

        swipeOriginX.current = null;
      },
      onMouseMove: !isMultiple ? undefined : function (event) {
        if (swipeOriginX.current) {
          event.preventDefault();

          if (Math.abs(swipeOriginX.current - event.clientX) > swipeTreshold) {
            event.target.style.transform = swipeOriginX.current > event.clientX ? 'translateX(-100px)' : 'translateX(100px)';
            event.target.closest('.rt-lightbox').classList.add('rt-lightbox--swiping');
          }
        }
      },
      onTouchEnd: !isMultiple ? undefined : function (event) {
        event.preventDefault();
        if (!swipeOriginX.current) return;

        if (swipeOriginX.current > event.changedTouches[0].clientX) {
          moveNext();
        } else if (swipeOriginX.current < event.changedTouches[0].clientX) {
          movePrev();
        }

        swipeOriginX.current = null;
      },
      onTouchMove: !isMultiple ? undefined : function (event) {
        if (swipeOriginX.current) {
          event.preventDefault();

          if (Math.abs(swipeOriginX.current - event.changedTouches[0].clientX) > swipeTreshold) {
            event.target.style.transform = swipeOriginX.current > event.changedTouches[0].clientX ? 'translateX(-100px)' : 'translateX(100px)';
            event.target.closest('.rt-lightbox').classList.add('rt-lightbox--swiping');
          }
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_thumbnails__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: "thumbs-".concat(selectedItem),
      onClick: function onClick(index) {
        return setItemByIndex(index);
      },
      selectedItem: selectedItem,
      showThumbnails: finalOptions.current.showThumbnails && img && isMultiple,
      isItemLoaded: isLoaded && !forcedLoading,
      galleryItems: galleryItems
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_closer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: "closer-".concat(selectedItem),
      showCloser: img,
      isItemLoaded: isLoaded && !forcedLoading,
      label: finalOptions.current.closeLabel
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_arrows__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "arrows-".concat(selectedItem),
      showArrows: finalOptions.current.showArrows && isMultiple && img,
      isItemLoaded: isLoaded && !forcedLoading,
      moveNext: moveNext,
      movePrev: movePrev
    })) : null;
  };

  document.body.querySelectorAll(selector).forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      var checkContainer = document.getElementById('rt-lightbox-container');

      if (!checkContainer) {
        var lightboxContainer = document.createElement('div');
        lightboxContainer.setAttribute('id', 'rt-lightbox-container');
        document.body.appendChild(lightboxContainer);
        checkContainer = lightboxContainer;
      }

      react__WEBPACK_IMPORTED_MODULE_0__["default"].unmountComponentAtNode(checkContainer);
      react__WEBPACK_IMPORTED_MODULE_0__["default"].render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(App, {
        element: element
      }), checkContainer);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RTJS_lightbox);

/***/ }),

/***/ "./src/extensions/lightbox/options.js":
/*!********************************************!*\
  !*** ./src/extensions/lightbox/options.js ***!
  \********************************************/
/*! exports provided: defaultOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
var defaultOptions = {
  closeLabel: 'zavřít',
  showArrows: true,
  showThumbnails: true,
  imageErrorLabel: 'obrázek se nepodařilo načíst'
};

/***/ }),

/***/ "./src/extensions/lightbox/spinner.js":
/*!********************************************!*\
  !*** ./src/extensions/lightbox/spinner.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");


var Spinner = function Spinner(_ref) {
  var showSpinner = _ref.showSpinner;
  return showSpinner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "rt-lightbox__spinner"
  }) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/extensions/lightbox/styles.scss":
/*!*********************************************!*\
  !*** ./src/extensions/lightbox/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/extensions/lightbox/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/extensions/lightbox/thumbnails.js":
/*!***********************************************!*\
  !*** ./src/extensions/lightbox/thumbnails.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");


var Thumbnails = function Thumbnails(_ref) {
  var showThumbnails = _ref.showThumbnails,
      galleryItems = _ref.galleryItems,
      isItemLoaded = _ref.isItemLoaded,
      selectedItem = _ref.selectedItem,
      _onClick = _ref.onClick;
  return showThumbnails && galleryItems && galleryItems.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "rt-lightbox__thumbnails".concat(isItemLoaded ? ' rt-lightbox__thumbnails--visible' : '')
  }, galleryItems.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      src: item.smallSrc || 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxOTAuMyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxMCIgd2lkdGg9IjE5OS41IiB4PSIxNTYuMyIgeT0iMTYwLjkiLz48cG9seWxpbmUgZmlsbD0ibm9uZSIgcG9pbnRzPSIgICAxNTYuMywzMTUuNyAyMTkuNywyNTYgMjc1LjcsMzE1LjcgMzA0LjcsMjg1LjggMzU1LjcsMzUxLjEgICIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxjaXJjbGUgY3g9IjMwMy45IiBjeT0iMjIyLjYiIGZpbGw9Im5vbmUiIHI9IjI2LjIiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMTAiLz48L2c+PC9zdmc+',
      alt: item.title || '...',
      className: "rt-lightbox__thumbnail".concat(index === selectedItem ? ' rt-lightbox__thumbnail--active' : ''),
      onClick: function onClick(event) {
        event.preventDefault();

        _onClick(index);
      },
      onError: function onError(event) {
        event.target.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxOTAuMyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxMCIgd2lkdGg9IjE5OS41IiB4PSIxNTYuMyIgeT0iMTYwLjkiLz48cG9seWxpbmUgZmlsbD0ibm9uZSIgcG9pbnRzPSIgICAxNTYuMywzMTUuNyAyMTkuNywyNTYgMjc1LjcsMzE1LjcgMzA0LjcsMjg1LjggMzU1LjcsMzUxLjEgICIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxjaXJjbGUgY3g9IjMwMy45IiBjeT0iMjIyLjYiIGZpbGw9Im5vbmUiIHI9IjI2LjIiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMTAiLz48L2c+PC9zdmc+';
      }
    });
  })) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Thumbnails);

/***/ }),

/***/ "./src/extensions/lightbox/title.js":
/*!******************************************!*\
  !*** ./src/extensions/lightbox/title.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");


var Title = function Title(_ref) {
  var showTitle = _ref.showTitle,
      isItemLoaded = _ref.isItemLoaded,
      title = _ref.title,
      selectedItem = _ref.selectedItem,
      sum = _ref.sum;
  return showTitle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "rt-lightbox__title".concat(isItemLoaded ? ' rt-lightbox__title--visible' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, title || '...'), sum > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "\xA0(", "".concat(selectedItem + 1, "/").concat(sum), ")")) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/helpers/common.js":
/*!*******************************!*\
  !*** ./src/helpers/common.js ***!
  \*******************************/
/*! exports provided: elementsIterator, isElementInCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsIterator", function() { return elementsIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementInCollection", function() { return isElementInCollection; });
function elementsIterator(elementCallback, outputType) {
  var output = [];

  for (var i = 0; i < this._elements.length; i++) {
    if (typeof elementCallback === 'function') {
      output.push(elementCallback(this._elements[i]));
    } else if (elementCallback) {
      console.error('RTJS: provided callback is not a function');
    }
  }

  return outputType === 'callback' ? output : this;
}
var isElementInCollection = function isElementInCollection(list, element) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === element) return true;
  }

  return false;
};

/***/ }),

/***/ "./src/helpers/polyfills.js":
/*!**********************************!*\
  !*** ./src/helpers/polyfills.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
  value: function value(r, e) {
    if (null == this) throw new TypeError('"this" is null or not defined');
    var t = Object(this),
        n = t.length >>> 0;
    if (0 === n) return !1;
    var i,
        o,
        a = 0 | e,
        u = Math.max(0 <= a ? a : n - Math.abs(a), 0);

    for (; u < n;) {
      if ((i = t[u]) === (o = r) || "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o)) return !0;
      u++;
    }

    return !1;
  }
});

/***/ })

/******/ });
});
//# sourceMappingURL=RTJS.js.map