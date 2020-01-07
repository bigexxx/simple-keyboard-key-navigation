/*!
 * 
 *   simple-keyboard-key-navigation v2.0.65
 *   https://github.com/hodgef/simple-keyboard-key-navigation
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SimpleKeyboardKeyNavigation=t():e.SimpleKeyboardKeyNavigation=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);t.default=function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"init",(function(e){e.registerModule("keyNavigation",(function(t){t.initVars=function(n){t.markerPosition={row:0,button:0},t.layoutName=n||"",t.step=e.options.keyNavigationStep||1},t.initMarker=function(){t.setMarker(0,0)},t.getButtonAt=function(n,o){var r=t.layoutName;return e.keyboardDOM.querySelector('.hg-button[data-skbtnuid="'.concat(r,"-r").concat(n,"b").concat(o,'"]'))},t.setMarker=function(n,o){var r=t.getButtonAt(n,o);r?(t.markedBtn&&t.markedBtn.classList.remove("hg-keyMarker"),r.classList.add("hg-keyMarker"),t.markedBtn=r,t.markerPosition={row:n,button:o}):e.options.debug&&console.log("SimpleKeyboardKeyNavigation: Button default-r".concat(n,"b").concat(o," doesnt exist!"))},t.up=function(){var e=t.markerPosition.row-t.step,n=t.markerPosition.button;if(!t.getButtonAt(e,n))for(var o=n;0<=o;o--)if(t.getButtonAt(e,o)){n=o;break}t.setMarker(e,n)},t.down=function(){var e=t.markerPosition.row+t.step,n=t.markerPosition.button;if(!t.getButtonAt(e,n))for(var o=n;0<=o;o--)if(t.getButtonAt(e,o)){n=o;break}t.setMarker(e,n)},t.right=function(){var e=t.markerPosition.row,n=t.markerPosition.button+t.step;t.setMarker(e,n)},t.left=function(){var e=t.markerPosition.row,n=t.markerPosition.button-t.step;t.setMarker(e,n)},t.press=function(){t.markedBtn&&t.markedBtn.onclick&&t.markedBtn.onclick()},t.fn={},t.fn.onRender=e.onRender,e.onRender=function(){e.options.layoutName!==t.layoutName&&e.options.enableKeyNavigation&&(e.options.debug&&console.log("SimpleKeyboardKeyNavigation: Refreshed"),t.initVars(e.options.layoutName),t.initMarker()),t.fn.onRender()}}))}))}},function(e,t,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(e.i,r,i),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a={};function u(e,t,n){for(var o=0;o<t.length;o++){var r={css:t[o][1],media:t[o][2],sourceMap:t[o][3]};a[e][o]?a[e][o](r):a[e].push(m(r,n))}}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function l(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,b=0;function m(e,t){var n,o,r;if(t.singleton){var i=b++;n=p||(p=c(t)),o=l.bind(null,n,i,!1),r=l.bind(null,n,i,!0)}else n=c(t),o=d.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r()),e=n.base?e+n.base:e,t=t||[],a[e]||(a[e]=[]),u(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){a[e]||(a[e]=[]),u(e,t,n);for(var o=t.length;o<a[e].length;o++)a[e][o]();a[e].length=t.length,0===a[e].length&&delete a[e]}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,".simple-keyboard .hg-button.hg-standardBtn.hg-keyMarker,\n.simple-keyboard .hg-button.hg-functionBtn.hg-keyMarker {\n  box-shadow: 0 0 0 2px #88b8ff;\n  border-radius: 5px;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,u,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var r=[].concat(e[o]);n&&(r[2]?r[2]="".concat(n," and ").concat(r[2]):r[2]=n),t.push(r)}},t}}])}));