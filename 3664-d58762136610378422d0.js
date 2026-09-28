"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3664],{

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

/***/ 23664:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardRos; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75938);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94659);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63339);
/* harmony import */ var _jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21149);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10662);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26307);
function RosMessageEditor(props){var{service}=props;var id=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var nodeId=id+"-node";var topicId=id+"-topic";var messageId=id+"-message";var{0:node,1:setNode}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("dashboard");var{0:topic,1:setTopic}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");var{0:message,1:setMessage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");var handleNode=event=>setNode(event.target.value);var handleTopic=event=>setTopic(event.target.value);var handleMessage=event=>setMessage(event.target.value);var handlePublish=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function*(){yield service.sendCmdPackedAsync(_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_3__.RosCmd.PublishMessage,[node,topic,message]);});return function handlePublish(){return _ref.apply(this,arguments);};}();var jmsg=(0,_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_3__.JSONTryParse)(message);var disabled=!node||!topic||!jmsg;var error=message&&!jmsg?"Invalid JSON":undefined;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{id:nodeId,margin:"normal",type:"text",spellCheck:"false",size:"small",variant:"outlined",label:"Node","aria-label":"Node name",fullWidth:true,value:node,onChange:handleNode})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{id:topicId,margin:"normal",type:"text",spellCheck:"false",size:"small",variant:"outlined",label:"Topic","aria-label":"Topic",fullWidth:true,value:topic,onChange:handleTopic})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{id:messageId,margin:"normal",type:"text",spellCheck:"false",size:"small",variant:"outlined",label:"Message (JSON)","aria-label":"Message (JSON)",fullWidth:true,value:message,onChange:handleMessage,helperText:error,error:!!error})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{onClick:handlePublish,disabled:disabled,variant:"outlined",icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null)},"Publish")));}function DashboardRos(props){var{service,expanded}=props;var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(service);var subscriptions=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(server,_=>_===null||_===void 0?void 0:_.subscriptions);var messages=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(server,_=>_===null||_===void 0?void 0:_.messages);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{container:true,spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{item:true,xs:12},"ROS"),expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RosMessageEditor,{service:service})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",{style:{width:"100%",whiteSpace:"pre-wrap",fontSize:"70%"}},"subscriptions: "+(subscriptions===null||subscriptions===void 0?void 0:subscriptions.join("   \n"))+"\nmessages: "+(messages===null||messages===void 0?void 0:messages.map(_ref2=>{var{node,topic,message}=_ref2;return node+" "+topic+" "+JSON.stringify(message);}).join("    \n")))));}

/***/ })

}]);
//# sourceMappingURL=3664-d58762136610378422d0.js.map