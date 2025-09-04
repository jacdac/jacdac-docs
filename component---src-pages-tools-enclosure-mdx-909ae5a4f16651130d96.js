"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[379,4659],{

/***/ 34282:
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
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8zm-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91z"
}), 'RestartAlt');
exports.Z = _default;

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

/***/ 80395:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ enclosure; }
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(11151);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(94659);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/components/hooks/useLocalStorage.ts
var useLocalStorage = __webpack_require__(10431);
// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx + 1 modules
var HighlightTextField = __webpack_require__(40830);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/RestartAlt.js
var RestartAlt = __webpack_require__(34282);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(48147);
// EXTERNAL MODULE: ./src/components/ui/SliderWithLabel.tsx
var SliderWithLabel = __webpack_require__(32849);
// EXTERNAL MODULE: ./src/components/ui/SwitchWithLabel.tsx
var SwitchWithLabel = __webpack_require__(68320);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(86160);
// EXTERNAL MODULE: ./src/components/enclosure/ec30.ts
var ec30 = __webpack_require__(99458);
;// CONCATENATED MODULE: ./src/components/tools/EnclosureEditor.tsx
var EnclosureGenerator=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(4300)]).then(__webpack_require__.bind(__webpack_require__, 34490)));var STORAGE_KEY="jacdac:enclosureeditorkey_source";var OPTIONS_STORAGE_KEY="jacdac:enclosureeditorkey_options";function EnclosureDesign(props){var{setSource,setOptions}=props;var{0:gridWidth,1:setGridWith}=(0,react.useState)(2);var{0:gridHeight,1:setGridHeight}=(0,react.useState)(2);var{0:depth,1:setDepth}=(0,react.useState)(6);var{0:legs,1:setLegs}=(0,react.useState)(true);var id=(0,react.useId)();var gridHeightId=id+"-height";var gridWidthId=id+"-width";var depthId=id+"-depth";var legsId=id+"-legs";var handleGridWidth=(event,value)=>setGridWith(value);var handleGridHeight=(event,value)=>setGridHeight(value);var handleLegs=(ev,checked)=>{setLegs(checked);};var handleDepthChange=event=>{setDepth(Number(event.target.value));};(0,react.useEffect)(()=>{var model=(0,ec30/* generateEC30EnclosureModel */.xD)(gridWidth,gridHeight,"lr",depth);var source=JSON.stringify(model,null,4);setSource(source);},[gridWidth,gridHeight,depth]);(0,react.useEffect)(()=>{var options={cover:{}};if(legs)options.legs={type:"well"};var source=JSON.stringify(options,null,4);setOptions(source);},[legs]);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(SliderWithLabel/* default */.Z,{id:gridWidthId,label:"grid width: "+gridWidth*10+"mm",value:gridWidth,onChange:handleGridWidth,min:2,max:12})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(SliderWithLabel/* default */.Z,{id:gridHeightId,label:"grid height: "+gridHeight*10+"mm",value:gridHeight,onChange:handleGridHeight,min:2,max:12})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(TextField/* default */.Z,{id:depthId,label:"depth (mm)",value:depth,type:"number",onChange:handleDepthChange,inputProps:{min:5.5,max:40,step:0.5}})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(SwitchWithLabel/* default */.Z,{id:legsId,label:"legs",onChange:handleLegs,checked:legs})));}function EnclosureEditor(){var[source,setSource]=(0,useLocalStorage/* default */.Z)(STORAGE_KEY,JSON.stringify((0,ec30/* generateEC30EnclosureModel */.xD)(2,2,""),null,4));var[options,setOptions]=(0,useLocalStorage/* default */.Z)(OPTIONS_STORAGE_KEY,JSON.stringify(ec30/* DEFAULT_OPTIONS */.WN,null,4));var enclosure=(0,react.useMemo)(()=>{try{return JSON.parse(source);}catch(e){console.debug(e);return undefined;}},[source]);var enclosureOptions=(0,react.useMemo)(()=>{try{return JSON.parse(options);}catch(e){console.debug(e);return undefined;}},[options]);var handleRefreshSource=()=>setSource(JSON.stringify((0,ec30/* generateEC30EnclosureModel */.xD)(2,2,""),null,4));var handleRefreshOptions=()=>setOptions(JSON.stringify(ec30/* DEFAULT_OPTIONS */.WN,null,4));return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{spacing:2,container:true},/*#__PURE__*/react.createElement(EnclosureDesign,{setSource:setSource,setOptions:setOptions}),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(EnclosureGenerator,{model:enclosure,options:enclosureOptions}))),flags/* Flags.diagnostics */.v.diagnostics&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"subtitle1",component:"span"},"Model"),/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{title:"reset",size:"small",onClick:handleRefreshSource},/*#__PURE__*/react.createElement(RestartAlt/* default */.Z,null)),/*#__PURE__*/react.createElement(HighlightTextField/* default */.Z,{code:source,language:"json",onChange:setSource})),flags/* Flags.diagnostics */.v.diagnostics&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"subtitle1",component:"span"},"Options"),/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{title:"reset",size:"small",onClick:handleRefreshOptions},/*#__PURE__*/react.createElement(RestartAlt/* default */.Z,null)),/*#__PURE__*/react.createElement(HighlightTextField/* default */.Z,{minHeight:"8rem",code:options,language:"json",onChange:setOptions})));}
;// CONCATENATED MODULE: ./src/pages/tools/enclosure.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/




