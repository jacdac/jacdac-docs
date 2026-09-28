(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3196,4659],{

/***/ 88979:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DialogActions_DialogActions; }
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
;// CONCATENATED MODULE: ./node_modules/@mui/material/DialogActions/dialogActionsClasses.js


function getDialogActionsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiDialogActions', slot);
}
const dialogActionsClasses = (0,generateUtilityClasses/* default */.Z)('MuiDialogActions', ['root', 'spacing']);
/* harmony default export */ var DialogActions_dialogActionsClasses = ((/* unused pure expression or super */ null && (dialogActionsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/DialogActions/DialogActions.js


const _excluded = ["className", "disableSpacing"];








const useUtilityClasses = ownerState => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ['root', !disableSpacing && 'spacing']
  };
  return (0,composeClasses/* default */.Z)(slots, getDialogActionsUtilityClass, classes);
};
const DialogActionsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiDialogActions',
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
  padding: 8,
  justifyContent: 'flex-end',
  flex: '0 0 auto'
}, !ownerState.disableSpacing && {
  '& > :not(:first-of-type)': {
    marginLeft: 8
  }
}));
const DialogActions = /*#__PURE__*/react.forwardRef(function DialogActions(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiDialogActions'
  });
  const {
      className,
      disableSpacing = false
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DialogActionsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var DialogActions_DialogActions = (DialogActions);

/***/ }),

/***/ 42440:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/***/ 70576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ ListItem_ListItem; }
});

// UNUSED EXPORTS: ListItemRoot, overridesResolver

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
// EXTERNAL MODULE: ./node_modules/@mui/base/utils/isHostComponent.js
var isHostComponent = __webpack_require__(28442);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(41796);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(76637);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/isMuiElement.js + 1 modules
var isMuiElement = __webpack_require__(48502);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(58974);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(51705);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/ListContext.js
var ListContext = __webpack_require__(59773);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ListItem/listItemClasses.js


function getListItemUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiListItem', slot);
}
const listItemClasses = (0,generateUtilityClasses/* default */.Z)('MuiListItem', ['root', 'container', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'padding', 'button', 'secondaryAction', 'selected']);
/* harmony default export */ var ListItem_listItemClasses = (listItemClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemButton/listItemButtonClasses.js
var listItemButtonClasses = __webpack_require__(68686);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js


function getListItemSecondaryActionClassesUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiListItemSecondaryAction', slot);
}
const listItemSecondaryActionClasses = (0,generateUtilityClasses/* default */.Z)('MuiListItemSecondaryAction', ['root', 'disableGutters']);
/* harmony default export */ var ListItemSecondaryAction_listItemSecondaryActionClasses = ((/* unused pure expression or super */ null && (listItemSecondaryActionClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js


const _excluded = ["className"];









const useUtilityClasses = ownerState => {
  const {
    disableGutters,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disableGutters && 'disableGutters']
  };
  return (0,composeClasses/* default */.Z)(slots, getListItemSecondaryActionClassesUtilityClass, classes);
};
const ListItemSecondaryActionRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiListItemSecondaryAction',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.disableGutters && styles.disableGutters];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  position: 'absolute',
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)'
}, ownerState.disableGutters && {
  right: 0
}));

/**
 * Must be used as the last child of ListItem to function properly.
 */
const ListItemSecondaryAction = /*#__PURE__*/react.forwardRef(function ListItemSecondaryAction(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiListItemSecondaryAction'
  });
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const context = react.useContext(ListContext/* default */.Z);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disableGutters: context.disableGutters
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemSecondaryActionRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
/* harmony default export */ var ListItemSecondaryAction_ListItemSecondaryAction = (ListItemSecondaryAction);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ListItem/ListItem.js


const ListItem_excluded = ["className"],
  _excluded2 = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"];


















