"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4149],{

/***/ 77010:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DeviceIcon; },
/* harmony export */   "_": function() { return /* binding */ DeviceSpecificationIcon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useDeviceSpecification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11352);
/* harmony import */ var _hooks_useServiceProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23662);
/* harmony import */ var _KindIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11799);
/* harmony import */ var _useDeviceImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36141);
/* harmony import */ var _tools_ImageAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24840);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24503);
function DeviceIcon(props){var{device,size,avatar}=props;var specification=(0,_jacdac_useDeviceSpecification__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(device);var server=(0,_hooks_useServiceProvider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(device);return server?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_KindIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{kind:_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .VIRTUAL_DEVICE_NODE_NAME */ .UX7}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DeviceSpecificationIcon,{size:size,specification:specification,avatar:avatar});}function DeviceSpecificationIcon(props){var{specification,size,avatar}=props;var imageUrl=(0,_useDeviceImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(specification,"avatar")||(0,gatsby__WEBPACK_IMPORTED_MODULE_7__.withPrefix)("images/missing-device.svg");var name=(specification===null||specification===void 0?void 0:specification.name)||"Image of the device";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tools_ImageAvatar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{size:size,alt:name,src:imageUrl,avatar:avatar});}

/***/ }),

/***/ 77682:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceCatalog; }
/* harmony export */ });
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26040);
/**
 * Gets the device catalog from the current bus
 * @returns
 */function useDeviceCatalog(){var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();return bus.deviceCatalog;}

/***/ }),

/***/ 36141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceImage; }
/* harmony export */ });
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71562);
/* harmony import */ var _jacdac_ts_src_jdom_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5018);
function useDeviceImage(specification,size){var sz=size||"full";return specification&&(0,gatsby_link__WEBPACK_IMPORTED_MODULE_1__/* .withPrefix */ .dq)("images/devices/"+(0,_jacdac_ts_src_jdom_catalog__WEBPACK_IMPORTED_MODULE_0__/* .identifierToUrlPath */ .uM)(specification.id)+"."+sz+".jpg");}

/***/ }),

/***/ 56225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceSpecifications; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46196);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63339);
/* harmony import */ var _useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77682);
function useDeviceSpecifications(options){var catalog=(0,_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var specifications=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(catalog,_=>_===null||_===void 0?void 0:_.specifications(options),[JSON.stringify(options)],(a,b)=>(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_0__/* .arrayEq */ .vm)(a,b,(l,r)=>l.id===r.id));return specifications;}

/***/ }),

/***/ 64149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ConnectTransportDialog; }
});

// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(3838);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(77750);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20528);
// EXTERNAL MODULE: ./src/components/buttons/ConnectButton.tsx
var ConnectButton = __webpack_require__(99636);
// EXTERNAL MODULE: ./src/components/devices/useDeviceSpecifications.ts
var useDeviceSpecifications = __webpack_require__(56225);
// EXTERNAL MODULE: ./src/components/ui/DialogTitleWithClose.tsx + 1 modules
var DialogTitleWithClose = __webpack_require__(64720);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(86160);
// EXTERNAL MODULE: ./node_modules/@mui/material/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(93155);
// EXTERNAL MODULE: ./src/components/hooks/useDeveloperMode.ts
var useDeveloperMode = __webpack_require__(33724);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(46259);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
;// CONCATENATED MODULE: ./src/components/alert/DeveloperModeAlert.tsx
function DeveloperModeAlert(){var{developerMode,setDeveloperMode}=(0,useDeveloperMode/* default */.Z)();var handleToggle=()=>setDeveloperMode(!developerMode);return!!developerMode&&/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"info"},/*#__PURE__*/react.createElement(AlertTitle/* default */.Z,null,"DeveloperMode"),"Allows to connect to device that are not registered in the catalog.",/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx,{variant:"outlined",onClick:handleToggle},"Turn Off"));}
// EXTERNAL MODULE: ./src/components/devices/DeviceIcon.tsx
var DeviceIcon = __webpack_require__(77010);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(48147);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/catalog.ts + 1 modules
var catalog = __webpack_require__(5018);
;// CONCATENATED MODULE: ./src/components/dialogs/ConnectTransportDialog.tsx
function ConnectTransport(props){var{transport,onClose}=props;var{developerMode}=(0,useDeveloperMode/* default */.Z)();var{type:transportType}=transport;var devices=(0,useDeviceSpecifications/* default */.Z)({transport:transportType,includeExperimental:developerMode,includeDeprecated:developerMode});if(!(devices!==null&&devices!==void 0&&devices.length)&&!flags/* Flags.diagnostics */.v.diagnostics)return null;return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,alignContent:"flex-end"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,alignSelf:"center"},/*#__PURE__*/react.createElement(ConnectButton/* default */.Z,{key:transport.type,transport:transport,onClick:onClose,full:true,typeInTitle:true})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:true},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},devices.map(device=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,key:device.id},/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{title:device.name,to:"/devices/"+(0,catalog/* identifierToUrlPath */.uM)(device.id)+"/",onClick:onClose},/*#__PURE__*/react.createElement(DeviceIcon/* DeviceSpecificationIcon */._,{specification:device,avatar:true}))))))));}function ConnectTransportDialog(props){var{bus}=(0,react.useContext)(Context/* default */.Z);var{transports}=bus;var{open,onClose}=props;var dialogId=(0,react.useId)();var labelId=dialogId+"-label";return/*#__PURE__*/react.createElement(Dialog/* default */.Z,{id:dialogId,"aria-labelledby":labelId,open:open,onClose:onClose,fullWidth:true},/*#__PURE__*/react.createElement(DialogTitleWithClose/* default */.Z,{onClose:onClose,id:labelId},"Connect to a device"),/*#__PURE__*/react.createElement(DialogContent/* default */.Z,null,/*#__PURE__*/react.createElement(DeveloperModeAlert,null),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:2},transports.map(transport=>/*#__PURE__*/react.createElement(ConnectTransport,{key:transport.type,transport:transport,onClose:onClose})))));}

/***/ }),

/***/ 22878:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useRegister; }
/* harmony export */ });
function useRegister(service,identifier){return service===null||service===void 0?void 0:service.register(identifier);}

/***/ }),

/***/ 23662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceProvider; }
/* harmony export */ });
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26040);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63339);
/**
 * Mounts a service provider
 */function useServiceProvider(device){var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();var provider=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(bus,b=>device&&b.findServiceProvider(device.deviceId),[device]);return provider;}

/***/ }),

/***/ 24840:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ImageAvatar; }
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
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(82066);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/Person.js



/**
 * @ignore - internal component.
 */

/* harmony default export */ var Person = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person'));
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Avatar/avatarClasses.js


function getAvatarUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiAvatar', slot);
}
const avatarClasses = (0,generateUtilityClasses/* default */.Z)('MuiAvatar', ['root', 'colorDefault', 'circular', 'rounded', 'square', 'img', 'fallback']);
/* harmony default export */ var Avatar_avatarClasses = ((/* unused pure expression or super */ null && (avatarClasses)));
;// CONCATENATED MODULE: ./node_modules/@mui/material/Avatar/Avatar.js


