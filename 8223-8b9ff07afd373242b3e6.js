"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8223],{

/***/ 8223:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderImageToString": function() { return /* binding */ f; },
/* harmony export */   "swapPlaceholderImage": function() { return /* binding */ v; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15861);
/* harmony import */ var _index_browser_dc34ce8e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93723);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97762);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23204);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_2__);
var d;var u=new WeakMap(),m=navigator.connection||navigator.mozConnection||navigator.webkitConnection,g=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function b(e,t){e.style.opacity="1",t&&(t.style.opacity="0");}function h(e,t,o,n,r,a){var i=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),s=o.has(t);function l(e){this.removeEventListener("load",l);var t=e.currentTarget,o=new Image();o.src=t.currentSrc,o.decode?o.decode().then(()=>{b(this,c),null==r||r({wasCached:s});}).catch(e=>{b(this,c),null==a||a(e);}):(b(this,c),null==r||r({wasCached:s}));}return i.addEventListener("load",l),null==n||n({wasCached:s}),Array.from(i.parentElement.children).forEach(e=>{var t=e.getAttribute("data-src"),o=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),o&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",o));}),o.add(t),i.complete&&l.call(i,{currentTarget:i}),()=>{i&&i.removeEventListener("load",l);};}function v(t,o,n,r,a,i,c){if(!(0,_index_browser_dc34ce8e_js__WEBPACK_IMPORTED_MODULE_3__.h)()){var _e;var _b=(g=()=>{_e=h(t,o,n,a,i,c);},"IntersectionObserver"in window?(d||(d=new IntersectionObserver(e=>{e.forEach(e=>{var t;e.isIntersecting&&(null==(t=u.get(e.target))||t(),u.delete(e.target));});},{rootMargin:"4g"!==(null==m?void 0:m.effectiveType)||null!=m&&m.saveData?"2500px":"1250px"})),function(e){return u.set(e,g),d.observe(e),function(){d&&e&&(u.delete(e),d.unobserve(e));};}):function(){return g(),function(){};}),_v=_b(t);var s,l;return"objectFit"in document.documentElement.style||(t.dataset.objectFit=null!=(s=r.objectFit)?s:"cover",t.dataset.objectPosition=""+(null!=(l=r.objectPosition)?l:"50% 50%"),function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function*(e){"objectFitPolyfill"in window||(yield __webpack_require__.e(/* import() */ 4843).then(__webpack_require__.t.bind(__webpack_require__, 54843, 23))),window.objectFitPolyfill(e);});return function(_x){return _ref.apply(this,arguments);};}()(t)),()=>{_e&&_e(),_v();};}var g;return h(t,o,n,a,i,c);}function f(e){var{image:d,loading:u="lazy",isLoading:m,isLoaded:b,imgClassName:h,imgStyle:v={},objectPosition:f,backgroundColor:p,objectFit:y="cover"}=e,w=(0,_index_browser_dc34ce8e_js__WEBPACK_IMPORTED_MODULE_3__._)(e,g);var{width:j,height:C,layout:E,images:F,placeholder:P,backgroundColor:L}=d;return v=(0,_index_browser_dc34ce8e_js__WEBPACK_IMPORTED_MODULE_3__.a)({objectFit:y,objectPosition:f,backgroundColor:p},v),(0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__/* .renderToStaticMarkup */ .uS)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_browser_dc34ce8e_js__WEBPACK_IMPORTED_MODULE_3__.L,{layout:E,width:j,height:C},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_browser_dc34ce8e_js__WEBPACK_IMPORTED_MODULE_3__.P,(0,_index_browser_dc34ce8e_js__WEBPACK_IMPORTED_MODULE_3__.a)({},(0,_index_browser_dc34ce8e_js__WEBPACK_IMPORTED_MODULE_3__.g)(P,b,E,j,C,L,y,f))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_browser_dc34ce8e_js__WEBPACK_IMPORTED_MODULE_3__.M,(0,_index_browser_dc34ce8e_js__WEBPACK_IMPORTED_MODULE_3__.a)({},w,{width:j,height:C,className:h},(0,_index_browser_dc34ce8e_js__WEBPACK_IMPORTED_MODULE_3__.b)(m,b,F,u,v)))));}

/***/ })

}]);
//# sourceMappingURL=8223-8b9ff07afd373242b3e6.js.map