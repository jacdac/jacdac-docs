"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5959],{

/***/ 85959:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardCharacterScreen; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94659);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22878);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10662);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63343);
/* harmony import */ var _widgets_CharacterScreenWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50374);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47644);
// https://en.wikipedia.org/wiki/Braille_ASCII
var BRAILE_CHARACTERS={" ":"⠀",// space bar to dot-0
"-":"⠤",",":"⠠",";":"⠰",":":"⠱","!":"⠮","?":"⠹",".":"⠨","(":"⠷","[":"⠪","@":"⠈","*":"⠡","/":"⠌","'":"⠄",'"':"⠐","\\":"⠳","&":"⠯","%":"⠩","^":"⠘","+":"⠬","<":"⠣",">":"⠜",$:"⠫","0":"⠴","1":"⠂","2":"⠆","3":"⠒","4":"⠲","5":"⠢","6":"⠖","7":"⠶","8":"⠦","9":"⠔",A:"⠁",B:"⠃",C:"⠉",D:"⠙",E:"⠑",F:"⠋",G:"⠛",H:"⠓",I:"⠊",J:"⠚",K:"⠅",L:"⠇",M:"⠍",N:"⠝",O:"⠕",P:"⠏",Q:"⠟",R:"⠗",S:"⠎",T:"⠞",U:"⠥",V:"⠧",W:"⠺",X:"⠭",Z:"⠵","]":"⠻","#":"⠼",Y:"⠽",")":"⠾","=":"⠿",_:"⠸"};function brailify(s){if(!s)return s;var r="";var su=s.toLocaleUpperCase();for(var i=0;i<su.length;++i){r+=BRAILE_CHARACTERS[su.charAt(i)]||"?";}return r;}function DashboardCharacterScreen(props){var{service,expanded}=props;var messageRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Message */ .OEJ.Message);var rowsRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Rows */ .OEJ.Rows);var columnsRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Columns */ .OEJ.Columns);var textDirectionRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.TextDirection */ .OEJ.TextDirection);var variantRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Variant */ .OEJ.Variant);var brightnessRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Brightness */ .OEJ.Brightness);var[message]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(messageRegister,props);var[rows]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(rowsRegister,props);var[columns]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(columnsRegister,props);var[textDirection]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(textDirectionRegister,props);var[variant]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(variantRegister,props);var[brightness]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(brightnessRegister,props);var{0:fieldMessage,1:setFieldMessage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(message);var handleClear=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function*(){setFieldMessage("");yield messageRegister.sendSetStringAsync("",true);});return function handleClear(){return _ref.apply(this,arguments);};}();var handleFieldMessageChange=/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function*(ev){setFieldMessage(ev.target.value);yield messageRegister.sendSetStringAsync(ev.target.value,true);});return function handleFieldMessageChange(_x){return _ref2.apply(this,arguments);};}();// set first value of message
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!fieldMessage&&message)setFieldMessage(message);},[message]);if(rows===undefined||columns===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{register:rows===undefined?rowsRegister:columnsRegister});// size unknown
var converter=variant===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenVariant.Braille */ .GLh.Braille?brailify:s=>s;var cmessage=message===null||message===void 0?void 0:message.split("").map(converter).join("");var rtl=textDirection===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenTextDirection.RightToLeft */ .mbk.RightToLeft;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{container:true,spacing:1},expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{container:true,spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{label:"text",value:fieldMessage,onChange:handleFieldMessageChange,multiline:true,rows:rows||2,fullWidth:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:"clear the entire display",onClick:handleClear,icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,null)})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CharacterScreenWidget__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{rows:rows,columns:columns,rtl:rtl,message:cmessage,disabled:brightness===0})));}

/***/ })

}]);
//# sourceMappingURL=5959-b664e1359831c8c9ea27.js.map