const _excluded = ["alt", "children", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"];









const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    colorDefault
  } = ownerState;
  const slots = {
    root: ['root', variant, colorDefault && 'colorDefault'],
    img: ['img'],
    fallback: ['fallback']
  };
  return (0,composeClasses/* default */.Z)(slots, getAvatarUtilityClass, classes);
};
const AvatarRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiAvatar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], ownerState.colorDefault && styles.colorDefault];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: '50%',
  overflow: 'hidden',
  userSelect: 'none'
}, ownerState.variant === 'rounded' && {
  borderRadius: (theme.vars || theme).shape.borderRadius
}, ownerState.variant === 'square' && {
  borderRadius: 0
}, ownerState.colorDefault && (0,esm_extends/* default */.Z)({
  color: (theme.vars || theme).palette.background.default
}, theme.vars ? {
  backgroundColor: theme.vars.palette.Avatar.defaultBg
} : {
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
})));
const AvatarImg = (0,styled/* default */.ZP)('img', {
  name: 'MuiAvatar',
  slot: 'Img',
  overridesResolver: (props, styles) => styles.img
})({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  // Handle non-square image. The property isn't supported by IE11.
  objectFit: 'cover',
  // Hide alt text.
  color: 'transparent',
  // Hide the image broken icon, only works on Chrome.
  textIndent: 10000
});
const AvatarFallback = (0,styled/* default */.ZP)(Person, {
  name: 'MuiAvatar',
  slot: 'Fallback',
  overridesResolver: (props, styles) => styles.fallback
})({
  width: '75%',
  height: '75%'
});
function useLoaded({
  crossOrigin,
  referrerPolicy,
  src,
  srcSet
}) {
  const [loaded, setLoaded] = react.useState(false);
  react.useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }
    setLoaded(false);
    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded('loaded');
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded('error');
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }
    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);
  return loaded;
}
const Avatar = /*#__PURE__*/react.forwardRef(function Avatar(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiAvatar'
  });
  const {
      alt,
      children: childrenProp,
      className,
      component = 'div',
      imgProps,
      sizes,
      src,
      srcSet,
      variant = 'circular'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  let children = null;

  // Use a hook instead of onError on the img element to support server-side rendering.
  const loaded = useLoaded((0,esm_extends/* default */.Z)({}, imgProps, {
    src,
    srcSet
  }));
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== 'error';
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    colorDefault: !hasImgNotFailing,
    component,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  if (hasImgNotFailing) {
    children = /*#__PURE__*/(0,jsx_runtime.jsx)(AvatarImg, (0,esm_extends/* default */.Z)({
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      ownerState: ownerState,
      className: classes.img
    }, imgProps));
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /*#__PURE__*/(0,jsx_runtime.jsx)(AvatarFallback, {
      className: classes.fallback
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AvatarRoot, (0,esm_extends/* default */.Z)({
    as: component,
    ownerState: ownerState,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref
  }, other, {
    children: children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Avatar_Avatar = (Avatar);
;// CONCATENATED MODULE: ./src/components/tools/ImageAvatar.tsx
var PREFIX="ImageAvatar";var classes={img:PREFIX+"img",small:PREFIX+"small",default:PREFIX+"default",large:PREFIX+"large"};var StyledAvatar=(0,styled/* default */.ZP)("span")(_ref=>{var{theme}=_ref;return{["& ."+classes.img]:{marginTop:"58%"},["& ."+classes.small]:{width:theme.spacing(3),height:theme.spacing(3),marginRight:theme.spacing(0.5)},["& ."+classes.default]:{width:theme.spacing(5),height:theme.spacing(5),marginRight:theme.spacing(0.5)},["& ."+classes.large]:{width:theme.spacing(7),height:theme.spacing(7),marginRight:theme.spacing(1)}};});function ImageAvatar(props){var{src,alt,size,avatar}=props;var sizeClassName=size==="small"?classes.small:size==="large"?classes.large:classes.default;return/*#__PURE__*/react.createElement(StyledAvatar,null,/*#__PURE__*/react.createElement(Avatar_Avatar,{className:sizeClassName,alt:alt,src:src,classes:{img:avatar?classes.img:undefined}}));}

/***/ }),

/***/ 31246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceProductIdentifier; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36807);
/* harmony import */ var _components_hooks_useRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22878);
/* harmony import */ var _useRegisterValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9680);
function useDeviceProductIdentifier(device){var reg=(0,_components_hooks_useRegister__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(device===null||device===void 0?void 0:device.service(0),_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .ControlReg.ProductIdentifier */ .toU.ProductIdentifier);var[id]=(0,_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__/* .useRegisterUnpackedValue */ .Pf)(reg);return id;}

/***/ }),