function _createMdxContent(props) {
  var _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p",
    h2: "h2",
    ul: "ul",
    li: "li"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(_components.h1, {
    id: "grid-module-enclosure-generator",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react.createElement(_components.a, {
    href: "#grid-module-enclosure-generator",
    "aria-label": "grid module enclosure generator permalink",
    className: "anchor before"
  }, /*#__PURE__*/react.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Grid Module Enclosure Generator"), "\n", /*#__PURE__*/react.createElement(_components.p, null, "This page generates 3D printeable models for the standard 10mm, grid sizes Jacdac devices."), "\n", /*#__PURE__*/react.createElement(EnclosureEditor), "\n", /*#__PURE__*/react.createElement(_components.h2, {
    id: "more-models",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react.createElement(_components.a, {
    href: "#more-models",
    "aria-label": "more models permalink",
    className: "anchor before"
  }, /*#__PURE__*/react.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "More models"), "\n", /*#__PURE__*/react.createElement(_components.ul, null, "\n", /*#__PURE__*/react.createElement(_components.li, null, /*#__PURE__*/react.createElement(_components.a, {
    href: "/jacdac-docs/models/slidersknob.stl"
  }, "slider knob head")), "\n"));
}

function MDXContent(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    wrapper: MDXLayout
  } = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? /*#__PURE__*/react.createElement(MDXLayout, props, /*#__PURE__*/react.createElement(_createMdxContent, props)) : _createMdxContent(props);
}

/* harmony default export */ var enclosure = (MDXContent);

/***/ }),

/***/ 99458:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WN": function() { return /* binding */ DEFAULT_OPTIONS; },
/* harmony export */   "gs": function() { return /* binding */ isEC30; },
/* harmony export */   "Xi": function() { return /* binding */ toEC30; },
/* harmony export */   "xD": function() { return /* binding */ generateEC30EnclosureModel; },
/* harmony export */   "Sk": function() { return /* binding */ shapeToEC30; }
/* harmony export */ });
var DEFAULT_OPTIONS={legs:{type:"well"},cover:{}};function isEC30(shape){return typeof shape==="string"&&/^ec30_/.test(shape);}function toEC30(gridWidth,gridHeight,connectors){if(connectors===void 0){connectors="";}return"ec30_"+gridWidth+"x"+gridHeight+"_"+connectors;}function generateEC30EnclosureModel(gridWidth,gridHeight,connectors,depth){if(connectors===void 0){connectors="";}if(depth===void 0){depth=6;}var width=gridWidth*10;var height=gridHeight*10;var c=8;var boxWidth=width+c;var boxHeight=height+c;return{name:width+"x"+height,grid:{width:gridWidth,height:gridHeight,connectors},box:{width:boxWidth,height:boxHeight,depth},rings:[{x:width>>1,y:height>>1},{x:width>>1,y:-(height>>1)},{x:-(width>>1),y:-(height>>1)},{x:-(width>>1),y:height>>1}],components:[{x:-(width>>1)+1.5,y:0,type:"led"},{x:(width>>1)-1.5,y:0,type:"led"},{x:0,y:-(height>>1)+1.5,type:"led"},{x:0,y:(height>>1)-1.5,type:"led"}],connectors:[{x:0,y:-(width>>1)+2,dir:"bottom",type:"jacdac"},{x:0,y:(width>>1)-2,dir:"top",type:"jacdac"},{x:-(width>>1)+2,y:0,dir:"left",type:"jacdac"},{x:(width>>1)-2,y:0,dir:"right",type:"jacdac"}]};}function shapeToEC30(shape,depth){if(depth===void 0){depth=7;}if(typeof shape==="string"){var m=/^ec30_(\d+)x(\d+)_([lrup\d]+)$/.exec(shape);if(m){var w=Number(m[1]);var h=Number(m[2]);var c=m[3];return generateEC30EnclosureModel(w,h,c,depth);}}return undefined;}

