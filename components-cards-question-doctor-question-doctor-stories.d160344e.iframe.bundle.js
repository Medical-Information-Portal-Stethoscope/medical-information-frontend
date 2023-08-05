/*! For license information please see components-cards-question-doctor-question-doctor-stories.d160344e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkmedical_information_frontend=self.webpackChunkmedical_information_frontend||[]).push([[909],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/components/cards/question-doctor/question-doctor.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return question_doctor_stories}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),icons=__webpack_require__("./src/shared/icons/index.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),button_button=__webpack_require__("./src/shared/buttons/button/button.tsx"),question_doctor_module_heading="question-doctor_heading__YOO5G",question_doctor_module_article="question-doctor_article__Jhkoi",question_doctor_module_info="question-doctor_info__NyfJY",question_doctor_module_button="question-doctor_button__CoXqg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),question_doctor=function CardQuestionDoctor(_ref){var heading=_ref.heading,icon=_ref.icon,extraClass=_ref.extraClass,onClick=_ref.onClick;return(0,jsx_runtime.jsxs)("article",{className:classnames_default()(question_doctor_module_article,extraClass),children:[(0,jsx_runtime.jsxs)("div",{className:question_doctor_module_info,children:[icon,(0,jsx_runtime.jsx)("h3",{className:question_doctor_module_heading,children:heading})]}),(0,jsx_runtime.jsx)(button_button.Z,{extraClass:question_doctor_module_button,label:"Задать вопрос",model:"secondary",size:"small",onClick:onClick})]})};try{questiondoctor.displayName="questiondoctor",questiondoctor.__docgenInfo={description:"",displayName:"questiondoctor",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},extraClass:{defaultValue:null,description:"",name:"extraClass",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cards/question-doctor/question-doctor.tsx#questiondoctor"]={docgenInfo:questiondoctor.__docgenInfo,name:"questiondoctor",path:"src/components/cards/question-doctor/question-doctor.tsx#questiondoctor"})}catch(__react_docgen_typescript_loader_error){}var question_doctor_stories={title:"uikit/Cards/QuestionDoctor",component:question_doctor,tags:["autodocs"],argTypes:{heading:{description:"Заголовок",type:"string"},icon:{description:"Иконка"},extraClass:{description:"Дополнительные стили",type:"string"}}},Default={args:{heading:"Офтальмология",icon:(0,jsx_runtime.jsx)(icons.J,{icon:"OphthalmologyIcon",size:"80",color:"white"})}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    heading: \'Офтальмология\',\n    icon: <Icon icon="OphthalmologyIcon" size="80" color="white" />\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/shared/buttons/button/button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Button}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),button_module={button:"button_button__zGY5l","button--small":"button_button--small__g70Lc","button--medium":"button_button--medium__Z78fI","button--hasBorder":"button_button--hasBorder__ymNPt","button--hasBorder--loading":"button_button--hasBorder--loading__O8SAb",content:"button_content__YwPe9","button--primary":"button_button--primary__vK4Z1",spinnerWrapper:"button_spinnerWrapper__WrfHI",spinner:"button_spinner__jerHF","button--primary--loading":"button_button--primary--loading__jNdTU","button--secondary":"button_button--secondary__Yhpgk","button--secondary--loading":"button_button--secondary--loading__GUSAU","button--tertiary":"button_button--tertiary__JwcgS",spin:"button_spin__VnjR5"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),spinner=(0,jsx_runtime.jsx)("span",{className:button_module.spinnerWrapper,children:(0,jsx_runtime.jsx)("span",{className:button_module.spinner})});function Button(_ref){var _classNames,extraClass=_ref.extraClass,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,label=_ref.label,_ref$model=_ref.model,model=void 0===_ref$model?"primary":_ref$model,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,_ref$hasBorder=_ref.hasBorder,hasBorder=void 0!==_ref$hasBorder&&_ref$hasBorder,customIcon=_ref.customIcon,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,loadingLabel=_ref.loadingLabel,onClick=_ref.onClick;return(0,jsx_runtime.jsx)("button",{className:classnames_default()(button_module.button,extraClass,button_module["button--".concat(model)],button_module["button--".concat(size)],(_classNames={},(0,defineProperty.Z)(_classNames,button_module["button--".concat(model,"--loading")],isLoading),(0,defineProperty.Z)(_classNames,button_module["button--hasBorder"],hasBorder),(0,defineProperty.Z)(_classNames,button_module["button--hasBorder--loading"],isLoading&&hasBorder),_classNames)),type:type,disabled:isDisabled||isLoading,onClick:onClick,children:(0,jsx_runtime.jsxs)("span",{className:button_module.content,children:[isLoading&&"tertiary"!==model&&spinner||null,customIcon||null,isLoading&&loadingLabel?loadingLabel:label]})})}try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{extraClass:{defaultValue:null,description:"",name:"extraClass",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},model:{defaultValue:{value:"primary"},description:"",name:"model",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},hasBorder:{defaultValue:{value:"false"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},customIcon:{defaultValue:null,description:"",name:"customIcon",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingLabel:{defaultValue:null,description:"",name:"loadingLabel",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/buttons/button/button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/shared/buttons/button/button.tsx#button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);