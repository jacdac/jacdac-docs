"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8821],{

/***/ 26307:
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
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), 'Send');
exports.Z = _default;

/***/ }),

/***/ 8821:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardCODALMessageBus; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36807);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94659);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26307);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10662);
function DashboardCODALMessageBus(props){var{service}=props;var sourceId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var valueId=sourceId+"value";var{0:source,1:setSource}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");var{0:value,1:setValue}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");var nsource=parseInt(source);var nvalue=parseInt(value);var disabled=isNaN(nsource)||isNaN(nvalue);var handleSourceChange=ev=>setSource(ev.target.value.trim());var handleValueChange=ev=>setValue(ev.target.value.trim());var handleSend=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function*(){return yield service.sendCmdPackedAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .CodalMessageBusCmd.Send */ .QxS.Send,[nsource,nvalue],true);});return function handleSend(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{container:true,spacing:1,direction:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{item:true,xs:12,md:5},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{type:"number",id:sourceId,label:"Source",value:source,onChange:handleSourceChange,error:!!source&&isNaN(nsource),helperText:isNaN(nsource)?"source must be an unsigned number":"source of the message"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{item:true,xs:12,md:5},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{type:"number",id:valueId,label:"Value",value:value,onChange:handleValueChange,error:!!value&&isNaN(nvalue),helperText:isNaN(nvalue)?"value must be an unsigned number":"value of the message"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{title:"send message",disabled:disabled,onClick:handleSend},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,null))));}

/***/ })

}]);
//# sourceMappingURL=8821-ec2d0208f626986ee286.js.map