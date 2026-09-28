"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[579],{

/***/ 79782:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)([/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M11.25 5h1.5v10h-1.5zM8.5 7H10v6H8.5zM6 9h1.5v2H6zm8-2h1.5v6H14zm2.5 2H18v2h-1.5z"
}, "1")], 'VoiceChat');
exports.Z = _default;

/***/ }),

/***/ 20579:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardSpeechSynthesis; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94659);
/* harmony import */ var _mui_icons_material_VoiceChat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79782);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10662);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71670);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22878);
function DashboardSpeechSynthesis(props){var{service}=props;var enabled=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SpeechSynthesisReg.Enabled */ .b3j.Enabled);var{0:text,1:setText}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("jacdac");var textId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var handleChange=ev=>{var newValue=ev.target.value;setText(newValue);};var handleSpeak=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function*(){console.log("speak "+text);if(!enabled.boolValue)yield enabled.sendSetAsync((0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("u8",[true]),true);yield service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SpeechSynthesisCmd.Speak */ .AWi.Speak,(0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("s",[text]));});return function handleSpeak(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{id:textId,spellCheck:false,value:text,label:"speech synthesis",helperText:"Enter text to speak out",onChange:handleChange,type:"text"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{disabled:!text,title:"speak text",onClick:handleSpeak,icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_VoiceChat__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null)})));}

/***/ })

}]);
//# sourceMappingURL=579-2cdeb8f58c6119e817e9.js.map