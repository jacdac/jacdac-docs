"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7378,4360],{

/***/ 63343:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');
exports.Z = _default;

/***/ }),

/***/ 35097:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ getDividerUtilityClass; }
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1588);
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34867);


function getDividerUtilityClass(slot) {
  return (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('MuiDivider', slot);
}
const dividerClasses = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);
/* harmony default export */ __webpack_exports__["Z"] = (dividerClasses);

/***/ }),

/***/ 42440:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ List_List; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/ListContext.js
var ListContext = __webpack_require__(59773);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/List/listClasses.js


function getListUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiList', slot);
}
const listClasses = (0,generateUtilityClasses/* default */.Z)('MuiList', ['root', 'padding', 'dense', 'subheader']);
/* harmony default export */ var List_listClasses = ((/* unused pure expression or super */ null && (listClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/List/List.js


const _excluded = ["children", "className", "component", "dense", "disablePadding", "subheader"];










const useUtilityClasses = ownerState => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ['root', !disablePadding && 'padding', dense && 'dense', subheader && 'subheader']
  };
  return (0,composeClasses/* default */.Z)(slots, getListUtilityClass, classes);
};
const ListRoot = (0,styled/* default */.ZP)('ul', {
  name: 'MuiList',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disablePadding && styles.padding, ownerState.dense && styles.dense, ownerState.subheader && styles.subheader];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative'
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
}));
const List = /*#__PURE__*/react.forwardRef(function List(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiList'
  });
  const {
      children,
      className,
      component = 'ul',
      dense = false,
      disablePadding = false,
      subheader
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const context = react.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component,
    dense,
    disablePadding
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ListContext/* default.Provider */.Z.Provider, {
    value: context,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ListRoot, (0,esm_extends/* default */.Z)({
      as: component,
      className: (0,clsx_m/* default */.Z)(classes.root, className),
      ref: ref,
      ownerState: ownerState
    }, other, {
      children: [subheader, children]
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ var List_List = (List);

/***/ }),

/***/ 26336:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ getListItemTextUtilityClass; }
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1588);
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34867);


function getListItemTextUtilityClass(slot) {
  return (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('MuiListItemText', slot);
}
const listItemTextClasses = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);
/* harmony default export */ __webpack_exports__["Z"] = (listItemTextClasses);

/***/ }),

/***/ 78055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectAlert; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71508);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46259);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62070);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20528);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79104);
/* harmony import */ var _buttons_ConnectButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13456);
/* harmony import */ var _hooks_useDevices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18891);
/* harmony import */ var _jacdac_providerbus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42758);
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
function NoSsrConnectAlert(props){var{serviceClass,closeable}=props;var{bus}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);var{transports}=bus;var devices=(0,_hooks_useDevices__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({serviceClass,ignoreInfrastructure:true});var spec=(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass);// don't show if no transport, some devices
if(!_jacdac_providerbus__WEBPACK_IMPORTED_MODULE_6__/* .UIFlags.connect */ .A.connect&&!transports.length||devices!==null&&devices!==void 0&&devices.length)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{displayPrint:"none"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,{severity:"info",closeable:closeable},!spec&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",null,"Did you connect your device?"),spec&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",null,"Did you connect a ",spec.name," device?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{component:"span",ml:2},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButtons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{full:"always",transparent:true}))));}function ConnectAlert(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert,props));}

/***/ }),

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

/***/ 16052:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontmatter": function() { return /* binding */ frontmatter; },
/* harmony export */   "Head": function() { return /* binding */ Head; },
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7687);
/* harmony import */ var _jacdac_providerbus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42758);
/* harmony import */ var _components_shell_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94597);
/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5355);



var frontmatter = {
  title: "Dashboard"
};


var Head = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shell_Head__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, Object.assign({}, props, frontmatter));
function Page() {
  var {
    drawerType,
    setDrawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (drawerType === _components_AppContext__WEBPACK_IMPORTED_MODULE_4__/* .DrawerType.Dashboard */ .jw.Dashboard) setDrawerType(_components_AppContext__WEBPACK_IMPORTED_MODULE_4__/* .DrawerType.None */ .jw.None);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    showAvatar: true,
    showHeader: true,
    showConnect: _jacdac_providerbus__WEBPACK_IMPORTED_MODULE_2__/* .UIFlags.connect */ .A.connect,
    showStartSimulators: true,
    showStartRoleSimulators: true,
    showDeviceProxyAlert: true
  });
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-dashboard-tsx-75442ac150e3eeab308c.js.map