/***/ }),

/***/ 40830:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ HighlightTextField; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 1 modules
var dist = __webpack_require__(24544);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsLight/index.js
var vsLight = __webpack_require__(62894);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsDark/index.js
var vsDark = __webpack_require__(71418);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(50553);
;// CONCATENATED MODULE: ./node_modules/use-editable/dist/use-editable.es.js


var m = {
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
};

function p(c) {
  var a = window.getSelection();
  a.empty();
  a.addRange(c);
}

function q(c) {
  return (c.metaKey || c.ctrlKey) && !c.altKey && "KeyZ" === c.code;
}

function r(c) {
  c = [ c.firstChild ];
  for (var b, a = ""; b = c.pop(); ) {
    b.nodeType === Node.TEXT_NODE ? a += b.textContent : b.nodeType === Node.ELEMENT_NODE && "BR" === b.nodeName && (a += "\n"), 
    b.nextSibling && c.push(b.nextSibling), b.firstChild && c.push(b.firstChild);
  }
  "\n" !== a[a.length - 1] && (a += "\n");
  return a;
}

function w(c) {
  var a = window.getSelection().getRangeAt(0), b = a.collapsed ? 0 : a.toString().length, f = document.createRange();
  f.setStart(c, 0);
  f.setEnd(a.startContainer, a.startOffset);
  return {
    position: c = (f = f.toString()).length,
    extent: b,
    content: f = (f = f.split("\n"))[a = f.length - 1],
    line: a
  };
}

function C(c, a, b) {
  0 >= a && (a = 0);
  if (!b || 0 > b) {
    b = a;
  }
  var f = document.createRange();
  c = [ c.firstChild ];
  for (var d, l = 0, g = a; d = c[c.length - 1]; ) {
    if (d.nodeType === Node.TEXT_NODE) {
      if (l + d.textContent.length >= g) {
        var h = g - l;
        if (g === a) {
          if (g = f, h < d.textContent.length ? g.setStart(d, h) : g.setStartAfter(d), b !== a) {
            g = b;
            continue;
          } else {
            break;
          }
        } else {
          a = f;
          h < (b = d).textContent.length ? a.setEnd(b, h) : a.setEndAfter(b);
          break;
        }
      }
      l += d.textContent.length;
    } else if (d.nodeType === Node.ELEMENT_NODE && "BR" === d.nodeName) {
      if (l + 1 >= g) {
        if (g === a) {
          if (h = f, 0 < d.textContent.length ? h.setStart(d, 0) : h.setStartAfter(d), b !== a) {
            g = b;
            continue;
          } else {
            break;
          }
        } else {
          a = f;
          0 < (b = d).textContent.length ? a.setEnd(b, 0) : a.setEndAfter(b);
          break;
        }
      }
      l++;
    }
    c.pop();
    d.nextSibling && c.push(d.nextSibling);
    d.firstChild && c.push(d.firstChild);
  }
  return f;
}

