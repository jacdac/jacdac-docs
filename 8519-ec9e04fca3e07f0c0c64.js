"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8519],{

/***/ 31846:
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
  d: "M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"
}), 'Keyboard');
exports.Z = _default;

/***/ }),

/***/ 88519:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardHIDKeyboard; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15725);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36807);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71670);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10662);
/* harmony import */ var _mui_icons_material_Keyboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31846);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19811);
/* harmony import */ var _jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21149);
var KeyboardKeyInput=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(8206)]).then(__webpack_require__.bind(__webpack_require__, 28206)));function DashboardHIDKeyboard(props){var{service,expanded}=props;var{0:selector,1:setSelector}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);var{0:modifiers,1:setModifiers}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.None */ .Q2Q.None);var{0:keys,1:setKeys}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>service===null||service===void 0?void 0:service.subscribe(_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_5__.COMMAND_RECEIVE,pkt=>{var[rest]=pkt.jdunpack(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardCmdPack.Key */ .E$T.Key);setKeys((rest===null||rest===void 0?void 0:rest.map(_ref=>{var[selector,modifiers]=_ref;return (0,_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_5__.renderKeyboardKey)(selector,modifiers,true);}).join(", "))||"");}),[service]);var handleKeyChange=(newSelector,newModifiers)=>{setSelector(newSelector);setModifiers(newModifiers);};var handleClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function*(){var unpacked=[[[selector,modifiers,_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardAction.Press */ .gBd.Press]]];var data=(0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("r: u16 u8 u8",unpacked);yield service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardCmd.Key */ .Fnq.Key,data);}),[selector,modifiers,service]);var disabled=!selector&&!modifiers;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,{container:true,direction:"column",spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",null,keys||"HID keyboard waiting...")),expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KeyboardKeyInput,{selector:selector,modifiers:modifiers,onChange:handleKeyChange}))),expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{variant:"outlined",title:"send keys",disabled:disabled,onClick:handleClick,icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Keyboard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null)},"Send keys")));}

/***/ })

}]);
//# sourceMappingURL=8519-ec9e04fca3e07f0c0c64.js.map