/***/ 11352:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": function() { return /* binding */ useDeviceSpecification; },
/* harmony export */   "Oi": function() { return /* binding */ useDeviceSpecificationFromProductIdentifier; },
/* harmony export */   "iR": function() { return /* binding */ useDeviceSpecificationFromIdentifier; }
/* harmony export */ });
/* harmony import */ var _useDeviceProductIdentifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31246);
/* harmony import */ var _useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63339);
/* harmony import */ var _components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77682);
function useDeviceSpecification(device){var id=(0,_useDeviceProductIdentifier__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(device);return useDeviceSpecificationFromProductIdentifier(id);}function useDeviceSpecificationFromProductIdentifier(id){var deviceCatalog=(0,_components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var specification=(0,_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(deviceCatalog,_=>_.specificationFromProductIdentifier(id),[id]);return specification;}function useDeviceSpecificationFromIdentifier(id){var deviceCatalog=(0,_components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var specification=(0,_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(deviceCatalog,_=>_.specificationFromIdentifier(id),[id]);return specification;}

/***/ }),

/***/ 9680:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e_": function() { return /* binding */ useRegisterHumanValue; },
/* harmony export */   "Pf": function() { return /* binding */ useRegisterUnpackedValue; },
/* harmony export */   "I8": function() { return /* binding */ useRegisterBoolValue; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18763);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46196);
/* harmony import */ var _components_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92513);
/* harmony import */ var _useEventRaised__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88286);
function readRegisterValue(register,reader,defaultValue,trackError){try{var value=reader(register);return value;}catch(e){var _register$service,_register$service$dev,_register$service2;trackError(e,{dev:register===null||register===void 0?void 0:(_register$service=register.service)===null||_register$service===void 0?void 0:(_register$service$dev=_register$service.device)===null||_register$service$dev===void 0?void 0:_register$service$dev.anonymizedDeviceId,srv:register===null||register===void 0?void 0:(_register$service2=register.service)===null||_register$service2===void 0?void 0:_register$service2.name,reg:register===null||register===void 0?void 0:register.name});return defaultValue;}}function resolveRenderer(srv,reg){if(reg===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .BaseReg.StatusCode */ .vCn.StatusCode)return reg=>{var _humanify;var values=(reg===null||reg===void 0?void 0:reg.unpackedValue)||[];var[code,vendorCode]=values;if(code===undefined)return"?";var r=((_humanify=(0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_0__/* .humanify */ .lW)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SystemStatusCodes */ ._kj[code]||"?"))===null||_humanify===void 0?void 0:_humanify.toLowerCase())+" (0x"+code.toString(16)+")";if(vendorCode){r+=", vendor: 0x"+code.toString(16);}return r;};if(srv===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SRV_DEVICE_SCRIPT_MANAGER */ .I5&&reg===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .DeviceScriptManagerReg.RuntimeVersion */ .nhI.RuntimeVersion){return reg=>{var values=(reg===null||reg===void 0?void 0:reg.unpackedValue)||[];var[patch,minor,major]=values;if(patch===undefined)return"?";return major+"."+minor+"."+patch;};}return undefined;}function useRegisterHumanValue(register,options){var{visible,maxLength}=options||{visible:true};var{trackError}=(0,_components_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();var renderer=register?resolveRenderer(register.service.serviceClass,register.code):undefined;return (0,_useEventRaised__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ,visible?register:undefined,_=>readRegisterValue(_,__=>renderer?renderer(__):(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .ellipse */ .hr)(__===null||__===void 0?void 0:__.humanValue,maxLength),"???",trackError),[visible,maxLength]);}function useRegisterUnpackedValue(register,options){var{visible}=options||{visible:true};var{trackError}=(0,_components_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();return (0,_useEventRaised__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ,visible?register:undefined,_=>readRegisterValue(_,__=>(__===null||__===void 0?void 0:__.unpackedValue)||[],[],trackError),[visible]);}function useRegisterBoolValue(register,options){var{visible}=options||{visible:true};return (0,_useEventRaised__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ,visible?register:undefined,_=>_===null||_===void 0?void 0:_.boolValue,[visible]);}

/***/ })

}]);
//# sourceMappingURL=4149-2fdbfaa4c92242ff035c.js.map