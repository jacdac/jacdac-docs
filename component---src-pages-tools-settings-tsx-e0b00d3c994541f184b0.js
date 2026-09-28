"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5560,9927,4659],{

/***/ 96540:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');
exports.Z = _default;

/***/ }),

/***/ 41733:
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');
exports.Z = _default;

/***/ }),

/***/ 74490:
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
  d: "m12 16.5 4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"
}), 'SystemUpdateAlt');
exports.Z = _default;

/***/ }),

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

/***/ 94659:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TextField_TextField; }
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
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useId.js
var useId = __webpack_require__(57579);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/Input/Input.js
var Input = __webpack_require__(79332);
// EXTERNAL MODULE: ./node_modules/@mui/material/FilledInput/FilledInput.js
var FilledInput = __webpack_require__(6135);
// EXTERNAL MODULE: ./node_modules/@mui/material/OutlinedInput/OutlinedInput.js + 1 modules
var OutlinedInput = __webpack_require__(32580);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputLabel/InputLabel.js + 3 modules
var InputLabel = __webpack_require__(27666);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(76446);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormHelperText/FormHelperText.js + 1 modules
var FormHelperText = __webpack_require__(3460);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 4 modules
var Select = __webpack_require__(56036);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TextField/textFieldClasses.js


function getTextFieldUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTextField', slot);
}
const textFieldClasses = (0,generateUtilityClasses/* default */.Z)('MuiTextField', ['root']);
/* harmony default export */ var TextField_textFieldClasses = ((/* unused pure expression or super */ null && (textFieldClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TextField/TextField.js


const _excluded = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];

















const variantComponent = {
  standard: Input/* default */.Z,
  filled: FilledInput/* default */.Z,
  outlined: OutlinedInput/* default */.Z
};
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTextFieldUtilityClass, classes);
};
const TextFieldRoot = (0,styled/* default */.ZP)(FormControl/* default */.Z, {
  name: 'MuiTextField',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});

/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/material-ui/api/form-control/)
 * - [InputLabel](/material-ui/api/input-label/)
 * - [FilledInput](/material-ui/api/filled-input/)
 * - [OutlinedInput](/material-ui/api/outlined-input/)
 * - [Input](/material-ui/api/input/)
 * - [FormHelperText](/material-ui/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */
const TextField = /*#__PURE__*/react.forwardRef(function TextField(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTextField'
  });
  const {
      autoComplete,
      autoFocus = false,
      children,
      className,
      color = 'primary',
      defaultValue,
      disabled = false,
      error = false,
      FormHelperTextProps,
      fullWidth = false,
      helperText,
      id: idOverride,
      InputLabelProps,
      inputProps,
      InputProps,
      inputRef,
      label,
      maxRows,
      minRows,
      multiline = false,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required = false,
      rows,
      select = false,
      SelectProps,
      type,
      value,
      variant = 'outlined'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  if (false) {}
  const InputMore = {};
  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }
    InputMore.label = label;
  }
  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }
    InputMore['aria-describedby'] = undefined;
  }
  const id = (0,useId/* default */.Z)(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const InputComponent = variantComponent[variant];
  const InputElement = /*#__PURE__*/(0,jsx_runtime.jsx)(InputComponent, (0,esm_extends/* default */.Z)({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    maxRows: maxRows,
    minRows: minRows,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TextFieldRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    ref: ref,
    required: required,
    color: color,
    variant: variant,
    ownerState: ownerState
  }, other, {
    children: [label != null && label !== '' && /*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.Z, (0,esm_extends/* default */.Z)({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), select ? /*#__PURE__*/(0,jsx_runtime.jsx)(Select/* default */.Z, (0,esm_extends/* default */.Z)({
      "aria-describedby": helperTextId,
      id: id,
      labelId: inputLabelId,
      value: value,
      input: InputElement
    }, SelectProps, {
      children: children
    })) : InputElement, helperText && /*#__PURE__*/(0,jsx_runtime.jsx)(FormHelperText/* default */.Z, (0,esm_extends/* default */.Z)({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var TextField_TextField = (TextField);

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

/***/ 26785:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceProviderFromServiceClass; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43850);
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26040);
function useServiceProviderFromServiceClass(serviceClass){var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();// run once
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var devices=bus.devices({serviceClass});var def=!devices.length&&(0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__/* .serviceProviderDefinitionFromServiceClass */ .vd)(serviceClass);var provider=def&&(0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__/* .addServiceProvider */ .Q6)(bus,def);return()=>bus.removeServiceProvider(provider);},[serviceClass]);}

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

/***/ 2976:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ LoadingProgress; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59062);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function LoadingProgress(props){var{size}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{disableShrink:true,variant:"indeterminate",size:size||"1em","aria-label":"loading"});}

/***/ }),

