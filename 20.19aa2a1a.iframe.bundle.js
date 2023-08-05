"use strict";(self.webpackChunkmedical_information_frontend=self.webpackChunkmedical_information_frontend||[]).push([[20],{"./src/components/footer/footer.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return footer_footer}});var dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),logo=__webpack_require__("./src/shared/logo/index.tsx"),routes=__webpack_require__("./src/utils/routes.ts"),links=[{_id:1,heading:"Политика конфиденциальности",url:__webpack_require__.p+"836434756d7f55bcf2aa.pdf",isRoute:!1},{_id:2,heading:"Пользовательское соглашение",url:__webpack_require__.p+"57635f1adc8fe542a693.pdf",isRoute:!1}],footer_module={heading:"footer_heading__Fft94",logoName:"footer_logoName__8AvpG",wrapper:"footer_wrapper__3XTBO",warning:"footer_warning__G7OLn",contacts:"footer_contacts__t8Z1Q",logoLink:"footer_logoLink__9nhsq",content:"footer_content__Qe73w",logo:"footer_logo__ke--D",links:"footer_links__sRCmB",link:"footer_link__DsQ78",footerLinkItem:"footer_footerLinkItem__wyNa4",copyright:"footer_copyright__izYg2",email:"footer_email__a5tpY"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),footer_links=links.map((function(_ref){var _id=_ref._id,heading=_ref.heading,url=_ref.url,isRoute=_ref.isRoute;return(0,jsx_runtime.jsx)("li",{className:footer_module.footerLinkItem,children:isRoute?(0,jsx_runtime.jsx)(dist.rU,{className:footer_module.link,to:url,target:"_blank",rel:"noreferrer",children:heading}):(0,jsx_runtime.jsx)("a",{className:footer_module.link,href:url,target:"_blank",rel:"noreferrer",children:heading})},_id)})),footer_footer=function Footer(){return(0,jsx_runtime.jsx)("footer",{children:(0,jsx_runtime.jsxs)("div",{className:footer_module.wrapper,children:[(0,jsx_runtime.jsxs)("div",{className:footer_module.warning,children:[(0,jsx_runtime.jsx)("h2",{className:footer_module.heading,children:"Имеются противопоказания. Необходима консультация специалиста."}),(0,jsx_runtime.jsx)("p",{className:footer_module.paragraph,children:"Информация на сайте не является руководством по самолечению и представлена для ознакомления.\nКоманда сайта настоятельно рекомендует обратиться к профильному специалисту при подозрении на какое-либо заболевание."})]}),(0,jsx_runtime.jsxs)("div",{className:footer_module.content,children:[(0,jsx_runtime.jsx)("div",{className:footer_module.logo,children:(0,jsx_runtime.jsxs)(dist.rU,{className:footer_module.logoLink,to:routes.Z.home,children:[(0,jsx_runtime.jsx)(logo.T,{theme:"dark"}),(0,jsx_runtime.jsx)("span",{className:footer_module.logoName,children:"медицинский информационный портал"})]})}),(0,jsx_runtime.jsx)("ul",{className:footer_module.links,children:footer_links}),(0,jsx_runtime.jsxs)("ul",{className:footer_module.contacts,children:[(0,jsx_runtime.jsx)("li",{className:footer_module.copyright,children:"© 2023 Стетоскоп"}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{className:footer_module.email,href:"mailto:admin@stethoscope-portal.ru",lang:"en",children:"admin@stethoscope-portal.ru"})})]})]})]})})};try{footer.displayName="footer",footer.__docgenInfo={description:"",displayName:"footer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/footer/footer.tsx#footer"]={docgenInfo:footer.__docgenInfo,name:"footer",path:"src/components/footer/footer.tsx#footer"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/logo/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:function(){return Logo}});__webpack_require__("./node_modules/react/index.js");var images_Logo=__webpack_require__.p+"static/media/Logo.35da68602049396eacbba0728045727d.svg";var Logo_light=__webpack_require__.p+"static/media/Logo-light.20c7990876dbb621dab18578076d1184.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Logo=function Logo(_ref){var isHeading=_ref.isHeading,extClassName=_ref.extClassName,_ref$theme=_ref.theme,theme=void 0===_ref$theme?"light":_ref$theme;return isHeading?(0,jsx_runtime.jsx)("h1",{className:extClassName,children:"light"===theme?(0,jsx_runtime.jsx)("img",{src:Logo_light,alt:"логотип"}):(0,jsx_runtime.jsx)("img",{src:images_Logo,alt:"логотип"})}):(0,jsx_runtime.jsx)("div",{className:extClassName,children:(0,jsx_runtime.jsx)("img",{src:images_Logo,alt:"логотип"})})};try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{isHeading:{defaultValue:null,description:"",name:"isHeading",required:!1,type:{name:"boolean"}},extClassName:{defaultValue:null,description:"",name:"extClassName",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/logo/index.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/shared/logo/index.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/routes.ts":function(__unused_webpack_module,__webpack_exports__){var routes=Object.freeze({home:"/",signup:"/sign-up",signin:"/sign-in",password:{reset:"/reset-password",resetConfirmation:"/reset-password-confirmation"},news:{route:"/news",name:"Новости"},articles:{route:"/articles",name:"Статьи"},podcasts:{route:"/podcasts",name:"Подкасты"},drugs:{route:"/drugs",name:"Лекарства и БАД"},doctorQuestion:{route:"/doctor",name:"Вопрос врачу"},about:{route:"/about",name:"О портале"},profile:"/profile",favorites:"favorites",publication:"publication",authors:{route:"/authors",name:"Авторам"}});__webpack_exports__.Z=routes}}]);