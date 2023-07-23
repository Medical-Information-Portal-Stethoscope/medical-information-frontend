/*! For license information please see pages-error-page-notFoundPage-not-found-page-stories.bb20c8a5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkmedical_information_frontend=self.webpackChunkmedical_information_frontend||[]).push([[81],{"./src/pages/error-page/notFoundPage/not-found-page.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return not_found_page_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),error_page=__webpack_require__("./src/pages/error-page/index.tsx");__webpack_require__("./node_modules/react/index.js");var _Default$parameters,_Default$parameters2,_Default$parameters2$,NotFound=__webpack_require__.p+"static/media/NotFound.e2f19617fd1564d443e667e805e1bd3b.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),NotFoundPage=function NotFoundPage(){var message=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Страница была удалена, либо её не существует"}),title=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Страница не найдена"});return(0,jsx_runtime.jsx)(error_page.m,{title:title,message:message,img:NotFound})};try{NotFoundPage.displayName="NotFoundPage",NotFoundPage.__docgenInfo={description:"",displayName:"NotFoundPage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/error-page/notFoundPage/index.tsx#NotFoundPage"]={docgenInfo:NotFoundPage.__docgenInfo,name:"NotFoundPage",path:"src/pages/error-page/notFoundPage/index.tsx#NotFoundPage"})}catch(__react_docgen_typescript_loader_error){}var not_found_page_stories={title:"Components/ErrorPage/NotFoundPage",component:NotFoundPage,tags:["autodocs"],decorators:[function(Story){return(0,jsx_runtime.jsx)(dist.VK,{children:(0,jsx_runtime.jsx)(Story,{})})}]},Default={};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/pages/error-page/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{m:function(){return ErrorPage}});__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),button_button=__webpack_require__("./src/shared/buttons/button/button.tsx"),routes=__webpack_require__("./src/utils/routes.tsx"),styles_module_error__title="styles_error__title__9+xdk",styles_module_error__message="styles_error__message__xMgF3",styles_module_error="styles_error__bGrtd",styles_module_error__image="styles_error__image__MRezC",styles_module_error__button="styles_error__button__zP76U",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ErrorPage=function ErrorPage(_ref){var _ref$img=_ref.img,img=void 0===_ref$img?"":_ref$img,_ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title,_ref$message=_ref.message,message=void 0===_ref$message?"":_ref$message,navigate=(0,dist.s0)();return(0,jsx_runtime.jsxs)("section",{className:styles_module_error,children:[(0,jsx_runtime.jsx)("img",{className:styles_module_error__image,src:img,alt:"Логотип ошибки"}),(0,jsx_runtime.jsx)("h2",{className:styles_module_error__title,children:title}),(0,jsx_runtime.jsx)("p",{className:styles_module_error__message,children:message}),(0,jsx_runtime.jsx)(button_button.Z,{extraClass:styles_module_error__button,label:"Перейти на главную",size:"medium",type:"button",model:"secondary",hasBorder:!0,onClick:function handleClick(){!function handleRedirectToHomepage(){navigate(routes.Z.home)}()}})]})};try{ErrorPage.displayName="ErrorPage",ErrorPage.__docgenInfo={description:"",displayName:"ErrorPage",props:{img:{defaultValue:{value:""},description:"",name:"img",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},message:{defaultValue:{value:""},description:"",name:"message",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/error-page/index.tsx#ErrorPage"]={docgenInfo:ErrorPage.__docgenInfo,name:"ErrorPage",path:"src/pages/error-page/index.tsx#ErrorPage"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/buttons/button/button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Button}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),button_module={button:"button_button__zGY5l","button--small":"button_button--small__g70Lc","button--medium":"button_button--medium__Z78fI","button--hasBorder":"button_button--hasBorder__ymNPt","button--hasBorder--loading":"button_button--hasBorder--loading__O8SAb",content:"button_content__YwPe9","button--primary":"button_button--primary__vK4Z1",spinnerWrapper:"button_spinnerWrapper__WrfHI",spinner:"button_spinner__jerHF","button--primary--loading":"button_button--primary--loading__jNdTU","button--secondary":"button_button--secondary__Yhpgk","button--secondary--loading":"button_button--secondary--loading__GUSAU","button--tertiary":"button_button--tertiary__JwcgS",spin:"button_spin__VnjR5"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),spinner=(0,jsx_runtime.jsx)("span",{className:button_module.spinnerWrapper,children:(0,jsx_runtime.jsx)("span",{className:button_module.spinner})});function Button(_ref){var _classNames,extraClass=_ref.extraClass,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,label=_ref.label,_ref$model=_ref.model,model=void 0===_ref$model?"primary":_ref$model,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,_ref$hasBorder=_ref.hasBorder,hasBorder=void 0!==_ref$hasBorder&&_ref$hasBorder,customIcon=_ref.customIcon,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,loadingLabel=_ref.loadingLabel,onClick=_ref.onClick;return(0,jsx_runtime.jsx)("button",{className:classnames_default()(button_module.button,extraClass,button_module["button--".concat(model)],button_module["button--".concat(size)],(_classNames={},(0,defineProperty.Z)(_classNames,button_module["button--".concat(model,"--loading")],isLoading),(0,defineProperty.Z)(_classNames,button_module["button--hasBorder"],hasBorder),(0,defineProperty.Z)(_classNames,button_module["button--hasBorder--loading"],isLoading&&hasBorder),_classNames)),type:type,disabled:isDisabled||isLoading,onClick:onClick,children:(0,jsx_runtime.jsxs)("span",{className:button_module.content,children:[isLoading&&"tertiary"!==model&&spinner||null,customIcon||null,isLoading&&loadingLabel?loadingLabel:label]})})}try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{extraClass:{defaultValue:null,description:"",name:"extraClass",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},model:{defaultValue:{value:"primary"},description:"",name:"model",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},hasBorder:{defaultValue:{value:"false"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},customIcon:{defaultValue:null,description:"",name:"customIcon",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingLabel:{defaultValue:null,description:"",name:"loadingLabel",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/buttons/button/button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/shared/buttons/button/button.tsx#button"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/routes.tsx":function(__unused_webpack_module,__webpack_exports__){"use strict";__webpack_exports__.Z={home:"/",news:{route:"/news",name:"Новости"},articles:{route:"/articles",name:"Статьи"},podcasts:{route:"/podcasts",name:"Подкасты"},drugs:{route:"/grugs",name:"Лекарства и БАД"},doctorQuestion:{route:"/doctor",name:"Вопрос врачу"},profile:{route:"/profile",name:""}}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);