"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8785],{

/***/ 49895:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11151);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/



function _createMdxContent(props) {
  var _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p",
    code: "code",
    pre: "pre"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components),
      {
    MakeCodeExtensionFooter
  } = _components;

  if (!MakeCodeExtensionFooter) _missingMdxReference("MakeCodeExtensionFooter", true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h1, {
    id: "equivalent-co",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#equivalent-co",
    "aria-label": "equivalent co permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Equivalent CO₂"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The CO₂ extension reports the equivalent CO₂ (eCO₂) in parts per million (ppm),\nwhere a typical minimum is 400 and the maximum is 8192.\nThe ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "eCO2"), " method returns the eCO₂ reading."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The following program outputs the eCO₂ reading whenever it changes by 1 ppm"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-blocks"
  }, "{\"source\":\"modules.eCO21.onECO2ChangedBy(1, function () {\\n    led.stopAnimation()\\n    basic.showNumber(modules.eCO21.eCO2())\\n})\",\"rendered\":{\"req\":{\"code\":\"modules.eCO21.onECO2ChangedBy(1, function () {\\n    led.stopAnimation()\\n    basic.showNumber(modules.eCO21.eCO2())\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac-e-co2=github:microsoft/pxt-jacdac/e-co2#v1.9.28\"},\"type\":\"renderblocks\",\"id\":\"c2010c8636c3049e57a0457063403b34\"},\"url\":\"/images/makecode/c2010c8636c3049e57a0457063403b34.png\"}}\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MakeCodeExtensionFooter, {
    serviceName: "eco2"
  }));
}

function MDXContent(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);
  return MDXLayout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXLayout, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_createMdxContent, props)) : _createMdxContent(props);
}

/* harmony default export */ __webpack_exports__["default"] = (MDXContent);

function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-eco-2-mdx-f5e14f979b3100b11119.js.map