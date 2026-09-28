"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9287],{

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

/***/ 59287:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardCursorCharacterScreen; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94659);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22878);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10662);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(63343);
/* harmony import */ var _widgets_CharacterScreenWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50374);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47644);
/* harmony import */ var _jacdac_ts_src_servers_cursorcharscreenserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20495);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75938);
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27761);
function DashboardCursorCharacterScreen(props){var{service,expanded}=props;var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,()=>new _jacdac_ts_src_servers_cursorcharscreenserver__WEBPACK_IMPORTED_MODULE_6__/* .CursorCharacterScreenServer */ .P());var rowsRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CursorCharacterScreenReg.Rows */ .yxC.Rows);var columnsRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CursorCharacterScreenReg.Columns */ .yxC.Columns);var enabledRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CursorCharacterScreenReg.Enabled */ .yxC.Enabled);var[rows]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(rowsRegister,props);var[columns]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(columnsRegister,props);var[enabled]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(enabledRegister,props);var{0:screen,1:setScreen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(server.screen);var{0:fieldMessage,1:setFieldMessage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(screen);var handleClear=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function*(){setFieldMessage("");server.clear();});return function handleClear(){return _ref.apply(this,arguments);};}();var handleFieldMessageChange=/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function*(ev){setFieldMessage(ev.target.value);server.clear();server.show(ev.target.value);});return function handleFieldMessageChange(_x){return _ref2.apply(this,arguments);};}();// listen for clear command
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>server.subscribe(_jacdac_ts_src_servers_cursorcharscreenserver__WEBPACK_IMPORTED_MODULE_6__/* .CursorCharacterScreenServer.UPDATE */ .P.UPDATE,()=>{setScreen(server.screen);}),[server]);if(rows===undefined||columns===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{register:rows===undefined?rowsRegister:columnsRegister});// size unknown
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{container:true,spacing:1},expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{container:true,spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{label:(0,_translations__WEBPACK_IMPORTED_MODULE_8__.tL)("text"),value:fieldMessage,onChange:handleFieldMessageChange,multiline:true,rows:rows||2,fullWidth:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:(0,_translations__WEBPACK_IMPORTED_MODULE_8__.tL)("clear the entire display"),onClick:handleClear,icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,null)})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CharacterScreenWidget__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{rows:rows,columns:columns,rtl:false,message:screen,disabled:enabled===0})));}

/***/ }),

/***/ 50374:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ CharacterScreenWidget; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98816);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2874);
function CharacterScreenWidget(props){var{rows,columns,message,rtl,disabled}=props;var{textPrimary,background,controlBackground}=(0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("primary");var cw=8;var ch=10;var m=1;var mo=2;var fs=8;var w=columns*(cw+m)-m+2*mo;var h=rows*(ch+m)-m+2*mo;var lines=(message||"").split(/\n/g);var els=[];var y=mo;for(var row=0;row<rows;++row){var x=mo;var line=lines[row];for(var column=0;column<columns;++column){var char=line===null||line===void 0?void 0:line[rtl?columns-1-column:column];els.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{key:row+"-"+column},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:x,y:y,width:cw,height:ch,fill:controlBackground}),char&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text",{x:x+cw/2,y:y+ch-fs/3,textAnchor:"middle",fontSize:fs,style:{fontFamily:"monospace",fontWeight:100},fill:disabled?background:textPrimary,"aria-label":char},char)));x+=cw+m;}y+=ch+m;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{tabIndex:0,title:"character screen displaying \""+message+"\"",width:w,height:h},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:0,y:0,width:w,height:h,r:m/2,fill:background}),els));}

/***/ })

}]);
//# sourceMappingURL=9287-772d317adcce8d7c67f5.js.map