function useEditable(c, a, b) {
  function f(k) {
    var b = c.current;
    if (b) {
      var a = w(b);
      b = r(b);
      a.position += k.length - b.length;
      e.position = a;
      e.onChange(k, a);
    }
  }
  function l(k, b) {
    var e = c.current;
    if (e) {
      var a = window.getSelection().getRangeAt(0);
      a.deleteContents();
      a.collapse();
      var d = b || 0;
      (a = C(e, b = (a = w(e)).position + (0 > d ? d : 0), a.position + (0 < d ? d : 0))).deleteContents();
      k && a.insertNode(document.createTextNode(k));
      p(C(e, b + k.length));
    }
  }
  function d(b) {
    var a = c.current;
    if (a) {
      a.focus();
      var e = 0;
      if ("number" == typeof b) {
        e = b;
      } else {
        var k = r(a).split("\n").slice(0, b.row);
        b.row && (e += k.join("\n").length + 1);
        e += b.column;
      }
      p(C(a, e));
    }
  }
  function g() {
    var b = c.current;
    return {
      text: r(b),
      position: b = w(b)
    };
  }
  function h() {
    e.observer.disconnect();
  }
  b || (b = {});
  var D = (0,react.useState)([])[1], e = (0,react.useState)((function() {
    var e = {
      observer: null,
      disconnected: !1,
      onChange: a,
      queue: [],
      history: [],
      historyAt: -1,
      position: null
    };
    "undefined" != typeof MutationObserver && (e.observer = new MutationObserver((function b(b) {
      var a;
      (a = e.queue).push.apply(a, b);
    })));
    return e;
  }))[0], n = (0,react.useMemo)((function() {
    return {
      update: f,
      insert: l,
      move: d,
      getState: g
    };
  }), []);
  if ("object" != typeof navigator) {
    return n;
  }
  (0,react.useLayoutEffect)((function() {
    e.onChange = a;
    if (c.current && !b.disabled) {
      e.disconnected = !1;
      e.observer.observe(c.current, m);
      if (e.position) {
        var k = e.position, d = k.position;
        p(C(c.current, d, d + k.extent));
      }
      return h;
    }
  }));
  (0,react.useLayoutEffect)((function() {
    if (!c.current || b.disabled) {
      e.history.length = 0, e.historyAt = -1;
    } else {
      var a = c.current;
      if (e.position) {
        a.focus();
        var d = e.position, f = d.position;
        p(C(a, f, f + d.extent));
      }
      var g = a.style.whiteSpace, h = a.contentEditable, l = !0;
      try {
        a.contentEditable = "plaintext-only";
      } catch (u) {
        a.contentEditable = "true", l = !1;
      }
      "pre" !== g && (a.style.whiteSpace = "pre-wrap");
      b.indentation && (a.style.tabSize = a.style.MozTabSize = "" + b.indentation);
      d = "" + " ".repeat(b.indentation || 0);
      var x, E = new RegExp("^(?:" + d + ")"), F = new RegExp("^(?:" + d + ")*(" + d + ")$"), t = function(b) {
        if (c.current && e.position) {
          var u = r(a), d = w(a), f = (new Date).valueOf(), g = e.history[e.historyAt];
          !b && 500 > f - x || g && g[1] === u ? x = f : (b = ++e.historyAt, e.history[b] = [ d, u ], 
          e.history.splice(b + 1), 500 < b && (e.historyAt--, e.history.shift()));
        }
      }, v = function() {
        var b;
        (b = e.queue).push.apply(b, e.observer.takeRecords());
        b = w(a);
        if (e.queue.length) {
          e.observer.disconnect();
          e.disconnected = !0;
          var d = r(a);
          e.position = b;
          for (var c, f; c = e.queue.pop(); ) {
            null !== c.oldValue && (c.target.textContent = c.oldValue);
            for (f = c.removedNodes.length - 1; 0 <= f; f--) {
              c.target.insertBefore(c.removedNodes[f], c.nextSibling);
            }
            for (f = c.addedNodes.length - 1; 0 <= f; f--) {
              c.addedNodes[f].parentNode && c.target.removeChild(c.addedNodes[f]);
            }
          }
          e.onChange(d, b);
        }
      }, y = function(c) {
        if (!c.defaultPrevented && c.target === a) {
          if (e.disconnected) {
            return c.preventDefault(), D([]);
          }
          if (q(c)) {
            c.preventDefault(), c.shiftKey ? (c = ++e.historyAt, (c = e.history[c]) || (e.historyAt = e.history.length - 1)) : (c = --e.historyAt, 
            (c = e.history[c]) || (e.historyAt = 0)), c && (e.observer.disconnect(), e.disconnected = !0, 
            e.position = c[0], e.onChange(c[1], c[0]));
          } else {
            t();
            if ("Enter" === c.key) {
              c.preventDefault();
              var d = w(a), f = /\S/g.exec(d.content);
              d = "\n" + d.content.slice(0, f ? f.index : d.content.length);
              n.insert(d);
            } else if ((!l || b.indentation) && "Backspace" === c.key) {
              c.preventDefault(), window.getSelection().getRangeAt(0).collapsed ? (d = w(a), d = F.exec(d.content), 
              n.insert("", d ? -d[1].length : -1)) : n.insert("", 0);
            } else if (b.indentation && "Tab" === c.key) {
              c.preventDefault();
              f = (d = w(a)).position - d.content.length;
              var g = r(a);
              d = c.shiftKey ? g.slice(0, f) + d.content.replace(E, "") + g.slice(f + d.content.length) : g.slice(0, f) + (b.indentation ? " ".repeat(b.indentation) : "\t") + g.slice(f);
              n.update(d);
            }
            c.repeat && v();
          }
        }
      }, z = function(b) {
        b.defaultPrevented || b.isComposing || (q(b) || t(), v(), a.focus());
      }, A = function(b) {
        e.position = window.getSelection().rangeCount && b.target === a ? w(a) : null;
      }, B = function(a) {
        a.preventDefault();
        t(!0);
        n.insert(a.clipboardData.getData("text/plain"));
        t(!0);
        v();
      };
      document.addEventListener("selectstart", A);
      window.addEventListener("keydown", y);
      a.addEventListener("paste", B);
      a.addEventListener("keyup", z);
      return function() {
        document.removeEventListener("selectstart", A);
        window.removeEventListener("keydown", y);
        a.removeEventListener("paste", B);
        a.removeEventListener("keyup", z);
        a.style.whiteSpace = g;
        a.contentEditable = h;
      };
    }
  }), [ c.current, b.disabled, b.indentation ]);
  return n;
}
//# sourceMappingURL=use-editable.es.js.map

// EXTERNAL MODULE: ./node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert = __webpack_require__(52288);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(14563);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
;// CONCATENATED MODULE: ./src/components/ui/HighlightTextField.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable react/jsx-key */// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
var GithubPullRequestButton=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6977), __webpack_require__.e(3537), __webpack_require__.e(774), __webpack_require__.e(2560), __webpack_require__.e(6069), __webpack_require__.e(317), __webpack_require__.e(4659)]).then(__webpack_require__.bind(__webpack_require__, 97611)));var AnnotationTooltip=(0,styled/* default */.ZP)(Tooltip/* default */.Z)(_ref=>{var{theme}=_ref;return{["& .arrow"]:{color:theme.palette.error.main},["& .tooltip"]:{backgroundColor:theme.palette.error.main,color:theme.palette.common.white,boxShadow:theme.shadows[1],fontSize:theme.typography.body2.fontSize}};});function HighlightTextField(props){var{code,onChange,language,annotations,pullRequestTitle,pullRequestPath,pullRequestDescription,minHeight="12rem",maxHeight,disabled}=props;var{darkMode}=(0,react.useContext)(DarkModeContext/* default */.ZP);var theme=darkMode==="dark"?vsDark/* default */.Z:vsLight/* default */.Z;var editorRef=(0,react.useRef)(null);useEditable(editorRef,onChange,{disabled:!!disabled,indentation:4});return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,direction:"row"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(dist/* default */.ZP,Object.assign({},dist/* defaultProps */.lG,{code:code,language:language,theme:theme}),_ref2=>{var{className,style,tokens,getTokenProps}=_ref2;return/*#__PURE__*/react.createElement("pre",{ref:editorRef,className:className,spellCheck:false,style:Object.assign({},style,{padding:"0.5rem",minHeight,maxHeight,whiteSpace:"pre-wrap",overflowWrap:"break-word"})},tokens.map((line,i)=>{var annotation=annotations===null||annotations===void 0?void 0:annotations.find(a=>a.line===i+1);var title=annotation===null||annotation===void 0?void 0:annotation.message;var el=/*#__PURE__*/react.createElement("span",{key:i,style:annotation&&{borderBottom:"dashed 1px red"}},line.filter(token=>!token.empty).map((token,key)=>/*#__PURE__*/react.createElement("span",getTokenProps({token,key}))),i<tokens.length-1?"\n":null);return title?/*#__PURE__*/react.createElement(AnnotationTooltip,{title:title,arrow:true,key:i},el):el;}));})),!!(annotations!==null&&annotations!==void 0&&annotations.length)&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"error"},annotations.length===1?/*#__PURE__*/react.createElement(react.Fragment,null,"line ",annotations[0].line,":"," ",annotations[0].message):/*#__PURE__*/react.createElement("ul",null,annotations.map((a,i)=>/*#__PURE__*/react.createElement("li",{key:i},"line ",a.line,": ",a.message))))),pullRequestTitle&&pullRequestPath&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(GithubPullRequestButton,{title:pullRequestTitle,head:pullRequestPath,description:pullRequestDescription,files:{[pullRequestPath+".md"]:code}}))));}

/***/ }),

/***/ 32849:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SliderWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92486);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _excluded=["label"];function SliderWithLabel(props){var{label}=props,others=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props,_excluded);var labelId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var sliderId=labelId+"sliderId";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:labelId,variant:"caption",gutterBottom:true},label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,Object.assign({id:sliderId,"aria-labelledby":labelId,"aria-label":label,valueLabelDisplay:"auto"},others)));}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-enclosure-mdx-909ae5a4f16651130d96.js.map