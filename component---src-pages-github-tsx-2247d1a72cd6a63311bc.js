"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2566],{

/***/ 94597:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Head; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24503);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */function Head(props){var _site$siteMetadata,_data$page,_site$siteMetadata2;var{pageContext,data,description,image,title,meta=[]}=props;var{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("63159454");var metaTitle=title||(pageContext===null||pageContext===void 0?void 0:pageContext.title)||(site===null||site===void 0?void 0:(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title);if(!/^(Jacdac|DeviceScript)/i.test(metaTitle))metaTitle="Jacdac - "+metaTitle;var metaDescription=description||(data===null||data===void 0?void 0:(_data$page=data.page)===null||_data$page===void 0?void 0:_data$page.description)||(site===null||site===void 0?void 0:(_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.description);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{key:"title"},metaTitle),[{name:"description",content:metaDescription},{name:"og:image",content:image},{name:"og:title",content:metaTitle},{name:"og:description",content:metaDescription},{name:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:site.siteMetadata.author},{name:"twitter:title",content:title},{name:"twitter:description",content:metaDescription}].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(meta)).filter(_ref=>{var{content}=_ref;return!!content;}).map(_ref2=>{var{name,content}=_ref2;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:name,name:name,content:content});}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:"fontsgoogle",rel:"preconnect",href:"https://fonts.googleapis.com",crossOrigin:"anonymous"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:"gitusercontent",rel:"preconnect",href:"https://raw.githubusercontent.com",crossOrigin:"anonymous"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"viewport",name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}));}

/***/ }),

/***/ 58908:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontmatter": function() { return /* binding */ frontmatter; },
/* harmony export */   "Head": function() { return /* binding */ Head; },
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _components_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5754);
/* harmony import */ var _components_shell_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94597);


var frontmatter = {
  title: "GitHub repositories"
};

var Head = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shell_Head__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, Object.assign({}, props, frontmatter));
function Page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "GitHub Repositories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Jacdac is Open Source on GitHub. Here is a map to help you find the part you want:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Discussions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Post your questions, bugs, suggestions on the centralized discussions at", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/jacdac/jacdac/discussions"
  }, "https://github.com/jacdac/jacdac/discussions"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Videos on Youtube"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "The", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.youtube.com/channel/UCDDeOurixeITal31eI4Ga2g"
  }, "Jacdac channel"), " ", "hosts various videos on using Jacdac."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Specification and Schematics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    dense: true,
    nodes: [{
      title: "jacdac/jacdac",
      description: "Service specifications and device catalog",
      href: "https://github.com/jacdac/jacdac"
    }, {
      title: "jacdac/jacdac-ddk",
      description: "Device Development Kit",
      href: "https://github.com/jacdac/jacdac-ddk"
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Module Development"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Server SDKs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    dense: true,
    nodes: [{
      title: "jacdac/jacdac-c",
      description: "C Firmware library",
      href: "https://github.com/jacdac/jacdac-c"
    }, {
      title: "jacdac/jacdac-stm32x0",
      description: "Firmware library for STM32F0 and similar",
      href: "https://github.com/jacdac/jacdac-stm32x0"
    }, {
      title: "jacdac/jacdac-msr-modules",
      description: "Firmware for prototype Jacdac modules made by Microsoft Research",
      href: "https://github.com/jacdac/jacdac-msr-modules"
    }, {
      title: "jacdac/jacdac-module-template",
      description: "Template repository for firmware for a STM32G0-based Jacdac module",
      href: "https://github.com/jacdac/jacdac-module-template"
    }, {
      title: "jacdac/jacdac-esp32",
      description: "Firmware library for ESP32 IDF",
      href: "https://github.com/jacdac/jacdac-esp32"
    }, {
      title: "jacdac/jacdac-pico",
      description: "Firmware library for Raspberry Pi Pico",
      href: "https://github.com/jacdac/jacdac-pico"
    }, {
      title: "jacdac/jacdac-padauk",
      description: "Firmware library for PADAUK",
      href: "https://github.com/jacdac/jacdac-padauk"
    }, {
      title: "jacdac/jacdac-posix",
      description: "Firmware library for native Jacdac on desktop",
      href: "https://github.com/jacdac/jacdac-posix"
    }, {
      title: "jacdac/codal-jacdac",
      description: "Jacdac-C SDK integration for CODAL",
      href: "https://github.com/jacdac/codal-jacdac"
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Client SDKs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    dense: true,
    nodes: [{
      title: "jacdac/jacdac-ts",
      description: "TypeScript/JavaScript library",
      href: "https://github.com/jacdac/jacdac-ts"
    }, {
      title: "microsoft/devicescript",
      description: "DeviceScript compiler and runtime",
      href: "https://github.com/microsoft/devicescript"
    }, {
      title: "jacdac/jacdac-dotnet",
      description: ".NET (desktop, nano, tiny) library",
      href: "https://github.com/jacdac/jacdac-dotnet"
    }, {
      title: "jacdac/jacdac-python",
      description: "Python (desktop) library",
      href: "https://github.com/jacdac/jacdac-python"
    }, {
      title: "jacdac/pxt-jacdac",
      description: "MakeCode library",
      href: "https://github.com/jacdac/pxt-jacdac"
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Integrations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    dense: true,
    nodes: [{
      title: "jacdac/jacdac-docs",
      description: "Documentation, web tools and dashboard",
      href: "https://github.com/jacdac/jacdac-docs"
    }, {
      title: "jacdac/jacdac-cli",
      description: "Command line interface",
      href: "https://github.com/jacdac/jacdac-cli"
    }, {
      title: "jacdac/react-jacdac",
      description: "React library",
      href: "https://github.com/jacdac/react-jacdac"
    }, {
      title: "jacdac/node-red-contrib-jacdac",
      description: "node-red-contrib-jacdac",
      href: "https://github.com/jacdac/node-red-contrib-jacdac"
    }, {
      title: "microsoft/microcode",
      description: "MicroCode",
      href: "https://github.com/microsoft/microcode"
    }, {
      title: "microsoft/devicescript",
      description: "DeviceScript",
      href: "https://github.com/microsoft/devicescript"
    }]
  }));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-github-tsx-2247d1a72cd6a63311bc.js.map