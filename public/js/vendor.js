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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/Bootstrap/bootstrap.js":
/*!*********************************************!*\
  !*** ./resources/js/Bootstrap/bootstrap.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, $, Popper) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      'default': e
    };
  }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.3): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default['default'](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default['default'](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default['default'](element).css('transition-duration');
      var transitionDelay = $__default['default'](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default['default'](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $__default['default'](element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default['default'].Event(EVENT_CLOSE);
      $__default['default'](element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $__default['default'](element).removeClass(CLASS_NAME_SHOW);

      if (!$__default['default'](element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $__default['default'](element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $__default['default'](element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Alert._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Alert;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.5.3';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            if (!this.shouldAvoidTriggerChange) {
              $__default['default'](input).trigger('change');
            }
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $element.data(DATA_KEY$1, data);
        }

        data.shouldAvoidTriggerChange = avoidTriggerChange;

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
      button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
        Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $__default['default'](event.target).closest(SELECTOR_BUTTON)[0];
    $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$1] = Button._jQueryInterface;
  $__default['default'].fn[NAME$1].Constructor = Button;

  $__default['default'].fn[NAME$1].noConflict = function () {
    $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.5.3';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      var $element = $__default['default'](this._element); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $__default['default'](this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $__default['default'](this._element).off(EVENT_KEY$2);
      $__default['default'].removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $__default['default'](this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $__default['default'].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
        $__default['default'](nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $__default['default'](activeElement).addClass(directionalClassName);
        $__default['default'](nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $__default['default'](activeElement).one(Util.TRANSITION_END, function () {
          $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $__default['default'](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $__default['default'](this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$2);

        var _config = _extends({}, Default, $__default['default'](this).data());

        if (_typeof(config) === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $__default['default'](this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $__default['default'](selector)[0];

      if (!target || !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($__default['default'](target), config);

      if (slideIndex) {
        $__default['default'](target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $__default['default'](window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $__default['default'](carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$2] = Carousel._jQueryInterface;
  $__default['default'].fn[NAME$2].Constructor = Carousel;

  $__default['default'].fn[NAME$2].noConflict = function () {
    $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.5.3';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default['default'].Event(EVENT_SHOW);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default['default'](actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default['default'](_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $__default['default'].Event(EVENT_HIDE);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default['default'](children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$3);

        var _config = _extends({}, Default$1, $element.data(), _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $element.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default['default'](this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default['default'](selectors).each(function () {
      var $target = $__default['default'](this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$3] = Collapse._jQueryInterface;
  $__default['default'].fn[NAME$3].Constructor = Collapse;

  $__default['default'].fn[NAME$3].noConflict = function () {
    $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.5.3';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default['default'].Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper__default['default'] === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$4);
      $__default['default'](this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default['default'](this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default['default'](this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default['default'](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$4);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default['default'](this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default['default'](toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default['default'].contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);
        $__default['default'](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $__default['default'](parent).removeClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
        if (event.which === ESCAPE_KEYCODE) {
          $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $__default['default'](this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $__default['default'](item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
  $__default['default'].fn[NAME$4].Constructor = Dropdown;

  $__default['default'].fn[NAME$4].noConflict = function () {
    $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.5.3';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $__default['default'].Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $__default['default'](this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($__default['default'](event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$2);
      $__default['default'](this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'](this._element).removeClass(CLASS_NAME_SHOW$3);
      $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
      $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default['default'](htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'].removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED);
        $__default['default'](this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.isDefaultPrevented()) {
          return;
        }

        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!isModalOverflowing) {
          this._element.style.overflowY = 'hidden';
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._element).off(Util.TRANSITION_END);
        $__default['default'](this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(CLASS_NAME_STATIC);

          if (!isModalOverflowing) {
            $__default['default'](_this3._element).one(Util.TRANSITION_END, function () {
              _this3._element.style.overflowY = '';
            }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
          }
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $__default['default'](this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default['default'].Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $__default['default'](_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $__default['default'](window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $__default['default'](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $__default['default'](_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default['default'](this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default['default'](this._backdrop).appendTo(document.body);
        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $__default['default'](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $__default['default'](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $__default['default'](fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default['default'](element).css('padding-right');
          $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default['default'](stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default['default'](element).css('margin-right');
          $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default['default'](document.body).css('padding-right');
        $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $__default['default'](fixedContent).each(function (index, element) {
        var padding = $__default['default'](element).data('padding-right');
        $__default['default'](element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $__default['default'](elements).each(function (index, element) {
        var margin = $__default['default'](element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default['default'](element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default['default'](document.body).data('padding-right');
      $__default['default'](document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$5);

        var _config = _extends({}, Default$3, $__default['default'](this).data(), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default['default'](this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default['default'](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default['default'](target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($__default['default'](_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default['default'](target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$5] = Modal._jQueryInterface;
  $__default['default'].fn[NAME$5].Constructor = Modal;

  $__default['default'].fn[NAME$5].noConflict = function () {
    $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.3): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.5.3';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default['default'](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default['default'](event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
      $__default['default'](this.element).off(this.constructor.EVENT_KEY);
      $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $__default['default'](this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($__default['default'](this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $__default['default'].Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $__default['default'](this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $__default['default'].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $__default['default'](tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $__default['default'](tip).data(this.constructor.DATA_KEY, this);

        if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
          $__default['default'](tip).appendTo(container);
        }

        $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper__default['default'](this.element, tip, this._getPopperConfig(attachment));
        $__default['default'](tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $__default['default'](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $__default['default'](this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $__default['default'](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$__default['default'](content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($__default['default'](content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $__default['default'](this.config.container);
      }

      return $__default['default'](document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $__default['default'](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $__default['default'](_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $__default['default'](this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$6);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $element.data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$6] = Tooltip._jQueryInterface;
  $__default['default'].fn[NAME$6].Constructor = Tooltip;

  $__default['default'].fn[NAME$6].noConflict = function () {
    $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.5.3';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $__default['default'](this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $__default['default'](this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$7] = Popover._jQueryInterface;
  $__default['default'].fn[NAME$7].Constructor = Popover;

  $__default['default'].fn[NAME$7].noConflict = function () {
    $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.5.3';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default['default'](this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default['default'](target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$8);
      $__default['default'](this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $__default['default'](config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $__default['default'](config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $__default['default'](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$8);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default['default'](this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default['default'](scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$8] = ScrollSpy._jQueryInterface;
  $__default['default'].fn[NAME$8].Constructor = ScrollSpy;

  $__default['default'].fn[NAME$8].noConflict = function () {
    $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.5.3';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default['default'](this._element).hasClass(CLASS_NAME_ACTIVE$3) || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default['default'](this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $__default['default'].makeArray($__default['default'](listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $__default['default'].Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $__default['default'](previous).trigger(hideEvent);
      }

      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default['default'].Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default['default'].Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $__default['default'](previous).trigger(hiddenEvent);
        $__default['default'](_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default['default'](container).find(SELECTOR_ACTIVE_UL) : $__default['default'](container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default['default'](active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $__default['default'](active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default['default'](active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $__default['default'](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default['default'](dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default['default'](element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $__default['default'](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $__default['default'](element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $__default['default'](dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default['default'](this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default['default'](this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$9] = Tab._jQueryInterface;
  $__default['default'].fn[NAME$9].Constructor = Tab;

  $__default['default'].fn[NAME$9].noConflict = function () {
    $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.5.3';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      var showEvent = $__default['default'].Event(EVENT_SHOW$4);
      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $__default['default'](_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$4);
      $__default['default'](this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $__default['default'](this._element).off(EVENT_CLICK_DISMISS$1);
      $__default['default'].removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, $__default['default'](this._element).data(), _typeof(config) === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $__default['default'](_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$a);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$a] = Toast._jQueryInterface;
  $__default['default'].fn[NAME$a].Constructor = Toast;

  $__default['default'].fn[NAME$a].noConflict = function () {
    $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./resources/js/JQuery/jquery.js":
/*!***************************************!*\
  !*** ./resources/js/JQuery/jquery.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
(function (window, undefined) {
  // Can't do this because several apps including ASP.NET trace
  // the stack via arguments.caller.callee and Firefox dies if
  // you try to trace through "use strict" call chains. (#13335)
  // Support: Firefox 18+
  //"use strict";
  var // The deferred used on DOM ready
  readyList,
      // A central reference to the root jQuery(document)
  rootjQuery,
      // Support: IE<9
  // For `typeof node.method` instead of `node.method !== undefined`
  core_strundefined = _typeof(undefined),
      // Use the correct document accordingly with window argument (sandbox)
  document = window.document,
      location = window.location,
      // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$,
      // [[Class]] -> type pairs
  class2type = {},
      // List of deleted data cache ids, so we can reuse them
  core_deletedIds = [],
      core_version = "1.9.1",
      // Save a reference to some core methods
  core_concat = core_deletedIds.concat,
      core_push = core_deletedIds.push,
      core_slice = core_deletedIds.slice,
      core_indexOf = core_deletedIds.indexOf,
      core_toString = class2type.toString,
      core_hasOwn = class2type.hasOwnProperty,
      core_trim = core_version.trim,
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    return new jQuery.fn.init(selector, context, rootjQuery);
  },
      // Used for matching numbers
  core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      // Used for splitting on whitespace
  core_rnotwhite = /\S+/g,
      // Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      // Match a standalone tag
  rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      // JSON RegExp
  rvalidchars = /^[\],:{}\s]*$/,
      rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
      rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      // Matches dashed string for camelizing
  rmsPrefix = /^-ms-/,
      rdashAlpha = /-([\da-z])/gi,
      // Used by jQuery.camelCase as callback to replace()
  fcamelCase = function fcamelCase(all, letter) {
    return letter.toUpperCase();
  },
      // The ready event handler
  completed = function completed(event) {
    // readyState === "complete" is good enough for us to call the dom ready in oldIE
    if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
      detach();
      jQuery.ready();
    }
  },
      // Clean-up method for dom ready events
  detach = function detach() {
    if (document.addEventListener) {
      document.removeEventListener("DOMContentLoaded", completed, false);
      window.removeEventListener("load", completed, false);
    } else {
      document.detachEvent("onreadystatechange", completed);
      window.detachEvent("onload", completed);
    }
  };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: core_version,
    constructor: jQuery,
    init: function init(selector, context, rootjQuery) {
      var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

      if (!selector) {
        return this;
      } // Handle HTML strings


      if (typeof selector === "string") {
        if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
          // Assume that strings that start and end with <> are HTML and skip the regex check
          match = [null, selector, null];
        } else {
          match = rquickExpr.exec(selector);
        } // Match html or make sure no context is specified for #id


        if (match && (match[1] || !context)) {
          // HANDLE: $(html) -> $(array)
          if (match[1]) {
            context = context instanceof jQuery ? context[0] : context; // scripts is true for back-compat

            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                // Properties of context are called as methods if possible
                if (jQuery.isFunction(this[match])) {
                  this[match](context[match]); // ...and otherwise set as attributes
                } else {
                  this.attr(match, context[match]);
                }
              }
            }

            return this; // HANDLE: $(#id)
          } else {
            elem = document.getElementById(match[2]); // Check parentNode to catch when Blackberry 4.6 returns
            // nodes that are no longer in the document #6963

            if (elem && elem.parentNode) {
              // Handle the case where IE and Opera return items
              // by name instead of ID
              if (elem.id !== match[2]) {
                return rootjQuery.find(selector);
              } // Otherwise, we inject the element directly into the jQuery object


              this.length = 1;
              this[0] = elem;
            }

            this.context = document;
            this.selector = selector;
            return this;
          } // HANDLE: $(expr, $(...))

        } else if (!context || context.jquery) {
          return (context || rootjQuery).find(selector); // HANDLE: $(expr, context)
          // (which is just equivalent to: $(context).find(expr)
        } else {
          return this.constructor(context).find(selector);
        } // HANDLE: $(DOMElement)

      } else if (selector.nodeType) {
        this.context = this[0] = selector;
        this.length = 1;
        return this; // HANDLE: $(function)
        // Shortcut for document ready
      } else if (jQuery.isFunction(selector)) {
        return rootjQuery.ready(selector);
      }

      if (selector.selector !== undefined) {
        this.selector = selector.selector;
        this.context = selector.context;
      }

      return jQuery.makeArray(selector, this);
    },
    // Start with an empty selector
    selector: "",
    // The default length of a jQuery object is 0
    length: 0,
    // The number of elements contained in the matched element set
    size: function size() {
      return this.length;
    },
    toArray: function toArray() {
      return core_slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      return num == null ? // Return a 'clean' array
      this.toArray() : // Return just the object
      num < 0 ? this[this.length + num] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this;
      ret.context = this.context; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    // (You can seed the arguments with an array of args, but this is
    // only used internally.)
    each: function each(callback, args) {
      return jQuery.each(this, callback, args);
    },
    ready: function ready(fn) {
      // Add the callback
      jQuery.ready.promise().done(fn);
      return this;
    },
    slice: function slice() {
      return this.pushStack(core_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: core_push,
    sort: [].sort,
    splice: [].splice
  }; // Give the init function the jQuery prototype for later instantiation

  jQuery.fn.init.prototype = jQuery.fn;

  jQuery.extend = jQuery.fn.extend = function () {
    var src,
        copyIsArray,
        copy,
        name,
        options,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target;
      target = arguments[1] || {}; // skip the boolean and the target

      i = 2;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !jQuery.isFunction(target)) {
      target = {};
    } // extend jQuery itself if only one argument is passed


    if (length === i) {
      target = this;
      --i;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name]; // Prevent never-ending loop

          if (target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            } // Never move original objects, clone them


            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    noConflict: function noConflict(deep) {
      if (window.$ === jQuery) {
        window.$ = _$;
      }

      if (deep && window.jQuery === jQuery) {
        window.jQuery = _jQuery;
      }

      return jQuery;
    },
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Hold (or release) the ready event
    holdReady: function holdReady(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).


      if (!document.body) {
        return setTimeout(jQuery.ready);
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]); // Trigger any bound ready events

      if (jQuery.fn.trigger) {
        jQuery(document).trigger("ready").off("ready");
      }
    },
    // See test/unit/core.js for details concerning isFunction.
    // Since version 1.3, DOM methods and functions like alert
    // aren't supported. They return false on IE (#2968).
    isFunction: function isFunction(obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: Array.isArray || function (obj) {
      return jQuery.type(obj) === "array";
    },
    isWindow: function isWindow(obj) {
      return obj != null && obj == obj.window;
    },
    isNumeric: function isNumeric(obj) {
      return !isNaN(parseFloat(obj)) && isFinite(obj);
    },
    type: function type(obj) {
      if (obj == null) {
        return String(obj);
      }

      return _typeof(obj) === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : _typeof(obj);
    },
    isPlainObject: function isPlainObject(obj) {
      // Must be an Object.
      // Because of IE, we also have to check the presence of the constructor property.
      // Make sure that DOM nodes and window objects don't pass through, as well
      if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }

      try {
        // Not own constructor property must be Object
        if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
      } catch (e) {
        // IE8,9 Will throw exceptions on certain host objects #9897
        return false;
      } // Own properties are enumerated firstly, so to speed up,
      // if last one is own, then all properties are own.


      var key;

      for (key in obj) {}

      return key === undefined || core_hasOwn.call(obj, key);
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    error: function error(msg) {
      throw new Error(msg);
    },
    // data: string of html
    // context (optional): If specified, the fragment will be created in this context, defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    parseHTML: function parseHTML(data, context, keepScripts) {
      if (!data || typeof data !== "string") {
        return null;
      }

      if (typeof context === "boolean") {
        keepScripts = context;
        context = false;
      }

      context = context || document;
      var parsed = rsingleTag.exec(data),
          scripts = !keepScripts && []; // Single tag

      if (parsed) {
        return [context.createElement(parsed[1])];
      }

      parsed = jQuery.buildFragment([data], context, scripts);

      if (scripts) {
        jQuery(scripts).remove();
      }

      return jQuery.merge([], parsed.childNodes);
    },
    parseJSON: function parseJSON(data) {
      // Attempt to parse using the native JSON parser first
      if (window.JSON && window.JSON.parse) {
        return window.JSON.parse(data);
      }

      if (data === null) {
        return data;
      }

      if (typeof data === "string") {
        // Make sure leading/trailing whitespace is removed (IE can't handle it)
        data = jQuery.trim(data);

        if (data) {
          // Make sure the incoming data is actual JSON
          // Logic borrowed from http://json.org/json2.js
          if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
            return new Function("return " + data)();
          }
        }
      }

      jQuery.error("Invalid JSON: " + data);
    },
    // Cross-browser xml parsing
    parseXML: function parseXML(data) {
      var xml, tmp;

      if (!data || typeof data !== "string") {
        return null;
      }

      try {
        if (window.DOMParser) {
          // Standard
          tmp = new DOMParser();
          xml = tmp.parseFromString(data, "text/xml");
        } else {
          // IE
          xml = new ActiveXObject("Microsoft.XMLDOM");
          xml.async = "false";
          xml.loadXML(data);
        }
      } catch (e) {
        xml = undefined;
      }

      if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
        jQuery.error("Invalid XML: " + data);
      }

      return xml;
    },
    noop: function noop() {},
    // Evaluates a script in a global context
    // Workarounds based on findings by Jim Driscoll
    // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
    globalEval: function globalEval(data) {
      if (data && jQuery.trim(data)) {
        // We use execScript on Internet Explorer
        // We use an anonymous function so that context is window
        // rather than jQuery in Firefox
        (window.execScript || function (data) {
          window["eval"].call(window, data);
        })(data);
      }
    },
    // Convert dashed to camelCase; used by the css and data modules
    // Microsoft forgot to hump their vendor prefix (#9572)
    camelCase: function camelCase(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function nodeName(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    // args is for internal usage only
    each: function each(obj, callback, args) {
      var value,
          i = 0,
          length = obj.length,
          isArray = isArraylike(obj);

      if (args) {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.apply(obj[i], args);

            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.apply(obj[i], args);

            if (value === false) {
              break;
            }
          }
        } // A special, fast, case for the most common use of each

      } else {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.call(obj[i], i, obj[i]);

            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.call(obj[i], i, obj[i]);

            if (value === false) {
              break;
            }
          }
        }
      }

      return obj;
    },
    // Use native String.trim function wherever possible
    trim: core_trim && !core_trim.call("\uFEFF\xA0") ? function (text) {
      return text == null ? "" : core_trim.call(text);
    } : // Otherwise use our own trimming functionality
    function (text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArraylike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          core_push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      var len;

      if (arr) {
        if (core_indexOf) {
          return core_indexOf.call(arr, elem, i);
        }

        len = arr.length;
        i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

        for (; i < len; i++) {
          // Skip accessing in sparse arrays
          if (i in arr && arr[i] === elem) {
            return i;
          }
        }
      }

      return -1;
    },
    merge: function merge(first, second) {
      var l = second.length,
          i = first.length,
          j = 0;

      if (typeof l === "number") {
        for (; j < l; j++) {
          first[i++] = second[j];
        }
      } else {
        while (second[j] !== undefined) {
          first[i++] = second[j++];
        }
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, inv) {
      var retVal,
          ret = [],
          i = 0,
          length = elems.length;
      inv = !!inv; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        retVal = !!callback(elems[i], i);

        if (inv !== retVal) {
          ret.push(elems[i]);
        }
      }

      return ret;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var value,
          i = 0,
          length = elems.length,
          isArray = isArraylike(elems),
          ret = []; // Go through the array, translating each of the items to their

      if (isArray) {
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret[ret.length] = value;
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret[ret.length] = value;
          }
        }
      } // Flatten any nested arrays


      return core_concat.apply([], ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // Bind a function to a context, optionally partially applying any
    // arguments.
    proxy: function proxy(fn, context) {
      var args, proxy, tmp;

      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      } // Quick check to determine if target is callable, in the spec
      // this throws a TypeError, but we will just return undefined.


      if (!jQuery.isFunction(fn)) {
        return undefined;
      } // Simulated bind


      args = core_slice.call(arguments, 2);

      proxy = function proxy() {
        return fn.apply(context || this, args.concat(core_slice.call(arguments)));
      }; // Set the guid of unique handler to the same of original handler, so it can be removed


      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },
    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    access: function access(elems, fn, key, value, chainable, emptyGet, raw) {
      var i = 0,
          length = elems.length,
          bulk = key == null; // Sets many values

      if (jQuery.type(key) === "object") {
        chainable = true;

        for (i in key) {
          jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
        } // Sets one value

      } else if (value !== undefined) {
        chainable = true;

        if (!jQuery.isFunction(value)) {
          raw = true;
        }

        if (bulk) {
          // Bulk operations run against the entire set
          if (raw) {
            fn.call(elems, value);
            fn = null; // ...except when executing function values
          } else {
            bulk = fn;

            fn = function fn(elem, key, value) {
              return bulk.call(jQuery(elem), value);
            };
          }
        }

        if (fn) {
          for (; i < length; i++) {
            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
          }
        }
      }

      return chainable ? elems : // Gets
      bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
    },
    now: function now() {
      return new Date().getTime();
    }
  });

  jQuery.ready.promise = function (obj) {
    if (!readyList) {
      readyList = jQuery.Deferred(); // Catch cases where $(document).ready() is called after the browser event has already occurred.
      // we once tried to use readyState "interactive" here, but it caused issues like the one
      // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15

      if (document.readyState === "complete") {
        // Handle it asynchronously to allow scripts the opportunity to delay ready
        setTimeout(jQuery.ready); // Standards-based browsers support DOMContentLoaded
      } else if (document.addEventListener) {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed, false); // A fallback to window.onload, that will always work

        window.addEventListener("load", completed, false); // If IE event model is used
      } else {
        // Ensure firing before onload, maybe late but safe also for iframes
        document.attachEvent("onreadystatechange", completed); // A fallback to window.onload, that will always work

        window.attachEvent("onload", completed); // If IE and not a frame
        // continually check to see if the document is ready

        var top = false;

        try {
          top = window.frameElement == null && document.documentElement;
        } catch (e) {}

        if (top && top.doScroll) {
          (function doScrollCheck() {
            if (!jQuery.isReady) {
              try {
                // Use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                top.doScroll("left");
              } catch (e) {
                return setTimeout(doScrollCheck, 50);
              } // detach all dom ready events


              detach(); // and execute any waiting functions

              jQuery.ready();
            }
          })();
        }
      }
    }

    return readyList.promise(obj);
  }; // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArraylike(obj) {
    var length = obj.length,
        type = jQuery.type(obj);

    if (jQuery.isWindow(obj)) {
      return false;
    }

    if (obj.nodeType === 1 && length) {
      return true;
    }

    return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj);
  } // All jQuery objects should point back to these


  rootjQuery = jQuery(document); // String to Object options format cache

  var optionsCache = {}; // Convert String-formatted options into Object-formatted ones and store in cache

  function createOptions(options) {
    var object = optionsCache[options] = {};
    jQuery.each(options.match(core_rnotwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value (for non-forgettable lists)
    memory,
        // Flag to know if list was already fired
    _fired,
        // End of the loop when firing
    firingLength,
        // Index of currently firing callback (modified by remove if needed)
    firingIndex,
        // First callback to fire (used internally by add and fireWith)
    firingStart,
        // Actual callback list
    list = [],
        // Stack of fire calls for repeatable lists
    stack = !options.once && [],
        // Fire callbacks
    fire = function fire(data) {
      memory = options.memory && data;
      _fired = true;
      firingIndex = firingStart || 0;
      firingStart = 0;
      firingLength = list.length;
      firing = true;

      for (; list && firingIndex < firingLength; firingIndex++) {
        if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
          memory = false; // To prevent further calls using add

          break;
        }
      }

      firing = false;

      if (list) {
        if (stack) {
          if (stack.length) {
            fire(stack.shift());
          }
        } else if (memory) {
          list = [];
        } else {
          self.disable();
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // First, we save the current length
          var start = list.length;

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              var type = jQuery.type(arg);

              if (type === "function") {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && type !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments); // Do we need to add the callbacks to the
          // current firing batch?


          if (firing) {
            firingLength = list.length; // With memory, if we're not firing then
            // we should call right away
          } else if (memory) {
            firingStart = start;
            fire(memory);
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        if (list) {
          jQuery.each(arguments, function (_, arg) {
            var index;

            while ((index = jQuery.inArray(arg, list, index)) > -1) {
              list.splice(index, 1); // Handle firing indexes

              if (firing) {
                if (index <= firingLength) {
                  firingLength--;
                }

                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            }
          });
        }

        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
      },
      // Remove all callbacks from the list
      empty: function empty() {
        list = [];
        return this;
      },
      // Have the list do nothing anymore
      disable: function disable() {
        list = stack = memory = undefined;
        return this;
      },
      // Is it disabled?
      disabled: function disabled() {
        return !list;
      },
      // Lock the list in its current state
      lock: function lock() {
        stack = undefined;

        if (!memory) {
          self.disable();
        }

        return this;
      },
      // Is it locked?
      locked: function locked() {
        return !stack;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        args = args || [];
        args = [context, args.slice ? args.slice() : args];

        if (list && (!_fired || stack)) {
          if (firing) {
            stack.push(args);
          } else {
            fire(args);
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, listener list, final state
      ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        then: function then()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (i, tuple) {
              var action = tuple[0],
                  fn = jQuery.isFunction(fns[i]) && fns[i]; // deferred[ done | fail | progress ] for forwarding actions to newDefer

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && jQuery.isFunction(returned.promise)) {
                  returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                } else {
                  newDefer[action + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Keep pipe for back-compat

      _promise.pipe = _promise.then; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[3]; // promise[ done | fail | progress ] = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = [ resolved | rejected ]
            _state = stateString; // [ reject_list | resolve_list ].disable; progress_list.lock
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        } // deferred[ resolve | reject | notify ]


        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
          return this;
        };

        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(subordinate
    /* , ..., subordinateN */
    ) {
      var i = 0,
          resolveValues = core_slice.call(arguments),
          length = resolveValues.length,
          // the count of uncompleted subordinates
      remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
          // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
      deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
          // Update function for both resolve and progress values
      updateFunc = function updateFunc(i, contexts, values) {
        return function (value) {
          contexts[i] = this;
          values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;

          if (values === progressValues) {
            deferred.notifyWith(contexts, values);
          } else if (! --remaining) {
            deferred.resolveWith(contexts, values);
          }
        };
      },
          progressValues,
          progressContexts,
          resolveContexts; // add listeners to Deferred subordinates; treat others as resolved


      if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);

        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
          } else {
            --remaining;
          }
        }
      } // if we're not waiting on anything, resolve the master


      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }

      return deferred.promise();
    }
  });

  jQuery.support = function () {
    var support,
        all,
        a,
        input,
        select,
        fragment,
        opt,
        eventName,
        isSupported,
        i,
        div = document.createElement("div"); // Setup

    div.setAttribute("className", "t");
    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"; // Support tests won't run in some limited or non-browser environments

    all = div.getElementsByTagName("*");
    a = div.getElementsByTagName("a")[0];

    if (!all || !a || !all.length) {
      return {};
    } // First batch of tests


    select = document.createElement("select");
    opt = select.appendChild(document.createElement("option"));
    input = div.getElementsByTagName("input")[0];
    a.style.cssText = "top:1px;float:left;opacity:.5";
    support = {
      // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
      getSetAttribute: div.className !== "t",
      // IE strips leading whitespace when .innerHTML is used
      leadingWhitespace: div.firstChild.nodeType === 3,
      // Make sure that tbody elements aren't automatically inserted
      // IE will insert them into empty tables
      tbody: !div.getElementsByTagName("tbody").length,
      // Make sure that link elements get serialized correctly by innerHTML
      // This requires a wrapper element in IE
      htmlSerialize: !!div.getElementsByTagName("link").length,
      // Get the style information from getAttribute
      // (IE uses .cssText instead)
      style: /top/.test(a.getAttribute("style")),
      // Make sure that URLs aren't manipulated
      // (IE normalizes it by default)
      hrefNormalized: a.getAttribute("href") === "/a",
      // Make sure that element opacity exists
      // (IE uses filter instead)
      // Use a regex to work around a WebKit issue. See #5145
      opacity: /^0.5/.test(a.style.opacity),
      // Verify style float existence
      // (IE uses styleFloat instead of cssFloat)
      cssFloat: !!a.style.cssFloat,
      // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
      checkOn: !!input.value,
      // Make sure that a selected-by-default option has a working selected property.
      // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
      optSelected: opt.selected,
      // Tests for enctype support on a form (#6743)
      enctype: !!document.createElement("form").enctype,
      // Makes sure cloning an html5 element does not cause problems
      // Where outerHTML is undefined, this still works
      html5Clone: document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
      // jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
      boxModel: document.compatMode === "CSS1Compat",
      // Will be defined later
      deleteExpando: true,
      noCloneEvent: true,
      inlineBlockNeedsLayout: false,
      shrinkWrapBlocks: false,
      reliableMarginRight: true,
      boxSizingReliable: true,
      pixelPosition: false
    }; // Make sure checked status is properly cloned

    input.checked = true;
    support.noCloneChecked = input.cloneNode(true).checked; // Make sure that the options inside disabled selects aren't marked as disabled
    // (WebKit marks them as disabled)

    select.disabled = true;
    support.optDisabled = !opt.disabled; // Support: IE<9

    try {
      delete div.test;
    } catch (e) {
      support.deleteExpando = false;
    } // Check if we can trust getAttribute("value")


    input = document.createElement("input");
    input.setAttribute("value", "");
    support.input = input.getAttribute("value") === ""; // Check if an input maintains its value after becoming a radio

    input.value = "t";
    input.setAttribute("type", "radio");
    support.radioValue = input.value === "t"; // #11217 - WebKit loses check when the name is after the checked attribute

    input.setAttribute("checked", "t");
    input.setAttribute("name", "t");
    fragment = document.createDocumentFragment();
    fragment.appendChild(input); // Check if a disconnected checkbox will retain its checked
    // value of true after appended to the DOM (IE6/7)

    support.appendChecked = input.checked; // WebKit doesn't clone checked state correctly in fragments

    support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE<9
    // Opera does not clone events (and typeof div.attachEvent === undefined).
    // IE9-10 clones events bound via attachEvent, but they don't trigger with .click()

    if (div.attachEvent) {
      div.attachEvent("onclick", function () {
        support.noCloneEvent = false;
      });
      div.cloneNode(true).click();
    } // Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
    // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php


    for (i in {
      submit: true,
      change: true,
      focusin: true
    }) {
      div.setAttribute(eventName = "on" + i, "t");
      support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false;
    }

    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box"; // Run tests that need a body at doc ready

    jQuery(function () {
      var container,
          marginDiv,
          tds,
          divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
          body = document.getElementsByTagName("body")[0];

      if (!body) {
        // Return for frameset docs that don't have a body
        return;
      }

      container = document.createElement("div");
      container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
      body.appendChild(container).appendChild(div); // Support: IE8
      // Check if table cells still have offsetWidth/Height when they are set
      // to display:none and there are still other visible table cells in a
      // table row; if so, offsetWidth/Height are not reliable for use when
      // determining if an element has been hidden directly using
      // display:none (it is still safe to use offsets if a parent element is
      // hidden; don safety goggles and see bug #4512 for more information).

      div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
      tds = div.getElementsByTagName("td");
      tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
      isSupported = tds[0].offsetHeight === 0;
      tds[0].style.display = "";
      tds[1].style.display = "none"; // Support: IE8
      // Check if empty table cells still have offsetWidth/Height

      support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0; // Check box-sizing and margin behavior

      div.innerHTML = "";
      div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
      support.boxSizing = div.offsetWidth === 4;
      support.doesNotIncludeMarginInBodyOffset = body.offsetTop !== 1; // Use window.getComputedStyle because jsdom on node.js will break without it.

      if (window.getComputedStyle) {
        support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
        support.boxSizingReliable = (window.getComputedStyle(div, null) || {
          width: "4px"
        }).width === "4px"; // Check if div with explicit width and no margin-right incorrectly
        // gets computed margin-right based on width of container. (#3333)
        // Fails in WebKit before Feb 2011 nightlies
        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right

        marginDiv = div.appendChild(document.createElement("div"));
        marginDiv.style.cssText = div.style.cssText = divReset;
        marginDiv.style.marginRight = marginDiv.style.width = "0";
        div.style.width = "1px";
        support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
      }

      if (_typeof(div.style.zoom) !== core_strundefined) {
        // Support: IE<8
        // Check if natively block-level elements act like inline-block
        // elements when setting their display to 'inline' and giving
        // them layout
        div.innerHTML = "";
        div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
        support.inlineBlockNeedsLayout = div.offsetWidth === 3; // Support: IE6
        // Check if elements with layout shrink-wrap their children

        div.style.display = "block";
        div.innerHTML = "<div></div>";
        div.firstChild.style.width = "5px";
        support.shrinkWrapBlocks = div.offsetWidth !== 3;

        if (support.inlineBlockNeedsLayout) {
          // Prevent IE 6 from affecting layout for positioned elements #11048
          // Prevent IE from shrinking the body in IE 7 mode #12869
          // Support: IE<8
          body.style.zoom = 1;
        }
      }

      body.removeChild(container); // Null elements to avoid leaks in IE

      container = div = tds = marginDiv = null;
    }); // Null elements to avoid leaks in IE

    all = select = fragment = opt = a = input = null;
    return support;
  }();

  var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      rmultiDash = /([A-Z])/g;

  function internalData(elem, name, data, pvt
  /* Internal Use Only */
  ) {
    if (!jQuery.acceptData(elem)) {
      return;
    }

    var thisCache,
        ret,
        internalKey = jQuery.expando,
        getByName = typeof name === "string",
        // We have to handle DOM nodes and JS objects differently because IE6-7
    // can't GC object references properly across the DOM-JS boundary
    isNode = elem.nodeType,
        // Only DOM nodes need the global jQuery cache; JS object data is
    // attached directly to the object so GC can occur automatically
    cache = isNode ? jQuery.cache : elem,
        // Only defining an ID for JS objects if its cache already exists allows
    // the code to shortcut on the same path as a DOM node with no cache
    id = isNode ? elem[internalKey] : elem[internalKey] && internalKey; // Avoid doing any more work than we need to when trying to get data on an
    // object that has no data at all

    if ((!id || !cache[id] || !pvt && !cache[id].data) && getByName && data === undefined) {
      return;
    }

    if (!id) {
      // Only DOM nodes need a new unique ID for each element since their data
      // ends up in the global cache
      if (isNode) {
        elem[internalKey] = id = core_deletedIds.pop() || jQuery.guid++;
      } else {
        id = internalKey;
      }
    }

    if (!cache[id]) {
      cache[id] = {}; // Avoids exposing jQuery metadata on plain JS objects when the object
      // is serialized using JSON.stringify

      if (!isNode) {
        cache[id].toJSON = jQuery.noop;
      }
    } // An object can be passed to jQuery.data instead of a key/value pair; this gets
    // shallow copied over onto the existing cache


    if (_typeof(name) === "object" || typeof name === "function") {
      if (pvt) {
        cache[id] = jQuery.extend(cache[id], name);
      } else {
        cache[id].data = jQuery.extend(cache[id].data, name);
      }
    }

    thisCache = cache[id]; // jQuery data() is stored in a separate object inside the object's internal data
    // cache in order to avoid key collisions between internal data and user-defined
    // data.

    if (!pvt) {
      if (!thisCache.data) {
        thisCache.data = {};
      }

      thisCache = thisCache.data;
    }

    if (data !== undefined) {
      thisCache[jQuery.camelCase(name)] = data;
    } // Check for both converted-to-camel and non-converted data property names
    // If a data property was specified


    if (getByName) {
      // First Try to find as-is property data
      ret = thisCache[name]; // Test for null|undefined property data

      if (ret == null) {
        // Try to find the camelCased property
        ret = thisCache[jQuery.camelCase(name)];
      }
    } else {
      ret = thisCache;
    }

    return ret;
  }

  function internalRemoveData(elem, name, pvt) {
    if (!jQuery.acceptData(elem)) {
      return;
    }

    var i,
        l,
        thisCache,
        isNode = elem.nodeType,
        // See jQuery.data for more information
    cache = isNode ? jQuery.cache : elem,
        id = isNode ? elem[jQuery.expando] : jQuery.expando; // If there is already no cache entry for this object, there is no
    // purpose in continuing

    if (!cache[id]) {
      return;
    }

    if (name) {
      thisCache = pvt ? cache[id] : cache[id].data;

      if (thisCache) {
        // Support array or space separated string names for data keys
        if (!jQuery.isArray(name)) {
          // try the string as a key before any manipulation
          if (name in thisCache) {
            name = [name];
          } else {
            // split the camel cased version by spaces unless a key with the spaces exists
            name = jQuery.camelCase(name);

            if (name in thisCache) {
              name = [name];
            } else {
              name = name.split(" ");
            }
          }
        } else {
          // If "name" is an array of keys...
          // When data is initially created, via ("key", "val") signature,
          // keys will be converted to camelCase.
          // Since there is no way to tell _how_ a key was added, remove
          // both plain key and camelCase key. #12786
          // This will only penalize the array argument path.
          name = name.concat(jQuery.map(name, jQuery.camelCase));
        }

        for (i = 0, l = name.length; i < l; i++) {
          delete thisCache[name[i]];
        } // If there is no data left in the cache, we want to continue
        // and let the cache object itself get destroyed


        if (!(pvt ? isEmptyDataObject : jQuery.isEmptyObject)(thisCache)) {
          return;
        }
      }
    } // See jQuery.data for more information


    if (!pvt) {
      delete cache[id].data; // Don't destroy the parent cache unless the internal data object
      // had been the only thing left in it

      if (!isEmptyDataObject(cache[id])) {
        return;
      }
    } // Destroy the cache


    if (isNode) {
      jQuery.cleanData([elem], true); // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
    } else if (jQuery.support.deleteExpando || cache != cache.window) {
      delete cache[id]; // When all else fails, null
    } else {
      cache[id] = null;
    }
  }

  jQuery.extend({
    cache: {},
    // Unique for each copy of jQuery on the page
    // Non-digits removed to match rinlinejQuery
    expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
    // The following elements throw uncatchable exceptions if you
    // attempt to add expando properties to them.
    noData: {
      "embed": true,
      // Ban all objects except for Flash (which handle expandos)
      "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      "applet": true
    },
    hasData: function hasData(elem) {
      elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
      return !!elem && !isEmptyDataObject(elem);
    },
    data: function data(elem, name, _data) {
      return internalData(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      return internalRemoveData(elem, name);
    },
    // For internal use only.
    _data: function _data(elem, name, data) {
      return internalData(elem, name, data, true);
    },
    _removeData: function _removeData(elem, name) {
      return internalRemoveData(elem, name, true);
    },
    // A method for determining if a DOM node can handle the data expando
    acceptData: function acceptData(elem) {
      // Do not set data on non-element because it will not be cleared (#8335).
      if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
        return false;
      }

      var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()]; // nodes accept data unless otherwise specified; rejection can be conditional

      return !noData || noData !== true && elem.getAttribute("classid") === noData;
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var attrs,
          name,
          elem = this[0],
          i = 0,
          data = null; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = jQuery.data(elem);

          if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
            attrs = elem.attributes;

            for (; i < attrs.length; i++) {
              name = attrs[i].name;

              if (!name.indexOf("data-")) {
                name = jQuery.camelCase(name.slice(5));
                dataAttr(elem, name, data[name]);
              }
            }

            jQuery._data(elem, "parsedAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          jQuery.data(this, key);
        });
      }

      return jQuery.access(this, function (value) {
        if (value === undefined) {
          // Try to fetch any internally stored data first
          return elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
        }

        this.each(function () {
          jQuery.data(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        jQuery.removeData(this, key);
      });
    }
  });

  function dataAttr(elem, key, data) {
    // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute
    if (data === undefined && elem.nodeType === 1) {
      var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = data === "true" ? true : data === "false" ? false : data === "null" ? null : // Only convert to a number if it doesn't change the string
          +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
        } catch (e) {} // Make sure we set the data so it isn't changed later


        jQuery.data(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  } // checks a cache object for emptiness


  function isEmptyDataObject(obj) {
    var name;

    for (name in obj) {
      // if the public data object is empty, the private is still empty
      if (name === "data" && jQuery.isEmptyObject(obj[name])) {
        continue;
      }

      if (name !== "toJSON") {
        return false;
      }
    }

    return true;
  }

  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = jQuery._data(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = jQuery._data(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      hooks.cur = fn;

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // not intended for public consumption - generates a queueHooks object, or returns the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return jQuery._data(elem, key) || jQuery._data(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          jQuery._removeData(elem, type + "queue");

          jQuery._removeData(elem, key);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    // Based off of the plugin by Clint Helfers, with permission.
    // http://blindsignals.com/index.php/2009/07/jquery-delay/
    delay: function delay(time, type) {
      time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
      type = type || "fx";
      return this.queue(type, function (next, hooks) {
        var timeout = setTimeout(next, time);

        hooks.stop = function () {
          clearTimeout(timeout);
        };
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = jQuery._data(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var nodeHook,
      boolHook,
      rclass = /[\t\r\n]/g,
      rreturn = /\r/g,
      rfocusable = /^(?:input|select|textarea|button|object)$/i,
      rclickable = /^(?:a|area)$/i,
      rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
      ruseDefault = /^(?:checked|selected)$/i,
      getSetAttribute = jQuery.support.getSetAttribute,
      getSetInput = jQuery.support.input;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    },
    prop: function prop(name, value) {
      return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      name = jQuery.propFix[name] || name;
      return this.each(function () {
        // try/catch handles cases where IE balks (such as removing a property on window)
        try {
          this[name] = undefined;
          delete this[name];
        } catch (e) {}
      });
    },
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          clazz,
          j,
          i = 0,
          len = this.length,
          proceed = typeof value === "string" && value;

      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, this.className));
        });
      }

      if (proceed) {
        // The disjunction here is for better compressibility (see removeClass)
        classes = (value || "").match(core_rnotwhite) || [];

        for (; i < len; i++) {
          elem = this[i];
          cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }

            elem.className = jQuery.trim(cur);
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          clazz,
          j,
          i = 0,
          len = this.length,
          proceed = arguments.length === 0 || typeof value === "string" && value;

      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, this.className));
        });
      }

      if (proceed) {
        classes = (value || "").match(core_rnotwhite) || [];

        for (; i < len; i++) {
          elem = this[i]; // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") >= 0) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }

            elem.className = value ? jQuery.trim(cur) : "";
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isBool = typeof stateVal === "boolean";

      if (jQuery.isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
        });
      }

      return this.each(function () {
        if (type === "string") {
          // toggle individual class names
          var className,
              i = 0,
              self = jQuery(this),
              state = stateVal,
              classNames = value.match(core_rnotwhite) || [];

          while (className = classNames[i++]) {
            // check each className given, space separated list
            state = isBool ? state : !self.hasClass(className);
            self[state ? "addClass" : "removeClass"](className);
          } // Toggle whole class name

        } else if (type === core_strundefined || type === "boolean") {
          if (this.className) {
            // store className if set
            jQuery._data(this, "__className__", this.className);
          } // If the element has a class name or if we're passed "false",
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className = " " + selector + " ",
          i = 0,
          l = this.length;

      for (; i < l; i++) {
        if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
          return true;
        }
      }

      return false;
    },
    val: function val(value) {
      var ret,
          hooks,
          isFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value;
          return typeof ret === "string" ? // handle most common string cases
          ret.replace(rreturn, "") : // handle cases where value is null/undef or number
          ret == null ? "" : ret;
        }

        return;
      }

      isFunction = jQuery.isFunction(value);
      return this.each(function (i) {
        var val,
            self = jQuery(this);

        if (this.nodeType !== 1) {
          return;
        }

        if (isFunction) {
          val = value.call(this, i, self.val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          // attributes.value is undefined in Blackberry 4.7 but
          // uses .value. See #6932
          var val = elem.attributes.value;
          return !val || val.specified ? elem.value : elem.text;
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one" || index < 0,
              values = one ? null : [],
              max = one ? index + 1 : options.length,
              i = index < 0 ? max : one ? index : 0; // Loop through all the selected options

          for (; i < max; i++) {
            option = options[i]; // oldIE doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && ( // Don't return options that are disabled or in a disabled optgroup
            jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var values = jQuery.makeArray(value);
          jQuery(elem).find("option").each(function () {
            this.selected = jQuery.inArray(jQuery(this).val(), values) >= 0;
          });

          if (!values.length) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    },
    attr: function attr(elem, name, value) {
      var hooks,
          notxml,
          ret,
          nType = elem.nodeType; // don't get/set attributes on text, comment and attribute nodes

      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (_typeof(elem.getAttribute) === core_strundefined) {
        return jQuery.prop(elem, name, value);
      }

      notxml = nType !== 1 || !jQuery.isXMLDoc(elem); // All attributes are lowercase
      // Grab necessary hook if one is defined

      if (notxml) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] || (rboolean.test(name) ? boolHook : nodeHook);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
        } else if (hooks && notxml && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        } else {
          elem.setAttribute(name, value + "");
          return value;
        }
      } else if (hooks && notxml && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      } else {
        // In IE9+, Flash objects don't have .getAttribute (#12945)
        // Support: IE9+
        if (_typeof(elem.getAttribute) !== core_strundefined) {
          ret = elem.getAttribute(name);
        } // Non-existent attributes return null, we normalize to undefined


        return ret == null ? undefined : ret;
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          propName,
          i = 0,
          attrNames = value && value.match(core_rnotwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          propName = jQuery.propFix[name] || name; // Boolean attributes get special treatment (#10870)

          if (rboolean.test(name)) {
            // Set corresponding property to false for boolean attributes
            // Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
            if (!getSetAttribute && ruseDefault.test(name)) {
              elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
            } else {
              elem[propName] = false;
            } // See #9699 for explanation of this approach (setting first, then removal)

          } else {
            jQuery.attr(elem, name, "");
          }

          elem.removeAttribute(getSetAttribute ? name : propName);
        }
      }
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            // Setting the type on a radio button after the value resets the value in IE6-9
            // Reset value to default in case type is set after value during creation
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          notxml,
          nType = elem.nodeType; // don't get/set properties on text, comment and attribute nodes

      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

      if (notxml) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        } else {
          return elem[name] = value;
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
          return ret;
        } else {
          return elem[name];
        }
      }
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
          // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          var attributeNode = elem.getAttributeNode("tabindex");
          return attributeNode && attributeNode.specified ? parseInt(attributeNode.value, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : undefined;
        }
      }
    }
  }); // Hook for boolean attributes

  boolHook = {
    get: function get(elem, name) {
      var // Use .prop to determine if this attribute is understood as boolean
      prop = jQuery.prop(elem, name),
          // Fetch it accordingly
      attr = typeof prop === "boolean" && elem.getAttribute(name),
          detail = typeof prop === "boolean" ? getSetInput && getSetAttribute ? attr != null : // oldIE fabricates an empty string for missing boolean attributes
      // and conflates checked/selected into attroperties
      ruseDefault.test(name) ? elem[jQuery.camelCase("default-" + name)] : !!attr : // fetch an attribute node for properties not recognized as boolean
      elem.getAttributeNode(name);
      return detail && detail.value !== false ? name.toLowerCase() : undefined;
    },
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
        // IE<8 needs the *property* name
        elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name); // Use defaultChecked and defaultSelected for oldIE
      } else {
        elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
      }

      return name;
    }
  }; // fix oldIE value attroperty

  if (!getSetInput || !getSetAttribute) {
    jQuery.attrHooks.value = {
      get: function get(elem, name) {
        var ret = elem.getAttributeNode(name);
        return jQuery.nodeName(elem, "input") ? // Ignore the value *property* by using defaultValue
        elem.defaultValue : ret && ret.specified ? ret.value : undefined;
      },
      set: function set(elem, value, name) {
        if (jQuery.nodeName(elem, "input")) {
          // Does not return so that setAttribute is also used
          elem.defaultValue = value;
        } else {
          // Use nodeHook if defined (#1954); otherwise setAttribute is fine
          return nodeHook && nodeHook.set(elem, value, name);
        }
      }
    };
  } // IE6/7 do not support getting/setting some attributes with get/setAttribute


  if (!getSetAttribute) {
    // Use this for any attribute in IE6/7
    // This fixes almost every IE6/7 issue
    nodeHook = jQuery.valHooks.button = {
      get: function get(elem, name) {
        var ret = elem.getAttributeNode(name);
        return ret && (name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified) ? ret.value : undefined;
      },
      set: function set(elem, value, name) {
        // Set the existing or create a new attribute node
        var ret = elem.getAttributeNode(name);

        if (!ret) {
          elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
        }

        ret.value = value += ""; // Break association with cloned elements by also using setAttribute (#9646)

        return name === "value" || value === elem.getAttribute(name) ? value : undefined;
      }
    }; // Set contenteditable to false on removals(#10429)
    // Setting to empty string throws an error as an invalid value

    jQuery.attrHooks.contenteditable = {
      get: nodeHook.get,
      set: function set(elem, value, name) {
        nodeHook.set(elem, value === "" ? false : value, name);
      }
    }; // Set width and height to auto instead of 0 on empty string( Bug #8150 )
    // This is for removals

    jQuery.each(["width", "height"], function (i, name) {
      jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
        set: function set(elem, value) {
          if (value === "") {
            elem.setAttribute(name, "auto");
            return value;
          }
        }
      });
    });
  } // Some attributes require a special call on IE
  // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx


  if (!jQuery.support.hrefNormalized) {
    jQuery.each(["href", "src", "width", "height"], function (i, name) {
      jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
        get: function get(elem) {
          var ret = elem.getAttribute(name, 2);
          return ret == null ? undefined : ret;
        }
      });
    }); // href/src property should get the full normalized URL (#10299/#12915)

    jQuery.each(["href", "src"], function (i, name) {
      jQuery.propHooks[name] = {
        get: function get(elem) {
          return elem.getAttribute(name, 4);
        }
      };
    });
  }

  if (!jQuery.support.style) {
    jQuery.attrHooks.style = {
      get: function get(elem) {
        // Return undefined in the case of empty string
        // Note: IE uppercases css property names, but if we were to .toLowerCase()
        // .cssText, that would destroy case senstitivity in URL's, like in "background"
        return elem.style.cssText || undefined;
      },
      set: function set(elem, value) {
        return elem.style.cssText = value + "";
      }
    };
  } // Safari mis-reports the default selected property of an option
  // Accessing the parent's selectedIndex property fixes it


  if (!jQuery.support.optSelected) {
    jQuery.propHooks.selected = jQuery.extend(jQuery.propHooks.selected, {
      get: function get(elem) {
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex; // Make sure that it also works with optgroups, see #5701

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }

        return null;
      }
    });
  } // IE6/7 call enctype encoding


  if (!jQuery.support.enctype) {
    jQuery.propFix.enctype = "encoding";
  } // Radios and checkboxes getter/setter


  if (!jQuery.support.checkOn) {
    jQuery.each(["radio", "checkbox"], function () {
      jQuery.valHooks[this] = {
        get: function get(elem) {
          // Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
          return elem.getAttribute("value") === null ? "on" : elem.value;
        }
      };
    });
  }

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = jQuery.extend(jQuery.valHooks[this], {
      set: function set(elem, value) {
        if (jQuery.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
        }
      }
    });
  });
  var rformElems = /^(?:input|select|textarea)$/i,
      rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|contextmenu)|click/,
      rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var tmp,
          events,
          t,
          handleObjIn,
          special,
          eventHandle,
          handleObj,
          handlers,
          type,
          namespaces,
          origType,
          elemData = jQuery._data(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)


      if (!elemData) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return _typeof(jQuery) !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
        }; // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events


        eventHandle.elem = elem;
      } // Handle multiple events separated by a space
      // jQuery(...).bind("mouseover mouseout", fn);


      types = (types || "").match(core_rnotwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // If event changes its type, use the special event handlers for the changed type

        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener/attachEvent if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            // Bind the global event handler to the element
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);
            } else if (elem.attachEvent) {
              elem.attachEvent("on" + type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      } // Nullify elem to prevent memory leaks in IE


      elem = null;
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          handleObj,
          tmp,
          origCount,
          t,
          events,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = jQuery.hasData(elem) && jQuery._data(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(core_rnotwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        delete elemData.handle; // removeData also checks for emptiness and clears the expando if empty
        // so use it instead of delete

        jQuery._removeData(elem, "events");
      }
    },
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var handle,
          ontype,
          cur,
          bubbleType,
          special,
          tmp,
          i,
          eventPath = [elem || document],
          type = core_hasOwn.call(event, "type") ? event.type : event,
          namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") >= 0) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event);
      event.isTrigger = true;
      event.namespace = namespaces.join(".");
      event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
          event.preventDefault();
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(elem.ownerDocument, data) === false) && !(type === "click" && jQuery.nodeName(elem, "a")) && jQuery.acceptData(elem)) {
          // Call a native DOM method on the target with the same name name as the event.
          // Can't use an .isFunction() check here because IE6/7 fails that test.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && elem[type] && !jQuery.isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            try {
              elem[type]();
            } catch (e) {// IE<9 dies on focus/blur to hidden element (#1486,#12518)
              // only reproducible on winXP IE8 native, not IE9 in IE8 mode
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    dispatch: function dispatch(event) {
      // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(event);
      var i,
          ret,
          handleObj,
          matched,
          j,
          handlerQueue = [],
          args = core_slice.call(arguments),
          handlers = (jQuery._data(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;
      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // Triggered event must either 1) have no namespace, or
          // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
          if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var sel,
          handleObj,
          matches,
          i,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers
      // Black-hole SVG <use> instance trees (#13180)
      // Avoid non-left-click bubbling in Firefox (#3861)

      if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
        for (; cur != this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
            matches = [];

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matches[sel]) {
                matches.push(handleObj);
              }
            }

            if (matches.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matches
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: this,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    fix: function fix(event) {
      if (event[jQuery.expando]) {
        return event;
      } // Create a writable copy of the event object and normalize some properties


      var i,
          prop,
          copy,
          type = event.type,
          originalEvent = event,
          fixHook = this.fixHooks[type];

      if (!fixHook) {
        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
      }

      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i = copy.length;

      while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      } // Support: IE<9
      // Fix target property (#1925)


      if (!event.target) {
        event.target = originalEvent.srcElement || document;
      } // Support: Chrome 23+, Safari?
      // Target should not be a text node (#504, #13143)


      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      } // Support: IE<9
      // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)


      event.metaKey = !!event.metaKey;
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    // Includes some event props shared by KeyEvent and MouseEvent
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(event, original) {
        // Add which for key events
        if (event.which == null) {
          event.which = original.charCode != null ? original.charCode : original.keyCode;
        }

        return event;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(event, original) {
        var body,
            eventDoc,
            doc,
            button = original.button,
            fromElement = original.fromElement; // Calculate pageX/Y if missing and clientX/Y available

        if (event.pageX == null && original.clientX != null) {
          eventDoc = event.target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;
          event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        } // Add relatedTarget, if necessary


        if (!event.relatedTarget && fromElement) {
          event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
        } // Add which for click: 1 === left; 2 === middle; 3 === right
        // Note: button is not normalized, so don't use it


        if (!event.which && button !== undefined) {
          event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
        }

        return event;
      }
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // For checkbox, fire native event so checked state will be right
        trigger: function trigger() {
          if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
            this.click();
            return false;
          }
        }
      },
      focus: {
        // Fire native event if possible so blur/focus sequence is correct
        trigger: function trigger() {
          if (this !== document.activeElement && this.focus) {
            try {
              this.focus();
              return false;
            } catch (e) {// Support: IE<9
              // If we error on focus to hidden element (#1486, #12518),
              // let .trigger() run the handlers
            }
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === document.activeElement && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Even when returnValue equals to undefined Firefox will still show alert
          if (event.result !== undefined) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    },
    simulate: function simulate(type, elem, event, bubble) {
      // Piggyback on a donor event to simulate a different one.
      // Fake originalEvent to avoid donor's stopPropagation, but if the
      // simulated event prevents default then we do the same on the donor.
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true,
        originalEvent: {}
      });

      if (bubble) {
        jQuery.event.trigger(e, null, elem);
      } else {
        jQuery.event.dispatch.call(elem, e);
      }

      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  };
  jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle, false);
    }
  } : function (elem, type, handle) {
    var name = "on" + type;

    if (elem.detachEvent) {
      // #8545, #7054, preventing memory leaks for custom events in IE6-8
      // detachEvent needed property on element, by name of that event, to properly expose it to GC
      if (_typeof(elem[name]) === core_strundefined) {
        elem[name] = null;
      }

      elem.detachEvent(name, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || jQuery.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (!e) {
        return;
      } // If preventDefault exists, run it on the original event


      if (e.preventDefault) {
        e.preventDefault(); // Support: IE
        // Otherwise set the returnValue property of the original event to false
      } else {
        e.returnValue = false;
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (!e) {
        return;
      } // If stopPropagation exists, run it on the original event


      if (e.stopPropagation) {
        e.stopPropagation();
      } // Support: IE
      // Set the cancelBubble property of the original event to true


      e.cancelBubble = true;
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = returnTrue;
      this.stopPropagation();
    }
  }; // Create mouseenter/leave events using mouseover/out and event-time checks

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mousenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  }); // IE submit delegation

  if (!jQuery.support.submitBubbles) {
    jQuery.event.special.submit = {
      setup: function setup() {
        // Only need this for delegated form submit events
        if (jQuery.nodeName(this, "form")) {
          return false;
        } // Lazy-add a submit handler when a descendant form may potentially be submitted


        jQuery.event.add(this, "click._submit keypress._submit", function (e) {
          // Node name check avoids a VML-related crash in IE (#9807)
          var elem = e.target,
              form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;

          if (form && !jQuery._data(form, "submitBubbles")) {
            jQuery.event.add(form, "submit._submit", function (event) {
              event._submit_bubble = true;
            });

            jQuery._data(form, "submitBubbles", true);
          }
        }); // return undefined since we don't need an event listener
      },
      postDispatch: function postDispatch(event) {
        // If form was submitted by the user, bubble the event up the tree
        if (event._submit_bubble) {
          delete event._submit_bubble;

          if (this.parentNode && !event.isTrigger) {
            jQuery.event.simulate("submit", this.parentNode, event, true);
          }
        }
      },
      teardown: function teardown() {
        // Only need this for delegated form submit events
        if (jQuery.nodeName(this, "form")) {
          return false;
        } // Remove delegated handlers; cleanData eventually reaps submit handlers attached above


        jQuery.event.remove(this, "._submit");
      }
    };
  } // IE change delegation and checkbox/radio fix


  if (!jQuery.support.changeBubbles) {
    jQuery.event.special.change = {
      setup: function setup() {
        if (rformElems.test(this.nodeName)) {
          // IE doesn't fire change on a check/radio until blur; trigger it on click
          // after a propertychange. Eat the blur-change in special.change.handle.
          // This still fires onchange a second time for check/radio after blur.
          if (this.type === "checkbox" || this.type === "radio") {
            jQuery.event.add(this, "propertychange._change", function (event) {
              if (event.originalEvent.propertyName === "checked") {
                this._just_changed = true;
              }
            });
            jQuery.event.add(this, "click._change", function (event) {
              if (this._just_changed && !event.isTrigger) {
                this._just_changed = false;
              } // Allow triggered, simulated change events (#11500)


              jQuery.event.simulate("change", this, event, true);
            });
          }

          return false;
        } // Delegated event; lazy-add a change handler on descendant inputs


        jQuery.event.add(this, "beforeactivate._change", function (e) {
          var elem = e.target;

          if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
            jQuery.event.add(elem, "change._change", function (event) {
              if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                jQuery.event.simulate("change", this.parentNode, event, true);
              }
            });

            jQuery._data(elem, "changeBubbles", true);
          }
        });
      },
      handle: function handle(event) {
        var elem = event.target; // Swallow native change events from checkbox/radio, we already triggered them above

        if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
          return event.handleObj.handler.apply(this, arguments);
        }
      },
      teardown: function teardown() {
        jQuery.event.remove(this, "._change");
        return !rformElems.test(this.nodeName);
      }
    };
  } // Create "bubbling" focus and blur events


  if (!jQuery.support.focusinBubbles) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler while someone wants focusin/focusout
      var attaches = 0,
          handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          if (attaches++ === 0) {
            document.addEventListener(orig, handler, true);
          }
        },
        teardown: function teardown() {
          if (--attaches === 0) {
            document.removeEventListener(orig, handler, true);
          }
        }
      };
    });
  }

  jQuery.fn.extend({
    on: function on(types, selector, data, fn,
    /*INTERNAL*/
    one) {
      var type, origFn; // Types can be a map of types/handlers

      if (_typeof(types) === "object") {
        // ( types-Object, selector, data )
        if (typeof selector !== "string") {
          // ( types-Object, data )
          data = data || selector;
          selector = undefined;
        }

        for (type in types) {
          this.on(type, selector, data, types[type], one);
        }

        return this;
      }

      if (data == null && fn == null) {
        // ( types, fn )
        fn = selector;
        data = selector = undefined;
      } else if (fn == null) {
        if (typeof selector === "string") {
          // ( types, selector, fn )
          fn = data;
          data = undefined;
        } else {
          // ( types, data, fn )
          fn = data;
          data = selector;
          selector = undefined;
        }
      }

      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return this;
      }

      if (one === 1) {
        origFn = fn;

        fn = function fn(event) {
          // Can use an empty set, since event contains the info
          jQuery().off(event);
          return origFn.apply(this, arguments);
        }; // Use same guid so caller can remove using origFn


        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
      }

      return this.each(function () {
        jQuery.event.add(this, types, fn, data, selector);
      });
    },
    one: function one(types, selector, data, fn) {
      return this.on(types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    },
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  /*!
   * Sizzle CSS Selector Engine
   * Copyright 2012 jQuery Foundation and other contributors
   * Released under the MIT license
   * http://sizzlejs.com/
   */

  (function (window, undefined) {
    var i,
        cachedruns,
        Expr,
        getText,
        isXML,
        compile,
        hasDuplicate,
        outermostContext,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsXML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        sortOrder,
        // Instance-specific data
    expando = "sizzle" + -new Date(),
        preferredDoc = window.document,
        support = {},
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        // General-purpose constants
    strundefined = _typeof(undefined),
        MAX_NEGATIVE = 1 << 31,
        // Array methods
    arr = [],
        pop = arr.pop,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf if we can't use a native one
    indexOf = arr.indexOf || function (elem) {
      var i = 0,
          len = this.length;

      for (; i < len; i++) {
        if (this[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        // Regular expressions
    // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // http://www.w3.org/TR/css3-syntax/#characters
    characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        // Loosely modeled on CSS identifier characters
    // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
    // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    identifier = characterEncoding.replace("w", "w#"),
        // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
    operators = "([*^$|!~]?=)",
        attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
        // Prefer arguments quoted,
    //   then not containing pseudos/brackets,
    //   then attribute selectors/non-parenthetical expressions,
    //   then anything else
    // These preferences are here to reduce the number of selectors
    //   needing tokenize in the PSEUDO preFilter
    pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + characterEncoding + ")"),
      "CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
      "NAME": new RegExp("^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]"),
      "TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rsibling = /[\x20\t\r\n\f]*[+~]/,
        rnative = /^[^{]+\{\s*\[native code/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rescape = /'|\\/g,
        rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        funescape = function funescape(_, escaped) {
      var high = "0x" + escaped - 0x10000; // NaN means non-codepoint

      return high !== high ? escaped : // BMP codepoint
      high < 0 ? String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
      String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    }; // Use a stripped-down slice if we can't use a native one


    try {
      slice.call(preferredDoc.documentElement.childNodes, 0)[0].nodeType;
    } catch (e) {
      slice = function slice(i) {
        var elem,
            results = [];

        while (elem = this[i++]) {
          results.push(elem);
        }

        return results;
      };
    }
    /**
     * For feature detection
     * @param {Function} fn The function to test for native support
     */


    function isNative(fn) {
      return rnative.test(fn + "");
    }
    /**
     * Create key-value caches of limited size
     * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var _cache,
          keys = [];

      return _cache = function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key += " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete _cache[keys.shift()];
        }

        return _cache[key] = value;
      };
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created div and expects a boolean result
     */


    function assert(fn) {
      var div = document.createElement("div");

      try {
        return fn(div);
      } catch (e) {
        return false;
      } finally {
        // release memory in IE
        div = null;
      }
    }

    function Sizzle(selector, context, results, seed) {
      var match, elem, m, nodeType, // QSA vars
      i, groups, old, nid, newContext, newSelector;

      if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
        setDocument(context);
      }

      context = context || document;
      results = results || [];

      if (!selector || typeof selector !== "string") {
        return results;
      }

      if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
        return [];
      }

      if (!documentIsXML && !seed) {
        // Shortcuts
        if (match = rquickExpr.exec(selector)) {
          // Speed-up: Sizzle("#ID")
          if (m = match[1]) {
            if (nodeType === 9) {
              elem = context.getElementById(m); // Check parentNode to catch when Blackberry 4.6 returns
              // nodes that are no longer in the document #6963

              if (elem && elem.parentNode) {
                // Handle the case where IE, Opera, and Webkit return items
                // by name instead of ID
                if (elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } else {
                return results;
              }
            } else {
              // Context is not a document
              if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                results.push(elem);
                return results;
              }
            } // Speed-up: Sizzle("TAG")

          } else if (match[2]) {
            push.apply(results, slice.call(context.getElementsByTagName(selector), 0));
            return results; // Speed-up: Sizzle(".CLASS")
          } else if ((m = match[3]) && support.getByClassName && context.getElementsByClassName) {
            push.apply(results, slice.call(context.getElementsByClassName(m), 0));
            return results;
          }
        } // QSA path


        if (support.qsa && !rbuggyQSA.test(selector)) {
          old = true;
          nid = expando;
          newContext = context;
          newSelector = nodeType === 9 && selector; // qSA works strangely on Element-rooted queries
          // We can work around this by specifying an extra ID on the root
          // and working up from there (Thanks to Andrew Dupont for the technique)
          // IE 8 doesn't work on object elements

          if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
            groups = tokenize(selector);

            if (old = context.getAttribute("id")) {
              nid = old.replace(rescape, "\\$&");
            } else {
              context.setAttribute("id", nid);
            }

            nid = "[id='" + nid + "'] ";
            i = groups.length;

            while (i--) {
              groups[i] = nid + toSelector(groups[i]);
            }

            newContext = rsibling.test(selector) && context.parentNode || context;
            newSelector = groups.join(",");
          }

          if (newSelector) {
            try {
              push.apply(results, slice.call(newContext.querySelectorAll(newSelector), 0));
              return results;
            } catch (qsaError) {} finally {
              if (!old) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Detect xml
     * @param {Element|Object} elem An element or a document
     */


    isXML = Sizzle.isXML = function (elem) {
      // documentElement is verified for cases where it doesn't yet exist
      // (such as loading iframes in IE - #4833)
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var doc = node ? node.ownerDocument || node : preferredDoc; // If no document and documentElement is available, return

      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Set our document


      document = doc;
      docElem = doc.documentElement; // Support tests

      documentIsXML = isXML(doc); // Check if getElementsByTagName("*") returns only elements

      support.tagNameNoComments = assert(function (div) {
        div.appendChild(doc.createComment(""));
        return !div.getElementsByTagName("*").length;
      }); // Check if attributes should be retrieved by attribute nodes

      support.attributes = assert(function (div) {
        div.innerHTML = "<select></select>";

        var type = _typeof(div.lastChild.getAttribute("multiple")); // IE8 returns a string for some attributes even when not present


        return type !== "boolean" && type !== "string";
      }); // Check if getElementsByClassName can be trusted

      support.getByClassName = assert(function (div) {
        // Opera can't find a second classname (in 9.6)
        div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";

        if (!div.getElementsByClassName || !div.getElementsByClassName("e").length) {
          return false;
        } // Safari 3.2 caches class attributes and doesn't catch changes


        div.lastChild.className = "e";
        return div.getElementsByClassName("e").length === 2;
      }); // Check if getElementById returns elements by name
      // Check if getElementsByName privileges form controls or returns elements by ID

      support.getByName = assert(function (div) {
        // Inject content
        div.id = expando + 0;
        div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
        docElem.insertBefore(div, docElem.firstChild); // Test

        var pass = doc.getElementsByName && // buggy browsers will return fewer than the correct 2
        doc.getElementsByName(expando).length === 2 + // buggy browsers will return more than the correct 0
        doc.getElementsByName(expando + 0).length;
        support.getIdNotName = !doc.getElementById(expando); // Cleanup

        docElem.removeChild(div);
        return pass;
      }); // IE6/7 return modified attributes

      Expr.attrHandle = assert(function (div) {
        div.innerHTML = "<a href='#'></a>";
        return div.firstChild && _typeof(div.firstChild.getAttribute) !== strundefined && div.firstChild.getAttribute("href") === "#";
      }) ? {} : {
        "href": function href(elem) {
          return elem.getAttribute("href", 2);
        },
        "type": function type(elem) {
          return elem.getAttribute("type");
        }
      }; // ID find and filter

      if (support.getIdNotName) {
        Expr.find["ID"] = function (id, context) {
          if (_typeof(context.getElementById) !== strundefined && !documentIsXML) {
            var m = context.getElementById(id); // Check parentNode to catch when Blackberry 4.6 returns
            // nodes that are no longer in the document #6963

            return m && m.parentNode ? [m] : [];
          }
        };

        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };
      } else {
        Expr.find["ID"] = function (id, context) {
          if (_typeof(context.getElementById) !== strundefined && !documentIsXML) {
            var m = context.getElementById(id);
            return m ? m.id === id || _typeof(m.getAttributeNode) !== strundefined && m.getAttributeNode("id").value === id ? [m] : undefined : [];
          }
        };

        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = _typeof(elem.getAttributeNode) !== strundefined && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        };
      } // Tag


      Expr.find["TAG"] = support.tagNameNoComments ? function (tag, context) {
        if (_typeof(context.getElementsByTagName) !== strundefined) {
          return context.getElementsByTagName(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Name

      Expr.find["NAME"] = support.getByName && function (tag, context) {
        if (_typeof(context.getElementsByName) !== strundefined) {
          return context.getElementsByName(name);
        }
      }; // Class


      Expr.find["CLASS"] = support.getByClassName && function (className, context) {
        if (_typeof(context.getElementsByClassName) !== strundefined && !documentIsXML) {
          return context.getElementsByClassName(className);
        }
      }; // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21),
      // no need to also add to buggyMatches since matches checks buggyQSA
      // A support test would require too much code (would include document ready)

      rbuggyQSA = [":focus"];

      if (support.qsa = isNative(doc.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (div) {
          // Select is set to empty string on purpose
          // This is to test IE's treatment of not explictly
          // setting a boolean content attribute,
          // since its presence should be enough
          // http://bugs.jquery.com/ticket/12359
          div.innerHTML = "<select><option selected=''></option></select>"; // IE8 - Some boolean attributes are not treated correctly

          if (!div.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!div.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
        });
        assert(function (div) {
          // Opera 10-12/IE8 - ^= $= *= and empty values
          // Should not select anything
          div.innerHTML = "<input type='hidden' i=''/>";

          if (div.querySelectorAll("[i^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:\"\"|'')");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (!div.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Opera 10-11 does not throw on post-comma invalid pseudos


          div.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = isNative(matches = docElem.matchesSelector || docElem.mozMatchesSelector || docElem.webkitMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (div) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(div, "div"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(div, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = new RegExp(rbuggyMatches.join("|")); // Element contains another
      // Purposefully does not implement inclusive descendent
      // As in, an element does not contain itself

      contains = isNative(docElem.contains) || docElem.compareDocumentPosition ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      }; // Document order sorting

      sortOrder = docElem.compareDocumentPosition ? function (a, b) {
        var compare;

        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        if (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b)) {
          if (compare & 1 || a.parentNode && a.parentNode.nodeType === 11) {
            if (a === doc || contains(preferredDoc, a)) {
              return -1;
            }

            if (b === doc || contains(preferredDoc, b)) {
              return 1;
            }

            return 0;
          }

          return compare & 4 ? -1 : 1;
        }

        return a.compareDocumentPosition ? -1 : 1;
      } : function (a, b) {
        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Exit early if the nodes are identical

        if (a === b) {
          hasDuplicate = true;
          return 0; // Parentless nodes are either documents or disconnected
        } else if (!aup || !bup) {
          return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      }; // Always assume the presence of duplicates if sort doesn't
      // pass them to our comparison function (as in Google Chrome).

      hasDuplicate = false;
      [0, 0].sort(sortOrder);
      support.detectDuplicates = hasDuplicate;
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      } // Make sure that attribute selectors are quoted


      expr = expr.replace(rattributeQuotes, "='$1']"); // rbuggyQSA always contains :focus, so no need for an existence check

      if (support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr)) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      var val; // Set document vars if needed

      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      if (!documentIsXML) {
        name = name.toLowerCase();
      }

      if (val = Expr.attrHandle[name]) {
        return val(elem);
      }

      if (documentIsXML || support.attributes) {
        return elem.getAttribute(name);
      }

      return ((val = elem.getAttributeNode(name)) || elem.getAttribute(name)) && elem[name] === true ? name : val && val.specified ? val.value : null;
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    }; // Document sorting and removing duplicates


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          i = 1,
          j = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      results.sort(sortOrder);

      if (hasDuplicate) {
        for (; elem = results[i]; i++) {
          if (elem === results[i - 1]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }

      return results;
    };

    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE); // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    } // Returns a function to use in pseudos for input types


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    } // Returns a function to use in pseudos for buttons


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    } // Returns a function to use in pseudos for positionals


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        for (; node = elem[i]; i++) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (see #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[5] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[4]) {
            match[2] = match[4]; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeName) {
          if (nodeName === "*") {
            return function () {
              return true;
            };
          }

          nodeName = nodeName.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(elem.className || _typeof(elem.getAttribute) !== strundefined && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function CHILD(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache,
                outerCache,
                node,
                diff,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                outerCache = parent[expando] || (parent[expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = cache[0] === dirruns && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    outerCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                } // Use previously-cached element index if available

              } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                diff = cache[1]; // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
              } else {
                // Use the same loop as above to seek `elem` from the start
                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                  if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                    // Cache the index of each encountered element
                    if (useCache) {
                      (node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
                    }

                    if (node === elem) {
                      break;
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf.call(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          return function (elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifider
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsXML ? elem.getAttribute("xml:lang") || elem.getAttribute("lang") : elem.lang) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": function enabled(elem) {
          return elem.disabled === false;
        },
        "disabled": function disabled(elem) {
          return elem.disabled === true;
        },
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
          //   not comment, processing instructions, or others
          // Thanks to Diego Perini for the nodeName shortcut
          //   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr; // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
          // use getAttribute instead to test this case

          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    }; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }

    function tokenize(selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    }

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          checkNonElements = base && dir === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var data,
            cache,
            outerCache,
            dirkey = dirruns + " " + doneName; // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {});

              if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                if ((data = cache[1]) === true || data === cachedruns) {
                  return data === true;
                }
              } else {
                cache = outerCache[dir] = [dirkey];
                cache[1] = matcher(elem, context, xml) || cachedruns;

                if (cache[1] === true) {
                  return true;
                }
              }
            }
          }
        }
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf.call(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1)).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      // A counter to specify which element is currently being matched
      var matcherCachedRuns = 0,
          bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, expandContext) {
        var elem,
            j,
            matcher,
            setMatched = [],
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            outermost = expandContext != null,
            contextBackup = outermostContext,
            // We must always have either seed elements or context
        elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1;

        if (outermost) {
          outermostContext = context !== document && context;
          cachedruns = matcherCachedRuns;
        } // Add elements passing elementMatchers directly to results
        // Keep `i` a string if there are no elements so `matchedCount` will be "00" below


        for (; (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0;

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
              cachedruns = ++matcherCachedRuns;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // Apply set filters to unmatched elements


        matchedCount += i;

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, group
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!group) {
          group = tokenize(selector);
        }

        i = group.length;

        while (i--) {
          cached = matcherFromTokens(group[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
      }

      return cached;
    };

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function select(selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          match = tokenize(selector);

      if (!seed) {
        // Try to minimize operations if there is only one group
        if (match.length === 1) {
          // Take a shortcut and set the context if the root selector is an ID
          tokens = match[0] = match[0].slice(0);

          if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && !documentIsXML && Expr.relative[tokens[1].type]) {
            context = Expr.find["ID"](token.matches[0].replace(runescape, funescape), context)[0];

            if (!context) {
              return results;
            }

            selector = selector.slice(tokens.shift().value.length);
          } // Fetch a seed set for right-to-left matching


          i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

          while (i--) {
            token = tokens[i]; // Abort if we hit a combinator

            if (Expr.relative[type = token.type]) {
              break;
            }

            if (find = Expr.find[type]) {
              // Search, expanding context for leading sibling combinators
              if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {
                // If seed is empty or no tokens remain, we can return early
                tokens.splice(i, 1);
                selector = seed.length && toSelector(tokens);

                if (!selector) {
                  push.apply(results, slice.call(seed, 0));
                  return results;
                }

                break;
              }
            }
          }
        }
      } // Compile and execute a filtering function
      // Provide `match` to avoid retokenization if we modified the selector above


      compile(selector, match)(seed, context, documentIsXML, results, rsibling.test(selector));
      return results;
    } // Deprecated


    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Easy API for creating new setFilters

    function setFilters() {}

    Expr.filters = setFilters.prototype = Expr.pseudos;
    Expr.setFilters = new setFilters(); // Initialize with the default document

    setDocument(); // Override sizzle attribute retrieval

    Sizzle.attr = jQuery.attr;
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
  })(window);

  var runtil = /Until$/,
      rparentsprev = /^(?:parents|prev(?:Until|All))/,
      isSimple = /^.[^:#\[\.,]*$/,
      rneedsContext = jQuery.expr.match.needsContext,
      // methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          self,
          len = this.length;

      if (typeof selector !== "string") {
        self = this;
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = [];

      for (i = 0; i < len; i++) {
        jQuery.find(selector, this[i], ret);
      } // Needed because $( selector, context ) becomes $( context ).find( selector )


      ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
      ret.selector = (this.selector ? this.selector + " " : "") + selector;
      return ret;
    },
    has: function has(target) {
      var i,
          targets = jQuery(target, this),
          len = targets.length;
      return this.filter(function () {
        for (i = 0; i < len; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector, false));
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector, true));
    },
    is: function is(selector) {
      return !!selector && (typeof selector === "string" ? // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      rneedsContext.test(selector) ? jQuery(selector, this.context).index(this[0]) >= 0 : jQuery.filter(selector, this).length > 0 : this.filter(selector).length > 0);
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          ret = [],
          pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

      for (; i < l; i++) {
        cur = this[i];

        while (cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11) {
          if (pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors)) {
            ret.push(cur);
            break;
          }

          cur = cur.parentNode;
        }
      }

      return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
    },
    // Determine the position of an element within
    // the matched set of elements
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // index in selector


      if (typeof elem === "string") {
        return jQuery.inArray(this[0], jQuery(elem));
      } // Locate the position of the desired element


      return jQuery.inArray( // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem, this);
    },
    add: function add(selector, context) {
      var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
          all = jQuery.merge(this.get(), set);
      return this.pushStack(jQuery.unique(all));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  jQuery.fn.andSelf = jQuery.fn.addBack;

  function sibling(cur, dir) {
    do {
      cur = cur[dir];
    } while (cur && cur.nodeType !== 1);

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return jQuery.dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, i, until) {
      return jQuery.dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return jQuery.dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return jQuery.dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, i, until) {
      return jQuery.dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, i, until) {
      return jQuery.dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return jQuery.sibling(elem.firstChild);
    },
    contents: function contents(elem) {
      return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var ret = jQuery.map(this, fn, until);

      if (!runtil.test(name)) {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
      }

      ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;

      if (this.length > 1 && rparentsprev.test(name)) {
        ret = ret.reverse();
      }

      return this.pushStack(ret);
    };
  });
  jQuery.extend({
    filter: function filter(expr, elems, not) {
      if (not) {
        expr = ":not(" + expr + ")";
      }

      return elems.length === 1 ? jQuery.find.matchesSelector(elems[0], expr) ? [elems[0]] : [] : jQuery.find.matches(expr, elems);
    },
    dir: function dir(elem, _dir, until) {
      var matched = [],
          cur = elem[_dir];

      while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
        if (cur.nodeType === 1) {
          matched.push(cur);
        }

        cur = cur[_dir];
      }

      return matched;
    },
    sibling: function sibling(n, elem) {
      var r = [];

      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
          r.push(n);
        }
      }

      return r;
    }
  }); // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, keep) {
    // Can't pass null or undefined to indexOf in Firefox 4
    // Set to 0 to skip string check
    qualifier = qualifier || 0;

    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        var retVal = !!qualifier.call(elem, i, elem);
        return retVal === keep;
      });
    } else if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier === keep;
      });
    } else if (typeof qualifier === "string") {
      var filtered = jQuery.grep(elements, function (elem) {
        return elem.nodeType === 1;
      });

      if (isSimple.test(qualifier)) {
        return jQuery.filter(qualifier, filtered, !keep);
      } else {
        qualifier = jQuery.filter(qualifier, filtered);
      }
    }

    return jQuery.grep(elements, function (elem) {
      return jQuery.inArray(elem, qualifier) >= 0 === keep;
    });
  }

  function createSafeFragment(document) {
    var list = nodeNames.split("|"),
        safeFrag = document.createDocumentFragment();

    if (safeFrag.createElement) {
      while (list.length) {
        safeFrag.createElement(list.pop());
      }
    }

    return safeFrag;
  }

  var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
      rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
      rleadingWhitespace = /^\s+/,
      rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      rtagName = /<([\w:]+)/,
      rtbody = /<tbody/i,
      rhtml = /<|&#?\w+;/,
      rnoInnerhtml = /<(?:script|style|link)/i,
      manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptType = /^$|\/(?:java|ecma)script/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      // We have to close these tags to support XHTML (#13200)
  wrapMap = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
    // unless wrapped in a div with non-breaking characters in front of it.
    _default: jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  },
      safeFragment = createSafeFragment(document),
      fragmentDiv = safeFragment.appendChild(document.createElement("div"));
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  jQuery.fn.extend({
    text: function text(value) {
      return jQuery.access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
      }, null, value, arguments.length);
    },
    wrapAll: function wrapAll(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapAll(html.call(this, i));
        });
      }

      if (this[0]) {
        // The elements to wrap the target around
        var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstChild && elem.firstChild.nodeType === 1) {
            elem = elem.firstChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    },
    append: function append() {
      return this.domManip(arguments, true, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          this.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, true, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          this.insertBefore(elem, this.firstChild);
        }
      });
    },
    before: function before() {
      return this.domManip(arguments, false, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return this.domManip(arguments, false, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    // keepData is for internal use only--do not document
    remove: function remove(selector, keepData) {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (!selector || jQuery.filter(selector, [elem]).length > 0) {
          if (!keepData && elem.nodeType === 1) {
            jQuery.cleanData(getAll(elem));
          }

          if (elem.parentNode) {
            if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
              setGlobalEval(getAll(elem, "script"));
            }

            elem.parentNode.removeChild(elem);
          }
        }
      }

      return this;
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        // Remove element nodes and prevent memory leaks
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
        } // Remove any remaining nodes


        while (elem.firstChild) {
          elem.removeChild(elem.firstChild);
        } // If this is a select, ensure that it displays empty (#12336)
        // Support: IE<9


        if (elem.options && jQuery.nodeName(elem, "select")) {
          elem.options.length = 0;
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return jQuery.access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined) {
          return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = value.replace(rxhtmlTag, "<$1></$2>");

          try {
            for (; i < l; i++) {
              // Remove element nodes and prevent memory leaks
              elem = this[i] || {};

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith(value) {
      var isFunc = jQuery.isFunction(value); // Make sure that the elements are removed from the DOM before they are inserted
      // this can help fix replacing a parent with child elements

      if (!isFunc && typeof value !== "string") {
        value = jQuery(value).not(this).detach();
      }

      return this.domManip([value], true, function (elem) {
        var next = this.nextSibling,
            parent = this.parentNode;

        if (parent) {
          jQuery(this).remove();
          parent.insertBefore(elem, next);
        }
      });
    },
    detach: function detach(selector) {
      return this.remove(selector, true);
    },
    domManip: function domManip(args, table, callback) {
      // Flatten any nested arrays
      args = core_concat.apply([], args);
      var first,
          node,
          hasScripts,
          scripts,
          doc,
          fragment,
          i = 0,
          l = this.length,
          set = this,
          iNoClone = l - 1,
          value = args[0],
          isFunction = jQuery.isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

      if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
        return this.each(function (index) {
          var self = set.eq(index);

          if (isFunction) {
            args[0] = value.call(this, index, table ? self.html() : undefined);
          }

          self.domManip(args, table, callback);
        });
      }

      if (l) {
        fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
        first = fragment.firstChild;

        if (fragment.childNodes.length === 1) {
          fragment = first;
        }

        if (first) {
          table = table && jQuery.nodeName(first, "tr");
          scripts = jQuery.map(getAll(fragment, "script"), disableScript);
          hasScripts = scripts.length; // Use the original fragment for the last item instead of the first because it can end up
          // being emptied incorrectly in certain situations (#8070).

          for (; i < l; i++) {
            node = fragment;

            if (i !== iNoClone) {
              node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

              if (hasScripts) {
                jQuery.merge(scripts, getAll(node, "script"));
              }
            }

            callback.call(table && jQuery.nodeName(this[i], "table") ? findOrAppend(this[i], "tbody") : this[i], node, i);
          }

          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

            jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

            for (i = 0; i < hasScripts; i++) {
              node = scripts[i];

              if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                if (node.src) {
                  // Hope ajax is available...
                  jQuery.ajax({
                    url: node.src,
                    type: "GET",
                    dataType: "script",
                    async: false,
                    global: false,
                    "throws": true
                  });
                } else {
                  jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                }
              }
            }
          } // Fix #11809: Avoid leaking memory


          fragment = first = null;
        }
      }

      return this;
    }
  });

  function findOrAppend(elem, tag) {
    return elem.getElementsByTagName(tag)[0] || elem.appendChild(elem.ownerDocument.createElement(tag));
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    var attr = elem.getAttributeNode("type");
    elem.type = (attr && attr.specified) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);

    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var elem,
        i = 0;

    for (; (elem = elems[i]) != null; i++) {
      jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
    }
  }

  function cloneCopyEvent(src, dest) {
    if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
      return;
    }

    var type,
        i,
        l,
        oldData = jQuery._data(src),
        curData = jQuery._data(dest, oldData),
        events = oldData.events;

    if (events) {
      delete curData.handle;
      curData.events = {};

      for (type in events) {
        for (i = 0, l = events[type].length; i < l; i++) {
          jQuery.event.add(dest, type, events[type][i]);
        }
      }
    } // make the cloned public data object a copy from the original


    if (curData.data) {
      curData.data = jQuery.extend({}, curData.data);
    }
  }

  function fixCloneNodeIssues(src, dest) {
    var nodeName, e, data; // We do not need to do anything for non-Elements

    if (dest.nodeType !== 1) {
      return;
    }

    nodeName = dest.nodeName.toLowerCase(); // IE6-8 copies events bound via attachEvent when using cloneNode.

    if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
      data = jQuery._data(dest);

      for (e in data.events) {
        jQuery.removeEvent(dest, e, data.handle);
      } // Event data gets referenced instead of copied if the expando gets copied too


      dest.removeAttribute(jQuery.expando);
    } // IE blanks contents when cloning scripts, and tries to evaluate newly-set text


    if (nodeName === "script" && dest.text !== src.text) {
      disableScript(dest).text = src.text;
      restoreScript(dest); // IE6-10 improperly clones children of object elements using classid.
      // IE10 throws NoModificationAllowedError if parent is null, #12132.
    } else if (nodeName === "object") {
      if (dest.parentNode) {
        dest.outerHTML = src.outerHTML;
      } // This path appears unavoidable for IE9. When cloning an object
      // element in IE9, the outerHTML strategy above is not sufficient.
      // If the src has innerHTML and the destination does not,
      // copy the src.innerHTML into the dest.innerHTML. #10324


      if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
        dest.innerHTML = src.innerHTML;
      }
    } else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
      // IE6-8 fails to persist the checked state of a cloned checkbox
      // or radio button. Worse, IE6-7 fail to give the cloned element
      // a checked appearance if the defaultChecked value isn't also set
      dest.defaultChecked = dest.checked = src.checked; // IE6-7 get confused and end up setting the value of a cloned
      // checkbox/radio button to an empty string instead of "on"

      if (dest.value !== src.value) {
        dest.value = src.value;
      } // IE6-8 fails to return the selected option to the default selected
      // state when cloning options

    } else if (nodeName === "option") {
      dest.defaultSelected = dest.selected = src.defaultSelected; // IE6-8 fails to set the defaultValue to the correct value when
      // cloning other types of input fields
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          i = 0,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()

        core_push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });

  function getAll(context, tag) {
    var elems,
        elem,
        i = 0,
        found = _typeof(context.getElementsByTagName) !== core_strundefined ? context.getElementsByTagName(tag || "*") : _typeof(context.querySelectorAll) !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined;

    if (!found) {
      for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
        if (!tag || jQuery.nodeName(elem, tag)) {
          found.push(elem);
        } else {
          jQuery.merge(found, getAll(elem, tag));
        }
      }
    }

    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
  } // Used in buildFragment, fixes the defaultChecked property


  function fixDefaultChecked(elem) {
    if (manipulation_rcheckableType.test(elem.type)) {
      elem.defaultChecked = elem.checked;
    }
  }

  jQuery.extend({
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var destElements,
          node,
          clone,
          i,
          srcElements,
          inPage = jQuery.contains(elem.ownerDocument, elem);

      if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
        clone = elem.cloneNode(true); // IE<=8 does not properly clone detached, unknown element nodes
      } else {
        fragmentDiv.innerHTML = elem.outerHTML;
        fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
      }

      if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem); // Fix all IE cloning issues

        for (i = 0; (node = srcElements[i]) != null; ++i) {
          // Ensure that the destination node is not null; Fixes #9587
          if (destElements[i]) {
            fixCloneNodeIssues(node, destElements[i]);
          }
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0; (node = srcElements[i]) != null; i++) {
            cloneCopyEvent(node, destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }

      destElements = srcElements = node = null; // Return the cloned set

      return clone;
    },
    buildFragment: function buildFragment(elems, context, scripts, selection) {
      var j,
          elem,
          contains,
          tmp,
          tag,
          tbody,
          wrap,
          l = elems.length,
          // Ensure a safe fragment
      safe = createSafeFragment(context),
          nodes = [],
          i = 0;

      for (; i < l; i++) {
        elem = elems[i];

        if (elem || elem === 0) {
          // Add nodes directly
          if (jQuery.type(elem) === "object") {
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
          } else {
            tmp = tmp || safe.appendChild(context.createElement("div")); // Deserialize a standard representation

            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;
            tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2]; // Descend through wrappers to the right content

            j = wrap[0];

            while (j--) {
              tmp = tmp.lastChild;
            } // Manually add leading whitespace removed by IE


            if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
              nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
            } // Remove IE's autoinserted <tbody> from table fragments


            if (!jQuery.support.tbody) {
              // String was a <table>, *may* have spurious <tbody>
              elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : // String was a bare <thead> or <tfoot>
              wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
              j = elem && elem.childNodes.length;

              while (j--) {
                if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
                  elem.removeChild(tbody);
                }
              }
            }

            jQuery.merge(nodes, tmp.childNodes); // Fix #12392 for WebKit and IE > 9

            tmp.textContent = ""; // Fix #12392 for oldIE

            while (tmp.firstChild) {
              tmp.removeChild(tmp.firstChild);
            } // Remember the top-level container for proper cleanup


            tmp = safe.lastChild;
          }
        }
      } // Fix #11356: Clear elements from fragment


      if (tmp) {
        safe.removeChild(tmp);
      } // Reset defaultChecked for any radios and checkboxes
      // about to be appended to the DOM in IE 6/7 (#8060)


      if (!jQuery.support.appendChecked) {
        jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
      }

      i = 0;

      while (elem = nodes[i++]) {
        // #4087 - If origin and destination elements are the same, and this is
        // that element, do not do anything
        if (selection && jQuery.inArray(elem, selection) !== -1) {
          continue;
        }

        contains = jQuery.contains(elem.ownerDocument, elem); // Append to fragment

        tmp = getAll(safe.appendChild(elem), "script"); // Preserve script evaluation history

        if (contains) {
          setGlobalEval(tmp);
        } // Capture executables


        if (scripts) {
          j = 0;

          while (elem = tmp[j++]) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }

      tmp = null;
      return safe;
    },
    cleanData: function cleanData(elems,
    /* internal */
    acceptData) {
      var elem,
          type,
          id,
          data,
          i = 0,
          internalKey = jQuery.expando,
          cache = jQuery.cache,
          deleteExpando = jQuery.support.deleteExpando,
          special = jQuery.event.special;

      for (; (elem = elems[i]) != null; i++) {
        if (acceptData || jQuery.acceptData(elem)) {
          id = elem[internalKey];
          data = id && cache[id];

          if (data) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Remove cache only if it was not already removed by jQuery.event.remove


            if (cache[id]) {
              delete cache[id]; // IE does not allow us to delete expando properties from nodes,
              // nor does it have a removeAttribute function on Document nodes;
              // we must handle all of these cases

              if (deleteExpando) {
                delete elem[internalKey];
              } else if (_typeof(elem.removeAttribute) !== core_strundefined) {
                elem.removeAttribute(internalKey);
              } else {
                elem[internalKey] = null;
              }

              core_deletedIds.push(id);
            }
          }
        }
      }
    }
  });
  var iframe,
      getStyles,
      curCSS,
      ralpha = /alpha\([^)]*\)/i,
      ropacity = /opacity\s*=\s*([^)]*)/,
      rposition = /^(top|right|bottom|left)$/,
      // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
  // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rmargin = /^margin/,
      rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
      rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
      rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"),
      elemdisplay = {
    BODY: "block"
  },
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: 0,
    fontWeight: 400
  },
      cssExpand = ["Top", "Right", "Bottom", "Left"],
      cssPrefixes = ["Webkit", "O", "Moz", "ms"]; // return a css property mapped to a potentially vendor prefixed property

  function vendorPropName(style, name) {
    // shortcut for names that are not vendor prefixed
    if (name in style) {
      return name;
    } // check for vendor prefixed names


    var capName = name.charAt(0).toUpperCase() + name.slice(1),
        origName = name,
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in style) {
        return name;
      }
    }

    return origName;
  }

  function isHidden(elem, el) {
    // isHidden might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem;
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  }

  function showHide(elements, show) {
    var display,
        elem,
        hidden,
        values = [],
        index = 0,
        length = elements.length;

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      values[index] = jQuery._data(elem, "olddisplay");
      display = elem.style.display;

      if (show) {
        // Reset the inline display of this element to learn if it is
        // being hidden by cascaded rules or not
        if (!values[index] && display === "none") {
          elem.style.display = "";
        } // Set elements which have been overridden with display: none
        // in a stylesheet to whatever the default browser style is
        // for such an element


        if (elem.style.display === "" && isHidden(elem)) {
          values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
        }
      } else {
        if (!values[index]) {
          hidden = isHidden(elem);

          if (display && display !== "none" || !hidden) {
            jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
          }
        }
      }
    } // Set the display of most of the elements in a second loop
    // to avoid the constant reflow


    for (index = 0; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      if (!show || elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = show ? values[index] || "" : "none";
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    css: function css(name, value) {
      return jQuery.access(this, function (elem, name, value) {
        var len,
            styles,
            map = {},
            i = 0;

        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      var bool = typeof state === "boolean";
      return this.each(function () {
        if (bool ? state : isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Exclude the following css properties to add px
    cssNumber: {
      "columnCount": true,
      "fillOpacity": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {
      // normalize float css property
      "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = jQuery.camelCase(name),
          style = elem.style;
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName)); // gets hook for the prefixed version
      // followed by the unprefixed version

      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // convert relative number strings (+= or -=) to relative numbers. #7345

        if (type === "string" && (ret = rrelNum.exec(value))) {
          value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name)); // Fixes bug #9237

          type = "number";
        } // Make sure that NaN and null values aren't set. See: #7116


        if (value == null || type === "number" && isNaN(value)) {
          return;
        } // If a number was passed in, add 'px' to the (except for certain CSS properties)


        if (type === "number" && !jQuery.cssNumber[origName]) {
          value += "px";
        } // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
        // but it would mean to define eight (for every problematic property) identical functions


        if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
          // Fixes bug #5509
          try {
            style[name] = value;
          } catch (e) {}
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var num,
          val,
          hooks,
          origName = jQuery.camelCase(name); // Make sure that we're working with the right name

      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName)); // gets hook for the prefixed version
      // followed by the unprefixed version

      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } //convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Return, converting to number if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
      }

      return val;
    },
    // A method for quickly swapping in/out CSS properties to get correct calculations
    swap: function swap(elem, options, callback, args) {
      var ret,
          name,
          old = {}; // Remember the old values, and insert the new ones

      for (name in options) {
        old[name] = elem.style[name];
        elem.style[name] = options[name];
      }

      ret = callback.apply(elem, args || []); // Revert the old values

      for (name in options) {
        elem.style[name] = old[name];
      }

      return ret;
    }
  }); // NOTE: we've included the "window" in window.getComputedStyle
  // because jsdom on node.js will break without it.

  if (window.getComputedStyle) {
    getStyles = function getStyles(elem) {
      return window.getComputedStyle(elem, null);
    };

    curCSS = function curCSS(elem, name, _computed) {
      var width,
          minWidth,
          maxWidth,
          computed = _computed || getStyles(elem),
          // getPropertyValue is only needed for .css('filter') in IE9, see #12537
      ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined,
          style = elem.style;

      if (computed) {
        if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
          ret = jQuery.style(elem, name);
        } // A tribute to the "awesome hack by Dean Edwards"
        // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
        // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
        // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values


        if (rnumnonpx.test(ret) && rmargin.test(name)) {
          // Remember the original values
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth; // Put in the new values to get a computed value out

          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width; // Revert the changed values

          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }

      return ret;
    };
  } else if (document.documentElement.currentStyle) {
    getStyles = function getStyles(elem) {
      return elem.currentStyle;
    };

    curCSS = function curCSS(elem, name, _computed) {
      var left,
          rs,
          rsLeft,
          computed = _computed || getStyles(elem),
          ret = computed ? computed[name] : undefined,
          style = elem.style; // Avoid setting ret to empty string here
      // so we don't default to auto


      if (ret == null && style && style[name]) {
        ret = style[name];
      } // From the awesome hack by Dean Edwards
      // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
      // If we're not dealing with a regular pixel number
      // but a number that has a weird ending, we need to convert it to pixels
      // but not position css attributes, as those are proportional to the parent element instead
      // and we can't measure the parent instead because it might trigger a "stacking dolls" problem


      if (rnumnonpx.test(ret) && !rposition.test(name)) {
        // Remember the original values
        left = style.left;
        rs = elem.runtimeStyle;
        rsLeft = rs && rs.left; // Put in the new values to get a computed value out

        if (rsLeft) {
          rs.left = elem.currentStyle.left;
        }

        style.left = name === "fontSize" ? "1em" : ret;
        ret = style.pixelLeft + "px"; // Revert the changed values

        style.left = left;

        if (rsLeft) {
          rs.left = rsLeft;
        }
      }

      return ret === "" ? "auto" : ret;
    };
  }

  function setPositiveNumber(elem, value, subtract) {
    var matches = rnumsplit.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
  }

  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i = extra === (isBorderBox ? "border" : "content") ? // If we already have the right measurement, avoid augmentation
    4 : // Otherwise initialize for horizontal or vertical properties
    name === "width" ? 1 : 0,
        val = 0;

    for (; i < 4; i += 2) {
      // both box models exclude margin, so add it if we want it
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }

      if (isBorderBox) {
        // border-box includes padding, so remove it if we want content
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // at this point, extra isn't border nor margin, so remove border


        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        // at this point, extra isn't content, so add padding
        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // at this point, extra isn't content nor padding, so add border

        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }

    return val;
  }

  function getWidthOrHeight(elem, name, extra) {
    // Start with offset property, which is equivalent to the border-box value
    var valueIsBorderBox = true,
        val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
        styles = getStyles(elem),
        isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // some non-html elements return undefined for offsetWidth, so check for null/undefined
    // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
    // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668

    if (val <= 0 || val == null) {
      // Fall back to computed then uncomputed css if necessary
      val = curCSS(elem, name, styles);

      if (val < 0 || val == null) {
        val = elem.style[name];
      } // Computed unit is not pixels. Stop here and return.


      if (rnumnonpx.test(val)) {
        return val;
      } // we need the check for style in case a browser which returns unreliable values
      // for getComputedStyle silently falls back to the reliable elem.style


      valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]); // Normalize "", auto, and prepare for extra

      val = parseFloat(val) || 0;
    } // use the active box-sizing model to add/subtract irrelevant styles


    return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
  } // Try to determine the default display value of an element


  function css_defaultDisplay(nodeName) {
    var doc = document,
        display = elemdisplay[nodeName];

    if (!display) {
      display = actualDisplay(nodeName, doc); // If the simple way fails, read from inside an iframe

      if (display === "none" || !display) {
        // Use the already-created iframe if possible
        iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement); // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse

        doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
        doc.write("<!doctype html><html><body>");
        doc.close();
        display = actualDisplay(nodeName, doc);
        iframe.detach();
      } // Store the correct default display


      elemdisplay[nodeName] = display;
    }

    return display;
  } // Called ONLY from within css_defaultDisplay


  function actualDisplay(name, doc) {
    var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
        display = jQuery.css(elem[0], "display");
    elem.remove();
    return display;
  }

  jQuery.each(["height", "width"], function (i, name) {
    jQuery.cssHooks[name] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // certain elements can have dimension info if we invisibly show them
          // however, it must have a current display style that would benefit from this
          return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function set(elem, value, extra) {
        var styles = extra && getStyles(elem);
        return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
      }
    };
  });

  if (!jQuery.support.opacity) {
    jQuery.cssHooks.opacity = {
      get: function get(elem, computed) {
        // IE uses filters for opacity
        return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
      },
      set: function set(elem, value) {
        var style = elem.style,
            currentStyle = elem.currentStyle,
            opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
            filter = currentStyle && currentStyle.filter || style.filter || ""; // IE has trouble with opacity if it does not have layout
        // Force it by setting the zoom level

        style.zoom = 1; // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
        // if value === "", then remove inline opacity #12685

        if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
          // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
          // if "filter:" is present at all, clearType is disabled, we want to avoid this
          // style.removeAttribute is IE Only, but so apparently is this code path...
          style.removeAttribute("filter"); // if there is no filter style applied in a css rule or unset inline opacity, we are done

          if (value === "" || currentStyle && !currentStyle.filter) {
            return;
          }
        } // otherwise, set new filter values


        style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
      }
    };
  } // These hooks cannot be added until DOM ready because the support test
  // for it is not run until after DOM ready


  jQuery(function () {
    if (!jQuery.support.reliableMarginRight) {
      jQuery.cssHooks.marginRight = {
        get: function get(elem, computed) {
          if (computed) {
            // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
            // Work around by temporarily setting element display to inline-block
            return jQuery.swap(elem, {
              "display": "inline-block"
            }, curCSS, [elem, "marginRight"]);
          }
        }
      };
    } // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // getComputedStyle returns percent when specified for top/left/bottom/right
    // rather than make the css module depend on the offset module, we just check for it here


    if (!jQuery.support.pixelPosition && jQuery.fn.position) {
      jQuery.each(["top", "left"], function (i, prop) {
        jQuery.cssHooks[prop] = {
          get: function get(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop); // if curCSS returns percentage, fallback to offset

              return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
          }
        };
      });
    }
  });

  if (jQuery.expr && jQuery.expr.filters) {
    jQuery.expr.filters.hidden = function (elem) {
      // Support: Opera <= 12.12
      // Opera reports offsetWidths and offsetHeights less than zero on some elements
      return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
    };

    jQuery.expr.filters.visible = function (elem) {
      return !jQuery.expr.filters.hidden(elem);
    };
  } // These hooks are used by animate to expand properties


  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  var r20 = /%20/g,
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is(":disabled") so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = jQuery(this).val();
        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
          return {
            name: elem.name,
            value: val.replace(rCRLF, "\r\n")
          };
        }) : {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  }); //Serialize an array of form elements or a set of
  //key/values into a query string

  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, value) {
      // If value is a function, invoke it and return its value
      value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
    }; // Set traditional to true for jQuery <= 1.3.2 behavior.


    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    } // If an array was passed in, assume that it is an array of form elements.


    if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&").replace(r20, "+");
  };

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (jQuery.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  }

  jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });

  jQuery.fn.hover = function (fnOver, fnOut) {
    return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
  };

  var // Document location
  ajaxLocParts,
      ajaxLocation,
      ajax_nonce = jQuery.now(),
      ajax_rquery = /\?/,
      rhash = /#.*$/,
      rts = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
      // IE leaves an \r character at EOL
  // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      // Keep a copy of the old load method
  _load = jQuery.fn.load,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"); // #8138, IE may throw an exception when accessing
  // a field from window.location if document.domain has been set

  try {
    ajaxLocation = location.href;
  } catch (e) {
    // Use the href attribute of an A element
    // since IE will modify it given document.location
    ajaxLocation = document.createElement("a");
    ajaxLocation.href = "";
    ajaxLocation = ajaxLocation.href;
  } // Segment location into parts


  ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || []; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];

      if (jQuery.isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var deep,
        key,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }

  jQuery.fn.load = function (url, params, callback) {
    if (typeof url !== "string" && _load) {
      return _load.apply(this, arguments);
    }

    var selector,
        response,
        type,
        self = this,
        off = url.indexOf(" ");

    if (off >= 0) {
      selector = url.slice(off, url.length);
      url = url.slice(0, off);
    } // If it's a function


    if (jQuery.isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // if "type" variable is undefined, then "GET" method will be used
        type: type,
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText);
      }).complete(callback && function (jqXHR, status) {
        self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
      });
    }

    return this;
  }; // Attach a bunch of functions for handling common AJAX events


  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
  jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // shift arguments if data argument was omitted
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }

      return jQuery.ajax({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      });
    };
  });
  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ajaxLocation,
      type: "GET",
      isLocal: rlocalProtocol.test(ajaxLocParts[1]),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": window.String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": jQuery.parseJSON,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var // Cross-domain detection vars
      parts,
          // Loop variable
      i,
          // URL without anti-cache param
      cacheURL,
          // Response headers as string
      responseHeadersString,
          // timeout handle
      timeoutTimer,
          // To know if global events are to be dispatched
      fireGlobals,
          transport,
          // Response headers
      responseHeaders,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // The jqXHR state
      state = 0,
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (state === 2) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase()] = match[2];
              }
            }

            match = responseHeaders[key.toLowerCase()];
          }

          return match == null ? null : match;
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return state === 2 ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          var lname = name.toLowerCase();

          if (!state) {
            name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (!state) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (state < 2) {
              for (code in map) {
                // Lazy-add the new callback in a way that preserves old ones
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            } else {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR).complete = completeDeferred.add;
      jqXHR.success = jqXHR.done;
      jqXHR.error = jqXHR.fail; // Remove hash character (#7531: and string promotion)
      // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""]; // A cross-domain request is in order when we have a protocol:host:port mismatch

      if (s.crossDomain == null) {
        parts = rurl.exec(s.url.toLowerCase());
        s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443))));
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (state === 2) {
        return jqXHR;
      } // We can fire global events as of now if asked to


      fireGlobals = s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on

      cacheURL = s.url; // More options handling for requests with no content

      if (!s.hasContent) {
        // If data is available, append data to url
        if (s.data) {
          cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add anti-cache in url if needed


        if (s.cache === false) {
          s.url = rts.test(cacheURL) ? // If there is already a '_' parameter, set its value
          cacheURL.replace(rts, "$1_=" + ajax_nonce++) : // Otherwise add one to the end
          cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
        }
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      for (i in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        jqXHR[i](s[i]);
      } // Get transport


      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          state = 1;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Propagate exception as error if not done
          if (state < 2) {
            done(-1, e); // Simply rethrow otherwise
          } else {
            throw e;
          }
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Called once

        if (state === 2) {
          return;
        } // State is "done" now


        state = 2; // Clear timeout if it exists

        if (timeoutTimer) {
          clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // If successful, handle type chaining


        if (status >= 200 && status < 300 || status === 304) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204) {
            isSuccess = true;
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            isSuccess = true;
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            isSuccess = ajaxConvert(s, response);
            statusText = isSuccess.state;
            success = isSuccess.data;
            error = isSuccess.error;
            isSuccess = !error;
          }
        } else {
          // We extract error from statusText
          // then normalize statusText and status for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    }
  });
  /* Handles responses to an ajax request:
   * - sets all responseXXX fields accordingly
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */

  function ajaxHandleResponses(s, jqXHR, responses) {
    var firstDataType,
        ct,
        finalDataType,
        type,
        contents = s.contents,
        dataTypes = s.dataTypes,
        responseFields = s.responseFields; // Fill responseXXX fields

    for (type in responseFields) {
      if (type in responses) {
        jqXHR[responseFields[type]] = responses[type];
      }
    } // Remove auto dataType and get content-type in the process


    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  } // Chain conversions given the request and the original response


  function ajaxConvert(s, response) {
    var conv2,
        current,
        conv,
        tmp,
        converters = {},
        i = 0,
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(),
        prev = dataTypes[0]; // Apply the dataFilter if provided

    if (s.dataFilter) {
      response = s.dataFilter(response, s.dataType);
    } // Create converters map with lowercased keys


    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    } // Convert to each sequential dataType, tolerating list modification


    for (; current = dataTypes[++i];) {
      // There's only work to do if current dataType is non-auto
      if (current !== "*") {
        // Convert response if prev dataType is non-auto and differs from current
        if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.splice(i--, 0, current);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        } // Update prev for next iteration


        prev = current;
      }
    }

    return {
      state: "success",
      data: response
    };
  } // Install script dataType


  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and global

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
      s.global = false;
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain requests
    if (s.crossDomain) {
      var script,
          head = document.head || jQuery("head")[0] || document.documentElement;
      return {
        send: function send(_, callback) {
          script = document.createElement("script");
          script.async = true;

          if (s.scriptCharset) {
            script.charset = s.scriptCharset;
          }

          script.src = s.url; // Attach handlers for all browsers

          script.onload = script.onreadystatechange = function (_, isAbort) {
            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
              // Handle memory leak in IE
              script.onload = script.onreadystatechange = null; // Remove the script

              if (script.parentNode) {
                script.parentNode.removeChild(script);
              } // Dereference the script


              script = null; // Callback if not abort

              if (!isAbort) {
                callback(200, "success");
              }
            }
          }; // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
          // Use native DOM manipulation to avoid our domManip AJAX trickery


          head.insertBefore(script, head.firstChild);
        },
        abort: function abort() {
          if (script) {
            script.onload(undefined, true);
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // Restore preexisting value
        window[callbackName] = overwritten; // Save back as free

        if (s[callbackName]) {
          // make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  });

  var xhrCallbacks,
      xhrSupported,
      xhrId = 0,
      // #5280: Internet Explorer will keep connections alive if we don't abort on unload
  xhrOnUnloadAbort = window.ActiveXObject && function () {
    // Abort all pending requests
    var key;

    for (key in xhrCallbacks) {
      xhrCallbacks[key](undefined, true);
    }
  }; // Functions to create xhrs


  function createStandardXHR() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  }

  function createActiveXHR() {
    try {
      return new window.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  } // Create the request object
  // (This is still attached to ajaxSettings for backward compatibility)


  jQuery.ajaxSettings.xhr = window.ActiveXObject ?
  /* Microsoft failed to properly
   * implement the XMLHttpRequest in IE7 (can't request local files),
   * so we use the ActiveXObject when it is available
   * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
   * we need a fallback.
   */
  function () {
    return !this.isLocal && createStandardXHR() || createActiveXHR();
  } : // For all other browsers, use the standard XMLHttpRequest object
  createStandardXHR; // Determine support properties

  xhrSupported = jQuery.ajaxSettings.xhr();
  jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  xhrSupported = jQuery.support.ajax = !!xhrSupported; // Create transport if the browser can provide an xhr

  if (xhrSupported) {
    jQuery.ajaxTransport(function (s) {
      // Cross domain only allowed if supported through XMLHttpRequest
      if (!s.crossDomain || jQuery.support.cors) {
        var _callback;

        return {
          send: function send(headers, complete) {
            // Get a new xhr
            var handle,
                i,
                xhr = s.xhr(); // Open the socket
            // Passing null username, generates a login popup on Opera (#2865)

            if (s.username) {
              xhr.open(s.type, s.url, s.async, s.username, s.password);
            } else {
              xhr.open(s.type, s.url, s.async);
            } // Apply custom fields if provided


            if (s.xhrFields) {
              for (i in s.xhrFields) {
                xhr[i] = s.xhrFields[i];
              }
            } // Override mime type if needed


            if (s.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(s.mimeType);
            } // X-Requested-With header
            // For cross-domain requests, seeing as conditions for a preflight are
            // akin to a jigsaw puzzle, we simply never set it to be sure.
            // (it can always be set on a per-request basis or even using ajaxSetup)
            // For same-domain requests, won't change header if already provided.


            if (!s.crossDomain && !headers["X-Requested-With"]) {
              headers["X-Requested-With"] = "XMLHttpRequest";
            } // Need an extra try/catch for cross domain requests in Firefox 3


            try {
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
            } catch (err) {} // Do send the request
            // This may raise an exception which is actually
            // handled in jQuery.ajax (so no try/catch here)


            xhr.send(s.hasContent && s.data || null); // Listener

            _callback = function callback(_, isAbort) {
              var status, responseHeaders, statusText, responses; // Firefox throws exceptions when accessing properties
              // of an xhr when a network error occurred
              // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)

              try {
                // Was never called and is aborted or complete
                if (_callback && (isAbort || xhr.readyState === 4)) {
                  // Only called once
                  _callback = undefined; // Do not keep as active anymore

                  if (handle) {
                    xhr.onreadystatechange = jQuery.noop;

                    if (xhrOnUnloadAbort) {
                      delete xhrCallbacks[handle];
                    }
                  } // If it's an abort


                  if (isAbort) {
                    // Abort it manually if needed
                    if (xhr.readyState !== 4) {
                      xhr.abort();
                    }
                  } else {
                    responses = {};
                    status = xhr.status;
                    responseHeaders = xhr.getAllResponseHeaders(); // When requesting binary data, IE6-9 will throw an exception
                    // on any attempt to access responseText (#11426)

                    if (typeof xhr.responseText === "string") {
                      responses.text = xhr.responseText;
                    } // Firefox throws an exception when accessing
                    // statusText for faulty cross-domain requests


                    try {
                      statusText = xhr.statusText;
                    } catch (e) {
                      // We normalize with Webkit giving an empty statusText
                      statusText = "";
                    } // Filter status for non standard behaviors
                    // If the request is local and we have data: assume a success
                    // (success with no data won't get notified, that's the best we
                    // can do given current implementations)


                    if (!status && s.isLocal && !s.crossDomain) {
                      status = responses.text ? 200 : 404; // IE - #1450: sometimes returns 1223 when it should be 204
                    } else if (status === 1223) {
                      status = 204;
                    }
                  }
                }
              } catch (firefoxAccessException) {
                if (!isAbort) {
                  complete(-1, firefoxAccessException);
                }
              } // Call complete if needed


              if (responses) {
                complete(status, statusText, responses, responseHeaders);
              }
            };

            if (!s.async) {
              // if we're in sync mode we fire the callback
              _callback();
            } else if (xhr.readyState === 4) {
              // (IE6 & IE7) if it's in cache and has been
              // retrieved directly we need to fire the callback
              setTimeout(_callback);
            } else {
              handle = ++xhrId;

              if (xhrOnUnloadAbort) {
                // Create the active xhrs callbacks list if needed
                // and attach the unload handler
                if (!xhrCallbacks) {
                  xhrCallbacks = {};
                  jQuery(window).unload(xhrOnUnloadAbort);
                } // Add to list of active xhrs callbacks


                xhrCallbacks[handle] = _callback;
              }

              xhr.onreadystatechange = _callback;
            }
          },
          abort: function abort() {
            if (_callback) {
              _callback(undefined, true);
            }
          }
        };
      }
    });
  }

  var fxNow,
      timerId,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
      rrun = /queueHooks$/,
      animationPrefilters = [defaultPrefilter],
      tweeners = {
    "*": [function (prop, value) {
      var end,
          unit,
          tween = this.createTween(prop, value),
          parts = rfxnum.exec(value),
          target = tween.cur(),
          start = +target || 0,
          scale = 1,
          maxIterations = 20;

      if (parts) {
        end = +parts[2];
        unit = parts[3] || (jQuery.cssNumber[prop] ? "" : "px"); // We need to compute starting value

        if (unit !== "px" && start) {
          // Iteratively approximate from a nonzero starting point
          // Prefer the current property, because this process will be trivial if it uses the same units
          // Fallback to end or a simple constant
          start = jQuery.css(tween.elem, prop, true) || end || 1;

          do {
            // If previous iteration zeroed out, double until we get *something*
            // Use a string for doubling factor so we don't accidentally see scale as unchanged below
            scale = scale || ".5"; // Adjust and apply

            start = start / scale;
            jQuery.style(tween.elem, prop, start + unit); // Update scale, tolerating zero or NaN from tween.cur()
            // And breaking the loop if scale is unchanged or perfect, or if we've just had enough
          } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
        }

        tween.unit = unit;
        tween.start = start; // If a +=/-= token was provided, we're doing a relative animation

        tween.end = parts[1] ? start + (parts[1] + 1) * end : end;
      }

      return tween;
    }]
  }; // Animations created synchronously will run synchronously

  function createFxNow() {
    setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = jQuery.now();
  }

  function createTweens(animation, props) {
    jQuery.each(props, function (prop, value) {
      var collection = (tweeners[prop] || []).concat(tweeners["*"]),
          index = 0,
          length = collection.length;

      for (; index < length; index++) {
        if (collection[index].call(animation, prop, value)) {
          // we're done with this property
          return;
        }
      }
    });
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = animationPrefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]);

      if (percent < 1 && length) {
        return remaining;
      } else {
        deferred.resolveWith(elem, [animation]);
        return false;
      }
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {}
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // if we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // resolve when we played the last frame
        // otherwise, reject


        if (gotoEnd) {
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = animationPrefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        return result;
      }
    }

    createTweens(animation, props);

    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }

    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    })); // attach callbacks from options

    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }

  function propFilter(props, specialEasing) {
    var value, name, index, easing, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // not quite $.extend, this wont overwrite keys already present.
        // also - reusing 'index' from above because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweener: function tweener(props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.split(" ");
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        tweeners[prop] = tweeners[prop] || [];
        tweeners[prop].unshift(callback);
      }
    },
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        animationPrefilters.unshift(callback);
      } else {
        animationPrefilters.push(callback);
      }
    }
  });

  function defaultPrefilter(elem, props, opts) {
    /*jshint validthis:true */
    var prop,
        index,
        length,
        value,
        dataShow,
        toggle,
        tween,
        hooks,
        oldfire,
        anim = this,
        style = elem.style,
        orig = {},
        handled = [],
        hidden = elem.nodeType && isHidden(elem); // handle queue: false promises

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // doing this makes sure that the complete handler will be called
        // before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // height/width overflow pass


    if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
      // Make sure that nothing sneaks out
      // Record all 3 overflow attributes because IE does not
      // change the overflow attribute when overflowX and
      // overflowY are set to the same value
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Set display property to inline-block for height/width
      // animations on inline elements that are having width/height animated

      if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
        // inline-level elements accept inline-block;
        // block-level elements need to be inline with layout
        if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
          style.display = "inline-block";
        } else {
          style.zoom = 1;
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";

      if (!jQuery.support.shrinkWrapBlocks) {
        anim.always(function () {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
    } // show/hide pass


    for (index in props) {
      value = props[index];

      if (rfxtypes.exec(value)) {
        delete props[index];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          continue;
        }

        handled.push(index);
      }
    }

    length = handled.length;

    if (length) {
      dataShow = jQuery._data(elem, "fxshow") || jQuery._data(elem, "fxshow", {});

      if ("hidden" in dataShow) {
        hidden = dataShow.hidden;
      } // store state if its toggle - enables .stop().toggle() to "reverse"


      if (toggle) {
        dataShow.hidden = !hidden;
      }

      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function () {
          jQuery(elem).hide();
        });
      }

      anim.done(function () {
        var prop;

        jQuery._removeData(elem, "fxshow");

        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });

      for (index = 0; index < length; index++) {
        prop = handled[index];
        tween = anim.createTween(prop, hidden ? dataShow[prop] : 0);
        orig[prop] = dataShow[prop] || jQuery.style(elem, prop);

        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;

          if (hidden) {
            tween.end = tween.start;
            tween.start = prop === "width" || prop === "height" ? 1 : 0;
          }
        }
      }
    }
  }

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || "swing";
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result;

        if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
          return tween.elem[tween.prop];
        } // passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails
        // so, simple values such as "10px" are parsed to Float.
        // complex values such as "rotate(1rad)" are returned as is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // use step hook for back compat - use cssHook if its there - use .style if its
        // available and use plain properties where available
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Remove in 2.0 - this supports IE8's panic based approach
  // to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // show any hidden elements after setting opacity to 0
      return this.filter(isHidden).css("opacity", 0).show() // animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall);

        doAnimation.finish = function () {
          anim.stop(true);
        }; // Empty animations, or finishing resolves immediately


        if (empty || jQuery._data(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = jQuery._data(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // start the next in the queue if the last step wasn't forced
        // timers currently will call their complete callbacks, which will dequeue
        // but only if they were gotoEnd


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = jQuery._data(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // enable finishing flag on private data


        data.finish = true; // empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.cur && hooks.cur.finish) {
          hooks.cur.finish.call(this);
        } // look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // turn off finishing flag


        delete data.finish;
      });
    }
  }); // Generate parameters to create a standard animation

  function genFx(type, includeWidth) {
    var which,
        attrs = {
      height: type
    },
        i = 0; // if we include width, step value is 1 to do all cssExpand values,
    // if we don't include width, step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  } // Generate shortcuts for custom animations


  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default; // normalize opt.queue - true/undefined/null -> "fx"

    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    }
  };
  jQuery.timers = [];
  jQuery.fx = Tween.prototype.init;

  jQuery.fx.tick = function () {
    var timer,
        timers = jQuery.timers,
        i = 0;
    fxNow = jQuery.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Checks the timer has not already been removed

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    if (timer() && jQuery.timers.push(timer)) {
      jQuery.fx.start();
    }
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (!timerId) {
      timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };

  jQuery.fx.stop = function () {
    clearInterval(timerId);
    timerId = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Back Compat <1.8 extension point

  jQuery.fx.step = {};

  if (jQuery.expr && jQuery.expr.filters) {
    jQuery.expr.filters.animated = function (elem) {
      return jQuery.grep(jQuery.timers, function (fn) {
        return elem === fn.elem;
      }).length;
    };
  }

  jQuery.fn.offset = function (options) {
    if (arguments.length) {
      return options === undefined ? this : this.each(function (i) {
        jQuery.offset.setOffset(this, options, i);
      });
    }

    var docElem,
        win,
        box = {
      top: 0,
      left: 0
    },
        elem = this[0],
        doc = elem && elem.ownerDocument;

    if (!doc) {
      return;
    }

    docElem = doc.documentElement; // Make sure it's not a disconnected DOM node

    if (!jQuery.contains(docElem, elem)) {
      return box;
    } // If we don't have gBCR, just use 0,0 rather than error
    // BlackBerry 5, iOS 3 (original iPhone)


    if (_typeof(elem.getBoundingClientRect) !== core_strundefined) {
      box = elem.getBoundingClientRect();
    }

    win = getWindow(doc);
    return {
      top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
      left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
    };
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var position = jQuery.css(elem, "position"); // set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      var curElem = jQuery(elem),
          curOffset = curElem.offset(),
          curCSSTop = jQuery.css(elem, "top"),
          curCSSLeft = jQuery.css(elem, "left"),
          calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
          props = {},
          curPosition = {},
          curTop,
          curLeft; // need to be able to calculate position if either top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (jQuery.isFunction(options)) {
        options = options.call(elem, i, curOffset);
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          parentOffset = {
        top: 0,
        left: 0
      },
          elem = this[0]; // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent

      if (jQuery.css(elem, "position") === "fixed") {
        // we assume that getBoundingClientRect is available when computed position is fixed
        offset = elem.getBoundingClientRect();
      } else {
        // Get *real* offsetParent
        offsetParent = this.offsetParent(); // Get correct offsets

        offset = this.offset();

        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = offsetParent.offset();
        } // Add offsetParent borders


        parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
        parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
      } // Subtract parent offsets and element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent || document.documentElement;

        while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || document.documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = /Y/.test(prop);

    jQuery.fn[method] = function (val) {
      return jQuery.access(this, function (elem, method, val) {
        var win = getWindow(elem);

        if (val === undefined) {
          return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length, null);
    };
  });

  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
  } // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods


  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return jQuery.access(this, function (elem, type, value) {
          var doc;

          if (jQuery.isWindow(elem)) {
            // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
            // isn't a whole lot we can do. See pull request at this URL for discussion:
            // https://github.com/jquery/jquery/pull/764
            return elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
            // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      };
    });
  }); // Limit scope pollution from any deprecated API
  // (function() {
  // })();
  // Expose jQuery to the global object

  window.jQuery = window.$ = jQuery; // Expose jQuery as an AMD module, but only for AMD loaders that
  // understand the issues with loading multiple versions of jQuery
  // in a page that all might call define(). The loader will indicate
  // they have special allowances for multiple jQuery versions by
  // specifying define.amd.jQuery = true. Register as a named module,
  // since jQuery can be concatenated with other files that may use define,
  // but not use a proper concatenation script that understands anonymous
  // AMD modules. A named AMD is safest and most robust way to register.
  // Lowercase jquery is used because AMD module names are derived from
  // file names, and jQuery is normally delivered in a lowercase file name.
  // Do this after creating the global so that if an AMD module wants to call
  // noConflict to hide this version of jQuery, it will work.

  if ( true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").jQuery) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})(window);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************************************************!*\
  !*** multi ./resources/js/JQuery/jquery.js ./resources/js/Bootstrap/bootstrap.js ./resources/sass/app.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Zetrax\Source\Repos\Github\laravel_app\resources\js\JQuery\jquery.js */"./resources/js/JQuery/jquery.js");
__webpack_require__(/*! C:\Users\Zetrax\Source\Repos\Github\laravel_app\resources\js\Bootstrap\bootstrap.js */"./resources/js/Bootstrap/bootstrap.js");
module.exports = __webpack_require__(/*! C:\Users\Zetrax\Source\Repos\Github\laravel_app\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });