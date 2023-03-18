/*! For license information please see 77711c6c.e305e5c5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[354946],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},601190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(827378);var r=n(603905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"adding-templates",title:"Adding your own Templates",description:"Documentation on Adding your own Templates"},s=void 0,c={unversionedId:"features/software-templates/adding-templates",id:"features/software-templates/adding-templates",title:"Adding your own Templates",description:"Documentation on Adding your own Templates",source:"@site/../docs/features/software-templates/adding-templates.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/adding-templates",permalink:"/docs/features/software-templates/adding-templates",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/adding-templates.md",tags:[],version:"current",frontMatter:{id:"adding-templates",title:"Adding your own Templates",description:"Documentation on Adding your own Templates"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/features/software-templates/configuration"},next:{title:"Writing Templates",permalink:"/docs/features/software-templates/writing-templates"}},p={},u=[],f={toc:u};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Templates are stored in the ",(0,r.kt)("strong",{parentName:"p"},"Software Catalog")," under a kind ",(0,r.kt)("inlineCode",{parentName:"p"},"Template"),". The\nminimum that is needed to define a template is a ",(0,r.kt)("inlineCode",{parentName:"p"},"template.yaml")," file, but it\nwould be good to also have some files in there that can be templated in."),(0,r.kt)("p",null,"A simple ",(0,r.kt)("inlineCode",{parentName:"p"},"template.yaml")," definition might look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scaffolder.backstage.io/v1beta3\nkind: Template\n# some metadata about the template itself\nmetadata:\n  name: v1beta3-demo\n  title: Test Action template\n  description: scaffolder v1beta3 template demo\nspec:\n  owner: backstage/techdocs-core\n  type: service\n\n  # these are the steps which are rendered in the frontend with the form input\n  parameters:\n    - title: Fill in some steps\n      required:\n        - name\n      properties:\n        name:\n          title: Name\n          type: string\n          description: Unique name of the component\n          ui:autofocus: true\n          ui:options:\n            rows: 5\n    - title: Choose a location\n      required:\n        - repoUrl\n      properties:\n        repoUrl:\n          title: Repository Location\n          type: string\n          ui:field: RepoUrlPicker\n          ui:options:\n            allowedHosts:\n              - github.com\n\n  # here's the steps that are executed in series in the scaffolder backend\n  steps:\n    - id: fetch-base\n      name: Fetch Base\n      action: fetch:template\n      input:\n        url: ./template\n        values:\n          name: ${{ parameters.name }}\n\n    - id: fetch-docs\n      name: Fetch Docs\n      action: fetch:plain\n      input:\n        targetPath: ./community\n        url: https://github.com/backstage/community/tree/main/backstage-community-sessions\n\n    - id: publish\n      name: Publish\n      action: publish:github\n      input:\n        allowedHosts: ['github.com']\n        description: This is ${{ parameters.name }}\n        repoUrl: ${{ parameters.repoUrl }}\n\n    - id: register\n      name: Register\n      action: catalog:register\n      input:\n        repoContentsUrl: ${{ steps['publish'].output.repoContentsUrl }}\n        catalogInfoPath: '/catalog-info.yaml'\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-template"},"Template Entity"),"\ncontains more information about the required fields."),(0,r.kt)("p",null,"Once we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"template.yaml")," ready, we can then add it to the software catalog\nfor use by the scaffolder."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: When you add or modify a template, you will need to refresh the location entity.\nOtherwise, Backstage won't display the template in the available templates,\nor it will keep showing the old template. You can refresh the location instance by\ngoing into ",(0,r.kt)("inlineCode",{parentName:"p"},"Catalog")," web page, choosing ",(0,r.kt)("inlineCode",{parentName:"p"},"Locations")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Components"),', and selecting the correct location entity.\nFrom there, you can click on the refresh icon representing "Scheduled entity refresh" action.\nAfterwards, you should see your template updated.')),(0,r.kt)("p",null,"You can add the template files to the catalog through\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/configuration#static-location-configuration"},"static location configuration"),",\nfor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"catalog:\n  locations:\n    - type: url\n      target: https://github.com/backstage/software-templates/blob/main/scaffolder-templates/react-ssr-template/template.yaml\n      rules:\n        - allow: [Template]\n    - type: file\n      target: template.yaml # Backstage will expect the file to be in packages/backend/template.yaml\n")),(0,r.kt)("p",null,"Or you can add the template using the ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog-import")," plugin, which unless\nconfigured differently should be running on ",(0,r.kt)("inlineCode",{parentName:"p"},"/catalog-import"),"."),(0,r.kt)("p",null,"For information about writing your own templates, you can check out the docs\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-templates/writing-templates"},"here")))}m.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,s=o(e),c=1;c<arguments.length;c++){for(var p in i=Object(arguments[c]))n.call(i,p)&&(s[p]=i[p]);if(t){l=t(i);for(var u=0;u<l.length;u++)r.call(i,l[u])&&(s[l[u]]=i[l[u]])}}return s}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,l=60110,s=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),l=u("react.context"),s=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),p=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var w=b.prototype=new g;w.constructor=b,r(w,h.prototype),w.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&!v.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+2];a.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===r?"."+S(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),N(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=r+S(l=e[c],c);s+=N(l,t,n,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(l=e.next()).done;)s+=N(l=l.value,t,n,p=r+S(l,c++),i);else if("object"===l)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function T(e,t,n){if(null==e)return e;var r=[],o=0;return N(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function E(){var e=x.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,n)=>{n(541535)}}]);