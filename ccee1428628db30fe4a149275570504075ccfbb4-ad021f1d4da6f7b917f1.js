"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2976,9927,4300],{

/***/ 49161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CardActions_CardActions; }
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
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/cardActionsClasses.js


function getCardActionsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCardActions', slot);
}
const cardActionsClasses = (0,generateUtilityClasses/* default */.Z)('MuiCardActions', ['root', 'spacing']);
/* harmony default export */ var CardActions_cardActionsClasses = ((/* unused pure expression or super */ null && (cardActionsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/CardActions.js


const _excluded = ["disableSpacing", "className"];








const useUtilityClasses = ownerState => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ['root', !disableSpacing && 'spacing']
  };
  return (0,composeClasses/* default */.Z)(slots, getCardActionsUtilityClass, classes);
};
const CardActionsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiCardActions',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'flex',
  alignItems: 'center',
  padding: 8
}, !ownerState.disableSpacing && {
  '& > :not(:first-of-type)': {
    marginLeft: 8
  }
}));
const CardActions = /*#__PURE__*/react.forwardRef(function CardActions(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCardActions'
  });
  const {
      disableSpacing = false,
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardActionsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var CardActions_CardActions = (CardActions);

/***/ }),

/***/ 42643:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CardContent_CardContent; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
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
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardContent/cardContentClasses.js


function getCardContentUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCardContent', slot);
}
const cardContentClasses = (0,generateUtilityClasses/* default */.Z)('MuiCardContent', ['root']);
/* harmony default export */ var CardContent_cardContentClasses = ((/* unused pure expression or super */ null && (cardContentClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardContent/CardContent.js


const _excluded = ["className", "component"];








const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getCardContentUtilityClass, classes);
};
const CardContentRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiCardContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => {
  return {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  };
});
const CardContent = /*#__PURE__*/react.forwardRef(function CardContent(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCardContent'
  });
  const {
      className,
      component = 'div'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardContentRoot, (0,esm_extends/* default */.Z)({
    as: component,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var CardContent_CardContent = (CardContent);

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

/***/ 63461:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Skeleton_Skeleton; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(70917);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/cssUtils.js
var cssUtils = __webpack_require__(88606);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(41796);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Skeleton/skeletonClasses.js


function getSkeletonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiSkeleton', slot);
}
const skeletonClasses = (0,generateUtilityClasses/* default */.Z)('MuiSkeleton', ['root', 'text', 'rectangular', 'rounded', 'circular', 'pulse', 'wave', 'withChildren', 'fitContent', 'heightAuto']);
/* harmony default export */ var Skeleton_skeletonClasses = ((/* unused pure expression or super */ null && (skeletonClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Skeleton/Skeleton.js


const _excluded = ["animation", "className", "component", "height", "style", "variant", "width"];
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;










const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    animation,
    hasChildren,
    width,
    height
  } = ownerState;
  const slots = {
    root: ['root', variant, animation, hasChildren && 'withChildren', hasChildren && !width && 'fitContent', hasChildren && !height && 'heightAuto']
  };
  return (0,composeClasses/* default */.Z)(slots, getSkeletonUtilityClass, classes);
};
const pulseKeyframe = (0,emotion_react_browser_esm.keyframes)(_t || (_t = _`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`));
const waveKeyframe = (0,emotion_react_browser_esm.keyframes)(_t2 || (_t2 = _`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`));
const SkeletonRoot = (0,styled/* default */.ZP)('span', {
  name: 'MuiSkeleton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], ownerState.animation !== false && styles[ownerState.animation], ownerState.hasChildren && styles.withChildren, ownerState.hasChildren && !ownerState.width && styles.fitContent, ownerState.hasChildren && !ownerState.height && styles.heightAuto];
  }
})(({
  theme,
  ownerState
}) => {
  const radiusUnit = (0,cssUtils/* getUnit */.Wy)(theme.shape.borderRadius) || 'px';
  const radiusValue = (0,cssUtils/* toUnitless */.YL)(theme.shape.borderRadius);
  return (0,esm_extends/* default */.Z)({
    display: 'block',
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: theme.vars ? theme.vars.palette.Skeleton.bg : (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, theme.palette.mode === 'light' ? 0.11 : 0.13),
    height: '1.2em'
  }, ownerState.variant === 'text' && {
    marginTop: 0,
    marginBottom: 0,
    height: 'auto',
    transformOrigin: '0 55%',
    transform: 'scale(1, 0.60)',
    borderRadius: `${radiusValue}${radiusUnit}/${Math.round(radiusValue / 0.6 * 10) / 10}${radiusUnit}`,
    '&:empty:before': {
      content: '"\\00a0"'
    }
  }, ownerState.variant === 'circular' && {
    borderRadius: '50%'
  }, ownerState.variant === 'rounded' && {
    borderRadius: (theme.vars || theme).shape.borderRadius
  }, ownerState.hasChildren && {
    '& > *': {
      visibility: 'hidden'
    }
  }, ownerState.hasChildren && !ownerState.width && {
    maxWidth: 'fit-content'
  }, ownerState.hasChildren && !ownerState.height && {
    height: 'auto'
  });
}, ({
  ownerState
}) => ownerState.animation === 'pulse' && (0,emotion_react_browser_esm.css)(_t3 || (_t3 = _`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `), pulseKeyframe), ({
  ownerState,
  theme
}) => ownerState.animation === 'wave' && (0,emotion_react_browser_esm.css)(_t4 || (_t4 = _`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), waveKeyframe, (theme.vars || theme).palette.action.hover));
const Skeleton = /*#__PURE__*/react.forwardRef(function Skeleton(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiSkeleton'
  });
  const {
      animation = 'pulse',
      className,
      component = 'span',
      height,
      style,
      variant = 'text',
      width
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    animation,
    component,
    variant,
    hasChildren: Boolean(other.children)
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(SkeletonRoot, (0,esm_extends/* default */.Z)({
    as: component,
    ref: ref,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState
  }, other, {
    style: (0,esm_extends/* default */.Z)({
      width,
      height
    }, style)
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Skeleton_Skeleton = (Skeleton);

/***/ }),

/***/ 67489:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ SensorAggregatorClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94578);
/* harmony import */ var _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36807);
/* harmony import */ var _jdom_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98172);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3964);
/* harmony import */ var _jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71670);
/* harmony import */ var _jdom_serviceclient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52102);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62070);
/* harmony import */ var _jdom_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46196);
/**
 * A client for the sensor aggregator service
 * @category Clients
 */var SensorAggregatorClient=/*#__PURE__*/function(_JDServiceClient){(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(SensorAggregatorClient,_JDServiceClient);function SensorAggregatorClient(service){var _this;_this=_JDServiceClient.call(this,service)||this;(0,_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .assert */ .hu)(service.serviceClass===_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_SENSOR_AGGREGATOR */ .x12);_this.service.registersUseAcks=true;return _this;}var _proto=SensorAggregatorClient.prototype;_proto.setInputs=/*#__PURE__*/function(){var _setInputs=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function*(cfg){var _cfg$inputs;function error(msg){throw new Error("Aggregator inputs: "+msg);}function mapType(tp){switch(tp){case 1:return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.U8 */ .HEd.U8;case 2:return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.U16 */ .HEd.U16;case 4:return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.U32 */ .HEd.U32;case-1:return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.I8 */ .HEd.I8;case-2:return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.I16 */ .HEd.I16;case-4:return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.I32 */ .HEd.I32;default:error("unknown storage type");}}if(!cfg||!cfg.inputs)error("invalid input format");var totalSampleSize=0;var inputs=(_cfg$inputs=cfg.inputs)===null||_cfg$inputs===void 0?void 0:_cfg$inputs.map(input=>{var{deviceId,serviceIndex,serviceClass}=input;if(!!deviceId!==!!serviceIndex)error("deviceId and serviceIndex must be specified together");var specification=(0,_jdom_spec__WEBPACK_IMPORTED_MODULE_5__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass);if(!specification)error("missing specification from service 0x"+serviceClass.toString(16));var freeze=!!deviceId;var readingReg=specification.packets.find(_jdom_spec__WEBPACK_IMPORTED_MODULE_5__/* .isReading */ .vz);if(!readingReg)error("service 0x"+serviceClass.toString(16)+" does not have a reading register");var sampleType=undefined;var sampleSize=0;var sampleShift=0;for(var field of readingReg.fields){sampleSize+=Math.abs(field.storage);if(sampleType===undefined){sampleType=mapType(field.storage);sampleShift=field.shift||0;}if(sampleType!=mapType(field.storage)||sampleShift!=(field.shift||0))error("heterogenous field types");}totalSampleSize+=sampleSize;return (0,_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .bufferConcat */ .gX)(freeze?(0,_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .fromHex */ .H_)(deviceId):new Uint8Array(8),(0,_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("u32 u8 u8 u8 i8",[serviceClass,freeze?serviceIndex:0,sampleSize,sampleType,sampleShift]));});if(totalSampleSize>_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .JD_SERIAL_MAX_PAYLOAD_SIZE */ .MdP)error("samples won't fit in packet");// u32 is x[4]
inputs.unshift((0,_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("u16 u16 u32",[cfg.samplingInterval,cfg.samplesInWindow,0]));yield this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.Inputs */ .HUt.Inputs).sendSetAsync((0,_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .bufferConcatMany */ .Gb)(inputs));});function setInputs(_x){return _setInputs.apply(this,arguments);}return setInputs;}();_proto.collect=/*#__PURE__*/function(){var _collect=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function*(numSamples){yield this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.StreamingSamples */ .HUt.StreamingSamples).sendSetPackedAsync([numSamples]);});function collect(_x2){return _collect.apply(this,arguments);}return collect;}();_proto.subscribeSample=function subscribeSample(handler){var reg=this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.CurrentSample */ .HUt.CurrentSample);return this.mount(reg.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .REPORT_RECEIVE */ .Gb8,()=>handler((0,_jdom_buffer__WEBPACK_IMPORTED_MODULE_1__/* .bufferToArray */ ._W)(reg.data,_jdom_buffer__WEBPACK_IMPORTED_MODULE_1__/* .NumberFormat.Float32LE */ .y4.Float32LE))));};_proto.getReg=/*#__PURE__*/function(){var _getReg=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function*(id,f){var reg=this.service.register(id);yield reg.refresh();return f(reg);});function getReg(_x3,_x4){return _getReg.apply(this,arguments);}return getReg;}();_proto.stats=/*#__PURE__*/function(){var _stats=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function*(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
var info={numSamples:this.getReg(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.NumSamples */ .HUt.NumSamples,r=>r.intValue),sampleSize:this.getReg(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.SampleSize */ .HUt.SampleSize,r=>r.intValue)};for(var id of Object.keys(info)){info[id]=yield info[id];}return info;});function stats(){return _stats.apply(this,arguments);}return stats;}();return SensorAggregatorClient;}(_jdom_serviceclient__WEBPACK_IMPORTED_MODULE_4__/* .JDServiceClient */ .P);

/***/ }),

/***/ 32589:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": function() { return /* binding */ DeviceLostAlert; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63339);
/* harmony import */ var _jacdac_useEventRaised__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88286);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46259);
function DeviceLostAlert(props){var{device}=props;var lost=(0,_jacdac_useEventRaised__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)([_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .LOST */ .XWw,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .FOUND */ .a6y],device,dev=>!!(dev!==null&&dev!==void 0&&dev.lost));var flashing=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(device,_=>(_===null||_===void 0?void 0:_.bootloader)||!!(_!==null&&_!==void 0&&_.firmwareUpdater));if(!lost||flashing)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{severity:"info"},"Device lost...");}

/***/ }),

/***/ 21979:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DeviceCardHeader; }
});

// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(18515);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/devices/DeviceActions.tsx
var DeviceActions = __webpack_require__(42714);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(9400);
// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__(11352);
// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__(36141);
// EXTERNAL MODULE: ./node_modules/@mui/material/Skeleton/Skeleton.js + 1 modules
var Skeleton = __webpack_require__(63461);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardMedia/CardMedia.js + 1 modules
var CardMedia = __webpack_require__(54962);
;// CONCATENATED MODULE: ./src/components/ui/CardMediaWithSkeleton.tsx
function CardMediaWithSkeleton(props){var{image,src,aspectRatio="4 / 3",title}=props;var hasImage=!!image||!!src;if(!hasImage)return/*#__PURE__*/react.createElement(Skeleton/* default */.Z,{sx:{aspectRatio},width:"100%"});return/*#__PURE__*/react.createElement(CardMedia/* default */.Z,{component:"img",image:image,src:src,alt:title,sx:{aspectRatio}});}
;// CONCATENATED MODULE: ./src/components/devices/DeviceCardMedia.tsx
function DeviceCardMedia(props){var{device}=props;var specification=(0,useDeviceSpecification/* default */.ZP)(device);var imageUrl=(0,useDeviceImage/* default */.Z)(specification,"preview");return/*#__PURE__*/react.createElement(CardMediaWithSkeleton,{image:imageUrl,title:specification===null||specification===void 0?void 0:specification.name});}
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 1 modules
var DeviceAvatar = __webpack_require__(30841);
// EXTERNAL MODULE: ./src/jacdac/useDeviceDescription.ts
var useDeviceDescription = __webpack_require__(69461);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
;// CONCATENATED MODULE: ./src/components/devices/DeviceCardHeader.tsx
// tslint:disable-next-line: no-submodule-imports
var DeviceFirmwareVersionChip=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(8857), __webpack_require__.e(317), __webpack_require__.e(1639)]).then(__webpack_require__.bind(__webpack_require__, 31639)));var DeviceTemperatureChip=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(8857), __webpack_require__.e(317), __webpack_require__.e(6965)]).then(__webpack_require__.bind(__webpack_require__, 46366)));function DeviceCardHeader(props){var{device,showFirmware,showTemperature,showMedia,showDeviceId,showAvatar,showSettings,showReset,showDescription}=props;var specification=(0,useDeviceSpecification/* default */.ZP)(device);var description=(0,useDeviceDescription/* default */.Z)(showDescription&&device);return/*#__PURE__*/react.createElement(react.Fragment,null,showMedia&&/*#__PURE__*/react.createElement(DeviceCardMedia,{device:device}),/*#__PURE__*/react.createElement(CardHeader/* default */.Z,{avatar:showAvatar&&/*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z,{device:device}),action:/*#__PURE__*/react.createElement(DeviceActions/* default */.Z,{device:device,showReset:showReset,showSettings:showSettings,hideIdentity:showAvatar}),title:/*#__PURE__*/react.createElement(DeviceName/* default */.Z,{device:device,linkToSpecification:true}),subheader:/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption",gutterBottom:true},[specification===null||specification===void 0?void 0:specification.name,showDeviceId&&device.deviceId,showDescription&&description].filter(s=>!!s).join(", "))),showFirmware&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceFirmwareVersionChip,{device:device}))),showTemperature&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceTemperatureChip,{device:device}))))}));}

/***/ }),

/***/ 44300:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5355);
function useGridBreakpoints(itemCount){var{drawerType}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);var hasDrawer=drawerType!==_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None;if(!drawerType&&itemCount!==undefined){switch(itemCount){case 1:case 2:case 3:return{xs:12,sm:6,md:6,lg:4,xl:4};}}if(hasDrawer)return{xs:12,md:6,sm:6,lg:6,xl:4};else return{xs:12,sm:6,md:4,lg:4,xl:3};}

/***/ })

}]);
//# sourceMappingURL=ccee1428628db30fe4a149275570504075ccfbb4-ad021f1d4da6f7b917f1.js.map