/***/ 56691:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function useServiceClient(service,factory,deps){if(deps===void 0){deps=[];}var{0:client,1:setClient}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var c=service&&factory(service);setClient(c);return()=>c===null||c===void 0?void 0:c.unmount();},[service].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(deps)));// don't use factory in cache!
return client;}

/***/ }),

/***/ 55670:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": function() { return /* binding */ settings_Head; },
  "default": function() { return /* binding */ Page; },
  "frontmatter": function() { return /* binding */ frontmatter; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(78055);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(94659);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(65295);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(42643);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(49161);
// EXTERNAL MODULE: ./src/components/devices/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__(21979);
// EXTERNAL MODULE: ./src/jacdac/useServiceClient.ts
var useServiceClient = __webpack_require__(56691);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/clients/settingsclient.ts
var settingsclient = __webpack_require__(48492);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Delete.js
var Delete = __webpack_require__(41733);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx
var CmdButton = __webpack_require__(10662);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2976);
// EXTERNAL MODULE: ./src/components/ui/SwitchWithLabel.tsx
var SwitchWithLabel = __webpack_require__(68320);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/random.ts
var random = __webpack_require__(35246);
// EXTERNAL MODULE: ./node_modules/gatsby-material-ui-components/lib/index.js + 17 modules
var lib = __webpack_require__(3146);
// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 2 modules
var ServiceManagerContext = __webpack_require__(51188);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/SystemUpdateAlt.js
var SystemUpdateAlt = __webpack_require__(74490);
// EXTERNAL MODULE: ./src/components/hooks/useSnackbar.ts
var useSnackbar = __webpack_require__(37862);
// EXTERNAL MODULE: ./src/components/hooks/useAnalytics.tsx + 88 modules
var useAnalytics = __webpack_require__(92513);
;// CONCATENATED MODULE: ./src/components/SettingsCard.tsx
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: match-default-export-name no-submodule-imports
var ImportButton=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 7933).then(__webpack_require__.bind(__webpack_require__, 97933)));function SettingRow(props){var{client,name,value,mutable,autoKey}=props;var isSecret=name[0]=="$";var displayName=isSecret?name.slice(1):name;var handleComponentDelete=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(){yield client.deleteValue(name);});return function handleComponentDelete(){return _ref.apply(this,arguments);};}();var keyId=(0,react.useId)();var valueId=keyId+"-value";var nameError="";var valueError="";return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},!autoKey&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(TextField/* default */.Z,{id:keyId,error:!!nameError,variant:"outlined",label:"key",helperText:nameError,value:displayName,disabled:true})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:true},/*#__PURE__*/react.createElement(TextField/* default */.Z,{id:valueId,fullWidth:true,error:!!valueError,variant:"outlined",helperText:valueError,value:isSecret?"...":value,disabled:true})),mutable&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(CmdButton/* default */.Z,{trackName:"settings.delete",title:"Delete settings",onClick:handleComponentDelete,icon:/*#__PURE__*/react.createElement(Delete/* default */.Z,null)}))));}function AddSettingRow(props){var{client,keyPrefix,showSecrets,autoKey}=props;var{0:name,1:setName}=(0,react.useState)("");var{0:value,1:setValue}=(0,react.useState)("");var{0:secret,1:setSecret}=(0,react.useState)(showSecrets);var keyId=(0,react.useId)();var valueId=keyId+"-value";var handleNameChange=ev=>{setName(ev.target.value.trim());};var handleValueChange=ev=>{setValue(ev.target.value);};var handleChecked=(ev,checked)=>{setSecret(checked);};var handleAdd=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(function*(mounted){var keyName=autoKey?(0,random/* randomDeviceId */.b_)():name;var key=""+(secret?"$":"")+(keyPrefix||"")+keyName;yield client.setStringValue(key,value);if(!mounted())return;setName("");setValue("");setSecret(showSecrets);});return function handleAdd(_x){return _ref2.apply(this,arguments);};}();var keyError="";var valueError="";return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,alignContent:"center"},!autoKey&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(TextField/* default */.Z,{id:keyId,error:!!keyError,variant:"outlined",label:"Add key",helperText:keyError,value:name,onChange:handleNameChange})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:true},/*#__PURE__*/react.createElement(TextField/* default */.Z,{id:valueId,fullWidth:true,error:!!valueError,variant:"outlined",label:"value",helperText:valueError,value:value,onChange:handleValueChange})),showSecrets&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(SwitchWithLabel/* default */.Z,{checked:secret,onChange:handleChecked,label:"Secret"})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(CmdButton/* default */.Z,{trackName:"settings.add",variant:"contained",disabled:!autoKey&&!name||!!keyError||!!valueError,title:"Add setting",onClick:handleAdd,icon:/*#__PURE__*/react.createElement(Add/* default */.Z,null)}))));}function ImportSettingsButton(props){var{client}=props;var{setError}=(0,useSnackbar/* default */.Z)();var handleFilesUploaded=/*#__PURE__*/function(){var _ref3=(0,asyncToGenerator/* default */.Z)(function*(files){for(var file of files){try{var text=yield file.text();var json=JSON.parse(text);if(Array.isArray(json)){for(var entry of json){var{key,value}=entry;if(key)yield client.setStringValue(key,value);}}}catch(e){console.warn(e);setError("invalid file "+file.name);}}});return function handleFilesUploaded(_x2){return _ref3.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(ImportButton,{icon:false,text:"Import",onFilesUploaded:handleFilesUploaded,acceptedFiles:["application/json"]}));}function SettingsCard(props){var{service,mutable,keyPrefix="",showSecrets,autoKey}=props;var{fileStorage}=(0,react.useContext)(ServiceManagerContext/* default */.ZP);var{trackError}=(0,useAnalytics/* default */.ZP)();var factory=(0,react.useCallback)(srv=>new settingsclient/* SettingsClient */.F(srv),[]);var client=(0,useServiceClient/* default */.Z)(service,factory);var values=(0,useChange/* useChangeAsync */.R)(client,/*#__PURE__*/function(){var _ref4=(0,asyncToGenerator/* default */.Z)(function*(c){try{var keys=yield c===null||c===void 0?void 0:c.list();return keys===null||keys===void 0?void 0:keys.filter(_ref5=>{var{key}=_ref5;return!keyPrefix||key.startsWith(keyPrefix);}).map(_ref6=>{var{key,value}=_ref6;return{key,value:(0,utils/* bufferToString */.zT)(value)};});}catch(e){trackError(e);console.debug(e);return[];}});return function(_x3){return _ref4.apply(this,arguments);};}(),[keyPrefix]);var secrets=values===null||values===void 0?void 0:values.filter(value=>showSecrets&&value.key[0]==="$");var publics=values===null||values===void 0?void 0:values.filter(value=>value.key[0]!=="$");var handleClear=/*#__PURE__*/function(){var _ref7=(0,asyncToGenerator/* default */.Z)(function*(){return yield client===null||client===void 0?void 0:client.clear();});return function handleClear(){return _ref7.apply(this,arguments);};}();var handleExport=()=>fileStorage.saveText("settings.json",JSON.stringify(publics||{},null,2));if(!client)return/*#__PURE__*/react.createElement(LoadingProgress/* default */.Z,null);// wait till loaded
return/*#__PURE__*/react.createElement(Card/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z,{device:service.device,showAvatar:true}),/*#__PURE__*/react.createElement(CardContent/* default */.Z,null,/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:2},mutable&&/*#__PURE__*/react.createElement(AddSettingRow,{client:client,keyPrefix:keyPrefix,showSecrets:showSecrets,autoKey:autoKey}),publics===null||publics===void 0?void 0:publics.map(_ref8=>{var{key,value}=_ref8;return/*#__PURE__*/react.createElement(SettingRow,{key:key,name:key,value:value,client:client,mutable:mutable,showSecrets:showSecrets,autoKey:autoKey});}),!!(secrets!==null&&secrets!==void 0&&secrets.length)&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},"Secrets"),secrets===null||secrets===void 0?void 0:secrets.map(_ref9=>{var{key,value}=_ref9;return/*#__PURE__*/react.createElement(SettingRow,{key:key,name:key,value:value,client:client,mutable:mutable,showSecrets:showSecrets,autoKey:autoKey});}))),/*#__PURE__*/react.createElement(CardActions/* default */.Z,null,/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,direction:"row"},mutable&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(CmdButton/* default */.Z,{variant:"outlined",trackName:"settings.clearall",title:"Clear all settings",icon:/*#__PURE__*/react.createElement(Delete/* default */.Z,null),onClick:handleClear},"Clear")),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(lib/* Button */.zx,{variant:"outlined",title:"export",disabled:!values,onClick:handleExport,startIcon:/*#__PURE__*/react.createElement(SystemUpdateAlt/* default */.Z,null)},"Export")),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(ImportSettingsButton,{client:client})))));}
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(73131);
// EXTERNAL MODULE: ./src/components/hooks/useServiceProviderFromServiceClass.ts
var useServiceProviderFromServiceClass = __webpack_require__(26785);
// EXTERNAL MODULE: ./src/components/hooks/useLocationSearchParam.ts
var useLocationSearchParam = __webpack_require__(5710);
// EXTERNAL MODULE: ./src/components/shell/Head.tsx
var Head = __webpack_require__(94597);
;// CONCATENATED MODULE: ./src/pages/tools/settings.tsx









