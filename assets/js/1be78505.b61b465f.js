"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[129514,130889],{451272:(e,t,n)=>{n.r(t),n.d(t,{default:()=>xe});var r=n(667294),a=n(386010),o=n(789712),l=n(565319),c=n(956391),i=n(353605),s=n(827391),d=n(625682),u=n(794672),m=n(592210),b=n(306379),p=n(358010);const f="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function g(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,r.useState)(!1),a=(0,r.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,b.Ct)();return(0,b.RF)((({scrollY:t},r)=>{const o=null==r?void 0:r.scrollY;o&&(a.current?a.current=!1:t>=o?(l(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,p.S)((e=>{e.location.hash&&(a.current=!0,n(!1))})),{shown:t,scrollToTop:()=>o(0)}}({threshold:300});return r.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,a.Z)("clean-btn",l.k.common.backToTopButton,f,e&&h),type:"button",onClick:t})}var v=n(616550),E=n(424683),y=n(986016),k=n(949572);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){return r.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S="collapseSidebarButton_PEFL",C="collapseSidebarButtonIcon_kv0_";function w({onClick:e}){return r.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,a.Z)("button button--secondary button--outline",S),onClick:e},r.createElement(_,{className:C}))}var I=n(864738),P=n(337806);const j=Symbol("EmptyContext"),N=r.createContext(j);function x({children:e}){const[t,n]=(0,r.useState)(null),a=(0,r.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return r.createElement(N.Provider,{value:a},e)}var T=n(952647),Z=n(287275),L=n(931984),A=n(430358);function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function F({categoryLabel:e,onClick:t}){return r.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function H(e){var{item:t,onItemClick:n,activePath:o,level:c,index:s}=e,d=B(e,["item","onItemClick","activePath","level","index"]);const{items:u,label:m,collapsible:b,className:p,href:f}=t,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,y.L)(),g=function(e){const t=(0,A.Z)();return(0,r.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),v=(0,i._F)(t,o),E=(0,Z.Mg)(f,o),{collapsed:k,setCollapsed:O}=(0,T.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:_,setExpandedItem:S}=function(){const e=(0,r.useContext)(N);if(e===j)throw new P.i6("DocSidebarItemsExpandedStateProvider");return e}(),C=(e=!k)=>{S(e?null:s),O(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const a=(0,P.D9)(e);(0,r.useEffect)((()=>{e&&!a&&t&&n(!1)}),[e,a,t,n])}({isActive:v,collapsed:k,updateCollapsed:C}),(0,r.useEffect)((()=>{b&&null!=_&&_!==s&&h&&O(!0)}),[b,_,s,O,h]),r.createElement("li",{className:(0,a.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},p)},r.createElement("div",{className:(0,a.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":E})},r.createElement(L.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){M(e,t,n[t])}))}return e}({className:(0,a.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":v}),onClick:b?e=>{null==n||n(t),f?C(!1):(e.preventDefault(),C())}:()=>{null==n||n(t)},"aria-current":E?"page":void 0,"aria-expanded":b?!k:void 0,href:b?null!=g?g:"#":g},d),m),f&&b&&r.createElement(F,{categoryLabel:m,onClick:e=>{e.preventDefault(),C()}})),r.createElement(T.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},r.createElement(te,{items:u,tabIndex:k?-1:0,onItemClick:n,activePath:o,level:c+1})))}var D=n(847785),W=n(340379);const R="menuExternalLink_NmtK";function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function U(e){var{item:t,onItemClick:n,activePath:o,level:c,index:s}=e,d=z(e,["item","onItemClick","activePath","level","index"]);const{href:u,label:m,className:b,autoAddBaseUrl:p}=t,f=(0,i._F)(t,o),h=(0,D.Z)(u);return r.createElement("li",{className:(0,a.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:m},r.createElement(L.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){V(e,t,n[t])}))}return e}({className:(0,a.Z)("menu__link",!h&&R,{"menu__link--active":f}),autoAddBaseUrl:p,"aria-current":f?"page":void 0,to:u},h&&{onClick:n?()=>n(t):void 0},d),m,!h&&r.createElement(W.Z,null)))}const K="menuHtmlItem_M9Kj";function q({item:e,level:t,index:n}){const{value:o,defaultStyle:c,className:i}=e;return r.createElement("li",{className:(0,a.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(t),c&&[K,"menu__list-item"],i),key:n,dangerouslySetInnerHTML:{__html:o}})}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){G(e,t,n[t])}))}return e}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function J(e){var{item:t}=e,n=X(e,["item"]);switch(t.type){case"category":return r.createElement(H,Y({item:t},n));case"html":return r.createElement(q,Y({item:t},n));default:return r.createElement(U,Y({item:t},n))}}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ee(e){var{items:t}=e,n=$(e,["items"]);return r.createElement(x,null,t.map(((e,t)=>r.createElement(J,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Q(e,t,n[t])}))}return e}({key:t,item:e,index:t},n)))))}const te=(0,r.memo)(ee),ne="menu_SIkG",re="menuWithAnnouncementBar_GW3s";function ae({path:e,sidebar:t,className:n}){const o=function(){const{isActive:e}=(0,I.nT)(),[t,n]=(0,r.useState)(e);return(0,b.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return r.createElement("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,a.Z)("menu thin-scrollbar",ne,o&&re,n)},r.createElement("ul",{className:(0,a.Z)(l.k.docs.docSidebarMenu,"menu__list")},r.createElement(te,{items:t,activePath:e,level:1})))}const oe="sidebar_njMd",le="sidebarWithHideableNavbar_wUlq",ce="sidebarHidden_VK0M",ie="sidebarLogo_isFc";function se({path:e,sidebar:t,onCollapse:n,isHidden:o}){const{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:c}}}=(0,y.L)();return r.createElement("div",{className:(0,a.Z)(oe,l&&le,o&&ce)},l&&r.createElement(k.Z,{tabIndex:-1,className:ie}),r.createElement(ae,{path:e,sidebar:t}),c&&r.createElement(w,{onClick:n}))}const de=r.memo(se);var ue=n(636847),me=n(29180);const be=({sidebar:e,path:t})=>{const n=(0,me.e)();return r.createElement("ul",{className:(0,a.Z)(l.k.docs.docSidebarMenu,"menu__list")},r.createElement(te,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function pe(e){return r.createElement(ue.Zo,{component:be,props:e})}const fe=r.memo(pe);function he(e){const t=(0,E.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(de,e),a&&r.createElement(fe,e))}const ge="expandButton_m80_",ve="expandButtonIcon_BlDH";function Ee({toggleSidebar:e}){return r.createElement("div",{className:ge,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},r.createElement(_,{className:ve}))}const ye={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function ke({children:e}){const t=(0,d.V)();var n;return r.createElement(r.Fragment,{key:null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"noSidebar"},e)}function Oe({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:o}=(0,v.TH)(),[c,i]=(0,r.useState)(!1),s=(0,r.useCallback)((()=>{c&&i(!1),n((e=>!e))}),[n,c]);return r.createElement("aside",{className:(0,a.Z)(l.k.docs.docSidebarContainer,ye.docSidebarContainer,t&&ye.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ye.docSidebarContainer)&&t&&i(!0)}},r.createElement(ke,null,r.createElement("div",{className:(0,a.Z)(ye.sidebarViewport,c&&ye.sidebarViewportHidden)},r.createElement(he,{sidebar:e,path:o,onCollapse:s,isHidden:c}),c&&r.createElement(Ee,{toggleSidebar:s}))))}const _e={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Se({hiddenSidebarContainer:e,children:t}){const n=(0,d.V)();return r.createElement("main",{className:(0,a.Z)(_e.docMainContainer,(e||!n)&&_e.docMainContainerEnhanced)},r.createElement("div",{className:(0,a.Z)("container padding-top--md padding-bottom--lg",_e.docItemWrapper,e&&_e.docItemWrapperEnhanced)},t))}const Ce="docPage__5DB",we="docsWrapper_BCFX";function Ie({children:e}){const t=(0,d.V)(),[n,a]=(0,r.useState)(!1);return r.createElement(u.Z,{wrapperClassName:we},r.createElement(g,null),r.createElement("div",{className:Ce},t&&r.createElement(Oe,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:a}),r.createElement(Se,{hiddenSidebarContainer:n},e)))}var Pe=n(130889),je=n(136894);function Ne(e){const{versionMetadata:t}=e;return r.createElement(r.Fragment,null,r.createElement(je.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),r.createElement(o.d,null,t.noIndex&&r.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function xe(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return r.createElement(Pe.default,null);const{docElement:c,sidebarName:u,sidebarItems:m}=n;return r.createElement(r.Fragment,null,r.createElement(Ne,e),r.createElement(o.FG,{className:(0,a.Z)(l.k.wrapper.docsPages,l.k.page.docsDocPage,e.versionMetadata.className)},r.createElement(s.q,{version:t},r.createElement(d.b,{name:u,items:m},r.createElement(Ie,null,c)))))}},130889:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(667294),a=n(592210),o=n(789712),l=n(794672);function c(){return r.createElement(r.Fragment,null,r.createElement(o.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),r.createElement(l.Z,null,r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},827391:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>l});var r=n(667294),a=n(337806);const o=r.createContext(null);function l({children:e,version:t}){return r.createElement(o.Provider,{value:t},e)}function c(){const e=(0,r.useContext)(o);if(null===e)throw new a.i6("DocsVersionProvider");return e}}}]);