const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters, !ownerState.disablePadding && styles.padding, ownerState.button && styles.button, ownerState.hasSecondaryAction && styles.secondaryAction];
};
const ListItem_useUtilityClasses = ownerState => {
  const {
    alignItems,
    button,
    classes,
    dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', !disableGutters && 'gutters', !disablePadding && 'padding', divider && 'divider', disabled && 'disabled', button && 'button', alignItems === 'flex-start' && 'alignItemsFlexStart', hasSecondaryAction && 'secondaryAction', selected && 'selected'],
    container: ['container']
  };
  return (0,composeClasses/* default */.Z)(slots, getListItemUtilityClass, classes);
};
const ListItemRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiListItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'left'
}, !ownerState.disablePadding && (0,esm_extends/* default */.Z)({
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!ownerState.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!ownerState.secondaryAction && {
  [`& > .${listItemButtonClasses/* default.root */.Z.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${ListItem_listItemClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${ListItem_listItemClasses.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${ListItem_listItemClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${ListItem_listItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.alignItems === 'flex-start' && {
  alignItems: 'flex-start'
}, ownerState.divider && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundClip: 'padding-box'
}, ownerState.button && {
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${ListItem_listItemClasses.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  }
}, ownerState.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}));
const ListItemContainer = (0,styled/* default */.ZP)('li', {
  name: 'MuiListItem',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})({
  position: 'relative'
});

/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */
const ListItem = /*#__PURE__*/react.forwardRef(function ListItem(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiListItem'
  });
  const {
      alignItems = 'center',
      autoFocus = false,
      button = false,
      children: childrenProp,
      className,
      component: componentProp,
      components = {},
      componentsProps = {},
      ContainerComponent = 'li',
      ContainerProps: {
        className: ContainerClassName
      } = {},
      dense = false,
      disabled = false,
      disableGutters = false,
      disablePadding = false,
      divider = false,
      focusVisibleClassName,
      secondaryAction,
      selected = false,
      slotProps = {},
      slots = {}
    } = props,
    ContainerProps = (0,objectWithoutPropertiesLoose/* default */.Z)(props.ContainerProps, ListItem_excluded),
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded2);
  const context = react.useContext(ListContext/* default */.Z);
  const childContext = react.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = react.useRef(null);
  (0,useEnhancedEffect/* default */.Z)(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  const children = react.Children.toArray(childrenProp);

  // v4 implementation, deprecated in v5, will be removed in v6
  const hasSecondaryAction = children.length && (0,isMuiElement/* default */.Z)(children[children.length - 1], ['ListItemSecondaryAction']);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    alignItems,
    autoFocus,
    button,
    dense: childContext.dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  });
  const classes = ListItem_useUtilityClasses(ownerState);
  const handleRef = (0,useForkRef/* default */.Z)(listItemRef, ref);
  const Root = slots.root || components.Root || ListItemRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const componentProps = (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, rootProps.className, className),
    disabled
  }, other);
  let Component = componentProp || 'li';
  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = (0,clsx_m/* default */.Z)(ListItem_listItemClasses.focusVisible, focusVisibleClassName);
    Component = ButtonBase/* default */.Z;
  }

  // v4 implementation, deprecated in v5, will be removed in v6
  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component;

    // Avoid nesting of li > li.
    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)(ListContext/* default.Provider */.Z.Provider, {
      value: childContext,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ListItemContainer, (0,esm_extends/* default */.Z)({
        as: ContainerComponent,
        className: (0,clsx_m/* default */.Z)(classes.container, ContainerClassName),
        ref: handleRef,
        ownerState: ownerState
      }, ContainerProps, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Root, (0,esm_extends/* default */.Z)({}, rootProps, !(0,isHostComponent/* default */.Z)(Root) && {
          as: Component,
          ownerState: (0,esm_extends/* default */.Z)({}, ownerState, rootProps.ownerState)
        }, componentProps, {
          children: children
        })), children.pop()]
      }))
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ListContext/* default.Provider */.Z.Provider, {
    value: childContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Root, (0,esm_extends/* default */.Z)({}, rootProps, {
      as: Component,
      ref: handleRef
    }, !(0,isHostComponent/* default */.Z)(Root) && {
      ownerState: (0,esm_extends/* default */.Z)({}, ownerState, rootProps.ownerState)
    }, componentProps, {
      children: [children, secondaryAction && /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemSecondaryAction_ListItemSecondaryAction, {
        children: secondaryAction
      })]
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ var ListItem_ListItem = (ListItem);

/***/ }),

/***/ 94659:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/***/ 44020:
/***/ (function(module) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ 92806:
/***/ (function(module) {

"use strict";

module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};


/***/ }),

/***/ 3196:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StartSimulatorDialog; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15785);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3838);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(77750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94659);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(42440);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(70576);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(88979);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(76914);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43850);
/* harmony import */ var _jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86160);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46196);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11462);
/* harmony import */ var _HostedSimulatorsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55630);
/* harmony import */ var _hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92513);
/* harmony import */ var react_minisearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68991);
/* harmony import */ var react_minisearch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_minisearch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62070);
/* harmony import */ var _ui_DialogTitleWithClose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64720);
/* harmony import */ var _hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82312);
/* harmony import */ var _hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37862);
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26040);
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27761);
/* eslint-disable jsx-a11y/no-autofocus */var miniSearchOptions={fields:["name","description"],searchOptions:{fuzzy:true,prefix:true,boost:{name:5,description:1}}};var serviceProviderDefinitionsCache=null;function uniqueServiceProviderDefinitionsFromCatalog(bus){if(serviceProviderDefinitionsCache)return serviceProviderDefinitionsCache;var seen=[];var deviceSpecs=bus.deviceCatalog.specifications();var _loop=function _loop(devSpec){// find a matching service provider definition 
// that contains all the services in the devSpec
var matchingProviders=(0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__/* .serviceProviderDefinitions */ .a3)().filter(sp=>{var _devSpec$tags,_devSpec$services,_devSpec$services2;return!((_devSpec$tags=devSpec.tags)!==null&&_devSpec$tags!==void 0&&_devSpec$tags.includes("brain"))&&(devSpec.hardwareTags?devSpec.hardwareTags.includes(sp.name):true)&&((_devSpec$services=devSpec.services)===null||_devSpec$services===void 0?void 0:_devSpec$services.length)===sp.services().length&&((_devSpec$services2=devSpec.services)===null||_devSpec$services2===void 0?void 0:_devSpec$services2.every(svc=>sp.serviceClasses.includes(svc)))&&sp.serviceClasses.every(sc=>{var _devSpec$services3;return(_devSpec$services3=devSpec.services)===null||_devSpec$services3===void 0?void 0:_devSpec$services3.includes(sc);});});for(var provider of matchingProviders){if(!seen.includes(provider)){seen.push(provider);}}};for(var devSpec of deviceSpecs){_loop(devSpec);}serviceProviderDefinitionsCache=seen;return seen;}function StartSimulatorDialog(props){var{open,onClose,sensor}=props;var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();var{enqueueSnackbar}=(0,_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();var{addHostedSimulator}=(0,_HostedSimulatorsContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)();var{trackEvent}=(0,_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)();var{mobile}=(0,_hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();var searchId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var{0:query,1:setQuery}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");var deviceHostDialogId=searchId+"-devhostdialog";var deviceHostLabelId=searchId+"-devhostlabel";var contentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();var documents=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(uniqueServiceProviderDefinitionsFromCatalog(bus).filter(server=>!sensor||server.serviceClasses.some(sc=>(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_8__/* .isSensor */ .rq)((0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_8__/* .serviceSpecificationFromClassIdentifier */ .d5)(sc)))).map(server=>({id:"server:"+server.name,name:(0,_translations__WEBPACK_IMPORTED_MODULE_12__/* .translateServer */ .Q)(server.name),description:server.serviceClasses.map(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_8__/* .serviceSpecificationFromClassIdentifier */ .d5).map(spec=>spec.name+" "+spec.shortName+" "+spec.notes["short"]).join(", "),server}))),[sensor]);var{search,searchResults}=(0,react_minisearch__WEBPACK_IMPORTED_MODULE_7__.useMiniSearch)(documents,miniSearchOptions);var handleSearchChange=event=>setQuery(event.target.value);var handleProviderDefinition=provider=>()=>{trackEvent("dashboard.server.start",{server:provider.name});(0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__/* .addServiceProvider */ .Q6)(bus,provider);onClose();};var handleHostedSimulator=simulator=>()=>{trackEvent("dashboard.sim.start",{simulator:simulator.name});addHostedSimulator(simulator);onClose();};var handleAddAll=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(function*(){var allProviderDefinitions=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .uniqueMap */ .EM)((0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__/* .serviceProviderDefinitions */ .a3)().filter(hd=>hd.serviceClasses.length===1),hd=>hd.serviceClasses[0].toString(),h=>h);enqueueSnackbar("starting "+allProviderDefinitions.length+" simulators...","info");onClose();for(var provider of allProviderDefinitions){yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .delay */ .gw)(100);(0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__/* .addServiceProvider */ .Q6)(bus,provider);}});return function handleAddAll(){return _ref.apply(this,arguments);};}();var keyboardProps=(0,_hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(contentRef.current,true);// delay query
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{(0,react__WEBPACK_IMPORTED_MODULE_0__.startTransition)(()=>{search===null||search===void 0?void 0:search(query);});},[query]);var results=(!query?documents:searchResults)||documents;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,{id:deviceHostDialogId,"aria-labelledby":deviceHostLabelId,open:open,onClose:onClose,fullWidth:true,fullScreen:mobile,scroll:"paper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_DialogTitleWithClose__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{onClose:onClose,id:deviceHostLabelId},(0,_translations__WEBPACK_IMPORTED_MODULE_12__.tL)("startAsimulator")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,{ref:contentRef},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,Object.assign({tabIndex:0,id:searchId,sx:{mt:"8px"},label:(0,_translations__WEBPACK_IMPORTED_MODULE_12__.tL)("filterSimulators"),inputProps:{"aria-label":"Filter textbox for simulators"},type:"search",fullWidth:true,size:"small",autoFocus:true,value:query,onChange:handleSearchChange,autoComplete:"off"},keyboardProps)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,{sx:{height:mobile?undefined:"min(32rem, 80vh)"}},results.map(_ref2=>{var{id,name,server,simulator}=_ref2;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP,Object.assign({button:true,key:id,onClick:server?handleProviderDefinition(server):handleHostedSimulator(simulator)},keyboardProps),name);}))),_jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_2__/* .Flags.diagnostics */ .v.diagnostics&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,null,_jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_2__/* .Flags.diagnostics */ .v.diagnostics&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,{variant:"outlined",onClick:handleAddAll},"start all simulators")));}

/***/ }),

/***/ 38846:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ keyCodeFromEvent; },
/* harmony export */   "Z": function() { return /* binding */ useFireKey; }
/* harmony export */ });
var ENTER_KEY=13;var SPACE_KEY=32;function keyCodeFromEvent(e){return typeof e.which=="number"?e.which:e.keyCode;}function useFireKey(handler){if(!handler)return undefined;return e=>{var charCode=keyCodeFromEvent(e);if(charCode===ENTER_KEY||charCode===SPACE_KEY){e.preventDefault();handler();}};}

/***/ }),

/***/ 82312:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useKeyboardNavigationProps; }
});

// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__(38846);
;// CONCATENATED MODULE: ./src/components/hooks/useArrowKeys.ts
var PAGE_DOWN=34;var PAGE_UP=33;var HOME=36;var END=35;var LEFT_KEY=37;var UP_KEY=38;var RIGHT_KEY=39;var DOWN_KEY=40;function useArrowKeys(options){var{onLeft,onUp,onRight,onDown,symmetric}=options;if(!onLeft&&!onUp&&!onRight&&!onDown)return undefined;var handlers={[LEFT_KEY]:onLeft,[RIGHT_KEY]:onRight,[UP_KEY]:onUp||symmetric&&onRight,[DOWN_KEY]:onDown||symmetric&&onLeft};return e=>{var charCode=(0,useFireKey/* keyCodeFromEvent */.$)(e);var handler=handlers[charCode];if(handler){e.preventDefault();handler();}};}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigation.ts
function useKeyboardNavigation(parentRef,wrap){if(wrap===void 0){wrap=false;}var query='[tabindex="0"]';var onMove=offset=>()=>{var focusable=Array.from((parentRef===null||parentRef===void 0?void 0:parentRef.querySelectorAll(query))||[]);if(focusable.length){var me=focusable.findIndex(f=>f===document.activeElement);// don't wrap
if(!wrap&&(me===0&&offset<0||me===focusable.length-1&&offset>0))return;var next=(me+offset+focusable.length)%focusable.length;focusable[next].focus();}};return onMove;}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts
function useKeyboardNavigationProps(parentRef,vertical){var onMove=useKeyboardNavigation(parentRef);var onKeyDown=useArrowKeys({onLeft:!vertical&&onMove(-1),onRight:!vertical&&onMove(1),onDown:vertical&&onMove(1),onUp:vertical&&onMove(-1)});return{onKeyDown:parentRef&&onKeyDown};}

/***/ }),

/***/ 27761:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tL": function() { return /* binding */ tL; },
/* harmony export */   "Q": function() { return /* binding */ translateServer; }
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17563);
var translations={en:{active:"active",inactive:"inactive",on:"on",off:"off",red:"red",yellow:"yellow",green:"green",orange:"orange",text:"text",intensity:"intensity",clearDisplay:"clear the entire display",vibrate:"vibrate",vibrationPattern:"vibration pattern",sendVibPattern:"send vibration pattern",patternVibrations:"Pattern of vibrations",patternTooLong:"Pattern too long",maximum:"maximum",pressVibrate:"Press VIBRATE to enable sound playback.",clickActivateSounds:"Click to activate sounds",simulators:"Simulators",devices:"Devices",autoStart:"Auto start",startSimulator:"Start simulator",startAsimulator:"Start a simulator",clearSimulators:"clear simulators",filterSimulators:"filter simulators",blockAdd:"Add blocks",blockEnabled:"Add blocks for your connected and simulated devices to the modules drawer",blockDisabled:"This button becomes available if you have devices connected that don't have their matching blocks added to the 'Modules' drawer",simAdd:"Add simulators",simEnabled:"Create a simulator for each Role without an assigned device",simDisabled:"This button becomes available if there are Roles without assignable devices"},de:{active:"aktiv",inactive:"inaktiv",on:"an",off:"aus",red:"rot",yellow:"gelb",green:"grün",orange:"orange",text:"Text",intensity:"Intensität",clearDisplay:"Anzeige löschen",vibrate:"vibrieren",vibrationPattern:"Vibrationsmuster",sendVibPattern:"Vibrationsmuster senden",patternVibrations:"Muster der Vibrationen",patternTooLong:"Muster zu lang",maximum:"Maximum",pressVibrate:"Drücke VIBRIEREN, um die Soundwiedergabe zu aktivieren.",clickActivateSounds:"Klicke, um Sounds zu aktivieren",simulators:"Simulatoren",devices:"Geräte",autoStart:"Automatisch starten",startSimulator:"Simulator starten",startAsimulator:"Einen Simulator starten",clearSimulators:"Simulatoren löschen",filterSimulators:"Simulatoren filtern",blockAdd:"Blöcke hinzufügen",blockEnabled:"Füge Blöcke für die verbundenen und simulierten Geräte zur Modulauswahl hinzu",blockDisabled:"Diese Schaltfläche wird verfügbar, wenn Geräte verbunden sind, für die noch keine passenden Blöcke in der 'Module'-Leiste hinzugefügt wurden",simAdd:"Simulatoren hinzufügen",simEnabled:"Erstelle einen Simulator für jede Rolle ohne zugewiesenes Gerät",simDisabled:"Diese Schaltfläche wird verfügbar, wenn es Rollen ohne zuweisbare Geräte gibt"}};function getLang(){var qs=query_string__WEBPACK_IMPORTED_MODULE_0__.parse(location.search);if(qs.language&&typeof qs.language==="string")return qs.language;var lang=typeof navigator!=="undefined"?navigator.language.slice(0,2):"en";return lang;}function tL(key){var _translations$lang;var lang=getLang();return((_translations$lang=translations[lang])===null||_translations$lang===void 0?void 0:_translations$lang[key])||translations.en[key];}var translate_servers={de:{accelerometer:"Beschleunigungssensor","humidity + temperature":"Feuchtigkeit + Temperatur","vibration motor":"Vibrationsmotor",button:"Knopf",color:"Farbe","eCO₂":"eCO₂","electrical conductivity":"elektrische Leitfähigkeit","cursor character screen (LCD, 16x2)":"Cursor-Zeichenbildschirm (LCD, 16x2)","rotations per minute":"Umdrehungen pro Minute","light level (solar)":"Lichtstärke (solar)","magnetic field level":"Magnetfeldstärke",power:"Stromversorgung","relay (EM/10A)":"Relais (EM/10A)","water pump (relay)":"Wasserpumpe (Relais)","LED ring 8 pixels":"LED-Ring 8 Pixel","LED pixel strip 30":"LED-Pixelstreifen 30","LED pixel strip 60":"LED-Pixelstreifen 60","LED pixel strip 150":"LED-Pixelstreifen 150","LED pixel strip 300":"LED-Pixelstreifen 300","rotary encoder + button":"Drehgeber + Knopf",servo:"Servo","servo (270°)":"Servo (270°)","servo (360°)":"Servo (360°)","servo (continuous)":"Servo (kontinuierlich)","rotary potentiometer":"Drehpotentiometer","slider (potentiometer)":"Schieberegler (Potentiometer)","Hall sensor (potentiometer)":"Hallsensor (Potentiometer)","distance (sonar)":"Entfernung (Ultraschall)","DC current/voltage measurement":"Gleichstrom-/Spannungsmessung","light bulb":"Glühbirne","line sensor (3x digital)":"Liniensensor (3x digital)","soil moisture":"Bodenfeuchtigkeit","water acidity (pH)":"Wasser-Säuregehalt (pH)","thermometer (outdoor)":"Thermometer (außen)","thermometer (soil)":"Thermometer (Boden)","thermometer (medical)":"Thermometer (medizinisch)",buzzer:"Summer",motion:"Bewegung","UV index":"UV-Index","light bulb (dimmeable)":"Glühbirne (dimmbar)"}};function translateServer(name){var lang=getLang();if(lang==="en")return name;if(translate_servers[lang]){return translate_servers[lang][name]||name;}return name;}

/***/ }),

/***/ 17563:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(70610);
const decodeComponent = __webpack_require__(44020);
const splitOnFirst = __webpack_require__(80500);
const filterObject = __webpack_require__(92806);

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${encode(object.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};


/***/ }),

/***/ 68991:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(71887), __webpack_require__(67294)) :
    0;
})(this, (function (exports, MiniSearch, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var MiniSearch__default = /*#__PURE__*/_interopDefaultLegacy(MiniSearch);
    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function useMiniSearch(documents, options) {
        var optionsRef = React.useRef(options);
        var miniSearchRef = React.useRef(new MiniSearch__default["default"](options));
        var documentByIdRef = React.useRef({});
        var _a = React.useState(null), rawResults = _a[0], setRawResults = _a[1];
        var _b = React.useState(null), searchResults = _b[0], setSearchResults = _b[1];
        var _c = React.useState(null), suggestions = _c[0], setSuggestions = _c[1];
        var _d = React.useState(false), isIndexing = _d[0], setIsIndexing = _d[1];
        var utils = React.useMemo(function () {
            var miniSearch = miniSearchRef.current;
            var documentById = documentByIdRef.current;
            var options = optionsRef.current;
            var idField = options.idField || MiniSearch__default["default"].getDefault('idField');
            var extractField = options.extractField || MiniSearch__default["default"].getDefault('extractField');
            var gatherById = function (documents) { return documents.reduce(function (byId, doc) {
                var id = extractField(doc, idField);
                byId[id] = doc;
                return byId;
            }, {}); };
            var search = function (query, searchOptions) {
                var results = miniSearch.search(query, searchOptions);
                var searchResults = results.map(function (_a) {
                    var id = _a.id;
                    return documentById[id];
                });
                setSearchResults(searchResults);
                setRawResults(results);
            };
            var autoSuggest = function (query, searchOptions) {
                var suggestions = miniSearch.autoSuggest(query, searchOptions);
                setSuggestions(suggestions);
            };
            var add = function (document) {
                documentByIdRef.current[extractField(document, idField)] = document;
                miniSearch.add(document);
            };
            var addAll = function (documents) {
                var byId = gatherById(documents);
                documentByIdRef.current = Object.assign(documentById, byId);
                miniSearch.addAll(documents);
            };
            var addAllAsync = function (documents, options) {
                var byId = gatherById(documents);
                documentByIdRef.current = Object.assign(documentById, byId);
                setIsIndexing(true);
                return miniSearch.addAllAsync(documents, options || {}).then(function () {
                    setIsIndexing(false);
                });
            };
            var remove = function (document) {
                miniSearch.remove(document);
                documentByIdRef.current = removeFromMap(documentById, extractField(document, idField));
            };
            var removeById = function (id) {
                var document = documentById[id];
                if (document == null) {
                    throw new Error("react-minisearch: document with id ".concat(id, " does not exist in the index"));
                }
                miniSearch.remove(document);
                documentByIdRef.current = removeFromMap(documentById, id);
            };
            var removeAll = function (documents) {
                if (arguments.length === 0) {
                    miniSearch.removeAll();
                    documentByIdRef.current = {};
                }
                else {
                    miniSearch.removeAll(documents);
                    var idsToRemove = documents.map(function (doc) { return extractField(doc, idField); });
                    documentByIdRef.current = removeManyFromMap(documentById, idsToRemove);
                }
            };
            var discard = function (id) {
                miniSearch.discard(id);
                documentByIdRef.current = removeFromMap(documentById, id);
            };
            var discardAll = function (ids) {
                miniSearch.discardAll(ids);
                documentByIdRef.current = removeManyFromMap(documentById, ids);
            };
            var replace = function (document) {
                miniSearch.replace(document);
                documentByIdRef.current[extractField(document, idField)] = document;
            };
            var clearSearch = function () {
                setSearchResults(null);
                setRawResults(null);
            };
            var clearSuggestions = function () {
                setSuggestions(null);
            };
            return {
                search: search,
                autoSuggest: autoSuggest,
                add: add,
                addAll: addAll,
                addAllAsync: addAllAsync,
                remove: remove,
                removeById: removeById,
                removeAll: removeAll,
                discard: discard,
                discardAll: discardAll,
                replace: replace,
                clearSearch: clearSearch,
                clearSuggestions: clearSuggestions,
                miniSearch: miniSearch
            };
        }, []);
        React.useEffect(function () {
            utils.addAll(documents);
            return function () {
                utils.removeAll(documents);
            };
        }, [utils, documents]);
        return __assign(__assign({ searchResults: searchResults, rawResults: rawResults, suggestions: suggestions, isIndexing: isIndexing }, utils), { removeById: utils.discard });
    }
    function removeFromMap(map, keyToRemove) {
        delete map[keyToRemove];
        return map;
    }
    function removeManyFromMap(map, keysToRemove) {
        keysToRemove.forEach(function (keyToRemove) {
            delete map[keyToRemove];
        });
        return map;
    }
    function getDisplayName(Component) {
        return Component.displayName || Component.name || 'Component';
    }
    function withMiniSearch(documents, options, Component) {
        var WithMiniSearch = function (props) {
            var miniSearchProps = useMiniSearch(documents, options);
            return React__default["default"].createElement(Component, __assign({}, miniSearchProps, props));
        };
        WithMiniSearch.displayName = "WithMiniSearch(".concat(getDisplayName(Component), ")");
        return WithMiniSearch;
    }
    var WithMiniSearch = function (_a) {
        var documents = _a.documents, options = _a.options, children = _a.children;
        var miniSearchProps = useMiniSearch(documents, options);
        return children(miniSearchProps);
    };

    exports.WithMiniSearch = WithMiniSearch;
    exports.useMiniSearch = useMiniSearch;
    exports.withMiniSearch = withMiniSearch;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=react-minisearch.js.map


/***/ }),

/***/ 80500:
/***/ (function(module) {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ 70610:
/***/ (function(module) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ 71887:
/***/ (function(module) {

"use strict";


/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @ignore */
var ENTRIES = 'ENTRIES';
/** @ignore */
var KEYS = 'KEYS';
/** @ignore */
var VALUES = 'VALUES';
/** @ignore */
var LEAF = '';
/**
 * @private
 */
var TreeIterator = /** @class */ (function () {
    function TreeIterator(set, type) {
        var node = set._tree;
        var keys = Array.from(node.keys());
        this.set = set;
        this._type = type;
        this._path = keys.length > 0 ? [{ node: node, keys: keys }] : [];
    }
    TreeIterator.prototype.next = function () {
        var value = this.dive();
        this.backtrack();
        return value;
    };
    TreeIterator.prototype.dive = function () {
        if (this._path.length === 0) {
            return { done: true, value: undefined };
        }
        var _a = last$1(this._path), node = _a.node, keys = _a.keys;
        if (last$1(keys) === LEAF) {
            return { done: false, value: this.result() };
        }
        var child = node.get(last$1(keys));
        this._path.push({ node: child, keys: Array.from(child.keys()) });
        return this.dive();
    };
    TreeIterator.prototype.backtrack = function () {
        if (this._path.length === 0) {
            return;
        }
        var keys = last$1(this._path).keys;
        keys.pop();
        if (keys.length > 0) {
            return;
        }
        this._path.pop();
        this.backtrack();
    };
    TreeIterator.prototype.key = function () {
        return this.set._prefix + this._path
            .map(function (_a) {
            var keys = _a.keys;
            return last$1(keys);
        })
            .filter(function (key) { return key !== LEAF; })
            .join('');
    };
    TreeIterator.prototype.value = function () {
        return last$1(this._path).node.get(LEAF);
    };
    TreeIterator.prototype.result = function () {
        switch (this._type) {
            case VALUES: return this.value();
            case KEYS: return this.key();
            default: return [this.key(), this.value()];
        }
    };
    TreeIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    return TreeIterator;
}());
var last$1 = function (array) {
    return array[array.length - 1];
};

/**
 * @ignore
 */
var fuzzySearch = function (node, query, maxDistance) {
    var results = new Map();
    if (query === undefined)
        return results;
    // Number of columns in the Levenshtein matrix.
    var n = query.length + 1;
    // Matching terms can never be longer than N + maxDistance.
    var m = n + maxDistance;
    // Fill first matrix row and column with numbers: 0 1 2 3 ...
    var matrix = new Uint8Array(m * n).fill(maxDistance + 1);
    for (var j = 0; j < n; ++j)
        matrix[j] = j;
    for (var i = 1; i < m; ++i)
        matrix[i * n] = i;
    recurse(node, query, maxDistance, results, matrix, 1, n, '');
    return results;
};
// Modified version of http://stevehanov.ca/blog/?id=114
// This builds a Levenshtein matrix for a given query and continuously updates
// it for nodes in the radix tree that fall within the given maximum edit
// distance. Keeping the same matrix around is beneficial especially for larger
// edit distances.
//
//           k   a   t   e   <-- query
//       0   1   2   3   4
//   c   1   1   2   3   4
//   a   2   2   1   2   3
//   t   3   3   2   1  [2]  <-- edit distance
//   ^
//   ^ term in radix tree, rows are added and removed as needed
var recurse = function (node, query, maxDistance, results, matrix, m, n, prefix) {
    var e_1, _a;
    var offset = m * n;
    try {
        key: for (var _b = __values(node.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            if (key === LEAF) {
                // We've reached a leaf node. Check if the edit distance acceptable and
                // store the result if it is.
                var distance = matrix[offset - 1];
                if (distance <= maxDistance) {
                    results.set(prefix, [node.get(key), distance]);
                }
            }
            else {
                // Iterate over all characters in the key. Update the Levenshtein matrix
                // and check if the minimum distance in the last row is still within the
                // maximum edit distance. If it is, we can recurse over all child nodes.
                var i = m;
                for (var pos = 0; pos < key.length; ++pos, ++i) {
                    var char = key[pos];
                    var thisRowOffset = n * i;
                    var prevRowOffset = thisRowOffset - n;
                    // Set the first column based on the previous row, and initialize the
                    // minimum distance in the current row.
                    var minDistance = matrix[thisRowOffset];
                    var jmin = Math.max(0, i - maxDistance - 1);
                    var jmax = Math.min(n - 1, i + maxDistance);
                    // Iterate over remaining columns (characters in the query).
                    for (var j = jmin; j < jmax; ++j) {
                        var different = char !== query[j];
                        // It might make sense to only read the matrix positions used for
                        // deletion/insertion if the characters are different. But we want to
                        // avoid conditional reads for performance reasons.
                        var rpl = matrix[prevRowOffset + j] + +different;
                        var del = matrix[prevRowOffset + j + 1] + 1;
                        var ins = matrix[thisRowOffset + j] + 1;
                        var dist = matrix[thisRowOffset + j + 1] = Math.min(rpl, del, ins);
                        if (dist < minDistance)
                            minDistance = dist;
                    }
                    // Because distance will never decrease, we can stop. There will be no
                    // matching child nodes.
                    if (minDistance > maxDistance) {
                        continue key;
                    }
                }
                recurse(node.get(key), query, maxDistance, results, matrix, i, n, prefix + key);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
};

/**
 * A class implementing the same interface as a standard JavaScript
 * [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 * with string keys, but adding support for efficiently searching entries with
 * prefix or fuzzy search. This class is used internally by [[MiniSearch]] as
 * the inverted index data structure. The implementation is a radix tree
 * (compressed prefix tree).
 *
 * Since this class can be of general utility beyond _MiniSearch_, it is
 * exported by the `minisearch` package and can be imported (or required) as
 * `minisearch/SearchableMap`.
 *
 * @typeParam T  The type of the values stored in the map.
 */
var SearchableMap = /** @class */ (function () {
    /**
     * The constructor is normally called without arguments, creating an empty
     * map. In order to create a [[SearchableMap]] from an iterable or from an
     * object, check [[SearchableMap.from]] and [[SearchableMap.fromObject]].
     *
     * The constructor arguments are for internal use, when creating derived
     * mutable views of a map at a prefix.
     */
    function SearchableMap(tree, prefix) {
        if (tree === void 0) { tree = new Map(); }
        if (prefix === void 0) { prefix = ''; }
        this._size = undefined;
        this._tree = tree;
        this._prefix = prefix;
    }
    /**
     * Creates and returns a mutable view of this [[SearchableMap]], containing only
     * entries that share the given prefix.
     *
     * ### Usage:
     *
     * ```javascript
     * let map = new SearchableMap()
     * map.set("unicorn", 1)
     * map.set("universe", 2)
     * map.set("university", 3)
     * map.set("unique", 4)
     * map.set("hello", 5)
     *
     * let uni = map.atPrefix("uni")
     * uni.get("unique") // => 4
     * uni.get("unicorn") // => 1
     * uni.get("hello") // => undefined
     *
     * let univer = map.atPrefix("univer")
     * univer.get("unique") // => undefined
     * univer.get("universe") // => 2
     * univer.get("university") // => 3
     * ```
     *
     * @param prefix  The prefix
     * @return A [[SearchableMap]] representing a mutable view of the original Map at the given prefix
     */
    SearchableMap.prototype.atPrefix = function (prefix) {
        var e_1, _a;
        if (!prefix.startsWith(this._prefix)) {
            throw new Error('Mismatched prefix');
        }
        var _b = __read(trackDown(this._tree, prefix.slice(this._prefix.length)), 2), node = _b[0], path = _b[1];
        if (node === undefined) {
            var _c = __read(last(path), 2), parentNode = _c[0], key = _c[1];
            try {
                for (var _d = __values(parentNode.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var k = _e.value;
                    if (k !== LEAF && k.startsWith(key)) {
                        var node_1 = new Map();
                        node_1.set(k.slice(key.length), parentNode.get(k));
                        return new SearchableMap(node_1, prefix);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return new SearchableMap(node, prefix);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear
     */
    SearchableMap.prototype.clear = function () {
        this._size = undefined;
        this._tree.clear();
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete
     * @param key  Key to delete
     */
    SearchableMap.prototype.delete = function (key) {
        this._size = undefined;
        return remove(this._tree, key);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries
     * @return An iterator iterating through `[key, value]` entries.
     */
    SearchableMap.prototype.entries = function () {
        return new TreeIterator(this, ENTRIES);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
     * @param fn  Iteration function
     */
    SearchableMap.prototype.forEach = function (fn) {
        var e_2, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                fn(key, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * Returns a Map of all the entries that have a key within the given edit
     * distance from the search key. The keys of the returned Map are the matching
     * keys, while the values are two-element arrays where the first element is
     * the value associated to the key, and the second is the edit distance of the
     * key to the search key.
     *
     * ### Usage:
     *
     * ```javascript
     * let map = new SearchableMap()
     * map.set('hello', 'world')
     * map.set('hell', 'yeah')
     * map.set('ciao', 'mondo')
     *
     * // Get all entries that match the key 'hallo' with a maximum edit distance of 2
     * map.fuzzyGet('hallo', 2)
     * // => Map(2) { 'hello' => ['world', 1], 'hell' => ['yeah', 2] }
     *
     * // In the example, the "hello" key has value "world" and edit distance of 1
     * // (change "e" to "a"), the key "hell" has value "yeah" and edit distance of 2
     * // (change "e" to "a", delete "o")
     * ```
     *
     * @param key  The search key
     * @param maxEditDistance  The maximum edit distance (Levenshtein)
     * @return A Map of the matching keys to their value and edit distance
     */
    SearchableMap.prototype.fuzzyGet = function (key, maxEditDistance) {
        return fuzzySearch(this._tree, key, maxEditDistance);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
     * @param key  Key to get
     * @return Value associated to the key, or `undefined` if the key is not
     * found.
     */
    SearchableMap.prototype.get = function (key) {
        var node = lookup(this._tree, key);
        return node !== undefined ? node.get(LEAF) : undefined;
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
     * @param key  Key
     * @return True if the key is in the map, false otherwise
     */
    SearchableMap.prototype.has = function (key) {
        var node = lookup(this._tree, key);
        return node !== undefined && node.has(LEAF);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys
     * @return An `Iterable` iterating through keys
     */
    SearchableMap.prototype.keys = function () {
        return new TreeIterator(this, KEYS);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
     * @param key  Key to set
     * @param value  Value to associate to the key
     * @return The [[SearchableMap]] itself, to allow chaining
     */
    SearchableMap.prototype.set = function (key, value) {
        if (typeof key !== 'string') {
            throw new Error('key must be a string');
        }
        this._size = undefined;
        var node = createPath(this._tree, key);
        node.set(LEAF, value);
        return this;
    };
    Object.defineProperty(SearchableMap.prototype, "size", {
        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size
         */
        get: function () {
            if (this._size) {
                return this._size;
            }
            /** @ignore */
            this._size = 0;
            var iter = this.entries();
            while (!iter.next().done)
                this._size += 1;
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Updates the value at the given key using the provided function. The function
     * is called with the current value at the key, and its return value is used as
     * the new value to be set.
     *
     * ### Example:
     *
     * ```javascript
     * // Increment the current value by one
     * searchableMap.update('somekey', (currentValue) => currentValue == null ? 0 : currentValue + 1)
     * ```
     *
     * If the value at the given key is or will be an object, it might not require
     * re-assignment. In that case it is better to use `fetch()`, because it is
     * faster.
     *
     * @param key  The key to update
     * @param fn  The function used to compute the new value from the current one
     * @return The [[SearchableMap]] itself, to allow chaining
     */
    SearchableMap.prototype.update = function (key, fn) {
        if (typeof key !== 'string') {
            throw new Error('key must be a string');
        }
        this._size = undefined;
        var node = createPath(this._tree, key);
        node.set(LEAF, fn(node.get(LEAF)));
        return this;
    };
    /**
     * Fetches the value of the given key. If the value does not exist, calls the
     * given function to create a new value, which is inserted at the given key
     * and subsequently returned.
     *
     * ### Example:
     *
     * ```javascript
     * const map = searchableMap.fetch('somekey', () => new Map())
     * map.set('foo', 'bar')
     * ```
     *
     * @param key  The key to update
     * @param defaultValue  A function that creates a new value if the key does not exist
     * @return The existing or new value at the given key
     */
    SearchableMap.prototype.fetch = function (key, initial) {
        if (typeof key !== 'string') {
            throw new Error('key must be a string');
        }
        this._size = undefined;
        var node = createPath(this._tree, key);
        var value = node.get(LEAF);
        if (value === undefined) {
            node.set(LEAF, value = initial());
        }
        return value;
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
     * @return An `Iterable` iterating through values.
     */
    SearchableMap.prototype.values = function () {
        return new TreeIterator(this, VALUES);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator
     */
    SearchableMap.prototype[Symbol.iterator] = function () {
        return this.entries();
    };
    /**
     * Creates a [[SearchableMap]] from an `Iterable` of entries
     *
     * @param entries  Entries to be inserted in the [[SearchableMap]]
     * @return A new [[SearchableMap]] with the given entries
     */
    SearchableMap.from = function (entries) {
        var e_3, _a;
        var tree = new SearchableMap();
        try {
            for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                var _b = __read(entries_1_1.value, 2), key = _b[0], value = _b[1];
                tree.set(key, value);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return tree;
    };
    /**
     * Creates a [[SearchableMap]] from the iterable properties of a JavaScript object
     *
     * @param object  Object of entries for the [[SearchableMap]]
     * @return A new [[SearchableMap]] with the given entries
     */
    SearchableMap.fromObject = function (object) {
        return SearchableMap.from(Object.entries(object));
    };
    return SearchableMap;
}());
var trackDown = function (tree, key, path) {
    var e_4, _a;
    if (path === void 0) { path = []; }
    if (key.length === 0 || tree == null) {
        return [tree, path];
    }
    try {
        for (var _b = __values(tree.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var k = _c.value;
            if (k !== LEAF && key.startsWith(k)) {
                path.push([tree, k]); // performance: update in place
                return trackDown(tree.get(k), key.slice(k.length), path);
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_4) throw e_4.error; }
    }
    path.push([tree, key]); // performance: update in place
    return trackDown(undefined, '', path);
};
var lookup = function (tree, key) {
    var e_5, _a;
    if (key.length === 0 || tree == null) {
        return tree;
    }
    try {
        for (var _b = __values(tree.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var k = _c.value;
            if (k !== LEAF && key.startsWith(k)) {
                return lookup(tree.get(k), key.slice(k.length));
            }
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_5) throw e_5.error; }
    }
};
// Create a path in the radix tree for the given key, and returns the deepest
// node. This function is in the hot path for indexing. It avoids unnecessary
// string operations and recursion for performance.
var createPath = function (node, key) {
    var e_6, _a;
    var keyLength = key.length;
    outer: for (var pos = 0; node && pos < keyLength;) {
        try {
            for (var _b = (e_6 = void 0, __values(node.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var k = _c.value;
                // Check whether this key is a candidate: the first characters must match.
                if (k !== LEAF && key[pos] === k[0]) {
                    var len = Math.min(keyLength - pos, k.length);
                    // Advance offset to the point where key and k no longer match.
                    var offset = 1;
                    while (offset < len && key[pos + offset] === k[offset])
                        ++offset;
                    var child_1 = node.get(k);
                    if (offset === k.length) {
                        // The existing key is shorter than the key we need to create.
                        node = child_1;
                    }
                    else {
                        // Partial match: we need to insert an intermediate node to contain
                        // both the existing subtree and the new node.
                        var intermediate = new Map();
                        intermediate.set(k.slice(offset), child_1);
                        node.set(key.slice(pos, pos + offset), intermediate);
                        node.delete(k);
                        node = intermediate;
                    }
                    pos += offset;
                    continue outer;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        // Create a final child node to contain the final suffix of the key.
        var child = new Map();
        node.set(key.slice(pos), child);
        return child;
    }
    return node;
};
var remove = function (tree, key) {
    var _a = __read(trackDown(tree, key), 2), node = _a[0], path = _a[1];
    if (node === undefined) {
        return;
    }
    node.delete(LEAF);
    if (node.size === 0) {
        cleanup(path);
    }
    else if (node.size === 1) {
        var _b = __read(node.entries().next().value, 2), key_1 = _b[0], value = _b[1];
        merge(path, key_1, value);
    }
};
var cleanup = function (path) {
    if (path.length === 0) {
        return;
    }
    var _a = __read(last(path), 2), node = _a[0], key = _a[1];
    node.delete(key);
    if (node.size === 0) {
        cleanup(path.slice(0, -1));
    }
    else if (node.size === 1) {
        var _b = __read(node.entries().next().value, 2), key_2 = _b[0], value = _b[1];
        if (key_2 !== LEAF) {
            merge(path.slice(0, -1), key_2, value);
        }
    }
};
var merge = function (path, key, value) {
    if (path.length === 0) {
        return;
    }
    var _a = __read(last(path), 2), node = _a[0], nodeKey = _a[1];
    node.set(nodeKey + key, value);
    node.delete(nodeKey);
};
var last = function (array) {
    return array[array.length - 1];
};

var _a;
var OR = 'or';
var AND = 'and';
var AND_NOT = 'and_not';
/**
 * [[MiniSearch]] is the main entrypoint class, implementing a full-text search
 * engine in memory.
 *
 * @typeParam T  The type of the documents being indexed.
 *
 * ### Basic example:
 *
 * ```javascript
 * const documents = [
 *   {
 *     id: 1,
 *     title: 'Moby Dick',
 *     text: 'Call me Ishmael. Some years ago...',
 *     category: 'fiction'
 *   },
 *   {
 *     id: 2,
 *     title: 'Zen and the Art of Motorcycle Maintenance',
 *     text: 'I can see by my watch...',
 *     category: 'fiction'
 *   },
 *   {
 *     id: 3,
 *     title: 'Neuromancer',
 *     text: 'The sky above the port was...',
 *     category: 'fiction'
 *   },
 *   {
 *     id: 4,
 *     title: 'Zen and the Art of Archery',
 *     text: 'At first sight it must seem...',
 *     category: 'non-fiction'
 *   },
 *   // ...and more
 * ]
 *
 * // Create a search engine that indexes the 'title' and 'text' fields for
 * // full-text search. Search results will include 'title' and 'category' (plus the
 * // id field, that is always stored and returned)
 * const miniSearch = new MiniSearch({
 *   fields: ['title', 'text'],
 *   storeFields: ['title', 'category']
 * })
 *
 * // Add documents to the index
 * miniSearch.addAll(documents)
 *
 * // Search for documents:
 * let results = miniSearch.search('zen art motorcycle')
 * // => [
 * //   { id: 2, title: 'Zen and the Art of Motorcycle Maintenance', category: 'fiction', score: 2.77258 },
 * //   { id: 4, title: 'Zen and the Art of Archery', category: 'non-fiction', score: 1.38629 }
 * // ]
 * ```
 */
var MiniSearch = /** @class */ (function () {
    /**
     * @param options  Configuration options
     *
     * ### Examples:
     *
     * ```javascript
     * // Create a search engine that indexes the 'title' and 'text' fields of your
     * // documents:
     * const miniSearch = new MiniSearch({ fields: ['title', 'text'] })
     * ```
     *
     * ### ID Field:
     *
     * ```javascript
     * // Your documents are assumed to include a unique 'id' field, but if you want
     * // to use a different field for document identification, you can set the
     * // 'idField' option:
     * const miniSearch = new MiniSearch({ idField: 'key', fields: ['title', 'text'] })
     * ```
     *
     * ### Options and defaults:
     *
     * ```javascript
     * // The full set of options (here with their default value) is:
     * const miniSearch = new MiniSearch({
     *   // idField: field that uniquely identifies a document
     *   idField: 'id',
     *
     *   // extractField: function used to get the value of a field in a document.
     *   // By default, it assumes the document is a flat object with field names as
     *   // property keys and field values as string property values, but custom logic
     *   // can be implemented by setting this option to a custom extractor function.
     *   extractField: (document, fieldName) => document[fieldName],
     *
     *   // tokenize: function used to split fields into individual terms. By
     *   // default, it is also used to tokenize search queries, unless a specific
     *   // `tokenize` search option is supplied. When tokenizing an indexed field,
     *   // the field name is passed as the second argument.
     *   tokenize: (string, _fieldName) => string.split(SPACE_OR_PUNCTUATION),
     *
     *   // processTerm: function used to process each tokenized term before
     *   // indexing. It can be used for stemming and normalization. Return a falsy
     *   // value in order to discard a term. By default, it is also used to process
     *   // search queries, unless a specific `processTerm` option is supplied as a
     *   // search option. When processing a term from a indexed field, the field
     *   // name is passed as the second argument.
     *   processTerm: (term, _fieldName) => term.toLowerCase(),
     *
     *   // searchOptions: default search options, see the `search` method for
     *   // details
     *   searchOptions: undefined,
     *
     *   // fields: document fields to be indexed. Mandatory, but not set by default
     *   fields: undefined
     *
     *   // storeFields: document fields to be stored and returned as part of the
     *   // search results.
     *   storeFields: []
     * })
     * ```
     */
    function MiniSearch(options) {
        if ((options === null || options === void 0 ? void 0 : options.fields) == null) {
            throw new Error('MiniSearch: option "fields" must be provided');
        }
        var autoVacuum = (options.autoVacuum == null || options.autoVacuum === true) ? defaultAutoVacuumOptions : options.autoVacuum;
        this._options = __assign(__assign(__assign({}, defaultOptions), options), { autoVacuum: autoVacuum, searchOptions: __assign(__assign({}, defaultSearchOptions), (options.searchOptions || {})), autoSuggestOptions: __assign(__assign({}, defaultAutoSuggestOptions), (options.autoSuggestOptions || {})) });
        this._index = new SearchableMap();
        this._documentCount = 0;
        this._documentIds = new Map();
        this._idToShortId = new Map();
        // Fields are defined during initialization, don't change, are few in
        // number, rarely need iterating over, and have string keys. Therefore in
        // this case an object is a better candidate than a Map to store the mapping
        // from field key to ID.
        this._fieldIds = {};
        this._fieldLength = new Map();
        this._avgFieldLength = [];
        this._nextId = 0;
        this._storedFields = new Map();
        this._dirtCount = 0;
        this._currentVacuum = null;
        this._enqueuedVacuum = null;
        this._enqueuedVacuumConditions = defaultVacuumConditions;
        this.addFields(this._options.fields);
    }
    /**
     * Adds a document to the index
     *
     * @param document  The document to be indexed
     */
    MiniSearch.prototype.add = function (document) {
        var e_1, _a, e_2, _b, e_3, _c;
        var _d = this._options, extractField = _d.extractField, tokenize = _d.tokenize, processTerm = _d.processTerm, fields = _d.fields, idField = _d.idField;
        var id = extractField(document, idField);
        if (id == null) {
            throw new Error("MiniSearch: document does not have ID field \"".concat(idField, "\""));
        }
        if (this._idToShortId.has(id)) {
            throw new Error("MiniSearch: duplicate ID ".concat(id));
        }
        var shortDocumentId = this.addDocumentId(id);
        this.saveStoredFields(shortDocumentId, document);
        try {
            for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var field = fields_1_1.value;
                var fieldValue = extractField(document, field);
                if (fieldValue == null)
                    continue;
                var tokens = tokenize(fieldValue.toString(), field);
                var fieldId = this._fieldIds[field];
                var uniqueTerms = new Set(tokens).size;
                this.addFieldLength(shortDocumentId, fieldId, this._documentCount - 1, uniqueTerms);
                try {
                    for (var tokens_1 = (e_2 = void 0, __values(tokens)), tokens_1_1 = tokens_1.next(); !tokens_1_1.done; tokens_1_1 = tokens_1.next()) {
                        var term = tokens_1_1.value;
                        var processedTerm = processTerm(term, field);
                        if (Array.isArray(processedTerm)) {
                            try {
                                for (var processedTerm_1 = (e_3 = void 0, __values(processedTerm)), processedTerm_1_1 = processedTerm_1.next(); !processedTerm_1_1.done; processedTerm_1_1 = processedTerm_1.next()) {
                                    var t = processedTerm_1_1.value;
                                    this.addTerm(fieldId, shortDocumentId, t);
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (processedTerm_1_1 && !processedTerm_1_1.done && (_c = processedTerm_1.return)) _c.call(processedTerm_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                        }
                        else if (processedTerm) {
                            this.addTerm(fieldId, shortDocumentId, processedTerm);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (tokens_1_1 && !tokens_1_1.done && (_b = tokens_1.return)) _b.call(tokens_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Adds all the given documents to the index
     *
     * @param documents  An array of documents to be indexed
     */
    MiniSearch.prototype.addAll = function (documents) {
        var e_4, _a;
        try {
            for (var documents_1 = __values(documents), documents_1_1 = documents_1.next(); !documents_1_1.done; documents_1_1 = documents_1.next()) {
                var document_1 = documents_1_1.value;
                this.add(document_1);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (documents_1_1 && !documents_1_1.done && (_a = documents_1.return)) _a.call(documents_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    /**
     * Adds all the given documents to the index asynchronously.
     *
     * Returns a promise that resolves (to `undefined`) when the indexing is done.
     * This method is useful when index many documents, to avoid blocking the main
     * thread. The indexing is performed asynchronously and in chunks.
     *
     * @param documents  An array of documents to be indexed
     * @param options  Configuration options
     * @return A promise resolving to `undefined` when the indexing is done
     */
    MiniSearch.prototype.addAllAsync = function (documents, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var _a = options.chunkSize, chunkSize = _a === void 0 ? 10 : _a;
        var acc = { chunk: [], promise: Promise.resolve() };
        var _b = documents.reduce(function (_a, document, i) {
            var chunk = _a.chunk, promise = _a.promise;
            chunk.push(document);
            if ((i + 1) % chunkSize === 0) {
                return {
                    chunk: [],
                    promise: promise
                        .then(function () { return new Promise(function (resolve) { return setTimeout(resolve, 0); }); })
                        .then(function () { return _this.addAll(chunk); })
                };
            }
            else {
                return { chunk: chunk, promise: promise };
            }
        }, acc), chunk = _b.chunk, promise = _b.promise;
        return promise.then(function () { return _this.addAll(chunk); });
    };
    /**
     * Removes the given document from the index.
     *
     * The document to remove must NOT have changed between indexing and removal,
     * otherwise the index will be corrupted.
     *
     * This method requires passing the full document to be removed (not just the
     * ID), and immediately removes the document from the inverted index, allowing
     * memory to be released. A convenient alternative is [[MiniSearch.discard]],
     * which needs only the document ID, and has the same visible effect, but
     * delays cleaning up the index until the next vacuuming.
     *
     * @param document  The document to be removed
     */
    MiniSearch.prototype.remove = function (document) {
        var e_5, _a, e_6, _b, e_7, _c;
        var _d = this._options, tokenize = _d.tokenize, processTerm = _d.processTerm, extractField = _d.extractField, fields = _d.fields, idField = _d.idField;
        var id = extractField(document, idField);
        if (id == null) {
            throw new Error("MiniSearch: document does not have ID field \"".concat(idField, "\""));
        }
        var shortId = this._idToShortId.get(id);
        if (shortId == null) {
            throw new Error("MiniSearch: cannot remove document with ID ".concat(id, ": it is not in the index"));
        }
        try {
            for (var fields_2 = __values(fields), fields_2_1 = fields_2.next(); !fields_2_1.done; fields_2_1 = fields_2.next()) {
                var field = fields_2_1.value;
                var fieldValue = extractField(document, field);
                if (fieldValue == null)
                    continue;
                var tokens = tokenize(fieldValue.toString(), field);
                var fieldId = this._fieldIds[field];
                var uniqueTerms = new Set(tokens).size;
                this.removeFieldLength(shortId, fieldId, this._documentCount, uniqueTerms);
                try {
                    for (var tokens_2 = (e_6 = void 0, __values(tokens)), tokens_2_1 = tokens_2.next(); !tokens_2_1.done; tokens_2_1 = tokens_2.next()) {
                        var term = tokens_2_1.value;
                        var processedTerm = processTerm(term, field);
                        if (Array.isArray(processedTerm)) {
                            try {
                                for (var processedTerm_2 = (e_7 = void 0, __values(processedTerm)), processedTerm_2_1 = processedTerm_2.next(); !processedTerm_2_1.done; processedTerm_2_1 = processedTerm_2.next()) {
                                    var t = processedTerm_2_1.value;
                                    this.removeTerm(fieldId, shortId, t);
                                }
                            }
                            catch (e_7_1) { e_7 = { error: e_7_1 }; }
                            finally {
                                try {
                                    if (processedTerm_2_1 && !processedTerm_2_1.done && (_c = processedTerm_2.return)) _c.call(processedTerm_2);
                                }
                                finally { if (e_7) throw e_7.error; }
                            }
                        }
                        else if (processedTerm) {
                            this.removeTerm(fieldId, shortId, processedTerm);
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (tokens_2_1 && !tokens_2_1.done && (_b = tokens_2.return)) _b.call(tokens_2);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (fields_2_1 && !fields_2_1.done && (_a = fields_2.return)) _a.call(fields_2);
            }
            finally { if (e_5) throw e_5.error; }
        }
        this._storedFields.delete(shortId);
        this._documentIds.delete(shortId);
        this._idToShortId.delete(id);
        this._fieldLength.delete(shortId);
        this._documentCount -= 1;
    };
    /**
     * Removes all the given documents from the index. If called with no arguments,
     * it removes _all_ documents from the index.
     *
     * @param documents  The documents to be removed. If this argument is omitted,
     * all documents are removed. Note that, for removing all documents, it is
     * more efficient to call this method with no arguments than to pass all
     * documents.
     */
    MiniSearch.prototype.removeAll = function (documents) {
        var e_8, _a;
        if (documents) {
            try {
                for (var documents_2 = __values(documents), documents_2_1 = documents_2.next(); !documents_2_1.done; documents_2_1 = documents_2.next()) {
                    var document_2 = documents_2_1.value;
                    this.remove(document_2);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (documents_2_1 && !documents_2_1.done && (_a = documents_2.return)) _a.call(documents_2);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        else if (arguments.length > 0) {
            throw new Error('Expected documents to be present. Omit the argument to remove all documents.');
        }
        else {
            this._index = new SearchableMap();
            this._documentCount = 0;
            this._documentIds = new Map();
            this._idToShortId = new Map();
            this._fieldLength = new Map();
            this._avgFieldLength = [];
            this._storedFields = new Map();
            this._nextId = 0;
        }
    };
    /**
     * Discards the document with the given ID, so it won't appear in search results
     *
     * It has the same visible effect of [[MiniSearch.remove]] (both cause the
     * document to stop appearing in searches), but a different effect on the
     * internal data structures:
     *
     *   - [[MiniSearch.remove]] requires passing the full document to be removed
     *   as argument, and removes it from the inverted index immediately.
     *
     *   - [[MiniSearch.discard]] instead only needs the document ID, and works by
     *   marking the current version of the document as discarded, so it is
     *   immediately ignored by searches. This is faster and more convenient than
     *   `remove`, but the index is not immediately modified. To take care of
     *   that, vacuuming is performed after a certain number of documents are
     *   discarded, cleaning up the index and allowing memory to be released.
     *
     * After discarding a document, it is possible to re-add a new version, and
     * only the new version will appear in searches. In other words, discarding
     * and re-adding a document works exactly like removing and re-adding it. The
     * [[MiniSearch.replace]] method can also be used to replace a document with a
     * new version.
     *
     * #### Details about vacuuming
     *
     * Repetite calls to this method would leave obsolete document references in
     * the index, invisible to searches. Two mechanisms take care of cleaning up:
     * clean up during search, and vacuuming.
     *
     *   - Upon search, whenever a discarded ID is found (and ignored for the
     *   results), references to the discarded document are removed from the
     *   inverted index entries for the search terms. This ensures that subsequent
     *   searches for the same terms do not need to skip these obsolete references
     *   again.
     *
     *   - In addition, vacuuming is performed automatically by default (see the
     *   `autoVacuum` field in [[Options]]) after a certain number of documents
     *   are discarded. Vacuuming traverses all terms in the index, cleaning up
     *   all references to discarded documents. Vacuuming can also be triggered
     *   manually by calling [[MiniSearch.vacuum]].
     *
     * @param id  The ID of the document to be discarded
     */
    MiniSearch.prototype.discard = function (id) {
        var _this = this;
        var shortId = this._idToShortId.get(id);
        if (shortId == null) {
            throw new Error("MiniSearch: cannot discard document with ID ".concat(id, ": it is not in the index"));
        }
        this._idToShortId.delete(id);
        this._documentIds.delete(shortId);
        this._storedFields.delete(shortId);
        (this._fieldLength.get(shortId) || []).forEach(function (fieldLength, fieldId) {
            _this.removeFieldLength(shortId, fieldId, _this._documentCount, fieldLength);
        });
        this._fieldLength.delete(shortId);
        this._documentCount -= 1;
        this._dirtCount += 1;
        this.maybeAutoVacuum();
    };
    MiniSearch.prototype.maybeAutoVacuum = function () {
        if (this._options.autoVacuum === false) {
            return;
        }
        var _a = this._options.autoVacuum, minDirtFactor = _a.minDirtFactor, minDirtCount = _a.minDirtCount, batchSize = _a.batchSize, batchWait = _a.batchWait;
        this.conditionalVacuum({ batchSize: batchSize, batchWait: batchWait }, { minDirtCount: minDirtCount, minDirtFactor: minDirtFactor });
    };
    /**
     * Discards the documents with the given IDs, so they won't appear in search
     * results
     *
     * It is equivalent to calling [[MiniSearch.discard]] for all the given IDs,
     * but with the optimization of triggering at most one automatic vacuuming at
     * the end.
     *
     * Note: to remove all documents from the index, it is faster and more
     * convenient to call [[MiniSearch.removeAll]] with no argument, instead of
     * passing all IDs to this method.
     */
    MiniSearch.prototype.discardAll = function (ids) {
        var e_9, _a;
        var autoVacuum = this._options.autoVacuum;
        try {
            this._options.autoVacuum = false;
            try {
                for (var ids_1 = __values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
                    var id = ids_1_1.value;
                    this.discard(id);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        finally {
            this._options.autoVacuum = autoVacuum;
        }
        this.maybeAutoVacuum();
    };
    /**
     * It replaces an existing document with the given updated version
     *
     * It works by discarding the current version and adding the updated one, so
     * it is functionally equivalent to calling [[MiniSearch.discard]] followed by
     * [[MiniSearch.add]]. The ID of the updated document should be the same as
     * the original one.
     *
     * Since it uses [[MiniSearch.discard]] internally, this method relies on
     * vacuuming to clean up obsolete document references from the index, allowing
     * memory to be released (see [[MiniSearch.discard]]).
     *
     * @param updatedDocument  The updated document to replace the old version
     * with
     */
    MiniSearch.prototype.replace = function (updatedDocument) {
        var _a = this._options, idField = _a.idField, extractField = _a.extractField;
        var id = extractField(updatedDocument, idField);
        this.discard(id);
        this.add(updatedDocument);
    };
    /**
     * Triggers a manual vacuuming, cleaning up references to discarded documents
     * from the inverted index
     *
     * Vacuiuming is only useful for applications that use the
     * [[MiniSearch.discard]] or [[MiniSearch.replace]] methods.
     *
     * By default, vacuuming is performed automatically when needed (controlled by
     * the `autoVacuum` field in [[Options]]), so there is usually no need to call
     * this method, unless one wants to make sure to perform vacuuming at a
     * specific moment.
     *
     * Vacuuming traverses all terms in the inverted index in batches, and cleans
     * up references to discarded documents from the posting list, allowing memory
     * to be released.
     *
     * The method takes an optional object as argument with the following keys:
     *
     *   - `batchSize`: the size of each batch (1000 by default)
     *
     *   - `batchWait`: the number of milliseconds to wait between batches (10 by
     *   default)
     *
     * On large indexes, vacuuming could have a non-negligible cost: batching
     * avoids blocking the thread for long, diluting this cost so that it is not
     * negatively affecting the application. Nonetheless, this method should only
     * be called when necessary, and relying on automatic vacuuming is usually
     * better.
     *
     * It returns a promise that resolves (to undefined) when the clean up is
     * completed. If vacuuming is already ongoing at the time this method is
     * called, a new one is enqueued immediately after the ongoing one, and a
     * corresponding promise is returned. However, no more than one vacuuming is
     * enqueued on top of the ongoing one, even if this method is called more
     * times (enqueuing multiple ones would be useless).
     *
     * @param options  Configuration options for the batch size and delay. See
     * [[VacuumOptions]].
     */
    MiniSearch.prototype.vacuum = function (options) {
        if (options === void 0) { options = {}; }
        return this.conditionalVacuum(options);
    };
    MiniSearch.prototype.conditionalVacuum = function (options, conditions) {
        var _this = this;
        // If a vacuum is already ongoing, schedule another as soon as it finishes,
        // unless there's already one enqueued. If one was already enqueued, do not
        // enqueue another on top, but make sure that the conditions are the
        // broadest.
        if (this._currentVacuum) {
            this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && conditions;
            if (this._enqueuedVacuum != null) {
                return this._enqueuedVacuum;
            }
            this._enqueuedVacuum = this._currentVacuum.then(function () {
                var conditions = _this._enqueuedVacuumConditions;
                _this._enqueuedVacuumConditions = defaultVacuumConditions;
                return _this.performVacuuming(options, conditions);
            });
            return this._enqueuedVacuum;
        }
        if (this.vacuumConditionsMet(conditions) === false) {
            return Promise.resolve();
        }
        this._currentVacuum = this.performVacuuming(options);
        return this._currentVacuum;
    };
    MiniSearch.prototype.performVacuuming = function (options, conditions) {
        return __awaiter(this, void 0, void 0, function () {
            var initialDirtCount, batchSize, batchWait_1, i, _a, _b, _c, term, fieldsData, fieldsData_1, fieldsData_1_1, _d, fieldId, fieldIndex, fieldIndex_1, fieldIndex_1_1, _e, shortId, e_10_1;
            var e_10, _f, e_11, _g, e_12, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        initialDirtCount = this._dirtCount;
                        if (!this.vacuumConditionsMet(conditions)) return [3 /*break*/, 10];
                        batchSize = options.batchSize || defaultVacuumOptions.batchSize;
                        batchWait_1 = options.batchWait || defaultVacuumOptions.batchWait;
                        i = 1;
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 7, 8, 9]);
                        _a = __values(this._index), _b = _a.next();
                        _j.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        _c = __read(_b.value, 2), term = _c[0], fieldsData = _c[1];
                        try {
                            for (fieldsData_1 = (e_11 = void 0, __values(fieldsData)), fieldsData_1_1 = fieldsData_1.next(); !fieldsData_1_1.done; fieldsData_1_1 = fieldsData_1.next()) {
                                _d = __read(fieldsData_1_1.value, 2), fieldId = _d[0], fieldIndex = _d[1];
                                try {
                                    for (fieldIndex_1 = (e_12 = void 0, __values(fieldIndex)), fieldIndex_1_1 = fieldIndex_1.next(); !fieldIndex_1_1.done; fieldIndex_1_1 = fieldIndex_1.next()) {
                                        _e = __read(fieldIndex_1_1.value, 1), shortId = _e[0];
                                        if (this._documentIds.has(shortId)) {
                                            continue;
                                        }
                                        if (fieldIndex.size <= 1) {
                                            fieldsData.delete(fieldId);
                                        }
                                        else {
                                            fieldIndex.delete(shortId);
                                        }
                                    }
                                }
                                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                                finally {
                                    try {
                                        if (fieldIndex_1_1 && !fieldIndex_1_1.done && (_h = fieldIndex_1.return)) _h.call(fieldIndex_1);
                                    }
                                    finally { if (e_12) throw e_12.error; }
                                }
                            }
                        }
                        catch (e_11_1) { e_11 = { error: e_11_1 }; }
                        finally {
                            try {
                                if (fieldsData_1_1 && !fieldsData_1_1.done && (_g = fieldsData_1.return)) _g.call(fieldsData_1);
                            }
                            finally { if (e_11) throw e_11.error; }
                        }
                        if (this._index.get(term).size === 0) {
                            this._index.delete(term);
                        }
                        if (!(i % batchSize === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, batchWait_1); })];
                    case 3:
                        _j.sent();
                        _j.label = 4;
                    case 4:
                        i += 1;
                        _j.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_10_1 = _j.sent();
                        e_10 = { error: e_10_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                        }
                        finally { if (e_10) throw e_10.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        this._dirtCount -= initialDirtCount;
                        _j.label = 10;
                    case 10: 
                    // Make the next lines always async, so they execute after this function returns
                    return [4 /*yield*/, null];
                    case 11:
                        // Make the next lines always async, so they execute after this function returns
                        _j.sent();
                        this._currentVacuum = this._enqueuedVacuum;
                        this._enqueuedVacuum = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    MiniSearch.prototype.vacuumConditionsMet = function (conditions) {
        if (conditions == null) {
            return true;
        }
        var minDirtCount = conditions.minDirtCount, minDirtFactor = conditions.minDirtFactor;
        minDirtCount = minDirtCount || defaultAutoVacuumOptions.minDirtCount;
        minDirtFactor = minDirtFactor || defaultAutoVacuumOptions.minDirtFactor;
        return this.dirtCount >= minDirtCount && this.dirtFactor >= minDirtFactor;
    };
    Object.defineProperty(MiniSearch.prototype, "isVacuuming", {
        /**
         * Is `true` if a vacuuming operation is ongoing, `false` otherwise
         */
        get: function () {
            return this._currentVacuum != null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MiniSearch.prototype, "dirtCount", {
        /**
         * The number of documents discarded since the most recent vacuuming
         */
        get: function () {
            return this._dirtCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MiniSearch.prototype, "dirtFactor", {
        /**
         * A number between 0 and 1 giving an indication about the proportion of
         * documents that are discarded, and can therefore be cleaned up by vacuuming.
         * A value close to 0 means that the index is relatively clean, while a higher
         * value means that the index is relatively dirty, and vacuuming could release
         * memory.
         */
        get: function () {
            return this._dirtCount / (1 + this._documentCount + this._dirtCount);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns `true` if a document with the given ID is present in the index and
     * available for search, `false` otherwise
     *
     * @param id  The document ID
     */
    MiniSearch.prototype.has = function (id) {
        return this._idToShortId.has(id);
    };
    /**
     * Search for documents matching the given search query.
     *
     * The result is a list of scored document IDs matching the query, sorted by
     * descending score, and each including data about which terms were matched and
     * in which fields.
     *
     * ### Basic usage:
     *
     * ```javascript
     * // Search for "zen art motorcycle" with default options: terms have to match
     * // exactly, and individual terms are joined with OR
     * miniSearch.search('zen art motorcycle')
     * // => [ { id: 2, score: 2.77258, match: { ... } }, { id: 4, score: 1.38629, match: { ... } } ]
     * ```
     *
     * ### Restrict search to specific fields:
     *
     * ```javascript
     * // Search only in the 'title' field
     * miniSearch.search('zen', { fields: ['title'] })
     * ```
     *
     * ### Field boosting:
     *
     * ```javascript
     * // Boost a field
     * miniSearch.search('zen', { boost: { title: 2 } })
     * ```
     *
     * ### Prefix search:
     *
     * ```javascript
     * // Search for "moto" with prefix search (it will match documents
     * // containing terms that start with "moto" or "neuro")
     * miniSearch.search('moto neuro', { prefix: true })
     * ```
     *
     * ### Fuzzy search:
     *
     * ```javascript
     * // Search for "ismael" with fuzzy search (it will match documents containing
     * // terms similar to "ismael", with a maximum edit distance of 0.2 term.length
     * // (rounded to nearest integer)
     * miniSearch.search('ismael', { fuzzy: 0.2 })
     * ```
     *
     * ### Combining strategies:
     *
     * ```javascript
     * // Mix of exact match, prefix search, and fuzzy search
     * miniSearch.search('ismael mob', {
     *  prefix: true,
     *  fuzzy: 0.2
     * })
     * ```
     *
     * ### Advanced prefix and fuzzy search:
     *
     * ```javascript
     * // Perform fuzzy and prefix search depending on the search term. Here
     * // performing prefix and fuzzy search only on terms longer than 3 characters
     * miniSearch.search('ismael mob', {
     *  prefix: term => term.length > 3
     *  fuzzy: term => term.length > 3 ? 0.2 : null
     * })
     * ```
     *
     * ### Combine with AND:
     *
     * ```javascript
     * // Combine search terms with AND (to match only documents that contain both
     * // "motorcycle" and "art")
     * miniSearch.search('motorcycle art', { combineWith: 'AND' })
     * ```
     *
     * ### Combine with AND_NOT:
     *
     * There is also an AND_NOT combinator, that finds documents that match the
     * first term, but do not match any of the other terms. This combinator is
     * rarely useful with simple queries, and is meant to be used with advanced
     * query combinations (see later for more details).
     *
     * ### Filtering results:
     *
     * ```javascript
     * // Filter only results in the 'fiction' category (assuming that 'category'
     * // is a stored field)
     * miniSearch.search('motorcycle art', {
     *   filter: (result) => result.category === 'fiction'
     * })
     * ```
     *
     * ### Advanced combination of queries:
     *
     * It is possible to combine different subqueries with OR, AND, and AND_NOT,
     * and even with different search options, by passing a query expression
     * tree object as the first argument, instead of a string.
     *
     * ```javascript
     * // Search for documents that contain "zen" and ("motorcycle" or "archery")
     * miniSearch.search({
     *   combineWith: 'AND',
     *   queries: [
     *     'zen',
     *     {
     *       combineWith: 'OR',
     *       queries: ['motorcycle', 'archery']
     *     }
     *   ]
     * })
     *
     * // Search for documents that contain ("apple" or "pear") but not "juice" and
     * // not "tree"
     * miniSearch.search({
     *   combineWith: 'AND_NOT',
     *   queries: [
     *     {
     *       combineWith: 'OR',
     *       queries: ['apple', 'pear']
     *     },
     *     'juice',
     *     'tree'
     *   ]
     * })
     * ```
     *
     * Each node in the expression tree can be either a string, or an object that
     * supports all `SearchOptions` fields, plus a `queries` array field for
     * subqueries.
     *
     * Note that, while this can become complicated to do by hand for complex or
     * deeply nested queries, it provides a formalized expression tree API for
     * external libraries that implement a parser for custom query languages.
     *
     * @param query  Search query
     * @param options  Search options. Each option, if not given, defaults to the corresponding value of `searchOptions` given to the constructor, or to the library default.
     */
    MiniSearch.prototype.search = function (query, searchOptions) {
        var e_13, _a;
        if (searchOptions === void 0) { searchOptions = {}; }
        var combinedResults = this.executeQuery(query, searchOptions);
        var results = [];
        try {
            for (var combinedResults_1 = __values(combinedResults), combinedResults_1_1 = combinedResults_1.next(); !combinedResults_1_1.done; combinedResults_1_1 = combinedResults_1.next()) {
                var _b = __read(combinedResults_1_1.value, 2), docId = _b[0], _c = _b[1], score = _c.score, terms = _c.terms, match = _c.match;
                // Final score takes into account the number of matching QUERY terms.
                // The end user will only receive the MATCHED terms.
                var quality = terms.length;
                var result = {
                    id: this._documentIds.get(docId),
                    score: score * quality,
                    terms: Object.keys(match),
                    match: match
                };
                Object.assign(result, this._storedFields.get(docId));
                if (searchOptions.filter == null || searchOptions.filter(result)) {
                    results.push(result);
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (combinedResults_1_1 && !combinedResults_1_1.done && (_a = combinedResults_1.return)) _a.call(combinedResults_1);
            }
            finally { if (e_13) throw e_13.error; }
        }
        results.sort(byScore);
        return results;
    };
    /**
     * Provide suggestions for the given search query
     *
     * The result is a list of suggested modified search queries, derived from the
     * given search query, each with a relevance score, sorted by descending score.
     *
     * By default, it uses the same options used for search, except that by
     * default it performs prefix search on the last term of the query, and
     * combine terms with `'AND'` (requiring all query terms to match). Custom
     * options can be passed as a second argument. Defaults can be changed upon
     * calling the `MiniSearch` constructor, by passing a `autoSuggestOptions`
     * option.
     *
     * ### Basic usage:
     *
     * ```javascript
     * // Get suggestions for 'neuro':
     * miniSearch.autoSuggest('neuro')
     * // => [ { suggestion: 'neuromancer', terms: [ 'neuromancer' ], score: 0.46240 } ]
     * ```
     *
     * ### Multiple words:
     *
     * ```javascript
     * // Get suggestions for 'zen ar':
     * miniSearch.autoSuggest('zen ar')
     * // => [
     * //  { suggestion: 'zen archery art', terms: [ 'zen', 'archery', 'art' ], score: 1.73332 },
     * //  { suggestion: 'zen art', terms: [ 'zen', 'art' ], score: 1.21313 }
     * // ]
     * ```
     *
     * ### Fuzzy suggestions:
     *
     * ```javascript
     * // Correct spelling mistakes using fuzzy search:
     * miniSearch.autoSuggest('neromancer', { fuzzy: 0.2 })
     * // => [ { suggestion: 'neuromancer', terms: [ 'neuromancer' ], score: 1.03998 } ]
     * ```
     *
     * ### Filtering:
     *
     * ```javascript
     * // Get suggestions for 'zen ar', but only within the 'fiction' category
     * // (assuming that 'category' is a stored field):
     * miniSearch.autoSuggest('zen ar', {
     *   filter: (result) => result.category === 'fiction'
     * })
     * // => [
     * //  { suggestion: 'zen archery art', terms: [ 'zen', 'archery', 'art' ], score: 1.73332 },
     * //  { suggestion: 'zen art', terms: [ 'zen', 'art' ], score: 1.21313 }
     * // ]
     * ```
     *
     * @param queryString  Query string to be expanded into suggestions
     * @param options  Search options. The supported options and default values
     * are the same as for the `search` method, except that by default prefix
     * search is performed on the last term in the query, and terms are combined
     * with `'AND'`.
     * @return  A sorted array of suggestions sorted by relevance score.
     */
    MiniSearch.prototype.autoSuggest = function (queryString, options) {
        var e_14, _a, e_15, _b;
        if (options === void 0) { options = {}; }
        options = __assign(__assign({}, this._options.autoSuggestOptions), options);
        var suggestions = new Map();
        try {
            for (var _c = __values(this.search(queryString, options)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = _d.value, score = _e.score, terms = _e.terms;
                var phrase = terms.join(' ');
                var suggestion = suggestions.get(phrase);
                if (suggestion != null) {
                    suggestion.score += score;
                    suggestion.count += 1;
                }
                else {
                    suggestions.set(phrase, { score: score, terms: terms, count: 1 });
                }
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_14) throw e_14.error; }
        }
        var results = [];
        try {
            for (var suggestions_1 = __values(suggestions), suggestions_1_1 = suggestions_1.next(); !suggestions_1_1.done; suggestions_1_1 = suggestions_1.next()) {
                var _f = __read(suggestions_1_1.value, 2), suggestion = _f[0], _g = _f[1], score = _g.score, terms = _g.terms, count = _g.count;
                results.push({ suggestion: suggestion, terms: terms, score: score / count });
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (suggestions_1_1 && !suggestions_1_1.done && (_b = suggestions_1.return)) _b.call(suggestions_1);
            }
            finally { if (e_15) throw e_15.error; }
        }
        results.sort(byScore);
        return results;
    };
    Object.defineProperty(MiniSearch.prototype, "documentCount", {
        /**
         * Total number of documents available to search
         */
        get: function () {
            return this._documentCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MiniSearch.prototype, "termCount", {
        /**
         * Number of terms in the index
         */
        get: function () {
            return this._index.size;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Deserializes a JSON index (serialized with `JSON.stringify(miniSearch)`)
     * and instantiates a MiniSearch instance. It should be given the same options
     * originally used when serializing the index.
     *
     * ### Usage:
     *
     * ```javascript
     * // If the index was serialized with:
     * let miniSearch = new MiniSearch({ fields: ['title', 'text'] })
     * miniSearch.addAll(documents)
     *
     * const json = JSON.stringify(miniSearch)
     * // It can later be deserialized like this:
     * miniSearch = MiniSearch.loadJSON(json, { fields: ['title', 'text'] })
     * ```
     *
     * @param json  JSON-serialized index
     * @param options  configuration options, same as the constructor
     * @return An instance of MiniSearch deserialized from the given JSON.
     */
    MiniSearch.loadJSON = function (json, options) {
        if (options == null) {
            throw new Error('MiniSearch: loadJSON should be given the same options used when serializing the index');
        }
        return this.loadJS(JSON.parse(json), options);
    };
    /**
     * Returns the default value of an option. It will throw an error if no option
     * with the given name exists.
     *
     * @param optionName  Name of the option
     * @return The default value of the given option
     *
     * ### Usage:
     *
     * ```javascript
     * // Get default tokenizer
     * MiniSearch.getDefault('tokenize')
     *
     * // Get default term processor
     * MiniSearch.getDefault('processTerm')
     *
     * // Unknown options will throw an error
     * MiniSearch.getDefault('notExisting')
     * // => throws 'MiniSearch: unknown option "notExisting"'
     * ```
     */
    MiniSearch.getDefault = function (optionName) {
        if (defaultOptions.hasOwnProperty(optionName)) {
            return getOwnProperty(defaultOptions, optionName);
        }
        else {
            throw new Error("MiniSearch: unknown option \"".concat(optionName, "\""));
        }
    };
    /**
     * @ignore
     */
    MiniSearch.loadJS = function (js, options) {
        var e_16, _a, e_17, _b, e_18, _c;
        var index = js.index, documentCount = js.documentCount, nextId = js.nextId, documentIds = js.documentIds, fieldIds = js.fieldIds, fieldLength = js.fieldLength, averageFieldLength = js.averageFieldLength, storedFields = js.storedFields, dirtCount = js.dirtCount, serializationVersion = js.serializationVersion;
        if (serializationVersion !== 1 && serializationVersion !== 2) {
            throw new Error('MiniSearch: cannot deserialize an index created with an incompatible version');
        }
        var miniSearch = new MiniSearch(options);
        miniSearch._documentCount = documentCount;
        miniSearch._nextId = nextId;
        miniSearch._documentIds = objectToNumericMap(documentIds);
        miniSearch._idToShortId = new Map();
        miniSearch._fieldIds = fieldIds;
        miniSearch._fieldLength = objectToNumericMap(fieldLength);
        miniSearch._avgFieldLength = averageFieldLength;
        miniSearch._storedFields = objectToNumericMap(storedFields);
        miniSearch._dirtCount = dirtCount || 0;
        miniSearch._index = new SearchableMap();
        try {
            for (var _d = __values(miniSearch._documentIds), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = __read(_e.value, 2), shortId = _f[0], id = _f[1];
                miniSearch._idToShortId.set(id, shortId);
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_16) throw e_16.error; }
        }
        try {
            for (var index_1 = __values(index), index_1_1 = index_1.next(); !index_1_1.done; index_1_1 = index_1.next()) {
                var _g = __read(index_1_1.value, 2), term = _g[0], data = _g[1];
                var dataMap = new Map();
                try {
                    for (var _h = (e_18 = void 0, __values(Object.keys(data))), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var fieldId = _j.value;
                        var indexEntry = data[fieldId];
                        // Version 1 used to nest the index entry inside a field called ds
                        if (serializationVersion === 1) {
                            indexEntry = indexEntry.ds;
                        }
                        dataMap.set(parseInt(fieldId, 10), objectToNumericMap(indexEntry));
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                miniSearch._index.set(term, dataMap);
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (index_1_1 && !index_1_1.done && (_b = index_1.return)) _b.call(index_1);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return miniSearch;
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.executeQuery = function (query, searchOptions) {
        var _this = this;
        if (searchOptions === void 0) { searchOptions = {}; }
        if (typeof query !== 'string') {
            var options_1 = __assign(__assign(__assign({}, searchOptions), query), { queries: undefined });
            var results_1 = query.queries.map(function (subquery) { return _this.executeQuery(subquery, options_1); });
            return this.combineResults(results_1, options_1.combineWith);
        }
        var _a = this._options, tokenize = _a.tokenize, processTerm = _a.processTerm, globalSearchOptions = _a.searchOptions;
        var options = __assign(__assign({ tokenize: tokenize, processTerm: processTerm }, globalSearchOptions), searchOptions);
        var searchTokenize = options.tokenize, searchProcessTerm = options.processTerm;
        var terms = searchTokenize(query)
            .flatMap(function (term) { return searchProcessTerm(term); })
            .filter(function (term) { return !!term; });
        var queries = terms.map(termToQuerySpec(options));
        var results = queries.map(function (query) { return _this.executeQuerySpec(query, options); });
        return this.combineResults(results, options.combineWith);
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.executeQuerySpec = function (query, searchOptions) {
        var e_19, _a, e_20, _b;
        var options = __assign(__assign({}, this._options.searchOptions), searchOptions);
        var boosts = (options.fields || this._options.fields).reduce(function (boosts, field) {
            var _a;
            return (__assign(__assign({}, boosts), (_a = {}, _a[field] = getOwnProperty(options.boost, field) || 1, _a)));
        }, {});
        var boostDocument = options.boostDocument, weights = options.weights, maxFuzzy = options.maxFuzzy, bm25params = options.bm25;
        var _c = __assign(__assign({}, defaultSearchOptions.weights), weights), fuzzyWeight = _c.fuzzy, prefixWeight = _c.prefix;
        var data = this._index.get(query.term);
        var results = this.termResults(query.term, query.term, 1, data, boosts, boostDocument, bm25params);
        var prefixMatches;
        var fuzzyMatches;
        if (query.prefix) {
            prefixMatches = this._index.atPrefix(query.term);
        }
        if (query.fuzzy) {
            var fuzzy = (query.fuzzy === true) ? 0.2 : query.fuzzy;
            var maxDistance = fuzzy < 1 ? Math.min(maxFuzzy, Math.round(query.term.length * fuzzy)) : fuzzy;
            if (maxDistance)
                fuzzyMatches = this._index.fuzzyGet(query.term, maxDistance);
        }
        if (prefixMatches) {
            try {
                for (var prefixMatches_1 = __values(prefixMatches), prefixMatches_1_1 = prefixMatches_1.next(); !prefixMatches_1_1.done; prefixMatches_1_1 = prefixMatches_1.next()) {
                    var _d = __read(prefixMatches_1_1.value, 2), term = _d[0], data_1 = _d[1];
                    var distance = term.length - query.term.length;
                    if (!distance) {
                        continue;
                    } // Skip exact match.
                    // Delete the term from fuzzy results (if present) if it is also a
                    // prefix result. This entry will always be scored as a prefix result.
                    fuzzyMatches === null || fuzzyMatches === void 0 ? void 0 : fuzzyMatches.delete(term);
                    // Weight gradually approaches 0 as distance goes to infinity, with the
                    // weight for the hypothetical distance 0 being equal to prefixWeight.
                    // The rate of change is much lower than that of fuzzy matches to
                    // account for the fact that prefix matches stay more relevant than
                    // fuzzy matches for longer distances.
                    var weight = prefixWeight * term.length / (term.length + 0.3 * distance);
                    this.termResults(query.term, term, weight, data_1, boosts, boostDocument, bm25params, results);
                }
            }
            catch (e_19_1) { e_19 = { error: e_19_1 }; }
            finally {
                try {
                    if (prefixMatches_1_1 && !prefixMatches_1_1.done && (_a = prefixMatches_1.return)) _a.call(prefixMatches_1);
                }
                finally { if (e_19) throw e_19.error; }
            }
        }
        if (fuzzyMatches) {
            try {
                for (var _e = __values(fuzzyMatches.keys()), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var term = _f.value;
                    var _g = __read(fuzzyMatches.get(term), 2), data_2 = _g[0], distance = _g[1];
                    if (!distance) {
                        continue;
                    } // Skip exact match.
                    // Weight gradually approaches 0 as distance goes to infinity, with the
                    // weight for the hypothetical distance 0 being equal to fuzzyWeight.
                    var weight = fuzzyWeight * term.length / (term.length + distance);
                    this.termResults(query.term, term, weight, data_2, boosts, boostDocument, bm25params, results);
                }
            }
            catch (e_20_1) { e_20 = { error: e_20_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_20) throw e_20.error; }
            }
        }
        return results;
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.combineResults = function (results, combineWith) {
        if (combineWith === void 0) { combineWith = OR; }
        if (results.length === 0) {
            return new Map();
        }
        var operator = combineWith.toLowerCase();
        return results.reduce(combinators[operator]) || new Map();
    };
    /**
     * Allows serialization of the index to JSON, to possibly store it and later
     * deserialize it with `MiniSearch.loadJSON`.
     *
     * Normally one does not directly call this method, but rather call the
     * standard JavaScript `JSON.stringify()` passing the `MiniSearch` instance,
     * and JavaScript will internally call this method. Upon deserialization, one
     * must pass to `loadJSON` the same options used to create the original
     * instance that was serialized.
     *
     * ### Usage:
     *
     * ```javascript
     * // Serialize the index:
     * let miniSearch = new MiniSearch({ fields: ['title', 'text'] })
     * miniSearch.addAll(documents)
     * const json = JSON.stringify(miniSearch)
     *
     * // Later, to deserialize it:
     * miniSearch = MiniSearch.loadJSON(json, { fields: ['title', 'text'] })
     * ```
     *
     * @return A plain-object serializeable representation of the search index.
     */
    MiniSearch.prototype.toJSON = function () {
        var e_21, _a, e_22, _b;
        var index = [];
        try {
            for (var _c = __values(this._index), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), term = _e[0], fieldIndex = _e[1];
                var data = {};
                try {
                    for (var fieldIndex_2 = (e_22 = void 0, __values(fieldIndex)), fieldIndex_2_1 = fieldIndex_2.next(); !fieldIndex_2_1.done; fieldIndex_2_1 = fieldIndex_2.next()) {
                        var _f = __read(fieldIndex_2_1.value, 2), fieldId = _f[0], freqs = _f[1];
                        data[fieldId] = Object.fromEntries(freqs);
                    }
                }
                catch (e_22_1) { e_22 = { error: e_22_1 }; }
                finally {
                    try {
                        if (fieldIndex_2_1 && !fieldIndex_2_1.done && (_b = fieldIndex_2.return)) _b.call(fieldIndex_2);
                    }
                    finally { if (e_22) throw e_22.error; }
                }
                index.push([term, data]);
            }
        }
        catch (e_21_1) { e_21 = { error: e_21_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_21) throw e_21.error; }
        }
        return {
            documentCount: this._documentCount,
            nextId: this._nextId,
            documentIds: Object.fromEntries(this._documentIds),
            fieldIds: this._fieldIds,
            fieldLength: Object.fromEntries(this._fieldLength),
            averageFieldLength: this._avgFieldLength,
            storedFields: Object.fromEntries(this._storedFields),
            dirtCount: this._dirtCount,
            index: index,
            serializationVersion: 2
        };
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.termResults = function (sourceTerm, derivedTerm, termWeight, fieldTermData, fieldBoosts, boostDocumentFn, bm25params, results) {
        var e_23, _a, e_24, _b, _c;
        if (results === void 0) { results = new Map(); }
        if (fieldTermData == null)
            return results;
        try {
            for (var _d = __values(Object.keys(fieldBoosts)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var field = _e.value;
                var fieldBoost = fieldBoosts[field];
                var fieldId = this._fieldIds[field];
                var fieldTermFreqs = fieldTermData.get(fieldId);
                if (fieldTermFreqs == null)
                    continue;
                var matchingFields = fieldTermFreqs.size;
                var avgFieldLength = this._avgFieldLength[fieldId];
                try {
                    for (var _f = (e_24 = void 0, __values(fieldTermFreqs.keys())), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var docId = _g.value;
                        if (!this._documentIds.has(docId)) {
                            this.removeTerm(fieldId, docId, derivedTerm);
                            matchingFields -= 1;
                            continue;
                        }
                        var docBoost = boostDocumentFn ? boostDocumentFn(this._documentIds.get(docId), derivedTerm) : 1;
                        if (!docBoost)
                            continue;
                        var termFreq = fieldTermFreqs.get(docId);
                        var fieldLength = this._fieldLength.get(docId)[fieldId];
                        // NOTE: The total number of fields is set to the number of documents
                        // `this._documentCount`. It could also make sense to use the number of
                        // documents where the current field is non-blank as a normalisation
                        // factor. This will make a difference in scoring if the field is rarely
                        // present. This is currently not supported, and may require further
                        // analysis to see if it is a valid use case.
                        var rawScore = calcBM25Score(termFreq, matchingFields, this._documentCount, fieldLength, avgFieldLength, bm25params);
                        var weightedScore = termWeight * fieldBoost * docBoost * rawScore;
                        var result = results.get(docId);
                        if (result) {
                            result.score += weightedScore;
                            assignUniqueTerm(result.terms, sourceTerm);
                            var match = getOwnProperty(result.match, derivedTerm);
                            if (match) {
                                match.push(field);
                            }
                            else {
                                result.match[derivedTerm] = [field];
                            }
                        }
                        else {
                            results.set(docId, {
                                score: weightedScore,
                                terms: [sourceTerm],
                                match: (_c = {}, _c[derivedTerm] = [field], _c)
                            });
                        }
                    }
                }
                catch (e_24_1) { e_24 = { error: e_24_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_24) throw e_24.error; }
                }
            }
        }
        catch (e_23_1) { e_23 = { error: e_23_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_23) throw e_23.error; }
        }
        return results;
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.addTerm = function (fieldId, documentId, term) {
        var indexData = this._index.fetch(term, createMap);
        var fieldIndex = indexData.get(fieldId);
        if (fieldIndex == null) {
            fieldIndex = new Map();
            fieldIndex.set(documentId, 1);
            indexData.set(fieldId, fieldIndex);
        }
        else {
            var docs = fieldIndex.get(documentId);
            fieldIndex.set(documentId, (docs || 0) + 1);
        }
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.removeTerm = function (fieldId, documentId, term) {
        if (!this._index.has(term)) {
            this.warnDocumentChanged(documentId, fieldId, term);
            return;
        }
        var indexData = this._index.fetch(term, createMap);
        var fieldIndex = indexData.get(fieldId);
        if (fieldIndex == null || fieldIndex.get(documentId) == null) {
            this.warnDocumentChanged(documentId, fieldId, term);
        }
        else if (fieldIndex.get(documentId) <= 1) {
            if (fieldIndex.size <= 1) {
                indexData.delete(fieldId);
            }
            else {
                fieldIndex.delete(documentId);
            }
        }
        else {
            fieldIndex.set(documentId, fieldIndex.get(documentId) - 1);
        }
        if (this._index.get(term).size === 0) {
            this._index.delete(term);
        }
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.warnDocumentChanged = function (shortDocumentId, fieldId, term) {
        var e_25, _a;
        try {
            for (var _b = __values(Object.keys(this._fieldIds)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fieldName = _c.value;
                if (this._fieldIds[fieldName] === fieldId) {
                    this._options.logger('warn', "MiniSearch: document with ID ".concat(this._documentIds.get(shortDocumentId), " has changed before removal: term \"").concat(term, "\" was not present in field \"").concat(fieldName, "\". Removing a document after it has changed can corrupt the index!"), 'version_conflict');
                    return;
                }
            }
        }
        catch (e_25_1) { e_25 = { error: e_25_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_25) throw e_25.error; }
        }
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.addDocumentId = function (documentId) {
        var shortDocumentId = this._nextId;
        this._idToShortId.set(documentId, shortDocumentId);
        this._documentIds.set(shortDocumentId, documentId);
        this._documentCount += 1;
        this._nextId += 1;
        return shortDocumentId;
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.addFields = function (fields) {
        for (var i = 0; i < fields.length; i++) {
            this._fieldIds[fields[i]] = i;
        }
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.addFieldLength = function (documentId, fieldId, count, length) {
        var fieldLengths = this._fieldLength.get(documentId);
        if (fieldLengths == null)
            this._fieldLength.set(documentId, fieldLengths = []);
        fieldLengths[fieldId] = length;
        var averageFieldLength = this._avgFieldLength[fieldId] || 0;
        var totalFieldLength = (averageFieldLength * count) + length;
        this._avgFieldLength[fieldId] = totalFieldLength / (count + 1);
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.removeFieldLength = function (documentId, fieldId, count, length) {
        if (count === 1) {
            this._avgFieldLength[fieldId] = 0;
            return;
        }
        var totalFieldLength = (this._avgFieldLength[fieldId] * count) - length;
        this._avgFieldLength[fieldId] = totalFieldLength / (count - 1);
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.saveStoredFields = function (documentId, doc) {
        var e_26, _a;
        var _b = this._options, storeFields = _b.storeFields, extractField = _b.extractField;
        if (storeFields == null || storeFields.length === 0) {
            return;
        }
        var documentFields = this._storedFields.get(documentId);
        if (documentFields == null)
            this._storedFields.set(documentId, documentFields = {});
        try {
            for (var storeFields_1 = __values(storeFields), storeFields_1_1 = storeFields_1.next(); !storeFields_1_1.done; storeFields_1_1 = storeFields_1.next()) {
                var fieldName = storeFields_1_1.value;
                var fieldValue = extractField(doc, fieldName);
                if (fieldValue !== undefined)
                    documentFields[fieldName] = fieldValue;
            }
        }
        catch (e_26_1) { e_26 = { error: e_26_1 }; }
        finally {
            try {
                if (storeFields_1_1 && !storeFields_1_1.done && (_a = storeFields_1.return)) _a.call(storeFields_1);
            }
            finally { if (e_26) throw e_26.error; }
        }
    };
    return MiniSearch;
}());
var getOwnProperty = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property) ? object[property] : undefined;
};
var combinators = (_a = {},
    _a[OR] = function (a, b) {
        var e_27, _a;
        try {
            for (var _b = __values(b.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var docId = _c.value;
                var existing = a.get(docId);
                if (existing == null) {
                    a.set(docId, b.get(docId));
                }
                else {
                    var _d = b.get(docId), score = _d.score, terms = _d.terms, match = _d.match;
                    existing.score = existing.score + score;
                    existing.match = Object.assign(existing.match, match);
                    assignUniqueTerms(existing.terms, terms);
                }
            }
        }
        catch (e_27_1) { e_27 = { error: e_27_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_27) throw e_27.error; }
        }
        return a;
    },
    _a[AND] = function (a, b) {
        var e_28, _a;
        var combined = new Map();
        try {
            for (var _b = __values(b.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var docId = _c.value;
                var existing = a.get(docId);
                if (existing == null)
                    continue;
                var _d = b.get(docId), score = _d.score, terms = _d.terms, match = _d.match;
                assignUniqueTerms(existing.terms, terms);
                combined.set(docId, {
                    score: existing.score + score,
                    terms: existing.terms,
                    match: Object.assign(existing.match, match)
                });
            }
        }
        catch (e_28_1) { e_28 = { error: e_28_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_28) throw e_28.error; }
        }
        return combined;
    },
    _a[AND_NOT] = function (a, b) {
        var e_29, _a;
        try {
            for (var _b = __values(b.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var docId = _c.value;
                a.delete(docId);
            }
        }
        catch (e_29_1) { e_29 = { error: e_29_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_29) throw e_29.error; }
        }
        return a;
    },
    _a);
var defaultBM25params = { k: 1.2, b: 0.7, d: 0.5 };
var calcBM25Score = function (termFreq, matchingCount, totalCount, fieldLength, avgFieldLength, bm25params) {
    var k = bm25params.k, b = bm25params.b, d = bm25params.d;
    var invDocFreq = Math.log(1 + (totalCount - matchingCount + 0.5) / (matchingCount + 0.5));
    return invDocFreq * (d + termFreq * (k + 1) / (termFreq + k * (1 - b + b * fieldLength / avgFieldLength)));
};
var termToQuerySpec = function (options) { return function (term, i, terms) {
    var fuzzy = (typeof options.fuzzy === 'function')
        ? options.fuzzy(term, i, terms)
        : (options.fuzzy || false);
    var prefix = (typeof options.prefix === 'function')
        ? options.prefix(term, i, terms)
        : (options.prefix === true);
    return { term: term, fuzzy: fuzzy, prefix: prefix };
}; };
var defaultOptions = {
    idField: 'id',
    extractField: function (document, fieldName) { return document[fieldName]; },
    tokenize: function (text, fieldName) { return text.split(SPACE_OR_PUNCTUATION); },
    processTerm: function (term, fieldName) { return term.toLowerCase(); },
    fields: undefined,
    searchOptions: undefined,
    storeFields: [],
    logger: function (level, message, code) { return console != null && console.warn != null && console[level](message); },
    autoVacuum: true
};
var defaultSearchOptions = {
    combineWith: OR,
    prefix: false,
    fuzzy: false,
    maxFuzzy: 6,
    boost: {},
    weights: { fuzzy: 0.45, prefix: 0.375 },
    bm25: defaultBM25params
};
var defaultAutoSuggestOptions = {
    combineWith: AND,
    prefix: function (term, i, terms) {
        return i === terms.length - 1;
    }
};
var defaultVacuumOptions = { batchSize: 1000, batchWait: 10 };
var defaultVacuumConditions = { minDirtFactor: 0.1, minDirtCount: 20 };
var defaultAutoVacuumOptions = __assign(__assign({}, defaultVacuumOptions), defaultVacuumConditions);
var assignUniqueTerm = function (target, term) {
    // Avoid adding duplicate terms.
    if (!target.includes(term))
        target.push(term);
};
var assignUniqueTerms = function (target, source) {
    var e_30, _a;
    try {
        for (var source_1 = __values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
            var term = source_1_1.value;
            // Avoid adding duplicate terms.
            if (!target.includes(term))
                target.push(term);
        }
    }
    catch (e_30_1) { e_30 = { error: e_30_1 }; }
    finally {
        try {
            if (source_1_1 && !source_1_1.done && (_a = source_1.return)) _a.call(source_1);
        }
        finally { if (e_30) throw e_30.error; }
    }
};
var byScore = function (_a, _b) {
    var a = _a.score;
    var b = _b.score;
    return b - a;
};
var createMap = function () { return new Map(); };
var objectToNumericMap = function (object) {
    var e_31, _a;
    var map = new Map();
    try {
        for (var _b = __values(Object.keys(object)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            map.set(parseInt(key, 10), object[key]);
        }
    }
    catch (e_31_1) { e_31 = { error: e_31_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_31) throw e_31.error; }
    }
    return map;
};
// This regular expression matches any Unicode space or punctuation character
// Adapted from https://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5Cp%7BZ%7D%5Cp%7BP%7D&abb=on&c=on&esc=on
var SPACE_OR_PUNCTUATION = /[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;

module.exports = MiniSearch;
//# sourceMappingURL=index.cjs.map


/***/ })

}]);
//# sourceMappingURL=3196-aa25912ef1c32e943382.js.map