var frontmatter = {
  title: "Device Settings",
  description: "List and update settings on devices."
};

var settings_Head = props => /*#__PURE__*/react.createElement(Head/* default */.Z, Object.assign({}, props, frontmatter));
function Page() {
  // spin up provider on demand
  (0,useServiceProviderFromServiceClass/* default */.Z)(constants/* SRV_SETTINGS */.B9b);
  var services = (0,useServices/* default */.Z)({
    serviceClass: constants/* SRV_SETTINGS */.B9b
  });
  var keyPrefix = (0,useLocationSearchParam/* useLocationSearchParamString */.D)("prefix");
  var autoKey = (0,useLocationSearchParam/* useLocationSearchParamBoolean */.w)("autokey", false);
  var showSecrets = (0,useLocationSearchParam/* useLocationSearchParamBoolean */.w)("secrets", true);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Device Settings"), /*#__PURE__*/react.createElement("p", null, "Configure ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU, {
    to: "/services/settings/"
  }, "settings"), " ", "services."), /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    serviceClass: constants/* SRV_SETTINGS */.B9b
  }), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, services.map(service => /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    key: service.nodeId,
    item: true,
    xs: 12,
    lg: 6
  }, /*#__PURE__*/react.createElement(SettingsCard, {
    service: service,
    mutable: true,
    keyPrefix: keyPrefix,
    showSecrets: showSecrets,
    autoKey: autoKey
  })))), /*#__PURE__*/react.createElement("h2", null, "Advanced"), /*#__PURE__*/react.createElement("p", null, "You can use various URL argument to modify the behavior of this page."), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("code", null, "prefix=JD"), ", will prefix and filter keys with", " ", /*#__PURE__*/react.createElement("code", null, "JD"), "."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("code", null, "autokey"), ", will automatically generate random keys for entries. Default is false."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("code", null, "secrets=0"), ", disables secrets")));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-settings-tsx-e0b00d3c994541f184b0.js.map