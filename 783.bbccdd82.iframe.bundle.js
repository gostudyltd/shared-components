"use strict";(self.webpackChunk_gostudyltd_shared_components=self.webpackChunk_gostudyltd_shared_components||[]).push([[783],{"./src/packages/components/LandingSections/components/HorizontalListWithSeparator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G:function(){return HorizontalListWithSeparator}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_constants_themeVars__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/constants/themeVars/index.ts"),_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/packages/components/LandingSections/icons/index.tsx"),_hoc_withCustomTheme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/packages/components/hoc/withCustomTheme.tsx"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/packages/components/LandingSections/components/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const HorizontalListWithSeparator=(0,_hoc_withCustomTheme__WEBPACK_IMPORTED_MODULE_3__.u)((({data:data,sx:sx={},itemSx:itemSx={},accentColor:accentColor="primary"})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{direction:"row",alignItems:"stretch",justifyContent:"space-between",sx:{backgroundColor:_constants_themeVars__WEBPACK_IMPORTED_MODULE_1__.DG.primary?.contrastText??"#FFFFFF",maxWidth:"72rem",width:"100%",zIndex:2,p:{xs:"1rem",sm:"1.75rem"},boxShadow:"1",borderRadius:"1.25rem",flexDirection:{xs:"column",sm:"row"},...sx},children:data.map((({icon:icon,text:text},idx,arr)=>{const itemMaxWIdth=3===data.length?"20.125rem":2===data.length?"40.25rem":"100%";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{direction:"row",sx:{width:"100%",maxWidth:{xs:"inherit",sm:itemMaxWIdth,alignItems:"center"},"& > svg":{width:{xs:"2rem",sm:"2.5rem"},height:{xs:"2rem",sm:"2.5rem"},marginRight:{xs:"1rem",sm:"1.25rem"},flexShrink:0,"& path":{fill:_utils__WEBPACK_IMPORTED_MODULE_4__.h[accentColor].main}},...itemSx},children:[_icons__WEBPACK_IMPORTED_MODULE_2__.x[icon]?_icons__WEBPACK_IMPORTED_MODULE_2__.x[icon]:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,{component:"img",src:icon,flexShrink:"0",sx:{width:{xs:"2rem",sm:"2.5rem"},height:{xs:"2rem",sm:"2.5rem"},marginRight:{xs:"1rem",sm:"1.25rem"}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,{fontFamily:_constants_themeVars__WEBPACK_IMPORTED_MODULE_1__.JU,fontSize:"1rem",fontWeight:600,color:"rgba(0,0,0,0.54)",sx:{fontSize:"1rem",lineHeight:1.43},children:text})]},text),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,{component:"span",flexShrink:"0",sx:{backgroundColor:"rgba(0,0,0,.12)",width:{xs:"auto",sm:"2px"},height:{xs:"1px",sm:"auto"},m:{xs:"1.25rem 0",sm:"0"},display:arr.length-2>=idx?"block":"none"}})]},text)}))})));try{HorizontalListWithSeparator.displayName="HorizontalListWithSeparator",HorizontalListWithSeparator.__docgenInfo={description:"",displayName:"HorizontalListWithSeparator",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:'{ icon: (string & {}) | "step1" | "step2" | "step3" | "step4" | "step5" | "step6" | "step7" | "diplomaTwoTone" | "shieldTwoTone" | "verifiedCheckTwoTone"; text: string; }[]'}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<{}>"}},itemSx:{defaultValue:null,description:"",name:"itemSx",required:!1,type:{name:"SxProps<{}>"}},accentColor:{defaultValue:null,description:"",name:"accentColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"warning"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/components/LandingSections/components/HorizontalListWithSeparator.tsx#HorizontalListWithSeparator"]={docgenInfo:HorizontalListWithSeparator.__docgenInfo,name:"HorizontalListWithSeparator",path:"src/packages/components/LandingSections/components/HorizontalListWithSeparator.tsx#HorizontalListWithSeparator"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/components/LandingSections/components/SectionContainer.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{S:function(){return SectionContainer}});__webpack_require__("./node_modules/react/index.js");var _mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),_SectionTitle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/components/LandingSections/components/SectionTitle.tsx"),_hoc_withCustomTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/packages/components/hoc/withCustomTheme.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const twoColumnsSx={display:"flex",flexDirection:{sm:"row",xs:"column"},alignItems:"center",gap:{xs:"1.25rem",sm:"2.75rem"}},disablePaddingsSx={p:{xs:0,sm:0}},SectionContainer=(0,_hoc_withCustomTheme__WEBPACK_IMPORTED_MODULE_2__.u)((({children:children,sx:sx={},twoColumns:twoColumns,sectionTitle:sectionTitle,accentColor:accentColor,disableContainerPaddings:disableContainerPaddings})=>{let additionalSx={};return twoColumns&&(additionalSx={...additionalSx,...twoColumnsSx}),disableContainerPaddings&&(additionalSx={...additionalSx,...disablePaddingsSx}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{maxWidth:"md",component:"section",sx:{gap:{xs:"2.5rem",sm:"3.75rem"},py:{xs:"3rem",sm:"6.25rem"},position:"relative",zIndex:1,...additionalSx,...sx},children:[sectionTitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__.N,{accentColor:accentColor,wrapperSx:{paddingBottom:{xs:"2rem",sm:"3.75rem"}},...sectionTitle}),children]})}));try{SectionContainer.displayName="SectionContainer",SectionContainer.__docgenInfo={description:"",displayName:"SectionContainer",props:{sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<{}>"}},twoColumns:{defaultValue:null,description:"",name:"twoColumns",required:!1,type:{name:"boolean"}},sectionTitle:{defaultValue:null,description:"",name:"sectionTitle",required:!1,type:{name:"SectionTitleProps"}},accentColor:{defaultValue:null,description:"",name:"accentColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"warning"'},{value:'"error"'}]}},disableContainerPaddings:{defaultValue:null,description:"",name:"disableContainerPaddings",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/components/LandingSections/components/SectionContainer.tsx#SectionContainer"]={docgenInfo:SectionContainer.__docgenInfo,name:"SectionContainer",path:"src/packages/components/LandingSections/components/SectionContainer.tsx#SectionContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/components/LandingSections/components/SectionTwoColumnsContainer.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return SectionTwoColumnsContainer}});__webpack_require__("./node_modules/react/index.js");var _SectionContainer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/components/LandingSections/components/SectionContainer.tsx"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_hoc_withCustomTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/packages/components/hoc/withCustomTheme.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SectionTwoColumnsContainer=(0,_hoc_withCustomTheme__WEBPACK_IMPORTED_MODULE_2__.u)((({sectionContainerSx:sectionContainerSx,firstColumn:firstColumn,secondColumn:secondColumn,disableContainerPaddings:disableContainerPaddings})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SectionContainer__WEBPACK_IMPORTED_MODULE_1__.S,{twoColumns:!0,sx:sectionContainerSx,disableContainerPaddings:disableContainerPaddings,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{flex:"1 1 0",width:{xs:"100%",sm:"50%"}},children:firstColumn}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{flex:"1 1 0",width:{xs:"100%",sm:"50%"}},children:secondColumn})]})));try{SectionTwoColumnsContainer.displayName="SectionTwoColumnsContainer",SectionTwoColumnsContainer.__docgenInfo={description:"",displayName:"SectionTwoColumnsContainer",props:{sectionContainerSx:{defaultValue:null,description:"",name:"sectionContainerSx",required:!1,type:{name:"SxProps<{}>"}},firstColumn:{defaultValue:null,description:"",name:"firstColumn",required:!0,type:{name:"ReactNode"}},secondColumn:{defaultValue:null,description:"",name:"secondColumn",required:!0,type:{name:"ReactNode"}},disableContainerPaddings:{defaultValue:null,description:"",name:"disableContainerPaddings",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/components/LandingSections/components/SectionTwoColumnsContainer.tsx#SectionTwoColumnsContainer"]={docgenInfo:SectionTwoColumnsContainer.__docgenInfo,name:"SectionTwoColumnsContainer",path:"src/packages/components/LandingSections/components/SectionTwoColumnsContainer.tsx#SectionTwoColumnsContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/components/LandingSections/icons/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{x:function(){return iconBase}});var _path,react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var step2_path,SvgStep1=function SvgStep1(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},props),_path||(_path=react.createElement("path",{fill:"#fff",d:"M9.28 22.426v-20.1l.96 1.02H4.33v-1.92h7.11v21H9.28ZM18.08 22.576c-.44 0-.82-.16-1.14-.48-.3-.32-.45-.71-.45-1.17 0-.48.15-.87.45-1.17.32-.3.7-.45 1.14-.45.44 0 .81.15 1.11.45.32.3.48.69.48 1.17 0 .46-.16.85-.48 1.17-.3.32-.67.48-1.11.48Z"})))};function step2_extends(){return step2_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},step2_extends.apply(this,arguments)}var step3_path,SvgStep2=function SvgStep2(props){return react.createElement("svg",step2_extends({xmlns:"http://www.w3.org/2000/svg",width:22,height:22,fill:"none"},props),step2_path||(step2_path=react.createElement("path",{fill:"#0B4E83",d:"M.843 21.516v-1.53l8.73-8.55c.8-.78 1.4-1.46 1.8-2.04.4-.6.67-1.16.81-1.68s.21-1.01.21-1.47c0-1.22-.42-2.18-1.26-2.88-.82-.7-2.04-1.05-3.66-1.05-1.24 0-2.34.19-3.3.57-.94.38-1.75.97-2.43 1.77l-1.53-1.32c.82-.96 1.87-1.7 3.15-2.22 1.28-.52 2.71-.78 4.29-.78 1.42 0 2.65.23 3.69.69 1.04.44 1.84 1.09 2.4 1.95.58.86.87 1.87.87 3.03 0 .68-.1 1.35-.3 2.01-.18.66-.52 1.36-1.02 2.1-.48.72-1.19 1.54-2.13 2.46l-8.01 7.86-.6-.84h13.02v1.92H.843ZM20.197 21.666c-.44 0-.82-.16-1.14-.48-.3-.32-.45-.71-.45-1.17 0-.48.15-.87.45-1.17.32-.3.7-.45 1.14-.45.44 0 .81.15 1.11.45.32.3.48.69.48 1.17 0 .46-.16.85-.48 1.17-.3.32-.67.48-1.11.48Z"})))};function step3_extends(){return step3_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},step3_extends.apply(this,arguments)}var step4_path,SvgStep3=function SvgStep3(props){return react.createElement("svg",step3_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},props),step3_path||(step3_path=react.createElement("path",{fill:"#0B4E83",d:"M8.843 22.59c-1.52 0-2.96-.24-4.32-.72-1.34-.5-2.42-1.16-3.24-1.98l1.05-1.71c.68.7 1.59 1.28 2.73 1.74 1.16.46 2.42.69 3.78.69 1.74 0 3.07-.38 3.99-1.14.94-.76 1.41-1.78 1.41-3.06s-.46-2.3-1.38-3.06c-.9-.76-2.33-1.14-4.29-1.14h-1.5v-1.59l6.48-8.13.3.84h-11.7V1.41h13.5v1.53l-6.48 8.13-1.05-.69h.81c2.52 0 4.4.56 5.64 1.68 1.26 1.12 1.89 2.56 1.89 4.32 0 1.18-.28 2.24-.84 3.18-.56.94-1.41 1.68-2.55 2.22-1.12.54-2.53.81-4.23.81ZM21.127 22.56c-.44 0-.82-.16-1.14-.48-.3-.32-.45-.71-.45-1.17 0-.48.15-.87.45-1.17.32-.3.7-.45 1.14-.45.44 0 .81.15 1.11.45.32.3.48.69.48 1.17 0 .46-.16.85-.48 1.17-.3.32-.67.48-1.11.48Z"})))};function step4_extends(){return step4_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},step4_extends.apply(this,arguments)}var step5_path,SvgStep4=function SvgStep4(props){return react.createElement("svg",step4_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},props),step4_path||(step4_path=react.createElement("path",{fill:"#0B4E83",d:"M.005 16.905v-1.56l11.13-13.92h2.4l-11.04 13.92-1.17-.36h16.89v1.92H.005Zm11.85 5.52v-5.52l.06-1.92v-4.86h2.1v12.3h-2.16ZM22.405 22.575c-.44 0-.82-.16-1.14-.48-.3-.32-.45-.71-.45-1.17 0-.48.15-.87.45-1.17.32-.3.7-.45 1.14-.45.44 0 .81.15 1.11.45.32.3.48.69.48 1.17 0 .46-.16.85-.48 1.17-.3.32-.67.48-1.11.48Z"})))};function step5_extends(){return step5_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},step5_extends.apply(this,arguments)}var step6_path,SvgStep5=function SvgStep5(props){return react.createElement("svg",step5_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},props),step5_path||(step5_path=react.createElement("path",{fill:"#0B4E83",d:"M8.979 22.59c-1.5 0-2.93-.24-4.29-.72-1.36-.5-2.44-1.16-3.24-1.98l1.05-1.71c.66.7 1.56 1.28 2.7 1.74 1.16.46 2.41.69 3.75.69 1.78 0 3.13-.39 4.05-1.17.94-.8 1.41-1.84 1.41-3.12 0-.9-.22-1.67-.66-2.31-.42-.66-1.14-1.17-2.16-1.53-1.02-.36-2.42-.54-4.2-.54h-4.47l1.08-10.53h11.49v1.92H4.869l1.11-1.05-.93 8.82-1.11-1.08h3.93c2.12 0 3.82.26 5.1.78 1.28.52 2.2 1.25 2.76 2.19.58.92.87 2 .87 3.24 0 1.18-.28 2.26-.84 3.24-.56.96-1.4 1.72-2.52 2.28-1.12.56-2.54.84-4.26.84ZM20.96 22.56c-.44 0-.82-.16-1.14-.48-.3-.32-.45-.71-.45-1.17 0-.48.15-.87.45-1.17.32-.3.7-.45 1.14-.45.44 0 .81.15 1.11.45.32.3.48.69.48 1.17 0 .46-.16.85-.48 1.17-.3.32-.67.48-1.11.48Z"})))};function step6_extends(){return step6_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},step6_extends.apply(this,arguments)}var step7_path,SvgStep6=function SvgStep6(props){return react.createElement("svg",step6_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},props),step6_path||(step6_path=react.createElement("path",{fill:"#0B4E83",d:"M9.718 22.68c-1.86 0-3.43-.41-4.71-1.23-1.28-.84-2.25-2.04-2.91-3.6-.66-1.58-.99-3.47-.99-5.67 0-2.38.4-4.37 1.2-5.97.82-1.62 1.95-2.84 3.39-3.66 1.44-.82 3.11-1.23 5.01-1.23.94 0 1.84.09 2.7.27.86.18 1.62.47 2.28.87l-.87 1.74c-.54-.36-1.16-.61-1.86-.75a9.94 9.94 0 0 0-2.22-.24c-2.26 0-4.07.72-5.43 2.16-1.34 1.44-2.01 3.59-2.01 6.45 0 .44.02.99.06 1.65.06.64.18 1.28.36 1.92l-.75-.57c.22-1.04.65-1.92 1.29-2.64.64-.74 1.44-1.3 2.4-1.68.96-.38 2.01-.57 3.15-.57 1.4 0 2.63.26 3.69.78s1.89 1.25 2.49 2.19c.6.94.9 2.05.9 3.33 0 1.3-.31 2.44-.93 3.42-.62.96-1.48 1.71-2.58 2.25-1.08.52-2.3.78-3.66.78Zm-.09-1.83c1 0 1.88-.18 2.64-.54.78-.38 1.39-.91 1.83-1.59.44-.7.66-1.51.66-2.43 0-1.38-.48-2.48-1.44-3.3-.94-.82-2.22-1.23-3.84-1.23-1.08 0-2.02.2-2.82.6-.8.4-1.43.95-1.89 1.65-.46.68-.69 1.46-.69 2.34 0 .76.21 1.49.63 2.19.42.68 1.04 1.24 1.86 1.68.84.42 1.86.63 3.06.63ZM21.302 22.65c-.44 0-.82-.16-1.14-.48-.3-.32-.45-.71-.45-1.17 0-.48.15-.87.45-1.17.32-.3.7-.45 1.14-.45.44 0 .81.15 1.11.45.32.3.48.69.48 1.17 0 .46-.16.85-.48 1.17-.3.32-.67.48-1.11.48Z"})))};function step7_extends(){return step7_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},step7_extends.apply(this,arguments)}var diploma_path,_path2,SvgStep7=function SvgStep7(props){return react.createElement("svg",step7_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},props),step7_path||(step7_path=react.createElement("path",{fill:"#D32F2F",d:"m6.343 22.426 9.06-20.04.66.96H3.073l1.11-1.05v4.98h-2.13v-5.85h15.42v1.53l-8.79 19.47h-2.34ZM20.357 22.576c-.44 0-.82-.16-1.14-.48-.3-.32-.45-.71-.45-1.17 0-.48.15-.87.45-1.17.32-.3.7-.45 1.14-.45.44 0 .81.15 1.11.45.32.3.48.69.48 1.17 0 .46-.16.85-.48 1.17-.3.32-.67.48-1.11.48Z"})))};function diploma_extends(){return diploma_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},diploma_extends.apply(this,arguments)}var shield_path,shield_path2,_path3,SvgDiploma=function SvgDiploma(props){return react.createElement("svg",diploma_extends({xmlns:"http://www.w3.org/2000/svg",width:40,height:41,fill:"none"},props),diploma_path||(diploma_path=react.createElement("path",{fill:"#ED6C02",d:"M3.333 13.833V20.5c0 4.714 0 7.071 1.465 8.535.794.794 1.85 1.158 3.402 1.324a4.93 4.93 0 0 1 .323-.389c.194-.213.44-.455.677-.69l2.488-2.453.92-.931a7.502 7.502 0 0 1 14.785 0l.919.93 2.488 2.455c.238.234.483.476.677.69.083.09.2.222.323.388 1.552-.166 2.608-.53 3.402-1.324 1.465-1.464 1.465-3.821 1.465-8.535v-6.667c0-4.714 0-7.07-1.465-8.535-1.464-1.465-3.821-1.465-8.535-1.465H13.333c-4.714 0-7.07 0-8.535 1.465-1.465 1.464-1.465 3.821-1.465 8.535Z",opacity:.5})),_path2||(_path2=react.createElement("path",{fill:"#ED6C02",d:"M11.667 15.083a1.25 1.25 0 0 0 0 2.5h16.666a1.25 1.25 0 1 0 0-2.5H11.667ZM13.75 10.5c0-.69.56-1.25 1.25-1.25h10a1.25 1.25 0 0 1 0 2.5H15c-.69 0-1.25-.56-1.25-1.25ZM15.002 27.03a5 5 0 1 0 9.996.275 5 5 0 0 0-9.996-.276ZM12.793 29.249l-1.8 1.776c-.541.532-.811.799-.905 1.024-.213.514-.03 1.084.433 1.355.204.118.57.155 1.305.229.414.042.621.063.795.126.389.142.69.44.835.823.064.171.085.376.128.784.075.724.112 1.086.232 1.287.274.457.852.636 1.374.427.228-.093.498-.359 1.039-.892l1.8-1.783a7.515 7.515 0 0 1-5.236-5.156ZM21.97 34.405l1.802 1.783c.54.533.81.8 1.038.892.521.21 1.1.03 1.374-.427.12-.201.157-.563.232-1.287.043-.408.064-.613.128-.784.144-.383.446-.681.835-.823.173-.063.38-.084.795-.126.734-.074 1.101-.11 1.305-.23.463-.27.646-.84.433-1.354-.094-.225-.364-.492-.904-1.024l-1.8-1.776a7.515 7.515 0 0 1-5.237 5.156Z"})))};function shield_extends(){return shield_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},shield_extends.apply(this,arguments)}var verified_check_path,verified_check_path2,SvgShield=function SvgShield(props){return react.createElement("svg",shield_extends({xmlns:"http://www.w3.org/2000/svg",width:40,height:41,fill:"none"},props),shield_path||(shield_path=react.createElement("path",{fill:"#ED6C02",d:"M5 20.485c0 9.397 7.065 13.957 11.498 15.894 1.202.525 1.803.788 3.502.788V13.833l-15 5v1.652Z"})),shield_path2||(shield_path2=react.createElement("path",{fill:"#ED6C02",d:"M23.502 36.379C27.935 34.442 35 29.882 35 20.486v-1.653l-15-5v23.334c1.699 0 2.3-.263 3.502-.788ZM14.73 5.174l-.955.327c-5.011 1.716-7.517 2.573-8.146 3.47C5 9.867 5 12.53 5 17.86v.972l15-5v-10c-1.352 0-2.658.447-5.27 1.341Z",opacity:.5})),_path3||(_path3=react.createElement("path",{fill:"#ED6C02",d:"m26.225 5.501-.955-.327c-2.612-.894-3.918-1.34-5.27-1.34v10l15 5v-.973c0-5.33 0-7.994-.63-8.89-.628-.897-3.134-1.754-8.145-3.47Z"})))};function verified_check_extends(){return verified_check_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},verified_check_extends.apply(this,arguments)}var SvgVerifiedCheck=function SvgVerifiedCheck(props){return react.createElement("svg",verified_check_extends({xmlns:"http://www.w3.org/2000/svg",width:40,height:41,fill:"none"},props),verified_check_path||(verified_check_path=react.createElement("path",{fill:"#ED6C02",d:"M15.987 5.834c-.406.346-.609.519-.825.664a4.522 4.522 0 0 1-1.642.68c-.256.05-.522.072-1.053.114-1.336.107-2.004.16-2.56.357a4.521 4.521 0 0 0-2.758 2.757c-.197.557-.25 1.225-.357 2.56-.042.532-.064.798-.114 1.054a4.522 4.522 0 0 1-.68 1.642c-.145.216-.318.42-.664.825-.87 1.02-1.304 1.53-1.559 2.063a4.521 4.521 0 0 0 0 3.9c.255.533.69 1.043 1.559 2.063.346.405.519.608.664.825.333.497.564 1.055.68 1.642.05.256.072.521.114 1.053.107 1.336.16 2.004.357 2.56a4.521 4.521 0 0 0 2.757 2.758c.557.197 1.225.25 2.56.357.532.042.798.064 1.054.114a4.52 4.52 0 0 1 1.642.68c.216.145.42.318.825.664 1.02.87 1.53 1.304 2.063 1.559 1.233.589 2.667.589 3.9 0 .533-.255 1.043-.69 2.063-1.559.405-.346.608-.519.825-.664a4.52 4.52 0 0 1 1.642-.68c.256-.05.521-.072 1.053-.114 1.336-.107 2.004-.16 2.56-.357a4.522 4.522 0 0 0 2.758-2.757c.197-.557.25-1.225.357-2.56.042-.532.064-.798.114-1.054a4.52 4.52 0 0 1 .68-1.642c.145-.217.318-.42.664-.825.87-1.02 1.304-1.53 1.559-2.063a4.522 4.522 0 0 0 0-3.9c-.255-.533-.69-1.043-1.559-2.063-.346-.406-.519-.609-.664-.825a4.52 4.52 0 0 1-.68-1.642c-.05-.256-.072-.522-.114-1.053-.107-1.336-.16-2.004-.357-2.56a4.521 4.521 0 0 0-2.757-2.758c-.557-.197-1.225-.25-2.56-.357-.532-.042-.798-.064-1.054-.114a4.521 4.521 0 0 1-1.642-.68c-.217-.145-.42-.318-.825-.664-1.02-.87-1.53-1.304-2.063-1.559a4.521 4.521 0 0 0-3.9 0c-.533.255-1.043.69-2.063 1.559Z",opacity:.5})),verified_check_path2||(verified_check_path2=react.createElement("path",{fill:"#ED6C02",d:"M27.29 16.938a1.356 1.356 0 1 0-1.919-1.918l-8.084 8.084-2.658-2.658a1.356 1.356 0 0 0-1.918 1.918l3.617 3.617c.53.53 1.389.53 1.919 0l9.042-9.043Z"})))},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const iconBase={step1:(0,jsx_runtime.jsx)(SvgStep1,{}),step2:(0,jsx_runtime.jsx)(SvgStep2,{}),step3:(0,jsx_runtime.jsx)(SvgStep3,{}),step4:(0,jsx_runtime.jsx)(SvgStep4,{}),step5:(0,jsx_runtime.jsx)(SvgStep5,{}),step6:(0,jsx_runtime.jsx)(SvgStep6,{}),step7:(0,jsx_runtime.jsx)(SvgStep7,{}),diplomaTwoTone:(0,jsx_runtime.jsx)(SvgDiploma,{}),shieldTwoTone:(0,jsx_runtime.jsx)(SvgShield,{}),verifiedCheckTwoTone:(0,jsx_runtime.jsx)(SvgVerifiedCheck,{})}}}]);