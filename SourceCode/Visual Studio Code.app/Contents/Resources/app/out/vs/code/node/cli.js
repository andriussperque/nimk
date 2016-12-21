/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function(){var e=["exports","require","vs/base/common/platform","vs/base/common/types","vs/base/common/uri","vs/base/common/winjs.base","vs/base/common/arrays","vs/base/common/errors","vs/nls!vs/platform/environment/node/argv","vs/base/common/objects","vs/platform/environment/node/argv","vs/platform/package","path","vs/platform/product","os","minimist","assert","vs/base/common/winjs.base.raw","vs/nls!vs/code/node/cli","child_process","vs/code/node/cli","vs/nls"],t=function(t){for(var n=[],r=0,o=t.length;r<o;r++)n[r]=e[t[r]];return n};define(e[6],t([1,0]),function(e,t){"use strict";function n(e,t){return void 0===t&&(t=0),e[e.length-(1+t)]}function r(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],function(){e.splice(n,1),n--,r--})}function o(e,t,n){if(void 0===n&&(n=function(e,t){return e===t}),e.length!==t.length)return!1;for(var r=0,o=e.length;r<o;r++)if(!n(e[r],t[r]))return!1;return!0}function i(e,t,n){for(var r=0,o=e.length-1;r<=o;){var i=(r+o)/2|0,a=n(e[i],t);if(a<0)r=i+1;else{if(!(a>0))return i;o=i-1}}return-(r+1)}function a(e,t){var n=0,r=e.length;if(0===r)return 0;for(;n<r;){var o=Math.floor((n+r)/2);t(e[o])?r=o:n=o+1}return n}function s(e,t,n){if(0===n)return[];for(var r=e.slice(0,n).sort(t),o=function(o,i){var s=e[o];if(t(s,r[n-1])<0){r.pop();var u=a(r,function(e){return t(s,e)<0});r.splice(u,0,s)}},i=n,s=e.length;i<s;i++)o(i,s);return r}function u(e,t){var n=new Array;if(t)for(var r={},o=0;o<e.length;o++)for(var i=0;i<e[o].length;i++){var a=e[o][i],s=t(a);r.hasOwnProperty(s)||(r[s]=!0,n.push(a))}else for(var o=0,u=e.length;o<u;o++)n.push.apply(n,e[o]);return n}function c(e){return e?e.filter(function(e){return!!e}):e}function l(e,t){return e.indexOf(t)>=0}function f(e,t,n){var r=e[t],o=e[n];e[t]=o,e[n]=r}function p(e,t,n){e.splice(n,0,e.splice(t,1)[0])}function h(e){return!Array.isArray(e)||0===e.length}function d(e,t){if(!t)return e.filter(function(t,n){return e.indexOf(t)===n});var n=Object.create(null);return e.filter(function(e){var r=t(e);return!n[r]&&(n[r]=!0,!0)})}function _(e){var t=Object.create(null);return function(n){var r=e(n);return!t[r]&&(t[r]=!0,!0)}}function m(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(t(r))return n}return-1}function v(e,t,n){void 0===n&&(n=null);var r=m(e,t);return r<0?n:e[r]}function g(e,t,n){void 0===n&&(n=function(e,t){return e===t});for(var r=0,o=0,i=Math.min(e.length,t.length);o<i&&n(e[o],t[o]);o++)r++;return r}function y(e){return e.reduce(function(e,t){return e.concat(t)},[])}function b(e,t){void 0===t&&(t=0);for(var n=[],r=t;r<e;r++)n.push(r);return n}function w(e,t,n){void 0===n&&(n=[]);for(var r=0;r<e;r++)n[r]=t();return n}function E(e,t,n){return void 0===n&&(n=function(e){return e}),e.reduce(function(e,r){var o=t(r);return e[o]=n(r,e[o]),e},Object.create(null))}function S(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}t.tail=n,t.forEach=r,t.equals=o,t.binarySearch=i,t.findFirst=a,t.top=s,t.merge=u,t.coalesce=c,t.contains=l,t.swap=f,t.move=p,t.isFalsyOrEmpty=h,t.distinct=d,t.uniqueFilter=_,t.firstIndex=m,t.first=v,t.commonPrefixLength=g,t.flatten=y,t.range=b,t.fill=w,t.index=E,t.insert=S}),define(e[2],t([1,0]),function(e,t){"use strict";function n(){return"undefined"!=typeof v.Worker}var r=!1,o=!1,i=!1,a=!1,s=!1,u=!1,c=!1,l=void 0,f=void 0;if(t.LANGUAGE_DEFAULT="en","object"==typeof process){r="win32"===process.platform,o="darwin"===process.platform,i="linux"===process.platform,a=!r&&0===process.getuid();var p=process.env.VSCODE_NLS_CONFIG;if(p)try{var h=JSON.parse(p),d=h.availableLanguages["*"];l=h.locale,f=d?d:t.LANGUAGE_DEFAULT}catch(e){}s=!0}else if("object"==typeof navigator){var _=navigator.userAgent;r=_.indexOf("Windows")>=0,o=_.indexOf("Macintosh")>=0,i=_.indexOf("Linux")>=0,u=!0,l=navigator.language,f=l,c=!!self.QUnit}!function(e){e[e.Web=0]="Web",e[e.Mac=1]="Mac",e[e.Linux=2]="Linux",e[e.Windows=3]="Windows"}(t.Platform||(t.Platform={}));var m=t.Platform;t._platform=m.Web,s&&(o?t._platform=m.Mac:r?t._platform=m.Windows:i&&(t._platform=m.Linux)),t.isWindows=r,t.isMacintosh=o,t.isLinux=i,t.isRootUser=a,t.isNative=s,t.isWeb=u,t.isQunit=c,t.platform=t._platform,t.language=f,t.locale=l;var v="object"==typeof self?self:global;t.globals=v,t.hasWebWorkerSupport=n,t.setTimeout=v.setTimeout.bind(v),t.clearTimeout=v.clearTimeout.bind(v),t.setInterval=v.setInterval.bind(v),t.clearInterval=v.clearInterval.bind(v)}),define(e[3],t([1,0]),function(e,t){"use strict";function n(e){return Array.isArray?Array.isArray(e):!(!e||typeof e.length!==m.number||e.constructor!==Array)}function r(e){return typeof e===m.string||e instanceof String}function o(e){return n(e)&&e.every(function(e){return r(e)})}function i(e){return!(typeof e!==m.object||null===e||Array.isArray(e)||e instanceof RegExp||e instanceof Date)}function a(e){return(typeof e===m.number||e instanceof Number)&&!isNaN(e)}function s(e){return e===!0||e===!1}function u(e){return typeof e===m.undefined}function c(e){return u(e)||null===e}function l(e){if(!i(e))return!1;for(var t in e)if(v.call(e,t))return!1;return!0}function f(e){return typeof e===m.function}function p(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];return e&&e.length>0&&e.every(f)}function h(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++)d(e[r],t[r])}function d(e,t){if(r(t)){if(typeof e!==t)throw new Error("argument does not match constraint: typeof "+t)}else if(f(t)){if(e instanceof t)return;if(e&&e.constructor===t)return;if(1===t.length&&t.call(void 0,e)===!0)return;throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true")}}function _(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Object.create(e.prototype);return e.apply(r,t),r}var m={number:"number",string:"string",undefined:"undefined",object:"object",function:"function"};t.isArray=n,t.isString=r,t.isStringArray=o,t.isObject=i,t.isNumber=a,t.isBoolean=s,t.isUndefined=u,t.isUndefinedOrNull=c;var v=Object.prototype.hasOwnProperty;t.isEmptyObject=l,t.isFunction=f,t.areFunctions=p,t.validateConstraints=h,t.validateConstraint=d,t.create=_}),define(e[7],t([1,0,2,3]),function(e,t,n,r){"use strict";function o(e){t.errorHandler.setUnexpectedErrorHandler(e)}function i(e){u(e)||t.errorHandler.onUnexpectedError(e)}function a(e){return e.then(null,i)}function s(e){if(e instanceof Error){var t=e.name,n=e.message,r=e.stacktrace||e.stack;return{$isError:!0,name:t,message:n,stack:r}}return e}function u(e){return e instanceof Error&&e.name===v&&e.message===v}function c(){var e=new Error(v);return e.name=e.message,e}function l(){return new Error("Not Implemented")}function f(e){return e?new Error("Illegal argument: "+e):new Error("Illegal argument")}function p(e){return e?new Error("Illegal state: "+e):new Error("Illegal state")}function h(e){return e?new Error("readonly property '"+e+" cannot be changed'"):new Error("readonly property cannot be changed")}function d(e,t){void 0===t&&(t={});var n=new Error(e);return r.isNumber(t.severity)&&(n.severity=t.severity),t.actions&&(n.actions=t.actions),n}function _(e){return e?e.message?e.message:e.stack?e.stack.split("\n")[0]:String(e):"Error"}var m=function(){function e(){this.listeners=[],this.unexpectedErrorHandler=function(e){n.setTimeout(function(){if(e.stack)throw new Error(e.message+"\n\n"+e.stack);throw e},0)}}return e.prototype.addListener=function(e){var t=this;return this.listeners.push(e),function(){t._removeListener(e)}},e.prototype.emit=function(e){this.listeners.forEach(function(t){t(e)})},e.prototype._removeListener=function(e){this.listeners.splice(this.listeners.indexOf(e),1)},e.prototype.setUnexpectedErrorHandler=function(e){this.unexpectedErrorHandler=e},e.prototype.getUnexpectedErrorHandler=function(){return this.unexpectedErrorHandler},e.prototype.onUnexpectedError=function(e){this.unexpectedErrorHandler(e),this.emit(e)},e}();t.ErrorHandler=m,t.errorHandler=new m,t.setUnexpectedErrorHandler=o,t.onUnexpectedError=i,t.onUnexpectedPromiseError=a,t.transformErrorForSerialization=s;var v="Canceled";t.isPromiseCanceledError=u,t.canceled=c,t.notImplemented=l,t.illegalArgument=f,t.illegalState=p,t.readonly=h,t.create=d,t.getErrorMessage=_}),define(e[9],t([1,0,3]),function(e,t,n){"use strict";function r(e){if(!e||"object"!=typeof e)return e;if(e instanceof RegExp)return e;var t=Array.isArray(e)?[]:{};return Object.keys(e).forEach(function(n){e[n]&&"object"==typeof e[n]?t[n]=r(e[n]):t[n]=e[n]}),t}function o(e){if(!e||"object"!=typeof e)return e;var t=Array.isArray(e)?[]:{};return Object.getOwnPropertyNames(e).forEach(function(n){e[n]&&"object"==typeof e[n]?t[n]=o(e[n]):t[n]=e[n]}),t}function i(e,t){return a(e,t,[])}function a(e,t,r){if(n.isUndefinedOrNull(e))return e;var o=t(e);if("undefined"!=typeof o)return o;if(n.isArray(e)){for(var i=[],s=0;s<e.length;s++)i.push(a(e[s],t,r));return i}if(n.isObject(e)){if(r.indexOf(e)>=0)throw new Error("Cannot clone recursive data-structure");r.push(e);var u={};for(var c in e)v.call(e,c)&&(u[c]=a(e[c],t,r));return r.pop(),u}return e}function s(e,t,r){return void 0===r&&(r=!0),n.isObject(e)?(n.isObject(t)&&Object.keys(t).forEach(function(o){o in e?r&&(n.isObject(e[o])&&n.isObject(t[o])?s(e[o],t[o],r):e[o]=t[o]):e[o]=t[o]}),e):t}function u(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.forEach(function(t){return Object.keys(t).forEach(function(n){return e[n]=t[n]})}),e}function c(e,t,n){return void 0===n&&(n=function(e){return e}),e.reduce(function(e,r){return u(e,(o={},o[t(r)]=n(r),o));var o},Object.create(null))}function l(e,t){if(e===t)return!0;if(null===e||void 0===e||null===t||void 0===t)return!1;if(typeof e!=typeof t)return!1;if("object"!=typeof e)return!1;if(Array.isArray(e)!==Array.isArray(t))return!1;var n,r;if(Array.isArray(e)){if(e.length!==t.length)return!1;for(n=0;n<e.length;n++)if(!l(e[n],t[n]))return!1}else{var o=[];for(r in e)o.push(r);o.sort();var i=[];for(r in t)i.push(r);if(i.sort(),!l(o,i))return!1;for(n=0;n<o.length;n++)if(!l(e[o[n]],t[o[n]]))return!1}return!0}function f(e,t,n){"undefined"==typeof e[t]&&(e[t]=n)}function p(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=!0;return t}function h(e,t){void 0===t&&(t=!1),t&&(e=e.map(function(e){return e.toLowerCase()}));var n=p(e);return t?function(e){return void 0!==n[e.toLowerCase()]&&n.hasOwnProperty(e.toLowerCase())}:function(e){return void 0!==n[e]&&n.hasOwnProperty(e)}}function d(e,t){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t=t||function(){};var r=e.prototype,o=t.prototype;t.prototype=Object.create(r);for(var n in o)o.hasOwnProperty(n)&&Object.defineProperty(t.prototype,n,Object.getOwnPropertyDescriptor(o,n));Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,configurable:!0,enumerable:!0})}function _(e){var t=[];return JSON.stringify(e,function(e,r){if(n.isObject(r)||Array.isArray(r)){if(t.indexOf(r)!==-1)return"[Circular]";t.push(r)}return r})}function m(e,t,n){void 0===n&&(n=null);var r=t(e);return"undefined"==typeof r?n:r}t.clone=r,t.deepClone=o;var v=Object.prototype.hasOwnProperty;t.cloneAndChange=i,t.mixin=s,t.assign=u,t.toObject=c,t.equals=l,t.ensureProperty=f,t.arrayToHash=p,t.createKeywordMatcher=h,t.derive=d,t.safeStringify=_,t.getOrDefault=m}),define(e[4],t([1,0,2]),function(e,t,n){"use strict";function r(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}function o(e){return encodeURIComponent(e).replace(/[!'()*]/g,r)}function i(e){return e}var a=function(){function e(){this._scheme=e._empty,this._authority=e._empty,this._path=e._empty,this._query=e._empty,this._fragment=e._empty,this._formatted=null,this._fsPath=null}return e.isUri=function(t){return t instanceof e||!!t&&("string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme)},Object.defineProperty(e.prototype,"scheme",{get:function(){return this._scheme},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"authority",{get:function(){return this._authority},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this._path},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"query",{get:function(){return this._query},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fragment",{get:function(){return this._fragment},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fsPath",{get:function(){if(!this._fsPath){var t;t=this._authority&&this._path&&"file"===this.scheme?"//"+this._authority+this._path:e._driveLetterPath.test(this._path)?this._path[1].toLowerCase()+this._path.substr(2):this._path,n.isWindows&&(t=t.replace(/\//g,"\\")),this._fsPath=t}return this._fsPath},enumerable:!0,configurable:!0}),e.prototype.with=function(t){if(!t)return this;var n=t.scheme,r=t.authority,o=t.path,i=t.query,a=t.fragment;if(void 0===n?n=this.scheme:null===n&&(n=""),void 0===r?r=this.authority:null===r&&(r=""),void 0===o?o=this.path:null===o&&(o=""),void 0===i?i=this.query:null===i&&(i=""),void 0===a?a=this.fragment:null===a&&(a=""),n===this.scheme&&r===this.authority&&o===this.path&&i===this.query&&a===this.fragment)return this;var s=new e;return s._scheme=n,s._authority=r,s._path=o,s._query=i,s._fragment=a,e._validate(s),s},e.parse=function(t){var n=new e,r=e._parseComponents(t);return n._scheme=r.scheme,n._authority=decodeURIComponent(r.authority),n._path=decodeURIComponent(r.path),n._query=decodeURIComponent(r.query),n._fragment=decodeURIComponent(r.fragment),e._validate(n),n},e.file=function(t){var n=new e;if(n._scheme="file",t=t.replace(/\\/g,e._slash),t[0]===e._slash&&t[0]===t[1]){var r=t.indexOf(e._slash,2);r===-1?n._authority=t.substring(2):(n._authority=t.substring(2,r),n._path=t.substring(r))}else n._path=t;return n._path[0]!==e._slash&&(n._path=e._slash+n._path),e._validate(n),n},e._parseComponents=function(t){var n={scheme:e._empty,authority:e._empty,path:e._empty,query:e._empty,fragment:e._empty},r=e._regexp.exec(t);return r&&(n.scheme=r[2]||n.scheme,n.authority=r[4]||n.authority,n.path=r[5]||n.path,n.query=r[7]||n.query,n.fragment=r[9]||n.fragment),n},e.from=function(t){return(new e).with(t)},e._validate=function(t){if(t.scheme&&!e._schemePattern.test(t.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(t.path)if(t.authority){if(!e._singleSlashStart.test(t.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(e._doubleSlashStart.test(t.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')},e.prototype.toString=function(t){return void 0===t&&(t=!1),t?e._asFormatted(this,!0):(this._formatted||(this._formatted=e._asFormatted(this,!1)),this._formatted)},e._asFormatted=function(t,n){var a=n?i:o,s=[],u=t.scheme,c=t.authority,l=t.path,f=t.query,p=t.fragment;if(u&&s.push(u,":"),(c||"file"===u)&&s.push("//"),c){c=c.toLowerCase();var h=c.indexOf(":");h===-1?s.push(a(c)):s.push(a(c.substr(0,h)),c.substr(h))}if(l){var d=e._upperCaseDrive.exec(l);d&&(l=d[1]?"/"+d[2].toLowerCase()+l.substr(3):d[2].toLowerCase()+l.substr(2));for(var _=0;;){var h=l.indexOf(e._slash,_);if(h===-1){s.push(a(l.substring(_)).replace(/[#?]/,r));break}s.push(a(l.substring(_,h)).replace(/[#?]/,r),e._slash),_=h+1}}return f&&s.push("?",a(f)),p&&s.push("#",a(p)),s.join(e._empty)},e.prototype.toJSON=function(){return{scheme:this.scheme,authority:this.authority,path:this.path,fsPath:this.fsPath,query:this.query,fragment:this.fragment,external:this.toString(),$mid:1}},e.revive=function(t){var n=new e;return n._scheme=t.scheme,n._authority=t.authority,n._path=t.path,n._query=t.query,n._fragment=t.fragment,n._fsPath=t.fsPath,n._formatted=t.external,e._validate(n),n},e._empty="",e._slash="/",e._regexp=/^(([^:\/?#]+?):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,e._driveLetterPath=/^\/[a-zA-z]:/,e._upperCaseDrive=/^(\/)?([A-Z]:)/,e._schemePattern=/^\w[\w\d+.-]*$/,e._singleSlashStart=/^\//,e._doubleSlashStart=/^\/\//,e}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=a}),function(){var e={};e["WinJS/Core/_WinJS"]={};var t=function(t,n,r){var o={},i=!1,a=n.map(function(t){return"exports"===t?(i=!0,o):e[t]}),s=r.apply({},a);e[t]=i?o:s};t("WinJS/Core/_Global",[],function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof self?self:"undefined"!=typeof global?global:{};return e}),t("WinJS/Core/_BaseCoreUtils",["WinJS/Core/_Global"],function(e){"use strict";function t(e){return e.supportedForProcessing=!0,e}var n=!!e.Windows;return{hasWinRT:n,markSupportedForProcessing:t,_setImmediate:e.setImmediate?e.setImmediate.bind(e):function(t){e.setTimeout(t,0)}}}),t("WinJS/Core/_WriteProfilerMark",["WinJS/Core/_Global"],function(e){"use strict";return e.msWriteProfilerMark||function(){}}),t("WinJS/Core/_Base",["WinJS/Core/_WinJS","WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_WriteProfilerMark"],function(e,t,n,r){"use strict";function o(e,t,n){var r,o,i,a=Object.keys(t),s=Array.isArray(e);for(o=0,i=a.length;o<i;o++){var u=a[o],c=95!==u.charCodeAt(0),l=t[u];!l||"object"!=typeof l||void 0===l.value&&"function"!=typeof l.get&&"function"!=typeof l.set?c?s?e.forEach(function(e){e[u]=l}):e[u]=l:(r=r||{},r[u]={value:l,enumerable:c,configurable:!0,writable:!0}):(void 0===l.enumerable&&(l.enumerable=c),n&&l.setName&&"function"==typeof l.setName&&l.setName(n+"."+u),r=r||{},r[u]=l)}r&&(s?e.forEach(function(e){Object.defineProperties(e,r)}):Object.defineProperties(e,r))}return function(){function n(n,r){var o=n||{};if(r){var i=r.split(".");o===t&&"WinJS"===i[0]&&(o=e,i.splice(0,1));for(var a=0,s=i.length;a<s;a++){var u=i[a];o[u]||Object.defineProperty(o,u,{value:{},writable:!1,enumerable:!0,configurable:!0}),o=o[u]}}return o}function i(e,t,r){var i=n(e,t);return r&&o(i,r,t||"<ANONYMOUS>"),i}function a(e,n){return i(t,e,n)}function s(e){var t,n,o=l.uninitialized;return{setName:function(e){t=e},get:function(){switch(o){case l.initialized:return n;case l.uninitialized:o=l.working;try{r("WinJS.Namespace._lazy:"+t+",StartTM"),n=e()}finally{r("WinJS.Namespace._lazy:"+t+",StopTM"),o=l.uninitialized}return e=null,o=l.initialized,n;case l.working:throw"Illegal: reentrancy on initialization";default:throw"Illegal"}},set:function(e){switch(o){case l.working:throw"Illegal: reentrancy on initialization";default:o=l.initialized,n=e}},enumerable:!0,configurable:!0}}function u(e,r,i){var a=[e],s=null;return r&&(s=n(t,r),a.push(s)),o(a,i,r||"<ANONYMOUS>"),s}var c=e;c.Namespace||(c.Namespace=Object.create(Object.prototype));var l={uninitialized:1,working:2,initialized:3};Object.defineProperties(c.Namespace,{defineWithParent:{value:i,writable:!0,enumerable:!0,configurable:!0},define:{value:a,writable:!0,enumerable:!0,configurable:!0},_lazy:{value:s,writable:!0,enumerable:!0,configurable:!0},_moduleDefine:{value:u,writable:!0,enumerable:!0,configurable:!0}})}(),function(){function t(e,t,r){return e=e||function(){},n.markSupportedForProcessing(e),t&&o(e.prototype,t),r&&o(e,r),e}function r(e,r,i,a){if(e){r=r||function(){};var s=e.prototype;return r.prototype=Object.create(s),n.markSupportedForProcessing(r),Object.defineProperty(r.prototype,"constructor",{value:r,writable:!0,configurable:!0,enumerable:!0}),i&&o(r.prototype,i),a&&o(r,a),r}return t(r,i,a)}function i(e){e=e||function(){};var t,n;for(t=1,n=arguments.length;t<n;t++)o(e.prototype,arguments[t]);return e}e.Namespace.define("WinJS.Class",{define:t,derive:r,mix:i})}(),{Namespace:e.Namespace,Class:e.Class}}),t("WinJS/Core/_ErrorFromName",["WinJS/Core/_Base"],function(e){"use strict";var t=e.Class.derive(Error,function(e,t){this.name=e,this.message=t||e},{},{supportedForProcessing:!1});return e.Namespace.define("WinJS",{ErrorFromName:t}),t}),t("WinJS/Core/_Events",["exports","WinJS/Core/_Base"],function(e,t){"use strict";function n(e){var t="_on"+e+"state";return{get:function(){var e=this[t];return e&&e.userHandler},set:function(n){var r=this[t];n?(r||(r={wrapper:function(e){return r.userHandler(e)},userHandler:n},Object.defineProperty(this,t,{value:r,enumerable:!1,writable:!0,configurable:!0}),this.addEventListener(e,r.wrapper,!1)),r.userHandler=n):r&&(this.removeEventListener(e,r.wrapper,!1),this[t]=null)},enumerable:!0}}function r(){for(var e={},t=0,r=arguments.length;t<r;t++){var o=arguments[t];e["on"+o]=n(o)}return e}var o=t.Class.define(function(e,t,n){this.detail=t,this.target=n,this.timeStamp=Date.now(),this.type=e},{bubbles:{value:!1,writable:!1},cancelable:{value:!1,writable:!1},currentTarget:{get:function(){return this.target}},defaultPrevented:{get:function(){return this._preventDefaultCalled}},trusted:{value:!1,writable:!1},eventPhase:{value:0,writable:!1},target:null,timeStamp:null,type:null,preventDefault:function(){this._preventDefaultCalled=!0},stopImmediatePropagation:function(){this._stopImmediatePropagationCalled=!0},stopPropagation:function(){}},{supportedForProcessing:!1}),i={_listeners:null,addEventListener:function(e,t,n){n=n||!1,this._listeners=this._listeners||{};for(var r=this._listeners[e]=this._listeners[e]||[],o=0,i=r.length;o<i;o++){var a=r[o];if(a.useCapture===n&&a.listener===t)return}r.push({listener:t,useCapture:n})},dispatchEvent:function(e,t){var n=this._listeners&&this._listeners[e];if(n){var r=new o(e,t,this);n=n.slice(0,n.length);for(var i=0,a=n.length;i<a&&!r._stopImmediatePropagationCalled;i++)n[i].listener(r);return r.defaultPrevented||!1}return!1},removeEventListener:function(e,t,n){n=n||!1;var r=this._listeners&&this._listeners[e];if(r)for(var o=0,i=r.length;o<i;o++){var a=r[o];if(a.listener===t&&a.useCapture===n){r.splice(o,1),0===r.length&&delete this._listeners[e];break}}}};t.Namespace._moduleDefine(e,"WinJS.Utilities",{_createEventProperty:n,createEventProperties:r,eventMixin:i})}),t("WinJS/Core/_Trace",["WinJS/Core/_Global"],function(e){"use strict";function t(e){return e}return{_traceAsyncOperationStarting:e.Debug&&e.Debug.msTraceAsyncOperationStarting&&e.Debug.msTraceAsyncOperationStarting.bind(e.Debug)||t,_traceAsyncOperationCompleted:e.Debug&&e.Debug.msTraceAsyncOperationCompleted&&e.Debug.msTraceAsyncOperationCompleted.bind(e.Debug)||t,_traceAsyncCallbackStarting:e.Debug&&e.Debug.msTraceAsyncCallbackStarting&&e.Debug.msTraceAsyncCallbackStarting.bind(e.Debug)||t,_traceAsyncCallbackCompleted:e.Debug&&e.Debug.msTraceAsyncCallbackCompleted&&e.Debug.msTraceAsyncCallbackCompleted.bind(e.Debug)||t}}),t("WinJS/Promise/_StateMachine",["WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_Base","WinJS/Core/_ErrorFromName","WinJS/Core/_Events","WinJS/Core/_Trace"],function(e,t,n,r,o,i){"use strict";function a(){}function s(e,t){var n;n=t&&"object"==typeof t&&"function"==typeof t.then?I:J,e._value=t,e._setState(n)}function u(e,t,n,r,o,i){return{exception:e,error:t,promise:n,handler:i,id:r,parent:o}}function c(e,t,n,r){var o=n._isException,i=n._errorId;return u(o?t:null,o?null:t,e,i,n,r)}function l(e,t,n){var r=n._isException,o=n._errorId;return b(e,o,r),u(r?t:null,r?null:t,e,o,n)}function f(e,t){var n=++H;return b(e,n),u(null,t,e,n)}function p(e,t){var n=++H;return b(e,n,!0),u(t,null,e,n)}function h(e,t,n,r){var o=i._traceAsyncOperationStarting("WinJS.Promise.done");y(e,{c:t,e:n,p:r,asyncOpID:o})}function d(e,t,n,r){e._value=t,v(e,t,n,r),e._setState(z)}function _(t,n){var r=t._value,o=t._listeners;if(o){t._listeners=null;var a,s;for(a=0,s=Array.isArray(o)?o.length:1;a<s;a++){var u=1===s?o:o[a],c=u.c,l=u.promise;if(i._traceAsyncOperationCompleted(u.asyncOpID,e.Debug&&e.Debug.MS_ASYNC_OP_STATUS_SUCCESS),l){i._traceAsyncCallbackStarting(u.asyncOpID);try{l._setCompleteValue(c?c(r):r)}catch(e){l._setExceptionValue(e)}finally{i._traceAsyncCallbackCompleted()}l._state!==I&&l._listeners&&n.push(l)}else Y.prototype.done.call(t,c)}}}function m(t,n){var r=t._value,o=t._listeners;if(o){t._listeners=null;var a,s;for(a=0,s=Array.isArray(o)?o.length:1;a<s;a++){var u=1===s?o:o[a],l=u.e,f=u.promise,p=e.Debug&&(r&&r.name===j?e.Debug.MS_ASYNC_OP_STATUS_CANCELED:e.Debug.MS_ASYNC_OP_STATUS_ERROR);if(i._traceAsyncOperationCompleted(u.asyncOpID,p),f){var h=!1;try{l?(i._traceAsyncCallbackStarting(u.asyncOpID),h=!0,l.handlesOnError||v(f,r,c,t,l),f._setCompleteValue(l(r))):f._setChainedErrorValue(r,t)}catch(e){f._setExceptionValue(e)}finally{h&&i._traceAsyncCallbackCompleted()}f._state!==I&&f._listeners&&n.push(f)}else G.prototype.done.call(t,null,l)}}}function v(e,t,n,r,o){if(x._listeners[A]){if(t instanceof Error&&t.message===j)return;x.dispatchEvent(A,n(e,t,r,o))}}function g(e,t){var n=e._listeners;if(n){var r,o;for(r=0,o=Array.isArray(n)?n.length:1;r<o;r++){var i=1===o?n:n[r],a=i.p;if(a)try{a(t)}catch(e){}i.c||i.e||!i.promise||i.promise._progress(t)}}}function y(e,t){var n=e._listeners;n?(n=Array.isArray(n)?n:[n],n.push(t)):n=t,e._listeners=n}function b(e,t,n){e._isException=n||!1,e._errorId=t}function w(e,t,n,r){e._value=t,v(e,t,n,r),e._setState(M)}function E(e,t){var n;n=t&&"object"==typeof t&&"function"==typeof t.then?I:V,e._value=t,e._setState(n)}function S(e,t,n,r){var o=new R(e),a=i._traceAsyncOperationStarting("WinJS.Promise.then");return y(e,{promise:o,c:t,e:n,p:r,asyncOpID:a}),o}function C(n){var r;return new $(function(o){n?r=e.setTimeout(o,n):t._setImmediate(o)},function(){r&&e.clearTimeout(r)})}function P(e,t){var n=function(){t.cancel()},r=function(){e.cancel()};return e.then(n),t.then(r,r),t}e.Debug&&(e.Debug.setNonUserCodeExceptions=!0);var O=n.Class.mix(n.Class.define(null,{},{supportedForProcessing:!1}),o.eventMixin),x=new O;x._listeners={};var A="error",j="Canceled",k=!1,W={promise:1,thenPromise:2,errorPromise:4,exceptionPromise:8,completePromise:16};W.all=W.promise|W.thenPromise|W.errorPromise|W.exceptionPromise|W.completePromise;var D,N,I,T,U,L,J,V,z,M,H=1;D={name:"created",enter:function(e){e._setState(N)},cancel:a,done:a,then:a,_completed:a,_error:a,_notify:a,_progress:a,_setCompleteValue:a,_setErrorValue:a},N={name:"working",enter:a,cancel:function(e){e._setState(U)},done:h,then:S,_completed:s,_error:d,_notify:a,_progress:g,_setCompleteValue:E,_setErrorValue:w},I={name:"waiting",enter:function(e){var t=e._value;if(t instanceof R&&t._state!==M&&t._state!==V)y(t,{promise:e});else{var n=function(r){t._errorId?e._chainedError(r,t):(v(e,r,c,t,n),e._error(r))};n.handlesOnError=!0,t.then(e._completed.bind(e),n,e._progress.bind(e))}},cancel:function(e){e._setState(T)},done:h,then:S,_completed:s,_error:d,_notify:a,_progress:g,_setCompleteValue:E,_setErrorValue:w},T={name:"waiting_canceled",enter:function(e){e._setState(L);var t=e._value;t.cancel&&t.cancel()},cancel:a,done:h,then:S,_completed:s,_error:d,_notify:a,_progress:g,_setCompleteValue:E,_setErrorValue:w},U={name:"canceled",enter:function(e){e._setState(L),e._cancelAction()},cancel:a,done:h,then:S,_completed:s,_error:d,_notify:a,_progress:g,_setCompleteValue:E,_setErrorValue:w},L={name:"canceling",enter:function(e){var t=new Error(j);t.name=t.message,e._value=t,e._setState(z)},cancel:a,done:a,then:a,_completed:a,_error:a,_notify:a,_progress:a,_setCompleteValue:a,_setErrorValue:a},J={name:"complete_notify",enter:function(e){if(e.done=Y.prototype.done,e.then=Y.prototype.then,e._listeners)for(var t,n=[e];n.length;)t=n.shift(),t._state._notify(t,n);e._setState(V)},cancel:a,done:null,then:null,_completed:a,_error:a,_notify:_,_progress:a,_setCompleteValue:a,_setErrorValue:a},V={name:"success",enter:function(e){e.done=Y.prototype.done,e.then=Y.prototype.then,e._cleanupAction()},cancel:a,done:null,then:null,_completed:a,_error:a,_notify:_,_progress:a,_setCompleteValue:a,_setErrorValue:a},z={name:"error_notify",enter:function(e){if(e.done=G.prototype.done,e.then=G.prototype.then,e._listeners)for(var t,n=[e];n.length;)t=n.shift(),t._state._notify(t,n);e._setState(M)},cancel:a,done:null,then:null,_completed:a,_error:a,_notify:m,_progress:a,_setCompleteValue:a,_setErrorValue:a},M={name:"error",enter:function(e){e.done=G.prototype.done,e.then=G.prototype.then,e._cleanupAction()},cancel:a,done:null,then:null,_completed:a,_error:a,_notify:m,_progress:a,_setCompleteValue:a,_setErrorValue:a};var F,q=n.Class.define(null,{_listeners:null,_nextState:null,_state:null,_value:null,cancel:function(){this._state.cancel(this),this._run()},done:function(e,t,n){this._state.done(this,e,t,n)},then:function(e,t,n){return this._state.then(this,e,t,n)},_chainedError:function(e,t){var n=this._state._error(this,e,l,t);return this._run(),n},_completed:function(e){var t=this._state._completed(this,e);return this._run(),t},_error:function(e){var t=this._state._error(this,e,f);return this._run(),t},_progress:function(e){this._state._progress(this,e)},_setState:function(e){this._nextState=e},_setCompleteValue:function(e){this._state._setCompleteValue(this,e),this._run()},_setChainedErrorValue:function(e,t){var n=this._state._setErrorValue(this,e,l,t);return this._run(),n},_setExceptionValue:function(e){var t=this._state._setErrorValue(this,e,p);return this._run(),t},_run:function(){for(;this._nextState;)this._state=this._nextState,this._nextState=null,this._state.enter(this)}},{supportedForProcessing:!1}),R=n.Class.derive(q,function(e){k&&(k===!0||k&W.thenPromise)&&(this._stack=$._getStack()),this._creator=e,this._setState(D),this._run()},{_creator:null,_cancelAction:function(){this._creator&&this._creator.cancel()},_cleanupAction:function(){this._creator=null}},{supportedForProcessing:!1}),G=n.Class.define(function(e){k&&(k===!0||k&W.errorPromise)&&(this._stack=$._getStack()),this._value=e,v(this,e,f)},{cancel:function(){},done:function(e,t){var n=this._value;if(t)try{t.handlesOnError||v(null,n,c,this,t);var r=t(n);return void(r&&"object"==typeof r&&"function"==typeof r.done&&r.done())}catch(e){n=e}n instanceof Error&&n.message===j||$._doneHandler(n)},then:function(e,t){if(!t)return this;var n,r=this._value;try{t.handlesOnError||v(null,r,c,this,t),n=new Y(t(r))}catch(e){n=e===r?this:new B(e)}return n}},{supportedForProcessing:!1}),B=n.Class.derive(G,function(e){k&&(k===!0||k&W.exceptionPromise)&&(this._stack=$._getStack()),this._value=e,v(this,e,p)},{},{supportedForProcessing:!1}),Y=n.Class.define(function(e){if(k&&(k===!0||k&W.completePromise)&&(this._stack=$._getStack()),e&&"object"==typeof e&&"function"==typeof e.then){var t=new R(null);return t._setCompleteValue(e),t}this._value=e},{cancel:function(){},done:function(e){if(e)try{var t=e(this._value);t&&"object"==typeof t&&"function"==typeof t.done&&t.done()}catch(e){$._doneHandler(e)}},then:function(e){try{var t=e?e(this._value):this._value;return t===this._value?this:new Y(t)}catch(e){return new B(e)}}},{supportedForProcessing:!1}),$=n.Class.derive(q,function(e,t){k&&(k===!0||k&W.promise)&&(this._stack=$._getStack()),this._oncancel=t,this._setState(D),this._run();try{var n=this._completed.bind(this),r=this._error.bind(this),o=this._progress.bind(this);e(n,r,o)}catch(e){this._setExceptionValue(e)}},{_oncancel:null,_cancelAction:function(){try{if(!this._oncancel)throw new Error("Promise did not implement oncancel");this._oncancel()}catch(e){e.message,e.stack;x.dispatchEvent("error",e)}},_cleanupAction:function(){this._oncancel=null}},{addEventListener:function(e,t,n){x.addEventListener(e,t,n)},any:function(e){return new $(function(t,n){var r=Object.keys(e);0===r.length&&t();var o=0;r.forEach(function(i){$.as(e[i]).then(function(){t({key:i,value:e[i]})},function(a){return a instanceof Error&&a.name===j?void(++o===r.length&&t($.cancel)):void n({key:i,value:e[i]})})})},function(){var t=Object.keys(e);t.forEach(function(t){var n=$.as(e[t]);"function"==typeof n.cancel&&n.cancel()})})},as:function(e){return e&&"object"==typeof e&&"function"==typeof e.then?e:new Y(e)},cancel:{get:function(){return F=F||new G(new r(j))}},dispatchEvent:function(e,t){return x.dispatchEvent(e,t)},is:function(e){return e&&"object"==typeof e&&"function"==typeof e.then},join:function(e){return new $(function(t,n,r){var o=Object.keys(e),i=Array.isArray(e)?[]:{},a=Array.isArray(e)?[]:{},s=0,u=o.length,c=function(e){
if(0===--u){var s=Object.keys(i).length;if(0===s)t(a);else{var c=0;o.forEach(function(e){var t=i[e];t instanceof Error&&t.name===j&&c++}),c===s?t($.cancel):n(i)}}else r({Key:e,Done:!0})};if(o.forEach(function(t){var n=e[t];void 0===n?s++:$.then(n,function(e){a[t]=e,c(t)},function(e){i[t]=e,c(t)})}),u-=s,0===u)return void t(a)},function(){Object.keys(e).forEach(function(t){var n=$.as(e[t]);"function"==typeof n.cancel&&n.cancel()})})},removeEventListener:function(e,t,n){x.removeEventListener(e,t,n)},supportedForProcessing:!1,then:function(e,t,n,r){return $.as(e).then(t,n,r)},thenEach:function(e,t,n,r){var o=Array.isArray(e)?[]:{};return Object.keys(e).forEach(function(i){o[i]=$.as(e[i]).then(t,n,r)}),$.join(o)},timeout:function(e,t){var n=C(e);return t?P(n,t):n},wrap:function(e){return new Y(e)},wrapError:function(e){return new G(e)},_veryExpensiveTagWithStack:{get:function(){return k},set:function(e){k=e}},_veryExpensiveTagWithStack_tag:W,_getStack:function(){if(e.Debug&&e.Debug.debuggerEnabled)try{throw new Error}catch(e){return e.stack}},_cancelBlocker:function(e,t){if(!$.is(e))return $.wrap(e);var n,r,o=new $(function(e,t){n=e,r=t},function(){n=null,r=null,t&&t()});return e.then(function(e){n&&n(e)},function(e){r&&r(e)}),o}});return Object.defineProperties($,o.createEventProperties(A)),$._doneHandler=function(e){t._setImmediate(function(){throw e})},{PromiseStateMachine:q,Promise:$,state_created:D}}),t("WinJS/Promise",["WinJS/Core/_Base","WinJS/Promise/_StateMachine"],function(e,t){"use strict";return e.Namespace.define("WinJS",{Promise:t.Promise}),t.Promise});var n=e["WinJS/Core/_WinJS"];"undefined"==typeof exports&&"function"==typeof define&&define.amd?define("vs/base/common/winjs.base.raw",n):module.exports=n,"undefined"!=typeof process&&"function"==typeof process.nextTick&&(e["WinJS/Core/_BaseCoreUtils"]._setImmediate=function(e){return process.nextTick(e)})}(),define(e[5],t([17,7]),function(e,t){"use strict";function n(e){var n=e.detail,o=n.id;return n.parent?void(n.handler&&r&&delete r[o]):(r[o]=n,void(1===Object.keys(r).length&&setTimeout(function(){var e=r;r={},Object.keys(e).forEach(function(n){var r=e[n];r.exception?t.onUnexpectedError(r.exception):r.error&&t.onUnexpectedError(r.error),console.log("WARNING: Promise with no error callback:"+r.id),console.log(r),r.exception&&console.log(r.exception.stack)})},0)))}var r={};return e.Promise.addEventListener("error",n),{Promise:e.Promise,TPromise:e.Promise,PPromise:e.Promise}}),define(e[8],t([21,18]),function(e,t){return e.create("vs/platform/environment/node/argv",t)}),define(e[10],t([1,0,14,15,16,6,8]),function(e,t,n,r,o,i,a){"use strict";function s(e){return e.goto&&e._.forEach(function(e){return o(/^(\w:)?[^:]+(:\d*){0,2}$/.test(e),a.localize(0,null))}),e}function u(e){var t=i.firstIndex(e,function(e){return!/^-/.test(e)});if(t>-1)return e.slice(0,t).concat(e.slice(t+1))}function c(e){var t=e.slice(1);return process.env.VSCODE_DEV&&(t=u(t)),s(f(t))}function l(e){var t=e.slice(2);return process.env.VSCODE_DEV&&(t=u(t)),s(f(t))}function f(e){return r(e,_)}function p(e,t){var n=Object.keys(e),r=Math.max.apply(null,n.map(function(e){return e.length}))+2+1;if(t-r<25)return n.reduce(function(t,n){return t.concat(["  "+n,"      "+e[n]])},[]).join("\n");var o=t-r-1,i="";return n.forEach(function(t){var n=h(e[t],o),a=" ".repeat(r-t.length-2);i.length>0&&(i+="\n"),i+="  "+t+a+n[0];for(var s=1;s<n.length;s++)i+="\n"+" ".repeat(r)+n[s]}),i}function h(e,t){for(var n=[];e.length;){var r=e.length<t?e.length:e.lastIndexOf(" ",t),o=e.slice(0,r).trim();e=e.slice(r),n.push(o)}return n}function d(e,r,o){var i=process.stdout.isTTY?process.stdout.columns:80,s=""+r+("win32"===n.platform()?".exe":"");return e+" "+o+"\n\n"+a.localize(19,null)+": "+s+" ["+a.localize(20,null)+"] ["+a.localize(21,null)+"...]\n\n"+a.localize(22,null)+":\n"+p(t.optionsHelp,i)}var _={string:["locale","user-data-dir","extensionHomePath","extensionDevelopmentPath","extensionTestsPath","install-extension","uninstall-extension","debugBrkPluginHost","debugPluginHost","open-url"],boolean:["help","version","wait","diff","goto","new-window","reuse-window","performance","verbose","logExtensionHostCommunication","disable-extensions","list-extensions","show-versions","nolazy"],alias:{help:"h",version:"v",wait:"w",diff:"d",goto:"g","new-window":"n","reuse-window":"r",performance:"p","disable-extensions":"disableExtensions"}};t.parseMainProcessArgv=c,t.parseCLIProcessArgv=l,t.parseArgs=f,t.optionsHelp={"-d, --diff":a.localize(1,null),"-g, --goto":a.localize(2,null),"--locale <locale>":a.localize(3,null),"-n, --new-window":a.localize(4,null),"-p, --performance":a.localize(5,null),"-r, --reuse-window":a.localize(6,null),"--user-data-dir <dir>":a.localize(7,null),"--verbose":a.localize(8,null),"-w, --wait":a.localize(9,null),"--extensionHomePath":a.localize(10,null),"--list-extensions":a.localize(11,null),"--show-versions":a.localize(12,null),"--install-extension <ext>":a.localize(13,null),"--uninstall-extension <ext>":a.localize(14,null),"--disable-extensions":a.localize(15,null),"--disable-gpu":a.localize(16,null),"-v, --version":a.localize(17,null),"-h, --help":a.localize(18,null)},t.formatOptions=p,t.buildHelpMessage=d}),define(e[11],t([1,0,12,4]),function(e,t,n,r){"use strict";var o=n.dirname(r.default.parse(e.toUrl("")).fsPath),i=n.join(o,"package.json");Object.defineProperty(t,"__esModule",{value:!0}),t.default=e.__$__nodeRequire(i)}),define(e[13],t([1,0,12,4]),function(e,t,n,r){"use strict";var o=n.dirname(r.default.parse(e.toUrl("")).fsPath),i=n.join(o,"product.json"),a=e.__$__nodeRequire(i);process.env.VSCODE_DEV&&(a.nameShort+=" Dev",a.nameLong+=" Dev",a.dataFolderName+="-dev"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=a}),define(e[20],t([1,0,19,5,9,10,13,11]),function(e,t,n,r,o,i,a,s){"use strict";function u(e){return e["list-extensions"]||!!e["install-extension"]||!!e["uninstall-extension"]}function c(t){var c;try{c=i.parseCLIProcessArgv(t)}catch(e){return console.error(e.message),r.TPromise.as(null)}if(c.help)console.log(i.buildHelpMessage(a.default.nameLong,a.default.applicationName,s.default.version));else if(c.version)console.log(s.default.version+"\n"+a.default.commit);else{if(u(c)){var l=new r.TPromise(function(t){return e(["vs/code/node/cliProcessMain"],t)});return l.then(function(e){return e.main(c)})}var f=o.assign({},process.env,{VSCODE_CLI:"1",ELECTRON_NO_ATTACH_CONSOLE:"1"});delete f.ELECTRON_RUN_AS_NODE,c.verbose&&(f.ELECTRON_ENABLE_LOGGING="1");var p={detached:!0,env:f};c.verbose||(p.stdio="ignore");var h=n.spawn(process.execPath,t.slice(2),p);if(c.verbose&&(h.stdout.on("data",function(e){return console.log(e.toString("utf8").trim())}),h.stderr.on("data",function(e){return console.log(e.toString("utf8").trim())})),c.wait||c.verbose)return new r.TPromise(function(e){return h.once("exit",function(){return e(null)})})}return r.TPromise.as(null)}t.main=c,c(process.argv).then(function(){return process.exit(0)}).then(null,function(e){console.error(e.stack?e.stack:e),process.exit(1)})})}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/02611b40b24c9df2726ad8b33f5ef5f67ac30b44/core/vs/code/node/cli.js.map
