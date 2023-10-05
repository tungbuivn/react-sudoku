"use strict";(self.webpackChunkt_react_sudoku=self.webpackChunkt_react_sudoku||[]).push([[402],{"./src/stories/Reset.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var _reset__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/reset/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Example/Reset",component:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_reset__WEBPACK_IMPORTED_MODULE_0__.default,{onAction:()=>null,onClose:()=>null}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}}},"./src/button/button-bar.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return button_bar}});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),button_button=__webpack_require__("./src/button/button.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Main=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
  z-index: 99;
`,FirstRow=styled_components_browser_esm.ZP.div`
  color: ${_ref=>{let{theme:theme}=_ref;return`${theme.inverted}`}};
  display: flex;
`,SecondRow=styled_components_browser_esm.ZP.div`
  color: ${_ref2=>{let{theme:theme}=_ref2;return`${theme.inverted}`}};
  display: flex;
`,ThirdRow=styled_components_browser_esm.ZP.div`
  color: ${_ref3=>{let{theme:theme}=_ref3;return`${theme.inverted}`}};
  display: flex;
  justify-content: space-around;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const firstButtons=[1,2,3,4,5],secondButtons=[6,7,8,9,null],iconButtons=["reset","undo","validate","notes"],ICONS={notes:md.zmo,undo:md.TsG,reset:md.FVj,validate:md.vB0};class ButtonBar extends react.Component{static propTypes={enabledButtons:prop_types_default().array.isRequired,onClick:prop_types_default().func.isRequired};buildButton=value=>{const{onClick:onClick,enabledButtons:enabledButtons}=this.props;return(0,jsx_runtime.jsx)(button_button.Z,{onClick:onClick,value:value,enabled:enabledButtons.includes(value)},value)};buildIconButton=iconName=>{const{onClick:onClick,enabledButtons:enabledButtons}=this.props,Icon=ICONS[iconName];return(0,jsx_runtime.jsx)(button_button.Z,{title:iconName,onClick:onClick,value:iconName,enabled:enabledButtons.includes(iconName),children:(0,jsx_runtime.jsx)(Icon,{title:iconName,size:"0.75em"})},iconName)};render(){return(0,jsx_runtime.jsxs)(Main,{children:[(0,jsx_runtime.jsx)(FirstRow,{children:firstButtons.map(this.buildButton)}),(0,jsx_runtime.jsx)(SecondRow,{children:secondButtons.map(this.buildButton)}),(0,jsx_runtime.jsx)(ThirdRow,{children:iconButtons.map(this.buildIconButton)})]})}}ButtonBar.displayName="ButtonBar",ButtonBar.__docgenInfo={description:"",methods:[{name:"buildButton",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"buildIconButton",docblock:null,modifiers:[],params:[{name:"iconName",type:null}],returns:null}],displayName:"ButtonBar",props:{enabledButtons:{description:"",type:{name:"array"},required:!0},onClick:{description:"",type:{name:"func"},required:!0}}};var button_bar=ButtonBar},"./src/button/button.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return button_button}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),md=__webpack_require__("./node_modules/react-icons/md/index.mjs");var button_styled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div`
  display: flex;
  transition: all 0.3s;
  align-items: center;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  font-size: 25px;
  user-select: none;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: ${_ref=>{let{enabled:enabled,theme:theme}=_ref;return enabled&&theme.primary}};
  color: ${_ref2=>{let{theme:theme}=_ref2;return`1px solid ${theme.secondary}`}};
  border: ${_ref3=>{let{theme:theme}=_ref3;return`2px solid ${theme.primary}`}};
  border-radius: 50%;
  margin: 5px;
  &:hover {
    cursor: pointer;
    color: ${_ref4=>{let{theme:theme,enabled:enabled}=_ref4;return enabled?`${theme.background}`:`${theme.primary}`}};
  }
`,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{onClick:onClick,value:value,enabled:enabled,children:children,className:className,title:title}=_ref;return(0,jsx_runtime.jsx)(button_styled,{title:title,className:className,onClick:()=>onClick(value),enabled:enabled,children:children||value||(0,jsx_runtime.jsx)(md.lUB,{size:"0.75em"})})};Button.displayName="Button",Button.propTypes={onClick:prop_types_default().func.isRequired,enabled:prop_types_default().bool,value:prop_types_default().node,children:prop_types_default().node,className:prop_types_default().string,title:prop_types_default().string},Button.defaultProps={enabled:!0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{enabled:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{description:"",type:{name:"func"},required:!0},value:{description:"",type:{name:"node"},required:!1},children:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1}}};var button_button=Button},"./src/button/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return _button__WEBPACK_IMPORTED_MODULE_1__.Z}});__webpack_require__("./src/button/button-bar.js");var _button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/button/button.js")},"./src/reset/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return Reset}});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),src_button=__webpack_require__("./src/button/index.js");const Main=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  border: ${_ref=>{let{theme:theme}=_ref;return`solid 1px ${theme.board}`}};
  border-radius: 8px;
  background-color: ${_ref2=>{let{theme:theme}=_ref2;return theme.background}};
  z-index: 100;
`,Message=styled_components_browser_esm.ZP.p`
  font-size: small;
  font-family: 'Montserrat', sans-serif;
  color: ${_ref3=>{let{theme:theme}=_ref3;return theme.primary}};
`,ConfirmButton=(0,styled_components_browser_esm.ZP)(src_button.z)`
  width: 90px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 8px;
  border-color: ${_ref4=>{let{theme:theme}=_ref4;return theme.primary}};
  &:hover {
    color: ${_ref5=>{let{theme:theme}=_ref5;return theme.primary}};
  }
  background-color: transparent;
`,CancelButton=(0,styled_components_browser_esm.ZP)(src_button.z)`
  width: 90px;
  font-size: 16px;
  background-color: transparent;
  border-radius: 8px;
  border-color: ${_ref6=>{let{theme:theme}=_ref6;return theme.inverted}};
  font-family: 'Montserrat', sans-serif;
  &:hover {
    color: ${_ref7=>{let{theme:theme}=_ref7;return theme.primary}};
  }
`,ButtonBox=styled_components_browser_esm.ZP.div`
  display: flex;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class Reset extends react.Component{static propTypes={onAction:prop_types_default().func.isRequired,onClose:prop_types_default().func.isRequired};render(){const{primaryAction:primaryAction,cancelAction:cancelAction}=this.props;return(0,jsx_runtime.jsxs)(Main,{children:[(0,jsx_runtime.jsx)(Message,{children:"Would like to reset the game?"}),(0,jsx_runtime.jsxs)(ButtonBox,{children:[(0,jsx_runtime.jsx)(CancelButton,{onClick:cancelAction,children:"No"}),(0,jsx_runtime.jsx)(ConfirmButton,{onClick:primaryAction,children:"Yes"})]})]})}}Reset.displayName="Reset",Reset.__docgenInfo={description:"",methods:[],displayName:"Reset",props:{onAction:{description:"",type:{name:"func"},required:!0},onClose:{description:"",type:{name:"func"},required:!0}}}}}]);
//# sourceMappingURL=stories-Reset-stories.2410c429.iframe.bundle.js.map