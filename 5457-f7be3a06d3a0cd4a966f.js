"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5457],{

/***/ 15457:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardRealTimeClock; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2658);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22878);
/* harmony import */ var _mui_icons_material_Sync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51334);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10662);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47644);
function DashboardRealTimeClock(props){var{service,expanded}=props;var localTimeRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .RealTimeClockReg.LocalTime */ .AEe.LocalTime);var[year,month,dayOfMonth,dayOfWeek,hour,min,seconds]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(localTimeRegister,props);var handleSync=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function*(){var now=new Date();var year=now.getFullYear();var month=now.getMonth()+1;var dayOfMonth=now.getDate();var dayOfWeek=now.getDay();var hour=now.getHours();var min=now.getMinutes();var second=now.getSeconds();yield service.sendCmdPackedAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .RealTimeClockCmd.SetTime */ .BL8.SetTime,[year,month,dayOfMonth,dayOfWeek,hour,min,second]);});return function handleSync(){return _ref.apply(this,arguments);};}();if(year===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{register:localTimeRegister});var t=new Date(year,month-1,dayOfMonth,hour,min,seconds);var date=t.toLocaleDateString();var time=t.toLocaleTimeString();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,{container:true,spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,{container:true,spacing:1,direction:"column"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{align:"left",tabIndex:0,role:"timer","aria-label":date,variant:"subtitle2"},date)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{align:"center",tabIndex:0,role:"timer","aria-label":time,variant:"subtitle1"},time)))),expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:"Sync time",onClick:handleSync,icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Sync__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,null)},"Sync")));}

/***/ })

}]);
//# sourceMappingURL=5457-f7be3a06d3a0cd4a966f.js.map